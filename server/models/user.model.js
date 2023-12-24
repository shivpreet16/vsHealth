const { DataTypes } = require("sequelize");
const { sqlConnect } = require("../utils/connect");
const bcrypt = require("bcrypt")

const connection = sqlConnect();
const Users = connection.define(
  "Users",
  {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    currOTP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

Users.checkOTP = async function (email, otp) {
  try {
    const user = await this.findOne({ where: { email } });
    if (!user) return "User not found";
    const curr = new Date();
    if (curr - user.timestamp > 2 * 60 * 1000) {
      await user.update({ valid: false });
      return "OTP time limit exceeded"
    } 
    if(user.valid!=true){
      return "Request a new OTP"
    }
    if(!bcrypt.compareSync(otp, user.currOTP)){
      return "OTP incorrect"
    }
    await user.update({ valid: false });
    return "success"
  } catch (error) {
    console.error("Error in checkOTP:", error);
    throw error;
  }
};

Users.updateOrCreateByEmail = async function (email, otp) {
  try {
    let user = await this.findOne({ where: { email } });
    const rounds=parseInt(process.env.BCRYPT_SALT_ROUNDS) || 9
    const hashedOTP=bcrypt.hashSync(otp,rounds)
    
    if (!user) {
      user = await this.create({
        email,
        currOTP: hashedOTP,
        timestamp: new Date(),
        valid: true,
      });

      return { user, created: true, isValidRequest: 1 };
    }
    const curr = new Date();
    if (curr - user.timestamp < 2 * 60 * 100) {
      console.log(curr - user.timestamp);
      return { user, created: false, isValidRequest: 0 };
    }

    await user.update({ currOTP: hashedOTP, timestamp: new Date(), valid: true });

    return { user, created: false, isValidRequest: 1 };
  } catch (error) {
    console.error("Error in findOrUpdateByEmail:", error);
    throw error;
  }
};

module.exports = Users;

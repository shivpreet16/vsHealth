# Doctor Appointment Booking Application
#### By Shivpreet Padhi

This repository has the code for the frontend and backend internship assignment by VSCodeHelp. It contains:
1. Source Code
2. Database Queries
3. Dummy data to populate database

## To run locally

### Dependencies

1. Node (^=v16.15.1)
2. MongoDB
3. XAMPP

If the above are correctly installed, this website should work on Windows, Mac, and Linux. The server uses https configuration, so you will need to get a ceritification. Since, it is a local build currently, this [website](https://regery.com/en/security/ssl-tools/self-signed-certificate-generator) can be used.

## Steps to run the code

### 1. Clone the repository

```
git clone https://github.com/shivpreet16/vsHealth.git
```

Open the cloned repository in an editor of your choice.

Alternatively, you can also:

    1.1. Download repository as a zip folder on your local machine

    1.2. Unzip the folder

    1.3. Open the folder in an editor of your choice


### 2. Set up the databases

For a good balance between performance and flexibility, I have used a polygot / hybrid architecture between SQL and NoSQL. Essentially, there are two types of databases at work:

1. **SQL**: I have used SQL for transaction heavy features. This includes clinic data, time slots, and appointment data.

    For the SQL part, I used MySQL from XAMPP. The detailed schema and queries are present in `server > db.md`. However, on running the server, these will get created if they do not already exist. 
    
    So, to run on local, follow the given steps:

   1. Install XAMPP
        
   2. Go to `server > utils > connect.js`

   3. Go ro XAMPP mySql shell and run the following commands:
```
mysql -u root -r
```
```         
CREATE DATABASE VSCODEHELP;
```
   4. In the `sqlConnect` function, ensure that host and dialect are set correctly. If you use password, it can be set with the same set of parameters:

        
        {
            host: "localhost",
            dialect: "mysql",
            logging: false,
            password: "your-password-here",
        }


1. **NoSQL**: I have used NoSQL for variable length data that will not change much and is required by simple retrieval and insertion queries. This includes all the doctor profile related data.
        
    The detailed schema can be seen in `server > models > doctors.model.js`
    
    To run on local, you must have MongoDB Compass installed. If you are on Windows, you will have to exclusively install MongoDB SH.

    After this, go to `server > utils > connect.js` and ensure that the `.connect("localhost path")` is correct in the `mongoConnect()` function.


### 3. Run the server

1. Open terminal and navigate to the folder containing the cloned repo.

2. Move to the server directory
```
cd server
```

3. Install all packages
```
npm install
```
4. Create `.env` file in the server directory. Add the following data
```
PORT=3000
EMAIL_ADDRESS="your-mailer@email.com"
EMAIL_PASSWORD="your-password"
BCRYPT_SALT_ROUNDS=10
JWT_SECRET="your-jwt-secret"
```

If using a gmail, get the app password. Follow these steps:
    1. Go to [google account settings]([url](https://myaccount.google.com/security)).
    2. 2FA > app passwords.
    3. Paste the password you get from google and not the original password.

5. Run the server
```
npm start
```

### 4. Populate the databases

Dummy data is available in `server > utils > constants.js` and there are APIs to populate the database. Follow the given steps:
1. Add doctor details to mongoDB by making a get request to the following:
```
https://localhost:3000/doctor/putDoctors
```
2. To get all the doctorIds from mongoDB, make a get request to the following:
```
https://localhost:3000/doctor/getDocId
```
copy the ids from the console/cmd
3. Paste the array of copied IDs in the constants `server > utils > constants.js` folder.

4. To populate the clinics table, make a get request to the following:
```
https://localhost:3000/clinic/insertClinics
```

5. To populate the slots table, make a get request to the following:
```
https://localhost:3000/doctor/insertSlot
```
```
https://localhost:3000/doctor/insertSlotAv
```
### 5. Run the client

1. Open terminal and navigate to the folder containing the cloned repo.

2. Move to the client directory
```
cd client
```

3. Install all packages
```
npm install
```

4. Run the front-end:
```
npm run dev
```

## Screenshots of working project

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/866d451c-e443-4d7e-8a5c-83d20105d8e4)

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/251b4214-dda6-4974-97f2-4a1ab47d11ce)

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/3a6e6d41-d537-4f2f-aa32-b4597a91cc7c)

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/4cf169a5-9479-4e8f-b64b-2dc02c42716b)

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/25425b2d-7384-44de-a814-614d719f3e9f)

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/b38124c9-29ed-46a6-9149-4ca46082d44b)

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/64b3aa8d-9f78-428c-a615-bff77dcb2ade)

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/9f970811-8f61-45d3-9167-b4c44c06bd89)

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/486c511e-e972-4c4a-b5b8-f4a000da4b22)

![image](https://github.com/shivpreet16/vsHealth/assets/90659312/006d367f-d86d-4632-a9fe-a35c2d047631)

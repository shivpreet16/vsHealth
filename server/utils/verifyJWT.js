function verifyJWT(token) {
  jwt.verify(token, process.env.JWT_SECRET, (err, _) => {
    if (err) {
      console.error("Token verification failed:", err.message);
      return "not verified"
    } else {
        return "verified"
    }
  });
}

module.exports=verifyJWT
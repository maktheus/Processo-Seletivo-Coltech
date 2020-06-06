const fetch = require("node-fetch");
const client_id = "Iv1.fa2696a8a1d6a6b5";
const client_secret = "021d58e251767ed91abd85c7ef5ebeb3c28d1ebc";

module.exports = {
  async git(req, res) {
    
    const  git_name  = req.headers;
    console.log(git_name);
   await fetch(
      `${git_name.git_name}`
    )
      .then((result) => {
        return result.json();
      })
      .then((json) => {
       return res.json(json);
      });
   
  },
};

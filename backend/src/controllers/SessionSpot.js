const Spot = require("../models/Spot");
const User = require("../models/User");
const client_id = "Iv1.fa2696a8a1d6a6b5";
const client_secret = "021d58e251767ed91abd85c7ef5ebeb3c28d1ebc";
module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { user_id } = req.headers;
    const {techs,title,user_git}=req.body;
    const user = await User.findById(user_id);

    const url=(`https://api.github.com/users/${user_git}/repos`)
   
   
    if (!user) {
      return res.status(400).json({ error: "ID NOT FOUND" });
    }

    const spot = await Spot.create({
      title:title,
      techs: techs.split(',').map(tech=>tech.trim()),
      url:url,
      like: 0,
      user: user_id,
      arquivo: filename,
    });

    return res.json(spot);
  },
};

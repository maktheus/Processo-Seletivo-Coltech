const Spot = require('../models/Spot');

module.exports = {
    async update(req,res){
        const {id}= req.params;
        const{filename}=req.file;
        const {title,techs,user_git}=req.body;
        const url=(`https://api.github.com/users/${user_git}/repos`);
        console.log(filename);
        const spots = await Spot.findByIdAndUpdate(id,{
            url:url,
            arquivo:filename,
            title:title,
            techs:techs.split(',').map(tech=>tech.trim()),
        });
        return res.json(spots);
        
    }
}
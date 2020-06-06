const Spot = require('../models/Spot');


module.exports = {
    async store(req,res){
        const{User_id}=req.headers;
        const{spot_id}=req.params;
        const liked=1;
        const spots = await Spot.find({_id:spot_id});   
        const like = spots[0].like +liked;
        await Spot.findByIdAndUpdate(spot_id,{like:like});
        return res.json(spot_id);
        
    },
    async less(req,res){
        const{User_id}=req.headers;
        const{spot_id}=req.params;
        const liked=1;
        const spots = await Spot.find({_id:spot_id});   
        const like = spots[0].like -liked;
        await Spot.findByIdAndUpdate(spot_id,{like:like});
        return res.json(spot_id);
        
    }
};
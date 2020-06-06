const Spot = require("../models/Spot");
module.exports = {
  async destroy(req, res) {
    const { id } = req.params;
    const spots = await Spot.findByIdAndDelete({ _id: id });
    if (!spots) {
      return res.status(400).json({ error: "ID NOT FOUND" });
    }
    return res.json(spots);
  },
};

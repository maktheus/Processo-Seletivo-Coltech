const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    title:String,
    techs:[String],
    url:String,
    arquivo: String,
    like: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

SpotSchema.virtual("arquivo_url").get(function () {
  return `http://localhost:3333/files/${this.arquivo}`;
});
module.exports = mongoose.model("Spot", SpotSchema);

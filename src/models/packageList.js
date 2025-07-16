import { Schema, model } from "mongoose";

const packageListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const PackageList = model("PackageList", packageListSchema);

export default PackageList;

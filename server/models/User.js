import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  cartId: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 12);
  }
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update && this._update.password) {
    this._update.password = await bcryptjs.hash(this._update.password, 12);
  }
  next();
});

userSchema.methods.isPasswordCorrect = async function (
  inputPassword,
  sotredPassword
) {
  return await bcryptjs.compare(inputPassword, sotredPassword);
};

export default model("User", userSchema);

import jwt from "jsonwebtoken";

export const createSendToken = (res, status, user) => {
  const { JWT_EXP, JWT_SECRET, COOKIE_EXP, NODE_ENV } = process.env;

  //! Sign jwt token
  const jwtToken = jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXP,
  });

  //! Set cookie option
  const isProduction = NODE_ENV === "production";

  const cookieOptions = {
    expires: new Date(Date.now() + COOKIE_EXP * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: isProduction ? "None" : "Lax",
  };

  //! Send token using cookie
  res.cookie("jwtToken", jwtToken, cookieOptions);

  user.password = undefined;

  res.status(status).json({ success: true, status, user });
};

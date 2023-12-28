import jwt from 'jsonwebtoken';

export const signJWT = (email: string, time: number) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (time),
        data: email
      }, process.env.JWT_SECRET);

    return token;
}

export const verifyJWT = (JWTtoken: string) => {
  try {
    const decoded = jwt.verify(JWTtoken, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    return null;
  }
}

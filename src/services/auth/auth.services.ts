import jwt from 'jsonwebtoken';

export const signJWT = (email: string, time: number) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (time),
        data: email
      }, process.env.JWT_SECRET);

    return token;
}

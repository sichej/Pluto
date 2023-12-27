import express from 'express';
import userRouter from './routers/user/user.router';


const app = express();
const port = process.env.PORT || 9091;
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

app.use('/api/user', userRouter)


const closeServer = () => {
  server.close();
};

export { app, closeServer };

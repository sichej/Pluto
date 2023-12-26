import express from 'express';

const app = express();
const port = 9091;
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

const closeServer = () => {
  server.close();
};

export { app, closeServer };

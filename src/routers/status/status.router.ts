import express, { Request, Response} from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';

const statusRouter = express.Router();

statusRouter.get('/serverstatus', (req: Request, res: Response) => {
    res.status(HTTP_Codes.OK).send();
});

export default statusRouter;
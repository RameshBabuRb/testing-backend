import express, { Request, Response } from 'express';

const app: any = express()
const port = 8080

app.get('/', (req: Request, res: Response) => {
     res.status(200).json({ message: "connected" })
});
 app.listen(port, () => {
            console.log(`Server is running at ⚡⚡⚡⚡⚡ ${port} ⚡⚡⚡⚡⚡`);
        });

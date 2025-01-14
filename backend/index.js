import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(
        `Server is running on port ${port} and the enviornment is ${process.env.NODE_ENV} mode`
    );
});

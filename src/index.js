import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
import "./config/instrument.js"
import express from 'express';
import * as Sentry from "@sentry/node"
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/db.js';
import { clerkWebhooks } from "./controllers/webhooks.js";

//Initialise Express server

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

//ROUTES

app.get('/', (req, res) => {
    res.send('Hello');
});
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
app.post('/webhooks',clerkWebhooks)

const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})

export default app;
import * as Sentry from "@sentry/node";
import "./config/instrument.js";
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import { clerkWebhooks } from "./controllers/webhooks.js";
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from "./config/cloudinary.js";
import jobRoutes from "./routes/jobRoutes.js"
import userRoutes from './routes/userRoutes.js'
import {clerkMiddleware} from "@clerk/express"

// Initialize Express server
const app = express();

// Connect to MongoDB
connectDB();

await connectCloudinary();

const Origins = ["http://localhost:5173","https://my-job-portal.vercel.app"]

// Middleware
app.use(express.json());
app.use(cors({
    origin: Origins,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }));
app.use(clerkMiddleware());

// Routes
app.get('/', (req, res) => {
    res.send('Server Working');
});

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});

app.post('/webhooks', clerkWebhooks);
app.use('/api/company', companyRoutes);
app.use('/api/jobs',jobRoutes);
app.use('/api/users', userRoutes);

Sentry.setupExpressErrorHandler(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
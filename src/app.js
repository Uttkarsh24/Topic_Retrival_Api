import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json({
    limit: "16kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

//health check route
import healthRouter from "./routes/healthcheck.route.js";
app.use("/api/", healthRouter);

//topic retriever route
import topicRetrieverRouter from "./routes/topicRetriver.routes.js";
app.use("/api/", topicRetrieverRouter);

export default app;
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
 
// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.send("API working successfully");
});

app.listen(port, () => {
    console.log("Server running successfully on port", port);
});


connectDB();

//api endpts
app.use("/api/food",foodRouter);
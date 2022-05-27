import "../config/env.config";
import "../config/mongoose.config";
import "../config/firebase.config";
import routes from "../config/routes";

import express from "express";
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cors)

app.use('/api', routes)
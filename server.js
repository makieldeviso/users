import express from "express";
import url from "url";
import path from "path";

// Express validator
import { body, validationResult } from "express-validator";


// Routers import
import createRouter from "./routes/createRouter.js";
import homeRouter from "./routes/homeRouter.js";
import updateUserRouter from "./routes/updateUserRouter.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

// Views setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  Router setup
app.use('/create', createRouter);
app.use('/update', updateUserRouter);
app.use('/', homeRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import flash from 'express-flash';
import session from 'express-session';
import methodOverride from 'method-override';
import { join } from 'path';
import { registerRoutes } from './routes';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({ secret: 'secret', cookie: { maxAge: 60000 } }));
app.use(flash());
app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'public')));

registerRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

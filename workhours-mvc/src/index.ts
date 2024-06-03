import 'dotenv/config';
import express from 'express';
import { join } from 'path';
import { registerRoutes } from './routes';

const app = express();
const port = process.env.PORT;

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'public')));

registerRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

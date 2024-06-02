import 'dotenv/config';
import express from 'express';
import { join } from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

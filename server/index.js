const app = require('express')();
const upload = require('multer')();

const bodyParser = require('body-parser');
const cors = require('cors');

const UserController = require('./controllers/users');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  return res.json({ message: 'Hello world' });
});

app.use(upload.none());

app.get('/users', UserController.getAllUsers);
app.post('/users', UserController.createUser);
app.post('/users/safe', UserController.createUserSafe);

app.listen(8000);

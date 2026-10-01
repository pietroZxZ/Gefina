import express from 'express'

const app = express();

app.get('/', () => console.log('hello!'));

app.listen(3000);

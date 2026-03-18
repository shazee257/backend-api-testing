import express from 'express'
import router from './routes/auth.route'

const app = express();

app.use(express.json());

app.use('/auth', router);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
});

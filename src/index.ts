import dotenv from 'dotenv'
import express from 'express'
import { AddressInfo } from "net";
import { createRecipe } from './endpoints/CreateRecipe';
import { createUser } from './endpoints/CreateUser';
import { getProfile } from './endpoints/GetProfile';
import { getRecipe } from './endpoints/GetRecipe';
import { getUserProfile } from './endpoints/GetUserProfile';
import { login } from './endpoints/Login';

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.DB_PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.post('/signup', createUser)
app.post('/login', login)
app.get('/user/profile', getProfile)
app.get('/user/:id', getUserProfile)
app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipe)

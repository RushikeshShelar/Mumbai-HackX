import express from 'express';

import authentication from './authentication';
import users from './users';
import userProfile from "./userProfile"

const router = express.Router();


export default (): express.Router => {
    authentication(router);
    users(router);
    userProfile(router);
    
    return router;
};
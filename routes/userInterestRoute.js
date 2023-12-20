import express from 'express';
import {
    getUserInterest,
    getUserInterestById,
    saveUserInterest,
    updateUserInterest,
    deleteUserInterest
} from '../handler/userInterestHandler.js';

const router = express.Router();

router.get('/UserInterest', getUserInterest);
router.get('/UserInterest/:id', getUserInterestById);
router.post('/UserInterest', saveUserInterest);
router.patch('/UserInterest/:id', updateUserInterest);
router.delete('/UserInterest/:id', deleteUserInterest);

export default router;

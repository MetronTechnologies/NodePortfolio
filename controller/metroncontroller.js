import express from 'express';
import { getWork, saveWork, saveComment, getComment } from '../services/metronservices.js';

const metroncontroller = express.Router();

metroncontroller.get('/work/getwork', getWork);
metroncontroller.post('/work/savework', saveWork);

metroncontroller.post('/comment/savecomment', saveComment);
metroncontroller.get('/comment/getcomment', getComment);

export {metroncontroller};




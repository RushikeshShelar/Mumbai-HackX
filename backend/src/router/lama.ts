import express from 'express';
import { generateLearningPath } from "Llama";



export default (router: express.Router) => {
  router.post('/genai', async (req : express.Request, res: express.Response) => {
    const { pace, type } = req.body;
    
  });
};

import express from 'express';
import {
  createQuestion,
  getQuestionsBySubject,
  updateQuestion,
  deleteQuestion,
} from '../controllers/questions'; // Adjust the path as necessary

export default (router: express.Router) => {
  router.post('/questions', createQuestion); // Create new question
  router.get('/questions/:subject', getQuestionsBySubject); // Get questions by subject
  router.put('/questions/:subject', updateQuestion); // Update questions by subject
  router.delete('/questions/:subject', deleteQuestion); // Delete questions by subject
};

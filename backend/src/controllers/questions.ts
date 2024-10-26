import { Request, Response } from 'express';
import Question from '../db/questions'; // Adjust the path as necessary

// Create a new question
export const createQuestion = async (req: Request, res: Response) => {
  try {
    const questionData = req.body; // Expecting { subject: string, questions: Array }
    const newQuestion = await Question.create(questionData);
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Error creating question', error });
  }
};

// Get all questions by subject
export const getQuestionsBySubject = async (req: Request, res: Response) => {
  const { subject } = req.params;
  
  try {
    const questions = await Question.findOne({ subject });
    if (!questions) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

// Update a question
export const updateQuestion = async (req: Request, res: Response) => {
  const { subject } = req.params;
  const updateData = req.body; // Expecting updated question data

  try {
    const updatedQuestion = await Question.findOneAndUpdate(
      { subject },
      updateData,
      { new: true }
    );

    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Error updating question', error });
  }
};

// Delete a question by subject
export const deleteQuestion = async (req: Request, res: Response) => {
  const { subject } = req.params;

  try {
    const deletedQuestion = await Question.findOneAndDelete({ subject });

    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json({ message: 'Subject deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting question', error });
  }
};

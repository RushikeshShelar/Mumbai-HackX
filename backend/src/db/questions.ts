import mongoose, { Document, Schema } from 'mongoose';

interface IQuestion extends Document {
  subject: string;
  questions: {
    question: string;
    options: string[];
    correct_answer: string;
  }[];
}

const questionSchema = new Schema<IQuestion>({
  subject: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: { type: [String], required: true },
      correct_answer: { type: String, required: true },
    },
  ],
});

const Question = mongoose.model<IQuestion>('Question', questionSchema);

export default Question;

import React, { useState, useEffect } from 'react';
import surveyQuestions from './Onboard';
import axios from 'axios';
import Cookies from 'js-cookie';

// Get the 'userId' cookie


function Onboarding() {
  const userId = Cookies.get('userId');
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);


  const [answers, setAnswers] = useState(surveyQuestions.map(q => ({ question: q.question, answer: '' })));

  const handleAnswerChange = (value, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].answer = value;
    setAnswers(updatedAnswers);
  };

  const handleNavigation = (direction) => {
    setCurrentPage(prev => Math.max(0, Math.min(prev + direction, 6)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);

    try {
      const getPreferencesResponse = await axios.post(
        'http://127.0.0.1:8000/api/get-preferences',
        {
          options: answers,
          userId: id
        },
        { headers: { 'Content-Type': 'application/json' } }
      );


      const preferences = getPreferencesResponse.data;
      const pref = {

        style: preferences.preference.learningStyle,
        pace: preferences.preference.learningPace

      }

      console.log(pref);

      // User Profile API
      await axios.post(
        'http://127.0.0.1:8000/api/user-profile',
        { userId: id, preferences: pref, subject: 'Operating System' },
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
      );

      // Learning Path API
      await axios.post(
        'http://127.0.0.1:8000/api/user-profile/new',
        { userId: id, preferences: pref, subject: ['Data Structure', 'Computer Network'] },
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
      );

      console.log('User profile and learning path updated successfully');
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  const renderQuestion = (question, index) => (
    <div key={index} className="mb-4">
      <p className="mb-2">{question.question}</p>
      {question.options ? (
        question.options.map(option => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="radio"
              id={`question-${index}-${option}`}
              name={`question-${index}`}
              value={option}
              checked={answers[index].answer === option}
              onChange={() => handleAnswerChange(option, index)}
              className="mr-2"
            />
            <label htmlFor={`question-${index}-${option}`} className="text-gray-700">{option}</label>
          </div>
        ))
      ) : (
        <input
          type="text"
          value={answers[index].answer}
          onChange={(e) => handleAnswerChange(e.target.value, index)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your answer"
        />
      )}
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-10 rounded shadow-lg w-full max-w-full h-[95vh] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentPage < 5
            ? surveyQuestions.slice(currentPage * 6, currentPage * 6 + 6).map(renderQuestion)
            : surveyQuestions.slice(30).map(renderQuestion)}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => handleNavigation(-1)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            onClick={currentPage === 5 ? handleSubmit : () => handleNavigation(1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {currentPage === 5 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;

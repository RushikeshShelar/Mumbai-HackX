import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const courseModules = {
  1: ['HTML Basics', 'CSS Fundamentals', 'JavaScript Essentials'],
  2: ['Data Analysis', 'Machine Learning Basics', 'Data Visualization'],
  3: ['SEO Strategies', 'PPC Campaigns', 'Social Media Marketing'],
};

function CourseModule() {
  const { id } = useParams();
  const navigate = useNavigate();
  const modules = courseModules[id] || [];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="max-w-7xl h-auto mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Course Modules</h1>

      {modules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => {
            const [showCards, setShowCards] = useState(false);

            const toggleCards = () => {
              setShowCards(!showCards);
            };

            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{module}</h3>
                <p className="text-gray-700 mb-4">Description of {module}.</p>
                <button
                  onClick={toggleCards}
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </button>

                {showCards && (
                  <div className="grid grid-cols-1 mt-6 gap-4">
                    <div 
                      onClick={() => handleNavigate(`/courses/${id}/${module}/videos`)} 
                      className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-xl transition duration-200 cursor-pointer"
                    >
                      <h4 className="text-xl font-bold flex items-center">Videos</h4>
                      <p>Explore our video tutorials.</p>
                    </div>
                    <div 
                      onClick={() => handleNavigate(`/courses/${id}/${module}/articles`)} 
                      className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-xl transition duration-200 cursor-pointer"
                    >
                      <h4 className="text-xl font-bold flex items-center">
                        <span className="material-icons mr-2">article</span> Articles
                      </h4>
                      <p>Read our comprehensive articles.</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-lg text-gray-700 text-center">No modules available for this course.</p>
      )}
    </div>
  );
}

export default CourseModule;

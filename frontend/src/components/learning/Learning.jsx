import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Learning() {
  const [modules, setModules] = useState([]); // State to hold the modules
  const userId = localStorage.getItem('userId'); // Get the user ID from localStorage

  useEffect(() => {
    const fetchLearningPath = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user-profile/${userId}/learning-path`);
        console.log(response);
        setModules(response.data); // Assuming the response has a learningPath array
      } catch (error) {
        console.error('Error fetching learning path:', error);
      }
    };

    if (userId) {
      fetchLearningPath();
    }
  }, [userId]);

  return (
    modules && 
    <div className="max-w-7xl mx-auto p-6 pb-12">
      <h1 className="text-4xl font-bold m-8 text-center">Modules Available</h1>
      {modules.map((subject) => (
        <div key={subject.subject} className="mb-8">
          <h2 className="text-3xl font-semibold text-center">{subject.subject}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-4">
            {subject.modules.map((module) => (
              <div key={module._id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[400px]">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{module.moduleName}</h3>
                  <p className="text-gray-600 mb-2">{module.description}</p>
                  <p className="text-gray-500">Difficulty: {module.difficulty}</p>
                  <Link to={`/module/${module._id}`}>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Start Module
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Learning;

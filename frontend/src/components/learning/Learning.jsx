import React from 'react';
import { Link } from 'react-router-dom';
import digital from './img/digital.jpeg';
import datascience from './img/datascience.jpeg';
import webdev from './img/webdev.jpeg';

const courses = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Learn how to build websites using HTML, CSS, and JavaScript.',
    image: webdev,
  },
  {
    id: 2,
    title: 'Data Science',
    description: 'Dive into data analysis and machine learning with Python.',
    image: datascience,
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Understand SEO, PPC, and social media marketing strategies.',
    image: digital,
  },
];

function Learning() {
  return (
    <div className="max-w-7xl mx-auto p-6 pb-12">
      <h1 className="text-4xl font-bold m-8 text-center">Courses Available</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {courses.map(course => (
          <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-center">{course.title}</h2>
              <p className="text-gray-600 text-center">{course.description}</p>
              <Link to={`/course/${course.id}`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;

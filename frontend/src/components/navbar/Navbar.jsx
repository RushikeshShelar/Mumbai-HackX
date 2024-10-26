import React from 'react';
import { Link } from 'react-router-dom'
import { BookOpen, Rocket, Users, Zap } from 'lucide-react';
import img from './student.png'
import Registration from '../registration/Registration'

export default function EdTechLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="flex items-center">
                <BookOpen className="h-8 w-auto sm:h-10 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">EduTech</span>
              </a>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Features</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link to="/registration" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </Link>
              <Link to="/login" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                Transform Your Learning Journey
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl">
                Unlock your potential with our cutting-edge educational platform. Learn, grow, and succeed.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Features
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Discover why thousands of learners choose EduTech for their educational journey.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Rocket className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-lg font-medium text-gray-900 truncate">
                          Interactive Learning
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Engage with our interactive lessons and quizzes for an immersive learning experience.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-lg font-medium text-gray-900 truncate">
                          Expert Instructors
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Learn from industry professionals and experienced educators in various fields.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Zap className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-lg font-medium text-gray-900 truncate">
                          Personalized Learning Paths
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Tailored curriculum based on your goals and progress for optimal learning outcomes.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block">Start your free trial today.</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-indigo-200">
                    Join thousands of learners who have transformed their careers with our platform.
                  </p>
                  <a
                    href="#"
                    className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                  >
                    Sign up for free
                  </a>
                </div>
              </div>
              <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                <img
                  className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                  src={img}
                  alt="App screenshot"
                  style={{ height: '500px' }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <BookOpen className="h-10 text-white" />
              <p className="text-gray-400 text-base">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.35C0 23.403.597 24 1.325 24h21.35C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0zm-2.569 24h-3.501v-9.281h2.369l.356-2.748h-2.725V9.908c0-.794.22-1.336 1.281-1.336h1.367V6.166c-.236-.031-1.043-.103-1.98-.103-1.966 0-3.318 1.201-3.318 3.395v1.88h-2.33V12h2.33v12h3.501z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57c-.885.392-1.83.654-2.825.775 1.013-.607 1.794-1.564 2.163-2.724-.949.56-2.005.973-3.127 1.194-.894-.952-2.168-1.547-3.591-1.547-2.717 0-4.917 2.208-4.917 4.917 0 .386.045.761.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.42.722-.666 1.561-.666 2.475 0 1.711.871 3.22 2.188 4.107-.807-.026-1.566-.247-2.228-.616v.062c0 2.377 1.688 4.353 3.926 4.8-.41.111-.839.171-1.283.171-.314 0-.622-.031-.923-.086.623 1.943 2.43 3.357 4.563 3.397-1.675 1.313-3.785 2.094-6.065 2.094-.394 0-.779-.023-1.17-.069 2.165 1.385 4.731 2.194 7.485 2.194 8.972 0 13.874-7.428 13.874-13.874 0-.211 0-.422-.015-.632.952-.687 1.777-1.55 2.426-2.533z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578 0-.287-.011-1.05-.017-2.063-3.338.724-4.04-1.607-4.04-1.607-.546-1.38-1.334-1.747-1.334-1.747-1.086-.743.083-.728.083-.728 1.198.084 1.83 1.23 1.83 1.23 1.063 1.82 2.793 1.296 3.474.99.107-.77.417-1.296.759-1.592-2.665-.303-5.466-1.333-5.466-5.928 0-1.313.471-2.387 1.243-3.224-.125-.303-.54-1.52.118-3.168 0 0 1.008-.323 3.302 1.229.958-.267 1.986-.399 3.004-.404 1.018.005 2.046.137 3.005.404 2.292-1.552 3.3-1.229 3.3-1.229.659 1.648.244 2.865.12 3.168.775.837 1.243 1.911 1.243 3.224 0 4.609-2.806 5.618-5.469 5.92.43.372.813 1.103.813 2.224 0 1.607-.015 2.906-.017 3.298 0 .321.188.694.796.577C20.565 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 xl:col-span-2 xl:mt-0">
              <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Resources</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Community Forum
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import video1 from '../img/htmlbasics.mp4';

const videos = [
    { id: 1, title: 'Lec 1: HTML Basics', src: video1 },
//     { id: 2, title: 'Lec 2: Text Formatting and Lists', src: video1 },
//     { id: 3, title: 'Lec 3: Links and Navigation', src: video1 },
//     { id: 4, title: 'Lec 4: Images and Forms', src: video1 },
];

const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tool Multi Language"],
        answer: 0,
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<title>", "<head>"],
        answer: 1,
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>"],
        answer: 1,
    },
    {
        question: "Which attribute is used to specify a unique identifier for an element?",
        options: ["class", "id", "type"],
        answer: 1,
    },
    {
        question: "Which HTML element is used to define an internal style sheet?",
        options: ["<style>", "<css>", "<script>"],
        answer: 0,
    },
];

function Videos() {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [watchedVideos, setWatchedVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const [quizScore, setQuizScore] = useState(null);
    const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(null));

    const handleCardClick = (video) => {
        setCurrentVideo(video);
        setIsModalOpen(true);
    };

    const handleVideoEnd = (videoId) => {
        setWatchedVideos((prev) => [...prev, videoId]);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    const handleQuizClick = () => {
        if (watchedVideos.length === videos.length) {
            setIsQuizOpen(true);
        } else {
            alert('Please watch all videos to unlock the quiz.');
        }
    };

    const handleQuizChange = (index, value) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[index] = value;
        setUserAnswers(updatedAnswers);
    };

    const handleQuizSubmit = (event) => {
        event.preventDefault();
        let score = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === quizQuestions[index].answer) {
                score++;
            }
        });

        setQuizScore(score);
        setIsQuizOpen(false); // Close the quiz after submission
    };

    const allVideosWatched = watchedVideos.length === videos.length;

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Videos</h1>
            <div className="flex justify-center flex-wrap gap-6 mb-8">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className={`bg-white border border-gray-300 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer ${watchedVideos.includes(video.id) ? 'bg-green-100' : ''}`}
                        onClick={() => handleCardClick(video)}
                    >
                        <h2 className="text-xl font-semibold text-gray-700">{video.title}</h2>
                        {watchedVideos.includes(video.id) && (
                            <p className="text-green-600 text-sm">Watched</p>
                        )}
                    </div>
                ))}
            </div>
            {isModalOpen && currentVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
                        <video
                            className="w-full max-w-full h-auto"
                            controls
                            onEnded={() => handleVideoEnd(currentVideo.id)}
                        >
                            <source src={currentVideo.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className="absolute top-2 right-2 text-white text-xl" onClick={closeModal}>&times;</button>
                    </div>
                </div>
            )}
            <div className="mt-8 flex justify-center">
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg flex flex-col items-center">
                    <h2 className="text-xl font-semibold flex items-center">
                        {allVideosWatched ? (
                            <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                        ) : (
                            <FontAwesomeIcon icon={faLock} className="mr-2" />
                        )}
                        Quiz Section
                    </h2>
                    <p className="text-gray-500 text-center">Complete all videos to unlock the quiz!</p>
                    <button onClick={handleQuizClick} className={`mt-4 py-2 px-4 rounded transition ${allVideosWatched ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} disabled={!allVideosWatched}>
                        {allVideosWatched ? 'Take Quiz' : 'Locked'}
                    </button>
                </div>
            </div>

            {/* Quiz Modal */}
            {isQuizOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative">
                        <h2 className="text-2xl font-bold mb-4">Quiz</h2>
                        <form onSubmit={handleQuizSubmit}>
                            {quizQuestions.map((q, index) => (
                                <div key={index} className="mb-4">
                                    <label className="block mb-2">{q.question}</label>
                                    {q.options.map((option, i) => (
                                        <div key={i}>
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value={i}
                                                onChange={() => handleQuizChange(index, i)}
                                                checked={userAnswers[index] === i}
                                                required
                                            />
                                            <label className="ml-2">{option}</label>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                                Submit
                            </button>
                        </form>
                        <button onClick={() => setIsQuizOpen(false)} className="absolute top-2 right-2 text-red-600 text-xl">&times;</button>
                    </div>
                </div>
            )}

            {/* Display Score */}
            {quizScore !== null && (
                <div className="mt-4 text-center">
                    <h3 className="text-xl">
                        Your Score: {quizScore} / {quizQuestions.length} 
                    </h3>
                    {quizScore >= Math.ceil(quizQuestions.length / 2) ? (
                        <p className="text-green-600">Congratulations! You passed!</p>
                    ) : (
                        <p className="text-red-600">Sorry, you did not pass.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Videos;

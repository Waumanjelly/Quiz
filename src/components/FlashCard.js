import React from 'react';

const FlashCard = ({ quiz, showAnswer, flipCard, markAnswer }) => {
    return (
        <div className="relative mb-8">
            <div
                className="bg-white rounded-2xl shadow-2xl p-8 min-h-[400px] cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={flipCard}
            >
                <div className="text-center h-full flex flex-col justify-center">
                    {!showAnswer ? (
                        <>
                            {/* Question side */}
                            <div className="mb-6">
                                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                    {quiz.category}
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
                                {quiz.question}
                            </h2>
                            <p className="text-gray-500 text-lg">
                                Klik om het antwoord te zien
                            </p>
                        </>
                    ) : (
                        <>
                            {/* Answer side */}
                            <div className="mb-6">
                                <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                    Antwoord
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-green-700 mb-6">
                                {quiz.answer}
                            </h3>
                            <p className="text-gray-600 text-lg mb-8 bg-gray-50 p-4 rounded-lg">
                                {quiz.explanation}
                            </p>

                            {/* Self-assessment buttons */}
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        markAnswer(false);
                                    }}
                                    className="px-6 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
                                >
                                    Fout
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        markAnswer(true);
                                    }}
                                    className="px-6 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium"
                                >
                                    Correct
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlashCard;
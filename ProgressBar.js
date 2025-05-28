import React from 'react';

const ProgressBar = ({ currentCard, totalCards, score, progress }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Kaart {currentCard + 1} van {totalCards}</span>
                <span>Score: {score.correct}/{score.total}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
import React from 'react';
import { Shuffle, RotateCcw } from 'lucide-react';

const Controls = ({ shuffleCards, resetQuiz }) => {
    return (
        <div className="flex justify-center gap-4 mb-8">
            <button
                onClick={shuffleCards}
                className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
                <Shuffle size={18} />
                Schudden
            </button>
            <button
                onClick={resetQuiz}
                className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
                <RotateCcw size={18} />
                Reset
            </button>
        </div>
    );
};

export default Controls;
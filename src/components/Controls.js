import React from 'react';
import { Shuffle, RotateCcw } from 'lucide-react';
import { categories } from '/data/quizData.js';

// Adding selectedCategory and handleCategoryChange to props
const Controls = ({ shuffleCards, resetQuiz, selectedCategory, handleCategoryChange }) => {
    return (
        <div className="flex justify-center items-center gap-4 mb-8">
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

            {/* Category Filter Dropdown */}
            <div className="relative">
                <select
                    value={selectedCategory} // Set the current value of the dropdown
                    onChange={(e) => handleCategoryChange(e.target.value)} // Handle change events
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors appearance-none pr-8 cursor-pointer"
                    aria-label="Filter by category"
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                {/* Custom arrow icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.734 3.705c-.533.529-1.394.529-1.927 0L5.516 9.163c-.408-.418-.436-1.17 0-1.615z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Controls;
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({
    currentCard,
    totalCards,
    prevCard,
    nextCard,
    setCurrentCard,
    setShowAnswer,
    shuffledQuizData
}) => {
    return (
        <div className="flex justify-between items-center">
            <button
                onClick={prevCard}
                disabled={currentCard === 0}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronLeft size={20} />
                Vorige
            </button>

            <div className="flex gap-2">
                {shuffledQuizData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentCard(index);
                            setShowAnswer(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentCard
                                ? 'bg-blue-500'
                                : index < currentCard
                                    ? 'bg-green-400'
                                    : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>

            <button
                onClick={nextCard}
                disabled={currentCard === totalCards - 1}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
                Volgende
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

export default Navigation;
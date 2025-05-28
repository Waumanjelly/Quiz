import React from 'react';
import FlashCard from './components/FlashCard';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import Controls from './components/Controls';
import { useQuizState } from './hooks/useQuizState';
import { BookOpen, Trophy } from 'lucide-react';

function App() {
    const {
        currentCard,
        showAnswer,
        score,
        shuffledQuizData,
        progress,
        shuffleCards,
        resetQuiz,
        nextCard,
        prevCard,
        flipCard,
        markAnswer,
        setCurrentCard,
        setShowAnswer
    } = useQuizState();

    const currentQuiz = shuffledQuizData[currentCard];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
                        <Trophy className="text-yellow-500" />
                        Vlaamse Pubquiz Flashcards
                        <BookOpen className="text-blue-500" />
                    </h1>
                    <p className="text-gray-600 text-lg">Train je algemene kennis met bekende pubquiz vragen</p>
                </div>

                <ProgressBar
                    currentCard={currentCard}
                    totalCards={shuffledQuizData.length}
                    score={score}
                    progress={progress}
                />

                <Controls
                    shuffleCards={shuffleCards}
                    resetQuiz={resetQuiz}
                />

                <FlashCard
                    quiz={currentQuiz}
                    showAnswer={showAnswer}
                    flipCard={flipCard}
                    markAnswer={markAnswer}
                />

                <Navigation
                    currentCard={currentCard}
                    totalCards={shuffledQuizData.length}
                    prevCard={prevCard}
                    nextCard={nextCard}
                    setCurrentCard={setCurrentCard}
                    setShowAnswer={setShowAnswer}
                    shuffledQuizData={shuffledQuizData}
                />

                {/* Completion message */}
                {currentCard === shuffledQuizData.length - 1 && showAnswer && (
                    <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <h3 className="text-xl font-bold text-green-800 mb-2">
                            Gefeliciteerd! 🎉
                        </h3>
                        <p className="text-green-700">
                            Je hebt alle kaarten doorlopen. Je score: {score.correct}/{score.total}
                        </p>
                        <button
                            onClick={resetQuiz}
                            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Opnieuw beginnen
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
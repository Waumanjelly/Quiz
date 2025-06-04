import React from 'react';
import FlashCard from './components/FlashCard.js'; // Corrected path
import ProgressBar from './components/ProgressBar.js'; // Corrected path
import Navigation from './components/Navigation.js'; // Corrected path
import Controls from './components/Controls.js'; // Corrected path
import { useQuizState } from './hooks/useQuizState.js'; // Corrected path
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
        setShowAnswer,
        selectedCategory, // Destructure new state
        handleCategoryChange // Destructure new function
    } = useQuizState();

    // currentQuiz will be undefined if shuffledQuizData is empty (e.g., no items in a selected category)
    const currentQuiz = shuffledQuizData && shuffledQuizData.length > 0 ? shuffledQuizData[currentCard] : null;

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
                    // totalCards should reflect the current deck, which might be filtered
                    totalCards={shuffledQuizData ? shuffledQuizData.length : 0}
                    score={score}
                    progress={progress}
                />

                <Controls
                    shuffleCards={shuffleCards}
                    resetQuiz={resetQuiz}
                    selectedCategory={selectedCategory} // Pass prop
                    handleCategoryChange={handleCategoryChange} // Pass prop
                />

                {/* Only render FlashCard if there's a current quiz item */}
                {currentQuiz ? (
                    <FlashCard
                        quiz={currentQuiz}
                        showAnswer={showAnswer}
                        flipCard={flipCard}
                        markAnswer={markAnswer}
                    />
                ) : (
                    <div className="text-center p-8 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">
                            {selectedCategory ? `Geen vragen gevonden voor de categorie: "${selectedCategory}".` : "Selecteer een categorie om te beginnen of reset."}
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Probeer een andere categorie of klik op 'Reset' om alle kaarten te zien.
                        </p>
                    </div>
                )}

                {/* Only render Navigation if there are cards to navigate */}
                {shuffledQuizData && shuffledQuizData.length > 0 && (
                    <Navigation
                        currentCard={currentCard}
                        totalCards={shuffledQuizData.length}
                        prevCard={prevCard}
                        nextCard={nextCard}
                        setCurrentCard={setCurrentCard}
                        setShowAnswer={setShowAnswer}
                        shuffledQuizData={shuffledQuizData} // Pass for potential direct access if needed by Navigation
                    />
                )}

                {/* Completion message: only if there are cards and we are at the end */}
                {shuffledQuizData && shuffledQuizData.length > 0 && currentCard === shuffledQuizData.length - 1 && showAnswer && (
                    <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <h3 className="text-xl font-bold text-green-800 mb-2">
                            Gefeliciteerd! 🎉
                        </h3>
                        <p className="text-green-700">
                            Je hebt alle kaarten in deze categorie doorlopen. Je score: {score.correct}/{score.total}
                        </p>
                        <button
                            onClick={resetQuiz} // ResetQuiz will also reset the category filter
                            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Alle Categorieën & Opnieuw
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
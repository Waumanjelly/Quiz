import { useState } from 'react';
import { quizData } from '../data/quizData';

export const useQuizState = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [shuffledQuizData, setShuffledQuizData] = useState(quizData);

    const shuffleCards = () => {
        const shuffled = [...quizData].sort(() => Math.random() - 0.5);
        setShuffledQuizData(shuffled);
        setCurrentCard(0);
        setShowAnswer(false);
    };

    const resetQuiz = () => {
        setCurrentCard(0);
        setShowAnswer(false);
        setScore({ correct: 0, total: 0 });
        setShuffledQuizData(quizData);
    };

    const nextCard = () => {
        if (currentCard < shuffledQuizData.length - 1) {
            setCurrentCard(currentCard + 1);
            setShowAnswer(false);
        }
    };

    const prevCard = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard - 1);
            setShowAnswer(false);
        }
    };

    const flipCard = () => {
        setShowAnswer(!showAnswer);
    };

    const markAnswer = (isCorrect) => {
        if (showAnswer && score.total <= currentCard) {
            setScore({
                correct: score.correct + (isCorrect ? 1 : 0),
                total: score.total + 1
            });
        }
    };

    const progress = ((currentCard + 1) / shuffledQuizData.length) * 100;

    return {
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
    };
};
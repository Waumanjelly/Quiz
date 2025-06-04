import { useState, useEffect } from 'react';
import { quizData } from '../data/quizData'; // Path confirmed

export const useQuizState = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [allQuizData] = useState(quizData); // Store original data
    const [shuffledQuizData, setShuffledQuizData] = useState(quizData);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        let dataToShuffle;
        if (selectedCategory === "") {
            dataToShuffle = [...allQuizData];
        } else {
            dataToShuffle = allQuizData.filter(card => card.category === selectedCategory);
        }
        setShuffledQuizData([...dataToShuffle].sort(() => Math.random() - 0.5));
        setCurrentCard(0);
        setShowAnswer(false);
        setScore({ correct: 0, total: 0 });
    }, [selectedCategory, allQuizData]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const shuffleCards = () => {
        let dataToShuffle;
        if (selectedCategory === "") {
            dataToShuffle = [...allQuizData];
        } else {
            dataToShuffle = allQuizData.filter(card => card.category === selectedCategory);
        }
        setShuffledQuizData([...dataToShuffle].sort(() => Math.random() - 0.5));
        setCurrentCard(0);
        setShowAnswer(false);
        // Score is reset by useEffect when category changes or shuffle is called after category selection
    };

    const resetQuiz = () => {
        setSelectedCategory("");
        // The useEffect will then handle resetting cards and score based on selectedCategory becoming ""
        // To be absolutely sure, also explicitly reset here:
        setShuffledQuizData([...allQuizData].sort(() => Math.random() - 0.5));
        setCurrentCard(0);
        setShowAnswer(false);
        setScore({ correct: 0, total: 0 });
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

    const progress = shuffledQuizData.length > 0 ? ((currentCard + 1) / shuffledQuizData.length) * 100 : 0;

    return {
        currentCard,
        showAnswer,
        score,
        shuffledQuizData,
        progress,
        selectedCategory,
        handleCategoryChange,
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
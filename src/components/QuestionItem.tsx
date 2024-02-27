import { Question } from "@/types/Question"
import { useState } from "react";

type Props = {
    question: Question;
    questionCount: number;
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({question, questionCount, onAnswer}: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const checkQuestionOption = (key: number) => {
        if(selectedAnswer === null){
            setSelectedAnswer(key);
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
            }, 800);
        }
    }

    return(
        <div>
            <div className="text-2xl font-bold mb-5">{questionCount}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestionOption(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300
                        
                            ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-300'}
                            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-300'}
                        `}
                    >{item}</div>
                ))}
            </div>
        </div>
    );
}
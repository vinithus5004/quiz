import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: 'De quem é a famosa frase "Penso, logo existo"?',
        options:[
            'Platão',
            'Galileu Galilei',
            'Descartes',
            'Sócrates',
            'Francis Bacon'
        ],
        answer: 2
    },
    {
        question: 'De onde é a invenção do chuveiro elétrico?',
        options: [
            'França',
            'Inglaterra',
            'Brasil',
            'Austrália',
            'Itália'
        ],
        answer: 2
    },
    {
        question: 'Quais o menor e o maior país do mundo?',
        options: [
            'Vaticano e Rússia',
            'Nauru e China',
            'Mônaco e Canadá',
            'Malta e Estados Unidos',
            'São Marino e Índia'
        ],
        answer: 0
    }
];
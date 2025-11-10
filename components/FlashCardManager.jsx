import QuestionFlashCard from "./QuestionFlashCard";
import "./FlashCardManager.css";

const FlashCardManager = () => {
  const flashcards = [
    {
      question: "¿Para qué?",
      answer: "Queremos que los grupos de amigos tengan una forma de divertirse haciendo tareas que fomenten el no uso de las pantallas."
    },
    {
      question: "¿Cómo?",
      answer: "Hemos creado una app que te obliga a hacer divertidas tareas para no quedar último y tener que realizar un reto propuesto por el resto del grupo."
    },
    {
      question: "¿Qué?",
      answer: "Contamos con una aplicación capaz de juntar tecnologí diversión y el no uso de las pantallas así como socializar y pasar momentos divertidos con los amigos."
    }
  ];

  return (
    <div className="flashcard-manager">
      {flashcards.map((card, index) => (
        <QuestionFlashCard key={index} title={card.question} description={card.answer} />
      ))}
    </div>
  );
};

export default FlashCardManager;

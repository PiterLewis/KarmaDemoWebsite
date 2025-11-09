import QuestionFlashCard from "./QuestionFlashCard";
import "./FlashCardManager.css";

const FlashCardManager = () => {
  const flashcards = [
    {
      question: "¿Qué es Karma?",
      answer: "Karma es una red social centrada en el bienestar, la comunidad y la energía positiva."
    },
    {
      question: "¿Cómo puedo ganar puntos de Karma?",
      answer: "Participando en actividades, compartiendo contenido útil y apoyando a otros usuarios."
    },
    {
      question: "¿Qué beneficios tiene usar Karma?",
      answer: "Conectas con personas afines, mejoras tu bienestar y contribuyes a una comunidad saludable."
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

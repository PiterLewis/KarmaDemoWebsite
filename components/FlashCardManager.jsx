import QuestionFlashCard from "./QuestionFlashCard";
import "./FlashCardManager.css";

const FlashCardManager = () => {
  const flashcards = [
    {
      question: "¿Para qué?",
      answer: "Empezar con el propósito, la causa, el problema, el objetivo, o la creencia fundamental del equipo. Responde a la pregunta de por qué existe el producto y por qué debería importarle a alguien. Es el motor que inspira y conecta emocionalmente con el público."
    },
    {
      question: "¿Cómo?",
      answer: "Procesos, estrategias o valores que hacen única la propuesta de valor y ayudan a diferenciar el producto de la competencia."
    },
    {
      question: "¿Qué?",
      answer: "Es el producto o servicio tangible que la empresa vende. Es lo que la mayoría de las empresas comunican primero, pero muchas veces es lo menos importante para inspirar lealtad. Incluir beneficios de la solución, cómo mejorará la situación actual. Incluir curva de valor frente a la competencia, identificar cual es vuestra funcionalidad clave y diferencial."
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

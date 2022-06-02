import React from "react";
import "../../App.css";
import { useDrag } from "react-dnd";


const Card = ({ children, cardData }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: cardData.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className="card" style={{backgroundColor: cardData.colorName }}>
      {children}
    </div>
  );
};

export default Card;

import { signOut } from "firebase/auth";
import React, { useState } from "react";
import ButtonStyles from "../components/Button";
import { auth } from "../lib/config/firebase";
import { useContextApi } from "../lib/hooks/useContexApi";
import Card from "../components/Card";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaHome, FaUserAlt  } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "../App.css";

const Home = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragAndDrop />
    </DndProvider>
  );
};

const DragAndDrop = () => {
  const [cardRight, setCardRight] = useState([]);
  const [cardLeft, setCardLeft] = useState([
    { colorName: "tomato", id: 1 },
    { colorName: "dodgerblue", id: 2 },
    { colorName: "hotpink", id: 3 },
    { colorName: "gold", id: 4 },
  ]);
  const { setIsAuth } = useContextApi();

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: (item) => console.log(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToRightBoard = (id) => {
    const result = cardLeft.filter((card) => card.id === id);
    setCardRight((value) => [...value, result[0]]);
  };

  const logout = () => {
    signOut(auth).then(() => setIsAuth(false));
  };

  return (
    <div>
      <div className="nav-bar">
          <h2>
            <FaHome size={30} />
            Home
          </h2>
        <div className="nav-right">
          <h3> <FaUserAlt size={22}/> profile </h3>
          <button onClick={logout}>
            <FiLogOut size={22} /> Logout
          </button>
        </div>
      </div>

      <div className="flex-container">
        <div className="left-content">
          {cardLeft.map((data) => {
            return (
              <Card key={data.id} cardData={data}>
                {data.colorName}
              </Card>
            );
          })}
        </div>
        <div ref={dropRef} className="right-content">
          {cardRight.map((data) => {
            return (
              <Card key={data.id} cardData={data}>
                {data.colorName}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

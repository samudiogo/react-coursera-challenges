import React from "react";
import "./Main.css";
export const Main = () => {
  const funfacts = [
    "React is not a framework",
    "React has a strong community",
    "Virtual DOM is faster than real DOM",
    "Keep your components small",
    "Supports Type Systems",
  ];
  return (
    <main>
      <h1 className="main--title">Fun facts about react</h1>
      <ul className="main--facts">
        {funfacts.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </main>
  );
};

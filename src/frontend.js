import React from "react";
import { createRoot } from "react-dom/client";
import "./frontend.scss";

const divToUpdate = document.querySelectorAll(".paying-attention-update-me");

divToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  const root = createRoot(div);
  root.render(React.createElement(Quiz, { question: data.question }));
  div.classList.remove("paying-attention-update-me");
});

function Quiz(props) {
  return <div className="paying-attention-frontend">{props.question}</div>;
}

import React, { useState, useEffect } from "react";

interface IProps {
  text: string;
  typingSpeed?: number;
  backspaceSpeed?: number;
}

export default function TypingText({
  text,
  typingSpeed = 100,
  backspaceSpeed = 50,
}: IProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typeText = () => {
      let i = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText(text.slice(0, ++i));
        if (i === text.length) {
          clearInterval(typingInterval);
          setTimeout(() => backspaceText(), 5000);
        }
      }, typingSpeed);
    };
    const backspaceText = () => {
      let j = text.length;
      const backspaceInterval = setInterval(() => {
        setDisplayedText(text.slice(0, --j));
        if (j === 0) {
          clearInterval(backspaceInterval);
          typeText();
        }
      }, backspaceSpeed);
    };
    typeText();
  }, [text, typingSpeed]);

  return (
    <div>
      <div className="">
        {displayedText}
        <span className="blink">|</span>
        <span className="text-transparent">
          {text.replace && text.replace(displayedText, "")}
        </span>
      </div>
    </div>
  );
}

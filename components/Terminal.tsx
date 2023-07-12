import React, { useState, useEffect } from "react";

interface IProps {
  text: string;
  interval?: number;
  backspaceSpeed?: number;
}

export default function Terminal({
  text,
  interval = 50,
  backspaceSpeed = 20,
}: IProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let typeTimeout: NodeJS.Timeout;
    let backspaceTimeout: NodeJS.Timeout;

    const typeText = (i = 0) => {
      if (i <= text.length) {
        const newText = text.slice(0, i);
        setDisplayedText(newText);
        typeTimeout = setTimeout(() => typeText(i + 1), interval);
      } else {
        backspaceTimeout = setTimeout(() => backspaceText(text.length), 5000);
      }
    };

    const backspaceText = (j: number) => {
      if (j >= 0) {
        const newText = text.slice(0, j);
        setDisplayedText(newText);
        backspaceTimeout = setTimeout(
          () => backspaceText(j - 1),
          backspaceSpeed
        );
      } else {
        typeText();
      }
    };

    setDisplayedText("");
    typeText();

    return () => {
      clearTimeout(typeTimeout);
      clearTimeout(backspaceTimeout);
    };
  }, [text, interval, backspaceSpeed]);

  const trailText = text.slice(displayedText.length);

  return (
    <div className="w-[500px] overflow-clip mobile-only:w-[220px] h-[140px] text-lg mobile-only:text-[0.6rem] mobile-only:leading-4">
      <div className="font-mono whitespace-pre">
        {displayedText}
        <span className="blink">|</span>
        <span className="opacity-0">{trailText}</span>
      </div>
    </div>
  );
}

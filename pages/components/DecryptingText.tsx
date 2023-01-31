import { useEffect, useRef, useState } from "react";

let interval: NodeJS.Timer | null = null;
interface IProps {
  text: string;
}
export default function DecryptingText({ text }: IProps) {
  const [displayText, setDisplayText] = useState(text);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateText();
      }
    });

    if (ref.current !== null) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  useEffect(() => {}, []);

  function animateText() {
    function randomString(length: number) {
      let result = "";
      const characters = "abcdefghijklmnopqrstuvwxyz";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }

    let i = 0;

    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      setDisplayText(text.slice(0, i) + randomString(text.length - i));
      i++;
    }, 100);
  }

  return <span ref={ref}>{displayText}</span>;
}

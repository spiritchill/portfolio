import { useEffect, useState } from "react";

const lines = [
  "> Hello World",
  "> I build web apps",
  "> I love AI & 3D",
  "> Welcome to my portfolio",
];

export default function TerminalIntro() {
  const [shown, setShown] = useState([]);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setShown((prev) => [...prev, line]);
      }, i * 700);
    });
  }, []);

  return (
    <div className="bg-black/60 border border-green-500 p-6 rounded-lg font-mono text-green-400 max-w-xl">
      {shown.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
      <span className="animate-pulse">█</span>
    </div>
  );
}

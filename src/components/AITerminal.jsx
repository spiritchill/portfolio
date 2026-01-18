import { useState } from "react";

const fakeAI = (msg) => {
  if (msg.includes("skills")) return "JavaScript, React, Linux, SQL, Automation";
  if (msg.includes("projects")) return "Portfolio, APIs, Dev Tools";
  return "Command not recognized. Try: skills, projects, contact";
};

export default function AITerminal() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const reply = fakeAI(input.toLowerCase());
    setLog([...log, `> ${input}`, reply]);
    setInput("");
  };

  return (
    <div className="bg-black/70 border border-neon p-4 rounded-lg w-full max-w-xl">
      <div className="text-neon text-sm mb-2">AI TERMINAL</div>
      <div className="h-40 overflow-y-auto text-sm mb-2">
        {log.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <form onSubmit={submit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-black border border-white/20 p-2 text-white"
          placeholder="ask: skills / projects"
        />
      </form>
    </div>
  );
}

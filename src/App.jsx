import Navbar from "./components/Navbar";
import TerminalIntro from "./components/TerminalIntro";
import ParticlesBG from "./components/ParticlesBG";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-10">
        
        <h1 className="text-4xl font-bold">Hello, I’m Dexter 👋</h1>
        <p className="mt-4 text-gray-400">
          Developer • AI • Web • 3D
        </p>
      </main>
    </div>
  );
}

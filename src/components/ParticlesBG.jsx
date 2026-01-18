import Particles from "react-tsparticles";

export default function ParticlesBG() {
  return (
    <Particles
      options={{
        background: { color: "#0b0f1a" },
        particles: {
          number: { value: 60 },
          color: { value: "#00ffcc" },
          links: { enable: true, color: "#00ffcc" },
          move: { enable: true },
        },
      }}
    />
  );
}

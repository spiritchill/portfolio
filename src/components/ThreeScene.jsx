import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  return (
    <mesh rotation={[1, 1, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="#00f5ff" />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas className="h-80 w-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

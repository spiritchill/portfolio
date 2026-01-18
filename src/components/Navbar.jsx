export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
      <span className="font-bold text-xl">dexter.dev</span>
      <div className="space-x-6 text-gray-400">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

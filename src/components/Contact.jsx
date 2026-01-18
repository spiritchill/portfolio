export default function Contact() {
  return (
    <form
      action="https://formspree.io/f/xoqgzabc"
      method="POST"
      className="bg-black/60 p-6 rounded-xl max-w-lg w-full"
    >
      <h2 className="text-neon mb-4">Contact Me</h2>
      <input
        name="email"
        placeholder="Email"
        className="w-full p-2 mb-3 bg-black border"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-2 mb-3 bg-black border"
      />
      <button className="border border-neon px-4 py-2 hover:bg-neon hover:text-black">
        Send
      </button>
    </form>
  );
}

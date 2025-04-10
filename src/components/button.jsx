export default function Buttons({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white px-6 py-3 rounded-lg w-full max-w-xs hover:bg-tertiary hover:text-secondary transition cursor-pointer"
    >
      {text}
    </button>
  );
}

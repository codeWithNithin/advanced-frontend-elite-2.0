function HintText({ text }) {
  return (
    <div className="hint-text bg-white">
      <span className="text-gray-500 mx-2 my-2"> {text.toUpperCase()}</span>
    </div>
  );
}

export default HintText;

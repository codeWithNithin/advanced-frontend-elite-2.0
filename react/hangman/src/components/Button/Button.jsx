import getButtonStyling from './getButtonStyling';

function Button({
  text,
  clickHandler,
  type = 'button',
  styleType = 'primary',
}) {
  return (
    <button
      onClick={clickHandler}
      className={`text-white px-4 py-2 rounded-lg ${getButtonStyling(
        styleType
      )}`}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;

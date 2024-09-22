function TextInput({
  type = 'text',
  label,
  placeholder,
  handleTextInputChange,
}) {
  return (
    <>
      <label htmlFor={label} className="text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={label}
        className="px-4 py-2 border border-gray-500 w-full rounded-md"
        placeholder={placeholder}
        onChange={handleTextInputChange}
      />
    </>
  );
}

export default TextInput;

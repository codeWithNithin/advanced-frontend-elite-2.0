import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function TextInputForm({
  inputType,
  handleFormSubmit,
  handleShowHideClick,
  handleTextInputChange,
  handleHintInputChange,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          label="enter a hint"
          handleTextInputChange={handleHintInputChange}
        />
      </div>
      <div>
        <TextInput
          type={inputType}
          label="enter a word or a phrase"
          handleTextInputChange={handleTextInputChange}
        />
      </div>
      <div className="flex gap-[5px] my-3">
        <div>
          <Button
            text="show / hide"
            styleType="warning"
            clickHandler={handleShowHideClick}
          />
        </div>

        <div>
          <Button type="submit" styleType="primary" text="Submit" />
        </div>
      </div>
    </form>
  );
}

export default TextInputForm;

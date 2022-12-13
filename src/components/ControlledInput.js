/**
 * Controlled input
 * @param {{ title: string, value: string, setValue: (value: string) => undefined }} props
 */
const ControlledInput = ({ title, value, setValue }) => {
  const onChange = ({ target }) => setValue(target.value);

  return (
    <div>
      {title} <input value={value} onChange={onChange} />
    </div>
  );
};

export default ControlledInput;

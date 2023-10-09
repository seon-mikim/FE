import Input from '../Input/Input';

const InputLabel = ({ label, type, name, value, ...props }, ref) => {
  return (
    <label>
      {label}
      <Input {...props} type={type} name={name} value={value} ref={ref} />
    </label>
  );
};

export default InputLabel;

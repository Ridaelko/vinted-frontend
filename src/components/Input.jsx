const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder="Adresse email"
      value={email}
      onChange={onChange}
    />
  );
};

export default Input;

const Label = ({ html, text }) => {
  return <label htmlFor={html}>{text} </label>;
};

export default Label;

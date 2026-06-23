

 const FieldError = ({ msg }) =>
  msg ? (
    <span role="alert" className="block mt-[0.3rem] text-xs text-red-500 font-medium">
      {msg}
    </span>
  ) : null;

  export default FieldError;
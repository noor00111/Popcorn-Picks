

 const FieldLabel = ({ htmlFor, label }) => (
  <label
    htmlFor={htmlFor}
    className="block text-[0.7rem] font-bold tracking-[0.09em] uppercase text-colorMuted mb-[0.45rem]">
    {label}
  </label>
);

export default FieldLabel;
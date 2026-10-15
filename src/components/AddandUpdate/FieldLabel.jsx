

 const FieldLabel = ({ htmlFor, label, children }) => (
  <label
    htmlFor={htmlFor}
    className="block text-[0.7rem] font-bold tracking-[0.09em] uppercase text-colorMuted mb-[0.45rem]">
    {label}
    {children}
  </label>
);

export default FieldLabel;
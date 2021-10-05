import { InputProps } from "../interfaces";

const Input = ({
  register,
  rules = {},
  error,
  id,
  label,
  type,
  ...rest
}: InputProps) => {
  return (
    <div className={type === "checkbox" ? "checkbox" : ""}>
      {type !== "checkbox" ? (
        <label htmlFor={id}>
          {error && <span className="form-field-error">* </span>}
          {label + ":"}
        </label>
      ) : (
        ""
      )}
      <input id={id} {...register(id, rules)} type={type} {...rest} size={50} />
      {type === "checkbox" ? <label htmlFor={id}>{label}</label> : ""}
      {error && <div className="form-field-error">{error.message}</div>}
    </div>
  );
};

export default Input;

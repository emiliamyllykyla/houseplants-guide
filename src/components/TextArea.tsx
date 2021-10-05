import { TextAreaProps } from "../interfaces";

const TextArea = ({ register, error, id, label, ...rest }: TextAreaProps) => {
  return (
    <div>
      <label htmlFor={id}>{label + ":"}</label>
      <textarea rows={4} cols={50} id={id} {...register(id)} {...rest} />
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default TextArea;

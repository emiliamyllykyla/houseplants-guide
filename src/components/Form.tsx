import { createElement } from "react";
import { useForm } from "react-hook-form";
import { FormProps } from "../interfaces";

function Form<T>({ defaultValues, children, onSubmit }: FormProps<T>) {
  const methods = useForm<T>({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register: methods.register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
}

export default Form;

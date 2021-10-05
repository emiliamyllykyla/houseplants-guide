import { SetVisible, CollectionRef, SetFilters } from "./types";
import { ReactElement } from "react";
import {
  FieldValues,
  RegisterOptions,
  FieldError,
  UnpackNestedValue,
  DeepPartial,
  SubmitHandler,
} from "react-hook-form";

export interface TextAreaProps {
  register: FieldValues["register"];
  rules?: RegisterOptions;
  error: FieldError;
  id: string;
  label: string;
}

export interface InputProps {
  register: FieldValues["register"];
  rules?: RegisterOptions;
  error: FieldError;
  id: string;
  label: string;
  type: string;
}

export interface FormProps<T> {
  defaultValues?: UnpackNestedValue<DeepPartial<T>>;
  children: ReactElement | ReactElement[];
  onSubmit: SubmitHandler<T>;
}

export interface OutsideClickHandlerProps {
  children: React.ReactNode;
  setVisible: SetVisible;
}

export interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface DeleteProps {
  houseplants: CollectionRef;
  id: string;
}

export interface ImageSliderProps {
  plantName: string;
  images: string[];
}

export interface FilterProps {
  filters: string[];
  setFilters: SetFilters;
}

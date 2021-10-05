import { useEffect, useCallback } from "react";
import { useAlert } from "../AlertContext";
import Input from "./Input";
import TextArea from "./TextArea";
import Alert from "./Alert";
import { houseplants } from "../firebase";
import { FormData, SetAlertState } from "../types";
import { useForm, UseFormReset, FieldValues } from "react-hook-form";
import "../add.css";

const regexUrlPattern = new RegExp(
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
);

const makeOnSubmit =
  (setAlert: SetAlertState, reset: UseFormReset<FieldValues>) =>
  (data: FormData) => {
    houseplants
      .doc(data.slug)
      .set(data)
      .then(() => {
        console.log("Document successfully written!");
        reset();
        setAlert({
          type: "success",
          message: "Plant added succesfully!",
        });
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        setAlert({
          type: "error",
          message: `Error writing document: ${error}`,
        });
      });
  };

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Add() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { alert, setAlert } = useAlert();

  const onSubmit = useCallback(handleSubmit(makeOnSubmit(setAlert, reset)), [
    setAlert,
    reset,
  ]);

  useEffect(() => {
    if (alert) {
      scrollToTop();
    }
  }, [alert]);

  return (
    <>
      <Alert />
      <div className="page">
        <h1 className="heading">Add a Plant</h1>
        <form className="add" onSubmit={onSubmit}>
          <Input
            register={register}
            rules={{ required: "Required" }}
            error={errors.nameScientific}
            id="nameScientific"
            label="Scientific name"
            type="text"
          />
          <Input
            register={register}
            rules={{ required: "Required" }}
            error={errors.nameEnglish}
            id="nameEnglish"
            label="English name"
            type="text"
          />
          <Input
            register={register}
            error={errors.namePortuguese}
            id="namePortuguese"
            label="Portuguese name"
            type="text"
          />
          <Input
            register={register}
            rules={{ required: "Required" }}
            error={errors.slug}
            id="slug"
            label="Slug"
            type="text"
          />

          <Input
            register={register}
            rules={{ required: "Required", pattern: regexUrlPattern }}
            error={errors.imageURL}
            id="imageURL"
            label="Image URL"
            type="url"
          />
          <Input
            register={register}
            rules={{ pattern: regexUrlPattern }}
            error={errors.imageURL}
            id="imageURL2"
            label="Image URL 2"
            type="url"
          />
          <Input
            register={register}
            rules={{ pattern: regexUrlPattern }}
            error={errors.imageURL}
            id="imageURL3"
            label="Image URL 3"
            type="url"
          />
          <Input
            register={register}
            rules={{ pattern: regexUrlPattern }}
            error={errors.imageURL}
            id="imageURL4"
            label="Image URL 4"
            type="url"
          />
          <Input
            register={register}
            rules={{ pattern: regexUrlPattern }}
            error={errors.imageURL}
            id="imageURL5"
            label="Image URL 5"
            type="url"
          />

          <Input
            register={register}
            error={errors.height}
            id="height"
            label="Height"
            type="text"
          />

          <fieldset>
            <legend>Light:</legend>
            <Input
              register={register}
              error={errors.lightLow}
              id="lightLow"
              label="Shadow"
              type="checkbox"
            />
            <Input
              register={register}
              error={errors.lightMedium}
              id="lightMedium"
              label="Medium"
              type="checkbox"
            />
            <Input
              register={register}
              error={errors.lightHigh}
              id="lightHigh"
              label="Bright"
              type="checkbox"
            />
          </fieldset>

          <TextArea
            register={register}
            error={errors.lightDetailed}
            id="lightDetailed"
            label="Light - Detailed description"
          />

          <fieldset>
            <legend>Water:</legend>
            <Input
              register={register}
              error={errors.waterLow}
              id="waterLow"
              label="Low"
              type="checkbox"
            />
            <Input
              register={register}
              error={errors.waterMedium}
              id="waterMedium"
              label="Medium"
              type="checkbox"
            />
            <Input
              register={register}
              error={errors.waterHigh}
              id="waterHigh"
              label="High"
              type="checkbox"
            />
          </fieldset>

          <TextArea
            register={register}
            error={errors.waterDetailed}
            id="waterDetailed"
            label="Water - Detailed description"
          />
          <TextArea
            register={register}
            error={errors.humidity}
            id="humidity"
            label="Humidity"
          />
          <TextArea
            register={register}
            error={errors.temperature}
            id="temperature"
            label="Temperature"
          />
          <TextArea
            register={register}
            error={errors.soil}
            id="soil"
            label="Soil"
          />
          <TextArea
            register={register}
            error={errors.fertilizer}
            id="fertilizer"
            label="Fertilizer"
          />
          <TextArea
            register={register}
            error={errors.propagation}
            id="propagation"
            label="Propagation"
          />

          <fieldset>
            <legend>Air purifying:</legend>
            <Input
              register={register}
              error={errors.airPurifying}
              id="airPurifying"
              label="Air Purifying"
              type="checkbox"
            />
          </fieldset>

          <input type="submit" value="Add Plant" />
        </form>
      </div>
    </>
  );
}

export default Add;

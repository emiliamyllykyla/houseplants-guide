import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { houseplants } from "../firebase";
import { usePromise } from "../usePromise";
import { useAuth } from "./Auth";
import { DocumentData } from "../types";

import ImageSlider from "./ImageSlider";
import Delete from "./Delete";
import Alert from "./Alert";
import Error from "./Error";

import { FaMagic } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsDroplet } from "react-icons/bs";
import "../plant.css";

const getImages = (plant: DocumentData): string[] => {
  const urlFields = [
    plant.imageURL,
    plant.imageURL2,
    plant.imageURL3,
    plant.imageURL4,
    plant.imageURL5,
  ];
  return urlFields.filter((field, i) => field !== "");
};

const Plant = () => {
  const auth = useAuth();
  let { slug } = useParams<{ slug: string }>();
  const getHouseplant = useCallback(() => houseplants.doc(slug).get(), [slug]);

  const snapshot = usePromise(getHouseplant, null);
  const plant = snapshot?.data();

  if (!snapshot) return <div className="page">Loading...</div>;
  if (!plant)
    return <Error error={{ status: 404, message: "Page not found" }} />;

  return (
    <>
      <Alert />
      <div className="page plant">
        {auth?.token.claims.admin && (
          <Delete houseplants={houseplants} id={snapshot.id} />
        )}
        <div className="slider-heading-container">
          <ImageSlider
            plantName={plant.nameEnglish}
            images={getImages(plant)}
          />
          <div className="heading">
            <h1>
              <span className="name">{plant.nameEnglish}</span>
            </h1>
            <h2>
              Scientific name:{" "}
              <span className="name scientific">{plant.nameScientific}</span>
            </h2>
            <h2>
              Portuguese name:{" "}
              <span className="name">{plant.namePortuguese}</span>
            </h2>
          </div>
        </div>

        <div className="icon-container">
          <div>
            <span className="icon">
              <TiWeatherPartlySunny />
            </span>
            <ul>
              <li>{plant.lightLow ? "Shadow " : ""}</li>
              <li>{plant.lightMedium ? "Medium " : ""}</li>
              <li>{plant.lightHigh ? "Bright " : ""}</li>
            </ul>
          </div>
          <div>
            <span className="icon">
              <BsDroplet />
            </span>
            <ul>
              <li>{plant.waterLow ? "Low " : ""}</li>
              <li>{plant.waterMedium ? "Medium " : ""}</li>
              <li>{plant.waterHigh ? "High " : ""}</li>
            </ul>
          </div>
          {plant.airPurifying && (
            <div>
              <span className="icon">
                <FaMagic />
              </span>
              <span>Air purifying</span>
            </div>
          )}
        </div>

        <h3>Height </h3>
        <p>{plant.height}</p>
        <h3>Light </h3>
        <p>{plant.lightDetailed}</p>
        <h3>Water </h3>
        <p>{plant.waterDetailed}</p>
        <h3>Humidity </h3>
        <p>{plant.humidity}</p>
        <h3>Temperature </h3>
        <p>{plant.temperature}</p>
        <h3>Soil </h3>
        <p>{plant.soil}</p>
        <h3>Fertilizer </h3>
        <p>{plant.fertilizer}</p>
        <h3>Propagation </h3>
        <p>{plant.propagation}</p>
      </div>
    </>
  );
};

export default Plant;

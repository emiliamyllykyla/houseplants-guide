import firebase from "./firebase";

export type FormData = {
  nameScientific: string;
  nameEnglish: string;
  namePortuguese: string;
  slug: string;
  imageURL: string;
  imageURL2: string;
  imageURL3: string;
  imageURL4: string;
  imageURL5: string;
  height: string;
  lightLow: boolean;
  lightMedium: boolean;
  lightHigh: boolean;
  lightDetailed: string;
  waterLow: boolean;
  waterMedium: boolean;
  waterHigh: boolean;
  waterDetailed: string;
  humidity: string;
  temperature: string;
  soil: string;
  fertilizer: string;
  propagation: string;
  airPurifying: boolean;
};

export type ErrorState = { status: number | null; message: string };

export type DocumentData = firebase.firestore.DocumentData;

export type CollectionRef =
  firebase.firestore.CollectionReference<DocumentData>;

export type Data = firebase.firestore.QueryDocumentSnapshot<DocumentData>[];

export type SetFilters = React.Dispatch<React.SetStateAction<string[]>>;

export type SetVisible = React.Dispatch<React.SetStateAction<boolean>>;

export type AlertState = {
  type: "success" | "error";
  message: string;
};

export type SetAlertState = React.Dispatch<
  React.SetStateAction<AlertState | null>
>;

export type AuthState = {
  user: firebase.User;
  token: firebase.auth.IdTokenResult;
};

export type AlertContextType = {
  seen: boolean;
  setSeen: (seen: boolean) => void;
  alert: AlertState | null;
  setAlert: SetAlertState;
};

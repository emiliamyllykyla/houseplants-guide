import { ErrorState } from "../types";

const Error = ({ error }: { error: ErrorState }) => {
  return (
    <div className="page">
      <h1>Error {error.status}</h1>
      {error.message}
    </div>
  );
};

export default Error;

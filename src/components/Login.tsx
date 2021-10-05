import firebase from "../firebase";
import { useAuth } from "./Auth";

const Login = () => {
  const auth = useAuth();

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const handleLogout = () => firebase.auth().signOut();

  return (
    <div className="page">
      <h1>Admin</h1>
      {auth?.user ? (
        <>
          <div>
            Logged in as
            <div>{auth.user.displayName}</div>
            <div>{auth.user.email}</div>
          </div>
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Login;

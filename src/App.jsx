import { createContext, useContext } from "react";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import { LoginContext } from "./LoginContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  let user = {};
  return (
    <BrowserRouter>
      <LoginContext.Provider value={user1}>
        <Toaster />
        <_App />
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

function _App() {
  let user = useContext(LoginContext);
  console.log(user, "From _app");
  if (user == null) return <Login />;
  return <Dashboard />;
}

export default App;

const user1 = {
  name: "Aman Kumar",
  stage_user: 0,
  isApplicant: true,
};

const user2 = {
  name: "Aman_",
  stage_user: 0,
  isApplicant: false,
};

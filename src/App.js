import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./lib/config/firebase";
import { ContextApi } from "./lib/helper/ContextApi";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(null);
  const [isDataAvaliable, setIsDataAvaliable] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      }
      setIsDataAvaliable(true);
    });
  }, []);

  if (!isDataAvaliable) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px"
        }}
      >
        <h1 style={{color: "dodgerblue"}}>loading...</h1>
      </div>
    );
  }

  return (
    <ContextApi.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Routes>
          {isAuth ? (
            <Route index element={<Home />} />
          ) : (
            <Route index element={<Login />} />
          )}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ContextApi.Provider>
  );
}

export default App;

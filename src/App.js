import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { useState } from "react";
import { appData } from "./utils/contextApi";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  const [choosenLanguage, setChoosenLanguage] = useState("en");

  return (
    <appData.Provider value={{ choosenLanguage, setChoosenLanguage }}>
      <div className="App">
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </appData.Provider>
  );
}

export default App;

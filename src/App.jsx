import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Ui/Loader";
import { Home, About, Contact, Experience, Projects } from "./pages";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoading, setisLoading] = useState(true);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Route>,
    ),
  );

  return (
    <>
      {isLoading ? (
        <Loader onComplete={setisLoading} />
      ) : (
        <RouterProvider router={router} />
      )}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#111827",
            color: "#fff",
            padding: "16px 20px",
            borderRadius: "12px",
            fontSize: "15px",
          },
        }}
      />
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import SplashCursor from "./pages/SplashCursor";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        {/* <SplashCursor size={20} /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

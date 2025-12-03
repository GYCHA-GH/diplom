import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UploadPage } from "./pages/Upload";
import { Login } from "./pages/Auth/Login.tsx";
import { Register } from "./pages/Auth/Register.tsx";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/authors" element={<Home />} />
        <Route path="/archive" element={<Home />} />
        <Route path="/support" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

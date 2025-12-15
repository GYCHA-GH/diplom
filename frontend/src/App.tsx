import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UploadPage } from "./pages/Upload";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичные страницы */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
  
        {/* Защищённые страницы (требуют авторизации) */}
        <Route path="/upload" element={<UploadPage />} />

        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Компонент для 404
function NotFound() {
  return (
    <div className="min-h-screen bg-[#202326] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-white/60 mb-6">Страница не найдена</p>
        <a
          href="/"
          className="px-6 py-3 bg-[#208097] hover:bg-[#1a6a7e] rounded-lg font-medium transition-colors inline-block"
        >
          На главную
        </a>
      </div>
    </div>
  );
}

export default App;

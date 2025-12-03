import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Имитируем запрос к API
    setTimeout(() => {
      if (email && password) {
        // Сохраняем токен в localStorage (временно)
        localStorage.setItem("authToken", "fake-token-" + Date.now());
        navigate("/");
      } else {
        setError("Заполните все поля");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="w-full max-w-md">
        <div className="bg-[#2f3c46] rounded-lg px-8 py-10 text-white shadow-2xl">
          <h1 className="text-2xl font-semibold mb-2 text-center">Вход</h1>
          <p className="text-sm text-white/60 mb-6 text-center">
            Войдите в свой аккаунт
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 text-red-300 text-sm border border-red-500/30">
              ✕ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium transition"
            >
              {isLoading ? "Загрузка..." : "Войти"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm">
            <p className="text-white/60 mb-2">Нет аккаунта?</p>
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

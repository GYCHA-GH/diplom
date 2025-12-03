import { useState } from "react";
import { MainLayout } from "../layouts/MainLayout";

export function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Проверяем, что это PDF
      if (selectedFile.type !== "application/pdf") {
        setMessage({ type: "error", text: "Загрузите PDF файл" });
        return;
      }
      // Проверяем размер (макс 50MB)
      if (selectedFile.size > 50 * 1024 * 1024) {
        setMessage({ type: "error", text: "Файл не должен быть больше 50MB" });
        return;
      }
      setFile(selectedFile);
      setMessage(null);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      const input = document.createElement("input");
      input.type = "file";
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(droppedFile);
      input.files = dataTransfer.files;
      handleFileChange({ target: input } as any);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage({ type: "error", text: "Выберите файл" });
      return;
    }

    setIsLoading(true);
    setUploadProgress(0);

    // Имитируем загрузку на 3 секунды
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.random() * 30;
      });
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      setMessage({
        type: "success",
        text: `Файл "${file.name}" успешно загружен!`,
      });
      setIsLoading(false);
      setFile(null);
      setUploadProgress(0);
    }, 3000);
  };

  return (
    <MainLayout>
      <div className="w-full max-w-2xl bg-[#2f3c46] rounded-lg px-10 py-8 text-white shadow-2xl">
        <h1 className="text-2xl font-semibold mb-2">Добавление газеты</h1>
        <p className="text-sm text-white/60 mb-6">Загрузите PDF файл с газетой</p>

        {/* Зона дропа */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-white/30 rounded-xl py-12 px-4 mb-6 flex flex-col items-center justify-center text-center hover:border-white/50 transition cursor-pointer"
        >
          <input
            type="file"
            id="file-input"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="file-input" className="w-full cursor-pointer">
            <div className="mb-4 text-5xl">📄</div>
            <p className="text-base font-medium mb-2">Добавить файл</p>
            <p className="text-xs text-white/70 mb-4">
              Чтобы загрузить файл, перетащите его или{" "}
              <span className="underline text-white/90">нажмите здесь</span>
            </p>
          </label>

          {file && (
            <div className="mt-4 text-sm text-blue-300 bg-blue-500/10 px-4 py-2 rounded">
              ✓ Выбран: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </div>
          )}
        </div>

        {/* Кнопка загрузки */}
        <button
          onClick={handleUpload}
          disabled={!file || isLoading}
          className={`w-full py-3 rounded-lg font-medium transition ${
            file && !isLoading
              ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              : "bg-white/10 text-white/50 cursor-not-allowed"
          }`}
        >
          {isLoading ? "Загружается..." : "Загрузить файл"}
        </button>

        {/* Прогресс бар */}
        {isLoading && (
          <div className="mt-6">
            <p className="text-xs text-white/80 mb-2">
              Идёт загрузка... {Math.round(uploadProgress)}%
            </p>
            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Сообщение */}
        {message && (
          <div
            className={`mt-6 p-4 rounded-lg text-sm ${
              message.type === "success"
                ? "bg-green-500/10 text-green-300 border border-green-500/30"
                : "bg-red-500/10 text-red-300 border border-red-500/30"
            }`}
          >
            {message.type === "success" ? "✓" : "✕"} {message.text}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

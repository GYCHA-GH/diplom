import { MainLayout } from "../layouts/MainLayout";

export function Home() {
  return (
    <MainLayout>
      <div className="w-full max-w-5xl flex items-center justify-center">
        <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden flex justify-center">
          <img
            src="./assets/журнал.png"
            alt="Разворот газеты"
            className="w-ful l h-auto object-contain"
          />
        </div>
      </div>
    </MainLayout>
  );
}

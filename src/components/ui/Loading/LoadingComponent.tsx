import { useEffect, useMemo, useState } from "react";
import logo from "../../../assets/star-cv-logo.webp";
import "./Loading.css";

function LoadingComponent() {
  // Lista de mensajes para mostrar
  const messages = useMemo(() => {
    return [
      "Construyendo tu universo digital...",
      "Alineando las estrellas de tu portafolio...",
      "Preparando la galería de proyectos...",
      "Curando tu experiencia profesional...",
      "Dibujando tu trayectoria estelar...",
    ];
  }, []);

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  // Función para rotar mensajes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const currentIndex = messages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8f7]">
      <div className={`flex flex-col items-center justify-center `}>
        {/* Contenedor de logo */}
        <div
          className={`
          w-16 h-16 p-2
          md:w-24 md:h-24 md:p-3
          lg:w-32 lg:h-32 lg:p-4
          flex items-center justify-center 
          animate-pulse 
          gap-3 md:gap-5 lg:gap-6
        `}
          style={{
            animationDuration: "3s",
          }}
        >
          <img className={`w-full h-full`} src={logo} alt="StarCv Logo" />
        </div>

        {/* Título de la marca */}
        <h1
          className={`text-2xl md:text-4xl lg:text-5xl text-[--color-text] tracking-tight font-bold`}
        >
          STARCV
        </h1>

        {/* Mensaje de carga con animación fade-in-out*/}

        <div className="h-8 flex items-center justify-center">
          <p
            className={`
            text-sm md:text-base lg:text-lg
            text-[--color-text-muted] 
            transition-opacity duration-1000
            animate-[fadeInOut_3s_ease-in-out_infinite]
          `}
          >
            {currentMessage}
          </p>
        </div>

        {/* Barra de progreso minimalista con animación infinita */}
        <div
          className={`
        w-32 h-0.5  md:w-48 md:h-1 lg:w-64 lg:h-1.5
        bg-[#e9e1df] 
        rounded-full 
        overflow-hidden 
        relative
                  gap-3 md:gap-5 lg:gap-6

      `}
        >
          <div
            className="absolute top-0 left-0 h-full bg-[#3e2522] rounded-full"
            style={{
              width: "30%",
              animation: "progress 2s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingComponent;

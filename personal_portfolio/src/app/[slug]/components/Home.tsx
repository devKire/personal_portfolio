"use client";

import { User } from "@prisma/client";
import {
  ArrowDown,
  Cloud,
  Code,
  Database,
  Smartphone,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

interface SectionHomeProps {
  user: Pick<User, "name" | "avatarUrl" | "bio" | "role">;
}

const SectionHome = ({ user }: SectionHomeProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Imagens de fundo relacionadas a desenvolvimento
  const backgroundSlides = [
    "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [backgroundSlides.length]);

  const services = [
    {
      icon: Code,
      label: "Desenvolvimento Frontend",
      color: "from-blue-500 to-cyan-500",
      description: "Interfaces modernas com React, Next.js e TypeScript",
    },
    {
      icon: Database,
      label: "Desenvolvimento Backend",
      color: "from-purple-500 to-pink-500",
      description: "APIs robustas e sistemas escaláveis",
    },
    {
      icon: Smartphone,
      label: "Apps Mobile",
      color: "from-green-500 to-emerald-500",
      description: "Aplicativos nativos e híbridos",
    },
    {
      icon: Cloud,
      label: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      description: "Deploy, containers e infraestrutura cloud",
    },
  ];

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {backgroundSlides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${
              index === currentSlide
                ? "scale-110 opacity-40"
                : "scale-100 opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-blue-400 opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/70 to-blue-900/90" />

      {/* Conteúdo principal centralizado */}
      <div className="relative z-10 w-full max-w-6xl px-4 text-center">
        <div
          className={`flex flex-col items-center transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Avatar */}
          <div className="mb-8 sm:mb-12">
            <div className="group relative mx-auto">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 blur-xl transition-all duration-700 group-hover:opacity-60 group-hover:blur-2xl sm:-inset-4" />
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-white/40 sm:h-40 sm:w-40">
                <Image
                  src={user.avatarUrl || "/EU2.jpg"}
                  alt={user.name}
                  fill
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sm:-right-2 sm:-bottom-2 sm:h-10 sm:w-10">
                <Star className="h-4 w-4 fill-current text-white sm:h-5 sm:w-5" />
              </div>
            </div>
          </div>

          {/* Nome e descrição */}
          <div className="mb-8 space-y-4 sm:mb-10 sm:space-y-6">
            <h1 className="text-3xl font-extrabold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl">
              OLÁ, <span className="wave-emoji">👋</span> EU SOU O{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {user.name}
              </span>
              !
            </h1>

            <p className="mx-auto inline-block rounded-full bg-white/10 px-4 py-2 text-base font-medium text-blue-200 backdrop-blur-sm sm:px-6 sm:text-lg md:text-xl">
              {user.role || "DESENVOLVEDOR FULLSTACK"}
            </p>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
              {user.bio ||
                "Sou apaixonado por tecnologia, acredito no poder da educação e me dedico a ajudar vidas por meio da programação. Em cada linha de código, busco inovação e criar experiências incríveis."}
            </p>
          </div>

          {/* Stats em destaque */}
          <div className="mb-8 grid grid-cols-3 gap-4 sm:mb-12 sm:flex sm:justify-center sm:gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                +15
              </div>
              <div className="text-xs text-blue-200 sm:text-sm">
                Projetos Concluídos
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                +10
              </div>
              <div className="text-xs text-blue-200 sm:text-sm">
                Tecnologias Dominadas
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                100%
              </div>
              <div className="text-xs text-blue-200 sm:text-sm">Dedicado</div>
            </div>
          </div>

          {/* Services Grid - Ajustado para mobile */}
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {services.map(({ icon: Icon, label, color, description }, idx) => (
              <div
                key={idx}
                className={`group relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl sm:rounded-2xl sm:p-6`}
              >
                <div
                  className={`h-10 w-10 rounded-lg bg-gradient-to-r sm:h-14 sm:w-14 sm:rounded-xl ${color} mx-auto mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg sm:mb-4`}
                >
                  <Icon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                </div>
                <h3 className="mb-1 text-center text-sm font-semibold sm:mb-2 sm:text-base md:text-lg">
                  {label}
                </h3>
                <p className="text-center text-xs text-white/70 sm:text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Ajustados para mobile */}
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              className="group relative rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5 text-base font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/25 sm:px-8 sm:py-6 sm:text-lg"
              onClick={() => (window.location.href = "#projects")}
            >
              <span className="relative flex items-center">
                <Code className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6" />
                Ver Projetos
              </span>
            </Button>

            <Button
              className="group rounded-full border-2 border-white/30 bg-white/5 px-6 py-5 text-base font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:shadow-lg sm:px-8 sm:py-6 sm:text-lg"
              onClick={() => (window.location.href = "#contact")}
            >
              <span className="flex items-center">
                <Smartphone className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6" />
                Entrar em Contato
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer sm:bottom-8"
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center text-white/70 transition-colors hover:text-white">
          <span className="mb-1 text-xs font-medium sm:mb-2 sm:text-sm">
            Saiba mais
          </span>
          <div className="rounded-full bg-white/20 p-1 backdrop-blur-sm sm:p-2">
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2 sm:bottom-6 sm:space-x-3">
        {backgroundSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 sm:h-3 sm:w-3 ${
              index === currentSlide
                ? "scale-125 bg-white shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionHome;

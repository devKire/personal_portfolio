"use client";

import { User } from "@prisma/client";
import {
  ArrowDown,
  Cloud,
  Code,
  Database,
  Heart,
  Monitor,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Imagens de fundo otimizadas
  const backgroundSlides = [
    "/api/placeholder/1920/1080?text=Code&bg=0f172a&textColor=38bdf8",
    "/api/placeholder/1920/1080?text=Tech&bg=1e1b4b&textColor=a855f7",
    "/api/placeholder/1920/1080?text=Dev&bg=164e63&textColor=22d3ee",
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundSlides.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const services = [
    {
      icon: Code,
      label: "Desenvolvimento Web",
      color: "from-purple-500 to-pink-500",
      description: "React, TypeScript, HTML e CSS",
      delay: "300ms",
    },
    {
      icon: Monitor,
      label: "Design e UI/UX",
      color: "from-blue-500 to-cyan-500",
      description: "Criação de interfaces e experiência do usuário",
      delay: "400ms",
    },
    {
      icon: Users,
      label: "Comunicação e Colaboração",
      color: "from-green-500 to-emerald-500",
      description: "Trabalho em equipe e interação com clientes",
      delay: "500ms",
    },
    {
      icon: Zap,
      label: "Autonomia e Proatividade",
      color: "from-red-500 to-pink-500",
      description: "Gerenciamento de projetos e soluções rápidas",
      delay: "700ms",
    },
  ];

  const stats = [
    { number: "10+", label: "Projetos" },
    { number: "10+", label: "Tecnologias" },
    { number: "100%", label: "Dedicado" },
    { number: "24/7", label: "Disponível" },
  ];

  const scrollToNextSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 text-white sm:px-6 sm:py-12 md:py-16"
      onMouseMove={handleMouseMove}
    >
      {/* Background com parallax sutil */}
      <div className="absolute inset-0">
        {backgroundSlides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out ${
              index === currentSlide
                ? "scale-105 opacity-100"
                : "scale-100 opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transform: `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          />
        ))}
      </div>

      {/* Overlay gradiente dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/80 to-blue-900/95" />

      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="animate-float absolute h-1 w-1 rounded-full bg-blue-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 p-10 lg:grid-cols-2 lg:gap-16">
          {/* Coluna esquerda - Conteúdo principal */}
          <div
            className={`space-y-8 text-center lg:text-left ${
              isLoaded ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Badge de boas-vindas */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Bem-vindo ao meu portfólio
              </span>
            </div>

            {/* Headline principal */}
            <div className="space-y-4">
              <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                Olá, sou o{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {user.name}
                </span>
              </h1>

              <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-start">
                <p className="text-xl font-semibold text-blue-300 md:text-2xl">
                  {user.role || "Desenvolvedor Full Stack"}
                </p>
                <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="text-sm text-green-300">Disponível</span>
                </div>
              </div>
            </div>

            {/* Descrição */}
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 lg:mx-0 lg:text-xl">
              {user.bio ||
                "Transformo ideias em soluções digitais inovadoras. Especializado em criar experiências excepcionais com as mais modernas tecnologias do mercado."}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10"
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.number}
                  </div>
                  <div className="text-xs font-medium text-blue-300 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button
                className="group relative rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Zap className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                Ver Projetos
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity group-hover:opacity-20" />
              </Button>

              <Button
                variant="outline"
                className="group rounded-full border-2 border-white/30 bg-white/5 px-8 py-6 text-lg font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Heart className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                Vamos Conversar
              </Button>
            </div>
          </div>

          {/* Coluna direita - Avatar e serviços */}
          <div
            className={`space-y-8 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {/* Avatar com efeito */}
            <div
              className="relative mx-auto lg:mx-0 lg:ml-auto"
              style={{ maxWidth: "280px" }}
            >
              {/* Efeito de brilho */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl transition-all duration-1000 hover:opacity-30 hover:blur-2xl" />

              {/* Container do avatar */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white/30">
                  <Image
                    src={user.avatarUrl || "/EU2.jpg"}
                    alt={user.name}
                    width={280}
                    height={280}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                {/* Badge de destaque */}
                <div className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl">
                  <Target className="h-6 w-6 text-white" />
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -bottom-2 -left-2 h-8 w-8 rounded-full bg-cyan-500/20 backdrop-blur-sm" />
                <div className="absolute -right-2 -bottom-6 h-6 w-6 rounded-full bg-pink-500/20 backdrop-blur-sm" />
              </div>
            </div>

            {/* Grid de serviços compacto */}
            <div className="grid grid-cols-2 gap-4">
              {services.map(
                ({ icon: Icon, label, color, description, delay }, idx) => (
                  <div
                    key={idx}
                    className={`group relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl`}
                    style={{ animationDelay: delay }}
                  >
                    <div
                      className={`h-12 w-12 rounded-lg bg-gradient-to-r ${color} mx-auto mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-1 text-center text-sm font-semibold">
                      {label}
                    </h3>
                    <p className="text-center text-xs text-gray-300">
                      {description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center text-white/70 transition-colors hover:text-white">
          <span className="mb-2 text-sm font-medium">Explorar</span>
          <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm">
            <ArrowDown className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {backgroundSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "scale-125 bg-white shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Efeitos CSS customizados */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SectionHome;

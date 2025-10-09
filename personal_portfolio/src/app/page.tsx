"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Code,
  Cpu,
  Database,
  Globe,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Só executa no cliente
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simula um progresso de carregamento
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Redireciona após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        router.push("/erikdossantos");
      }, 800);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [router]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push("/erikdossantos");
    }, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6"
        >
          {/* Background Elements - Efeitos de código e tecnologia */}
          <div className="absolute inset-0 opacity-30">
            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 h-32 w-32 animate-pulse rounded-full bg-blue-400/20 blur-3xl"></div>
            <div className="absolute right-1/3 bottom-1/3 h-40 w-40 animate-pulse rounded-full bg-purple-400/20 blur-3xl delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 h-24 w-24 animate-pulse rounded-full bg-cyan-400/20 blur-2xl delay-500"></div>

            {/* Grid Pattern - Simulando interface de desenvolvimento */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid h-full w-full grid-cols-12 gap-1">
                {[...Array(144)].map((_, i) => (
                  <div key={i} className="rounded-sm bg-white/5"></div>
                ))}
              </div>
            </div>

            {/* Código flutuante animado */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute font-mono text-xs text-green-400/30"
                  initial={{
                    x: Math.random() * windowSize.width,
                    y: Math.random() * windowSize.height,
                  }}
                  animate={{
                    y: [0, -windowSize.height],
                  }}
                  transition={{
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                >
                  {`<Code ${i}/>`}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Elementos flutuantes tecnológicos */}
          {windowSize.width > 0 && windowSize.height > 0 && (
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: Math.random() * windowSize.width,
                    y: Math.random() * windowSize.height,
                    rotate: Math.random() * 360,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                >
                  {i % 5 === 0 ? (
                    <Code className="h-5 w-5 text-blue-400/60" />
                  ) : i % 5 === 1 ? (
                    <Cpu className="h-4 w-4 text-purple-400/60" />
                  ) : i % 5 === 2 ? (
                    <Database className="h-4 w-4 text-cyan-400/60" />
                  ) : i % 5 === 3 ? (
                    <Globe className="h-4 w-4 text-green-400/60" />
                  ) : (
                    <Terminal className="h-4 w-4 text-yellow-400/60" />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Efeito de transição tecnológica */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 bg-black"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 0.5, times: [0, 0.1, 1], delay: 0.5 }}
          />

          {/* Conteúdo Principal */}
          <div className="z-10 max-w-4xl text-center">
            {/* Logo Animation - Código/Tecnologia */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Zap className="h-12 w-12 text-white" />
                </motion.div>

                {/* Reflection Effect */}
                <motion.div
                  className="absolute top-4 right-4 h-3 w-3 rounded-full bg-white/80"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                />

                <motion.div
                  className="absolute -top-2 -right-2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Sparkles className="h-6 w-6 text-blue-400" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <Code className="h-5 w-5 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title com efeito de gradiente animado */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
                ERIK
              </h1>
              <h1 className="-mt-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
                SANTOS
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-3 text-2xl font-light text-gray-300 md:text-3xl"
            >
              Desenvolvedor Full-Stack
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-8 text-3xl font-semibold text-white md:text-4xl"
            >
              Criando Experiências Digitais
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-400"
            >
              Transformo ideias em realidade digital através de código limpo,
              arquitetura escalável e experiências que encantam usuários.
            </motion.p>

            {/* Progress Bar - Simulando compilação */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 2 }}
              className="mx-auto mb-8 max-w-md"
            >
              <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="mt-2 font-mono text-sm text-gray-400"
              >
                Compilando projetos... {progress}%
              </motion.p>
            </motion.div>

            {/* Skip Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              onClick={handleSkip}
              className="group inline-flex items-center gap-3 rounded-full border border-blue-600 bg-blue-500/10 px-10 py-5 text-blue-400 backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-2xl hover:shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg font-semibold">Explorar Portfólio</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Zap className="h-5 w-5" />
              </motion.div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>

            {/* Tech Stack - Especialidades */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
            >
              {[
                { icon: Code, label: "Frontend" },
                { icon: Database, label: "Backend" },
                { icon: Cpu, label: "Sistemas" },
                { icon: Globe, label: "Web" },
                { icon: Terminal, label: "DevOps" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className="flex items-center gap-2 rounded-full bg-slate-800/50 px-4 py-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, color: "#60A5FA" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <tech.icon className="h-4 w-4 text-blue-400" />
                  <span>{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="mt-8 grid grid-cols-3 gap-8 text-center"
            >
              {[
                { number: "50+", label: "Projetos" },
                { number: "3+", label: "Anos Exp" },
                { number: "100%", label: "Dedicado" },
              ].map((stat, index) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-blue-400">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="mt-8 font-mono text-xs text-gray-500"
            >
              <p>Transformando linhas de código em experiências desde 2021</p>
            </motion.div>
          </div>

          {/* Efeito de flash sutil */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 0.3, times: [0, 0.1, 1], delay: 1 }}
          />

          {/* Bottom Gradient */}
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />

          {/* Partículas de código */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute font-mono text-xs text-green-400/20"
                initial={{
                  x: Math.random() * windowSize.width,
                  y: -20,
                }}
                animate={{
                  y: windowSize.height + 20,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              >
                {`const ${["innovation", "creativity", "code", "tech", "future", "digital", "web", "app"][i]} = true;`}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

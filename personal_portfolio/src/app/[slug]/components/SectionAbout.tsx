"use client";

import { User } from "@prisma/client";
import { easeOut,motion } from "framer-motion";
import {
  BookOpen,
  BookText,
  Code,
  Cpu,
  Database,
  GamepadIcon,
  Globe,
  Heart,
  Laptop,
  Lightbulb,
  MapPin,
  Music,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SectionAboutProps {
  user: Pick<User, "name" | "avatarUrl" | "bio" | "role" | "location">;
}

const SectionAbout = ({ user }: SectionAboutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-black to-blue-900/30 px-6 py-24 text-white"
    >
      {/* Elementos decorativos de fundo animados */}
      <motion.div
        className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-blue-500/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-20 right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"
      />

      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
      />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl space-y-20 text-center">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg backdrop-blur-sm"
            >
              <Zap className="mr-2 h-5 w-5" />
              Desenvolvedor Fullstack & Analista de Dados
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Sobre{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {user.name}
            </span>
          </motion.h2>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Separator className="mx-auto h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl"
          >
            Sou apaixonado por tecnologia, acredito no poder da educação e me
            dedico a ajudar vidas por meio da programação. A cada linha de
            código, busco trazer{" "}
            <span className="font-semibold text-cyan-300">inovação</span> e
            criar{" "}
            <span className="font-semibold text-purple-300">
              experiências únicas
            </span>
            .
          </motion.p>
        </motion.div>

        {/* Missão, Visão e Valores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* Formação */}
          <motion.div variants={itemVariants}>
            <Card className="group relative overflow-hidden rounded-3xl border-slate-700/50 bg-slate-800/30 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <CardContent className="relative z-10 flex flex-col items-center space-y-6 p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  <BookOpen className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Formação</h3>
                <p className="text-base leading-relaxed text-slate-300">
                  Cursando{" "}
                  <strong className="text-blue-300">
                    Análise e Desenvolvimento de Sistemas
                  </strong>
                  pela Faculdade SENAI em Joinville – SC, com aplicação prática
                  em TI, programação, design, automação e análise de dados.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experiência */}
          <motion.div variants={itemVariants}>
            <Card className="group relative overflow-hidden rounded-3xl border-slate-700/50 bg-slate-800/30 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <CardContent className="relative z-10 flex flex-col items-center space-y-6 p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  <Laptop className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Experiência</h3>
                <p className="text-base leading-relaxed text-slate-300">
                  Atuo de forma{" "}
                  <strong className="text-purple-300">autônoma</strong> no
                  desenvolvimento de projetos com
                  <strong className="text-purple-300"> React, Next.js</strong> e
                  <strong className="text-purple-300"> TypeScript</strong>.
                  Minha experiência anterior em{" "}
                  <strong className="text-purple-300">logística</strong>
                  aprimorou minhas habilidades em{" "}
                  <strong className="text-purple-300">
                    análise de dados
                  </strong>e{" "}
                  <strong className="text-purple-300">soft skills</strong> como
                  comunicação e resolução de problemas.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Valores */}
          <motion.div variants={itemVariants}>
            <Card className="group relative overflow-hidden rounded-3xl border-slate-700/50 bg-slate-800/30 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <CardContent className="relative z-10 flex flex-col items-center space-y-6 p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  <Heart className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Valores</h3>
                <p className="text-base leading-relaxed text-slate-300">
                  <strong className="text-green-300">
                    Aprendizado contínuo
                  </strong>
                  , trabalho em equipe, troca de conhecimento e foco em soluções
                  com propósito. Busco crescer na área de tecnologia e colaborar
                  com produtos que façam a diferença.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white md:text-4xl"
            >
              Minhas{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Expertises
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-lg text-slate-400"
            >
              Conhecimentos técnicos que aplico para criar soluções inovadoras
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* Frontend */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden rounded-2xl border-slate-700/50 bg-slate-800/40 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                <CardContent className="flex flex-col items-center space-y-5 p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Code className="h-7 w-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Frontend</h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    React, JavaScript, TypeScript, HTML, CSS
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Análise de Dados */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden rounded-2xl border-slate-700/50 bg-slate-800/40 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                <CardContent className="flex flex-col items-center space-y-5 p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Análise de Dados
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Excel, Power BI, indicadores e métricas
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Automação */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden rounded-2xl border-slate-700/50 bg-slate-800/40 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
                <CardContent className="flex flex-col items-center space-y-5 p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Cpu className="h-7 w-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Automação</h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Processos otimizados e soluções eficientes
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Banco de Dados */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden rounded-2xl border-slate-700/50 bg-slate-800/40 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
                <CardContent className="flex flex-col items-center space-y-5 p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Database className="h-7 w-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Banco de Dados
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Conhecimentos em estrutura e manipulação de dados
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Informações Adicionais */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {/* Idiomas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border-slate-700/50 bg-slate-800/40 p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-6 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-md">
                <Globe className="h-6 w-6" />
              </div>
            </div>
            <h4 className="mb-6 text-xl font-bold text-white">Idiomas</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-slate-700/30 p-3 transition-colors hover:bg-slate-700/50">
                <span className="text-slate-300">Português</span>
                <Badge className="border-green-500/30 bg-green-500/20 text-green-300">
                  Nativo
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-slate-700/30 p-3 transition-colors hover:bg-slate-700/50">
                <span className="text-slate-300">Espanhol</span>
                <Badge className="border-yellow-500/30 bg-yellow-500/20 text-yellow-300">
                  Intermediário
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-slate-700/30 p-3 transition-colors hover:bg-slate-700/50">
                <span className="text-slate-300">Inglês</span>
                <Badge className="border-blue-500/30 bg-blue-500/20 text-blue-300">
                  Técnico
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* Hobbies & Interesses */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border-slate-700/50 bg-slate-800/40 p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-6 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
            <h4 className="mb-6 text-xl font-bold text-white">
              Hobbies & Interesses
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BookText, label: "Leitura" },
                { icon: GamepadIcon, label: "Jogos" },
                { icon: Music, label: "Música" },
                { icon: Lightbulb, label: "Inovação" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group/hobby flex flex-col items-center rounded-lg bg-slate-700/30 p-4 transition-colors hover:bg-slate-700/50"
                >
                  <item.icon className="mb-2 h-6 w-6 text-purple-400 transition-transform group-hover/hobby:scale-110" />
                  <span className="text-sm text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionAbout;

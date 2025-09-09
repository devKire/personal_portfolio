"use client";

import { User } from "@prisma/client";
import {
  BookOpen,
  Code,
  Cpu,
  Database,
  Heart,
  Laptop,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SectionAboutProps {
  user: Pick<User, "name" | "avatarUrl" | "bio" | "role" | "location">;
}
const SectionAbout = ({ user }: SectionAboutProps) => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800 px-6 py-24 text-white"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-6xl space-y-16 text-center">
        {/* Cabeçalho */}
        <div className="space-y-6">
          <Badge
            variant="secondary"
            className="bg-blue-900 px-4 py-2 text-sm font-semibold text-blue-100"
          >
            <Code className="mr-2 h-4 w-4" />
            Desenvolvedor Fullstack
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Sobre <span className="text-blue-400">{user.name}</span>
          </h2>

          <Separator className="mx-auto w-24 bg-blue-500" />

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Sou apaixonado por tecnologia, acredito no poder da educação e me
            dedico a ajudar vidas por meio da programação. A cada linha de
            código, busco trazer inovação e criar experiências únicas.
          </p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Formação */}
          <Card className="group rounded-2xl border-slate-700 bg-slate-800/50 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center space-y-6 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/20 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">Formação</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Cursando <strong>Análise e Desenvolvimento de Sistemas</strong>
                pela Faculdade SENAI em Joinville – SC, com aplicação prática em
                TI, programação, design, automação e análise de dados.
              </p>
            </CardContent>
          </Card>

          {/* Experiência */}
          <Card className="group rounded-2xl border-slate-700 bg-slate-800/50 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center space-y-6 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/20 text-purple-400 transition-colors duration-300 group-hover:bg-purple-500 group-hover:text-white">
                <Laptop className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">Experiência</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Atuo como <strong>Operador de Logística</strong> com foco em
                análise de dados através de Excel e Power BI, enquanto
                desenvolvo projetos com React, JavaScript, TypeScript, HTML e
                CSS.
              </p>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card className="group rounded-2xl border-slate-700 bg-slate-800/50 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <CardContent className="flex flex-col items-center space-y-6 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-900/20 text-green-400 transition-colors duration-300 group-hover:bg-green-500 group-hover:text-white">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">Valores</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Aprendizado contínuo, trabalho em equipe, troca de conhecimento
                e foco em soluções com propósito. Busco crescer na área de
                tecnologia e colaborar com produtos que façam a diferença.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Habilidades */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-slate-200">
            Minhas <span className="text-blue-400">Habilidades</span>
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Frontend */}
            <Card className="group rounded-xl border-slate-700 bg-slate-800/50 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/20 text-blue-400">
                  <Code className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-white">Frontend</h4>
                <p className="text-xs text-slate-400">
                  React, JavaScript, TypeScript, HTML, CSS
                </p>
              </CardContent>
            </Card>

            {/* Análise de Dados */}
            <Card className="group rounded-xl border-slate-700 bg-slate-800/50 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/20 text-purple-400">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-white">Análise de Dados</h4>
                <p className="text-xs text-slate-400">
                  Excel, Power BI, indicadores e métricas
                </p>
              </CardContent>
            </Card>

            {/* Automação */}
            <Card className="group rounded-xl border-slate-700 bg-slate-800/50 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900/20 text-green-400">
                  <Cpu className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-white">Automação</h4>
                <p className="text-xs text-slate-400">
                  Processos otimizados e soluções eficientes
                </p>
              </CardContent>
            </Card>

            {/* Banco de Dados */}
            <Card className="group rounded-xl border-slate-700 bg-slate-800/50 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-900/20 text-orange-400">
                  <Database className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-white">Banco de Dados</h4>
                <p className="text-xs text-slate-400">
                  Conhecimentos em estrutura e manipulação de dados
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
          <div className="rounded-xl border-slate-700 bg-slate-800/50 p-6 text-center">
            <h4 className="mb-4 font-semibold text-white">Idiomas</h4>
            <div className="space-y-2">
              <p className="text-sm text-slate-300">Português (nativo)</p>
              <p className="text-sm text-slate-300">Espanhol (intermediário)</p>
              <p className="text-sm text-slate-300">Inglês técnico (básico)</p>
            </div>
          </div>

          <div className="rounded-xl border-slate-700 bg-slate-800/50 p-6 text-center">
            <h4 className="mb-4 font-semibold text-white">
              Hobbies & Interesses
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-slate-300">Leitura</p>
              <p className="text-sm text-slate-300">Jogos com amigos</p>
              <p className="text-sm text-slate-300">Ouvir música</p>
              <p className="text-sm text-slate-300">Tecnologia e inovação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;

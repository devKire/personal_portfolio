"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  CheckCircle,
  ChevronRight,
  Code,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

export function SectionProcess() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const steps = [
    {
      title: "Briefing e Análise",
      description: "Compreensão completa do seu negócio e objetivos",
      icon: <UserCheck className="h-12 w-12 text-white" />,
      details: [
        "Entrevista detalhada sobre seu nicho e público-alvo",
        "Análise de concorrência e mercado",
        "Definição de objetivos e KPIs",
        "Identificação de oportunidades digitais",
      ],
      flipTitle: "Diagnóstico Digital",
      flipDescription:
        "Realizamos uma análise completa do seu negócio para entender suas necessidades específicas e criar uma estratégia personalizada de marketing digital.",
    },
    {
      title: "Estratégia Personalizada",
      description: "Desenvolvimento do plano de ação digital",
      icon: <Target className="h-12 w-12 text-white" />,
      details: [
        "Definição da persona e jornada do cliente",
        "Planejamento de conteúdo e canais",
        "Estratégia de SEO e tráfego orgânico",
        "Cronograma de implementação",
      ],
      flipTitle: "Plano Estratégico",
      flipDescription:
        "Desenvolvemos uma estratégia personalizada que se alinha com seus objetivos de negócio, maximizando o ROI e otimizando seus recursos digitais.",
    },
    {
      title: "Desenvolvimento Web",
      description: "Criação da sua presença digital profissional",
      icon: <Code className="h-12 w-12 text-white" />,
      details: [
        "Criação de landing pages otimizadas",
        "Design responsivo e moderno",
        "Otimização para mecanismos de busca",
        "Integração com ferramentas de analytics",
      ],
      flipTitle: "Presença Digital",
      flipDescription:
        "Desenvolvemos sites e landing pages que convertem, com design atraente, performance otimizada e experiência do usuário excepcional.",
    },
    {
      title: "Gestão de Mídias",
      description: "Criação e gestão de conteúdo estratégico",
      icon: <Megaphone className="h-12 w-12 text-white" />,
      details: [
        "Criação de conteúdo relevante e engajador",
        "Gestão de redes sociais e comunidade",
        "Produção de material visual profissional",
        "Calendarização e agendamento",
      ],
      flipTitle: "Content Strategy",
      flipDescription:
        "Criamos conteúdo estratégico que conecta sua marca com seu público, construindo autoridade e engajamento nas redes sociais.",
    },
    {
      title: "Tráfego Pago",
      description: "Campanhas otimizadas para resultados",
      icon: <BarChart3 className="h-12 w-12 text-white" />,
      details: [
        "Criação e gestão de campanhas no Meta Ads",
        "Segmentação avançada de público",
        "Otimização contínua de performance",
        "Relatórios detalhados de resultados",
      ],
      flipTitle: "Performance Marketing",
      flipDescription:
        "Gerenciamos campanhas de tráfego pago que geram leads qualificados e vendas, com otimização constante para melhor ROI.",
    },
    {
      title: "Resultados & Otimização",
      description: "Análise contínua e melhorias",
      icon: <ShieldCheck className="h-12 w-12 text-white" />,
      details: [
        "Monitoramento de métricas e KPIs",
        "Análise de dados e insights",
        "Otimização contínua das estratégias",
        "Relatórios mensais de performance",
      ],
      flipTitle: "Melhoria Contínua",
      flipDescription:
        "Monitoramos, analisamos e otimizamos continuamente todas as estratégias para garantir que seus objetivos sejam superados.",
    },
  ];

  return (
    <section
      id="processo"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-blue-100 py-20 lg:py-28"
    >
      {/* Elementos de fundo decorativos */}
      <div className="absolute top-0 left-0 h-96 w-full bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700">
            <Sparkles className="mr-2 h-4 w-4" />
            Metodologia Exclusiva
          </div>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            Nosso Processo de <span className="text-blue-600">Trabalho</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 md:text-xl">
            Uma metodologia estruturada para garantir que sua presença digital
            seja{" "}
            <span className="font-semibold">
              eficiente, lucrativa e escalável
            </span>
          </p>
        </div>

        {/* Processo em desktop - layout zig-zag com setas */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Linha de conexão principal */}
            <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-400 to-blue-200" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative mb-20 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Card do processo */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <div
                    className="group relative h-80 cursor-pointer"
                    onMouseEnter={() => setFlippedCard(index)}
                    onMouseLeave={() => setFlippedCard(null)}
                  >
                    <div
                      className={`preserve-3d absolute inset-0 transition-transform duration-700 ease-in-out ${flippedCard === index ? "rotate-y-180" : ""}`}
                    >
                      {/* Frente do card */}
                      <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl backface-hidden">
                        <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center">
                          <div className="absolute -top-5 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
                            {index + 1}
                          </div>
                          <div className="mb-6 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 p-5">
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-semibold text-slate-900">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-slate-600">
                            {step.description}
                          </p>
                          <div className="mt-6 flex items-center text-sm font-medium text-blue-600">
                            <span>Detalhes do processo</span>
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </CardContent>
                      </div>

                      {/* Verso do card */}
                      <div className="absolute inset-0 h-full rotate-y-180 overflow-auto rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-xl backface-hidden">
                        <div className="absolute -top-5 left-1/2 mt-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
                          {index + 1}
                        </div>
                        <h3 className="mt-7 mb-4 text-xl font-semibold text-slate-900">
                          {step.flipTitle}
                        </h3>
                        <p className="mb-6 text-slate-600">
                          {step.flipDescription}
                        </p>
                        <ul className="space-y-3 text-left">
                          {step.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start text-slate-700"
                            >
                              <CheckCircle className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-500" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ponto de conexão central */}
                <div className="absolute top-1/2 left-1/2 z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg ring-4 ring-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Processo em mobile - layout linear */}
        <div className="lg:hidden">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Número da etapa */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
                {index + 1}
              </div>

              {/* Card do processo */}
              <div className="mb-8 w-full">
                <div
                  className="group relative h-72 cursor-pointer"
                  onClick={() =>
                    setFlippedCard(flippedCard === index ? null : index)
                  }
                >
                  <div
                    className={`preserve-3d absolute inset-0 transition-transform duration-500 ease-in-out ${flippedCard === index ? "rotate-y-180" : ""}`}
                  >
                    {/* Frente do card */}
                    <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg backface-hidden">
                      <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <div className="mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 p-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-slate-600">
                          {step.description}
                        </p>
                        <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                          <span>Toque para detalhes</span>
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </div>
                      </CardContent>
                    </div>

                    {/* Verso do card */}
                    <div className="absolute inset-0 h-full rotate-y-180 overflow-auto rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-lg backface-hidden">
                      <h3 className="mb-3 text-lg font-semibold text-slate-900">
                        {step.flipTitle}
                      </h3>
                      <p className="mb-4 text-slate-600">
                        {step.flipDescription}
                      </p>
                      <ul className="space-y-2 text-left">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-slate-700"
                          >
                            <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-500" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seta para baixo (exceto no último item) */}
              {index < steps.length - 1 && (
                <div className="mb-8 flex justify-center">
                  <ArrowDown className="h-8 w-8 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
            Iniciar Meu Projeto
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-slate-600">
            Entre em contato para uma consultoria digital sem compromisso
          </p>
        </div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}

"use client";

import {
  Rocket,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

export function SectionWhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2">
        {/* LADO ESQUERDO - CONTEÚDO PRINCIPAL */}
        <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16">
          {/* Elementos decorativos de fundo */}
          <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-blue-600/20 to-transparent"></div>
          <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="relative z-10 max-w-lg text-white">
            <div className="mb-2">
              <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-300">
                <Sparkles className="mr-2 h-4 w-4" />
                Diferenciais Exclusivos
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Por que escolher a <span className="text-blue-400">Neo Doxa</span>
              ?
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-blue-100">
              Somos mais que uma agência - somos parceiros estratégicos na sua
              jornada digital. Combinamos criatividade, tecnologia e resultados
              para transformar seu negócio.
            </p>

            {/* Diferenciais em Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start space-x-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    Foco em Resultados
                  </h4>
                  <p className="text-sm text-blue-200">
                    Estratégias data-driven com ROI comprovado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Agilidade</h4>
                  <p className="text-sm text-blue-200">
                    Implementação rápida e eficiente
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Expertise</h4>
                  <p className="text-sm text-blue-200">
                    Time especializado com anos de mercado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    Transparência
                  </h4>
                  <p className="text-sm text-blue-200">
                    Relatórios claros e acompanhamento próximo
                  </p>
                </div>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-xs text-blue-200">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">30+</div>
                <div className="text-xs text-purple-200">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-xs text-green-200">Satisfação</div>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO - IMAGEM/VIDEO DE FUNDO */}
        <div className="relative hidden lg:block">
          {/* Vídeo de fundo ou imagem estática */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-8 text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Resultados que Impulsionam
                </h3>
                <p className="mx-auto max-w-md text-blue-100">
                  Cases de sucesso que demonstram nossa capacidade de entregar
                  crescimento real para negócios de todos os tamanhos.
                </p>

                {/* Elementos flutuantes */}
                <div className="absolute top-1/4 left-1/4 h-8 w-8 animate-pulse rounded-full bg-blue-500/30"></div>
                <div className="absolute top-1/3 right-1/4 h-6 w-6 animate-pulse rounded-full bg-purple-500/40 delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 h-10 w-10 animate-pulse rounded-full bg-green-500/20 delay-700"></div>
              </div>
            </div>
          </div>

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20"></div>
        </div>
      </div>

      {/* Decoração adicional */}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </section>
  );
}

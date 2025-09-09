"use client";

import {
  Calendar,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

interface SectionContactProps {
  email: string;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
  phone?: string;
  location?: string | null;
}

const SectionContact = ({
  socialLinks,
  email,
  location,
}: SectionContactProps) => {
  // Função auxiliar para obter URL por plataforma
  const getLinkByPlatform = (platform: string) => {
    return (
      (socialLinks ?? []).find(
        (link) => link.platform.toLowerCase() === platform.toLowerCase(),
      )?.url || ""
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 px-6 py-20 text-white"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-blue-600/20 to-transparent"></div>
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Vamos <span className="text-blue-400">Conversar</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">
            Estou sempre aberto a discutir novas oportunidades, projetos
            interessantes ou simplesmente trocar ideias sobre tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Meus Canais
              </h3>

              <div className="space-y-6">
                {/* Email */}
                {email && (
                  <Link
                    href={`mailto:${email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-sm text-blue-200">{email}</p>
                    </div>
                    <div className="text-blue-300 transition-transform group-hover:translate-x-1">
                      →
                    </div>
                  </Link>
                )}

                {/* WhatsApp */}
                {getLinkByPlatform("whatsapp") && (
                  <Link
                    href={getLinkByPlatform("whatsapp")}
                    target="_blank"
                    className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-sm text-blue-200">Vamos conversar!</p>
                    </div>
                    <div className="text-blue-300 transition-transform group-hover:translate-x-1">
                      →
                    </div>
                  </Link>
                )}

                {/* LinkedIn */}
                {getLinkByPlatform("linkedin") && (
                  <Link
                    href={getLinkByPlatform("linkedin")}
                    target="_blank"
                    className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">LinkedIn</p>
                      <p className="text-sm text-blue-200">
                        Perfil profissional
                      </p>
                    </div>
                    <div className="text-blue-300 transition-transform group-hover:translate-x-1">
                      →
                    </div>
                  </Link>
                )}

                {/* GitHub */}
                {getLinkByPlatform("github") && (
                  <Link
                    href={getLinkByPlatform("github")}
                    target="_blank"
                    className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white">
                      <Github className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">GitHub</p>
                      <p className="text-sm text-blue-200">Meus projetos</p>
                    </div>
                    <div className="text-blue-300 transition-transform group-hover:translate-x-1">
                      →
                    </div>
                  </Link>
                )}

                {/* Instagram */}
                {getLinkByPlatform("instagram") && (
                  <Link
                    href={getLinkByPlatform("instagram")}
                    target="_blank"
                    className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">Instagram</p>
                      <p className="text-sm text-blue-200">@erikdossantos</p>
                    </div>
                    <div className="text-blue-300 transition-transform group-hover:translate-x-1">
                      →
                    </div>
                  </Link>
                )}
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="space-y-4">
              {location && (
                <div className="flex items-center gap-3 text-blue-200">
                  <MapPin className="h-5 w-5" />
                  <span>{location}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-blue-200">
                <Calendar className="h-5 w-5" />
                <span>Disponível para oportunidades</span>
              </div>
            </div>
          </div>

          {/* Mensagem de Destaque */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white lg:p-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">
                  Por que trabalhar comigo?
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-blue-600">
                    ✓
                  </div>
                  <p className="text-blue-100">
                    <strong>Comunicação clara</strong> e acompanhamento
                    constante do projeto
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-blue-600">
                    ✓
                  </div>
                  <p className="text-blue-100">
                    <strong>Soluções personalizadas</strong> para suas
                    necessidades específicas
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-blue-600">
                    ✓
                  </div>
                  <p className="text-blue-100">
                    <strong>Compromisso com prazos</strong> e qualidade do
                    código
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-blue-600">
                    ✓
                  </div>
                  <p className="text-blue-100">
                    <strong>Paixão por aprender</strong> e aplicar novas
                    tecnologias
                  </p>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                <p className="text-sm text-blue-100">
                  ⚡ Resposta em até <strong>24 horas</strong> para todas as
                  mensagens
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé da seção */}
        <div className="mt-16 border-t border-white/20 pt-8 text-center">
          <p className="text-blue-200">
            💡 Tem um projeto em mente?{" "}
            <strong className="text-white">Vamos torná-lo realidade!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;

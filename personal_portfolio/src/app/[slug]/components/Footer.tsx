"use client";

import {
  ArrowRight,
  Calendar,
  Code,
  Cpu,
  FileText,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  Sparkles,
  Twitter,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  user: {
    name: string;
    email: string;
    location?: string | null;
    socialLinks: Array<{
      platform: string;
      url: string;
    }>;
  };
}

export function Footer({ user }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Encontrar links específicos das redes sociais
  const githubLink = user.socialLinks.find((link) =>
    link.platform.toLowerCase().includes("github"),
  )?.url;
  const linkedinLink = user.socialLinks.find((link) =>
    link.platform.toLowerCase().includes("linkedin"),
  )?.url;
  const instagramLink = user.socialLinks.find((link) =>
    link.platform.toLowerCase().includes("instagram"),
  )?.url;
  const twitterLink = user.socialLinks.find((link) =>
    link.platform.toLowerCase().includes("twitter"),
  )?.url;

  const technologies = [
    { name: "React & Next.js", icon: <Sparkles className="h-4 w-4" /> },
    { name: "TypeScript", icon: <Code className="h-4 w-4" /> },
    { name: "Node.js", icon: <Cpu className="h-4 w-4" /> },
    { name: "Tailwind CSS", icon: <Zap className="h-4 w-4" /> },
  ];

  const quickLinks = [
    { name: "Início", href: "#home", icon: "🏠" },
    { name: "Sobre Mim", href: "#about", icon: "👨‍💻" },
    { name: "Projetos", href: "#projects", icon: "🚀" },
    { name: "Habilidades", href: "#skills", icon: "🛠️" },
    { name: "Contato", href: "#contact", icon: "📞" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Background Elements */}
      <div className="bg-grid-white/[0.02] absolute inset-0 bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Social */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{user.name}</h3>
                  <p className="text-sm text-gray-400">
                    Desenvolvedor Full Stack
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-gray-300">
                Transformando ideias em experiências digitais extraordinárias
                através de código limpo e soluções inovadoras.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Conecte-se Comigo</h4>
              <div className="flex gap-3">
                {githubLink && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-lg"
                    asChild
                  >
                    <Link href={githubLink} target="_blank">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {linkedinLink && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-lg"
                    asChild
                  >
                    <Link href={linkedinLink} target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {instagramLink && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-lg"
                    asChild
                  >
                    <Link href={instagramLink} target="_blank">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {twitterLink && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-lg"
                    asChild
                  >
                    <Link href={twitterLink} target="_blank">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Tecnologias</h4>
            <div className="grid grid-cols-1 gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400">
                    {tech.icon}
                  </div>
                  <span className="font-medium text-gray-300 group-hover:text-white">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">
              Navegação Rápida
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                    <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Informações</h4>

            <div className="space-y-4">
              {user.email && (
                <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium text-white">{user.email}</p>
                  </div>
                </div>
              )}

              {user.location && (
                <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/20">
                    <MapPin className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Localização</p>
                    <p className="font-medium text-white">{user.location}</p>
                  </div>
                </div>
              )}

              <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/20">
                  <Calendar className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Disponibilidade</p>
                  <p className="font-medium text-white">
                    Aberto a oportunidades
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-6 font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
              asChild
            >
              <Link href="#contact">
                <Mail className="mr-3 h-5 w-5" />
                Enviar Mensagem
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">
                © {currentYear} {user.name}
              </span>
              <Badge
                variant="secondary"
                className="border-blue-500/30 bg-blue-500/20 text-blue-300"
              >
                v3.0.0
              </Badge>
            </div>
            <span className="hidden text-gray-500 md:block">•</span>
            <span className="text-gray-400">Todos os direitos reservados</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/politica-privacidade"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Privacidade
            </Link>
            <Link
              href="/termos-uso"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Termos
            </Link>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 animate-pulse text-red-400" />
            <span>por {user.name}</span>
          </div>
        </div>
      </div>

      {/* Gradient Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}

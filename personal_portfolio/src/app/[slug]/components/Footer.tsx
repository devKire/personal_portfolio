"use client";

import {
  ArrowRight,
  FileText,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Twitter,
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

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Newsletter Section - Opcional para portfolio pessoal */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-center lg:text-left">
              <h3 className="mb-2 text-2xl font-bold">
                Vamos trabalhar juntos?
              </h3>
              <p className="max-w-md text-blue-200">
                Estou sempre aberto a novos projetos e oportunidades
              </p>
            </div>

            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <Link href="#contact">
                Entrar em Contato
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Personal Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">{user.name}</span>
            </div>

            <p className="text-sm leading-relaxed text-blue-200">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais
              inovadoras.
            </p>

            <div className="flex space-x-4">
              {githubLink && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-200 hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href={githubLink} target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
              )}
              {linkedinLink && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-200 hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href={linkedinLink} target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              )}
              {instagramLink && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-200 hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href={instagramLink} target="_blank">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
              )}
              {twitterLink && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-200 hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href={twitterLink} target="_blank">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Skills/Expertise */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Expertise</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <span className="transition-colors hover:text-white">
                  Desenvolvimento Web
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-white">
                  React & Next.js
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-white">
                  Node.js & Backend
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-white">
                  Banco de Dados
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-white">
                  UI/UX Design
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <Link
                  href="#home"
                  className="transition-colors hover:text-white"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="transition-colors hover:text-white"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="transition-colors hover:text-white"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-sm text-blue-200">
              {user.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>{user.email}</span>
                </div>
              )}

              {user.location && (
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>{user.location}</span>
                </div>
              )}

              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <span>Disponível para freelances</span>
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/curriculo.pdf" target="_blank" download>
                <FileText className="mr-2 h-4 w-4" />
                Baixar CV
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-blue-200">
            <span>
              © {currentYear} {user.name}. Todos os direitos reservados.
            </span>
            <Badge variant="secondary" className="text-xs">
              v1.0.0
            </Badge>
          </div>

          <div className="flex items-center space-x-6 text-sm text-blue-200">
            <Link
              href="/politica-privacidade"
              className="transition-colors hover:text-white"
            >
              Privacidade
            </Link>
            <Link
              href="/termos-uso"
              className="transition-colors hover:text-white"
            >
              Termos
            </Link>
          </div>

          <div className="flex items-center space-x-2 text-sm text-blue-200">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>por {user.name}</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
}

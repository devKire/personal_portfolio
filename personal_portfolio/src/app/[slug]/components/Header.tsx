"use client";

import { User } from "@prisma/client";
import {
  BookOpen,
  Briefcase,
  Code,
  Download,
  Globe,
  Mail,
  Menu,
  Shield,
  Sparkles,
  UserIcon,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderProps {
  user: User;
}

export default function Header({ user }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "education",
        "certificates",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#home", icon: Sparkles },
    { name: "Sobre Mim", href: "#about", icon: UserIcon },
    { name: "Projetos", href: "#projects", icon: Briefcase },
    { name: "Habilidades", href: "#skills", icon: Code },
    { name: "Formação", href: "#education", icon: BookOpen },
    { name: "Certificados", href: "#certificates", icon: Shield },
    { name: "Contato", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-black/95 py-3 shadow-2xl backdrop-blur-xl"
          : "bg-gradient-to-r from-black/50 via-blue-900/40 to-purple-900/50 py-4 backdrop-blur-lg"
      }`}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-60" />

      {/* Gradient Border Effect */}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Avatar + Brand - CORRIGIDO */}
        <div
          className={`flex items-center gap-3 transition-all duration-700 ${
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          {/* Avatar */}
          <div className="group relative">
            <div className="relative rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
              <div
                className={`relative overflow-hidden rounded-full border-2 border-white/20 bg-gray-900 transition-all duration-300 ${
                  isScrolled ? "h-10 w-10" : "h-11 w-11"
                }`}
              >
                {user.avatarUrl ? (
                  <Image
                    src={user.avatarUrl}
                    alt={`Avatar de ${user.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 44px, 48px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}

                {/* Status Indicator */}
                <div className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full border-2 border-gray-900 bg-green-400" />
              </div>
            </div>
          </div>

          {/* Brand Name - CORRIGIDO: Nome completo em uma linha */}
          <div className="flex flex-col">
            <h1
              className={`font-bold whitespace-nowrap text-white transition-all duration-300 ${
                isScrolled ? "text-base leading-tight" : "text-lg leading-tight"
              }`}
            >
              Erik Rafael dos Santos
            </h1>

            {/* Subtitle - apenas quando não scrolled */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isScrolled ? "max-h-0 opacity-0" : "max-h-6 opacity-100"
              }`}
            >
              <span className="text-xs font-medium text-blue-200/80">
                Desenvolvedor Full Stack
              </span>
            </div>
          </div>
        </div>

        {/* Center: Navigation - CORRIGIDO: Menu principal centralizado */}
        <div className="mx-8 hidden max-w-2xl flex-1 items-center justify-center lg:flex">
          <nav className="flex items-center gap-1 rounded-2xl border border-white/10 bg-black/30 p-1 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="relative">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Side: Trust Indicators + CTA - CORRIGIDO */}
        <div
          className={`flex items-center gap-4 transition-all duration-700 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-l border-white/20 bg-black/95 backdrop-blur-xl sm:w-[350px]"
              >
                {/* Header with User Info */}
                <SheetHeader className="flex flex-row items-center gap-3 border-b border-white/10 pb-6 text-left">
                  <div className="relative h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
                    <div className="h-full w-full rounded-full border-2 border-white/20 bg-gray-900">
                      {user.avatarUrl ? (
                        <Image
                          src={user.avatarUrl}
                          alt={user.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white">
                          E
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <SheetTitle className="text-base text-white">
                      Erik Rafael dos Santos
                    </SheetTitle>
                    <SheetDescription className="text-sm text-white/60">
                      Desenvolvedor Full Stack
                    </SheetDescription>
                  </div>
                </SheetHeader>

                {/* Navigation Items */}
                <div className="space-y-1 py-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <SheetClose asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start gap-3 py-3 text-white/80 hover:bg-white/10 hover:text-white"
                        >
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </Button>
                      </SheetClose>
                    </Link>
                  ))}
                </div>

                {/* Trust Indicators - Mobile */}
                <div className="mb-6 flex gap-3">
                  <div className="flex flex-1 items-center justify-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2 text-xs text-green-300">
                    <Shield className="h-3 w-3" />
                    Certificado
                  </div>
                  <div className="flex flex-1 items-center justify-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs text-blue-300">
                    <Globe className="h-3 w-3" />
                    Remoto
                  </div>
                </div>

                {/* Footer */}
                <div className="absolute right-6 bottom-6 left-6">
                  <div className="text-center text-xs text-white/40">
                    © {new Date().getFullYear()} Erik Rafael
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-gray-800/50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(
              typeof window !== "undefined"
                ? (window.scrollY /
                    ((document?.documentElement?.scrollHeight || 1000) -
                      window.innerHeight)) *
                    100
                : 0,
              100,
            )}%`,
          }}
        />
      </div>
    </header>
  );
}

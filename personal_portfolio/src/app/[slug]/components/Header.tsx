"use client";

import { User } from "@prisma/client";
import { Globe,Menu, Shield, Sparkles, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react";

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

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre Mim", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Formação", href: "#education" },
    { name: "Certificados", href: "#certificates" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-black/80 py-3 shadow-2xl backdrop-blur-xl"
          : "bg-gradient-to-r from-black/40 via-blue-900/30 to-purple-900/40 py-4 backdrop-blur-md"
      }`}
    >
      {/* Gradient Border Effect */}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-50" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Left Side: Avatar + Brand */}
        <div
          className={`flex items-center gap-4 transition-all duration-500 ${
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          {/* Avatar with Glow Effect */}
          <div className="group relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30 blur transition-opacity duration-300 group-hover:opacity-60" />
            <div
              className={`relative transition-all duration-300 ${
                isScrolled ? "h-10 w-10" : "h-12 w-12 md:h-14 md:w-14"
              }`}
            >
              {user.avatarUrl ? (
                <Image
                  src={user.avatarUrl}
                  alt={`Avatar de ${user.name}`}
                  fill
                  className="rounded-full border-2 border-white/30 object-cover shadow-xl transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 48px, 56px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              {/* Status Indicator */}
              <div className="absolute -right-1 -bottom-1 h-4 w-4 animate-pulse rounded-full border-2 border-white bg-green-400 shadow-lg" />
            </div>
          </div>

          {/* Brand Name with Bubble Text Animation */}
          <div className="flex flex-col">
            <h1
              className={`font-black tracking-tight text-white transition-all duration-300 ${
                isScrolled
                  ? "text-lg md:text-xl"
                  : "text-xl md:text-2xl lg:text-3xl"
              }`}
            >
              {user.name}
            </h1>

            {/* Subtitle with fade effect */}
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${
                isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
              }`}
            >
              <Sparkles className="h-3 w-3 text-yellow-400" />
              <span className="text-xs font-medium text-blue-200">
                Desenvolvedor Full Stack
              </span>
            </div>
          </div>
        </div>

        {/* Center: Trust Indicators (Hidden on mobile) */}
        <div
          className={`hidden items-center gap-6 transition-all duration-500 lg:flex ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white">
            <Shield className="h-4 w-4 text-green-400" />
            <span>Certificado</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white">
            <Globe className="h-4 w-4 text-blue-400" />
            <span>Disponível</span>
          </div>
        </div>

        {/* Right Side: Navigation */}
        <div
          className={`transition-all duration-500 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-6">
              <nav className="flex items-center space-x-1">
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <Link href="#contact">
                <Button className="group relative rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                  <span className="relative">Contato</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <div className="flex items-center gap-3">
              {/* Mobile CTA */}
              <Link href="#contact">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                  Contato
                </Button>
              </Link>

              {/* Sheet Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 border-white/20 bg-white/10 text-white hover:bg-white/20"
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[85%] border-l border-white/20 bg-black/95 backdrop-blur-md sm:w-[300px]"
                >
                  <SheetHeader className="mt-2 text-left">
                    <SheetTitle className="text-white">Navegação</SheetTitle>
                    <SheetDescription className="text-white/70">
                      Navegue pelas seções do portfólio
                    </SheetDescription>
                  </SheetHeader>

                  <div className="space-y-2 py-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <SheetClose asChild>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-white/80 hover:bg-white/10 hover:text-white"
                          >
                            {item.name}
                          </Button>
                        </SheetClose>
                      </Link>
                    ))}
                  </div>

                  <div className="absolute right-4 bottom-6 left-4">
                    <div className="text-center text-xs text-white/60">
                      © {new Date().getFullYear()} {user.name}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
        style={{
          width: `${Math.min(typeof window !== "undefined" ? (window.scrollY / ((document?.documentElement?.scrollHeight || 1000) - window.innerHeight)) * 100 : 0, 100)}%`,
        }}
      />
    </header>
  );
}

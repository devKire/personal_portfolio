"use client";

import { ArrowRight,Briefcase, Home, Phone, Star, Users } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: "home",
      label: "Início",
      href: "#home",
      icon: Home,
      description: "Página inicial",
    },
    {
      id: "services",
      label: "Serviços",
      href: "#services",
      icon: Briefcase,
      description: "Nossos serviços",
    },
    {
      id: "about",
      label: "Sobre",
      href: "#about",
      icon: Users,
      description: "Conheça nossa história",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      href: "#portfolio",
      icon: Star,
      description: "Nossos trabalhos",
    },
    {
      id: "contact",
      label: "Contato",
      href: "#contact",
      icon: Phone,
      description: "Fale conosco",
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleItemClick = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Botão do menu mobile */}
      <div className="md:hidden">
        <SheetTrigger asChild>
          <button
            className="relative rounded-full border border-white/20 bg-white/10 p-2.5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <div className="relative h-5 w-5">
              <Home
                className={`absolute inset-0 h-5 w-5 text-white transition-all duration-300 ${
                  isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <ArrowRight
                className={`absolute inset-0 h-5 w-5 text-white transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                }`}
              />
            </div>
          </button>
        </SheetTrigger>
      </div>

      <SheetContent
        side="right"
        className="w-80 max-w-[90vw] border-l border-white/10 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95 p-0 backdrop-blur-xl"
        onInteractOutside={(e) => e.preventDefault()}
      >
        {/* Header */}
        <div className="border-b border-white/10 p-6">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold text-white">
              Menu
            </SheetTitle>
            <SheetDescription className="text-white/60">
              Navegue pelas seções do site
            </SheetDescription>
          </SheetHeader>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2 p-6">
          {menuItems.map(({ id, label, href, icon: Icon, description }) => (
            <a
              key={id}
              href={href}
              onClick={handleItemClick}
              className="group flex transform items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-white" />
              </div>

              <div className="flex-1">
                <div className="font-semibold text-white transition-colors group-hover:text-blue-200">
                  {label}
                </div>
                <div className="text-sm text-white/60">{description}</div>
              </div>

              <ArrowRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </a>
          ))}
        </div>

        {/* Footer CTA */}
        <SheetFooter className="absolute right-6 bottom-6 left-6 px-0">
          <SheetClose asChild>
            <Button
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
              onClick={handleItemClick}
            >
              Começar Projeto
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

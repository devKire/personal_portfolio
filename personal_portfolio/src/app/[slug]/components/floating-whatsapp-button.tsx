"use client";

import { MessageCircle, Sparkles,Zap } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface FloatingWhatsAppProps {
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
  defaultMessage?: string;
}

const FloatingWhatsAppButton = ({
  socialLinks,
  defaultMessage = "Olá! Gostaria de conversar sobre um projeto incrível.",
}: FloatingWhatsAppProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappLink = socialLinks.find((link) =>
    link.platform.toLowerCase().includes("whatsapp"),
  )?.url;

  if (!whatsappLink) return null;

  const finalWhatsAppLink = whatsappLink.includes("?text=")
    ? whatsappLink
    : `${whatsappLink}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-2">
      <Link
        href={finalWhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
        aria-label="Fale comigo no WhatsApp"
        title="Clique para conversar no WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background animado */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 opacity-100 transition-all duration-500 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-600" />

        {/* Efeito de brilho */}
        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

        {/* Ícone com animação */}
        <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
          <MessageCircle
            size={28}
            className={`transition-all duration-300 ${isHovered ? "text-white" : "text-white/90"}`}
          />

          {/* Efeito de sparkle no hover */}
          {isHovered && (
            <>
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 animate-pulse text-yellow-300" />
              <Sparkles
                className="absolute -bottom-1 -left-1 h-2 w-2 animate-pulse text-cyan-300"
                style={{ animationDelay: "0.3s" }}
              />
            </>
          )}
        </div>

        {/* Tooltip moderno */}
        <div className="absolute -top-16 right-0 hidden flex-col items-end group-hover:flex">
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/95 px-4 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Zap className="h-3 w-3 animate-pulse text-cyan-400" />
              Vamos conversar!
            </div>
          </div>
          {/* Seta do tooltip */}
          <div className="-mt-1 mr-4 h-2 w-2 rotate-45 border-r border-b border-slate-700/50 bg-slate-900/95" />
        </div>

        {/* Efeito de pulso contínuo sutil */}
        <div className="absolute -inset-2 animate-ping rounded-full border-2 border-blue-400/30" />
      </Link>

      {/* Efeito de partículas flutuantes */}
      <div className="pointer-events-none absolute -inset-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`animate-float absolute h-1 w-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-70`}
            style={{
              top: `${20 + i * 20}%`,
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingWhatsAppButton;

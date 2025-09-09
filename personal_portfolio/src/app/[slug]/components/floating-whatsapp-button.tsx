"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FloatingWhatsAppProps {
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
  defaultMessage?: string;
}

const FloatingWhatsAppButton = ({
  socialLinks,
  defaultMessage = "Olá! Gostaria de conversar sobre um projeto.",
}: FloatingWhatsAppProps) => {
  // Buscar o link do WhatsApp das socialLinks
  const whatsappLink = socialLinks.find((link) =>
    link.platform.toLowerCase().includes("whatsapp"),
  )?.url;

  if (!whatsappLink) return null;

  // Adicionar a mensagem padrão ao link do WhatsApp se não estiver presente
  const finalWhatsAppLink = whatsappLink.includes("?text=")
    ? whatsappLink
    : `${whatsappLink}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="animate-float fixed right-6 bottom-6 z-50 flex flex-col items-end gap-2">
      <Link
        href={finalWhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_4px_15px_rgba(0,128,0,0.4)] transition-all hover:scale-110 hover:bg-green-600"
        aria-label="Fale comigo no WhatsApp"
        title="Clique para conversar no WhatsApp"
      >
        <MessageCircle size={28} />

        {/* Tooltip ao passar o mouse */}
        <span className="absolute -top-10 right-0 hidden rounded-md bg-white px-3 py-1 text-sm whitespace-nowrap text-green-700 shadow-md group-hover:flex">
          Vamos conversar!
        </span>

        {/* Efeito de pulso */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:animate-ping" />
      </Link>
    </div>
  );
};

export default FloatingWhatsAppButton;

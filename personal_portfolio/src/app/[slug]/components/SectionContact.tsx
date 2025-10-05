"use client";

import { easeOut,motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Github,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
  phone,
}: SectionContactProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Função auxiliar para obter URL por plataforma
  const getLinkByPlatform = (platform: string) => {
    return (
      (socialLinks ?? []).find(
        (link) => link.platform.toLowerCase() === platform.toLowerCase(),
      )?.url || ""
    );
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contactItems = [
    {
      id: "email",
      icon: Mail,
      title: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500",
      description: "Resposta em até 6 horas",
      available: true,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Vamos conversar!",
      href: getLinkByPlatform("whatsapp"),
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500",
      description: "Resposta rápida",
      available: !!getLinkByPlatform("whatsapp"),
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "LinkedIn",
      value: "Perfil profissional",
      href: getLinkByPlatform("linkedin"),
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600",
      description: "Conecte-se comigo",
      available: !!getLinkByPlatform("linkedin"),
    },
    {
      id: "github",
      icon: Github,
      title: "GitHub",
      value: "Meus projetos",
      href: getLinkByPlatform("github"),
      color: "from-gray-800 to-gray-900",
      bgColor: "bg-gray-800",
      description: "Código aberto",
      available: !!getLinkByPlatform("github"),
    },
    {
      id: "instagram",
      icon: Instagram,
      title: "Instagram",
      value: "@dossantoserik_jesus",
      href: getLinkByPlatform("instagram"),
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500",
      description: "Daily & projetos",
      available: !!getLinkByPlatform("instagram"),
    },
    ...(phone
      ? [
          {
            id: "phone",
            icon: Phone,
            title: "Telefone",
            value: phone,
            href: `tel:${phone}`,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500",
            description: "Disponível",
            available: true,
          },
        ]
      : []),
  ];

  const features = [
    {
      icon: Zap,
      title: "Desenvolvimento Ágil",
      description: "Metodologias modernas para entregas rápidas e eficientes",
    },
    {
      icon: Target,
      title: "Soluções Personalizadas",
      description: "Código adaptado às suas necessidades específicas",
    },
    {
      icon: HeartHandshake,
      title: "Comunicação Clara",
      description: "Acompanhamento constante e transparência total",
    },
    {
      icon: Clock,
      title: "Compromisso com Prazos",
      description: "Entrega no prazo com qualidade excepcional",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/80 to-purple-900 px-4 py-20 text-white sm:px-6 lg:py-28"
    >
      {/* Background Elements */}
      <div className="bg-grid-white/[0.02] absolute inset-0 bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-pink-500/5 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.h2
            className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vamos Criar
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Algo Incrível?
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-xl leading-relaxed text-blue-100/90 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Estou pronto para transformar suas ideias em realidade. Vamos
            conversar sobre seu próximo projeto!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white"
            >
              Vamos Conectar
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg text-blue-200/80"
            >
              Escolha o canal que preferir. Estou sempre disponível para novas
              oportunidades e conversas.
            </motion.p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactItems
                .filter((item) => item.available)
                .map((item) => (
                  <motion.div
                    key={item.id}
                    variants={cardVariants}
                    whileHover="hover"
                    onHoverStart={() => setHoveredCard(item.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group relative"
                  >
                    <Link
                      href={item.href}
                      target={
                        item.id !== "email" && item.id !== "phone"
                          ? "_blank"
                          : "_self"
                      }
                      className={`block rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm transition-all duration-300 ${
                        hoveredCard === item.id
                          ? "border-white/20 bg-white/10 shadow-2xl shadow-blue-500/20"
                          : "hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bgColor} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                        >
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate font-semibold text-white">
                            {item.title}
                          </h4>
                          <p className="mt-1 truncate text-sm text-blue-200/80">
                            {item.value}
                          </p>
                          <p className="mt-2 text-xs text-blue-300/60">
                            {item.description}
                          </p>
                        </div>
                        <div
                          className={`text-blue-300 transition-all duration-300 ${
                            hoveredCard === item.id
                              ? "translate-x-1 scale-110"
                              : ""
                          }`}
                        >
                          →
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {location && (
                  <div className="flex items-center gap-3 text-blue-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300/60">Localização</p>
                      <p className="font-medium">{location}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 text-blue-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300/60">Disponibilidade</p>
                    <p className="font-medium">Aberto a oportunidades</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-blue-500/15"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-white">
                        {feature.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-blue-200/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 text-white"
            >
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="mb-3 text-2xl font-bold">
                    Pronto para Iniciar seu Projeto?
                  </h3>
                  <p className="leading-relaxed text-blue-100/90">
                    Vamos transformar sua ideia em uma solução digital
                    impressionante. Desenvolvimento com qualidade, agilidade e
                    transparência.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Zap className="h-3 w-3" />
                    </div>
                    <span className="text-sm">
                      <strong>Resposta em 24h</strong> para novos projetos
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Target className="h-3 w-3" />
                    </div>
                    <span className="text-sm">
                      <strong>Consultoria gratuita</strong> inicial
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={getLinkByPlatform("whatsapp") || `mailto:${email}`}
                    className="flex-1 rounded-xl bg-white px-6 py-3 text-center font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                  >
                    Iniciar Conversa
                  </Link>
                  <Link
                    href="#projects"
                    className="flex-1 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-purple-500/20"
                  >
                    Ver Projetos
                  </Link>
                </div>
              </div>

              {/* Background pattern */}
              <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-white/10" />
              <div className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-full bg-white/5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-blue-200/80">
            🚀 Tem uma ideia extraordinária?{" "}
            <strong className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vamos construir juntos!
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionContact;

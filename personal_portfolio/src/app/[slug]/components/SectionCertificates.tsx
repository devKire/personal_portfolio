"use client";

import { Certificate } from "@prisma/client";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface SectionCertificatesProps {
  certificates: Certificate[];
}

export default function SectionCertificates({
  certificates,
}: SectionCertificatesProps) {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Ordenar por data mais recente
  const sortedCertificates = [...certificates].sort(
    (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime(),
  );

  // Auto-rotate para demonstração
  useEffect(() => {
    if (sortedCertificates.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % sortedCertificates.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [sortedCertificates.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900/30 px-4 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-700 bg-gray-800/50 px-6 py-3 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
            <span className="text-sm font-medium text-gray-300">
              {certificates.length} Certificações Concluídas
            </span>
          </div>

          <h2 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Certificados
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
            Credenciais que comprovam minha expertise e comprometimento com a
            excelência técnica
          </p>
        </motion.div>

        {/* Timeline Horizontal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Linha do tempo */}
          <motion.div
            variants={timelineVariants}
            className="absolute top-1/2 right-0 left-0 h-0.5 -translate-y-1/2 transform bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            style={{ originX: 0 }}
          />

          {/* Pontos da timeline */}
          <div className="relative flex justify-between px-8">
            {sortedCertificates.map((certificate, index) => (
              <motion.button
                key={certificate.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`relative z-10 h-4 w-4 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-150 bg-blue-400 shadow-lg shadow-blue-400/50"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform text-xs whitespace-nowrap text-gray-300">
                  {certificate.issueDate.getFullYear()}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Card Principal em Destaque */}
        <AnimatePresence mode="wait">
          {sortedCertificates[activeIndex] && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mb-12 flex justify-center"
            >
              <Card
                className="group w-full max-w-4xl transform cursor-pointer border border-gray-700 bg-gray-800/80 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]"
                onClick={() =>
                  setSelectedCertificate(sortedCertificates[activeIndex])
                }
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-8 lg:flex-row">
                    {/* Imagem com efeito de moldura */}
                    <div className="relative flex-shrink-0">
                      <div className="relative h-36 w-48 overflow-hidden rounded-xl border-2 border-blue-400/30 transition-all duration-300 group-hover:border-blue-400/60">
                        <Image
                          src={sortedCertificates[activeIndex].imageUrl}
                          alt={sortedCertificates[activeIndex].title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-blue-500/10 transition-colors duration-300 group-hover:bg-transparent" />
                      </div>
                      <div className="absolute -right-3 -bottom-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-xs font-bold text-white">
                        Destaque
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-blue-300 lg:text-3xl">
                        {sortedCertificates[activeIndex].title}
                      </h3>

                      <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-300">
                          <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                          </svg>
                          {sortedCertificates[activeIndex].institution}
                        </span>

                        <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-300">
                          <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {sortedCertificates[
                            activeIndex
                          ].issueDate.toLocaleDateString("pt-BR")}
                        </span>
                      </div>

                      {/* {sortedCertificates[activeIndex].credentialUrl && (
                        <button 
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold group/btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(sortedCertificates[activeIndex].credentialUrl!, '_blank');
                          }}
                        >
                          <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Ver Credencial
                        </button>
                      )} */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid de Todos os Certificados */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {sortedCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className={`cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? "opacity-40"
                  : "opacity-100 hover:opacity-90"
              }`}
              onClick={() => setSelectedCertificate(certificate)}
            >
              <Card className="group h-full overflow-hidden border border-gray-700 bg-gray-800/60 backdrop-blur-sm">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <div className="rounded-full border border-white/20 bg-black/70 px-2 py-1 text-xs text-white">
                      {certificate.institution}
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h4 className="mb-2 line-clamp-2 font-semibold text-white transition-colors group-hover:text-blue-300">
                    {certificate.title}
                  </h4>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>
                      {certificate.issueDate.toLocaleDateString("pt-BR")}
                    </span>
                    <span className="flex items-center gap-1 text-blue-400">
                      <svg
                        className="h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Detalhes
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal (mesmo da versão anterior) */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-700 bg-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Conteúdo do modal igual à versão anterior */}
                <div className="relative">
                  <Image
                    src={selectedCertificate.imageUrl}
                    alt={selectedCertificate.title}
                    width={800}
                    height={400}
                    className="h-64 w-full rounded-t-2xl object-cover"
                  />
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute top-4 right-4 rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black/90"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {selectedCertificate.title}
                  </h3>

                  <div className="mb-4 flex items-center gap-4 text-gray-300">
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      {selectedCertificate.institution}
                    </span>

                    <span className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Emitido em{" "}
                      {selectedCertificate.issueDate.toLocaleDateString(
                        "pt-BR",
                      )}
                    </span>
                  </div>

                  {/* {selectedCertificate.credentialUrl && (
                    <a
                      href={selectedCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver Credencial Oficial
                    </a>
                  )} */}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

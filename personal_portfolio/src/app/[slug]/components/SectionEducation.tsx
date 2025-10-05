"use client";

import { Education } from "@prisma/client";
import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

interface SectionEducationProps {
  educations: Education[];
}

export default function SectionEducation({
  educations,
}: SectionEducationProps) {
  // Ordenar educações: atual primeiro, depois por data mais recente
  const sortedEducations = [...educations].sort((a, b) => {
    if (a.current && !b.current) return -1;
    if (!a.current && b.current) return 1;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black px-4 py-20 relative overflow-hidden">
      {/* Elementos de background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Formação Acadêmica
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Minha jornada de aprendizado e desenvolvimento contínuo
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Linha da timeline */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-8 md:space-y-12">
            {sortedEducations.map((education, index) => (
              <motion.div
                key={education.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center gap-6 md:gap-12`}
              >
                {/* Conteúdo */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} w-full`}>
                  <Card className="border border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Logo - Visível apenas no mobile */}
                        <div className="flex justify-center md:hidden">
                          <div className="relative">
                            {education.logoUrl && (
                              <Image
                                src={education.logoUrl}
                                alt={education.institution}
                                width={80}
                                height={80}
                                className="h-16 w-16 rounded-lg object-contain bg-white p-2"
                              />
                            )}
                            {education.current && (
                              <div className="absolute -top-1 -right-1">
                                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                                  ATUAL
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          {/* Badge de Status */}
                          {education.current && (
                            <div className="hidden md:inline-flex items-center gap-2 mb-3 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              Cursando Atualmente
                            </div>
                          )}

                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {education.field}
                          </h3>
                          
                          <div className="mt-2 flex items-center justify-center md:justify-start gap-2 text-blue-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">{education.institution}</span>
                          </div>

                          <div className="mt-3 space-y-2">
                            <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                              {education.startDate.toLocaleDateString("pt-BR", {
                                month: "long",
                                year: "numeric"
                              })} - {education.current ? (
                                <span className="text-green-400 font-semibold">Presente</span>
                              ) : education.endDate ? (
                                education.endDate.toLocaleDateString("pt-BR", {
                                  month: "long",
                                  year: "numeric"
                                })
                              ) : (
                                "Não concluído"
                              )}
                            </p>
                            
                            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                              </svg>
                              {education.degree}
                            </p>
                          </div>

                          {/* {education.description && (
                            <p className="mt-4 text-gray-300 text-sm leading-relaxed border-l-2 border-blue-500 pl-3">
                              {education.description}
                            </p>
                          )} */}
                        </div>

                        {/* Logo - Visível apenas no desktop */}
                        <div className="hidden md:flex relative">
                          <div className="relative group/logo">
                            {education.logoUrl && (
                              <Image
                                src={education.logoUrl}
                                alt={education.institution}
                                width={100}
                                height={100}
                                className="h-20 w-20 rounded-xl object-contain bg-white p-3 group-hover/logo:scale-110 transition-transform duration-300"
                              />
                            )}
                            <div className="absolute inset-0 bg-blue-500/20 rounded-xl group-hover/logo:bg-blue-500/30 transition-colors"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Ponto da timeline - Desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      education.current 
                        ? 'border-green-500 bg-green-500 animate-pulse' 
                        : 'border-blue-500 bg-gray-900'
                    }`}></div>
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>
                {educations.filter(edu => edu.current).length} em andamento
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>
                {educations.filter(edu => !edu.current && edu.endDate).length} concluídos
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{educations.length} formações</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
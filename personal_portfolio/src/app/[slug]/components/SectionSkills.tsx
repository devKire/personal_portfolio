"use client";

import { Skill } from "@prisma/client";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SectionSkillsProps {
  skills: Skill[];
}

export default function SectionSkills({ skills }: SectionSkillsProps) {
  // Agrupar habilidades por categoria
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  // Mapear categorias para nomes mais amigáveis
  const categoryNames: Record<string, string> = {
    Frontend: "Frontend",
    Backend: "Backend",
    "UI Libraries": "UI Libraries",
    "UI Frameworks": "UI Frameworks",
    Ferramentas: "Ferramentas",
    APIs: "APIs & Serviços",
    Databases: "Bancos de Dados",
    Design: "Design",
    Office: "Office",
    Comunicação: "Comunicação",
    Outros: "Outros",
  };

  return (
    <section
      id="skills"
      className="bg-opacity-75 bg-black px-4 py-16 text-white backdrop-blur-sm"
    >
      <h2 className="mb-8 text-center text-3xl font-semibold">
        Tecnologias e Ferramentas
      </h2>

      {/* Grid de Habilidades Detalhadas */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
          return (
            <Card
              key={category}
              className="border border-gray-700 bg-gray-800 shadow-lg transition-shadow hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-white">
                    {categoryNames[category] || category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="mt-4 space-y-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex flex-1 items-center space-x-2">
                      {skill.iconUrl && (
                        <Image
                          src={skill.iconUrl}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain"
                        />
                      )}
                      <span className="text-sm font-medium text-white">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { Skill } from "@prisma/client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Clock,
  FolderCheck,
  HeartHandshake,
  Lightbulb,
  type LucideIcon,
  MessageCircle,
  RefreshCw,
  Sparkles,
  Star,
  Target,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SectionSkillsProps {
  skills: Skill[];
}

// Função para calcular o level baseado na quantidade de skills
function calculateCategoryLevel(
  skillCount: number,
  maxSkillsInCategory: number,
): number {
  const normalized = (skillCount / maxSkillsInCategory) * 5;
  const level = Math.max(1, Math.min(5, Math.round(normalized)));
  return level;
}

// Componente específico para Soft Skills
function SoftSkillsCard({
  skills,
  skillCount,
  level,
}: {
  skills: Skill[];
  skillCount: number;
  level: number;
}) {
  const softSkillIcons: Record<string, LucideIcon> = {
    Comunicação: MessageCircle,
    "Trabalho em Equipe": Users,
    Liderança: Target,
    Empatia: HeartHandshake,
    Criatividade: Sparkles,
    Adaptabilidade: RefreshCw,
    "Gestão de Tempo": Clock,
    "Resolução de Problemas": Lightbulb,
    "Pensamento Analítico": Brain,
    Autonomia: UserCheck,
    Proatividade: Zap,
    "Aprendizado Contínuo": BookOpen,
    Organização: FolderCheck,
  };

  const getSoftSkillIcon = (skillName: string) => {
    const IconComponent = softSkillIcons[skillName] || Star;
    return <IconComponent className="h-5 w-5" />;
  };

  const getProficiencyDescription = (level: number) => {
    const descriptions = {
      1: "Em desenvolvimento",
      2: "Competência básica",
      3: "Competência intermediária",
      4: "Competência avançada",
      5: "Competência excepcional",
    };
    return descriptions[level as keyof typeof descriptions] || descriptions[3];
  };

  return (
    <motion.div
      className="md:col-span-2 lg:col-span-3" // Soft Skills ocupa mais espaço
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="group h-full cursor-pointer border-2 border-purple-500/40 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-pink-900/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-900/40">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-3 text-2xl font-bold text-white transition-colors group-hover:text-purple-300">
              <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2">
                <Users className="h-6 w-6" />
              </div>
              Soft Skills & Competências Interpessoais
            </CardTitle>
            <div className="flex items-center space-x-2">
              <div className="rounded-full border border-white/20 bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-sm font-bold text-white">
                Nv. {level}
              </div>
              <div className="rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-sm text-purple-300">
                {skillCount} habilidades
              </div>
            </div>
          </div>

          {/* Barra de Progresso com descrição */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Nível de Proficiência Geral</span>
              <span className="font-medium text-purple-300">
                {getProficiencyDescription(level)}
              </span>
            </div>
            <div className="h-3 w-full rounded-full bg-gray-700">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${(level / 5) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group/item flex items-center justify-between rounded-lg border border-purple-500/20 p-4 transition-all hover:border-purple-500/40 hover:bg-purple-800/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 transition-all group-hover/item:scale-110 group-hover/item:bg-gradient-to-r group-hover/item:from-purple-500/30 group-hover/item:to-pink-500/30">
                    {getSoftSkillIcon(skill.name)}
                  </div>
                  <div>
                    <span className="text-base font-semibold text-white transition-colors group-hover/item:text-purple-200">
                      {skill.name}
                    </span>
                    {/* {skill.description && (
                      <p className="mt-1 text-sm text-gray-400">
                        {skill.description}
                      </p>
                    )} */}
                  </div>
                </div>

                {/* Estrelas de proficiência individual */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < (skill.proficiency || 3)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Componente para Skills Técnicas
function TechnicalSkillCard({
  category,
  skills,
  skillCount,
  level,
  categoryNames,
}: {
  category: string;
  skills: Skill[];
  skillCount: number;
  level: number;
  categoryNames: Record<string, string>;
}) {
  const getLevelColor = (level: number) => {
    const colors = {
      1: "from-gray-500 to-gray-400",
      2: "from-blue-400 to-blue-300",
      3: "from-green-500 to-green-400",
      4: "from-purple-500 to-purple-400",
      5: "from-yellow-500 to-orange-400",
    };
    return colors[level as keyof typeof colors] || colors[3];
  };

  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        },
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="group h-full cursor-pointer border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white transition-colors group-hover:text-blue-300">
              {categoryNames[category] || category}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <div
                className={`bg-gradient-to-r px-2 py-1 text-xs ${getLevelColor(level)} rounded-full border border-white/20 font-bold text-white`}
              >
                Nv. {level}
              </div>
              <div className="rounded-full border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-xs text-blue-300">
                {skillCount} {skillCount === 1 ? "skill" : "skills"}
              </div>
            </div>
          </div>

          {/* Barra de Progresso da Categoria */}
          <div className="mt-3 space-y-1">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Especialização</span>
              <span>{level}/5</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-700">
              <motion.div
                className={`bg-gradient-to-r ${getLevelColor(level)} h-2 rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${(level / 5) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group/item flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-700/50"
            >
              <div className="flex items-center space-x-3">
                {skill.iconUrl && (
                  <div className="relative">
                    <Image
                      src={skill.iconUrl}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain transition-transform group-hover/item:scale-110"
                    />
                  </div>
                )}
                <span className="text-sm font-medium text-white transition-colors group-hover/item:text-blue-200">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function SectionSkills({ skills }: SectionSkillsProps) {
  // Separar skills técnicas e soft skills
  const technicalSkills = skills.filter(
    (skill) => skill.category !== "Soft Skills",
  );
  const softSkills = skills.filter((skill) => skill.category === "Soft Skills");

  // Agrupar habilidades técnicas por categoria
  const skillsByCategory = technicalSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  // Encontrar a categoria com mais skills para normalização
  const maxSkillsInCategory = Math.max(
    ...Object.values(skillsByCategory).map((skills) => skills.length),
    1, // Evitar divisão por zero
  );

  // Calcular level para cada categoria técnica
  const technicalCategoriesWithLevel = Object.entries(skillsByCategory).map(
    ([category, categorySkills]) => {
      const skillCount = categorySkills.length;
      const level = calculateCategoryLevel(skillCount, maxSkillsInCategory);

      return {
        category,
        skills: categorySkills,
        skillCount,
        level,
      };
    },
  );

  // Calcular level para soft skills
  const softSkillsLevel =
    softSkills.length > 0
      ? calculateCategoryLevel(softSkills.length, maxSkillsInCategory)
      : 3;

  // Ordenar categorias técnicas por level (maior primeiro)
  const sortedTechnicalCategories = technicalCategoriesWithLevel.sort(
    (a, b) => b.level - a.level,
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
    "Soft Skills": "Soft Skills",
  };

  // Animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {" "}
        {/* Aumentado para 7xl */}
        {/* Header com Animação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Tecnologias e Habilidades
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Competências técnicas e interpessoais para criar soluções
            extraordinárias
          </p>
        </motion.div>
        {/* Grid Principal - Skills Técnicas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {sortedTechnicalCategories.map(
            ({ category, skills: categorySkills, skillCount, level }) => (
              <TechnicalSkillCard
                key={category}
                category={category}
                skills={categorySkills}
                skillCount={skillCount}
                level={level}
                categoryNames={categoryNames}
              />
            ),
          )}
        </motion.div>
        {/* Seção Separada para Soft Skills */}
        {softSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="mb-8 text-center">
              <h3 className="mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
                Competências Interpessoais
              </h3>
              <p className="text-gray-400">
                Habilidades que fazem a diferença no trabalho em equipe e na
                entrega de resultados
              </p>
            </div>

            <SoftSkillsCard
              skills={softSkills}
              skillCount={softSkills.length}
              level={softSkillsLevel}
            />
          </motion.div>
        )}
        {/* Resto do código (Legenda e Footer Stats) permanece igual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 rounded-2xl border border-gray-700 bg-gray-800/50 p-6 text-sm text-gray-400 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-gray-500 to-gray-400"></div>
              <span>Nv. 1: Iniciante</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-300"></div>
              <span>Nv. 2: Básico</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
              <span>Nv. 3: Intermediário</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
              <span>Nv. 4: Avançado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400"></div>
              <span>Nv. 5: Especialista</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span>Total: {skills.length} competências</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>
                {Object.keys(skillsByCategory).length +
                  (softSkills.length > 0 ? 1 : 0)}{" "}
                categorias
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span>
                Nível médio:{" "}
                {(
                  [
                    ...sortedTechnicalCategories,
                    ...(softSkills.length > 0
                      ? [{ level: softSkillsLevel }]
                      : []),
                  ].reduce((acc, cat) => acc + cat.level, 0) /
                  (sortedTechnicalCategories.length +
                    (softSkills.length > 0 ? 1 : 0))
                ).toFixed(1)}
                /5
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

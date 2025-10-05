"use client";

import { Project, ProjectStatus, Skill } from "@prisma/client";
import {
  AlertCircle,
  Archive,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clipboard,
  ExternalLink,
  Filter,
  Github,
  PauseCircle,
  Star,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SectionProjectsProps {
  projects: Project[];
  skills: Skill[];
}

// Mapeamento dos status para exibição
const STATUS_CONFIG = {
  [ProjectStatus.DEVELOPING]: {
    label: "Em desenvolvimento",
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    icon: <AlertCircle className="h-4 w-4" />,
  },
  [ProjectStatus.FINISHED]: {
    label: "Finalizado",
    color: "bg-green-500/20 text-green-300 border-green-500/30",
    icon: <CheckCircle className="h-4 w-4" />,
  },
  [ProjectStatus.PLANNING]: {
    label: "Planejamento",
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    icon: <Clipboard className="h-4 w-4" />,
  },
  [ProjectStatus.PAUSED]: {
    label: "Pausado",
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    icon: <PauseCircle className="h-4 w-4" />,
  },
  [ProjectStatus.ARCHIVED]: {
    label: "Arquivado",
    color: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    icon: <Archive className="h-4 w-4" />,
  },
};

const CATEGORIES = [
  { value: "ALL", label: "Todos", icon: "🎯", count: 0 },
  { value: "FEATURED", label: "Destaque", icon: "⭐", count: 0 },
  {
    value: ProjectStatus.DEVELOPING,
    label: "Desenvolvendo",
    icon: "🚧",
    count: 0,
  },
  { value: ProjectStatus.FINISHED, label: "Finalizados", icon: "✅", count: 0 },
  {
    value: ProjectStatus.PLANNING,
    label: "Planejamento",
    icon: "📋",
    count: 0,
  },
  {
    value: ProjectStatus.ARCHIVED,
    label: "Arquivados",
    icon: "🗄️",
    count: 0,
  },
  {
    value: ProjectStatus.PAUSED,
    label: "Pausados",
    icon: "⏸️",
    count: 0,
  },
];

export default function SectionProjects({
  projects,
  skills,
}: SectionProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // DEBUG: Log dos projetos para verificar os dados
  useEffect(() => {
    console.log("Todos os projetos:", projects);
    console.log(
      "Projetos destacados:",
      projects.filter((p) => p.featured),
    );
    console.log(
      "Projetos NÃO destacados:",
      projects.filter((p) => !p.featured),
    );
  }, [projects]);

  // Calcular contagens para cada categoria
  const categoriesWithCount = CATEGORIES.map((category) => {
    let count = 0;
    if (category.value === "ALL") count = projects.length;
    else if (category.value === "FEATURED") {
      count = projects.filter((p) => p.featured === true).length;
      console.log(`Projetos destacados (featured=true): ${count}`);
    } else count = projects.filter((p) => p.status === category.value).length;

    return { ...category, count };
  });

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "FEATURED") {
      console.log(
        `Filtrando projeto "${project.title}": featured =`,
        project.featured,
      );
      return project.featured === true; // Garantir que só pegue featured=true
    }
    return project.status === selectedCategory;
  });

  // DEBUG: Log dos projetos filtrados
  useEffect(() => {
    console.log(`Categoria selecionada: ${selectedCategory}`);
    console.log(`Projetos filtrados: ${filteredProjects.length}`);
    console.log(
      "Projetos filtrados:",
      filteredProjects.map((p) => ({
        title: p.title,
        featured: p.featured,
        status: p.status,
      })),
    );
  }, [selectedCategory, filteredProjects]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  const getTechIcon = (tech: string): string => {
    const exactMatch = skills.find(
      (s) => s.name.toLowerCase() === tech.toLowerCase(),
    );
    if (exactMatch?.iconUrl) {
      return exactMatch.iconUrl;
    }

    const partialMatch = skills.find(
      (s) =>
        tech.toLowerCase().includes(s.name.toLowerCase()) ||
        s.name.toLowerCase().includes(tech.toLowerCase()),
    );
    if (partialMatch?.iconUrl) {
      return partialMatch.iconUrl;
    }

    const techIcons: Record<string, string> = {
      "Next.js":
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/next.js.svg",
      TypeScript:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/typescript.svg",
      React:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/react.svg",
      JavaScript:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/javascript.svg",
      "Tailwind CSS":
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/tailwindcss.svg",
      Prisma:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/prisma.svg",
      Neon: "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/neon.svg",
      Stripe:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/stripe.svg",
      Vite: "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/vite.js.svg",
      Bootstrap:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/bootstrap.svg",
      Firebase:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/firebase.svg",
      ShadCN:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/shadcn.svg",
      emailjs:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/emailjs.jpg",
      "Discord OAuth":
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/discord.svg",
      "Node.js":
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/nodejs.svg",
      PostgreSQL:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/postgresql.svg",
      HTML5:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/html5.svg",
      CSS: "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/css3.svg",
      Python:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/python.svg",
      "C#": "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/csharp.svg",
      Django:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/django.svg",
    };

    return techIcons[tech] || "/default-tech.svg";
  };

  const getProjectStatus = (project: Project) => {
    const statusConfig = STATUS_CONFIG[project.status];
    const featuredConfig = project.featured
      ? {
          label: "Destaque",
          color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
          icon: <Star className="h-3 w-3" />,
        }
      : null;

    return {
      status: statusConfig,
      featured: featuredConfig,
    };
  };

  const openLightbox = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
  };

  // Fechar lightbox com ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-20 md:px-8 lg:px-16"
    >
      {/* Background Elements */}
      <div className="bg-grid-white/[0.02] absolute inset-0 bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 backdrop-blur-sm">
            <Star className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Portfólio</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Meus Projetos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            Uma jornada através dos meus trabalhos mais recentes e desafiadores
          </p>
        </div>

        {/* Filtros de categoria */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
              <Filter className="h-5 w-5" />
              Filtrar Projetos
            </h3>
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-white">
                {filteredProjects.length}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-white">
                {projects.length}
              </span>{" "}
              projetos
              {selectedCategory === "FEATURED" && (
                <span className="ml-2 text-yellow-400">
                  ⭐{" "}
                  {
                    categoriesWithCount.find((c) => c.value === "FEATURED")
                      ?.count
                  }{" "}
                  destacados
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categoriesWithCount.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`group relative flex items-center gap-3 rounded-2xl px-6 py-4 font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/25"
                    : "border border-gray-700 bg-gray-800/50 text-gray-300 backdrop-blur-sm hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    selectedCategory === category.value
                      ? "bg-white/20 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mensagem quando não há projetos */}
        {filteredProjects.length === 0 && (
          <div className="mx-auto max-w-2xl rounded-3xl border border-gray-700 bg-gray-800/50 p-16 text-center backdrop-blur-sm">
            <div className="mb-6 text-8xl">🔍</div>
            <p className="mb-4 text-2xl font-semibold text-gray-300">
              {selectedCategory === "FEATURED"
                ? "Nenhum projeto destacado encontrado"
                : "Nenhum projeto encontrado"}
            </p>
            <p className="text-lg text-gray-500">
              {selectedCategory === "FEATURED"
                ? "Os projetos destacados aparecerão aqui quando marcados como favoritos."
                : "Tente selecionar outra categoria ou verifique novamente em breve"}
            </p>
          </div>
        )}

        {/* Carousel para projetos */}
        <div className="mx-auto max-w-7xl">
          <Carousel
            setApi={setCarouselApi}
            className="w-full"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-4">
              {filteredProjects.map((project) => {
                const { status, featured } = getProjectStatus(project);
                return (
                  <CarouselItem
                    key={project.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                  >
                    <Card className="group relative h-full overflow-hidden rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-white shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-gray-600 hover:shadow-2xl">
                      {/* Badges de status */}
                      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        {featured && (
                          <Badge
                            className={`${featured.color} border font-semibold backdrop-blur-sm`}
                          >
                            {featured.icon}
                            <span className="ml-1">{featured.label}</span>
                          </Badge>
                        )}
                        <Badge
                          className={`${status.color} border font-semibold backdrop-blur-sm`}
                        >
                          {status.icon}
                          <span className="ml-1">{status.label}</span>
                        </Badge>
                      </div>

                      <CardHeader className="p-0">
                        <div className="relative aspect-video w-full overflow-hidden">
                          {project.imageUrl ? (
                            <>
                              <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="cursor-zoom-in object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onClick={() => openLightbox(project.imageUrl!)}
                              />
                              {/* Overlay gradiente */}
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60" />

                              {/* Botão de zoom */}
                              <button
                                onClick={() => openLightbox(project.imageUrl!)}
                                className="absolute top-3 right-3 z-20 rounded-full border border-white/20 bg-black/50 p-3 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-black/70"
                                title="Ampliar imagem"
                              >
                                <ZoomIn className="h-4 w-4" />
                              </button>
                            </>
                          ) : (
                            <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-600">
                              <span className="text-lg text-gray-400">
                                📷 Sem imagem
                              </span>
                            </div>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        <CardTitle className="mb-3 line-clamp-2 text-2xl font-bold">
                          {project.title}
                        </CardTitle>

                        <div className="mb-4 flex items-center gap-2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">
                            {new Date(project.createdAt).toLocaleDateString(
                              "pt-BR",
                              {
                                year: "numeric",
                                month: "long",
                              },
                            )}
                          </span>
                        </div>

                        <p className="mb-4 line-clamp-3 text-lg leading-relaxed text-gray-300">
                          {project.description}
                        </p>

                        {project.detailedDesc && (
                          <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-gray-400">
                            {project.detailedDesc}
                          </p>
                        )}

                        <div className="space-y-3">
                          <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                            <span className="text-blue-400">🛠️</span>
                            Tecnologias Utilizadas
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <div
                                key={idx}
                                className="group/tech flex items-center gap-2 rounded-xl border border-gray-600 bg-gray-700/30 px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gray-500 hover:bg-gray-600"
                              >
                                <div className="relative h-5 w-5 flex-shrink-0">
                                  <Image
                                    src={getTechIcon(tech)}
                                    alt={tech}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                <span className="max-w-[100px] truncate text-sm font-medium">
                                  {tech}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="px-6 pt-4 pb-6">
                        <div className="flex w-full gap-3">
                          {project.githubUrl && (
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              className="flex-1"
                            >
                              <Button
                                variant="outline"
                                className="w-full gap-2 border-gray-600 bg-gray-700/50 text-white hover:border-gray-500 hover:bg-gray-600"
                              >
                                <Github className="h-4 w-4" />
                                Código
                              </Button>
                            </Link>
                          )}
                          {project.deployUrl && (
                            <Link
                              href={project.deployUrl}
                              target="_blank"
                              className="flex-1"
                            >
                              <Button className="w-full gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/25">
                                <ExternalLink className="h-4 w-4" />
                                Ver Projeto
                              </Button>
                            </Link>
                          )}
                          {!project.githubUrl && !project.deployUrl && (
                            <div className="flex-1 py-2 text-center text-sm text-gray-500">
                              Links em breve
                            </div>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {filteredProjects.length > 1 && (
              <>
                <CarouselPrevious className="absolute top-1/2 left-2 hidden -translate-y-1/2 transform rounded-2xl border border-gray-600 bg-gray-800/80 p-4 text-white backdrop-blur-sm hover:border-gray-500 hover:bg-gray-700 md:flex">
                  <ArrowRight className="h-6 w-6 rotate-180" />
                </CarouselPrevious>
                <CarouselNext className="absolute top-1/2 right-2 hidden -translate-y-1/2 transform rounded-2xl border border-gray-600 bg-gray-800/80 p-4 text-white backdrop-blur-sm hover:border-gray-500 hover:bg-gray-700 md:flex">
                  <ArrowRight className="h-6 w-6" />
                </CarouselNext>
              </>
            )}
          </Carousel>

          {filteredProjects.length > 1 && (
            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="flex gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current - 1
                        ? "w-8 bg-gradient-to-r from-purple-600 to-pink-600"
                        : "w-3 bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
              <div className="text-center text-gray-400">
                Projeto{" "}
                <span className="font-semibold text-white">{current}</span> de{" "}
                <span className="font-semibold text-white">{count}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-60 rounded-full border border-white/20 bg-black/50 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/70 md:top-8 md:right-8"
          >
            <svg
              className="h-6 w-6 md:h-8 md:w-8"
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

          <div
            className="relative flex h-full max-h-[85vh] w-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={currentImage}
                alt="Imagem ampliada do projeto"
                fill
                className="rounded-2xl object-contain"
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
            Clique fora da imagem ou pressione ESC para fechar
          </div>
        </div>
      )}
    </section>
  );
}

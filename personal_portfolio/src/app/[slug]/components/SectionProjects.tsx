"use client";

import { Project, Skill } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function SectionProjects({
  projects,
  skills,
}: SectionProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const categories = ["Todos", "Em desenvolvimento", "Finalizado", "Destaque"];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : selectedCategory === "Em desenvolvimento"
        ? projects.filter(
            (project) =>
              project.description?.toLowerCase().includes("desenvolvimento") ||
              project.detailedDesc?.toLowerCase().includes("desenvolvimento"),
          )
        : selectedCategory === "Finalizado"
          ? projects.filter(
              (project) =>
                project.description?.toLowerCase().includes("finalizado") ||
                project.detailedDesc?.toLowerCase().includes("finalizado"),
            )
          : selectedCategory === "Destaque"
            ? projects.filter((project) => project.featured)
            : projects;

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
    };

    return techIcons[tech] || "/default-tech.svg";
  };

  return (
    <section id="projects" className="bg-gray-900 px-4 py-16 md:px-8 lg:px-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
        Meus Projetos
      </h2>

      {/* Dropdown de categorias */}
      <div className="mb-8 flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-lg border border-gray-600 bg-gray-700 p-3 text-white outline-none focus:ring-2 focus:ring-purple-500"
        >
          {categories.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Mensagem quando não há projetos */}
      {filteredProjects.length === 0 && (
        <div className="mx-auto max-w-2xl rounded-lg bg-gray-800 p-8 text-center">
          <p className="text-xl text-gray-300">
            Nenhum projeto encontrado nesta categoria.
          </p>
        </div>
      )}

      {/* Carousel para projetos */}
      <div className="mx-auto max-w-4xl">
        <Carousel setApi={setCarouselApi} className="w-full">
          <CarouselContent>
            {filteredProjects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="rounded-lg border-gray-700 bg-gray-800 text-white shadow-lg transition-all hover:shadow-xl">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gray-700">
                          <span className="text-gray-400">Sem imagem</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <CardTitle className="text-2xl font-semibold">
                        {project.title}
                      </CardTitle>
                      <p className="mt-2 text-gray-300">
                        {project.description}
                      </p>
                      {project.detailedDesc && (
                        <p className="mt-4 text-gray-400">
                          {project.detailedDesc}
                        </p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-4">
                    <h3 className="mb-4 text-lg font-semibold">
                      Tecnologias Utilizadas
                    </h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                      {project.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-md border border-gray-600 bg-gray-700 p-2 transition-colors hover:bg-gray-600"
                        >
                          <div className="relative h-5 w-5 flex-shrink-0">
                            <Image
                              src={getTechIcon(tech)}
                              alt={tech}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="truncate text-xs font-medium">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start gap-4 px-6 pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>
                      <span className="text-sm text-gray-400">
                        {project.featured
                          ? "Projeto em Destaque"
                          : "Status: Ativo"}
                      </span>
                    </div>

                    <div className="flex w-full gap-2 sm:w-auto">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="flex-1 sm:flex-none"
                        >
                          <Button
                            variant="outline"
                            className="w-full border-gray-600 bg-gray-700 text-white hover:bg-gray-600 sm:w-auto"
                          >
                            GitHub
                          </Button>
                        </Link>
                      )}
                      {project.deployUrl && (
                        <Link
                          href={project.deployUrl}
                          target="_blank"
                          className="flex-1 sm:flex-none"
                        >
                          <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 sm:w-auto">
                            Ver Projeto
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {filteredProjects.length > 1 && (
            <>
              <CarouselPrevious className="absolute top-1/2 left-2 hidden -translate-y-1/2 transform rounded-full border border-gray-600 bg-gray-700 p-3 text-white hover:bg-gray-600 md:flex">
                &larr;
              </CarouselPrevious>
              <CarouselNext className="absolute top-1/2 right-2 hidden -translate-y-1/2 transform rounded-full border border-gray-600 bg-gray-700 p-3 text-white hover:bg-gray-600 md:flex">
                &rarr;
              </CarouselNext>
            </>
          )}
        </Carousel>

        {filteredProjects.length > 1 && (
          <div className="py-4 text-center text-lg text-gray-300">
            Projeto {current} de {count}
          </div>
        )}
      </div>
    </section>
  );
}

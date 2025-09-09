"use client";

import { ContactInfo, Prisma } from "@prisma/client";
import {
  ArrowRight,
  CheckCircle,
  Crown,
  MessageCircle,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceSectionProps {
  services: Prisma.ServiceGetPayload<true>[];
  contact: Pick<
    ContactInfo,
    "email" | "phone" | "whatsappLink" | "instagramLink"
  >;
}

export function SectionServices({ services, contact }: ServiceSectionProps) {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] =
    useState<Prisma.ServiceGetPayload<true> | null>(null);

  const handleOpen = (service: Prisma.ServiceGetPayload<true>) => {
    setSelectedService(service);
    setOpen(true);
  };

  // Agrupar serviços por categoria (baseado no nome)
  const serviceGroups = useMemo(() => {
    const groups: { [key: string]: Prisma.ServiceGetPayload<true>[] } = {};

    services.forEach((service) => {
      const category = service.name.split(" - ")[0]; // Ex: "Pacote Cooper"
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(service);
    });

    return groups;
  }, [services]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-blue-600/5 to-transparent"></div>
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-blue-500/5 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mb-16 text-center">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-semibold"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Nossas Soluções
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            Serviços <span className="text-blue-600">Premium</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">
            Soluções completas em marketing digital para impulsionar seu negócio
          </p>
        </div>

        {/* Grid de serviços organizado por categorias */}
        <div className="space-y-16">
          {Object.entries(serviceGroups).map(([category, categoryServices]) => (
            <div key={category} className="space-y-8">
              {/* Header da categoria */}
              <div className="text-center">
                <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-semibold text-slate-800 text-transparent">
                  {category}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {categoryServices.length} opções disponíveis
                </p>
              </div>

              {/* Grid de serviços */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <Card
                    key={service.id}
                    className="group relative overflow-hidden rounded-2xl border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <CardContent className="p-6">
                      {/* Badge de destaque */}
                      {service.name.includes("Gold") && (
                        <Badge className="absolute -top-2 -right-2 mt-4 border-0 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white">
                          <Crown className="mr-1 h-3 w-3" />
                          Premium
                        </Badge>
                      )}

                      {/* Imagem do serviço */}
                      <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl">
                        <Image
                          src={service.imageUrl}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* Nome e descrição */}
                      <h3 className="mb-3 text-xl font-bold text-slate-900">
                        {service.name}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-sm text-slate-600">
                        {service.description}
                      </p>

                      {/* Preço */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(service.price)}
                        </span>
                        {service.name.includes("Social Media") ||
                        service.name.includes("Tráfego") ? (
                          <span className="ml-2 text-sm text-slate-500">
                            /mês
                          </span>
                        ) : null}
                      </div>

                      {/* Destaques */}
                      <div className="space-y-2">
                        {service.name.includes("Cooper") && (
                          <div className="flex items-center text-sm text-slate-600">
                            <Zap className="mr-2 h-4 w-4 text-blue-500" />
                            Ideal para iniciantes
                          </div>
                        )}
                        {service.name.includes("Silver") && (
                          <div className="flex items-center text-sm text-slate-600">
                            <Star className="mr-2 h-4 w-4 text-purple-500" />
                            Equilíbrio perfeito
                          </div>
                        )}
                        {service.name.includes("Gold") && (
                          <div className="flex items-center text-sm text-slate-600">
                            <Crown className="mr-2 h-4 w-4 text-yellow-500" />
                            Solução completa
                          </div>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <Button
                        onClick={() => handleOpen(service)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        size="lg"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de serviço */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] w-full max-w-screen-md overflow-y-auto">
          {selectedService && (
            <div className="p-5">
              {/* Header do modal */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={selectedService.imageUrl}
                  alt={selectedService.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedService.name}
                  </DialogTitle>
                  <DialogDescription>
                    {selectedService.description}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="p-4 sm:p-6">
                {/* Descrição detalhada */}
                {selectedService.detailedDesc && (
                  <div className="mb-6">
                    <h4 className="mb-3 text-lg font-semibold text-slate-900">
                      Descrição Completa
                    </h4>
                    <p className="leading-relaxed whitespace-pre-line text-slate-700">
                      {selectedService.detailedDesc}
                    </p>
                  </div>
                )}

                {/* Preço */}
                <div className="mb-6 rounded-xl bg-slate-50 p-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selectedService.price)}
                    </span>
                    {selectedService.name.includes("Social Media") ||
                    selectedService.name.includes("Tráfego") ? (
                      <span className="ml-2 text-sm text-slate-500">/mês</span>
                    ) : null}
                  </div>
                </div>

                {/* Benefícios */}
                <div className="mb-6">
                  <h4 className="mb-3 text-lg font-semibold text-slate-900">
                    O que inclui:
                  </h4>
                  <div className="space-y-2">
                    {selectedService.detailedDesc
                      ?.split(". ")
                      .slice(0, 4)
                      .map(
                        (benefit, index) =>
                          benefit.trim() && (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                              <span className="text-slate-700">
                                {benefit.trim()}.
                              </span>
                            </div>
                          ),
                      )}
                  </div>
                </div>

                {/* Call to Action */}
                <DialogFooter className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={contact.whatsappLink ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      className="w-full bg-green-600 py-3 text-lg hover:bg-green-700"
                      size="lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      <span className="hidden sm:inline">
                        Solicitar pelo WhatsApp
                      </span>
                      <span className="inline sm:hidden">WhatsApp</span>
                    </Button>
                  </a>

                  <Button
                    variant="outline"
                    onClick={() => setOpen(false)}
                    className="w-full sm:w-auto"
                  >
                    Cancelar
                  </Button>
                </DialogFooter>

                <div className="mt-4 text-center">
                  <p className="text-sm text-slate-500">
                    Ou entre em contato por{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      email
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

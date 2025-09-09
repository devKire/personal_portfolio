"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const images = [
    {
      url: "https://qmpdo1utase5f4gf.public.blob.vercel-storage.com/geral/geral02.jpg",
      alt: "Ensaio ao ar livre",
    },
    {
      url: "https://qmpdo1utase5f4gf.public.blob.vercel-storage.com/geral/geral01.jpg",
      alt: "Casamento romântico",
    },
    {
      url: "https://qmpdo1utase5f4gf.public.blob.vercel-storage.com/geral/geral02.jpg",
      alt: "Família reunida",
    },
    {
      url: "https://qmpdo1utase5f4gf.public.blob.vercel-storage.com/geral/geral01.jpg",
      alt: "Retrato artístico",
    },
    {
      url: "https://qmpdo1utase5f4gf.public.blob.vercel-storage.com/geral/geral02.jpg",
      alt: "Foto em estúdio",
    },
  ];

  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="relative aspect-video">
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 text-white drop-shadow">
                <h3 className="text-xl font-semibold">{img.alt}</h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

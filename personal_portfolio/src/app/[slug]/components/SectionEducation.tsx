import { Education } from "@prisma/client";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

interface SectionEducationProps {
  educations: Education[];
}

export default function SectionEducation({
  educations,
}: SectionEducationProps) {
  return (
    <section className="bg-gray-900 px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Formação Acadêmica
      </h2>

      <div className="mx-auto max-w-3xl space-y-6">
        {educations.map((education) => (
          <Card
            key={education.id}
            className="border-gray-700 bg-gray-800 text-white"
          >
            <CardContent className="flex items-center gap-4 p-6">
              {education.logoUrl && (
                <Image
                  src={education.logoUrl}
                  alt={education.institution}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded object-contain"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{education.field}</h3>
                <p className="mt-1 text-sm">{education.institution}</p>
                <p className="text-sm text-gray-400">
                  {education.degree} •{" "}
                  {education.startDate.toLocaleDateString("pt-BR")} -{" "}
                  {education.current
                    ? "Atual"
                    : education.endDate?.toLocaleDateString("pt-BR")}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

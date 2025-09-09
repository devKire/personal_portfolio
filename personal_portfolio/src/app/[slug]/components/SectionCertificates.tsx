import { Certificate } from "@prisma/client";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SectionCertificatesProps {
  certificates: Certificate[];
}

export default function SectionCertificates({
  certificates,
}: SectionCertificatesProps) {
  return (
    <section className="bg-opacity-75 bg-black px-4 py-16 backdrop-blur-sm">
      <h2 className="mb-8 text-center text-3xl font-semibold text-white">
        Certificados
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <Card
            key={certificate.id}
            className="border-gray-700 bg-gray-800 text-white"
          >
            <CardHeader>
              <CardTitle className="text-lg">{certificate.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={certificate.imageUrl}
                alt={certificate.title}
                width={300}
                height={200}
                className="mb-4 h-40 w-full rounded-md object-cover"
              />
              <p className="text-sm text-gray-300">{certificate.institution}</p>
              <p className="text-xs text-gray-400">
                Emitido em {certificate.issueDate.toLocaleDateString("pt-BR")}
              </p>
              {/* {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm text-purple-400 hover:underline"
                >
                  Ver credencial
                </a>
              )} */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

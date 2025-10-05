import { notFound } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";

// Importando componentes que serão adaptados para o portfólio
import FloatingWhatsAppButton from "./components/floating-whatsapp-button";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import SectionHome from "./components/Home";
import SectionAbout from "./components/SectionAbout";
import SectionCertificates from "./components/SectionCertificates";
import SectionContact from "./components/SectionContact";
import SectionEducation from "./components/SectionEducation";
// Novos componentes específicos para portfólio
import SectionProjects from "./components/SectionProjects";
import SectionSkills from "./components/SectionSkills";

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PortfolioPageProps) => {
  const { slug } = await params;

  // Buscar dados do usuário/portfólio
  const user = await db.user.findFirst({
    where: {
      OR: [
        { slug: slug },
        { email: "erikdossantos2006@outlook.com" }, // fallback
      ],
    },
    include: {
      socialLinks: true,
      skills: {
        orderBy: { proficiency: "desc" },
      },
      projects: {
        orderBy: { createdAt: "desc" },
      },
      educations: {
        orderBy: { startDate: "desc" },
      },
      certificates: {
        orderBy: { issueDate: "desc" },
      },
    },
  });

  if (!user) {
    notFound();
  }

  return (
    <>
      <div className="min-h-screen w-full">
        {/* Cabeçalho */}
        <Header user={user} />

        {/* Seção Inicial/Home */}
        <section id="home">
          <SectionHome user={user} />
        </section>
        <Separator />

        {/* Sobre Mim */}
        <section id="about">
          <SectionAbout user={user} />
        </section>
        <Separator />

        {/* Projetos */}
        <section id="projects">
          <SectionProjects projects={user.projects} skills={user.skills} />
        </section>
        <Separator />

        {/* Habilidades */}
        <section id="skills">
          <SectionSkills skills={user.skills} />
        </section>
        <Separator />

        {/* Formação Acadêmica */}
        <section id="education">
          <SectionEducation educations={user.educations} />
        </section>
        <Separator />

        {/* Certificados */}
        <section id="certificates">
          <SectionCertificates certificates={user.certificates} />
        </section>
        <Separator />

        {/* Contato */}
        <section id="contact">
          <SectionContact
            email={user.email}
            socialLinks={user.socialLinks}
            location={user.location}
          />
        </section>
        <Separator />

        {/* Footer */}
        <Footer user={user} />

        {/* Botão do WhatsApp flutuante */}
        <FloatingWhatsAppButton
          socialLinks={user.socialLinks}
          defaultMessage="Olá Erik! Gostaria de conversar sobre um projeto..."
        />
      </div>
    </>
  );
};

export default Page;

// prisma/seed.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Criar usuário principal (você)
  const user = await prisma.user.upsert({
    where: { email: "erikdossantos2006@outlook.com" }, // campo único
    update: {
      name: "Erik Rafael dos Santos",
      slug: "erikdossantos",
      role: "Desenvolvedor Fullstack",
      bio: `Sou apaixonado por tecnologia, acredito no poder da educação e me dedico a ajudar vidas por meio da programação. A cada linha de código, busco trazer inovação e criar experiências únicas. Atualmente curso Análise e Desenvolvimento de Sistemas pela Faculdade SENAI em Joinville – SC, e aplico meus conhecimentos nas áreas de TI, programação, design, automação e análise de dados.`,
      location: "Joinville - SC",
      avatarUrl:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/EU2.jpg",
    },
    create: {
      name: "Erik Rafael dos Santos",
      email: "erikdossantos2006@outlook.com",
      slug: "erikdossantos",
      role: "Desenvolvedor Fullstack",
      bio: `Sou apaixonado por tecnologia, acredito no poder da educação e me dedico a ajudar vidas por meio da programação. A cada linha de código, busco trazer inovação e criar experiências únicas. Atualmente curso Análise e Desenvolvimento de Sistemas pela Faculdade SENAI em Joinville – SC, e aplico meus conhecimentos nas áreas de TI, programação, design, automação e análise de dados.`,
      location: "Joinville - SC",
      avatarUrl:
        "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/EU2.jpg",
      socialLinks: {
        create: [
          {
            platform: "linkedin",
            url: "https://www.linkedin.com/in/erik-rafael-dos-santos-416b64251/",
          },
          {
            platform: "github",
            url: "https://github.com/devKire",
          },
          {
            platform: "whatsapp",
            url: "https://wa.me/47999535245",
          },
          {
            platform: "email",
            url: "mailto:erikdossantos2006@outlook.com",
          },
          {
            platform: "instagram",
            url: "https://www.instagram.com/dossantoserik_jesus/",
          },
          {
            platform: "curriculo",
            url: "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/ERIK RAFAEL DOS SANTOS - TI.pdf",
          },
        ],
      },
      skills: {
        create: [
          // Frontend
          {
            name: "HTML",
            category: "Frontend",
            proficiency: 90,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/html5.svg",
          },
          {
            name: "CSS",
            category: "Frontend",
            proficiency: 85,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/css3.svg",
          },
          {
            name: "JavaScript",
            category: "Frontend",
            proficiency: 80,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/javascript.svg",
          },
          {
            name: "TypeScript",
            category: "Frontend",
            proficiency: 75,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/typescript.svg",
          },
          {
            name: "React",
            category: "Frontend",
            proficiency: 78,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/react.svg",
          },
          {
            name: "Next.js",
            category: "Frontend",
            proficiency: 75,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/next.js.svg",
          },

          // Backend
          {
            name: "Python",
            category: "Backend",
            proficiency: 70,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/python.svg",
          },
          {
            name: "C#",
            category: "Backend",
            proficiency: 45,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/csharp.svg",
          },
          { name: "Node.js", category: "Backend", proficiency: 65 },

          // Frameworks & Libraries
          {
            name: "ShadCN",
            category: "UI Libraries",
            proficiency: 70,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/shadcn.svg",
          },
          {
            name: "Bootstrap",
            category: "UI Frameworks",
            proficiency: 75,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/bootstrap.svg",
          },
          {
            name: "Tailwind CSS",
            category: "UI Frameworks",
            proficiency: 80,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/tailwindcss.svg",
          },
          // Ferramentas
          {
            name: "Git",
            category: "Ferramentas",
            proficiency: 80,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/git.svg",
          },
          {
            name: "GitHub",
            category: "Ferramentas",
            proficiency: 85,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/github.svg",
          },
          {
            name: "Excel",
            category: "Ferramentas",
            proficiency: 85,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/excel.svg",
          },
          {
            name: "Power BI",
            category: "Ferramentas",
            proficiency: 75,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/powerbi.svg",
          },
          {
            name: "VSCode",
            category: "Ferramentas",
            proficiency: 90,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/vscode.svg",
          },
          {
            name: "Vite",
            category: "Ferramentas",
            proficiency: 70,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/vite.js.svg",
          },
          {
            name: "Unity",
            category: "Ferramentas",
            proficiency: 60,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/unity.svg",
          },

          // APIs & Auth
          {
            name: "Stripe",
            category: "APIs",
            proficiency: 65,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/stripe.svg",
          },
          {
            name: "Discord API",
            category: "APIs",
            proficiency: 70,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/discord.svg",
          },
          {
            name: "Prisma",
            category: "ORM",
            proficiency: 72,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/prisma.svg",
          },
          {
            name: "JWT",
            category: "Auth",
            proficiency: 75,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/jwt.svg",
          },

          // Databases
          {
            name: "Firebase",
            category: "Databases",
            proficiency: 75,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/firebase.svg",
          },
          {
            name: "MySQL",
            category: "Databases",
            proficiency: 68,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/mysql.svg",
          },
          {
            name: "PostgreSQL (Neon)",
            category: "Databases",
            proficiency: 65,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/neon.svg",
          },
          {
            name: "SQLite",
            category: "Databases",
            proficiency: 60,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/sqlite.svg",
          },
          // Design
          {
            name: "Photoshop",
            category: "Design",
            proficiency: 70,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/photoshop.svg",
          },
          {
            name: "Illustrator",
            category: "Design",
            proficiency: 65,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/illustrator.svg",
          },
          {
            name: "Canva",
            category: "Design",
            proficiency: 80,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/canva.svg",
          },
          {
            name: "LucidChart",
            category: "Design",
            proficiency: 75,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/lucidchart.svg",
          },

          // Outros
          {
            name: "Portugol",
            category: "Outros",
            proficiency: 85,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/portugol.png",
          },
          {
            name: "Word",
            category: "Office",
            proficiency: 80,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/word.svg",
          },
          {
            name: "Teams",
            category: "Comunicação",
            proficiency: 85,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/teams.svg",
          },
          {
            name: "Discord",
            category: "Comunicação",
            proficiency: 90,
            iconUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/discord.svg",
          },

          // Soft Skills
          { name: "Comunicação", category: "Soft Skills", proficiency: 85 },
          {
            name: "Trabalho em Equipe",
            category: "Soft Skills",
            proficiency: 85,
          },
          { name: "Liderança", category: "Soft Skills", proficiency: 80 },
          { name: "Empatia", category: "Soft Skills", proficiency: 80 },
          { name: "Criatividade", category: "Soft Skills", proficiency: 85 },
          { name: "Adaptabilidade", category: "Soft Skills", proficiency: 85 },
          { name: "Gestão de Tempo", category: "Soft Skills", proficiency: 90 },
          {
            name: "Resolução de Problemas",
            category: "Soft Skills",
            proficiency: 90,
          },
          {
            name: "Pensamento Analítico",
            category: "Soft Skills",
            proficiency: 85,
          },
          { name: "Autonomia", category: "Soft Skills", proficiency: 90 },
          { name: "Proatividade", category: "Soft Skills", proficiency: 85 },
          {
            name: "Aprendizado Contínuo",
            category: "Soft Skills",
            proficiency: 90,
          },
          { name: "Organização", category: "Soft Skills", proficiency: 85 },
        ],
      },

      educations: {
        create: [
          {
            institution:
              "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
            degree: "Tecnólogo",
            field: "ADS: Análise e Desenvolvimento de Sistemas",
            startDate: new Date("2024-08-01"),
            current: true,
            logoUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/senai.svg",
          },
          {
            institution: "Senac Santa Catarina",
            degree: "Técnico Integrado ao Ensino Médio",
            field: "Programação de Jogos Digitais",
            startDate: new Date("2022-01-01"),
            endDate: new Date("2024-04-01"),
            current: false,
            logoUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/senac.svg",
          },
        ],
      },
      experiences: {
        create: [
          {
            title: "Desenvolvedor Fullstack Freelancer",
            company: "Autônomo",
            location: "Joinville, SC",
            description:
              "Desenvolvimento de aplicações web completas, desde o frontend até o backend, utilizando tecnologias modernas como React, Next.js, Node.js e diversas APIs.",
            startDate: new Date("2023-01-01"),
            current: true,
          },
          {
            title: "Estagiário em Desenvolvimento",
            company: "Empresa Local",
            location: "Joinville, SC",
            description:
              "Desenvolvimento e manutenção de sistemas web, participação em projetos de automação e análise de dados.",
            startDate: new Date("2022-06-01"),
            endDate: new Date("2022-12-31"),
            current: false,
          },
        ],
      },
      projects: {
        create: [
          {
            title: "Cantinho Gourmet",
            description:
              "Sistema completo para restaurante especializado em marmitas",
            detailedDesc:
              "Plataforma e-commerce com gestão de pedidos, pagamentos via Stripe, autenticação de usuários e painel administrativo. Desenvolvido com Next.js, TypeScript, Prisma e Neon.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/cantinhogourmet.png",
            deployUrl: "https://cantinho-gourmet-theta.vercel.app/",
            technologies: [
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "Neon",
              "Stripe",
            ],
            status: "PAUSED",
            featured: true,
          },
          {
            title: "LowAnx Project",
            description: "Plataforma de apoio para saúde mental e ansiedade",
            detailedDesc:
              "Aplicativo web com recursos informativos, comunidade de apoio e ferramentas interativas para gerenciamento de ansiedade.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/lowanx.png",
            deployUrl:
              "https://low-anx-erikrafaelsantos2006gmailcoms-projects.vercel.app/",
            technologies: [
              "React",
              "TypeScript",
              "Vite",
              "Bootstrap",
              "Firebase",
            ],
            status: "PLANNING",
            featured: true,
          },
          {
            title: "Portfólio V2",
            description: "Versão atualizada do portfólio pessoal",
            detailedDesc:
              "Site responsivo com design moderno, seções interativas e integração com diversas APIs. Desenvolvido com as melhores práticas de SEO e performance.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/portfoliov2.png",
            deployUrl: "https://erikdossantos.vercel.app",
            githubUrl: "https://github.com/devKire/portfolio",
            technologies: [
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "ShadCN",
              "emailjs",
            ],
            status: "FINISHED",
            featured: false,
          },
          {
            title: "L'Amour Games Project",
            description: "Comunidade gaming com integração Discord",
            detailedDesc:
              "Plataforma para gamers com autenticação via Discord OAuth, perfis personalizáveis, sistema de ranks e comunidade integrada.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/lamour.png",
            deployUrl: "https://lamour-games.vercel.app",
            technologies: ["React", "JavaScript", "Firebase", "Discord OAuth"],
            status: "PLANNING",
            featured: false,
          },
          {
            title: "Página de Vendas - E-book Pet",
            description: "Landing page para venda de e-book de receitas pets",
            detailedDesc:
              "Página de vendas otimizada para conversão com formulários, integração de pagamento e design responsivo.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/dog.png",
            deployUrl: "https://amantesdedogs.vercel.app",
            technologies: ["React", "JavaScript", "CSS"],
            status: "FINISHED",
            featured: false,
          },
          {
            title: "Kire Visual Designers",
            description: "Site institucional para estúdio de design",
            detailedDesc:
              "Portfólio online para estúdio de design com galeria de trabalhos, formulário de contato e informações sobre serviços.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/designers.png",
            deployUrl: "https://kvd-kire-visual-designers.vercel.app",
            technologies: ["JavaScript", "HTML5", "CSS"],
            status: "ARCHIVED",
            featured: false,
          },
          {
            title: "Portfólio V1",
            description: "Primeira versão do portfólio pessoal",
            detailedDesc:
              "Site estático desenvolvido durante os primeiros estudos de programação, com design simples e funcional.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/portfolio.png",
            deployUrl:
              "https://portifolio-erik-santos.vercel.app/pgPrincipal/pgPrincipal.html",
            technologies: ["JavaScript", "HTML5", "CSS"],
            status: "ARCHIVED",
            featured: false,
          },
          {
            title: "Portfolio Corretor de Imóveis",
            description:
              "Landing Page moderna e estratégica para corretores de imóveis",
            detailedDesc:
              "Desenvolvimento de uma landing page completa, com foco em transmitir credibilidade e atrair clientes. Inclui seção de apresentação, portfólio de imóveis, funil de conversão otimizado e call-to-action que direciona o usuário a entrar em contato diretamente com o corretor.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/marivaldocarvalho.png",
            deployUrl:
              "https://corretor-landing-page.vercel.app/marivaldo-carvalho-corretor",
            technologies: [
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "Neon",
              "ShadCN",
            ],
            status: "DEVELOPING",
            featured: true,
          },
          {
            title: "Landing Page - Neodoxa",
            description:
              "Agência de Marketing Digital - Desenvolvimento Web, Social Media e Tráfego Pago",
            detailedDesc:
              "Desenvolvimento de uma landing page completa, com foco em transmitir credibilidade e atrair clientes.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/neodoxa.png",
            deployUrl: "https://neodoxa.vercel.app/neodoxa",
            technologies: [
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "Neon",
              "ShadCN",
            ],
            status: "DEVELOPING",
            featured: true,
          },
          {
            title: "Gerenciador de Tarefas - Tarefando",
            description:
              "Gerenciador de tarefas simples e eficiente para organizar seu dia a dia",
            detailedDesc:
              "Aplicativo web para gerenciamento de tarefas com funcionalidades de adicionar, editar, excluir e marcar tarefas como concluídas. Interface intuitiva e responsiva.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/tarefando.png",
            deployUrl: "https://tarefando-one.vercel.app/",
            technologies: [
              "Django",
              "Python",
              "Bootstrap",
              "HTML5",
              "Neon",
              "CSS3",
            ],
            status: "DEVELOPING",
            featured: true,
          },
          {
            title: "Bella Vita - Salão de Beleza",
            description:
              "Landing Page moderna e estratégica para salão de beleza",
            detailedDesc:
              "Desenvolvimento de uma landing page completa, com foco em transmitir credibilidade e atrair clientes. Inclui seção de apresentação, portfólio de serviços, funil de conversão otimizado e call-to-action que direciona o usuário a entrar em contato diretamente com o salão.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/bellavita.png",
            deployUrl: "https://bellavita-six.vercel.app/",
            technologies: [
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "Neon",
              "ShadCN",
            ],
            status: "FINISHED",
            featured: true,
          },
          {
            title: "João Garcia - Fotografia",
            description:
              "Landing Page moderna e estratégica para fotógrafo profissional",
            detailedDesc:
              "Landing page desenvolvida para o fotógrafo João Garcia, com o objetivo de apresentar seu portfólio de forma elegante e profissional. A página inclui seções para galeria de fotos, depoimentos de clientes, informações de contato e cta para agendamento de sessões fotográficas. O design é responsivo, garantindo uma ótima experiência em dispositivos móveis e desktops.",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/joaogarcia.png",
            deployUrl: "https://joaogarcia.vercel.app/",
            technologies: [
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "Neon",
              "ShadCN",
            ],
            status: "FINISHED",
            featured: true,
          },
        ],
      },
      certificates: {
        create: [
          {
            title: "Programação Básico Front-End",
            institution:
              "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
            issueDate: new Date("2024-12-01"),
            credentialUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/certificados/frontend-basico",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/CertificadoProgramacaoBasicaFrontEnd.jpeg",
          },
          {
            title: "DESENVOLVEDOR BACK-END - PYTHON",
            institution:
              "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
            issueDate: new Date("2024-05-01"),
            credentialUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/certificados/backend-python",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/CertificadoBackEndPYTHON.jpeg",
          },
          {
            title:
              "Certificado de Participante da Olimpíada Brasileira de Geopolítica - 2023.2",
            institution: "Seleta Educação",
            issueDate: new Date("2023-11-01"),
            credentialUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/certificados/geopolitica-2023",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/CertificadoOBGP2023.jpeg",
          },
          {
            title: "1º Feira de Ciências",
            institution: "Senac Santa Catarina",
            issueDate: new Date("2023-06-01"),
            credentialUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/certificados/feira-ciencias",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/Certificado1FeiraDeCiências.jpeg",
          },
          {
            title: "Profissional Assistente de Desenvolvedor de Games",
            institution: "Senac Santa Catarina",
            issueDate: new Date("2022-12-01"),
            credentialUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/certificados/assistente-games",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/CertificadoAssistenteDeGameDev.jpeg",
          },
          {
            title:
              "Certificado de Medalha de Prata na 24º Olimpíada Brasileira de Astronomia e Astronáutica",
            institution:
              "OBA - Olimpíada Brasileira de Astronomia e Astronáutica",
            issueDate: new Date("2021-10-01"),
            credentialUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/certificados/oba-2021",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/CertificadoOBA.jpeg",
          },
          {
            title: "CURSO DE INFORMÁTICA E TECNOLOGIA",
            institution:
              "MASTER Desenvolvimento Humano e Capacitação Profissional",
            issueDate: new Date("2021-07-01"),
            credentialUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/certificados/informatica-basica",
            imageUrl:
              "https://1hcgs7spbatxhpzg.public.blob.vercel-storage.com/CertificadoINFORMATICA.jpeg",
          },
        ],
      },
    },
  });

  console.log(`Usuário criado com ID: ${user.id}`);
  console.log(`Portfólio seed completo!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

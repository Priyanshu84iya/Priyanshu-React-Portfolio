type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Priyanshu | Personal Portfolio",
    fullName: "Priyanshu Chaurasiya",
    email: "priyanshu69chaurasiya@mail.com",
  },
  hero: {
    name: "Priyanshu Chaurasiya",
    p: ["I'm a Web developer, graphic designer and photographer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am Priyanshu, a skilled and dedicated software developer with over a year of professional experience in web development. My expertise lies in technologies such as JavaScript, HTML, CSS, React, Three.js, TypeScript, Node.js, MongoDB, Vite and C, enabling me to create responsive, user-friendly, and efficient web applications.

      I am highly committed to continuous learning and staying updated with emerging technologies to deliver innovative and effective solutions. With a strong problem-solving mindset and attention to detail, I excel at tackling complex challenges and contributing to high-quality software projects.

      As a motivated individual, I aim to leverage my skills and expertise to drive impactful results while advancing my professional growth in the ever-evolving tech industry.!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "My Service.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

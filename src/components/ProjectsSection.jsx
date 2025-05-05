import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Animal Shelter",
    description: "An application for managing an animal shelter with an automated adoption process system.",
    image: "/projects/project1.png",
    tags: ["Laravel", "Vue","Filament"],
    demoUrl: "",
    githubUrl: "https://github.com/Chekiro/animal-shelter-app",
  },
  {
    id: 2,
    title: "Event Menagment App",
    description:
      "The Eventify application stands as a comprehensive, full-stack platform for managing events.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "TypeScript","Zod"],
    demoUrl: "",
    githubUrl: "https://github.com/Chekiro/eventify-app",
  },
  {
    id: 3,
    title: "Social Media App",
    description:
      "A social media web application that enables user authentication, posting, commenting, following, liking, and profile management with relational database support.",
    image: "/projects/project3.png",
    tags: ["Laravel", "Bootstrap"],
    demoUrl: "",
    githubUrl: "https://github.com/Chekiro/social-media-app",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Weather App is a responsive web application that fetches real-time weather data using an external API, allowing users to search for current conditions in any city worldwide.",
    image: "/projects/project4.png",
    tags: ["Vue", "Tailwind Css"],
    demoUrl: "https://chekiro.github.io/vue-weather-app/",
    githubUrl: "https://github.com/Chekiro/vue-weather-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Take a look at my latest projects, where I combined modern technologies with practical solutions to build responsive and engaging web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-3">
  {project.demoUrl && (
    <a
      href={project.demoUrl}
      target="_blank"
      className="text-foreground/80 hover:text-primary transition-colors duration-300"
    >
      <ExternalLink size={20} />
    </a>
  )}
  <a
    href={project.githubUrl}
    target="_blank"
    className="text-foreground/80 hover:text-primary transition-colors duration-300"
  >
    <Github size={20} />
  </a>
</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Chekiro"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

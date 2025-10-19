import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechIcon } from "./tech-icon";

const techCategories = [
  {
    name: "Frontend",
    techs: ["JavaScript", "React", "HTML5", "CSS3", "SASS"],
  },
  {
    name: "Backend",
    techs: ["Java", "Spring Boot", "Node.js", "Express.js"],
  },
  {
    name: "Databases & Cloud",
    techs: ["Firebase", "SQL", "MongoDB"],
  },
  {
    name: "Tools & DevOps",
    techs: ["Git", "GitHub", "Maven", "Docker", "Jira"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Mi Stack Tecnológico
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Una selección de las tecnologías con las que más disfruto trabajar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category) => (
            <Card key={category.name} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {category.techs.map((tech) => (
                    <div key={tech} className="flex flex-col items-center gap-2 p-2 rounded-lg" title={tech}>
                      <TechIcon name={tech} className="h-10 w-10 text-primary" />
                      <span className="text-xs text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

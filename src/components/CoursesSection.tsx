import { useInView } from "@/hooks/useInView";
import { Code, Database, Smartphone, Brain, Globe, Terminal } from "lucide-react";

const courses = [
  { icon: Globe, title: "Web Development", desc: "Master HTML, CSS, JavaScript, React and build production-ready web applications.", color: "from-blue-500 to-cyan-500" },
  { icon: Terminal, title: "Python Programming", desc: "Learn Python from basics to advanced concepts including automation and scripting.", color: "from-green-500 to-emerald-500" },
  { icon: Database, title: "Data Science", desc: "Explore data analysis, visualization, and machine learning with real datasets.", color: "from-purple-500 to-violet-500" },
  { icon: Smartphone, title: "App Development", desc: "Build cross-platform mobile apps using React Native and modern frameworks.", color: "from-orange-500 to-red-500" },
  { icon: Brain, title: "AI & Machine Learning", desc: "Dive into neural networks, NLP, and computer vision with hands-on projects.", color: "from-pink-500 to-rose-500" },
  { icon: Code, title: "DSA & Competitive", desc: "Strengthen problem-solving skills with data structures and algorithms.", color: "from-indigo-500 to-blue-500" },
];

const CoursesSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="courses" ref={ref} className="py-20 px-6 section-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
          Our <span className="text-primary">Courses</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Industry-aligned programs designed to make you job-ready with practical, project-based learning.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={course.title}
              className={`group rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <course.icon size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.desc}</p>
              <button className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-all">
                Enroll Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
              alt="Students collaborating"
              className="rounded-xl h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
              alt="Team working together"
              className="rounded-xl h-48 w-full object-cover mt-8"
            />
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Nurturing Tomorrow's <span className="text-primary">Tech Innovators</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Founded with a vision to bridge the gap between theoretical knowledge and practical expertise, Impexus Technologies provides immersive learning experiences that prepare students for the evolving tech landscape.
          </p>
          <p className="text-muted-foreground mb-6">
            Our programs combine expert mentorship, real-world projects, and collaborative learning environments to deliver outcomes that matter.
          </p>
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-primary">4+</p>
              <p className="text-xs text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-primary">95%</p>
              <p className="text-xs text-muted-foreground">Placement Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-primary">100%</p>
              <p className="text-xs text-muted-foreground">Hands-on Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

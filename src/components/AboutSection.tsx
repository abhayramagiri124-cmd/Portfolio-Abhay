import { Film, BookOpen, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ------------------ Highlights ------------------ */
const highlights = [
  { icon: Film, text: "Heart lies in ad filming and production" },
  { icon: BookOpen, text: 'Published author of "AROUND YOU" (2022)' },
];

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-section-muted to-background"
    >
      <div
        className="container-width"
        ref={sectionRef}
      >
        {/* ================= Section Header ================= */}

        <div
          className={`text-center mb-14 scroll-reveal ${
            isVisible ? "visible" : ""
          }`}
        >
          <p className="section-label">
            About Me
          </p>

          <h2 className="section-title">
            The Person Behind the Work
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* ================= LEFT CONTENT ================= */}

          <div className="lg:col-span-3 space-y-7 pt-1">

            <p
              className={`text-lg text-foreground leading-relaxed scroll-reveal ${
                isVisible ? "visible" : ""
              }`}
            >
              I'm a{" "}
              <strong>
                digital media and marketing professional
              </strong>{" "}
              with hands-on experience across content strategy,
              design, and video production.
            </p>

            <p
              className={`text-lg text-foreground leading-relaxed scroll-reveal ${
                isVisible ? "visible" : ""
              }`}
            >
              My approach begins with understanding
              <span className="text-accent font-semibold">
                {" "}
                audience behavior, brand gaps, and platform dynamics
              </span>{" "}
              before choosing formats or tools.
            </p>

            <p
              className={`text-lg text-foreground leading-relaxed scroll-reveal ${
                isVisible ? "visible" : ""
              }`}
            >
              My <strong>obsession with detailing</strong> helps me
              give a different perspective to a world obsessed with
              stories.
            </p>

            {/* Highlights */}

            <div className="space-y-4 pt-3">

              {highlights.map((item, i) => (

                <div
                  key={i}
                  className={`flex items-center gap-4 scroll-reveal ${
                    isVisible ? "visible" : ""
                  }`}
                >

                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">

                    <item.icon className="h-5 w-5 text-accent" />

                  </div>

                  <p className="text-foreground font-medium">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}

          <div className="lg:col-span-2 space-y-8">

            {/* ================= EDUCATION ================= */}

            <div
              className={`card-elevated scroll-reveal ${
                isVisible ? "visible" : ""
              }`}
            >

              <div className="flex items-center gap-4 mb-4">

                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">

                  <GraduationCap className="h-6 w-6 text-accent" />

                </div>

                <div>

                  <h3 className="font-semibold text-foreground">
                    Education
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Formal Education
                  </p>

                </div>

              </div>

              <div className="pl-4 border-l-2 border-accent">

                <h4 className="font-bold text-foreground">
                  Bachelor of Technology
                </h4>

                <p className="text-accent font-medium">
                  Anurag University
                </p>

                <p className="text-muted-foreground">
                  2021 – 2025
                </p>

              </div>

            </div>
                        {/* ================= PROFESSIONAL LEARNING ================= */}

            <div
              className={`card-elevated scroll-reveal ${
                isVisible ? "visible" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-4">

                <div className="w-12 h-12 rounded-xl bg-white border border-red-100 flex items-center justify-center shadow-sm">

                  <img
                    src="public/images/mica-logo.png"
                    alt="MICA"
                    className="w-7 h-7 object-contain"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-foreground">
                    Professional Learning
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Ongoing Certification
                  </p>

                </div>

              </div>

              <div className="pl-4 border-l-2 border-accent">

                <h4 className="font-bold text-foreground leading-snug">
                  Strategic Brand Management & Communication
                </h4>

                <p className="text-accent font-medium mt-1">
                  MICA, Ahmedabad
                </p>

                <p className="text-muted-foreground">
                  Apr 2026 – Present
                </p>

                <span className="inline-flex items-center mt-4 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold">
                  Currently Pursuing
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default AboutSection;
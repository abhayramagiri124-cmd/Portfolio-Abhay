import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const brands = [
  { name: "Trusted Travel Agency", image: "/brands/safari.jpg" },
  { name: "Cloud Kitchen", image: "/brands/mallana.jpg" },
  { name: "F&B Brand", image: "/brands/skyhy.jpg" },
  { name: "Lifestyle", image: "/brands/ANHA.jpg" },
  { name: "Netwoking community", image: "/brands/JP.jpg" },
  { name: "CSR Summit", image: "/brands/CSR.jpg" },
  { name: "Fine-Dining", image: "/brands/Chennapatnam.jpg" },
  { name: "Lifestyle and luxury", image: "/brands/IRA.jpg" },
  { name: "Institution", image: "/brands/AU.jpg" },
  { name: "IUCEE Community", image: "/brands/AUISC.jpg" },
  { name: "Travel Agency", image: "/brands/JagtialSafari.jpg" },
];

const BrandsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 10);

    setCanScrollRight(
      slider.scrollLeft <
        slider.scrollWidth - slider.clientWidth - 10
    );
  };

  useEffect(() => {
    updateButtons();

    window.addEventListener("resize", updateButtons);

    return () =>
      window.removeEventListener("resize", updateButtons);
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="brands"
      className="section-padding overflow-hidden"
    >
      <div
        ref={ref}
        className="container-width"
      >
        <div
          className={`text-center mb-12 scroll-reveal ${
            isVisible ? "visible" : ""
          }`}
        >
          <p className="section-label">
            Brands
          </p>

          <h2 className="section-title">
            Brands I've Worked With
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Social media pages and brands I've managed,
            strategized and created content for. (2023-present)
          </p>
        </div>

        <div className="relative">

          {canScrollLeft && (
            <>
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />

              <button
                onClick={scrollLeft}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg border border-border hover:scale-110 transition"
              >
                <ChevronLeft className="mx-auto" />
              </button>
            </>
          )}

          {canScrollRight && (
            <>
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />

              <button
                onClick={scrollRight}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg border border-border hover:scale-110 transition"
              >
                <ChevronRight className="mx-auto" />
              </button>
            </>
          )}

          <div
            ref={sliderRef}
            onScroll={updateButtons}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          >
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group w-[330px] flex-shrink-0 rounded-3xl overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
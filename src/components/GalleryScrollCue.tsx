import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const GalleryScrollCue = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-28 bg-section-light flex justify-center overflow-hidden"
    >
      <div
        className={`
          group relative flex items-center justify-center
          w-40 h-40 rounded-full
          border border-accent/60
          text-sm font-medium text-accent
          cursor-default
          transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-full border border-accent/40 animate-[spin_18s_linear_infinite]" />

        {/* Glow */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(255,120,60,0.25)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Text */}
        <div className="relative text-center leading-tight">
          <p>View the</p>
          <p className="font-semibold">execution ↓</p>
        </div>
      </div>
    </section>
  );
};

export default GalleryScrollCue;

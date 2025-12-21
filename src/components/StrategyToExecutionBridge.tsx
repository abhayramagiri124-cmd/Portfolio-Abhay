import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const StrategyToExecutionBridge = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-section-light to-section-muted overflow-hidden"
    >
      <div className="container-width text-center">

        {/* Line */}
        <div
          className={`
            mx-auto mb-8 h-[2px] w-0 bg-accent
            transition-all duration-700 ease-out
            ${isVisible ? 'w-32' : ''}
          `}
        />

        {/* Text */}
        <h3
          className={`
            text-2xl md:text-3xl font-serif font-semibold text-foreground
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          Strategy finds its voice in execution.
        </h3>

        {/* Subtle cue */}
        <p
          className={`
            mt-4 text-sm text-muted-foreground
            transition-all duration-700 delay-150
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          Scroll to see how ideas take shape.
        </p>

      </div>
    </section>
  );
};

export default StrategyToExecutionBridge;

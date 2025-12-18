import { useState, useRef, useEffect } from 'react';
import { Video, Image, FileText, Camera } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All', icon: null },
  { id: 'video', label: 'Video Editing', icon: Video },
  { id: 'design', label: 'Graphic Design', icon: Image },
  { id: 'writing', label: 'Writing', icon: FileText },
  { id: 'camera', label: 'On Camera', icon: Camera },
];

// Placeholder media - replace these via Visual Edits with your actual work
const videoItems = [
  { id: 1, src: '/placeholder.svg', title: 'Video Project 1' },
  { id: 2, src: '/placeholder.svg', title: 'Video Project 2' },
  { id: 3, src: '/placeholder.svg', title: 'Video Project 3' },
  { id: 4, src: '/placeholder.svg', title: 'Video Project 4' },
];

const designItems = [
  { id: 1, src: '/placeholder.svg', title: 'Poster 1' },
  { id: 2, src: '/placeholder.svg', title: 'Poster 2' },
  { id: 3, src: '/placeholder.svg', title: 'Poster 3' },
  { id: 4, src: '/placeholder.svg', title: 'Poster 4' },
  { id: 5, src: '/placeholder.svg', title: 'Poster 5' },
  { id: 6, src: '/placeholder.svg', title: 'Poster 6' },
];

const writingItems = [
  { id: 1, src: '/placeholder.svg', title: 'Script 1' },
  { id: 2, src: '/placeholder.svg', title: 'Script 2' },
  { id: 3, src: '/placeholder.svg', title: 'Script 3' },
];

const cameraItems = [
  { id: 1, src: '/placeholder.svg', title: 'On Camera 1' },
  { id: 2, src: '/placeholder.svg', title: 'On Camera 2' },
  { id: 3, src: '/placeholder.svg', title: 'On Camera 3' },
  { id: 4, src: '/placeholder.svg', title: 'On Camera 4' },
];

const VideoCard = ({ src, title }: { src: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isPlaceholder = src === '/placeholder.svg';

  return (
    <div ref={containerRef} className="card-elevated aspect-video overflow-hidden group">
      {isPlaceholder ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border">
          <Video className="h-12 w-12 text-muted-foreground" />
          <p className="text-sm text-muted-foreground text-center">
            {title}
            <br />
            <span className="text-xs">Replace via Visual Edits</span>
          </p>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          poster={src}
        />
      )}
    </div>
  );
};

const ImageCard = ({ src, title }: { src: string; title: string }) => {
  const isPlaceholder = src === '/placeholder.svg';

  return (
    <div className="card-elevated aspect-square overflow-hidden group">
      {isPlaceholder ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border">
          <Image className="h-12 w-12 text-muted-foreground" />
          <p className="text-sm text-muted-foreground text-center">
            {title}
            <br />
            <span className="text-xs">Replace via Visual Edits</span>
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
    </div>
  );
};

const WritingCard = ({ src, title }: { src: string; title: string }) => {
  const isPlaceholder = src === '/placeholder.svg';

  return (
    <div className="card-elevated aspect-[4/3] overflow-hidden group">
      {isPlaceholder ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border">
          <FileText className="h-12 w-12 text-muted-foreground" />
          <p className="text-sm text-muted-foreground text-center">
            {title}
            <br />
            <span className="text-xs">Replace via Visual Edits</span>
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
    </div>
  );
};

const WorkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section id="work" className="section-padding bg-section-muted">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Work Showcase</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creations that balance visuals, strategy, and storytelling.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-accent-foreground shadow-accent-glow'
                  : 'bg-card border border-border text-foreground hover:border-primary'
              }`}
            >
              {cat.icon && <cat.icon className="h-4 w-4" />}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Editing */}
          {(activeCategory === 'all' || activeCategory === 'video') &&
            videoItems.map((item) => (
              <VideoCard key={`video-${item.id}`} src={item.src} title={item.title} />
            ))}

          {/* Graphic Design */}
          {(activeCategory === 'all' || activeCategory === 'design') &&
            designItems.map((item) => (
              <ImageCard key={`design-${item.id}`} src={item.src} title={item.title} />
            ))}

          {/* Writing */}
          {(activeCategory === 'all' || activeCategory === 'writing') &&
            writingItems.map((item) => (
              <WritingCard key={`writing-${item.id}`} src={item.src} title={item.title} />
            ))}

          {/* On Camera */}
          {(activeCategory === 'all' || activeCategory === 'camera') &&
            cameraItems.map((item) => (
              <VideoCard key={`camera-${item.id}`} src={item.src} title={item.title} />
            ))}
        </div>

        {/* Tagline */}
        <p className="text-center text-muted-foreground mt-12 italic">
          "Creative execution backed by strategy, not guesswork."
        </p>
      </div>
    </section>
  );
};

export default WorkShowcase;
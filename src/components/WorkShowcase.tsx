import { useState, useRef, useEffect } from 'react';
import { Video, Image, FileText, Camera, Play, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Lightbox from '@/components/ui/lightbox';

const categories = [
  { id: 'video', label: 'Video Editing', icon: Video },
  { id: 'design', label: 'Graphic Design', icon: Image },
  { id: 'writing', label: 'Writing', icon: FileText },
  { id: 'camera', label: 'On Camera', icon: Camera },
];

// Replace these placeholder items with your actual media files
// For videos: use .mp4 files up to 75MB
// For images: use .jpg, .jpeg, .png files
// For writing: use .pdf or .doc files
const videoItems = [
  { id: 1, src: '/placeholder.svg', thumbnail: '/placeholder.svg', title: 'Video Project 1' },
  { id: 2, src: '/placeholder.svg', thumbnail: '/placeholder.svg', title: 'Video Project 2' },
  { id: 3, src: '/placeholder.svg', thumbnail: '/placeholder.svg', title: 'Video Project 3' },
  { id: 4, src: '/placeholder.svg', thumbnail: '/placeholder.svg', title: 'Video Project 4' },
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
  { id: 1, src: '/placeholder.svg', title: 'Script 1', excerpt: 'A compelling narrative that captures the essence of brand storytelling...' },
  { id: 2, src: '/placeholder.svg', title: 'Script 2', excerpt: 'Creative ad copy designed for maximum engagement and conversion...' },
  { id: 3, src: '/placeholder.svg', title: 'Script 3', excerpt: 'Strategic content piece blending creativity with data-driven insights...' },
];

const cameraItems = [
  { id: 1, src: '/placeholder.svg', thumbnail: '/placeholder.svg', title: 'On Camera 1' },
  { id: 2, src: '/placeholder.svg', thumbnail: '/placeholder.svg', title: 'On Camera 2' },
  { id: 3, src: '/placeholder.svg', thumbnail: '/placeholder.svg', title: 'On Camera 3' },
  { id: 4, src: '/placeholder.svg', thumbnail: '/placeholder.svg', title: 'On Camera 4' },
];

// Helper to detect file type
const getFileType = (src: string): 'video' | 'image' | 'document' | 'placeholder' => {
  if (src === '/placeholder.svg') return 'placeholder';
  const ext = src.split('.').pop()?.toLowerCase() || '';
  if (['mp4', 'webm', 'mov'].includes(ext)) return 'video';
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'image';
  if (['pdf', 'doc', 'docx'].includes(ext)) return 'document';
  return 'image';
};

interface VideoCardProps {
  src: string;
  thumbnail?: string;
  title: string;
  delay: number;
  isVisible: boolean;
  onClick: () => void;
}

const VideoCard = ({ src, thumbnail, title, delay, isVisible, onClick }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileType = getFileType(src);
  const isPlaceholder = fileType === 'placeholder';

  useEffect(() => {
    if (isPlaceholder || fileType !== 'video') return;

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
  }, [isPlaceholder, fileType]);

  return (
    <div
      ref={containerRef}
      className={`card-elevated aspect-video overflow-hidden group cursor-pointer scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
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
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
          />
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-accent-glow">
              <Play className="h-8 w-8 text-accent-foreground ml-1" />
            </div>
          </div>
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white font-medium">{title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface ImageCardProps {
  src: string;
  title: string;
  delay: number;
  isVisible: boolean;
  onClick: () => void;
}

const ImageCard = ({ src, title, delay, isVisible, onClick }: ImageCardProps) => {
  const fileType = getFileType(src);
  const isPlaceholder = fileType === 'placeholder';

  return (
    <div
      className={`card-elevated aspect-square overflow-hidden group cursor-pointer scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
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
        <div className="relative w-full h-full">
          <img
            src={src}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="font-medium text-lg">{title}</p>
              <p className="text-sm opacity-80">Click to view</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface WritingCardProps {
  src: string;
  title: string;
  excerpt: string;
  delay: number;
  isVisible: boolean;
  onClick: () => void;
}

const WritingCard = ({ src, title, excerpt, delay, isVisible, onClick }: WritingCardProps) => {
  const fileType = getFileType(src);
  const isPlaceholder = fileType === 'placeholder';

  const handleClick = () => {
    if (!isPlaceholder && fileType === 'document') {
      // Open document in new tab
      window.open(src, '_blank');
    } else {
      onClick();
    }
  };

  return (
    <div
      className={`card-elevated p-6 group cursor-pointer scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={handleClick}
    >
      {isPlaceholder ? (
        <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border rounded-lg">
          <FileText className="h-12 w-12 text-muted-foreground" />
          <p className="text-sm text-muted-foreground text-center">
            {title}
            <br />
            <span className="text-xs">Replace via Visual Edits</span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col h-full min-h-[200px]">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm flex-grow line-clamp-3">
            {excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
            <span>Read</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      )}
    </div>
  );
};

const WorkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('video');
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState<{ type: 'video' | 'image' | 'document'; src: string; title: string }>({
    type: 'image',
    src: '',
    title: ''
  });

  const openLightbox = (type: 'video' | 'image' | 'document', src: string, title: string) => {
    if (src === '/placeholder.svg') return;
    setLightboxContent({ type, src, title });
    setLightboxOpen(true);
  };

  let itemIndex = 0;

  return (
    <section id="work" className="section-padding bg-section-muted">
      <div className="container-width" ref={sectionRef}>
        {/* Section Header */}
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Work Showcase</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creations that balance visuals, strategy, and storytelling.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 scroll-reveal-fade ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '100ms' }}
        >
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
              <cat.icon className="h-4 w-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Editing */}
          {activeCategory === 'video' &&
            videoItems.map((item) => (
              <VideoCard
                key={`video-${item.id}`}
                src={item.src}
                thumbnail={item.thumbnail}
                title={item.title}
                delay={200 + itemIndex++ * 60}
                isVisible={isVisible}
                onClick={() => openLightbox('video', item.src, item.title)}
              />
            ))}

          {/* Graphic Design */}
          {activeCategory === 'design' &&
            designItems.map((item) => (
              <ImageCard
                key={`design-${item.id}`}
                src={item.src}
                title={item.title}
                delay={200 + itemIndex++ * 60}
                isVisible={isVisible}
                onClick={() => openLightbox('image', item.src, item.title)}
              />
            ))}

          {/* Writing */}
          {activeCategory === 'writing' &&
            writingItems.map((item) => (
              <WritingCard
                key={`writing-${item.id}`}
                src={item.src}
                title={item.title}
                excerpt={item.excerpt}
                delay={200 + itemIndex++ * 60}
                isVisible={isVisible}
                onClick={() => openLightbox('document', item.src, item.title)}
              />
            ))}

          {/* On Camera */}
          {activeCategory === 'camera' &&
            cameraItems.map((item) => (
              <VideoCard
                key={`camera-${item.id}`}
                src={item.src}
                thumbnail={item.thumbnail}
                title={item.title}
                delay={200 + itemIndex++ * 60}
                isVisible={isVisible}
                onClick={() => openLightbox('video', item.src, item.title)}
              />
            ))}
        </div>

        {/* Tagline */}
        <p
          className={`text-center text-muted-foreground mt-12 italic scroll-reveal-fade ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '800ms' }}
        >
          "Creative execution backed by strategy, not guesswork."
        </p>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        type={lightboxContent.type}
        src={lightboxContent.src}
        title={lightboxContent.title}
      />
    </section>
  );
};

export default WorkShowcase;

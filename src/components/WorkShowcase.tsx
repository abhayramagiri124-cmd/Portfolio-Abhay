import { useState, useRef, useEffect } from 'react';
import { Video, Image, FileText, Camera, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Lightbox from '@/components/ui/lightbox';
import IDCardSlider from '@/components/IDCardSlider';

/* ------------------ Categories ------------------ */
const categories = [
  { id: 'video', label: 'Video Editing', icon: Video },
  { id: 'design', label: 'Graphic Design', icon: Image },
  { id: 'writing', label: 'Writings', icon: FileText },
  { id: 'camera', label: 'On Camera', icon: Camera },
];

/* ------------------ Video Editing ------------------ */
const videoItems = [
  { id: 1, src: '/video/horizontal-1.mp4', title: 'Cinematic Conceptual Reel', ratio: 'landscape' },
  { id: 2, src: '/video/horizontal-2.mp4', title: 'Promotional Ad Film', ratio: 'landscape' },
  { id: 3, src: '/video/horizontal-3.mp4', title: 'Event After Movie', ratio: 'landscape' },
  { id: 4, src: '/video/vertical-1.mp4', title: 'F&B Reel', ratio: 'portrait' },
  { id: 5, src: '/video/vertical-2.mp4', title: 'Decoding Indian Ads', ratio: 'portrait' },
  { id: 6, src: '/video/vertical-3.mp4', title: 'Testimonial', ratio: 'portrait' },
];

/* ------------------ Graphic Design ------------------ */
const designItems = [
  { id: 1, src: '/images/poster-1.jpg', title: 'Commertial Creative' },
  { id: 2, src: '/images/poster-2.jpg', title: 'Magazine Cover' },
  { id: 3, src: '/images/poster-3.jpg', title: 'Reel Thumbnail' },
  { id: 4, src: '/images/poster-4.jpg', title: 'Workshop Banner' },
  { id: 5, src: '/images/poster-5.jpg', title: 'Wall Poster' },
  { id: 6, src: '/images/poster-6.jpg', title: 'Hiring Post' },
  { id: 7, src: '/images/poster-7.jpg', title: 'CSR Summit Promotional Poster' },
  { id: 8, src: '/images/poster-8.jpg', title: 'Infographic' },
];

/* ------------------ Writing ------------------ */
const writingItems = [
  {
    id: 1,
    src: '/writings/doc-1.pdf',
    title: 'Feathers that land on our heads!',
    excerpt: 'Poetic take on the content consumption as a Creator',
  },
  {
    id: 2,
    src: '/writings/doc-2.pdf',
    title: 'Reel Script: Why are 2000s Ads hit different',
    excerpt: 'Decoding the television Ad pattern over decades',
  },
  {
    id: 3,
    src: '/writings/doc-3.pdf',
    title: 'Reel Script: Relatability is your superpower',
    excerpt: 'Unveiling the power of relatability in content creation',
  },
];

/* ------------------ On Camera ------------------ */
const onCameraItems = [
  { id: 1, src: '/oc-video/vertical-1.mp4', title: 'On Camera Reel 1' },
  { id: 2, src: '/oc-video/vertical-2.mp4', title: 'On Camera Reel 2' },
  { id: 3, src: '/oc-video/vertical-3.mp4', title: 'On Camera Reel 3' },
];

/* ------------------ Helpers ------------------ */
const getFileType = (src: string) => {
  const ext = src.split('.').pop()?.toLowerCase();
  if (['mp4', 'webm', 'mov'].includes(ext || '')) return 'video';
  if (['jpg', 'jpeg', 'png', 'webp'].includes(ext || '')) return 'image';
  if (['pdf', 'doc', 'docx'].includes(ext || '')) return 'document';
  return 'unknown';
};

/* ------------------ Video Card ------------------ */
const VideoCard = ({ src, title, ratio, delay, isVisible, onClick }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      style={{ transitionDelay: `${delay}ms` }}
      className={`overflow-hidden cursor-pointer scroll-reveal
        ${isVisible ? 'visible' : ''}
        ${ratio === 'portrait'
          ? 'aspect-[9/16] max-h-[420px] sm:max-h-[520px] mx-auto'
          : 'aspect-video'}
        rounded-xl border border-border/20`}
    >
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover pointer-events-none"
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};

/* ------------------ Main Component ------------------ */
const WorkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('video');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const [lightbox, setLightbox] = useState<any>(null);
  let delayIndex = 0;

  return (
    <section id="gallery" className="section-padding bg-section-muted">
      <div ref={ref} className="container-width">

        {/* Header */}
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Work Showcase</h2>
          <p className="text-muted-foreground">
            Creations that balance visuals, strategy, and storytelling.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-4 sm:px-0">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-2 rounded-full text-sm ${
                activeCategory === c.id
                  ? 'bg-accent text-white'
                  : 'border'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* VIDEO EDITING */}
        {activeCategory === 'video' && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoItems.map((item) => (
                <VideoCard
                  key={item.id}
                  {...item}
                  delay={200 + delayIndex++ * 80}
                  isVisible={isVisible}
                  onClick={() => setLightbox(item)}
                />
              ))}
            </div>

            {/* VIEW MORE BUTTON */}
            <div className="mt-12 flex justify-center">
              <a
                href="https://drive.google.com/drive/folders/1D-cztJCrY8qNU9kKNScrtbR9RwMwuZaQ"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-8 py-3 rounded-full
                  bg-accent text-white
                  font-medium
                  hover:scale-105 transition
                "
              >
                View more
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </>
        )}

        {/* GRAPHIC DESIGN */}
        {activeCategory === 'design' && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            <IDCardSlider
              images={[
                '/images/Magazine/m1.jpg',
                '/images/Magazine/m2.jpg',
                '/images/Magazine/m3.jpg',
                '/images/Magazine/m4.jpg',
              ]}
              onClick={() =>
                setLightbox({
                  src: '/images/Magazine/m1.jpg',
                  title: 'Magazine Designs',
                })
              }
            />

            {designItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="mb-6 break-inside-avoid cursor-pointer"
              >
                <img src={item.src} alt={item.title} />
              </div>
            ))}
          </div>
        )}

        {/* WRITING */}
        {activeCategory === 'writing' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writingItems.map((item) => (
              <div
                key={item.id}
                onClick={() => window.open(item.src, '_blank')}
                className="p-6 rounded-2xl bg-card border cursor-pointer"
              >
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.excerpt}
                </p>
                <span className="text-accent inline-flex items-center gap-2 text-sm">
                  Read <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ON CAMERA */}
        {activeCategory === 'camera' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onCameraItems.map((item) => (
              <VideoCard
                key={item.id}
                src={item.src}
                title={item.title}
                ratio="portrait"
                delay={200 + delayIndex++ * 80}
                isVisible={isVisible}
                onClick={() => setLightbox(item)}
              />
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          isOpen
          onClose={() => setLightbox(null)}
          type={getFileType(lightbox.src)}
          src={lightbox.src}
          title={lightbox.title}
        />
      )}
    </section>
  );
};

export default WorkShowcase;

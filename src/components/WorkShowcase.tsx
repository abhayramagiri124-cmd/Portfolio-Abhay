import { useState } from 'react';
import { Video, Image, FileText, Camera } from 'lucide-react';
const categories = [{
  id: 'all',
  label: 'All',
  icon: null
}, {
  id: 'video',
  label: 'Video Editing',
  icon: Video
}, {
  id: 'design',
  label: 'Graphic Design',
  icon: Image
}, {
  id: 'writing',
  label: 'Writing',
  icon: FileText
}, {
  id: 'camera',
  label: 'On Camera',
  icon: Camera
}];
const WorkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  return <section id="work" className="section-padding bg-section-muted">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Work Showcase</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Creations that balances visuals, strategy, and storytelling.</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === cat.id ? 'bg-accent text-accent-foreground shadow-accent-glow' : 'bg-card border border-border text-foreground hover:border-primary'}`}>
              {cat.icon && <cat.icon className="h-4 w-4" />}
              {cat.label}
            </button>)}
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Editing Placeholder */}
          {(activeCategory === 'all' || activeCategory === 'video') && <>
              {[1, 2, 3, 4].map(i => <div key={`video-${i}`} className="card-elevated aspect-video flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border">
                  <Video className="h-12 w-12 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground text-center">
                    Video {i}
                    <br />
                    <span className="text-xs">Upload MP4 (up to 75MB)</span>
                  </p>
                </div>)}
            </>}

          {/* Graphic Design Placeholder */}
          {(activeCategory === 'all' || activeCategory === 'design') && <>
              {[1, 2, 3, 4, 5, 6].map(i => <div key={`design-${i}`} className="card-elevated aspect-square flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border">
                  <Image className="h-12 w-12 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground text-center">
                    Poster {i}
                    <br />
                    <span className="text-xs">Upload Image</span>
                  </p>
                </div>)}
            </>}

          {/* Writing Placeholder */}
          {(activeCategory === 'all' || activeCategory === 'writing') && <>
              {[1, 2, 3].map(i => <div key={`writing-${i}`} className="card-elevated aspect-[4/3] flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border">
                  <FileText className="h-12 w-12 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground text-center">
                    Script {i}
                    <br />
                    <span className="text-xs">Upload Writing Sample</span>
                  </p>
                </div>)}
            </>}

          {/* On Camera Placeholder */}
          {(activeCategory === 'all' || activeCategory === 'camera') && <>
              {[1, 2, 3, 4].map(i => <div key={`camera-${i}`} className="card-elevated aspect-video flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border">
                  <Camera className="h-12 w-12 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground text-center">
                    On Camera {i}
                    <br />
                    <span className="text-xs">Upload Video</span>
                  </p>
                </div>)}
            </>}
        </div>

        {/* Empty State for filtered */}
        {activeCategory !== 'all' && <p className="text-center text-muted-foreground mt-8">
            Upload your {categories.find(c => c.id === activeCategory)?.label.toLowerCase()} work to showcase here.
          </p>}
      </div>
    </section>;
};
export default WorkShowcase;
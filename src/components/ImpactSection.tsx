import {
  Eye,
  Users,
  UserPlus,
  Send,
  Bookmark,
  Target,
} from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    icon: Eye,
    value: "2.4M+",
    label: "Views Generated",
  },
  {
    icon: Users,
    value: "1.1M+",
    label: "Accounts Reached",
  },
  {
    icon: UserPlus,
    value: "3.5K+",
    label: "Followers Gained",
  },
  {
    icon: Send,
    value: "20K+",
    label: "Shares",
  },
  {
    icon: Bookmark,
    value: "10K+",
    label: "Saves",
  },
  {
    icon: Target,
    value: "Lead Gen",
    label: "Campaign Driver",
  },
];

const ImpactSection = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.15,
  });

  return (
    <section
      id="impact"
      className="section-padding bg-[#EEF5F1]"
    >
      <div
        ref={ref}
        className={`container-width transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center mb-12">

          <p className="section-label">
            RESULTS THAT SPEAK
          </p>

          <h2 className="section-title mt-3">
            Content That Connects.
            <br />
            Results That Matter.
          </h2>

          <p className="mt-5 text-lg text-muted-foreground leading-8">
            A glimpse of content that created impact,
            built trust and drove real growth.
          </p>

        </div>

        <div className="grid grid-cols-12 gap-5">

          {/* LEFT STATS */}

          <div className="col-span-12 lg:col-span-3">

            <div className="rounded-3xl border border-[#DCE6E0] bg-white p-7 shadow-sm h-full">

              <p className="text-[10px] uppercase tracking-[0.32em] text-[#E58A2B] font-medium">
                Impact Snapshot
              </p>

              <h3 className="mt-4 font-playfair text-[30px] leading-[1.1] tracking-[-0.02em] text-[#18362C]">
                Numbers backed
                <br />
                by real
                <br />
                campaigns.
              </h3>

              <div className="mt-8 space-y-5">

                {stats.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.label}
                      className="flex items-center gap-4"
                    >

                      <div className="h-10 w-10 rounded-xl bg-[#F3F7F5] flex items-center justify-center">

                        <Icon className="h-4 w-4 text-[#18362C]" />

                      </div>

                      <div>

                        <p className="font-semibold text-xl text-[#18362C]">
                          {item.value}
                        </p>

                        <p className="text-xs text-[#74827B]">
                          {item.label}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

          {/* HERO CARD */}

          <div className="col-span-12 lg:col-span-4">

            <div className="relative overflow-hidden rounded-3xl group h-full">

              <img
                src="/impact/hero-reel.jpg"
                alt="Father and Son"
                className="w-full h-full min-h-[650px] object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <h3 className="font-playfair text-5xl leading-none text-white">
                  Father & Son on thier Andaman Trip
                </h3>
                <p className="mt-2 text-[11px] text-white/80">
                    350K+ Views
                  </p>

                  <p className="text-[11px] text-white/80">
                    1500+ Leads Generated
                  </p>

              </div>

            </div>

          </div>

          {/* RIGHT COLLAGE */}

          <div className="col-span-12 lg:col-span-5">

            <div className="grid grid-cols-3 gap-4">

              {/* Joy */}

              <div className="col-span-1 relative overflow-hidden rounded-3xl group aspect-[4/5]">

                <img
                  src="/impact/joy-travel-post.jpg"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>

                <div className="absolute bottom-4 left-4">

                  <h4 className="text-sm font-semibold leading-tight text-white">
                    Carousal Post
                  </h4>
                  <p className="mt-2 text-[11px] text-white/80">
                    190K+ Views
                  </p>

                  <p className="text-[11px] text-white/80">
                    170+ New Followers
                  </p>

                </div>

              </div>

              {/* First Client */}

              <div className="col-span-1 relative overflow-hidden rounded-3xl group aspect-[4/5]">

                <img
                  src="/impact/client-story.jpg"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>

                <div className="absolute bottom-4 left-4 right-4">

                  <h3 className="font-semibold text-[22px] leading-tight text-white">
                    Meeting
                    <br />
                    The First
                    <br />
                    Client
                  </h3>

                  <p className="mt-2 text-[11px] text-white/80">
                    250K+ Views
                  </p>

                  <p className="text-[11px] text-white/80">
                    +1K Followers
                  </p>

                </div>

              </div>
                            {/* Chef Story */}

              <div className="col-span-1 relative overflow-hidden rounded-3xl group aspect-[4/5]">

                <img
                  src="/impact/chef-post.jpg"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>

                <div className="absolute bottom-4 left-4">

                  <h3 className="font-semibold text-[22px] leading-tight text-white">
                    Chef Story
                    <br />
                  </h3>
                  <p className="mt-2 text-[11px] text-white/80">
                    342K+ Views
                  </p>

                  <p className="text-[11px] text-white/80">
                    200+ comments
                  </p>

                </div>

              </div>

              {/* Manali Family Story */}

              <div className="col-span-1 relative overflow-hidden rounded-3xl group aspect-[4/5]">

                <img
                  src="/impact/family-post.jpg"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>

                <div className="absolute bottom-4 left-4 right-4">

                  <h4 className="text-sm font-semibold leading-tight text-white">
                    Manali Family Story
                  </h4>

                  <p className="mt-1 text-[11px] text-white/80">
                    308K Views
                  </p>

                  <p className="text-[11px] text-white/80">
                    +700 Followers
                  </p>

                </div>

              </div>

              {/* Analytics */}

              <div className="col-span-1 overflow-hidden rounded-3xl aspect-[4/5] bg-[#111827]">

                <img
                  src="/impact/analytics.jpg"
                  className="w-full h-full object-cover"
                />

              </div>
              {/* Couple Story */}

              <div className="col-span-1 overflow-hidden rounded-3xl aspect-[4/5] group">
                <img
                  src="/impact/andaman-couple.jpg"
                  alt="Andaman Couple"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                

              </div>



            </div>
            <div className="mt-5 overflow-hidden rounded-[32px]">
              <img
                src="/impact/stories-results.jpg"
                alt="Content Built for Business"
                className="w-full h-[150px] object-cover"
              />
            </div>

          </div>

        </div>
        
      

        {/* ================= Banner ================= */}
        {/* ================= Banner ================= */}

      <div className="mt-4 overflow-hidden rounded-[28px]">

        <img
          src="/impact/content-built-banner.jpg"
          alt="Content Built for Business"
          className="w-full h-[150px] object-cover"
        />

      </div>

        {/* ================= Banner ================= */}

      

        {/* ================= Quote ================= */}
        {/* ================= Quote ================= */}

        <div className="mt-8 text-center">

          <p className="font-playfair italic text-[22px] text-[#18362C]">

            “Good content is seen.
             Great content is remembered.”

          </p>

        </div>


      </div>

    </section>

  );

};

export default ImpactSection;
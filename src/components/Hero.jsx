export const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 relative min-h-screen flex flex-col justify-between overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/5237590/5237590-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/15 via-white/85 to-[#f3f7fa] dark:from-[#05070f]/45 dark:via-[#05070f]/90 dark:to-[#05070f] transition-colors duration-300"></div>

        {/* Clouds */}
        <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden select-none opacity-40">
          <div className="absolute top-[12%] left-[10%] cloud-slow">
            <div className="w-96 h-36 bg-white dark:bg-slate-800 rounded-full blur-2xl opacity-85"></div>
          </div>

          <div className="absolute top-[45%] left-[55%] cloud-medium">
            <div className="w-[500px] h-48 bg-white dark:bg-slate-800 rounded-full blur-[80px] opacity-75"></div>
          </div>

          <div className="absolute top-[20%] left-[35%] cloud-fast">
            <div className="w-64 h-24 bg-white dark:bg-slate-800 rounded-full blur-xl opacity-90"></div>
          </div>
        </div>

        <div></div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8">
          <div className="flex justify-center items-center">
            <div className="text-center place-items-center pt-6 lg:pt-0">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0284c7] dark:text-skyBrand block mb-2">
                READY FOR TAKE-OFF
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-[4rem] font-black tracking-tight leading-none uppercase text-slate-900 dark:text-white mb-6">
                WHERE DO YOU
                <br />
                WANT TO
                <br />
                <span className="text-orangeBrand">EXPLORE?</span>
              </h1>

              <p className="text-slateText dark:text-slate-300 text-xs md:text-sm max-w-sm mb-4 leading-relaxed font-medium">
                Plan journeys across Asia & the Gulf with Pakistan's premium
                travel advisors. Find accurate scheduling and direct pricing
                options instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
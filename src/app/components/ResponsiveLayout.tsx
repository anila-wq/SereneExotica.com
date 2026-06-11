import svgPaths from "../../imports/ActualSereneExotica5/svg-pxcgrooxc2";
import imgRectangle2 from "../../imports/ActualSereneExotica5/d038a6728d4065783bce0e72fcf34017cb0af216.png";
import imgRectangle12 from "../../imports/ActualSereneExotica5/cacc7d0542330c66e3ec96e4dd0de6bf4fa060f6.png";
import imgRectangle13 from "../../imports/ActualSereneExotica5/7dcb8935d5664223cc5370b25cd96366afaebde7.png";
import imgRectangle14 from "../../imports/ActualSereneExotica5/a5226a073fbf4a7dc7ab709262e39926a2fe2742.png";
import imgRectangle15 from "../../imports/ActualSereneExotica5/7bf553adee2ade1463374c3dae514556211be97d.png";
import imgRectangle1 from "../../imports/ActualSereneExotica5/28a67743a96d444958fabe88001e162c41fe33ed.png";
import imgRectangle3 from "../../imports/ActualSereneExotica5/3e0b880f4e8ded35e272c0a63e84c92404618b15.png";
import imgRectangle11 from "../../imports/ActualSereneExotica5/0736fe4549a73a45310e6554c45ea35022a4f77f.png";
import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  X,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

interface ResponsiveLayoutProps {
  onButtonClick: () => void;
}

export default function ResponsiveLayout({
  onButtonClick,
}: ResponsiveLayoutProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showMapModal, setShowMapModal] = useState(false);
  const [uniqueExpanded, setUniqueExpanded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const faqs = [
    {
      question: "Where is Serene Exotica located?",
      answer:
        "Serene Exotica is located in the heart of Malur Town. It has excellent connectivity to major areas like Sarjapur, Hoskote, Narsapura Industrial Area, Electronic City and Kempegowda International Airport.",
    },
    {
      question:
        "What is the total project area of Serene Exotica?",
      answer:
        "Serene Exotica spans 40+ acres in total. Phase 1 covers 17 acres which includes a 2+ acres sports and amenities zone. The remaining 23 Acres will be launched as phase 2 sooner.",
    },
    {
      question: "What are the key amenities at Serene Exotica?",
      answer:
        "Serene Exotica offers a thoughtfully planned 2+ acre sports and amenities zone, featuring a Cricket pitch, Badminton court, Tennis court, Basketball court, Swimming pool, Open Amphitheatre, Outdoor Gym, Yoga Deck, Jogging track, Sensory Walk Area, Children's Play Area and more — all designed for a balanced and active lifestyle",
    },
    {
      question:
        "Is Serene Exotica approved and ready for registration?",
      answer:
        "Yes, Serene Exotica is RERA and MPA(Malur Planning Authority) approved and is ready for both registration and construction, ensuring a hassle-free ownership experience.",
    },
    {
      question:
        "Are loan options available for plots at Serene Exotica?",
      answer:
        "Yes, loan options are available for both buying plots and for construction. Loans are offered by leading banks and financial institutions. Our team will help you with the entire process and connect you with our approved banking partners.",
    },
    {
      question:
        "Why Buy Villa Plots in Malur at Serene Exotica?",
      answer: `* RERA Approved (PRM/KA/RERA/1265/347/PR/131224/007288), Fully compliant and ready for registration
* 2+ Acres of Sports and Amenities Zone – Cricket pitch, swimming pool, badminton court, basketball court & more
* Underground Cabling & Stormwater Drainage – Premium infrastructure
* Near Major Employment Hubs
* Ready for Registration & Construction – Start building your dream villa immediately`,
    },
  ];

  return (
    <div className="bg-[#fcfaf7] w-full min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(252,250,247,0.95)] border-b border-[#f3f4f6] px-4 md:px-8 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero-section")}
            className="h-10 md:h-14 lg:h-10 w-auto cursor-pointer transition-transform hover:scale-105"
          >
            <img
              alt="Serene Exotica Logo"
              className="h-full w-auto object-contain"
              src={imgRectangle11}
            />
          </button>
          <button
            onClick={onButtonClick}
            className="bg-[#0b2c24] hover:bg-[#0b2c24]/90 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Enquire Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative pt-0 pb-12 md:pb-16"
      >
        {/* Full-width Video — click-to-load facade for fast initial paint */}
        <div className="mb-6 md:mb-8">
          <div className="relative w-full overflow-hidden shadow-2xl">
            <div className="relative pt-[56.25%] bg-black">
              {videoLoaded ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/iVPrZa_ouHU?rel=0&modestbranding=1&autoplay=1"
                  title="Serene Exotica Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setVideoLoaded(true)}
                  className="absolute inset-0 w-full h-full group"
                  aria-label="Play video"
                >
                  <img
                    src={`https://i.ytimg.com/vi/iVPrZa_ouHU/maxresdefault.jpg`}
                    alt="Serene Exotica Video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 md:w-9 md:h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left: Logo + Content */}
            <div className="text-center lg:flex-1">
              <div className="flex justify-center mb-4 md:mb-6">
                <img
                  alt="Serene Exotica"
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain"
                  src={imgRectangle2}
                />
              </div>
              <h1 className="text-4xl font-bold mb-4 leading-[1.15]">
                <span className="block text-black">
                  Invest in Malur's
                </span>
                <span className="block text-black">
                  Fastest Growing
                </span>
                <span className="block text-[#0b2c24]">
                  Plotted Community
                </span>
              </h1>
              <p className="text-[18px] font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Where nature, connectivity & investment
                potential come together.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative lg:flex-1 w-full rounded-3xl md:rounded-[32px] overflow-hidden shadow-2xl">
              <img
                alt="Serene Exotica Project"
                className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
                src={imgRectangle12}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-4 right-4 md:bottom-6 md:left-5 md:right-5 flex gap-3">
                <button
                  onClick={onButtonClick}
                  className="flex-1 bg-[#d4af37] hover:bg-[#c49d2f] text-[#0b2c24] font-bold py-2.5 px-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
                >
                  Book Site Visit
                </button>
                <button
                  onClick={() => setShowMapModal(true)}
                  className="backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 p-2.5 rounded-xl transition-all"
                  title="View on Google Maps"
                >
                  <MapPin className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* The People Who Know Malur Best Section - MOVED TO POSITION 2 */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white rounded-t-[40px] shadow-xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[1.875rem] lg:text-[2rem] font-bold text-center text-black mb-6 md:mb-8 leading-tight">
            The People Who Know Malur Best
            <br className="lg:hidden" />
            <span className="hidden lg:inline"> </span>Are
            Investing Here
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-6 md:mb-8">
            {/* Image - left on desktop */}
            <div className="lg:w-1/2 rounded-3xl overflow-hidden">
              <img
                alt="Malur Investment"
                className="w-full h-60 md:h-72 lg:h-full lg:min-h-[420px] object-cover"
                loading="lazy"
                src={imgRectangle1}
              />
            </div>
            {/* Content - right on desktop, vertically centered */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-5 md:space-y-6 text-[18px] font-normal text-gray-600 text-center lg:text-left leading-relaxed">
              <p>
                Malurians have seen the transformation of this
                region over the years - from a quiet town to one
                of the fastest-growing investment destinations
                near Bengaluru. They understand the value of
                this land, the future of this location, and the
                opportunities that lie ahead.
              </p>
              <p>
                That is why many local families, investors, and
                landowners are choosing Serene Exotica as their
                preferred investment for the future.
              </p>
              <p>
                With growing infrastructure, industrial
                expansion, and increasing residential demand,
                Serene Exotica stands at the center of Malur's
                next phase of growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { icon: "🏠", label: "Local Families" },
              { icon: "💰", label: "Investors" },
              { icon: "📍", label: "Landowners" },
              { icon: "📈", label: "Future Growth" },
              { icon: "🏭", label: "Industrial Expansion" },
              { icon: "🏘️", label: "Residential Demand" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#fcfaf7] border-2 border-[#f3f4f6] rounded-2xl p-5 md:p-6 text-center hover:shadow-xl hover:border-[#d4af37]/30 transition-all transform hover:scale-105"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                  {item.icon}
                </div>
                <div className="text-[16px] md:text-lg font-semibold text-[#1a1a1a]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Serene Exotica Unique Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[1.875rem] lg:text-[2rem] font-bold text-center text-black mb-6 md:mb-8 leading-tight">
            What Makes{" "}
            <span className="text-[#0b2c24]">
              Serene Exotica
            </span>{" "}
            Unique?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="rounded-3xl overflow-hidden">
              <img
                alt="Unique Feature"
                className="w-full h-60 md:h-72 lg:h-[480px] object-cover"
                loading="lazy"
                src={imgRectangle13}
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <p className="text-[18px] font-normal text-gray-600 text-center lg:text-left leading-relaxed">
                Serene Exotica is a premium gated plotted
                development in Malur designed for modern living,
                smart investment, and long-term value. Located
                in one of the fastest-growing real estate
                corridors near Bengaluru, the project offers
                premium villa plots surrounded by peaceful
                greenery, excellent connectivity, and
                future-ready infrastructure.
              </p>

              <div
                className={`overflow-hidden transition-all duration-500 space-y-6 ${
                  uniqueExpanded
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[rgba(11,44,36,0.05)] border-l-4 border-[#d4af37] rounded-3xl p-5 md:p-6">
                  <p className="text-[18px] font-normal text-[#0b2c24] italic leading-relaxed">
                    What makes Serene Exotica stand out is its
                    thoughtfully planned community with wide
                    internal roads, open green spaces, premium
                    amenities, and organized infrastructure
                    designed for comfortable living. Unlike
                    ordinary layouts, Serene Exotica combines
                    the advantages of nature-inspired living
                    with the convenience of easy access to
                    Whitefield, Hoskote, and major industrial
                    growth zones.
                  </p>
                </div>

                <p className="text-[18px] font-normal text-gray-600 text-center lg:text-left leading-relaxed">
                  With rapid infrastructure development,
                  increasing residential demand, and strong
                  future appreciation potential, Serene Exotica
                  is emerging as one of the most preferred
                  residential plot developments in Malur.
                  Whether for future villa construction or
                  investment, it offers the perfect blend of
                  location, lifestyle, and growth opportunity
                  near East Bengaluru.
                </p>
              </div>

              <button
                onClick={() =>
                  setUniqueExpanded(!uniqueExpanded)
                }
                className="flex items-center gap-2 text-[#0b2c24] font-semibold text-[17px] hover:text-[#d4af37] transition-colors self-center lg:self-start"
              >
                {uniqueExpanded ? (
                  <span className="flex items-center gap-2">
                    Read Less <ChevronUp className="w-4 h-4" />
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Read More{" "}
                    <ChevronDown className="w-4 h-4" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16 bg-[#0b2c24] rounded-[40px] mx-4 md:mx-8 lg:mx-12 my-8 md:my-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[1.875rem] lg:text-[2rem] font-bold text-center text-white mb-8 md:mb-12">
            Project Highlights
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: "40+", label: "Acres" },
              { icon: "2+ Acres", label: "Sports Zone" },
              { icon: "Emerging", label: "Growth Hub" },
              { icon: "Ready", label: "For Construction" },
              { icon: "RERA", label: "Approved" },
              { icon: "MPA", label: "Approved" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#d4af37] rounded-full"></div>
                </div>
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#d4af37] mb-1 md:mb-2">
                  {item.icon}
                </div>
                <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Plots Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-[1.875rem] lg:text-[2rem] font-bold text-black mb-3 leading-tight">
              Thoughtfully Planned
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>Villa
              Plots
            </h2>
            <p className="text-base font-normal text-gray-600">
              Designed for Premium Living & Future Value
            </p>
          </div>

          <div className="mb-4 md:mb-6 relative rounded-3xl overflow-hidden">
            <img
              alt="Master Plan"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
              loading="lazy"
              src={imgRectangle14}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="backdrop-blur-md bg-white/90 border border-gray-200 rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-600 rounded-sm"></div>
                <span className="text-xs md:text-sm font-bold text-[#1a1a1a]">
                  Master Plan
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-8 md:mb-12">
            <button
              onClick={onButtonClick}
              className="bg-[#0b2c24] hover:bg-[#0b2c24]/90 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transition-all flex items-center gap-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path d={svgPaths.p3496a2c2} fill="white" />
              </svg>
              Download Masterplan
            </button>
          </div>

          {/* Plot Sizes Heading */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-[#0b2c24]">
              Plot Sizes
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
            {[
              { size: "1453", label: "Sq.ft" },
              { size: "2000", label: "Sq.ft" },
              { size: "3000", label: "Sq.ft" },
              { size: "4500", label: "Sq.ft" },
              { size: "5000", label: "Sq.ft" },
            ].map((plot, index) => (
              <div
                key={index}
                className={`bg-white border-2 border-[#f3f4f6] rounded-3xl p-6 md:p-7 shadow-md hover:shadow-xl hover:border-[#d4af37]/40 transition-all transform hover:scale-105 ${
                  index === 4
                    ? "col-span-2 md:col-span-1 bg-gradient-to-br from-[#fcfaf7] to-white"
                    : ""
                }`}
              >
                <div className="text-center">
                  <div
                    className={`text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b2c24] mb-2 ${
                      index === 4
                        ? "flex items-baseline justify-center gap-1"
                        : ""
                    }`}
                  >
                    {index === 4 ? (
                      <>
                        <span>
                          {plot.size.replace("+", "")}
                        </span>
                      </>
                    ) : (
                      plot.size
                    )}
                  </div>
                  <div className="text-sm md:text-base text-[#4b5563] uppercase tracking-wider font-medium">
                    {plot.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#fcfaf7] border border-[#d4af37]/20 rounded-[32px] p-6 md:p-8 lg:p-12 text-center">
            <div className="mb-6 md:mb-8">
              <img
                alt="Brochure"
                className="h-48 md:h-56 w-auto mx-auto rounded-xl shadow-lg"
                loading="lazy"
                src={imgRectangle15}
              />
            </div>

            <div className="space-y-3 md:space-y-4 max-w-md mx-auto">
              <button
                onClick={onButtonClick}
                className="w-full bg-[#0b2c24] hover:bg-[#0b2c24]/90 text-white font-bold py-3 md:py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path d={svgPaths.p3496a2c2} fill="white" />
                </svg>
                Download Brochure
              </button>

              <button
                onClick={onButtonClick}
                className="w-full border-2 border-[#0b2c24] text-[#0b2c24] hover:bg-[#0b2c24]/5 font-bold py-3 md:py-4 px-6 rounded-2xl transition-all"
              >
                View Brochure Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-[1.875rem] lg:text-[2rem] font-bold text-black mb-3 leading-[1.2]">
              <span className="block lg:hidden">
                Strategically Located
              </span>
              <span className="block lg:hidden">
                at the Heart
              </span>
              <span className="block lg:hidden">of Malur</span>
              <span className="hidden lg:block">
                Strategically Located at the Heart of Malur
              </span>
            </h2>
            <p className="text-base font-normal text-gray-600">
              At the Heart of Malur's Growth
            </p>
          </div>

          {/* Google Maps Iframe */}
          <div className="mb-8 md:mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2805859485275!2d77.94060887472159!3d13.017795687301826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bade3de6c604959%3A0xd2d3c8693e4bc341!2sSerene%20Exotica%20by%20Urbanest%20Realty!5e0!3m2!1sen!2sin!4v1780982224636!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Serene Exotica Location"
              importance="low"
              className="w-full h-64 md:h-80 lg:h-96"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { time: "32 Kms", location: "Whitefield" },
              { time: "42 Kms", location: "Sarjapur" },
              { time: "40 Kms", location: "Aerospace Park" },
              { time: "49 Kms", location: "Airport" },
              { time: "58 Kms", location: "Electronic City" },
              { time: "11 Kms", location: "Narsapura Hub" },
            ].map((place, index) => (
              <div
                key={index}
                className="bg-[#fcfaf7] border border-[#f3f4f6] rounded-2xl p-4 md:p-5 text-center hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-[#d4af37]"
                    fill="none"
                    viewBox="0 0 15 12"
                  >
                    <path
                      d={svgPaths.p393e9700}
                      fill="#D4AF37"
                    />
                  </svg>
                  <span className="text-base font-bold text-[#4b5563] uppercase">
                    {place.time}
                  </span>
                </div>
                <div className="text-base font-normal text-gray-700">
                  {place.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-[#fcfaf7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[1.875rem] lg:text-[2rem] font-bold text-center text-black mb-8 md:mb-12">
            FAQ's
          </h2>

          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#f3f4f6] rounded-3xl shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[18px] font-semibold text-black pr-4">
                    {index + 1}. {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 md:w-5 md:h-5 text-[#d4af37] flex-shrink-0 transition-transform ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ${
                    expandedFAQ === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-5 md:px-6 pb-4 md:pb-5">
                    <p className="text-[18px] font-normal text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest in Serene Exotica Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white rounded-t-[40px] shadow-xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[1.875rem] lg:text-[2rem] font-bold text-center text-black mb-6 md:mb-8 leading-tight">
            Why Invest in
            <br className="lg:hidden" />
            <span className="hidden lg:inline"> </span>Serene
            Exotica
          </h2>

          <div className="space-y-5 md:space-y-6 text-[18px] font-normal text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            <p>
              Serene Exotica is a premium plotted development
              project by Urbanest Realty located in the
              fast-growing region of Malur near East Bangalore.
              Designed for modern living and long-term
              investment, Serene Exotica offers luxury villa
              plots surrounded by nature, open spaces, and
              excellent connectivity to Bangalore's major growth
              corridors.
            </p>
            <p>
              Spread across a well-planned gated community,
              Serene Exotica combines peaceful living with
              future appreciation potential. The project
              features wide internal roads, landscaped gardens,
              underground utilities, street lighting, security,
              and lifestyle amenities that make it ideal for
              both homeowners and investors.
            </p>
            <p>
              Strategically located near Whitefield, Hoskote,
              and key industrial zones, Serene Exotica benefits
              from the rapid infrastructure development
              happening across East Bangalore. The project
              offers easy access to schools, hospitals, IT hubs,
              railway connectivity, and upcoming commercial
              developments, making it one of the most promising
              investment destinations near Bangalore.
            </p>
            <p>
              Whether you are looking to build your dream villa
              or secure a high-growth real estate investment,
              Serene Exotica offers the perfect balance of
              affordability, luxury, and future value. With RERA
              approval, thoughtfully designed layouts, and
              premium amenities, the project stands out as a
              smart choice for buyers seeking villa plots in
              Malur.
              <br />
              <br />
              Choose Serene Exotica and experience a lifestyle
              that blends nature, comfort, connectivity, and
              long-term growth potential.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b2c24] rounded-t-[40px] px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Two-column on desktop: equal halves */}
          <div className="flex flex-col lg:flex-row gap-10 mb-8 md:mb-12">
            {/* Left column — centered content */}
            <div className="flex flex-col items-center text-center lg:w-1/2">
              <div className="mb-5 md:mb-6">
                <img
                  alt="Serene Exotica"
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain"
                  src={imgRectangle3}
                />
              </div>
              <p className="text-[18px] font-normal text-white/60 max-w-sm leading-relaxed">
                Where nature, connectivity & investment potential come together.
              </p>
            </div>

            {/* Right column — left-aligned content */}
            <div className="flex flex-col items-center lg:items-start gap-5 lg:w-1/2">
              <div className="flex items-center gap-3 md:gap-4 text-white/80">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#d4af37] flex-shrink-0" />
                <a
                  href="tel:+917026241010"
                  className="text-[17px] md:text-[18px] hover:text-white transition-colors"
                >
                  +91 7026241010
                </a>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-white/80">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#d4af37] flex-shrink-0" />
                <a
                  href="mailto:sem@urbanestrealty.in"
                  className="text-[17px] md:text-[18px] hover:text-white transition-colors"
                >
                  sem@urbanestrealty.in
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 w-full">
                <div className="text-[#d4af37] text-[14px] font-bold uppercase tracking-wider mb-2">
                  RERA Registration
                </div>
                <div className="text-white/70 text-[14px] mb-4">
                  PRM/KA/RERA/1265/347/PR/131224/007288
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div className="text-[14px] text-left">
                    Near Benaka Cinema, Harohalli Road,<br />
                    Malur, Karnataka - 563130
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="text-white/30 text-sm md:text-base uppercase tracking-wider">
              © 2024 Urbanest Realty
            </div>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://www.facebook.com/share/1GDdMW9MHq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/60 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d={svgPaths.pb142d80} />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/urbanest_realty?igsh=MTM5bWNpdjM4ZmY2dA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/60 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 14 16"
                >
                  <path d={svgPaths.p1ea4a00} />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/urbanest-realty-669997303"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/60 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 14 16"
                >
                  <path d={svgPaths.p52f6272} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Google Maps Modal */}
      {showMapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setShowMapModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
              aria-label="Close Map"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            <div className="w-full h-[500px] md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2805859485275!2d77.94060887472159!3d13.017795687301826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bade3de6c604959%3A0xd2d3c8693e4bc341!2sSerene%20Exotica%20by%20Urbanest%20Realty!5e0!3m2!1sen!2sin!4v1780985991061!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Serene Exotica Location on Google Maps"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
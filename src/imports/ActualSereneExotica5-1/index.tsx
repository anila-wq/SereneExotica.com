import svgPaths from "./svg-2rk7pc45ih";
import imgRectangle2 from "./d038a6728d4065783bce0e72fcf34017cb0af216.png";
import imgRectangle12 from "./cacc7d0542330c66e3ec96e4dd0de6bf4fa060f6.png";
import imgRectangle13 from "./7dcb8935d5664223cc5370b25cd96366afaebde7.png";
import imgRectangle14 from "./a5226a073fbf4a7dc7ab709262e39926a2fe2742.png";
import imgRectangle15 from "./7bf553adee2ade1463374c3dae514556211be97d.png";
import imgStylizedDigitalMapShowingRoadConnectivityWithDistanceMarkersAndLocationsPinsInBangalore from "./16d532fdf34a535c515aab05eda43f8b109cf925.png";
import imgRectangle30 from "./82dfa9dc9364d19910362d76ec81344ea962bc95.png";
import imgRectangle3 from "./3e0b880f4e8ded35e272c0a63e84c92404618b15.png";
import imgRectangle1 from "./28a67743a96d444958fabe88001e162c41fe33ed.png";
import imgRectangle11 from "./0736fe4549a73a45310e6554c45ea35022a4f77f.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[30px] text-center tracking-[0.0293px] whitespace-nowrap">
        <p className="leading-[37.5px] mb-0 tracking-[0.0156px]">Invest in Malur’s</p>
        <p className="leading-[37.5px] mb-0 tracking-[0.0156px]">Fastest Growing</p>
        <p className="leading-[37.5px] text-[#0b2c24] tracking-[0.0156px]">Plotted Community</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.6px] relative shrink-0 w-full" data-name="Heading 1">
      <Heading1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px] mb-0">{`Where nature, connectivity & investment`}</p>
        <p className="leading-[22.75px]">potential come together.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#d4af37] content-stretch drop-shadow-[0px_4px_7.5px_rgba(212,175,55,0.15)] flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[16px] relative rounded-[16px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b2c24] text-[14px] text-center tracking-[0.0137px] whitespace-nowrap">
        <p className="leading-[20px]">Book Site Visit</p>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 18">
        <g id="Img">
          <path d={svgPaths.p1dccec80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img />
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-[56px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex flex-col items-start left-[20px] right-[20px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[432.6px] items-start justify-center overflow-clip pt-[12.6px] relative rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Overlay+Shadow">
      <div className="h-[420px] relative shrink-0 w-[335px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle12} />
      </div>
      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-[12.6px_0_0_0] to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
      <Container1 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.4px] items-center left-[20px] right-[20px] top-[96px]" data-name="Section">
      <div className="h-[68px] relative shrink-0 w-[180px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
      <Heading />
      <Container />
      <OverlayShadow />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] text-center w-full">
        <p className="mb-0">
          <span className="leading-[32px]">{`What Makes `}</span>
          <span className="leading-[32px] text-[#0b2c24]">Serene</span>
        </p>
        <p>
          <span className="leading-[32px] text-[#0b2c24]">Exotica</span>
          <span className="leading-[32px]">{` Unique?`}</span>
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-start justify-center overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="h-[240px] relative shrink-0 w-[335px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle13} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">Serene Exotica is a premium gated plotted development in Malur designed for modern living, smart investment, and long-term value. Located in one of the fastest-growing real estate corridors near Bengaluru, the project offers premium villa plots surrounded by peaceful greenery, excellent connectivity, and future-ready infrastructure.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium_Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#0b2c24] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">What makes Serene Exotica stand out is its thoughtfully planned community with wide internal roads, open green spaces, premium amenities, and organized infrastructure designed for comfortable living. Unlike ordinary layouts, Serene Exotica combines the advantages of nature-inspired living with the convenience of easy access to Whitefield, Hoskote, and major industrial growth zones.</p>
      </div>
    </div>
  );
}

function OverlayVerticalBorder() {
  return (
    <div className="bg-[rgba(11,44,36,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+VerticalBorder">
      <div aria-hidden className="absolute border-[#d4af37] border-l-4 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">With rapid infrastructure development, increasing residential demand, and strong future appreciation potential, Serene Exotica is emerging as one of the most preferred residential plot developments in Malur. Whether for future villa construction or investment, it offers the perfect blend of location, lifestyle, and growth opportunity near East Bengaluru.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <OverlayVerticalBorder />
      <Container8 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1152px] items-start left-0 px-[20px] py-[64px] right-0 top-[1849px]" data-name="Section">
      <Heading2 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[0.0234px] whitespace-nowrap">
        <p className="leading-[32px]">Project Highlights</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Img1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p27f73e00} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img1 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(212,175,55,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4af37] text-[20px] text-center w-full">
        <p className="leading-[28px]">40+</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-center tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Acres</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-0 justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[20px] relative size-full">
          <Overlay />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p3e9d1d00} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img2 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(212,175,55,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4af37] text-[20px] text-center w-full">
        <p className="leading-[28px]">2+ Acres</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-center tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Sports Zone</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-0 justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[20px] relative size-full">
          <Overlay1 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Img3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p1efa7f0} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img3 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(212,175,55,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4af37] text-[20px] text-center w-full">
        <p className="leading-[28px]">Emerging</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-center tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Growth Hub</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-0 justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[20px] relative size-full">
          <Overlay2 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Img4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.pda65180} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img4 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(212,175,55,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4af37] text-[20px] text-center w-full">
        <p className="leading-[28px]">Ready</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-center tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">For Construction</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-0 justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[20px] relative size-full">
          <Overlay3 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Img5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0026 16.0026">
        <g id="Img">
          <path d={svgPaths.p2d2a3c00} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Img5 />
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(212,175,55,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4af37] text-[20px] text-center w-full">
        <p className="leading-[28px]">RERA</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-center tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Approved</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-0 justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[20px] relative size-full">
          <Overlay4 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Img6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16.0023">
        <g id="Img">
          <path d={svgPaths.p25864e00} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img6 />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(212,175,55,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4af37] text-[20px] text-center w-full">
        <p className="leading-[28px]">MPA</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-center tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Approved</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-0 justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[20px] relative size-full">
          <Overlay5 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[443px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorder />
      <OverlayBorder1 />
      <OverlayBorder2 />
      <OverlayBorder3 />
      <OverlayBorder4 />
      <OverlayBorder5 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#0b2c24] content-stretch flex flex-col gap-[32px] items-start left-0 px-[20px] py-[48px] right-0 rounded-[40px] top-[3025.5px]" data-name="Section">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] text-center tracking-[0.0234px] whitespace-nowrap">
        <p className="leading-[30px] mb-0">Thoughtfully Planned Villa</p>
        <p className="leading-[30px]">Plots</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center tracking-[0.0273px] whitespace-nowrap">
        <p className="leading-[20px]">{`Designed for Premium Living & Future Value`}</p>
      </div>
    </div>
  );
}

function Img7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.0026">
        <g id="Img">
          <path d={svgPaths.p23a1c80} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img7 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#0b2c24] bottom-[26px] content-stretch flex items-center justify-center right-[26px] rounded-[9999px] size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[48px]" data-name="Overlay+Shadow" />
      <Container36 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[8px] pt-[28px] px-[8px] relative size-full">
          <div className="h-[288px] relative shrink-0 w-[319px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle14} />
          </div>
          <BackgroundBorder1 />
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Img8() {
  return (
    <div className="h-[10px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75146 10">
        <g id="Img">
          <path d={svgPaths.pbf0180} fill="var(--fill-0, #16A34A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.9)] relative rounded-[9999px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[4px] relative size-full">
          <Img8 />
          <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[10px] tracking-[0.0195px] whitespace-nowrap">
            <p className="leading-[15px]">Master Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[130px] top-[480.5px] w-[98.75px]" data-name="Container">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b2c24] text-[20px] text-center tracking-[0.2734px] whitespace-nowrap">
        <p className="leading-[28px]">1453</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center tracking-[0.6px] uppercase w-[35.661px]">
        <p className="leading-[16px]">Sq.ft</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white col-0 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b2c24] text-[20px] text-center tracking-[0.1172px] whitespace-nowrap">
        <p className="leading-[28px]">1500</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center tracking-[0.6px] uppercase w-[35.661px]">
        <p className="leading-[16px]">Sq.ft</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white col-0 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b2c24] text-[20px] text-center tracking-[0.1172px] whitespace-nowrap">
        <p className="leading-[28px]">2300</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center tracking-[0.6px] uppercase w-[35.661px]">
        <p className="leading-[16px]">Sq.ft</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white col-0 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b2c24] text-[20px] text-center tracking-[0.2344px] whitespace-nowrap">
        <p className="leading-[28px]">3000</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center tracking-[0.6px] uppercase w-[35.661px]">
        <p className="leading-[16px]">Sq.ft</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white col-0 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] font-['Poppins:Bold',sans-serif] h-[28px] leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%-21.72px)] text-[#0b2c24] text-[20px] top-[14px] w-[69.528px]">
        <p className="leading-[28px]">4500+</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+36.94px)] text-[#d4af37] text-[14px] top-[16px] tracking-[0.1094px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Sq.ft</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center tracking-[0.6px] uppercase w-[149.617px]">
        <p className="leading-[16px]">Premium Estate Plots</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-white col-0 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] row-0 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Paragraph />
        <Container47 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[318px] pt-[28px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
    </div>
  );
}

function ImgMockupOfAPremiumRealEstateBrochureCoverElegantDesignWithGreenAndGoldThemesMargin() {
  return (
    <div className="content-stretch flex flex-col h-[195px] items-center max-w-[335px] pb-[24px] relative shrink-0 w-[187px]" data-name="Img - mockup of a premium real estate brochure cover, elegant design with green and gold themes:margin">
      <div className="h-[195px] relative rounded-[10px] shrink-0 w-[189px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle15} />
      </div>
    </div>
  );
}

function Img9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p3496a2c2} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img9 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0b2c24] content-stretch flex gap-[12px] items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <Container48 />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[162.177px]">
        <p className="leading-[24px]">Download Brochure</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Button:margin">
      <Button2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#0b2c24] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b2c24] text-[16px] text-center tracking-[0.0469px] whitespace-nowrap">
        <p className="leading-[24px]">View Brochure Online</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#fcfaf7] relative rounded-[32px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center pb-[24px] pt-[52px] px-[24px] relative size-full">
          <ImgMockupOfAPremiumRealEstateBrochureCoverElegantDesignWithGreenAndGoldThemesMargin />
          <ButtonMargin />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 px-[20px] py-[64px] right-0 top-[3628.5px]" data-name="Section">
      <Heading4 />
      <Container35 />
      <BackgroundBorder />
      <Container37 />
      <Container38 />
      <BackgroundBorder2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] text-center w-full">
        <p className="leading-[32px]">Strategically Located at the Heart of Malur</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[20px]">{`At the Heart of Malur's Growth`}</p>
      </div>
    </div>
  );
}

function StylizedDigitalMapShowingRoadConnectivityWithDistanceMarkersAndLocationsPinsInBangalore() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="stylized digital map showing road connectivity with distance markers and locations pins in Bangalore">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.86%] left-0 max-w-none top-[-15.43%] w-full" src={imgStylizedDigitalMapShowingRoadConnectivityWithDistanceMarkersAndLocationsPinsInBangalore} />
      </div>
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[280px] items-start justify-center overflow-clip pt-[24px] relative rounded-[24px] shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Overlay+Shadow">
      <StylizedDigitalMapShowingRoadConnectivityWithDistanceMarkersAndLocationsPinsInBangalore />
      <div className="absolute inset-[24px_0_0_0]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle30} />
      </div>
    </div>
  );
}

function Img10() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Img">
          <path d={svgPaths.p393e9700} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img10 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">40 Mins</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center w-full">
        <p className="leading-[20px]">Whitefield</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center p-[16px] relative size-full">
          <Container51 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Img11() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Img">
          <path d={svgPaths.p393e9700} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img11 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">40 Mins</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center w-full">
        <p className="leading-[20px]">Sarjapur</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Container55 />
        <Container58 />
      </div>
    </div>
  );
}

function Img12() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Img">
          <path d={svgPaths.p393e9700} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img12 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">40 Mins</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center w-full">
        <p className="leading-[20px]">Aerospace Park</p>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center p-[16px] relative size-full">
          <Container59 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Img13() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Img">
          <path d={svgPaths.p393e9700} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img13 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">40 Mins</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center w-full">
        <p className="leading-[20px]">Airport</p>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Container63 />
        <Container66 />
      </div>
    </div>
  );
}

function Img14() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Img">
          <path d={svgPaths.p393e9700} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img14 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] tracking-[0.5px] uppercase w-[44.559px]">
        <p className="leading-[15px]">55 Mins</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center w-full">
        <p className="leading-[20px]">Electronic City</p>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center p-[16px] relative size-full">
          <Container67 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Img15() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Img">
          <path d={svgPaths.p393e9700} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img15 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[10px] tracking-[0.5px] uppercase w-[43.325px]">
        <p className="leading-[15px]">23 Mins</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center w-full">
        <p className="leading-[20px]">Narsapura Hub</p>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center p-[16px] relative size-full">
          <Container71 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[283px] pt-[32px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
      <BackgroundBorder6 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] items-start left-0 px-[20px] py-[48px] right-0 top-[4936.5px]" data-name="Section">
      <Heading5 />
      <Container49 />
      <OverlayShadow1 />
      <Container50 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] text-center tracking-[0.0234px] whitespace-nowrap">
        <p className="leading-[32px]">FAQ’s</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] tracking-[0.0273px] whitespace-nowrap">
        <ol className="list-decimal" start="1">
          <li className="ms-[21px]">
            <span className="leading-[20px]">Where is Serene Exotica located?</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Img16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img16 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container77 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] w-full">
        <p className="leading-[19.5px]">Serene Exotica is located in the heart of Malur Town. It has excellent connectivity to major areas like Sarjapur, Hoskote, Narsapura Industrial Area, Electronic City and Kempegowda International Airport.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container76 />
        <Container78 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.0273px] whitespace-nowrap">
        <ol className="list-decimal mb-0" start="2">
          <li className="ms-[21px]">
            <span className="leading-[20px]">{`What is the total project area of `}</span>
          </li>
        </ol>
        <p className="leading-[20px] whitespace-pre">Serene Exotica?</p>
      </div>
    </div>
  );
}

function Img17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img17 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container80 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] w-full">
        <p className="leading-[19.5px]">Serene Exotica spans 40+ acres in total. Phase 1 covers 17 acres which includes a 2+ acres sports and amenities zone. The remaining 23 Acres will be launched as phase 2 sooner.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container79 />
        <Container81 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-9.12px] pr-[56.12px] relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.0273px] whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`3. What are the key amenities at `}</p>
        <p className="leading-[20px] whitespace-pre">Serene Exotica?</p>
      </div>
    </div>
  );
}

function Img18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img18 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container83 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] w-full">
        <p className="leading-[19.5px]">Serene Exotica offers a thoughtfully planned 2+ acre sports and amenities zone, featuring a Cricket pitch, Badminton court, Tennis court, Basketball court, Swimming pool, Open Amphitheatre, Outdoor Gym, Yoga Deck, Jogging track, Sensory Walk Area, Children’s Play Area and more — all designed for a balanced and active lifestyle</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container82 />
        <Container84 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-21.98px] pr-[55.98px] relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.0273px] w-[249px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`4. Is Serene Exotica approved and `}</p>
        <p className="leading-[20px]">ready for registration?</p>
      </div>
    </div>
  );
}

function Img19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img19 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container86 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] w-full">
        <p className="leading-[19.5px]">Yes, Serene Exotica is RERA and MPA(Malur Planning Authority) approved and is ready for both registration and construction, ensuring a hassle-free ownership experience.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow8() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container85 />
        <Container87 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-3px] pr-[16px] relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.0137px] whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`5. Are loan options available for plots `}</p>
        <p className="leading-[20px] whitespace-pre">at Serene Exotica?</p>
      </div>
    </div>
  );
}

function Img20() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img20 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container89 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] w-full">
        <p className="leading-[19.5px]">Yes, loan options are available for both buying plots and for construction. Loans are offered by leading banks and financial institutions. Our team will help you with the entire process and connect you with our approved banking partners.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow9() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container88 />
        <Container90 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.041px] whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`6. Why Buy Villa Plots in Malur at `}</p>
        <p className="leading-[20px] whitespace-pre">Serene Exotica?</p>
      </div>
    </div>
  );
}

function Img21() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img21 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Container92 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] w-full">
        <p className="leading-[19.5px] mb-0">* RERA Approved (PRM/KA/RERA/1265/347/PR/131224/007288), Fully compliant and ready for registration</p>
        <p className="leading-[19.5px] mb-0">{`* 2+ Acres of Sports and Amenities Zone – Cricket pitch, swimming pool, badminton court, basketball court & more`}</p>
        <p className="leading-[19.5px] mb-0">{`* Underground Cabling & Stormwater Drainage – Premium infrastructure`}</p>
        <p className="leading-[19.5px] mb-0">* Near Major Employment Hubs</p>
        <p className="leading-[19.5px]">{`* Ready for Registration & Construction – Start building your dream villa immediately`}</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container91 />
        <Container93 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow5 />
      <BackgroundBorderShadow6 />
      <BackgroundBorderShadow7 />
      <BackgroundBorderShadow8 />
      <BackgroundBorderShadow9 />
      <BackgroundBorderShadow10 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-[#fcfaf7] content-stretch flex flex-col gap-[32px] h-[1503px] items-start left-0 px-[20px] py-[64px] right-0 top-[5672px]" data-name="Section">
      <Heading6 />
      <Container75 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.7px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center w-full">
        <p className="leading-[22.75px]">Creating exceptional residential experiences with modern design, premium amenities, and sustainable living for over 25 years.</p>
      </div>
    </div>
  );
}

function Img22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g id="Img">
          <path d={svgPaths.p30aca800} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Img22 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[38.66px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] tracking-[0.0137px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Near Benaka Cinema, Harohalli Road,</p>
        <p className="leading-[20px]">Malur, Karnataka - 563130</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin />
      <Container97 />
    </div>
  );
}

function Img23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0007 16.0007">
        <g id="Img">
          <path d={svgPaths.p11c52d80} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img23 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] tracking-[0.0684px] whitespace-nowrap">
        <p className="leading-[20px]">+91 7026241010</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container99 />
      <Container100 />
    </div>
  );
}

function Img24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.pa71cb00} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img24 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] tracking-[0.0547px] whitespace-nowrap">
        <p className="leading-[20px]">sem@urbanestrealty.in</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Container103 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[16.7px] pt-[8.7px] relative shrink-0 w-full" data-name="Container">
      <Container96 />
      <Container98 />
      <Container101 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4af37] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">RERA Registration</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[16px]">PRM/KA/RERA/1265/347/PR/131224/007288</p>
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <Container104 />
        <Container105 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.3)] tracking-[1px] uppercase w-[144.783px]">
        <p className="leading-[15px]">© 2024 Urbanest Realty</p>
      </div>
    </div>
  );
}

function Img25() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="Img">
          <path d={svgPaths.pb142d80} fill="var(--fill-0, white)" fillOpacity="0.4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Img25 />
    </div>
  );
}

function Img26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0078 16">
        <g id="Img">
          <path d={svgPaths.p1ea4a00} fill="var(--fill-0, white)" fillOpacity="0.4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Img26 />
    </div>
  );
}

function Img27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Img">
          <path d={svgPaths.p52f6272} fill="var(--fill-0, white)" fillOpacity="0.4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Img27 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex gap-[16px] h-[16px] items-start relative shrink-0" data-name="Container">
      <Container109 />
      <Container110 />
      <Container111 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16.7px] relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <Container108 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#0b2c24] content-stretch flex flex-col gap-[23.3px] h-[641px] items-center left-0 pb-[128px] pt-[64px] px-[24px] right-0 rounded-tl-[40px] rounded-tr-[40px] top-[8222px]" data-name="Footer">
      <div className="h-[68px] relative shrink-0 w-[180px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
      <Container94 />
      <div className="bg-[rgba(255,255,255,0.1)] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      <Container95 />
      <OverlayBorder6 />
      <Container106 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] text-center w-full">
        <p className="leading-[30px] mb-0">The People Who Know</p>
        <p className="leading-[30px] mb-0">Malur Best Are Investing</p>
        <p className="leading-[30px]">Here</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-start justify-center overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="h-[240px] relative shrink-0 w-[335px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">Malurians have seen the transformation of this region over the years - from a quiet town to one of the fastest-growing investment destinations near Bengaluru. They understand the value of this land, the future of this location, and the opportunities that lie ahead.</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">That is why many local families, investors, and landowners are choosing Serene Exotica as their preferred investment for the future.</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.7px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">With growing infrastructure, industrial expansion, and increasing residential demand, Serene Exotica stands at the center of Malur’s next phase of growth.</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col gap-[15.3px] items-start relative shrink-0 w-full" data-name="Container">
      <Container114 />
      <Container115 />
      <Container116 />
    </div>
  );
}

function Img28() {
  return (
    <div className="h-[18px] relative shrink-0 w-[22.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 18">
        <g id="Img">
          <path d={svgPaths.p1fbca480} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Img28 />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-center w-full">
        <p className="leading-[16px]">Local Families</p>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Container118 />
        <Container119 />
      </div>
    </div>
  );
}

function Img29() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Img">
          <path d={svgPaths.p3e307e00} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Img29 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-center w-full">
        <p className="leading-[16px]">Investors</p>
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Container120 />
        <Container121 />
      </div>
    </div>
  );
}

function Img30() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.25px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.25 18">
        <g id="Img">
          <path d={svgPaths.p15bcf500} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Img30 />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-center w-full">
        <p className="leading-[16px]">Landowners</p>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Container122 />
        <Container123 />
      </div>
    </div>
  );
}

function Img31() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.25px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2526 18">
        <g id="Img">
          <path d={svgPaths.p18f5b080} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Img31 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-center w-full">
        <p className="leading-[16px]">Future Growth</p>
      </div>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[16px] relative size-full">
          <Container124 />
          <Container125 />
        </div>
      </div>
    </div>
  );
}

function Img32() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.25px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.25 18">
        <g id="Img">
          <path d={svgPaths.p2b2816a0} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Img32 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-center w-full">
        <p className="leading-[16px]">Industrial Expansion</p>
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Container126 />
        <Container127 />
      </div>
    </div>
  );
}

function Img33() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.25px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.25 18.0035">
        <g id="Img">
          <path d={svgPaths.p26246ff0} fill="var(--fill-0, #D4AF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Img33 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-center w-full">
        <p className="leading-[16px]">Residential Demand</p>
      </div>
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-[#fcfaf7] col-0 justify-self-stretch relative rounded-[16px] row-0 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Container128 />
        <Container129 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[260.6px] pt-[8.6px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder9 />
      <BackgroundBorder10 />
      <BackgroundBorder11 />
      <BackgroundBorder12 />
      <BackgroundBorder13 />
      <BackgroundBorder14 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[23.4px] items-start left-0 px-[20px] py-[48px] right-0 rounded-tl-[40px] rounded-tr-[40px] top-[795px]" data-name="Section">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.4px_0] shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.06)]" data-name="Section:shadow" />
      <Heading13 />
      <Container112 />
      <Container113 />
      <Container117 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0b2c24] content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.08)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.0957px] whitespace-nowrap">
        <p className="leading-[20px]">Enquire Now</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(252,250,247,0.9)] content-stretch flex items-center justify-between left-0 px-[20px] py-[16px] top-0 w-[375px]" data-name="Header">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-[28px] relative shrink-0 w-[160px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle11} />
      </div>
      <Button4 />
    </div>
  );
}

function Container130() {
  return <div className="absolute bottom-0 h-[87px] left-0 right-0" data-name="Container" />;
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] text-center w-full">
        <p className="leading-[30px]">Why Invest in Serene Exotica</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">Serene Exotica is a premium plotted development project by Urbanest Realty located in the fast-growing region of Malur near East Bangalore. Designed for modern living and long-term investment, Serene Exotica offers luxury villa plots surrounded by nature, open spaces, and excellent connectivity to Bangalore’s major growth corridors.</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">Spread across a well-planned gated community, Serene Exotica combines peaceful living with future appreciation potential. The project features wide internal roads, landscaped gardens, underground utilities, street lighting, security, and lifestyle amenities that make it ideal for both homeowners and investors.</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.7px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">Strategically located near Whitefield, Hoskote, and key industrial zones, Serene Exotica benefits from the rapid infrastructure development happening across East Bangalore. The project offers easy access to schools, hospitals, IT hubs, railway connectivity, and upcoming commercial developments, making it one of the most promising investment destinations near Bangalore.</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.7px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">
          Whether you are looking to build your dream villa or secure a high-growth real estate investment, Serene Exotica offers the perfect balance of affordability, luxury, and future value. With RERA approval, thoughtfully designed layouts, and premium amenities, the project stands out as a smart choice for buyers seeking villa plots in Malur.
          <br aria-hidden />
          Choose Serene Exotica and experience a lifestyle that blends nature, comfort, connectivity, and long-term growth potential.
        </p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col gap-[15.3px] items-start relative shrink-0 w-full" data-name="Container">
      <Container132 />
      <Container133 />
      <Container134 />
      <Container135 />
    </div>
  );
}

function Seo() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[23.4px] items-start left-1/2 px-[20px] py-[48px] rounded-tl-[40px] rounded-tr-[40px] top-[7175px] w-[375px]" data-name="SEO">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.06)]" data-name="Section:shadow" />
      <Heading14 />
      <Container131 />
    </div>
  );
}

export default function ActualSereneExotica() {
  return (
    <div className="bg-[#fcfaf7] relative size-full" data-name="Actual-Serene Exotica_5">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <Section6 />
      <Header />
      <Container130 />
      <Seo />
    </div>
  );
}
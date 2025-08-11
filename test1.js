if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const circle = document.getElementById('circle');
const bgVideo = document.getElementById('bgVideo');
const bullseyeMask = document.getElementById('bullseyeMask');
const body = document.body;
const navbar = document.getElementById('navbar');
const centerImage = document.querySelector('.center-image');
const textTop = document.querySelector('.text:first-child');
const textBottom = document.querySelector('.text:last-child');
const valveLetter = document.querySelector('.valve-letter');
const pageInput = document.querySelector('.pageInput');
const navSelect = document.getElementById('navSelect');
const set = new Set([2, 3, 4, 5, 11, 17, 23, 29, 30, 36, 37]);
const pageIndicator = document.querySelector('.page-indicator');
const socialIcons = document.querySelector('.social-icons');
let userChangedInput = false;


const slides = [
  { id: 'secondSlidenew', flag: 'hasShownSecondSlidenew', done: 'secondSlidenewAnimationCompleted', line: '#secondSlidenew .vertical-line' },
  { id: 'secondSlide', flag: 'hasShownSecondSlide', done: 'secondSlideAnimationCompleted', line: '#secondSlide .vertical-line' },
  { id: 'fourthSlide', flag: 'hasShownFourthSlide', done: 'fourthSlideAnimationCompleted', line: '#fourthSlide .fourth-vertical-line' },
  { id: 'dtdHome', flag: 'hasShownDtdHome', done: 'dtdHomeAnimationCompleted' },
  { id: 'fifthnewSlide', flag: 'hasShownFifthnewSlide', done: 'fifthnewSlideAnimationCompleted', line: '#fifthnewSlide .vertical-line' },
  { id: 'detailsSlide', flag: 'hasShownDetailsSlide', done: 'detailsSlideAnimationCompleted', line: '#detailsSlide .details-vertical-line' },
  { id: 'new-detailsSlide', flag: 'hasShownNew-detailsSlide', done: 'new-detailsSlideAnimationCompleted', line: '#new-detailsSlide .details-vertical-line' },
  { id: 'twelevenewSlide', flag: 'hasShownTweleveNewSlide', done: 'twelevenewSlideAnimationCompleted' },
  { id: 'thirteenSlide', flag: 'hasShownThirteenSlide', done: 'thirteenSlideAnimationCompleted', line: '#thirteenSlide .thirteen-vertical-line' },
  { id: 'bvdHome', flag: 'hasShownBvdHome', done: 'bvdHomeAnimationCompleted' },
  { id: 'nineSlide', flag: 'hasShownNineSlide', done: 'nineSlideAnimationCompleted', line: '#nineSlide .nine-vertical-line' },
  { id: 'detailsSlidenew9', flag: 'hasShownDetailsSlidenew9', done: 'detailsSlidenew9AnimationCompleted', line: '#detailsSlidenew9 .details-vertical-line' },
  { id: 'detailsSlidenew1', flag: 'hasShownDetailsSlidenew1', done: 'detailsSlidenew1AnimationCompleted' },
  { id: 'BDVModel', flag: 'hasShownDetailsBDVModel', done: 'BDVModelAnimationCompleted' },
  { id: 'fifteenSlide', flag: 'hasShownFifteenSlide', done: 'fifteenSlideAnimationCompleted', line: '#fifteenSlide .fifteen-vertical-line' },
  { id: 'sdtdHome', flag: 'hasShownSdtdHome', done: 'sdtdHomeAnimationCompleted' },
  { id: 'sixSlide', flag: 'hasShownSixSlide', done: 'sixSlideAnimationCompleted', line: '#sixSlide .six-vertical-line' },
  { id: 'detailsSlidenew', flag: 'hasShownDetailsSlidenew', done: 'detailsSlidenewAnimationCompleted', line: '#detailsSlidenew .details-vertical-line' },
  { id: 'detailsSlidenew2', flag: 'hasShownDetailsSlidenew2', done: 'detailsSlidenew2AnimationCompleted' },
  { id: 'SDTDModel', flag: 'hasShownDetailsSDTDModel', done: 'SDTDModelAnimationCompleted' },
  { id: 'fourteenSlide', flag: 'hasShownFourteenSlide', done: 'fourteenSlideAnimationCompleted', line: '#fourteenSlide .fourteen-vertical-line' },
  { id: 'sdtdcHome', flag: 'hasShownSdtdcHome', done: 'sdtdcHomeAnimationCompleted' },
  { id: 'new-sixSlide', flag: 'hasShownNew-sixSlide', done: 'new-sixSlideAnimationCompleted', line: '#new-sixSlide .six-vertical-line' },
  { id: 'detailsSlidenew3', flag: 'hasShownDetailsSlidenew3', done: 'detailsSlidenew3AnimationCompleted', line: '#detailsSlidenew3 .details-vertical-line' },
  { id: 'detailsSlidenew4', flag: 'hasShownDetailsSlidenew4', done: 'detailsSlidenew4AnimationCompleted' },
  { id: 'SDTDCModel', flag: 'hasShownDetailsSDTDCModel', done: 'SDTDCModelAnimationCompleted' },
  { id: 'fourteenSlide-new', flag: 'hasShownFourteenSlide-new', done: 'fourteenSlide-newAnimationCompleted', line: '#fourteenSlide-new .fourteen-vertical-line' },
  { id: 'ytypeHome', flag: 'hasShownYtypeHome', done: 'ytypeHomeAnimationCompleted' },
  // { id: 'eightSlide', flag: 'hasShownEightSlide', done: 'eightSlideAnimationCompleted', line: '#eightSlide .eight-vertical-line' },
  // { id: 'detailsSlidenew5', flag: 'hasShownDetailsSlidenew5', done: 'detailsSlidenew5AnimationCompleted', line: '#detailsSlidenew5 .details-vertical-line' },
  // { id: 'detailsSlidenew6', flag: 'hasShownDetailsSlidenew6', done: 'detailsSlidenew6AnimationCompleted' },
  // { id: 'YTYPEModel', flag: 'hasShownDetailsYTYPEModel', done: 'YTYPEModelAnimationCompleted' },
  // { id: 'fourteenSlide-new1', flag: 'hasShownFourteenSlide-new1', done: 'fourteenSlide-new1AnimationCompleted', line: '#fourteenSlide-new1 .fourteen-vertical-line' },
  { id: 'scaleHome', flag: 'hasShownScaleHome', done: 'scaleHomeAnimationCompleted' },
  { id: 'sixteenthSlide', flag: 'hasShownSixteenthSlide', done: 'sixteenthSlideAnimationCompleted', line: '#sixteenthSlide .sixteenth-vertical-line' },
  { id: 'seventeenthSlide', flag: 'hasShownSeventeenthSlide', done: 'seventeenthSlideAnimationCompleted', line: '#seventeenthSlide .seventeenth-vertical-line' },
  { id: 'seventeenthSlide-new', flag: 'hasShownSeventeenthSlide-new', done: 'seventeenthSlide-newAnimationCompleted' },
  { id: 'SCALEModel', flag: 'hasShownDetailsSCALEModel', done: 'SCALEModelAnimationCompleted' },
  { id: 'fourteenSlide-new2', flag: 'hasShownFourteenSlide-new2', done: 'fourteenSlide-new2AnimationCompleted', line: '#fourteenSlide-new2 .fourteen-vertical-line' },
  { id: 'lsvHome', flag: 'hasShownLsvHome', done: 'lsvHomeAnimationCompleted' },
  // { id: 'new-nineteenthSlide', flag: 'hasShownNew-nineteenthSlide', done: 'new-nineteenthSlideAnimationCompleted', line: '#new-nineteenthSlide .new-nineteenth-vertical-line' },
  // { id: 'new-twentiethSlide', flag: 'hasShownNew-twentiethSlide', done: 'new-twentiethSlideAnimationCompleted', line: '#new-twentiethSlide .new-twentieth-vertical-line' },
  // { id: 'new1-twentiethSlide', flag: 'hasShownNew1-twentiethSlide', done: 'new1-twentiethSlideAnimationCompleted' },
  // { id: 'LSVModel', flag: 'hasShownDetailsLSVModel', done: 'LSVModelAnimationCompleted' },
  // { id: 'fourteenSlide-new3', flag: 'hasShownFourteenSlide-new3', done: 'fourteenSlide-new3AnimationCompleted', line: '#fourteenSlide-new3 .fourteen-vertical-line' },
  { id: 'bypassHome', flag: 'hasShownBypassHome', done: 'bypassHomeAnimationCompleted' },
  { id: 'nineteenthSlide', flag: 'hasShownNineteenthSlide', done: 'nineteenthSlideAnimationCompleted', line: '#nineteenthSlide .nineteenth-vertical-line' },
  { id: 'twentiethSlide', flag: 'hasShownTwentiethSlide', done: 'twentiethSlideAnimationCompleted', line: '#twentiethSlide .twentieth-vertical-line' },
  { id: 'twentiethSlide-new', flag: 'hasShownTwentiethSlide-new', done: 'twentiethSlide-newAnimationCompleted' },
  { id: 'BYPASSModel', flag: 'hasShownDetailsBYPASSModel', done: 'BYPASSModelAnimationCompleted' },
  { id: 'fourteenSlide-new4', flag: 'hasShownFourteenSlide-new4', done: 'fourteenSlide-new4AnimationCompleted', line: '#fourteenSlide-new4 .fourteen-vertical-line' },
  { id: 'thankyou', flag: 'hasShownThankyou', done: 'thankyouAnimationCompleted' },

].map(s => ({
  ...s,
  slide: document.getElementById(s.id),
  lineEl: document.querySelector(s.line)
}));

// Animation flags
const animationFlags = {
  hasAnimatedV: false,
  textAnimationCompleted: false
};

slides.forEach(s => {
  animationFlags[s.flag] = false;
  animationFlags[s.done] = false;
});

// Scroll suppression flag
let isProgrammaticScroll = false;

let lastScrollY = window.scrollY;
let isScrollingDown = false;

textBottom?.addEventListener('transitionend', () => {
  animationFlags.textAnimationCompleted = true;

  setTimeout(() => {
    navSelect?.classList.add('visible');
    pageInput?.classList.add('visible');
    socialIcons?.classList.add('visible');
  }, 500);


  // if (isScrollingDown && !userChangedInput) {
  //   setTimeout(() => {
  //     scrollToPage(2);
  //   }, 600);
  // }

});

slides.forEach(s => {
  s.slide?.addEventListener('transitionend', () => {
    animationFlags[s.done] = true;
    if (s.slide?.classList.contains('slide-out')) {
      s.slide.classList.remove('visible', 'slide-out');
      updateCurrentPage()
    }
  });
});


let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      isScrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      if (!isProgrammaticScroll) {
        handleScroll(currentScrollY);
      }

      ticking = false;
    });

    ticking = true;
  }
});



function handleScroll(scrollY) {

  const baseScroll = 280;

  if (scrollY > 150 && !animationFlags.hasAnimatedV) {
    animationFlags.hasAnimatedV = true;
    circle?.classList.add('zoom-out');
    bullseyeMask?.classList.add('zoom-out');
    if (bgVideo) bgVideo.style.opacity = 0;
    body.classList.add('gray-bg');

    navbar.style.display = 'flex';
    navbar.classList.add('visible');

    setTimeout(() => {
      if (!isScrollingDown) return
      centerImage?.classList.add('fade-out');
      textTop?.classList.add('scroll-to-top');
      textBottom?.classList.add('scroll-to-top');
      // valveLetter?.classList.add('draw-line');
      textBottom?.classList.add('center-valve-text');

    }, 2000);
  }

  slides.forEach((s, index) => {
    const offset = baseScroll + index * 300;
    const prevDone = index === 0 ? 'textAnimationCompleted' : slides[index - 1].done;

    if (
      isScrollingDown &&
      index === slides.length - 1 &&
      scrollY >= offset - 5 &&
      !animationFlags[s.flag]
    ) {
      scrollY = offset + 1;
    }

    if (scrollY > offset && !animationFlags[s.flag] && animationFlags[prevDone] && isScrollingDown) {
      animationFlags[s.flag] = true;
      s.slide?.classList.add('visible');
      s.lineEl?.classList.add('active');

      if (s.id === 'secondSlidenew') {
        pageIndicator?.classList.add('visible');
      }
    } else if (scrollY <= offset && animationFlags[s.flag]) {
      animationFlags[s.flag] = false;
      animationFlags[s.done] = false;

      s.slide?.classList.add('fade-out');
      s.lineEl?.classList.remove('active');

      s.slide?.addEventListener('transitionend', function onTransitionEnd() {
        s.slide?.classList.remove('fade-out', 'visible');
        s.slide?.removeEventListener('transitionend', onTransitionEnd);
      });

      if (s.id === 'secondSlidenew') {
        pageIndicator?.classList.remove('visible');
      }
    }

  });


  if (scrollY <= 100 && animationFlags.hasAnimatedV) {
    animationFlags.hasAnimatedV = false;
    circle?.classList.remove('zoom-out');
    bullseyeMask?.classList.remove('zoom-out');
    if (bgVideo) bgVideo.style.opacity = 1;
    body.classList.remove('gray-bg');
    navbar.classList.remove('visible');

    setTimeout(() => {
      navbar.style.display = 'none';
      pageIndicator?.classList.remove('visible');
      navSelect?.classList.remove('visible');
      pageInput?.classList.remove('visible');
      socialIcons?.classList.remove('visible');
    }, 500);

    centerImage?.classList.remove('fade-out');
    textTop?.classList.remove('scroll-to-top');
    textBottom?.classList.remove('scroll-to-top');
    // valveLetter?.classList.remove('draw-line');
    textBottom?.classList.remove('center-valve-text');

    animationFlags.textAnimationCompleted = true;

    slides.forEach(s => {
      animationFlags[s.flag] = false;
      animationFlags[s.done] = false;
      s.slide?.classList.remove('visible', 'slide-out');
      s.lineEl?.classList.remove('active');
    });
  }
  updateCurrentPage();
}

function updateCurrentPage() {
  let visibleIndex = -1;

  slides.forEach((s, index) => {
    if (s.slide?.classList.contains('visible')) {
      const rect = s.slide.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        visibleIndex = index;
      }
    }
  });

  playAudioForPage(visibleIndex + 2)
  animation(visibleIndex + 2)
  const pageNumber = visibleIndex >= 0 ? visibleIndex + 2 : 1;
  if (!userChangedInput && parseInt(pageInput?.value) !== pageNumber && pageNumber > 1) {
    pageInput.value = pageNumber;
    console.log("User changed input value: ", userChangedInput);
    console.log("This section is triggered");
  }

  if (set.has(pageNumber)) {
    for (let i = 0; i < navSelect.options.length; i++) {
      const option = navSelect.options[i];
      const dataId = parseInt(option.getAttribute('data-id'), 10);

      if (dataId === pageNumber) {
        navSelect.selectedIndex = i;
        break;
      }
    }
  } else {
    const sortedSet = Array.from(set).sort((a, b) => a - b);
    let targetPage = -1;
    let left = 0, right = sortedSet.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedSet[mid] < pageNumber) {
        targetPage = sortedSet[mid];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (targetPage !== -1) {
      selectOptionByDataId(targetPage);
    } else {
      console.warn("No valid option found");
    }
  }

  const isThankYouPage = slides[pageNumber - 2]?.id === 'thankyou';

  if (isThankYouPage) {
    pageIndicator?.classList.remove('visible');
    navSelect?.classList.remove('visible');
    pageInput?.classList.remove('visible');
    navbar?.classList.remove('visible');
    navbar.style.display = 'none';
    socialIcons?.classList.remove('visible');
  } else if (pageNumber > 2) {
    pageIndicator?.classList.add('visible');
    navSelect?.classList.add('visible');
    pageInput?.classList.add('visible');
    navbar?.classList.add('visible');
    navbar.style.display = 'flex';
    socialIcons?.classList.add('visible');
  }


}


function showOnlySlide(indexToShow) {
  slides.forEach((s, index) => {
    const isTarget = index === indexToShow - 1;
    if (isTarget) {
      s.slide?.classList.add('visible');
      s.lineEl?.classList.add('active');
      animationFlags[s.flag] = true;
      animationFlags[s.done] = true;
    } else {
      s.slide?.classList.remove('visible', 'slide-out');
      s.lineEl?.classList.remove('active');
      animationFlags[s.flag] = false;
      animationFlags[s.done] = false;
    }
  });

  if (indexToShow >= 1) {
    pageIndicator?.classList.add('visible');
  } else {
    pageIndicator?.classList.remove('visible');
  }
}

function selectOptionByDataId(targetPage) {
  for (let i = 0; i < navSelect.options.length; i++) {
    const option = navSelect.options[i];
    const dataId = parseInt(option.getAttribute('data-id'), 10);
    if (dataId === targetPage) {
      navSelect.selectedIndex = i;
      break;
    }
  }
}

function scrollToPage(page) {
  if (isNaN(page) || page < 1 || page > slides.length + 1 || userChangedInput) return;
  console.log("Value of user change input here: ", userChangedInput);
  console.log("This scroll to page is getting triggered");

  playAudioForPage(page);
  animation(page)
  if (page >= 1) {
    pageIndicator?.classList.add('visible');
  } else {
    pageIndicator?.classList.remove('visible');
  }
  isProgrammaticScroll = true;

  const offset = page === 1 ? 0 : 280 + (page - 2) * 300;

  slides.forEach((s, index) => {
    if (index < page - 1) {
      s.slide?.classList.add('visible');
      s.lineEl?.classList.add('active');
      animationFlags[s.flag] = true;
      animationFlags[s.done] = true;
    } else {
      s.slide?.classList.remove('visible', 'slide-out');
      s.lineEl?.classList.remove('active');
      animationFlags[s.flag] = false;
      animationFlags[s.done] = false;
    }
  });

  window.scrollTo({ top: offset + 10, behavior: 'smooth' });

  if (set.has(page)) {
    selectOptionByDataId(page);
  } else {
    const sortedSet = Array.from(set).sort((a, b) => a - b);
    let targetPage = -1;
    let left = 0, right = sortedSet.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedSet[mid] < page) {
        targetPage = sortedSet[mid];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (targetPage !== -1) {
      selectOptionByDataId(targetPage);
    } else {
      console.warn("No valid option found");
    }
  }

  setTimeout(() => {
    isProgrammaticScroll = false;
    updateCurrentPage();
  }, 800);
}

const pageMapping = {
  '.second-slide-new': 2,
  '.second-slide': 3,
  '.fourth-slide': 4,
  '.dtd-home': 5,
  '.bvd-home': 11,
  '.sdtd-home': 17,
  '.sdtd-c-home': 23,
  '.ytypehome': 29,
  '.scalehome': 30,
  '.lsvhome': 36,
  '.bypasshome': 37
};


navSelect?.addEventListener('change', () => {
  const pageNumber = pageMapping[navSelect.value];
  if (pageNumber) {
    pageInput.value = pageNumber;
    scrollToPage(pageNumber);
  }
});

pageInput?.addEventListener('change', e => {
  userChangedInput = false;
  scrollToPage(parseInt(e.target.value));
});


// const videoContainers = document.querySelectorAll(".video-container");

// videoContainers.forEach(container => {
//   const video = container.querySelector(".main-video");
//   const magnifier = container.querySelector(".magnifier");
//   const zoomedVideo = container.querySelector(".zoomed-video");

//   video.addEventListener("play", () => zoomedVideo.play());
//   video.addEventListener("pause", () => zoomedVideo.pause());
//   video.addEventListener("timeupdate", () => {
//     zoomedVideo.currentTime = video.currentTime;
//   });

//   container.addEventListener("mousemove", (e) => {
//     const { left, top, width, height } = container.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;

//     magnifier.style.left = `${x}px`;
//     magnifier.style.top = `${y}px`;
//     magnifier.style.display = "block";

//     const scale = 2;
//     zoomedVideo.style.width = `${width * scale}px`;
//     zoomedVideo.style.height = `${height * scale}px`;
//     zoomedVideo.style.left = `-${x * scale - magnifier.offsetWidth / 2}px`;
//     zoomedVideo.style.top = `-${y * scale - magnifier.offsetHeight / 2}px`;
//   });

//   container.addEventListener("mouseleave", () => {
//     magnifier.style.display = "none";
//   });
// });




function handleScrollAnimation(element, showClass, hideClass) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  var isVisible = rect.top < windowHeight && rect.bottom >= 0;

  if (isVisible) {
    if (!element.classList.contains(showClass)) {
      element.classList.add(showClass);
    }
    element.classList.remove(hideClass);
  } else {
    if (!element.classList.contains(hideClass)) {
      element.classList.add(hideClass);
    }
    element.classList.remove(showClass);
  }
}

window.addEventListener("scroll", function () {
  var sections = [
    { selector: ".second-slide-new", in: "slide-in", out: "slide-out" },
    { selector: ".details-slide", in: "fade-in", out: "fade-out" },
    { selector: ".fourth-slide", in: "zoom-in", out: "zoom-out" }
  ];

  sections.forEach(item => {
    const element = document.querySelector(item.selector);
    if (element) {
      handleScrollAnimation(element, item.in, item.out);
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const buttonPage = document.querySelector('.details-description1 button');
  buttonPage.style.display = 'none';
  const valveImage = document.getElementById('img-center');
  const detailsDescription = document.querySelector('.details-description1');
  const featureList = detailsDescription.querySelector('.feature-list');
  const diverterTitle = document.querySelector('.standard-diverter-text');

  const infoBubble = document.getElementById('speechBubbleWrapper');
  const dtdAnimation = document.querySelector(".segment-black");
  const needhide = document.querySelector(".need-hide");
  const segments = document.querySelectorAll('.segment');
  const labels = document.querySelectorAll('.segment-label');

  const valveMap = {
    'dtd': {
      image: './images/DTDnew.png',
      title: 'Drum Type Diverter (DTD)',
      description: [
        'DTD are designed to divert or converge dry bulk materials with minimal degradation in pneumatic systems',
        'They support both pressure and vacuum conveying applications',
        'Sealing options include static silicone (up to 2 bar) and dynamic silicone (up to 6 bar) based on pressure needs',
        'Available in sizes ranging from 50 mm to 200 mm for versatile system integration'
      ],
      audio:'./audios/audio1.mp3'
    },
    'bdv': {
      image: './images/BDV_Product.webp',
      title: 'BDV Diverter',
      description: [
        'BDVs divert or converge dry bulk materials in pneumatic conveying systems',
        'Suitable for pressure (up to 6 bar g) and vacuum (-0.5 bar g) applications',
        'Seal options: Polyurethane, Viton, and Silicone',
        'Available in sizes from 65 mm to 250 mm'
      ],
      audio:'./audios/audio11.mp3'
    },
    'sdtd': {
      image: './images/SDTD.png',
      title: 'Single Drum Type Diverter (SDTD)',
      description: [
        'SDTD diverts dry bulk materials in pneumatic conveying systems',
        'Works with both pressure and vacuum conveying',
        'Seal options: Static (1.5 bar) and Dynamic (6 bar)',
        'Available in sizes from 150 mm to 300 mm'
      ],
      audio:'./audios/audio17.mp3'
    },
    'sdtd-c': {
      image: './images/SDTD-C.webp',
      title: 'Single Drum Type Diverter (SDTD-C)',
      description: [
        'SDTD diverts dry bulk materials in pneumatic conveying systems',
        'Works with both pressure and vacuum conveying',
        'Seal options: Static (1.5 bar) and Dynamic (6 bar)',
        'Available in sizes from 150 mm to 300 mm'
      ],
      audio:'./audios/audio23.mp3'
    },
    'ytype': {
      image: './images/Ytype.png',
      title: 'Flap Type Diverter - (Y-valve)',
      description: [
        'Sliding Rails option in RV is very useful for cleaning of valve with ease and less effort',
        'It is available for Exec.2 and dairy versions'
      ],
      audio:'./audios/audio29.mp3'
    },
    'scale': {
      image: './images/Scale valve.webp',
      title: 'Scale Valve',
      description: [
        'Scale Valve (SV-A  also known as a Bottom Diverter or Fill Vent Diverter) is a pneumatically actuated diversion valve designed to divert bulk solids during  pneumatic transport.   ',
        'It is designed for applications like dosing, weighing, batching and filling.'
      ],
      audio:'./audios/audio30.mp3'
    },
    'lsv': {
      image: './images/Scale valve.webp',
      title: 'Scale Valve',
      description: [
        'Scale Valve (SV-A  also known as a Bottom Diverter or Fill Vent Diverter) is a pneumatically actuated diversion valve designed to divert bulk solids during  pneumatic transport.   ',
        'It is designed for applications like dosing, weighing, batching and filling.'
      ],
      audio:'./audios/audio36.mp3'
    },
    'bypass': {
      image: './images/bypass.webp',
      title: 'By Pass valve',
      description: [
        'By-Pass Valve (BPV) is also called as “Air Only Diverter” specifically designed to divert the air in pneumatic conveying systems.',
        'This is typically used in Lean Phase Pneumatic Conveying Systems for both pressure and vacuum conveying applications.'
      ],
      audio:'./audios/audio37.mp3'
    },
  };

  let bool = true

  function setActiveSegment(segmentName) {
    buttonPage.style.display = 'block';
    needhide.style.display = 'none';
    diverterTitle.style.display = 'flex';
    diverterTitle.style.visibility = 'visible';
    infoBubble.style.display = 'none';
    dtdAnimation.classList.remove('popup')
    segments.forEach(seg => {
      seg.classList.toggle('active', seg.dataset.segment === segmentName);
    });


    const valve = valveMap[segmentName];
    if (valve) {
      valveImage.src = valve.image;
      const audio = document.getElementById('slide-audio');
      audio.src=valve.audio
      audio.currentTime = 0;

      audio.play().catch(e => {
        document.addEventListener("click", () => {
          audio.play();
        }, { once: true });
      });
      valveImage.style.height = "80%";
      diverterTitle.innerHTML = `<div class="red-dot"></div> ${valve.title}`;
      featureList.innerHTML = '';
      valve.description.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${item}`;
        featureList.appendChild(li);
      });
      detailsDescription.style.display = 'block';
    }
  }

  labels.forEach(label => {
    label.addEventListener('click', () => {
      const segmentName = label.dataset.segment;
      setActiveSegment(segmentName);
    });
  });

  segments.forEach(segment => {
    segment.addEventListener('click', () => {
      const segmentName = segment.dataset.segment;
      setActiveSegment(segmentName);
    });
  });

  buttonPage.addEventListener('click', () => {
    segments.forEach(seg => {
      if (seg.classList.contains('active')) {
        const segmentName = seg.dataset.segment;
        if (segmentName === 'dtd') {
          scrollToPage(5);
        } else if (segmentName === 'bdv') {
          scrollToPage(11);
        } else if (segmentName === 'sdtd') {
          scrollToPage(17);
        } else if (segmentName === 'sdtd-c') {
          scrollToPage(23);
        } else if (segmentName === 'ytype') {
          scrollToPage(29);
        } else if (segmentName === 'scale') {
          scrollToPage(30);
        } else if (segmentName === 'lsv') {
          scrollToPage(36);
        } else if (segmentName === 'bypass') {
          scrollToPage(37);
        }
      }
    });
  });


  // setActiveSegment('dtd');


  const features = [
    "Housing, Drum & End Covers in Aluminum using High Quality Gravity Die Casting Process",
    "Product Contact Surface in SS 316L",
    "Dual Tunnel",
    "Cylinder Operated",
    "Can be Installed in any Orientation",
    "No External Moving Parts",
    "Easy to Maintain",
    "ATEX Approved"
  ];

  const options = [
    "MOC in complete SS 304 construction",
    "High Temperature Modification",
    "ATEX / IECEX Rated Electrical Components ",
    "Hard Chrome Coating on Product Contact Surface",
    "Tungsten Carbide Coating on Product Contact Surface",
    "Hardox Liner"
  ];

  const feature = document.getElementById('unorderlist-fea');
  const option = document.getElementById('unorderlist-opt');

  features.forEach((featur) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
    feature.appendChild(li);
  });


  options.forEach((feature) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
    option.appendChild(li);
  });


  const features6 = [
    "Housing, Drum & End Covers in Aluminum using High Quality Gravity Die Casting Process",
    "Product Contact Surface in Stainless Steel 316L",
    "SDTD-C in Stainless Steel 304 construction",
    "Single Tunnel",
    "Actuator Operated",
    "Can be Installed in any Orientation",
    "No External Moving Parts",
    "Easy to Maintain",
    "ATEX Approved"
  ];

  const options6 = [
    "High Temperature Modification",
    "ATEX / IECEX Rated Electrical Components",
    "SDTD - Hard Chrome Coating on Product Contact Surface",
    "SDTD - Tungsten Carbide Coating on Product Contact Surface",
    "SDTD - Hardox Liner"
  ];

  const feature6 = document.getElementById('six-unorderlist-fea');
  const option6 = document.getElementById('six-unorderlist-opt');

  features6.forEach((featur) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
    feature6.appendChild(li);
  });


  options6.forEach((feature) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
    option6.appendChild(li);
  });

  const features9 = [
    "Construction in Spheroidal Cast Iron",
    "Single Tunnel",
    "Actuator Operated",
    "No External Moving Parts",
    "Easy to Maintain",
    "ATEX Approved",
    "Can divert the product during its flow",
    "Replacement of seal is possible with the valve in position"
  ];

  const options9 = [
    "High Temperature Modification",
    "ATEX / IECEX Rated Electrical Components"
  ];

  const feature9 = document.getElementById('nine-unorderlist-fea');
  const option9 = document.getElementById('nine-unorderlist-opt');

  features9.forEach((featur) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
    feature9.appendChild(li);
  });


  options9.forEach((feature) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
    option9.appendChild(li);
  });


  const featuresscale = [
    "Compact design",
    "Minimal Process Loss",
    "Available in Cast Iron and Stainless Steel 304 construction",
    "Self venting – Local venting or dust collection is not required at the receiving / deposit point"
  ];

  const featuresscale1 = [
    "Optimal Sealing",
    "Simple Construction with Minimal Contact Area",
    "Metal-to-metal clearances ( like Rotary valve ) that eliminate frequent part replacement.",
  ];

  const optionsscale = [
    "ATEX / IECEX Rated Electrical Components"
  ];

  // const featurescale = document.getElementById('unorderlist-fea-scale');
  // const featurescale1 = document.getElementById('unorderlist-fea-scale-1');
  // const optionscale = document.getElementById('unorderlist-opt-scale');

  // featuresscale.forEach((featur) => {
  //   const li = document.createElement('li');
  //   li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
  //   featurescale.appendChild(li);
  // });

  // featuresscale1.forEach((featur) => {
  //   const li = document.createElement('li');
  //   li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
  //   featurescale1.appendChild(li);
  // });


  // optionsscale.forEach((feature) => {
  //   const li = document.createElement('li');
  //   li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
  //   optionscale.appendChild(li);
  // });


  const featuresby = [
    "Construction in Cast Aluminum",
    "Economical Quality Product",
  ];

  const featuresby1 = [
    "Cylinder Operated",
    "Can be installed in any positions",
  ];

  const optionsby = [
    "MOC in Stainless Steel 304",
    "ATEX / IECEX Rated Electrical Components"
  ];

  //   const featureby = document.getElementById('unorderlist-fea-by');
  //   const featureby1 = document.getElementById('unorderlist-fea-by-1');
  //   const optionby = document.getElementById('unorderlist-opt-by');

  //   featuresby.forEach((featur) => {
  //     const li = document.createElement('li');
  //     li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
  //     featureby.appendChild(li);
  //   });

  //   featuresby1.forEach((featur) => {
  //     const li = document.createElement('li');
  //     li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
  //     featureby1.appendChild(li);
  //   });


  //   optionsby.forEach((feature) => {
  //     const li = document.createElement('li');
  //     li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
  //     optionby.appendChild(li);
  //   });

});

// sdtd features

const featuresSDTC = [
  "Housing, Drum & End Covers in Aluminum using High Quality Gravity Die Casting Process",
  "Product Contact Surface in Stainless Steel 316L",
  "Single Tunnel",
  "Pneumatic Actuator Operated",
  "Can be Installed in any Orientation",
  "No External Moving Parts",
  "Easy to Maintain",
  "ATEX Approved",
];

const optionsSDTC = [
  "High Temperature Modification",
  "ATEX / IECEX Rated Electrical Components",
  "SDTD - Hard Chrome Coating on Product Contact Surface",
  "SDTD - Tungsten Carbide Coating on Product Contact Surface",
  "SDTD - Hardox Liner",
];

const featureSDTC = document.getElementById('sdtc_Feature');
const optionSDTC = document.getElementById('sdtc_Option');

featuresSDTC.forEach((featur) => {
  const li = document.createElement('li');
  li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
  featureSDTC.appendChild(li);
});


optionsSDTC.forEach((feature) => {
  const li = document.createElement('li');
  li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
  optionSDTC.appendChild(li);
});

// scale valve features

const featuresSV = [
  "Compact Design",
  "Optimal Sealing",
  "Minimal Process Loss",
  "Pneumatic Actuator Operated",
  "Simple Construction with Minimal Contact Area",
  "Available in Cast Iron and Stainless Steel 304 construction",
];

const optionsSV = [
  "ATEX / IECEX Rated Electrical Components",
];

const featureSV = document.getElementById('sv_Feature');
const optionSV = document.getElementById('sv_Options');

featuresSV.forEach((featur) => {
  const li = document.createElement('li');
  li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
  featureSV.appendChild(li);
});


optionsSV.forEach((feature) => {
  const li = document.createElement('li');
  li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
  optionSV.appendChild(li);
});

// by pass valve features

const featuresBPV = [
  "Construction in Cast Aluminum",
  "Economical Quality Product",
  "Can be installed in any positions",
  "Pneumatic Cylinder Operated",
];

const optionsBPV = [
  "MOC in Stainless Steel 304",
  "ATEX / IECEX Rated Electrical Components",
];

const featureBPV = document.getElementById('bpv_Features');
const optionBPV = document.getElementById('bpv_Options');

featuresBPV.forEach((featur) => {
  const li = document.createElement('li');
  li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
  featureBPV.appendChild(li);
});


optionsBPV.forEach((feature) => {
  const li = document.createElement('li');
  li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
  optionBPV.appendChild(li);
});


// y type valve features

// const featuresyType = [
//   "Construction in Cast Aluminum",
//   "Economical Quality Product",
//   "Can be installed in any positions",
//   "Pneumatic Cylinder Operated",
// ];

// const optionsyType = [
//   "MOC in Stainless Steel 304",
//   "ATEX / IECEX Rated Electrical Components",
// ];

// const featureyType = document.getElementById('ytype_Features');
// const optionyType = document.getElementById('ytype_Options');

// featuresyType.forEach((featur) => {
//   const li = document.createElement('li');
//   li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
//   featureyType.appendChild(li);
// });


// optionsyType.forEach((feature) => {
//   const li = document.createElement('li');
//   li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
//   optionyType.appendChild(li);
// });



// lsv valve features

// const featuresLsv = [
//   "Construction in Cast Aluminum",
//   "Economical Quality Product",
//   "Can be installed in any positions",
//   "Pneumatic Cylinder Operated",
// ];

// const optionsLsv = [
//   "MOC in Stainless Steel 304",
//   "ATEX / IECEX Rated Electrical Components",
// ];

// const featureLsv = document.getElementById('lsv_Feature');
// const optionLsv = document.getElementById('lsv_Options');

// featuresLsv.forEach((featur) => {
//   const li = document.createElement('li');
//   li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${featur}`;
//   featureLsv.appendChild(li);
// });


// optionsLsv.forEach((feature) => {
//   const li = document.createElement('li');
//   li.innerHTML = `<img src="./images/Vector.png" class="bullet-icon" alt=""> ${feature}`;
//   optionLsv.appendChild(li);
// });



let pagelatest = 0;
function playAudioForPage(pageNumber) {
  if (pageNumber != pagelatest) {
    pagelatest = pageNumber;
  } else {
    return;
  }

  const audio = document.getElementById('slide-audio');
  if (!audio) return;

  const audioSrc = `./audios/audio${pageNumber}.mp3`;

  // Check if the audio file exists before setting the source
  fetch(audioSrc, { method: 'HEAD' })
    .then(response => {
      if (!response.ok) {
        console.warn(`Audio file not found: ${audioSrc}`);
        return;
      }

      audio.onended = null;
      audio.pause();
      audio.src = audioSrc;
      audio.currentTime = 0;

      audio.play().catch(e => {
        // User interaction fallback for autoplay restrictions
        document.addEventListener("click", () => {
          audio.play();
        }, { once: true });
      });
    })
    .catch(error => {
      console.error('Error checking audio file:', error);
    });
}






window.addEventListener("load", () => {
  gsap.fromTo(".text-diverter",
    { x: -300, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.2,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(".text-diverter", {
          y: 12,
          duration: 1,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    }
  );


  gsap.fromTo(".text-valve",
    { x: 400, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
      onComplete: () => {
        gsap.to(".text-valve", {
          y: 12,
          duration: 1,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    }
  );
});

let previous = 0;

function animation(page) {

  if (previous == page) return
    const animatedPages = [7,13,19,25,32,39];
  const faqAnimation = [10, 16, 22, 28, 35, 42]
  if (page == "2" && previous != page) {
    gsap.set(".spec-header-row", { opacity: 0, x: -100 });
    gsap.set(".left-column", { opacity: 0, x: -100 });

    gsap.to(".spec-header-row", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(".left-column", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });

    gsap.set(".animated-img", {
      opacity: 0,
      scale: 0.8
    });
    gsap.to(".animated-img", {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.3,
      delay: 0.2,
    });
  } else if (page == "3" || page == "6") {

    gsap.set(".valve-image", {
      clearProps: "all"
    });

    gsap.from(".valve-image", {
      y: -300,
      rotation: 60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.from(".animated-desc", {
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.8
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    tl.to([".arrow-target1", ".arrow-target2", ".arrow-target3", ".arrow-target4"], {
      x: -35,
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut",
      stagger: 0.4
    })
      .to([".arrow-target1", ".arrow-target2", ".arrow-target3", ".arrow-target4"], {
        x: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2
      });
  } else if (animatedPages.includes(page)) {
    const listDivs = {
      7: 'dtdfo',
      13: 'details-slide-new9',
      19: 'fosdtd',
      25: 'fosdtdc',
      32: 'scalevalve',
      39: 'bypassfo'
    };

    const containerId = `.${listDivs[page]}`;

    if (page == 7) {
      gsap.from(`#fifthSlide .details-right-column1 img`, {
        rotateX: 360,
        x: 600,
        duration: 1.2,
        opacity: 0,
        ease: "power3.out"
      });
    }


    gsap.set(`${containerId} .feature-list li`, { x: -50, opacity: 0 });

    gsap.to(`${containerId} .feature-list li`, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
      delay: 0.5
    });

    gsap.set(`${containerId} .bullet-icon`, { scale: 0, x: -7 });

    gsap.to(`${containerId} .bullet-icon`, {
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.2,
      delay: 1,
      onComplete: () => {
        gsap.to(`${containerId} .bullet-icon`, {
          x: 5,
          duration: 1,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.2
        });
      }
    });

  }

  if (faqAnimation.includes(page)) {

    const faqdiv = {
      10: 'thirteen-slide',
      16: 'fifteen-slide',
      22: 'sdtdsec',
      28: 'sdtdcsec',
      35: 'scalesec',
      42: 'bypasssec',
    };

    const containerId = `.${faqdiv[page]}`;
    gsap.set(`${containerId} .faq-item`, { x: -50, opacity: 0 });

    gsap.to(`${containerId} .faq-item`, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
      delay: 0.5
    });

  }


  gsap.fromTo(".spec-box1",
    { y: -150, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "bounce.out"
    }
  );

  gsap.set(".homedivs", { x: -300, opacity: 0 });
  gsap.set(".homedivs1", { y: -300, opacity: 0 });

  gsap.to(".homedivs", {
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    delay: 1
  });

  gsap.to(".homedivs1", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    delay: 1.1,
    onComplete: () => {
      gsap.to(".homedivs1 img", {
        y: 30,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
      gsap.to(".homedivs1 img", {
        x: 15,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.5
      });
      gsap.to(".homedivs1 img", {
        rotation: 5,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1
      });
    }
  });

  previous = page

  const indicator = document.querySelector(".page-indicator");

  indicator.classList.add("active-btn");

  setTimeout(() => {
    indicator.classList.remove("active-btn");
  }, 2000);

}

gsap.set(".spec-text", { x: "100%", opacity: 0 });
const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

tl.to(".spec-text", {
  x: "0%",
  opacity: 1,
  duration: 1,
  ease: "power3.out"
}).to(".spec-text", {
  x: "-100%",
  opacity: 0,
  duration: 1,
  ease: "power3.in",
  delay: 1
});

// const DTDexplodedModel = document.getElementById("DTDExploded");
// const DTDfunctionModel = document.getElementById("DTDFunction");

// const explodedModel = document.getElementById("BDVExploded");
// const functionModel = document.getElementById("BDVFunction");

// const normalBtn = document.querySelectorAll(".normalBtn");
// const explodedBtn = document.querySelectorAll(".explodedBtn");
// const functionBtn = document.querySelectorAll(".functionBtn");
// const allBtns = document.querySelectorAll(".action-btns button");

// function stopAnimation(model) {
//   model.animationName = null;
//   model.pause();
// }

// function playFirstAnimation(model, time = "") {
//   if (model.availableAnimations.length > 0) {
//     model.animationName = model.availableAnimations[0];
//     model.currentTime = 0;
//     model.play();
//     if (time != "") {
//       const stopAt = time;
//       function checkTime() {
//         if (model.currentTime >= stopAt) {
//           model.pause();
//         } else {
//           requestAnimationFrame(checkTime);
//         }
//       }
//       requestAnimationFrame(checkTime);
//     }
//   }
// }

// DTDexplodedModel.addEventListener('load', () => stopAnimation(DTDexplodedModel));
// explodedModel.addEventListener('load', () => stopAnimation(explodedModel));


// DTDfunctionModel.addEventListener('load', () => {
//   DTDfunctionModel.currentTime = 0;
//   DTDfunctionModel.play();

// });


// functionModel.addEventListener('load', () => {
//   functionModel.currentTime = 0;
//   functionModel.play();

// });


// normalBtn.forEach(normbtn => {
//   normbtn.addEventListener("click", (e) => {
//     const dataId = e.target.getAttribute("data-id");
//     if (dataId === "1") {
//       DTDexplodedModel.classList.remove("hidden");
//       DTDfunctionModel.classList.add("hidden");
//       stopAnimation(DTDexplodedModel);
//     } else {
//       explodedModel.classList.remove("hidden");
//       functionModel.classList.add("hidden");
//       stopAnimation(explodedModel);
//     }
//   });
// });

// explodedBtn.forEach(expolodebtn => {
//   expolodebtn.addEventListener("click", (e) => {
//     const dataId = e.target.getAttribute("data-id");
//     if (dataId === "1") {
//       DTDexplodedModel.classList.remove("hidden");
//       DTDfunctionModel.classList.add("hidden");
//       playFirstAnimation(DTDexplodedModel, 5.75);
//     } else {
//       explodedModel.classList.remove("hidden");
//       functionModel.classList.add("hidden");
//       playFirstAnimation(explodedModel, 7.80);
//     }
//   });
// });


// functionBtn.forEach(funcbtn => {
//   funcbtn.addEventListener("click", (e) => {
//     const dataId = e.target.getAttribute("data-id");
//     if (dataId === "1") {
//       DTDexplodedModel.classList.add("hidden");
//       DTDfunctionModel.classList.remove("hidden");
//       playFirstAnimation(DTDfunctionModel);
//     } else {
//       explodedModel.classList.add("hidden");
//       functionModel.classList.remove("hidden");
//       playFirstAnimation(functionModel);
//     }
//   });
// });

// allBtns.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     const dataId = e.target.getAttribute('data-id');
//     allBtns.forEach(b => {
//       if (b.getAttribute('data-id') === dataId) {
//         b.classList.remove('active-explode');
//       }
//     });
//     btn.classList.add('active-explode');
//   });
// });

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    userChangedInput = true;
  }
  else {
    setTimeout(() => {
      userChangedInput = false;
    }, 500);
  }
});

// When window resizes, mark userChangedInput true
window.addEventListener('resize', () => {
  userChangedInput = true;
});

// Optional: detect DevTools open by window resize & set userChangedInput true
// This is heuristic: if window.innerHeight or innerWidth suddenly changes a lot
let lastInnerWidth = window.innerWidth;
let lastInnerHeight = window.innerHeight;
window.addEventListener('resize', () => {
  const widthDiff = Math.abs(window.innerWidth - lastInnerWidth);
  const heightDiff = Math.abs(window.innerHeight - lastInnerHeight);
  if (widthDiff > 100 || heightDiff > 100) { // threshold to catch devtools or major resizes
    userChangedInput = true;
  }
  lastInnerWidth = window.innerWidth;
  lastInnerHeight = window.innerHeight;
});

let finalProductName = '';

// Model and Button Setup
const modelViewer = document.getElementById('modelViewer');
const modal = document.getElementById('modelModal');
const buttons = {
  normal: document.getElementById('btn-normal'),
  explode: document.getElementById('btn-explode'),
  conversion: document.getElementById('btn-conversion'),
  diversion: document.getElementById('btn-diversion'),
  parts: document.getElementById('btn-parts'),
  functions: document.getElementById('btn-function'),
};

const loadingSpinner = document.getElementById('loadingSpinner');

// Product config for scalability
const productConfig = {
  DTD: {
    modelPaths: {
      normal: 'DTD/DTD_Normal_Explode.glb',
      explode: 'DTD/DTD_Normal_Explode.glb',
      // conversion: 'DTD/DTD_Animation.glb',
      // diversion: 'DTD/DTD_Animation.glb',
      functions: 'DTD/DTD_Function.gltf'
    },
    viewerAttributes: {
      normal: {
        'field-of-view': '30deg',
        'min-camera-orbit': 'auto 78deg auto',
        'max-camera-orbit': 'auto 78deg auto',
        'camera-orbit': '46.98deg 90.49deg 180.7m',
        'min-field-of-view': '36.98deg',
        'max-field-of-view': '37.98deg'
      },
      explode: {
        'field-of-view': '30deg',
        'min-camera-orbit': 'auto 78deg auto',
        'max-camera-orbit': 'auto 78deg auto',
        'camera-orbit': '46.98deg 90.49deg 180.7m',
        'min-field-of-view': '36.98deg',
        'max-field-of-view': '37.98deg'
      },
      functions: {
        'camera-orbit': '1.931deg 83.44deg 98.59m',
        'min-field-of-view': '32.98deg',
        'max-field-of-view': '34.98deg',
        'field-of-view': '30deg',
      }
      // Add others as needed
    },
    animationSettings: {
      normal: { start: 0, end: 0, loop: false, autoplay: false },
      explode: { start: 0, end: 5.75, loop: false, autoplay: true },
      conversion: { start: 10, end: 150, loop: true, autoplay: true },
      diversion: { start: 190, end: 292, loop: true, autoplay: true },
      functions: { start: 0, end: 7.80, loop: true, autoplay: true },
      parts: { start: 0, end: 0, loop: false, autoplay: false }
    },
    visibleButtons: ['normal', 'explode', 'functions']
  },
  BDV: {
    modelPaths: {
      normal: 'BDV/BDVexplode.gltf',
      explode: 'BDV/BDVexplode.gltf',
      // conversion: 'DTD/DTD_Animation.glb',
      // diversion: 'DTD/DTD_Animation.glb',
      functions: 'BDV/BDVfunction.gltf'
    },
    viewerAttributes: {
      normal: {
        'min-field-of-view': '36.98deg',
        'max-field-of-view': '37.98deg',
        'min-camera-orbit': 'auto 78deg auto',
        'max-camera-orbit': 'auto 78deg auto',
        'camera-orbit': '-609.1deg 87.55deg 1.617m'
      },
      explode: {
        'min-field-of-view': '36.98deg',
        'max-field-of-view': '37.98deg',
        'min-camera-orbit': 'auto 78deg auto',
        'max-camera-orbit': 'auto 78deg auto',
        'camera-orbit': '-609.1deg 87.55deg 1.617m'
      },
      functions: {
        'min-field-of-view': '31.98deg',
        'max-field-of-view': '32.98deg',
        'min-camera-orbit': 'auto 78deg auto',
        'max-camera-orbit': 'auto 78deg auto',
        'camera-orbit': '-5.118deg 77.76deg 2.286m'
      }
      // Add others as needed
    },
    animationSettings: {
      normal: { start: 0, end: 0, loop: false, autoplay: false },
      explode: { start: 0, end: 5.75, loop: false, autoplay: true },
      conversion: { start: 10, end: 150, loop: true, autoplay: true },
      diversion: { start: 190, end: 292, loop: true, autoplay: true },
      functions: { start: 0, end: 8.62, loop: true, autoplay: true },
      parts: { start: 0, end: 0, loop: false, autoplay: false }
    },
    visibleButtons: ['normal', 'explode', 'functions']
  },
  SDTD: {
    modelPaths: {
      normal: 'SDTD/SDTD_Normal.glb',
      // explode: 'BDV/BDVexplode.gltf',
      conversion: 'SDTD/SDTD_Animation.glb',
      diversion: 'SDTD/SDTD_Animation.glb',
      // functions: 'BDV/BDVfunction.gltf'
    },
    viewerAttributes: {
      normal: {
        'min-field-of-view': '36.98deg',
        'max-field-of-view': '37.98deg',
        'min-camera-orbit': 'auto 78deg auto',
        'max-camera-orbit': 'auto 78deg auto',
        'camera-orbit': '-609.1deg 87.55deg 1.617m'
      },
      conversion: {
        'min-field-of-view': '20.98deg',
        'max-field-of-view': '30.98deg',
        'min-camera-orbit': 'auto 78deg auto',
        'max-camera-orbit': 'auto 78deg auto',
        'camera-orbit': '-609.1deg 87.55deg 1.617m'
      },
      diversion: {
        'min-field-of-view': '20.98deg',
        'max-field-of-view': '30.98deg',
        'min-camera-orbit': 'auto 78deg auto',
        'max-camera-orbit': 'auto 78deg auto',
        'camera-orbit': '-5.118deg 77.76deg 2.286m'
      }
      // Add others as needed
    },
    animationSettings: {
      normal: { start: 0, end: 0, loop: false, autoplay: false },
      explode: { start: 0, end: 5.75, loop: false, autoplay: true },
      conversion: { start: 0, end: 7.8, loop: true, autoplay: true },
      diversion: { start: 8, end: 12.2, loop: true, autoplay: true },
      functions: { start: 0, end: 8.62, loop: true, autoplay: true },
      parts: { start: 0, end: 0, loop: false, autoplay: false }
    },
    visibleButtons: ['normal', 'conversion', 'diversion']
  }

};

function setSpinnerVisibility(shouldShow) {
  const spinner = document.getElementById('loadingSpinner');
  const isHidden = spinner.classList.contains('hide');

  if (shouldShow && isHidden) {
    spinner.classList.remove('hide');
  } else if (!shouldShow && !isHidden) {
    spinner.classList.add('hide');
  }
}

function open3DModal(productName) {
  finalProductName = productName;
  const config = productConfig[productName];

  if (!config) {
    console.warn(`No config found for product: ${productName}`);
    return;
  }

  // Load default model (Normal)
  setModalSrc(config.modelPaths.normal);
  updateButtonVisibility(config.visibleButtons);

  // modal.style.display = 'block';
  modal.classList.add('show');
}

function closeModal() {
  // Hide the modal
  modal.classList.remove('show');

  // Clear the model source to free memory
  // modelViewer.src = '';

  // Remove all attributes except 'id' and 'style'
  for (const attr of modelViewer.getAttributeNames()) {
    if (attr !== 'id' && attr !== 'style' && attr !== 'src') {
      modelViewer.removeAttribute(attr);
    }
  }
}


// function setModalSrc(relativePath, attributes = {}) {
//   modelViewer.src = '';

//   setTimeout(() => {
//     modelViewer.src = `./models/${relativePath}`;

//     // First, clear any previously set dynamic attributes
//     for (const attr of modelViewer.getAttributeNames()) {
//       if (attr !== 'src' && attr !== 'id' && attr !== 'style') {
//         modelViewer.removeAttribute(attr);
//       }
//     }

//     // Apply new attributes
//     for (const [key, value] of Object.entries(attributes)) {
//       modelViewer.setAttribute(key, value);
//     }

//     // Always re-add core ones
//     // modelViewer.setAttribute('auto-rotate', '');
//     modelViewer.setAttribute('camera-controls', '');
//   }, 500);

// }


function updateButtonVisibility(visibleList) {
  Object.keys(buttons).forEach(key => {
    if (visibleList.includes(key)) {
      showButton(buttons[key]);
    } else {
      hideButton(buttons[key]);
    }
  });
}

function showButton(btn) {
  if (btn) btn.style.display = 'inline-block';
}

function hideButton(btn) {
  if (btn) btn.style.display = 'none';
}

// ✅ Add event listeners once
buttons.normal.addEventListener("click", () => handleModelSwitch("normal"));
buttons.explode.addEventListener("click", () => handleModelSwitch("explode"));
buttons.conversion.addEventListener("click", () => handleModelSwitch("conversion"));
buttons.diversion.addEventListener("click", () => handleModelSwitch("diversion"));
buttons.parts.addEventListener("click", () => handleModelSwitch("parts"));
buttons.functions.addEventListener("click", () => handleModelSwitch("functions"));

function setModalSrc(relativePath, attributes = {}) {
  return new Promise((resolve) => {
    setSpinnerVisibility(true);

    const newSrc = `./models/${relativePath}`;

    // Compare current src with new src (use endsWith since src may be absolute URL)
    if (modelViewer.src !== '' && modelViewer.src.endsWith(newSrc)) {
      // Same model — update attributes only, no reload
      for (const attr of modelViewer.getAttributeNames()) {
        if (attr !== 'src' && attr !== 'id' && attr !== 'style') {
          modelViewer.removeAttribute(attr);
        }
      }

      for (const [key, value] of Object.entries(attributes)) {
        modelViewer.setAttribute(key, value);
      }

      // Ensure camera controls attribute is present
      modelViewer.setAttribute('camera-controls', '');
      modelViewer.setAttribute('disable-tap', '');
      modelViewer.setAttribute('disable-pan', '');

      // Immediately resolve since no reload
      setSpinnerVisibility(false);
      resolve();
      return;
    }

    // Different model — reload model viewer
    modelViewer.src = '';

    setTimeout(() => {
      modelViewer.src = newSrc;

      // Clear previous dynamic attributes
      for (const attr of modelViewer.getAttributeNames()) {
        if (attr !== 'src' && attr !== 'id' && attr !== 'style') {
          modelViewer.removeAttribute(attr);
        }
      }

      // Apply new attributes
      for (const [key, value] of Object.entries(attributes)) {
        modelViewer.setAttribute(key, value);
      }

      // Add core attribute
      modelViewer.setAttribute('camera-controls', '');
      modelViewer.setAttribute('disable-tap', '');
      modelViewer.setAttribute('disable-pan', '');

      // Wait for model to load before resolving
      modelViewer.addEventListener('load', () => {
        resolve();
        setSpinnerVisibility(false);
      }, { once: true });

    }, 200); // Adjust delay if needed
  });
}


async function handleModelSwitch(actionKey) {
  if (!finalProductName || !productConfig[finalProductName]) return;

  const config = productConfig[finalProductName];
  const modelPath = config.modelPaths[actionKey];
  const viewerAttrs = config.viewerAttributes?.[actionKey] || {};
  const animationSettings = config.animationSettings?.[actionKey] || {};

  if (modelPath) {
    // Await model load before triggering animation
    await setModalSrc(modelPath, viewerAttrs);

    // Pause and reset before animation
    modelViewer.pause();

    if (actionKey === "normal") {
      // Snap to frame 1 and pause
      modelViewer.currentTime = 0;
      modelViewer.play();
      modelViewer.pause();
    } else if (actionKey === "explode") {
      playAnimationSegment({ start: animationSettings.start, end: animationSettings.end, loop: false, autoplay: true });
    } else if (actionKey === "functions") {
      playAnimationSegment({ start: animationSettings.start, end: animationSettings.end, loop: true, autoplay: true });
    } else {
      playAnimationSegment(animationSettings);
    }
  } else {
    console.warn(`Model path not defined for action: ${actionKey}`);
  }
}

function playAnimationSegment({ start = 0, end = 0, loop = false, autoplay = false }) {
  if (!modelViewer) return;

  if (modelViewer._animationLoopCancel) {
    modelViewer._animationLoopCancel();
  }

  modelViewer.pause();
  modelViewer.currentTime = start;

  if (!autoplay || start === end) {
    modelViewer.play();
    setTimeout(() => modelViewer.pause(), 100);
    return;
  }

  modelViewer.play();

  let isCancelled = false;
  modelViewer._animationLoopCancel = () => {
    isCancelled = true;
  };

  const checkAnimationEnd = () => {
    if (isCancelled) return;

    if (modelViewer.currentTime >= end) {
      if (loop) {
        modelViewer.currentTime = start;
        modelViewer.play();
        requestAnimationFrame(checkAnimationEnd);
      } else {
        modelViewer.pause();
      }
    } else {
      requestAnimationFrame(checkAnimationEnd);
    }
  };

  requestAnimationFrame(checkAnimationEnd);
}


// function playAnimationSegment({ start = 0, end = 0, loop = false, autoplay = false }) {
//   if (!modelViewer) return;

//   // Always cancel any previous loop check
//   if (modelViewer._animationLoopCancel) {
//     modelViewer._animationLoopCancel();
//   }

//   // Force loop = true to handle control ourselves
//   loop = true;

//   modelViewer.pause();
//   modelViewer.currentTime = start;

//   // CASE 1: If autoplay is false (like normal or parts), play & pause quickly to set frame
//   if (!autoplay || start === end) {
//     modelViewer.play();
//     setTimeout(() => modelViewer.pause(), 50); // Ensure it renders the first frame
//     return;
//   }

//   // CASE 2: If autoplay is true (explode, conversion, etc.)
//   modelViewer.play();

//   let isCancelled = false;

//   modelViewer._animationLoopCancel = () => {
//     isCancelled = true;
//   };

//   const checkAnimationEnd = () => {
//     if (isCancelled) return;

//     if (modelViewer.currentTime >= end) {
//       if (start === 0 && end === 5.75) {
//         // Specific case for 'explode': play once, then pause (even though loop is true internally)
//         modelViewer.pause();
//       } else {
//         // Loop back to start for others
//         modelViewer.currentTime = start;
//         modelViewer.play();
//         requestAnimationFrame(checkAnimationEnd);
//       }
//     } else {
//       requestAnimationFrame(checkAnimationEnd);
//     }
//   };

//   requestAnimationFrame(checkAnimationEnd);
// }


window.addEventListener("load", () => {
  const preloader = document.getElementById("globalPreloader");
  const models = Array.from(document.querySelectorAll("model-viewer"));

  const modelPromises = models.map(model =>
    new Promise(resolve => {
      if (model.loaded) return resolve();
      model.addEventListener("load", resolve, { once: true });
      setTimeout(resolve, 5000);
    })
  );

  const timeoutFallback = new Promise(resolve => setTimeout(resolve, 5000));

  Promise.race([Promise.all(modelPromises), timeoutFallback]).then(() => {

    setTimeout(() => {
      // DTDfunctionModel.classList.add("hidden");
      // functionModel.classList.add("hidden");

      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = "0";
      setTimeout(() => preloader.style.display = "none", 2000);
    }, 2000);

  });

  // pageInput.addEventListener("change", ()=> {

  //   if (parseInt(pageInput.value) == 12) {
  //     const models = document.querySelectorAll("model-viewer");
  //     models.forEach(model => {
  //       // model.style.display = 'flex';
  //     });
  //   }
  // });


  pageInput.addEventListener("input", () => { userChangedInput = false; })


});

// -------------------------------------- Cursor animation  ----------------------------------------

const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
const cursorTrail = document.getElementById('cursorTrail');

let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX - 10 + 'px';
  cursor.style.top = mouseY - 10 + 'px';
});


function animateCursorElements() {
  trailX += (mouseX - trailX) * 0.08;
  trailY += (mouseY - trailY) * 0.08;
  cursorTrail.style.left = trailX - 4 + 'px';
  cursorTrail.style.top = trailY - 4 + 'px';

  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  cursorRing.style.left = ringX - 17.5 + 'px';
  cursorRing.style.top = ringY - 17.5 + 'px';

  requestAnimationFrame(animateCursorElements);
}

document.querySelectorAll('button, a, .interactive').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorRing.classList.add('hover');
  });

  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorRing.classList.remove('hover');
  });
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
});

animateCursorElements();

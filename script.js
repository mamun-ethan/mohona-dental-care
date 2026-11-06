/* ==========================================================================
   DR. MOHONA DENTAL CARE & IMPLANT CENTER - SCRIPT.JS
   Pure JavaScript: Navigation, Service Details & Cost Modals,
   WhatsApp dispatcher, Doctor selection
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Service Data for Dynamic Modal (Details & Cost) ---
  const servicesData = {
    implant: {
      tag: "অত্যাধুনিক ইমপ্ল্যান্টোলজি",
      title: "ডেন্টাল ইমপ্ল্যান্ট (স্থায়ী কৃত্রিম দাঁত সংযোজন)",
      details: "হারিয়ে যাওয়া প্রাকৃতিক দাঁতের স্থায়ী ও টেকসই বিকল্প হলো আধুনিক ডেন্টাল ইমপ্ল্যান্ট। ডাঃ মোহনা ডেন্টাল কেয়ার অ্যান্ড ইমপ্ল্যান্ট সেন্টারে চোয়ালের হাড়ের ভেতর আন্তর্জাতিক মানের বায়োকম্প্যাটিবল টাইটানিয়াম স্ক্রু ও এবাটমেন্ট স্থাপন করে তার উপর নিখুঁত ন্যাচারাল লুকিং ক্রাউন বসানো হয়। ফলে পাশের সুস্থ দাঁত কাটার প্রয়োজন হয় না এবং আজীবন শক্তিশালী প্রাকৃতিক দাঁতের মতোই দৃঢ় অনুভূতি পাওয়া যায়।",
      highlights: [
        "স্থায়িত্ব: আজীবনের জন্য সুদৃঢ় ও স্থায়ী সমাধান",
        "ন্যাচারাল লুক: প্রাকৃতিক দাঁতের মতো নিখুঁত সৌন্দর্য ও স্বাভাবিক চর্বণক্ষমতা",
        "হাড়ের সুরক্ষা: চোয়ালের হাড়ের ক্ষয়রোধ করে মুখমণ্ডলের সঠিক গঠন বজায় রাখে",
        "ব্যথাহীন পদ্ধতি: উন্নত ডিজিটাল লোকাল অ্যানেস্থেশিয়ায় সম্পূর্ণ আরামদায়ক প্রক্রিয়া"
      ],
      costEstimate: "আন্তর্জাতিক মানের সাশ্রয়ী প্যাকেজ",
      costDetails: "রোগীর চোয়ালের হাড়ের ঘনত্ব, অবস্থান এবং আন্তর্জাতিক মানের ইমপ্ল্যান্ট ব্র্যান্ডের ওপর ভিত্তি করে স্বচ্ছ ও ন্যায্য প্যাকেজ নির্ধারণ করা হয়।",
      serviceOption: "ডেন্টাল ইমপ্ল্যান্ট (Dental Implant)"
    },
    rct: {
      tag: "এন্ডোডন্টিক্স",
      title: "রুট ক্যানেল চিকিৎসা (Root Canal Treatment - RCT)",
      details: "দাঁতের ক্ষয় যখন গভীরে নার্ভ বা মজ্জা পর্যন্ত পৌঁছায়, তখন অসহ্য যন্ত্রণা ও ইনফেকশন দেখা দেয়। ডাঃ মোহনা ডেন্টাল কেয়ার & ইমপ্ল্যান্ট সেন্টারে ডিজিটাল অ্যাপেক্স লোকেটার ও রোটারি ফাইলের সাহায্যে আধুনিক ব্যথাহীন লোকাল অ্যানাস্থেসিয়ায় ভেতরের ক্ষতিকর জীবাণু পরিষ্কার করে ক্যানেল সিল করা হয়। ফলে দাঁত ফেলে দেওয়ার প্রয়োজন হয় না।",
      highlights: [
        "চিকিৎসার মেয়াদ: ১ থেকে ২ সেশন (প্রয়োজনে ৩ সেশন)",
        "ব্যথাহীন: উন্নত ডিজিটাল অ্যানাস্থেসিয়ায় সম্পূর্ণ স্বাচ্ছন্দ্যদায়ক",
        "স্থায়িত্ব: প্রাকৃতিক দাঁত আজীবনের জন্য সংরক্ষিত থাকে",
        "পরামর্শ: রুট ক্যানেল পরবর্তী দাঁতে ক্যাপ বা ক্রাউন পরানো আবশ্যক"
      ],
      costEstimate: "সাশ্রয়ী ও ন্যায্য চিকিৎসাব্যয়",
      costDetails: "দাঁতের রুট বা শিকড়ের সংখ্যা এবং ইনফেকশনের ধরনের ওপর ভিত্তি করে খরচ নির্ধারিত হয়। কোনো অপ্রকাশিত বা অতিরিক্ত চার্জ নেই।",
      serviceOption: "রুট ক্যানেল চিকিৎসা (RCT)"
    },
    scaling: {
      tag: "প্রিভেন্টিভ কেয়ার",
      title: "আল্ট্রাসনিক স্কেলিং ও টিথ পলিশিং",
      details: "দাঁত ব্রাশ করলেও অনেক সময় মাড়ির নিচে শক্ত প্লাক ও টারটার জমে থাকে। এটি মাড়ি ফোলা, মাড়ি থেকে রক্ত পড়া ও মুখের দুর্গন্ধের মূল কারণ। আল্ট্রাসনিক ভাইব্রেশন ও ওয়াটার স্প্রে-এর সাহায্যে এনামেলের ক্ষতি না করে দাঁতকে সম্পূর্ণ পাথর ও দাগমুক্ত করা হয়।",
      highlights: [
        "সময়কাল: মাত্র ৩০ থেকে ৪৫ মিনিট",
        "ফলাফল: মুক্তার মতো উজ্জ্বল ও দুর্গন্ধমুক্ত মুখের নিশ্চয়তা",
        "নিরাপদ: মাড়ির কোনো প্রকার ক্ষত সৃষ্টি হয় না",
        "পরামর্শ: প্রতি ৬ থেকে ১২ মাস পরপর স্কেলিং করা দাঁতের দীর্ঘস্থায়িত্ব বাড়ায়"
      ],
      costEstimate: "সুলভ ও ফিক্সড প্যাকেজ রেট",
      costDetails: "সম্পূর্ণ দাঁতের সেট পরিষ্কার ও পলিশিং সহ অত্যন্ত সুলভ মূল্যে করা হয়।",
      serviceOption: "স্কেলিং ও পলিশিং"
    },
    crown: {
      tag: "প্রস্থোডন্টিক্স",
      title: "ডেন্টাল ক্যাপ ও ফিক্সড ব্রিজ",
      details: "রুট ক্যানেল করা দাঁত ভঙ্গুর হয়ে থাকে, তাই চিবাতে গেলে ভেঙে যাওয়ার ঝুঁকি থাকে। ক্যাপ বা ক্রাউন দাঁতকে একটি মজবুত জ্যাকেটের মতো সুরক্ষা দেয়। এছাড়াও এক বা একাধিক হারিয়ে যাওয়া দাঁতের স্থানে পাশের দাঁতের সাপোর্ট নিয়ে স্থায়ী ফিক্সড ব্রিজ স্থাপন করা হয়।",
      highlights: [
        "ম্যাটেরিয়াল অপশন: পিএফএম (মেটাল সিরামিক) এবং প্রিমিয়াম জিরকোনিয়া",
        "প্রাকৃতিক রূপ: আপনার প্রাকৃতিক দাঁতের রঙের সাথে হুবহু মিল রেখে শেড ম্যাচিং",
        "মজবুতি: সাধারণ দাঁতের মতোই সহজে শক্ত খাবার চিবানো যায়"
      ],
      costEstimate: "উপাদান ভেদে স্বচ্ছ ও মানসম্মত মূল্য",
      costDetails: "জিরকোনিয়া নাকি সাধারণ সিরামিক ক্রাউন বেছে নিচ্ছেন—তার ওপর নির্ভর করে দীর্ঘস্থায়ী ওয়ারেন্টি সহ প্যাকেজ নির্ধারণ করা হয়।",
      serviceOption: "ডেন্টাল ক্যাপ ও ক্রাউন"
    },
    braces: {
      tag: "অর্থোডন্টিক্স",
      title: "আঁকাবাঁকা দাঁতের ব্রেসেস ও অ্যালাইনমেন্ট",
      details: "উঁচু-নিচু, উল্টাপাল্টা বা অতিরিক্ত ফাঁকা দাঁতের কারণে যাদের মন খুলে হাসতে সংকোচ হয়, তাদের জন্য অর্থোডন্টিক চিকিৎসা একটি আশীর্বাদ। আধুনিক মেটালিক অথবা স্বচ্ছ সিরামিক ব্র্যাকেট দিয়ে ধীরে ধীরে দাঁতকে সুন্দর ও সঠিক বিন্যাসে নিয়ে আসা হয়।",
      highlights: [
        "উপযোগিতা: কিশোর-কিশোরী থেকে শুরু করে যেকোনো প্রাপ্তবয়স্ক ব্যক্তি",
        "স্থায়িত্ব: স্থায়ী ও স্বাভাবিক ফেসিয়াল নান্দনিকতা",
        "পদ্ধতি: উন্নত ওয়্যার ও ব্র্যাকেট সিস্টেম"
      ],
      costEstimate: "সহজ কিস্তি ও সাশ্রয়ী দীর্ঘমেয়াদী প্যাকেজ",
      costDetails: "সমস্যার জটিলতা অনুযায়ী মোট চিকিৎসার খরচ নির্ধারিত হয় এবং রোগী প্রতি মাসে সহজ কিস্তিতে ফি পরিশোধের সুযোগ পান।",
      serviceOption: "আঁকাবাঁকা দাঁতের ব্রেসেস"
    },
    filling: {
      tag: "রিস্টোরেটিভ কেয়ার",
      title: "লাইট কিউর কম্পোজিট ফিলিং",
      details: "দাঁতে কালো দাগ বা গর্ত হলে প্রথম পর্যায়েই ফিলিং করিয়ে নেওয়া সবচেয়ে বুদ্ধিমানের কাজ। আমরা ব্যবহার করি উন্নত ন্যানো-কম্পোজিট উপাদান, যা ব্লু লাইট দিয়ে মাত্র কয়েক সেকেন্ডেই শক্ত হয়ে যায়। বাইরে থেকে বোঝার কোনো উপায় থাকে না যে দাঁতে ফিলিং করা হয়েছে।",
      highlights: [
        "সময়কাল: প্রতি দাঁতে মাত্র ১৫ থেকে ২০ মিনিট",
        "সুবিধা: ফিলিং সম্পন্ন হওয়ার সাথে সাথেই খাবার খাওয়া যায়",
        "স্থায়িত্ব: উচ্চ প্রতিরোধ ক্ষমতা ও খাবার আটকানোর ভয় থাকে না"
      ],
      costEstimate: "গর্তের আকার ভেদে নামমাত্র ফি",
      costDetails: "ক্যাভিটির গভীরতা ও ব্যবহৃত কম্পোজিটের পরিমাণ অনুযায়ী স্বচ্ছ ও ন্যায্য ফি রাখা হয়।",
      serviceOption: "লাইট কিউর ফিলিং"
    },
    extraction: {
      tag: "মাইনর ওরাল সার্জারি",
      title: "ব্যথাহীন দাঁত তোলা ও ওরাল সার্জারি",
      details: "যেসব দাঁত আর কোনোভাবেই বাঁচানো সম্ভব নয় বা আক্কেল দাঁত (Wisdom Tooth) যখন মাড়ির ভেতরে আটকে থেকে প্রচণ্ড ব্যথা সৃষ্টি করে, তখন অভিজ্ঞ ডেন্টাল সার্জনের মাধ্যমে তা সূক্ষ্মভাবে অপসারণ করা হয়। এছাড়াও মুখের ভেতরের সিস্ট, টিউমার ও চোয়ালের টিএমজে ব্যথার বিশেষ চিকিৎসা দেওয়া হয়।",
      highlights: [
        "অভিজ্ঞতা: ডাঃ মোহনা ও বিশেষজ্ঞ সার্জন টিমের সরাসরি তত্ত্বাবধানে চিকিৎসা",
        "ব্যথাহীন: অত্যাধুনিক লোকাল অ্যানাস্থেসিয়া ও দ্রুত নিরাময় প্রটোকল",
        "জীবাণুমুক্ত: শতভাগ অটোক্লেভড সার্জিক্যাল ইনস্ট্রুমেন্টস"
      ],
      costEstimate: "ন্যায্য ও সাশ্রয়ী সার্জিক্যাল ফি",
      costDetails: "দাঁতের পজিশন ও সার্জারির জটিলতা অনুযায়ী স্বচ্ছ আলোচনা সাপেক্ষে ফি নির্ধারিত হয়।",
      serviceOption: "ব্যথাহীন দাঁত তোলা"
    }
  };

  // --- Modal Elements ---
  const modalBackdrop = document.getElementById('serviceModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalDynamicContent');

  function openModal(contentHtml) {
    if (modalContent && modalBackdrop) {
      modalContent.innerHTML = contentHtml;
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // --- Handle Service Card Buttons (Details & Cost) ---
  const serviceCardsGrid = document.querySelector('.services-cards-grid');

  if (serviceCardsGrid) {
    serviceCardsGrid.addEventListener('click', (e) => {
      const detailsBtn = e.target.closest('[data-action="details"]');
      const costBtn = e.target.closest('[data-action="cost"]');

      if (detailsBtn) {
        const sKey = detailsBtn.getAttribute('data-service');
        const data = servicesData[sKey];
        if (!data) return;

        const highlightsHtml = data.highlights.map(item => `<li>${item}</li>`).join('');

        const html = `
          <span class="modal-header-badge">${data.tag}</span>
          <h3 class="modal-title">${data.title}</h3>
          <div class="modal-body">
            <p>${data.details}</p>
            <div class="modal-highlights">
              <strong>বিশেষ সুবিধাসমূহ ও পরামর্শ:</strong>
              <ul style="padding-left: 18px; margin-top: 6px;">
                ${highlightsHtml}
              </ul>
            </div>
          </div>
          <div class="modal-actions">
            <button class="btn btn-gold btn-sm select-service-book" data-service-name="${data.serviceOption}">
              📅 সিরিয়াল বুক করুন
            </button>
            <a href="tel:+8801625050816" class="btn btn-outline-primary btn-sm">
              📞 সরাসরি কল করুন
            </a>
          </div>
        `;

        openModal(html);
      }

      if (costBtn) {
        const sKey = costBtn.getAttribute('data-service');
        const data = servicesData[sKey];
        if (!data) return;

        const whatsappInquiryText = encodeURIComponent(`আসসালামু আলাইকুম, আমি ডাঃ মোহনা ডেন্টাল কেয়ার & ইমপ্ল্যান্ট সেন্টারে "${data.title}"-এর আনুমানিক খরচ ও পরামর্শ সম্পর্কে জানতে চাই।`);

        const html = `
          <span class="modal-header-badge">স্বচ্ছ চিকিৎসা ফি</span>
          <h3 class="modal-title">${data.title} — খরচ বিবরণী</h3>
          <div class="modal-body">
            <div class="cost-breakdown-box">
              <span class="modal-header-badge" style="background:#fff;">ন্যায্য ফি গ্যারান্টি</span>
              <div class="cost-price-tag">${data.costEstimate}</div>
              <p class="cost-note">রোগীর সমস্যা ও দাঁতের সঠিক অবস্থা পরীক্ষার পর সুনির্দিষ্ট ফি জানিয়ে দেওয়া হয়</p>
            </div>
            <p>${data.costDetails}</p>
            <div class="modal-highlights">
              <strong>💡 পরামর্শ:</strong>
              <p style="margin:0;">সঠিক খরচের ধারণা পেতে ক্লিনিক চলাকালীন সময়ে কল করে বা সরাসরি চেম্বারে এসে প্রাথমিক চেকআপ করিয়ে নিতে পারেন।</p>
            </div>
          </div>
          <div class="modal-actions">
            <a href="https://wa.me/8801625050816?text=${whatsappInquiryText}" target="_blank" rel="noopener" class="btn btn-gold btn-sm">
              💬 হোয়াটসঅ্যাপে খরচ জানুন
            </a>
            <button class="btn btn-outline-primary btn-sm select-service-book" data-service-name="${data.serviceOption}">
              📅 সিরিয়াল ফর্ম পূরণ করুন
            </button>
          </div>
        `;

        openModal(html);
      }
    });
  }

  // --- Modal Click Delegation for "সিরিয়াল বুক করুন" ---
  document.addEventListener('click', (e) => {
    const bookBtn = e.target.closest('.select-service-book');
    if (bookBtn) {
      const sName = bookBtn.getAttribute('data-service-name');
      closeModal();

      const pServiceSelect = document.getElementById('pService');
      if (pServiceSelect && sName) {
        pServiceSelect.value = sName;
      }

      const bookSection = document.getElementById('book');
      if (bookSection) {
        bookSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  }

  // --- Doctor Pre-select in Form ---
  const selectDocBtns = document.querySelectorAll('.select-doc');
  const pDoctorSelect = document.getElementById('pDoctor');

  selectDocBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const docName = btn.getAttribute('data-name');
      if (pDoctorSelect && docName) {
        pDoctorSelect.value = docName;
      }
    });
  });

  // --- Default Date (Today) ---
  const pDateInput = document.getElementById('pDate');
  if (pDateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;
    pDateInput.min = todayStr;
    pDateInput.value = todayStr;
  }

  // --- Serial Booking Form -> WhatsApp ---
  const serialForm = document.getElementById('serialForm');
  if (serialForm) {
    serialForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('pName').value.trim();
      const phone = document.getElementById('pPhone').value.trim();
      const age = document.getElementById('pAge').value.trim() || 'উল্লেখ নেই';
      const doctor = document.getElementById('pDoctor').value;
      const date = document.getElementById('pDate').value;
      const service = document.getElementById('pService').value;

      if (!name || !phone || !date) {
        alert('অনুগ্রহ করে নাম, মোবাইল নম্বর এবং তারিখ প্রদান করুন।');
        return;
      }

      const msg = 
`🦷 *ডাঃ মোহনা ডেন্টাল কেয়ার & ইমপ্ল্যান্ট সেন্টার — নতুন সিরিয়াল বুকিং* 🦷
───────────────────────
👤 *রোগীর নাম:* ${name}
📞 *মোবাইল:* ${phone}
🎂 *বয়স:* ${age}
🩺 *ডাক্তার:* ${doctor}
📅 *তারিখ:* ${date}
✨ *সেবা:* ${service}
📍 *চেম্বার:* ভিক্টোরিয়া রোড, প্রধান ডাকঘরের পূর্ব পাশে (২য় তলা), টাঙ্গাইল
───────────────────────
অনুগ্রহ করে সিরিয়ালটি নিশ্চিত করুন। ধন্যবাদ।`;

      const whatsappUrl = `https://wa.me/8801625050816?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // --- Scroll Spy for Navbar Active Link ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // TREATMENT RESULTS (BEFORE & AFTER) 2-COLUMN CAROUSEL SLIDER
  // ==========================================================================
  const carouselContainer = document.getElementById('resultsCarouselContainer');
  const track = document.getElementById('resultsCarouselTrack');
  const prevBtn = document.getElementById('resultsPrevBtn');
  const nextBtn = document.getElementById('resultsNextBtn');
  const dotsWrap = document.getElementById('resultsDotsWrap');

  if (carouselContainer && track) {
    const originalItems = Array.from(track.querySelectorAll('.result-slide-item'));
    const totalOriginal = originalItems.length;
    let currentIndex = 0;
    let isTransitioning = false;
    let autoplayInterval = null;

    // Clone all original items to provide a seamless infinite right-to-left loop
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    const allItems = Array.from(track.querySelectorAll('.result-slide-item'));

    // Create pagination dots for the original slides
    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      for (let i = 0; i < totalOriginal; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `স্লাইড ${i + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(i);
          restartAutoplay();
        });
        dotsWrap.appendChild(dot);
      }
    }
    const dots = dotsWrap ? dotsWrap.querySelectorAll('.carousel-dot') : [];

    function updateDots(idx) {
      const activeIdx = idx % totalOriginal;
      dots.forEach((d, i) => {
        if (i === activeIdx) {
          d.classList.add('active');
        } else {
          d.classList.remove('active');
        }
      });
    }

    function getStepWidth() {
      if (allItems.length < 2) return track.offsetWidth;
      const item0 = allItems[0];
      const item1 = allItems[1];
      return item1.offsetLeft - item0.offsetLeft;
    }

    function updateSlidePosition(animate = true) {
      const step = getStepWidth();
      if (!animate) {
        track.style.transition = 'none';
      } else {
        track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
      }
      track.style.transform = `translateX(-${currentIndex * step}px)`;
      updateDots(currentIndex);
    }

    function nextSlide() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      updateSlidePosition(true);

      // Reset seamlessly after reaching clones
      if (currentIndex >= totalOriginal) {
        setTimeout(() => {
          track.style.transition = 'none';
          currentIndex = 0;
          track.style.transform = `translateX(0px)`;
          updateDots(0);
          setTimeout(() => {
            isTransitioning = false;
          }, 50);
        }, 620);
      } else {
        setTimeout(() => {
          isTransitioning = false;
        }, 620);
      }
    }

    function prevSlide() {
      if (isTransitioning) return;
      isTransitioning = true;
      if (currentIndex <= 0) {
        // Jump to clones instantly, then slide
        track.style.transition = 'none';
        currentIndex = totalOriginal;
        const step = getStepWidth();
        track.style.transform = `translateX(-${currentIndex * step}px)`;

        // Force reflow
        void track.offsetHeight;

        currentIndex = totalOriginal - 1;
        track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        track.style.transform = `translateX(-${currentIndex * step}px)`;
        updateDots(currentIndex);
        setTimeout(() => {
          isTransitioning = false;
        }, 620);
      } else {
        currentIndex--;
        updateSlidePosition(true);
        setTimeout(() => {
          isTransitioning = false;
        }, 620);
      }
    }

    function goToSlide(idx) {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = idx;
      updateSlidePosition(true);
      setTimeout(() => {
        isTransitioning = false;
      }, 620);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        restartAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        restartAutoplay();
      });
    }

    // Autoplay (Right-to-left advance every 3.5s)
    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, 3500);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);

    // Touch swipe gestures
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      stopAutoplay();
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          nextSlide(); // Drag left -> slide right-to-left
        } else {
          prevSlide(); // Drag right -> slide left-to-right
        }
      }
      startAutoplay();
    }, { passive: true });

    // Handle Window Resize dynamically
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateSlidePosition(false);
      }, 100);
    });

    // Start auto loop
    startAutoplay();
  }

  // ==========================================================================
  // RESULTS LIGHTBOX MODAL
  // ==========================================================================
  const lightbox = document.getElementById('resultsLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaptionDesc = document.getElementById('lightboxCaptionDesc');
  const lightboxBadge = document.getElementById('lightboxBadge');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  function openLightbox(src, title, caption, isAfter) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxTitle) lightboxTitle.textContent = title || 'চিকিৎসার বাস্তব ছবি';
    if (lightboxCaptionDesc) lightboxCaptionDesc.textContent = caption || '';
    if (lightboxBadge) {
      if (isAfter) {
        lightboxBadge.textContent = 'চিকিৎসার সফল ফলাফল (After)';
        lightboxBadge.style.background = 'var(--gold-subtle)';
        lightboxBadge.style.color = 'var(--gold-dark)';
      } else {
        lightboxBadge.textContent = 'চিকিৎসার পূর্ববর্তী অবস্থা (Before)';
        lightboxBadge.style.background = '#fef2f2';
        lightboxBadge.style.color = '#991b1b';
      }
    }
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Attach Lightbox triggers to comparison columns
  document.querySelectorAll('.compare-col').forEach((col) => {
    col.addEventListener('click', () => {
      const src = col.getAttribute('data-src');
      const title = col.getAttribute('data-title');
      const caption = col.getAttribute('data-caption');
      const isAfter = col.classList.contains('after-col');
      if (src) {
        openLightbox(src, title, caption, isAfter);
      }
    });
  });

  // Pre-select service in booking form when clicking "পরামর্শ নিন"
  document.querySelectorAll('.result-book-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sName = btn.getAttribute('data-service');
      const pService = document.getElementById('pService');
      if (pService && sName) {
        pService.value = sName;
      }
    });
  });
});

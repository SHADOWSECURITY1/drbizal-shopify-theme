function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var audioCover = window.drBizalAssets.audioCover;
var bundleCover = window.drBizalAssets.bundleCover;
var workbookCover = window.drBizalAssets.workbookCover;
var speakingPhoto = window.drBizalAssets.speakingPhoto;
var specialEditionCover = window.drBizalAssets.specialEditionCover;
var ittyBittyCover = window.drBizalAssets.ittyBittyCover;
var optimalLifeCover = window.drBizalAssets.optimalLifeCover;
var drBizalPhoto = window.drBizalAssets.drBizalPhoto;
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
function DrBizalWebsite() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrolled = _useState2[0],
    setIsScrolled = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    activeTestimonial = _useState4[0],
    setActiveTestimonial = _useState4[1];
  var _useState5 = useState('home'),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    mobileMenuOpen = _useState8[0],
    setMobileMenuOpen = _useState8[1];
  var _useState9 = useState([]),
    _useState0 = _slicedToArray(_useState9, 2),
    cart = _useState0[0],
    setCart = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    cartOpen = _useState10[0],
    setCartOpen = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedProduct = _useState12[0],
    setSelectedProduct = _useState12[1];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    addedToCart = _useState14[0],
    setAddedToCart = _useState14[1];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    mentoringModal = _useState16[0],
    setMentoringModal = _useState16[1];
  var _useState17 = useState({
      name: '',
      email: '',
      phone: '',
      goals: '',
      timeline: '',
      investment: ''
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    mentoringForm = _useState18[0],
    setMentoringForm = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    formSubmitted = _useState20[0],
    setFormSubmitted = _useState20[1];
  var _useState21 = useState({
      name: '',
      email: '',
      role: ''
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    movementForm = _useState22[0],
    setMovementForm = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    movementSubmitted = _useState24[0],
    setMovementSubmitted = _useState24[1];
  var _useState25 = useState(0),
    _useState26 = _slicedToArray(_useState25, 2),
    endorseIndex = _useState26[0],
    setEndorseIndex = _useState26[1];
  var _useState27 = useState(0),
    _useState28 = _slicedToArray(_useState27, 2),
    colleagueIndex = _useState28[0],
    setColleagueIndex = _useState28[1];
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    videoModal = _useState30[0],
    setVideoModal = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    freeChapterModal = _useState32[0],
    setFreeChapterModal = _useState32[1];
  var _useState33 = useState({
      name: '',
      email: ''
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    freeChapterForm = _useState34[0],
    setFreeChapterForm = _useState34[1];
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    freeChapterSubmitted = _useState36[0],
    setFreeChapterSubmitted = _useState36[1];
  var _useState37 = useState(false),
    _useState38 = _slicedToArray(_useState37, 2),
    audioModal = _useState38[0],
    setAudioModal = _useState38[1];
  var ytPlayerDivRef = useRef(null);
  var ytPlayerRef = useRef(null);
  var bookEndorsements = [{
    quote: "This book provides step-by-step directions for achieving health, wellness, and longevity.",
    author: "Julian Whitaker, MD",
    title: "Founder, Whitaker Wellness Institute",
    location: "Newport Beach, CA"
  }, {
    quote: "Dr. Bizal's book reveals how different expressions of energy are interconnected to shape our being. 'The Optimal Life' is an invaluable tool to make us aware of our potential and ease the amazing journey of living.",
    author: "Luca G. Guidotti, M.D., Ph.D.",
    title: "The Scripps Research Institute",
    location: "La Jolla, CA"
  }, {
    quote: "These magnificent steps to creating and maintaining wellness are truly gifts given by a higher power through this humble servant. This is a 'must' reading for every human being.",
    author: "Donald Jolly-Gabriel, Ph.D.",
    title: "Director, Hyperbaric Medicine, Whitaker Wellness Institute",
    location: "Newport Beach, CA"
  }, {
    quote: "This book should be permanently in every person's library as a foundation to learn and continue being healthy. You can call this book 'your friend,' it is always ready to give you help.",
    author: "Zuzana Bic, Dr.P.H., MUDr.",
    title: "Dept. of Population Health, College of Health Sciences",
    location: "University of California, Irvine"
  }, {
    quote: "Dr. Bizal's book has a magical way of bringing us back to inner balance and ultimate health that is unique and unlike any book on the market. His message is refreshing, enlightening and life-changing.",
    author: "Kardena Pauza",
    title: "Ms America Fitness 2006-07",
    location: ""
  }];
  var shopRef = useRef(null);
  var mentoringRef = useRef(null);
  var philosophyRef = useRef(null);
  var products = [{
    id: 1,
    title: 'The Optimal Life',
    subtitle: 'Paperback Book',
    price: 24.95,
    tag: 'BESTSELLER',
    desc: 'The complete guide to health, healing & longevity. Personally signed by Dr. Bizal.',
    fullDesc: 'This comprehensive 300+ page guide distills 40 years of clinical experience into actionable wisdom. Learn the Four Realizations, understand the mind-body connection, and discover your path to optimal health. Each copy is personally signed by Dr. Bizal.',
    includes: ['Paperback book (300+ pages)', 'Personal signature from Dr. Bizal', 'Access to online resources', 'Downloadable worksheets']
  }, {
    id: 2,
    title: 'The Optimal Life',
    subtitle: 'eBook Edition',
    price: 9.95,
    tag: null,
    desc: 'Instant download. Start reading in minutes.',
    fullDesc: 'Get immediate access to the complete Optimal Life system. Read on any device: phone, tablet, or computer. Includes hyperlinks to additional resources and video content.',
    includes: ['PDF + ePub + Kindle formats', 'Instant download access', 'Read on any device', 'Bonus resource links']
  }, {
    id: 3,
    title: 'The Optimal Life',
    subtitle: 'Special Edition eBook',
    price: 14.99,
    tag: 'UPDATED',
    desc: 'Updated & revised edition with new content.',
    fullDesc: 'The updated and revised Special Edition includes all new content, expanded chapters, and the latest insights from Dr. Bizal. Read on any device with instant download access.',
    includes: ['PDF + ePub + Kindle formats', 'Updated & revised content', 'New chapters & insights', 'Instant download access']
  }, {
    id: 4,
    title: 'Itty Bitty Book',
    subtitle: 'Pocket Guide',
    price: 8.99,
    tag: 'QUICK READ',
    desc: 'The core principles in a portable format.',
    fullDesc: "Perfect for busy professionals or as an introduction to Dr. Bizal's philosophy. This pocket-sized guide covers the essential principles you can apply immediately.",
    includes: ['Pocket-sized format', 'Core principles summary', 'Quick reference charts', 'Action checklists']
  }, {
    id: 5,
    title: 'Itty Bitty Book',
    subtitle: 'eBook Edition',
    price: 2.99,
    tag: null,
    desc: 'Digital version. Start reading in minutes.',
    fullDesc: "The digital edition of the Itty Bitty Book. Perfect for reading on any device. Get instant access to the core principles you can apply immediately.",
    includes: ['PDF + ePub + Kindle formats', 'Instant download access', 'Read on any device', 'Quick reference charts']
  }, {
    id: 6,
    title: 'The Optimal Life Workbook',
    subtitle: 'eBook Edition',
    price: 39,
    tag: 'NEW',
    desc: 'Exercises, assessments & action plans for real change.',
    fullDesc: 'Transform knowledge into action with this hands-on companion to The Optimal Life. Includes self-assessments, journaling prompts, goal-setting frameworks, and progress tracking tools.',
    includes: ['90-day transformation program', 'Self-assessment tools', 'Journaling prompts', 'Progress tracking sheets', 'Goal-setting frameworks']
  }, {
    id: 7,
    title: 'The Optimal Life Audio Program',
    subtitle: '18 Modules',
    price: 197,
    tag: 'COMPLETE',
    desc: 'Dr. Bizal guides you through the entire system, step by step.',
    fullDesc: 'Hear directly from Dr. Bizal as he walks you through every aspect of the Optimal Life system. 18 in-depth modules covering mindset, nutrition, movement, relationships, and purpose.',
    includes: ['18 audio modules (12+ hours)', 'Downloadable MP3 files', 'Companion PDF guides', 'Lifetime access', 'Bonus Q&A recordings']
  }, {
    id: 8,
    title: 'The Complete Optimal Life Series',
    subtitle: 'Everything Included',
    price: 249,
    tag: 'BEST VALUE',
    desc: 'Your complete transformation toolkit. Save over $50.',
    fullDesc: 'Everything you need for total transformation: All books, workbook, and the complete 18-module Audio Program. The ultimate investment in your health and potential.',
    includes: ['Signed Paperback Book', 'eBook (all formats)', 'Special Edition eBook', 'Itty Bitty Pocket Guide & eBook', 'Interactive Workbook', 'Complete Audio Program (18 modules)', 'Priority email support']
  }];
  var mentoringTiers = [{
    id: 'foundations',
    tier: 'FOUNDATIONS',
    price: '$5,000',
    duration: '4 Weeks',
    features: ['Comprehensive wellness assessment', 'Personalized transformation plan', '4 private 1:1 sessions', 'Complete book & audio bundle', 'Email support'],
    cta: 'Apply Now',
    desc: 'Perfect for individuals ready to build a strong foundation for lasting health transformation.'
  }, {
    id: 'transformation',
    tier: 'TRANSFORMATION',
    price: '$15,000 - $25,000',
    duration: '90 Days',
    features: ['Deep-dive diagnostic protocol', 'Weekly private sessions', 'Custom lifestyle protocols', 'Unlimited messaging access', 'Progress tracking & accountability', 'Monthly review sessions'],
    cta: 'Schedule Consultation',
    featured: true,
    desc: 'Our most popular program for those committed to profound, lasting change in body, mind, and spirit.'
  }, {
    id: 'concierge',
    tier: 'CONCIERGE ELITE',
    price: '$50,000 - $100,000',
    duration: '12 Months',
    features: ['Direct 24/7 access to Dr. Bizal', 'Quarterly wellness retreats', 'Family wellness planning', 'Executive network introductions', 'Legacy health blueprint', 'White-glove coordination'],
    cta: 'Private Inquiry',
    desc: 'For executives and high-net-worth individuals seeking the ultimate in personalized wellness partnership.'
  }];
  var testimonials = [{
    quote: "After 36 years, you convinced me I was important above all other things. 100+ lbs lost and my life transformed.",
    author: "John D.",
    location: "Oregon"
  }, {
    quote: "My son read it front to back and carries it everywhere. He's finally content and creating happiness for himself.",
    author: "Connie K.",
    location: "California"
  }, {
    quote: "I'm in better shape at 32 than I was at 20. Your program has been a blessing.",
    author: "Mike G.",
    location: "Washington D.C."
  }, {
    quote: "The Wholistic Health Model is easy to understand, revolutionary, and fundamental to creating a totally vibrant healthy life.",
    author: "Kardena Pauza",
    location: "Ms America Fitness 2006-07"
  }];
  var colleagueEndorsements = [{
    quote: "Your seminar was intelligent, informative, well researched and uplifting. You are doing good work.",
    author: "Dr. Pamella Joy Foster",
    title: "D.C.",
    year: "2007"
  }, {
    quote: "A very inspiring speaker and were prepared to give the audience just what 'the doctor ordered.' Thank you for your enthusiasm and sagemanship.",
    author: "Dr. Greg Ball",
    title: "D.C.",
    year: "2007"
  }, {
    quote: "Thank you for inspiring us to be better human beings, better doctors and even better to each other. You are a valuable asset to our world.",
    author: "Dr. Ann Clevinger",
    title: "D.C.",
    year: "2006"
  }, {
    quote: "You were the real deal, talked the talk and walked the walk. I would like your assistance and guidance in helping me get back on track of my true passion.",
    author: "Dr. Sayel Fakhoury",
    title: "D.C.",
    year: "2006"
  }, {
    quote: "Your energy, passion, and vibrant health were very motivating. I look forward to implementing some of the changes inspired by your talk both with myself and family and with my patients.",
    author: "Dr. Curt Collins",
    title: "D.C.",
    year: "2006"
  }, {
    quote: "You exude such loving energy and vitality and are very inspiring. You touch people more than you know.",
    author: "Dr. Michele Lesser",
    title: "D.C.",
    year: "2007"
  }];
  useEffect(function () {
    var handleScroll = function handleScroll() {
      return setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(function () {
    var interval = setInterval(function () {
      setActiveTestimonial(function (prev) {
        return (prev + 1) % 4;
      });
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  useEffect(function () {
    var endorseTimer = setInterval(function () {
      setEndorseIndex(function (prev) {
        return (prev + 1) % 5;
      });
    }, 6000);
    return function () {
      return clearInterval(endorseTimer);
    };
  }, []);
  useEffect(function () {
    var colleagueTimer = setInterval(function () {
      setColleagueIndex(function (prev) {
        return (prev + 1) % 6;
      });
    }, 6000);
    return function () {
      return clearInterval(colleagueTimer);
    };
  }, []);
  var addToCart = function addToCart(product) {
    var shopifyItem = window.shopifyProducts && window.shopifyProducts[product.id];
    if (shopifyItem && shopifyItem.variantId) {
      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: shopifyItem.variantId,
          quantity: 1
        })
      }).then(function (r) {
        return r.json();
      }).then(function (lineItem) {
        var shopifyImage = lineItem.featured_image ? lineItem.featured_image.url : null;
        setCart(function (prev) {
          var existing = prev.find(function (item) {
            return item.id === product.id;
          });
          if (existing) {
            return prev.map(function (item) {
              return item.id === product.id ? _objectSpread(_objectSpread({}, item), {}, {
                quantity: item.quantity + 1
              }) : item;
            });
          }
          return [].concat(_toConsumableArray(prev), [_objectSpread(_objectSpread({}, product), {}, {
            quantity: 1,
            shopifyImage: shopifyImage
          })]);
        });
      }).catch(function (err) {
        return console.error('Cart add failed:', err);
      });
    } else {
      setCart(function (prev) {
        var existing = prev.find(function (item) {
          return item.id === product.id;
        });
        if (existing) {
          return prev.map(function (item) {
            return item.id === product.id ? _objectSpread(_objectSpread({}, item), {}, {
              quantity: item.quantity + 1
            }) : item;
          });
        }
        return [].concat(_toConsumableArray(prev), [_objectSpread(_objectSpread({}, product), {}, {
          quantity: 1
        })]);
      });
    }
    setAddedToCart(product.id);
    setTimeout(function () {
      return setAddedToCart(null);
    }, 2000);
  };
  var removeFromCart = function removeFromCart(productId) {
    var shopifyItem = window.shopifyProducts && window.shopifyProducts[productId];
    if (shopifyItem && shopifyItem.variantId) {
      fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: shopifyItem.variantId,
          quantity: 0
        })
      }).catch(function (err) {
        return console.error('Cart remove failed:', err);
      });
    }
    setCart(function (prev) {
      return prev.filter(function (item) {
        return item.id !== productId;
      });
    });
  };
  var updateQuantity = function updateQuantity(productId, delta) {
    setCart(function (prev) {
      return prev.map(function (item) {
        if (item.id === productId) {
          var newQty = item.quantity + delta;
          return newQty > 0 ? _objectSpread(_objectSpread({}, item), {}, {
            quantity: newQty
          }) : item;
        }
        return item;
      }).filter(function (item) {
        return item.quantity > 0;
      });
    });
  };
  var cartTotal = cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
  var cartCount = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);
  useEffect(function () {
    var initPlayer = function initPlayer() {
      if (ytPlayerDivRef.current && window.YT && window.YT.Player) {
        ytPlayerRef.current = new window.YT.Player(ytPlayerDivRef.current, {
          videoId: 'g-W5zjDuZuM',
          playerVars: {
            autoplay: 0,
            controls: 0,
            playsinline: 1
          },
          events: {
            onReady: function onReady() {}
          }
        });
      }
    };
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
    }
  }, []);
  var handleAudioPlay = function handleAudioPlay() {
    setAudioModal(true);
    if (ytPlayerRef.current && ytPlayerRef.current.playVideo) {
      ytPlayerRef.current.playVideo();
    }
  };
  var handleAudioStop = function handleAudioStop() {
    setAudioModal(false);
    if (ytPlayerRef.current && ytPlayerRef.current.stopVideo) {
      ytPlayerRef.current.stopVideo();
    }
  };
  var scrollToSection = function scrollToSection(sectionId) {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    setTimeout(function () {
      var _refs$sectionId;
      var refs = {
        shop: shopRef,
        mentoring: mentoringRef,
        philosophy: philosophyRef
      };
      (_refs$sectionId = refs[sectionId]) === null || _refs$sectionId === void 0 || (_refs$sectionId = _refs$sectionId.current) === null || _refs$sectionId === void 0 || _refs$sectionId.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  var navigateTo = function navigateTo(page) {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  var handleMentoringSubmit = function handleMentoringSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(function () {
      setFormSubmitted(false);
      setMentoringModal(null);
      setMentoringForm({
        name: '',
        email: '',
        phone: '',
        goals: '',
        timeline: '',
        investment: ''
      });
    }, 3000);
  };
  var handleMovementSubmit = function handleMovementSubmit(e) {
    e.preventDefault();
    setMovementSubmitted(true);
    setTimeout(function () {
      setMovementSubmitted(false);
      setMovementForm({
        name: '',
        email: '',
        role: ''
      });
    }, 4000);
  };
  var styles = "\n        .btn-primary {\n          background: linear-gradient(135deg, #0d5c3f 0%, #0a4a33 100%);\n          color: #faf9f6;\n          border: none;\n          padding: 16px 32px;\n          font-family: 'Outfit', sans-serif;\n          font-size: 13px;\n          font-weight: 600;\n          letter-spacing: 2px;\n          text-transform: uppercase;\n          cursor: pointer;\n          transition: all 0.3s ease;\n          border-radius: 4px;\n        }\n        .btn-primary:hover {\n          transform: translateY(-2px);\n          box-shadow: 0 10px 30px rgba(13, 92, 63, 0.3);\n        }\n        .btn-secondary {\n          background: transparent;\n          color: #faf9f6;\n          border: 1px solid #faf9f6;\n          padding: 16px 32px;\n          font-family: 'Outfit', sans-serif;\n          font-size: 13px;\n          font-weight: 600;\n          letter-spacing: 2px;\n          text-transform: uppercase;\n          cursor: pointer;\n          transition: all 0.3s ease;\n          border-radius: 4px;\n        }\n        .btn-secondary:hover {\n          background: #faf9f6;\n          color: #0a0a0a;\n        }\n        .nav-link {\n          background: none;\n          border: none;\n          color: #faf9f6;\n          font-family: 'Outfit', sans-serif;\n          font-size: 13px;\n          font-weight: 500;\n          letter-spacing: 1px;\n          cursor: pointer;\n          transition: color 0.3s ease;\n          text-transform: uppercase;\n        }\n        .nav-link:hover { color: #d4af37; }\n        .section-divider {\n          width: 60px;\n          height: 2px;\n          background: linear-gradient(90deg, #d4af37, transparent);\n          margin: 20px auto 0;\n        }\n        .card-dark {\n          background: linear-gradient(145deg, #141414, #1a1a1a);\n          border: 1px solid #2a2a2a;\n          border-radius: 8px;\n          transition: all 0.4s ease;\n        }\n        .hover-lift:hover {\n          transform: translateY(-8px);\n          border-color: rgba(212, 175, 55, 0.3);\n          box-shadow: 0 20px 40px rgba(0,0,0,0.3);\n        }\n        .modal-overlay {\n          position: fixed;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background: rgba(0,0,0,0.85);\n          z-index: 1000;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          padding: 20px;\n          backdrop-filter: blur(10px);\n        }\n        .modal-content {\n          background: linear-gradient(145deg, #141414, #1a1a1a);\n          border: 1px solid #2a2a2a;\n          border-radius: 12px;\n          max-width: 600px;\n          width: 100%;\n          max-height: 90vh;\n          overflow-y: auto;\n          position: relative;\n        }\n        .cart-drawer {\n          position: fixed;\n          top: 0;\n          right: 0;\n          width: 400px;\n          max-width: 100%;\n          height: 100vh;\n          background: linear-gradient(180deg, #141414, #0a0a0a);\n          border-left: 1px solid #2a2a2a;\n          z-index: 1001;\n          transform: translateX(100%);\n          transition: transform 0.3s ease;\n          display: flex;\n          flex-direction: column;\n        }\n        .cart-drawer.open { transform: translateX(0); }\n        input, textarea, select {\n          background: #0a0a0a;\n          border: 1px solid #2a2a2a;\n          color: #faf9f6;\n          padding: 14px 16px;\n          font-family: 'Outfit', sans-serif;\n          font-size: 15px;\n          border-radius: 4px;\n          width: 100%;\n          transition: border-color 0.3s ease;\n        }\n        input:focus, textarea:focus, select:focus {\n          outline: none;\n          border-color: #d4af37;\n        }\n        input::placeholder, textarea::placeholder { color: #505050; }\n        select option { background: #0a0a0a; color: #faf9f6; }\n        .toast {\n          position: fixed;\n          bottom: 30px;\n          right: 30px;\n          background: #0d5c3f;\n          color: #faf9f6;\n          padding: 16px 24px;\n          border-radius: 8px;\n          z-index: 1002;\n          animation: slideIn 0.3s ease;\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          box-shadow: 0 10px 40px rgba(0,0,0,0.3);\n        }\n        @keyframes slideIn {\n          from { transform: translateX(100%); opacity: 0; }\n          to { transform: translateX(0); opacity: 1; }\n        }\n        @keyframes pulse {\n          0%, 100% { transform: scale(1); }\n          50% { transform: scale(1.05); }\n        }\n        @keyframes audioWave {\n          0% { transform: scaleY(0.4); }\n          100% { transform: scaleY(1.2); }\n        }\n        @media (max-width: 768px) {\n          .desktop-nav { display: none !important; }\n          .mobile-menu-btn { display: block !important; }\n          .hero-grid { grid-template-columns: 1fr !important; }\n          .about-grid { grid-template-columns: 1fr !important; }\n          .movement-grid { grid-template-columns: 1fr !important; }\n          .pillar-grid { grid-template-columns: 1fr !important; }\n        }\n      ";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0a0a0a',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("style", null, styles), addedToCart && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px'
    }
  }, "\u2713"), "Added to cart"), /*#__PURE__*/React.createElement("div", {
    className: "cart-drawer ".concat(cartOpen ? 'open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px',
      borderBottom: '1px solid #2a2a2a',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '18px',
      fontWeight: '600'
    }
  }, "Your Cart (", cartCount, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCartOpen(false);
    },
    style: {
      background: 'none',
      border: 'none',
      color: '#faf9f6',
      fontSize: '28px',
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '20px'
    }
  }, cart.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#707070'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '48px',
      marginBottom: '20px'
    }
  }, "\uD83D\uDED2"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "Your cart is empty"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setCartOpen(false);
      scrollToSection('shop');
    },
    className: "btn-primary",
    style: {
      padding: '12px 24px'
    }
  }, "Browse Products")) : cart.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      style: {
        display: 'flex',
        gap: '15px',
        padding: '20px 0',
        borderBottom: '1px solid #1a1a1a'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '70px',
        height: '70px',
        background: '#1a1a1a',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        overflow: 'hidden'
      }
    }, item.shopifyImage ? /*#__PURE__*/React.createElement("img", {
      src: item.shopifyImage,
      alt: item.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '24px'
      }
    }, "\uD83D\uDCDA")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: '14px',
        fontWeight: '600',
        marginBottom: '4px'
      }
    }, item.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '12px',
        color: '#707070',
        marginBottom: '10px'
      }
    }, item.subtitle), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return updateQuantity(item.id, -1);
      },
      style: {
        width: '28px',
        height: '28px',
        background: '#1a1a1a',
        border: '1px solid #2a2a2a',
        color: '#faf9f6',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }
    }, "-"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        minWidth: '20px',
        textAlign: 'center'
      }
    }, item.quantity), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return updateQuantity(item.id, 1);
      },
      style: {
        width: '28px',
        height: '28px',
        background: '#1a1a1a',
        border: '1px solid #2a2a2a',
        color: '#faf9f6',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }
    }, "+"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeFromCart(item.id);
      },
      style: {
        marginLeft: 'auto',
        background: 'none',
        border: 'none',
        color: '#707070',
        fontSize: '12px',
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, "Remove"))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '16px',
        fontWeight: '600',
        flexShrink: 0
      }
    }, "$", (item.price * item.quantity).toFixed(2)));
  })), cart.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      borderTop: '1px solid #2a2a2a',
      background: '#0f0f0f'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#a0a0a0'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '24px',
      fontWeight: '700'
    }
  }, "$", cartTotal.toFixed(2))), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    style: {
      width: '100%',
      marginBottom: '10px'
    },
    onClick: function onClick() {
      return window.location.href = '/cart';
    }
  }, "Checkout \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '11px',
      color: '#505050',
      textAlign: 'center'
    }
  }, "Secure checkout powered by Stripe"))), cartOpen && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setCartOpen(false);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 1000
    }
  }), selectedProduct && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: function onClick() {
      return setSelectedProduct(null);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      padding: '40px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedProduct(null);
    },
    style: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      color: '#faf9f6',
      fontSize: '28px',
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\xD7"), selectedProduct.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      background: selectedProduct.tag === 'BESTSELLER' ? '#d4af37' : selectedProduct.tag === 'BEST VALUE' ? '#0d5c3f' : 'rgba(212, 175, 55, 0.2)',
      color: selectedProduct.tag === 'BESTSELLER' || selectedProduct.tag === 'BEST VALUE' ? '#0a0a0a' : '#d4af37',
      padding: '4px 12px',
      borderRadius: '3px',
      fontSize: '10px',
      fontWeight: '700',
      letterSpacing: '1px',
      marginBottom: '20px'
    }
  }, selectedProduct.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: '#d4af37',
      letterSpacing: '2px',
      marginBottom: '8px'
    }
  }, selectedProduct.subtitle), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '32px',
      marginBottom: '20px'
    }
  }, selectedProduct.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      lineHeight: '1.8',
      marginBottom: '30px'
    }
  }, selectedProduct.fullDesc), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0a0a0a',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '12px',
      letterSpacing: '2px',
      color: '#d4af37',
      marginBottom: '15px'
    }
  }, "WHAT'S INCLUDED"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none'
    }
  }, selectedProduct.includes.map(function (item, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        padding: '8px 0',
        color: '#a0a0a0',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#0d5c3f'
      }
    }, "\u2713"), " ", item);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '36px',
      fontWeight: '800'
    }
  }, "$", selectedProduct.price), selectedProduct.id === 1 ? /*#__PURE__*/React.createElement("a", {
    href: "https://www.amazon.com/Optimal-Life-Empowering-Healing-Longevity/dp/B0D98TNN5L",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-primary",
    style: {
      textDecoration: 'none'
    },
    onClick: function onClick() {
      return setSelectedProduct(null);
    }
  }, "Buy on Amazon") : selectedProduct.id === 2 ? /*#__PURE__*/React.createElement("a", {
    href: "https://www.amazon.com/Optimal-Life-Empowering-Healing-Longevity-ebook/dp/B0D971R8HD",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-primary",
    style: {
      textDecoration: 'none'
    },
    onClick: function onClick() {
      return setSelectedProduct(null);
    }
  }, "Buy on Amazon") : selectedProduct.id === 4 ? /*#__PURE__*/React.createElement("a", {
    href: "https://www.amazon.com/Your-Amazing-Itty-Bitty-Optimal/dp/1950326934",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-primary",
    style: {
      textDecoration: 'none'
    },
    onClick: function onClick() {
      return setSelectedProduct(null);
    }
  }, "Buy on Amazon") : selectedProduct.id === 5 ? /*#__PURE__*/React.createElement("a", {
    href: "https://www.amazon.com/Your-Amazing-Itty-Bitty-Optimal-ebook/dp/B0BDR6XBVC",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-primary",
    style: {
      textDecoration: 'none'
    },
    onClick: function onClick() {
      return setSelectedProduct(null);
    }
  }, "Buy on Amazon") : /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: function onClick() {
      addToCart(selectedProduct);
      setSelectedProduct(null);
    }
  }, "Add to Cart")))), mentoringModal && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: function onClick() {
      return !formSubmitted && setMentoringModal(null);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      padding: '40px'
    }
  }, formSubmitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #0d5c3f, #0a4a33)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      fontSize: '36px'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '28px',
      marginBottom: '15px'
    }
  }, "Application Received"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0'
    }
  }, "Thank you for your interest! We'll be in touch within 24-48 hours.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMentoringModal(null);
    },
    style: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      color: '#faf9f6',
      fontSize: '28px',
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: '#d4af37',
      letterSpacing: '2px',
      marginBottom: '8px'
    }
  }, mentoringModal.tier), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '28px',
      marginBottom: '10px'
    }
  }, "Apply for Mentoring"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#707070',
      marginBottom: '30px'
    }
  }, mentoringModal.price, " \xB7 ", mentoringModal.duration), /*#__PURE__*/React.createElement("form", {
    name: "mentoring-inquiry",
    method: "POST",
    "data-netlify": "true",
    onSubmit: handleMentoringSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "mentoring-inquiry"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "program-tier",
    value: mentoringModal.tier
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '12px',
      letterSpacing: '1px',
      color: '#a0a0a0',
      marginBottom: '8px'
    }
  }, "FULL NAME *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    required: true,
    value: mentoringForm.name,
    onChange: function onChange(e) {
      return setMentoringForm(_objectSpread(_objectSpread({}, mentoringForm), {}, {
        name: e.target.value
      }));
    },
    placeholder: "Your full name"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '12px',
      letterSpacing: '1px',
      color: '#a0a0a0',
      marginBottom: '8px'
    }
  }, "EMAIL *"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    required: true,
    value: mentoringForm.email,
    onChange: function onChange(e) {
      return setMentoringForm(_objectSpread(_objectSpread({}, mentoringForm), {}, {
        email: e.target.value
      }));
    },
    placeholder: "your@email.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '12px',
      letterSpacing: '1px',
      color: '#a0a0a0',
      marginBottom: '8px'
    }
  }, "PHONE"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    name: "phone",
    value: mentoringForm.phone,
    onChange: function onChange(e) {
      return setMentoringForm(_objectSpread(_objectSpread({}, mentoringForm), {}, {
        phone: e.target.value
      }));
    },
    placeholder: "(555) 123-4567"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '12px',
      letterSpacing: '1px',
      color: '#a0a0a0',
      marginBottom: '8px'
    }
  }, "WHAT ARE YOUR PRIMARY HEALTH GOALS? *"), /*#__PURE__*/React.createElement("textarea", {
    name: "goals",
    required: true,
    rows: 4,
    value: mentoringForm.goals,
    onChange: function onChange(e) {
      return setMentoringForm(_objectSpread(_objectSpread({}, mentoringForm), {}, {
        goals: e.target.value
      }));
    },
    placeholder: "Tell us about your goals and what you hope to achieve...",
    style: {
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '12px',
      letterSpacing: '1px',
      color: '#a0a0a0',
      marginBottom: '8px'
    }
  }, "IDEAL START DATE"), /*#__PURE__*/React.createElement("select", {
    name: "timeline",
    value: mentoringForm.timeline,
    onChange: function onChange(e) {
      return setMentoringForm(_objectSpread(_objectSpread({}, mentoringForm), {}, {
        timeline: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select timeline..."), /*#__PURE__*/React.createElement("option", {
    value: "immediate"
  }, "Ready to start immediately"), /*#__PURE__*/React.createElement("option", {
    value: "1month"
  }, "Within the next month"), /*#__PURE__*/React.createElement("option", {
    value: "3months"
  }, "Within 3 months"), /*#__PURE__*/React.createElement("option", {
    value: "exploring"
  }, "Just exploring options"))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-primary",
    style: {
      width: '100%',
      marginTop: '10px'
    }
  }, "Submit Application"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '12px',
      color: '#505050',
      textAlign: 'center',
      marginTop: '20px'
    }
  }, "Your information is confidential and secure."))))), audioModal && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 999,
      background: 'linear-gradient(135deg, #141414, #1e1e1e)',
      border: '1px solid rgba(212,175,55,0.4)',
      borderRadius: '50px',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
      backdropFilter: 'blur(12px)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px'
    }
  }, "\uD83C\uDF99"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '2px',
      color: '#d4af37',
      marginBottom: '2px'
    }
  }, "NOW PLAYING"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: '600',
      color: '#faf9f6',
      fontFamily: "'Outfit', sans-serif"
    }
  }, "A Message from Dr. Bizal")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '3px'
    }
  }, [4, 7, 10, 6, 12, 8, 5, 9, 7, 4].map(function (h, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: '3px',
        borderRadius: '2px',
        background: '#d4af37',
        height: "".concat(h * 2, "px"),
        opacity: 0.7,
        animation: "audioWave ".concat(0.5 + i * 0.08, "s ease-in-out infinite alternate")
      }
    });
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleAudioStop,
    style: {
      background: 'rgba(255,255,255,0.08)',
      border: 'none',
      color: '#a0a0a0',
      fontSize: '18px',
      cursor: 'pointer',
      lineHeight: 1,
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, "\xD7")), videoModal && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: function onClick() {
      return setVideoModal(null);
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: '#0a0a0a',
      borderRadius: '12px',
      width: '90%',
      maxWidth: '900px',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setVideoModal(null);
    },
    style: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'rgba(0,0,0,0.5)',
      border: 'none',
      color: '#faf9f6',
      fontSize: '24px',
      cursor: 'pointer',
      lineHeight: 1,
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      zIndex: 10
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: '#d4af37',
      letterSpacing: '2px',
      marginBottom: '5px'
    }
  }, "DOC AROUND THE BLOCK \xB7 1991"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#faf9f6'
    }
  }, videoModal.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.youtube.com/embed/".concat(videoModal.embedId, "?autoplay=1"),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none'
    },
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: videoModal.title
  })))), freeChapterModal && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: function onClick() {
      return !freeChapterSubmitted && setFreeChapterModal(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'linear-gradient(145deg, #141414, #1a1a1a)',
      borderRadius: '12px',
      padding: '50px',
      maxWidth: '500px',
      width: '90%',
      position: 'relative',
      border: '1px solid #2a2a2a'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setFreeChapterModal(false);
      setFreeChapterSubmitted(false);
      setFreeChapterForm({
        name: '',
        email: ''
      });
    },
    style: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      color: '#faf9f6',
      fontSize: '28px',
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\xD7"), freeChapterSubmitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '60px',
      marginBottom: '20px'
    }
  }, "\uD83D\uDCD6"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '28px',
      marginBottom: '15px',
      color: '#faf9f6'
    }
  }, "Check Your Inbox!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      lineHeight: '1.7'
    }
  }, "Your free chapter of The Optimal Life is on its way. Start your transformation journey today.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "FREE DOWNLOAD"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '28px',
      marginTop: '10px',
      marginBottom: '10px',
      color: '#faf9f6'
    }
  }, "Get Your Free Chapter"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      fontSize: '15px'
    }
  }, "Enter your details to receive a free chapter of The Optimal Life.")), /*#__PURE__*/React.createElement("form", {
    name: "free-chapter",
    method: "POST",
    "data-netlify": "true",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      var formData = new FormData(e.target);
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      }).then(function () {
        return setFreeChapterSubmitted(true);
      }).catch(function () {
        return setFreeChapterSubmitted(true);
      });
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "free-chapter"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "subject",
    value: "Free Chapter Request from DrBizal.com"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '13px',
      color: '#a0a0a0',
      letterSpacing: '1px'
    }
  }, "NAME"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    required: true,
    value: freeChapterForm.name,
    onChange: function onChange(e) {
      return setFreeChapterForm(_objectSpread(_objectSpread({}, freeChapterForm), {}, {
        name: e.target.value
      }));
    },
    style: {
      width: '100%',
      background: '#0a0a0a',
      border: '1px solid #2a2a2a',
      padding: '14px 16px',
      borderRadius: '4px',
      color: '#faf9f6',
      fontSize: '15px',
      fontFamily: "'Outfit', sans-serif"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '13px',
      color: '#a0a0a0',
      letterSpacing: '1px'
    }
  }, "EMAIL"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    required: true,
    value: freeChapterForm.email,
    onChange: function onChange(e) {
      return setFreeChapterForm(_objectSpread(_objectSpread({}, freeChapterForm), {}, {
        email: e.target.value
      }));
    },
    style: {
      width: '100%',
      background: '#0a0a0a',
      border: '1px solid #2a2a2a',
      padding: '14px 16px',
      borderRadius: '4px',
      color: '#faf9f6',
      fontSize: '15px',
      fontFamily: "'Outfit', sans-serif"
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-primary",
    style: {
      width: '100%',
      padding: '16px'
    }
  }, "Send Me The Free Chapter"))))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(10, 10, 10, 0.98)',
      zIndex: 99,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px'
    }
  }, ['About', 'Philosophy', 'Mentoring', 'Shop', 'Movement', 'Media'].map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: function onClick() {
        if (item === 'About' || item === 'Media' || item === 'Movement') {
          navigateTo(item.toLowerCase());
        } else {
          scrollToSection(item.toLowerCase());
        }
      },
      style: {
        background: 'none',
        border: 'none',
        color: '#faf9f6',
        fontSize: '24px',
        fontWeight: '500',
        cursor: 'pointer',
        fontFamily: "'Outfit', sans-serif"
      }
    }, item);
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    style: {
      marginTop: '20px'
    },
    onClick: function onClick() {
      return scrollToSection('mentoring');
    }
  }, "Work With Me")), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: isScrolled ? '15px 5%' : '25px 5%',
      background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid #1a1a1a' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navigateTo('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      border: '2px solid #d4af37',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: drBizalPhoto,
    alt: "Dr. Bizal",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: '700',
      fontSize: '18px',
      color: '#faf9f6',
      letterSpacing: '0.5px'
    }
  }, "DR. BIZAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '2px',
      color: '#d4af37'
    }
  }, "THE WELLNESS OG"))), /*#__PURE__*/React.createElement("button", {
    className: "mobile-menu-btn",
    onClick: function onClick() {
      return setMobileMenuOpen(!mobileMenuOpen);
    },
    style: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#faf9f6',
      fontSize: '28px',
      cursor: 'pointer',
      padding: '5px'
    }
  }, mobileMenuOpen ? '×' : '☰'), /*#__PURE__*/React.createElement("div", {
    className: "desktop-nav",
    style: {
      display: 'flex',
      gap: '35px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    onClick: function onClick() {
      return navigateTo('about');
    },
    style: {
      color: currentPage === 'about' ? '#d4af37' : '#faf9f6'
    }
  }, "About"), /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    onClick: function onClick() {
      return scrollToSection('philosophy');
    }
  }, "Philosophy"), /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    onClick: function onClick() {
      return scrollToSection('mentoring');
    }
  }, "Mentoring"), /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    onClick: function onClick() {
      return scrollToSection('shop');
    }
  }, "Shop"), /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    onClick: function onClick() {
      return navigateTo('movement');
    },
    style: {
      color: currentPage === 'movement' ? '#d4af37' : '#faf9f6'
    }
  }, "Movement"), /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    onClick: function onClick() {
      return navigateTo('media');
    },
    style: {
      color: currentPage === 'media' ? '#d4af37' : '#faf9f6'
    }
  }, "Media"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCartOpen(true);
    },
    style: {
      background: 'none',
      border: 'none',
      color: '#faf9f6',
      cursor: 'pointer',
      position: 'relative',
      padding: '8px',
      fontSize: '20px'
    }
  }, "\uD83D\uDED2", cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '0',
      right: '0',
      background: '#d4af37',
      color: '#0a0a0a',
      fontSize: '10px',
      fontWeight: '700',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    style: {
      padding: '12px 24px',
      fontSize: '12px'
    },
    onClick: function onClick() {
      return scrollToSection('mentoring');
    }
  }, "Work With Me"))), currentPage === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 5%',
      background: 'radial-gradient(ellipse at 20% 50%, rgba(13, 92, 63, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 40%), linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '8px 20px',
      background: 'rgba(212, 175, 55, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '30px',
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "THE WELLNESS OG \xB7 EST. 1984")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(48px, 6vw, 80px)',
      fontWeight: '400',
      lineHeight: '1.1',
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "40 Years."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "One Mission."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Your Health.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: '1.9',
      color: '#a0a0a0',
      maxWidth: '500px',
      marginBottom: '40px'
    }
  }, "Dr. Stephen C. Bizal, D.C. has spent four decades helping people connect the dots between their choices, their health, and their highest potential."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: function onClick() {
      return scrollToSection('shop');
    }
  }, "Explore The Work \u2192"), /*#__PURE__*/React.createElement("button", {
    className: "btn-secondary",
    onClick: function onClick() {
      return scrollToSection('mentoring');
    }
  }, "Work With Dr. Bizal")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleAudioPlay,
    style: {
      background: 'none',
      border: '1px solid rgba(212,175,55,0.4)',
      color: '#d4af37',
      padding: '12px 24px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '2px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      fontFamily: "'Outfit', sans-serif"
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.borderColor = '#d4af37';
      e.currentTarget.style.background = 'rgba(212,175,55,0.08)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)';
      e.currentTarget.style.background = 'none';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '16px'
    }
  }, "\uD83C\uDF99"), " HEAR A MESSAGE FROM DR. BIZAL")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '60px',
      display: 'flex',
      gap: '50px',
      flexWrap: 'wrap'
    }
  }, [{
    num: '10K+',
    label: 'Lives Transformed'
  }, {
    num: '40+',
    label: 'Years Experience'
  }, {
    num: '4',
    label: 'Core Realizations'
  }].map(function (stat, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '32px',
        fontWeight: '800',
        color: '#d4af37'
      }
    }, stat.num), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        letterSpacing: '1px',
        color: '#707070',
        textTransform: 'uppercase'
      }
    }, stat.label));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-30px',
      right: '-30px',
      width: '100%',
      height: '100%',
      border: '2px solid rgba(212, 175, 55, 0.2)',
      borderRadius: '12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 40px 80px rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: drBizalPhoto,
    alt: "Dr. Stephen Bizal",
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      padding: '40px 30px 30px',
      background: 'linear-gradient(transparent, rgba(10,10,10,0.95))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '2px',
      color: '#d4af37',
      marginBottom: '5px'
    }
  }, "AUTHOR & FOUNDER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '24px'
    }
  }, "Dr. Stephen C. Bizal, D.C.")))))), /*#__PURE__*/React.createElement("section", {
    ref: philosophyRef,
    id: "philosophy",
    style: {
      padding: '120px 5%',
      background: 'linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '80px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "THE PHILOSOPHY"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "The Four ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Realizations")), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      maxWidth: '600px',
      margin: '30px auto 0',
      lineHeight: '1.8'
    }
  }, "After 40 years of research, practice and helping people, Dr. Bizal distilled the path to optimal health into four fundamental truths.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '25px'
    }
  }, [{
    num: '01',
    title: 'We Have a Gift',
    desc: "The body possesses an innate intelligence that organizes and maintains health. It's self-healing and self-regulating by design."
  }, {
    num: '02',
    title: "We're Designed to be Healthy",
    desc: 'Sickness is unnatural. The natural state of the human organism is one of health, vitality, and optimal function.'
  }, {
    num: '03',
    title: "We're More Than Bodies",
    desc: 'Spiritual, mental, emotional, and physical aspects are fully integrated. Any approach that ignores this is doomed to fail.'
  }, {
    num: '04',
    title: "We're 100% Responsible",
    desc: 'Everything we experience in life, including our health, we are contributing to the creation of in some way.'
  }].map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card-dark hover-lift",
      style: {
        padding: '40px',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '-20px',
        right: '-10px',
        fontSize: '120px',
        fontWeight: '900',
        color: 'rgba(212, 175, 55, 0.05)',
        fontFamily: "'Outfit', sans-serif"
      }
    }, item.num), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '50px',
        height: '50px',
        background: 'linear-gradient(135deg, rgba(13, 92, 63, 0.3), rgba(13, 92, 63, 0.1))',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px',
        border: '1px solid rgba(13, 92, 63, 0.5)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#d4af37',
        fontWeight: '700',
        fontSize: '18px'
      }
    }, item.num)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '22px',
        fontWeight: '600',
        marginBottom: '15px'
      }
    }, item.title), /*#__PURE__*/React.createElement("p", {
      style: {
        color: '#a0a0a0',
        lineHeight: '1.7',
        fontSize: '15px'
      }
    }, item.desc));
  })))), /*#__PURE__*/React.createElement("section", {
    ref: mentoringRef,
    id: "mentoring",
    style: {
      padding: '120px 5%',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(13, 92, 63, 0.1) 0%, transparent 50%), #0a0a0a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '80px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "PRIVATE MENTORING"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "Work ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Directly"), " With Dr. Bizal"), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.8'
    }
  }, "For those ready to transform their life and make a profound commitment to their health and potential, Dr. Bizal offers exclusive private mentoring experiences.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(145deg, #141414, #1a1a1a)',
      border: '1px solid #d4af37',
      borderRadius: '12px',
      padding: '40px 50px',
      maxWidth: '800px',
      margin: '0 auto 60px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '150px',
      height: '150px',
      background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600',
      marginBottom: '15px'
    }
  }, "START HERE"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '28px',
      fontWeight: '400',
      marginBottom: '10px'
    }
  }, "Private Discovery Session"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '36px',
      fontWeight: '800',
      color: '#d4af37',
      marginBottom: '15px'
    }
  }, "$349"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      lineHeight: '1.8',
      marginBottom: '25px',
      maxWidth: '600px',
      margin: '0 auto 25px'
    }
  }, "Begin with a one-on-one session where Dr. Bizal personally assesses your goals, health history, and recommends the right path forward. This investment is ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "fully credited"), " toward any mentoring program you choose."), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var item = window.shopifyProducts && window.shopifyProducts['discovery'];
      if (item && item.variantId) {
        fetch('/cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: item.variantId,
            quantity: 1
          })
        }).then(function () {
          window.location.href = '/cart';
        });
      } else {
        window.location.href = window.discoverySessionUrl || '/contact';
      }
    },
    className: "btn-primary",
    style: {
      padding: '16px 40px'
    }
  }, "Book Your Discovery Session")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '30px'
    }
  }, mentoringTiers.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      style: {
        background: item.featured ? 'linear-gradient(145deg, #0d5c3f, #0a4a33)' : 'linear-gradient(145deg, #141414, #1a1a1a)',
        border: item.featured ? '2px solid #d4af37' : '1px solid #2a2a2a',
        borderRadius: '8px',
        padding: '50px 40px',
        position: 'relative',
        transform: item.featured ? 'scale(1.02)' : 'none'
      }
    }, item.featured && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#d4af37',
        color: '#0a0a0a',
        padding: '6px 20px',
        borderRadius: '20px',
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '1px'
      }
    }, "MOST POPULAR"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        letterSpacing: '3px',
        color: item.featured ? '#faf9f6' : '#d4af37',
        marginBottom: '10px'
      }
    }, item.tier), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '36px',
        fontWeight: '800',
        marginBottom: '5px'
      }
    }, item.price), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '14px',
        color: item.featured ? 'rgba(255,255,255,0.7)' : '#707070',
        marginBottom: '30px'
      }
    }, item.duration), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        marginBottom: '40px'
      }
    }, item.features.map(function (feature, j) {
      return /*#__PURE__*/React.createElement("li", {
        key: j,
        style: {
          padding: '12px 0',
          borderBottom: "1px solid ".concat(item.featured ? 'rgba(255,255,255,0.1)' : '#2a2a2a'),
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '14px',
          color: item.featured ? '#faf9f6' : '#a0a0a0'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#d4af37'
        }
      }, "\u2713"), feature);
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMentoringModal(item);
      },
      style: {
        width: '100%',
        padding: '16px',
        background: item.featured ? '#d4af37' : 'transparent',
        border: item.featured ? 'none' : '1px solid #d4af37',
        color: item.featured ? '#0a0a0a' : '#d4af37',
        fontFamily: "'Outfit', sans-serif",
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '2px',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'all 0.3s ease'
      }
    }, item.cta.toUpperCase()));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '80px',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "TRANSFORMATIONS"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '50px'
    }
  }, "Lives ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Changed")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '200px'
    }
  }, testimonials.map(function (t, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        opacity: activeTestimonial === i ? 1 : 0,
        transform: activeTestimonial === i ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease',
        position: activeTestimonial === i ? 'relative' : 'absolute',
        top: 0,
        left: 0,
        right: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '24px',
        fontStyle: 'italic',
        lineHeight: '1.7',
        color: '#faf9f6',
        marginBottom: '30px'
      }
    }, "\"", t.quote, "\""), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#d4af37',
        fontWeight: '600'
      }
    }, t.author), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#707070',
        fontSize: '14px'
      }
    }, t.location));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '40px'
    }
  }, testimonials.map(function (_, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return setActiveTestimonial(i);
      },
      style: {
        width: activeTestimonial === i ? '40px' : '10px',
        height: '10px',
        borderRadius: '5px',
        background: activeTestimonial === i ? '#d4af37' : '#2a2a2a',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }
    });
  }))))), /*#__PURE__*/React.createElement("section", {
    ref: shopRef,
    id: "shop",
    style: {
      padding: '120px 5%',
      background: 'linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '80px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "THE SHOP"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "Tools for ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Transformation")), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "PRAISE FOR THE OPTIMAL LIFE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEndorseIndex(function (prev) {
        return (prev - 1 + bookEndorsements.length) % bookEndorsements.length;
      });
    },
    style: {
      position: 'absolute',
      left: '-50px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(212, 175, 55, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      color: '#d4af37',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '25px',
      overflow: 'hidden'
    }
  }, [0, 1, 2].map(function (offset) {
    var item = bookEndorsements[(endorseIndex + offset) % bookEndorsements.length];
    return /*#__PURE__*/React.createElement("div", {
      key: offset,
      style: {
        padding: '30px',
        background: 'linear-gradient(145deg, #141414, #1a1a1a)',
        border: '1px solid #2a2a2a',
        borderRadius: '8px',
        transition: 'all 0.5s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '36px',
        color: 'rgba(212, 175, 55, 0.3)',
        fontFamily: 'Georgia, serif',
        lineHeight: '1',
        marginBottom: '10px'
      }
    }, "\""), /*#__PURE__*/React.createElement("p", {
      style: {
        color: '#a0a0a0',
        lineHeight: '1.7',
        fontSize: '14px',
        marginBottom: '20px',
        fontStyle: 'italic'
      }
    }, item.quote), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#faf9f6',
        fontWeight: '600',
        fontSize: '14px'
      }
    }, item.author), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#707070',
        fontSize: '12px',
        marginTop: '4px'
      }
    }, item.title), item.location && /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#d4af37',
        fontSize: '11px',
        marginTop: '2px'
      }
    }, item.location)));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEndorseIndex(function (prev) {
        return (prev + 1) % bookEndorsements.length;
      });
    },
    style: {
      position: 'absolute',
      right: '-50px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(212, 175, 55, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      color: '#d4af37',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '30px'
    }
  }, bookEndorsements.map(function (_, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return setEndorseIndex(i);
      },
      style: {
        width: endorseIndex === i ? '24px' : '8px',
        height: '8px',
        borderRadius: '4px',
        background: endorseIndex === i ? '#d4af37' : '#2a2a2a',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }
    });
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px'
    }
  }, products.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      className: "card-dark hover-lift",
      style: {
        padding: '30px',
        position: 'relative',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return setSelectedProduct(item);
      }
    }, item.tag && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: item.tag === 'BESTSELLER' ? '#d4af37' : item.tag === 'BEST VALUE' ? '#0d5c3f' : 'rgba(212, 175, 55, 0.2)',
        color: item.tag === 'BESTSELLER' || item.tag === 'BEST VALUE' ? '#0a0a0a' : '#d4af37',
        padding: '4px 10px',
        borderRadius: '3px',
        fontSize: '10px',
        fontWeight: '700',
        letterSpacing: '1px'
      }
    }, item.tag), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '180px',
        background: 'linear-gradient(145deg, #1a1a1a, #252525)',
        borderRadius: '4px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    }, item.id === 1 || item.id === 2 ? /*#__PURE__*/React.createElement("img", {
      src: optimalLifeCover,
      alt: item.title,
      style: {
        height: '100%',
        objectFit: 'contain'
      }
    }) : item.id === 3 ? /*#__PURE__*/React.createElement("img", {
      src: specialEditionCover,
      alt: item.title,
      style: {
        height: '100%',
        objectFit: 'contain'
      }
    }) : item.id === 4 || item.id === 5 ? /*#__PURE__*/React.createElement("img", {
      src: ittyBittyCover,
      alt: item.title,
      style: {
        height: '100%',
        objectFit: 'contain'
      }
    }) : item.id === 6 ? /*#__PURE__*/React.createElement("img", {
      src: workbookCover,
      alt: item.title,
      style: {
        height: '100%',
        objectFit: 'contain'
      }
    }) : item.id === 7 ? /*#__PURE__*/React.createElement("img", {
      src: audioCover,
      alt: item.title,
      style: {
        height: '100%',
        objectFit: 'contain'
      }
    }) : item.id === 8 ? /*#__PURE__*/React.createElement("img", {
      src: bundleCover,
      alt: item.title,
      style: {
        height: '100%',
        objectFit: 'contain'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '40px',
        marginBottom: '5px'
      }
    }, "\uD83D\uDCDA"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '10px',
        color: '#707070',
        letterSpacing: '1px'
      }
    }, "CLICK TO VIEW"))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: '#d4af37',
        letterSpacing: '1px',
        marginBottom: '5px'
      }
    }, item.subtitle), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '10px'
      }
    }, item.title), /*#__PURE__*/React.createElement("p", {
      style: {
        color: '#707070',
        fontSize: '13px',
        lineHeight: '1.6',
        marginBottom: '20px'
      }
    }, item.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#faf9f6'
      }
    }, "$", item.price), item.id === 1 ? /*#__PURE__*/React.createElement("a", {
      href: "https://www.amazon.com/Optimal-Life-Empowering-Healing-Longevity/dp/B0D98TNN5L",
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        background: 'transparent',
        border: '1px solid #d4af37',
        color: '#d4af37',
        padding: '10px 20px',
        borderRadius: '3px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '1px',
        cursor: 'pointer',
        textDecoration: 'none'
      }
    }, "BUY ON AMAZON") : item.id === 2 ? /*#__PURE__*/React.createElement("a", {
      href: "https://www.amazon.com/Optimal-Life-Empowering-Healing-Longevity-ebook/dp/B0D971R8HD",
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        background: 'transparent',
        border: '1px solid #d4af37',
        color: '#d4af37',
        padding: '10px 20px',
        borderRadius: '3px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '1px',
        cursor: 'pointer',
        textDecoration: 'none'
      }
    }, "BUY ON AMAZON") : item.id === 4 ? /*#__PURE__*/React.createElement("a", {
      href: "https://www.amazon.com/Your-Amazing-Itty-Bitty-Optimal/dp/1950326934",
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        background: 'transparent',
        border: '1px solid #d4af37',
        color: '#d4af37',
        padding: '10px 20px',
        borderRadius: '3px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '1px',
        cursor: 'pointer',
        textDecoration: 'none'
      }
    }, "BUY ON AMAZON") : item.id === 5 ? /*#__PURE__*/React.createElement("a", {
      href: "https://www.amazon.com/Your-Amazing-Itty-Bitty-Optimal-ebook/dp/B0BDR6XBVC",
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        background: 'transparent',
        border: '1px solid #d4af37',
        color: '#d4af37',
        padding: '10px 20px',
        borderRadius: '3px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '1px',
        cursor: 'pointer',
        textDecoration: 'none'
      }
    }, "BUY ON AMAZON") : /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        addToCart(item);
      },
      style: {
        background: addedToCart === item.id ? '#0d5c3f' : 'transparent',
        border: '1px solid #d4af37',
        color: addedToCart === item.id ? '#faf9f6' : '#d4af37',
        padding: '10px 20px',
        borderRadius: '3px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '1px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }
    }, addedToCart === item.id ? '✓ ADDED' : 'ADD TO CART')));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 5%',
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a',
      borderBottom: '1px solid #1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "THE MOVEMENT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '30px'
    }
  }, "Health Reform ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "2026")), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      maxWidth: '700px',
      margin: '30px auto',
      lineHeight: '1.9',
      fontSize: '18px'
    }
  }, "Dr. Bizal founded a national movement to transform America's approach to creating health and wellness. Health Reform 2026 aims to shift the paradigm from disease management to true health optimization."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '24px',
      fontStyle: 'italic',
      color: '#faf9f6',
      padding: '30px 0',
      margin: '30px 0',
      borderTop: '1px solid #2a2a2a',
      borderBottom: '1px solid #2a2a2a'
    }
  }, "\"The future of healthcare isn't about treating disease. It's about creating health.\""), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navigateTo('movement');
    },
    className: "btn-primary",
    style: {
      textDecoration: 'none',
      display: 'inline-block'
    }
  }, "Join The Movement \u2192"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 5%',
      background: 'linear-gradient(135deg, #0d5c3f 0%, #0a4a33 100%)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-50%',
      right: '-10%',
      width: '600px',
      height: '600px',
      background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: '400',
      marginBottom: '20px'
    }
  }, "Ready to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Transform?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      opacity: '0.9',
      marginBottom: '40px',
      lineHeight: '1.8'
    }
  }, "Download a free chapter of The Optimal Life and discover the principles that have transformed thousands of lives over four decades."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-secondary",
    style: {
      background: '#d4af37',
      color: '#0a0a0a',
      borderColor: '#d4af37'
    },
    onClick: function onClick() {
      return setFreeChapterModal(true);
    }
  }, "Get Free Chapter"), /*#__PURE__*/React.createElement("button", {
    className: "btn-secondary",
    onClick: function onClick() {
      return setMentoringModal('discovery');
    }
  }, "Schedule a Call"))))), currentPage === 'about' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      padding: '160px 5% 80px',
      background: 'radial-gradient(ellipse at 30% 50%, rgba(13, 92, 63, 0.15) 0%, transparent 50%), linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid",
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '400px 1fr',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      right: '20px',
      bottom: '20px',
      border: '2px solid #d4af37',
      borderRadius: '8px',
      opacity: '0.3'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: '8px',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: drBizalPhoto,
    alt: "Dr. Stephen Bizal",
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "MEET DR. BIZAL"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(40px, 5vw, 60px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '30px',
      lineHeight: '1.2'
    }
  }, "The ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Wellness OG")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: '1.9',
      color: '#a0a0a0',
      marginBottom: '25px'
    }
  }, "For over 40 years, Dr. Stephen C. Bizal, D.C. has been at the forefront of functional medicine, integrative healthcare, and wellness lifestyle transformation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: '1.9',
      color: '#a0a0a0',
      marginBottom: '25px'
    }
  }, "His mission has always been simple: to help people \"connect the dots\" between their choices, their health, and their potential."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: '1.9',
      color: '#a0a0a0',
      marginBottom: '40px'
    }
  }, "As President & CEO of The Bizal Group, Inc., author of \"The Optimal Life,\" and founder of Health Reform 2026, Dr. Bizal continues to champion a revolutionary approach to creating health."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '40px',
      paddingTop: '30px',
      borderTop: '1px solid #2a2a2a',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#d4af37'
    }
  }, "40+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      letterSpacing: '1px',
      color: '#707070',
      textTransform: 'uppercase'
    }
  }, "Years in Practice")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#d4af37'
    }
  }, "D.C."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      letterSpacing: '1px',
      color: '#707070',
      textTransform: 'uppercase'
    }
  }, "Doctor of Chiropractic")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#d4af37'
    }
  }, "10K+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      letterSpacing: '1px',
      color: '#707070',
      textTransform: 'uppercase'
    }
  }, "Lives Transformed")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 5%',
      background: '#0f0f0f'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "THE JOURNEY"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "10 Years & ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "10,000 Hours")), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#a0a0a0',
      fontSize: '18px',
      lineHeight: '2'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '25px'
    }
  }, "\"I never set out to become an author. I'm a teacher at heart, and teachers teach. We teach what we believe, in our heart-of-hearts, will benefit others.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '25px'
    }
  }, "This work evolved organically over many years and many hours of personal, clinical, and academic pursuits with an insatiable appetite to understand the core principles for optimizing health, healing, and human potential."), /*#__PURE__*/React.createElement("p", null, "On this journey of self-discovery, I arrived at Four Realizations. These are the cornerstone for optimizing all health & healing, and reaching your highest human potential.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '60px',
      padding: '40px',
      background: 'linear-gradient(145deg, #141414, #1a1a1a)',
      border: '1px solid #2a2a2a',
      borderLeft: '4px solid #d4af37',
      borderRadius: '4px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '22px',
      fontStyle: 'italic',
      color: '#faf9f6',
      lineHeight: '1.7'
    }
  }, "\"Everything you experience in your life you are contributing to the creation of in some way, all of it... the good, the bad and the ugly.\"")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 5%',
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "ENDORSEMENTS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "What ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Colleagues"), " Say"), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setColleagueIndex(function (prev) {
        return (prev - 1 + colleagueEndorsements.length) % colleagueEndorsements.length;
      });
    },
    style: {
      position: 'absolute',
      left: '-50px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(212, 175, 55, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      color: '#d4af37',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '25px',
      overflow: 'hidden'
    }
  }, [0, 1, 2].map(function (offset) {
    var item = colleagueEndorsements[(colleagueIndex + offset) % colleagueEndorsements.length];
    return /*#__PURE__*/React.createElement("div", {
      key: offset,
      className: "card-dark",
      style: {
        padding: '35px',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '48px',
        color: 'rgba(212, 175, 55, 0.2)',
        fontFamily: 'Georgia, serif',
        lineHeight: '1',
        marginBottom: '15px'
      }
    }, "\""), /*#__PURE__*/React.createElement("p", {
      style: {
        color: '#a0a0a0',
        lineHeight: '1.8',
        fontSize: '15px',
        marginBottom: '25px',
        fontStyle: 'italic'
      }
    }, item.quote), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#faf9f6',
        fontWeight: '600',
        fontSize: '15px'
      }
    }, item.author), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#d4af37',
        fontSize: '12px',
        letterSpacing: '1px'
      }
    }, item.title, item.year && ", ".concat(item.year))));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setColleagueIndex(function (prev) {
        return (prev + 1) % colleagueEndorsements.length;
      });
    },
    style: {
      position: 'absolute',
      right: '-50px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(212, 175, 55, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      color: '#d4af37',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '30px'
    }
  }, colleagueEndorsements.map(function (_, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return setColleagueIndex(i);
      },
      style: {
        width: colleagueIndex === i ? '24px' : '8px',
        height: '8px',
        borderRadius: '4px',
        background: colleagueIndex === i ? '#d4af37' : '#2a2a2a',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }
    });
  })))))), currentPage === 'movement' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      padding: '140px 5% 100px',
      background: 'radial-gradient(ellipse at 50% 30%, rgba(13, 92, 63, 0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 40%), linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '20%',
      left: '-10%',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(13, 92, 63, 0.15) 0%, transparent 70%)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '10%',
      right: '-5%',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '10px 25px',
      background: 'rgba(212, 175, 55, 0.15)',
      border: '1px solid rgba(212, 175, 55, 0.4)',
      borderRadius: '30px',
      fontSize: '13px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "HEALTH REFORM 2026")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(42px, 6vw, 72px)',
      fontWeight: '400',
      lineHeight: '1.15',
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "A National Movement to"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Transform Healthcare")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '20px',
      lineHeight: '1.9',
      color: '#a0a0a0',
      maxWidth: '700px',
      margin: '0 auto 50px'
    }
  }, "It's time to shift from disease management to true health creation. Join Dr. Bizal and thousands of practitioners, patients, and advocates in redefining what healthcare means in America."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    style: {
      padding: '18px 40px',
      fontSize: '14px'
    },
    onClick: function onClick() {
      return document.getElementById('join-movement').scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, "Join The Movement"), /*#__PURE__*/React.createElement("a", {
    href: "https://healthreform2026.org",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-secondary",
    style: {
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, "Visit HealthReform2026.org ", /*#__PURE__*/React.createElement("span", null, "\u2197"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 5%',
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1000px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '70px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "THE PROBLEM"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "Healthcare is ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Broken")), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      marginBottom: '60px'
    }
  }, [{
    stat: '$4.5T',
    label: 'spent annually on healthcare'
  }, {
    stat: '6 in 10',
    label: 'Americans have chronic disease'
  }, {
    stat: '#1',
    label: 'cause of bankruptcy: medical debt'
  }, {
    stat: '37th',
    label: 'US ranking in health outcomes'
  }].map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        textAlign: 'center',
        padding: '30px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '42px',
        fontWeight: '800',
        color: '#d4af37',
        marginBottom: '10px'
      }
    }, item.stat), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '14px',
        color: '#707070',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }
    }, item.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '50px',
      background: 'linear-gradient(145deg, #141414, #1a1a1a)',
      border: '1px solid #2a2a2a',
      borderRadius: '12px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '26px',
      fontStyle: 'italic',
      color: '#faf9f6',
      lineHeight: '1.7',
      marginBottom: '20px'
    }
  }, "\"We don't have a healthcare system. We have a disease management system.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "Dr. Stephen C. Bizal")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 5%',
      background: 'linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '70px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "THE SOLUTION"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "The Four ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Pillars"), " of Reform"), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pillar-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '30px'
    }
  }, [{
    num: '01',
    title: 'Prevention First',
    desc: 'Incentivize prevention over treatment. Reward health outcomes, not procedures performed. Shift resources to education and lifestyle intervention.'
  }, {
    num: '02',
    title: 'Patient Empowerment',
    desc: 'Give individuals the knowledge and tools to take responsibility for their own health. Healthcare providers as coaches, not just prescribers.'
  }, {
    num: '03',
    title: 'Integrative Care',
    desc: 'Break down silos between conventional medicine, functional medicine, mental health, and lifestyle approaches. Treat the whole person.'
  }, {
    num: '04',
    title: 'Economic Alignment',
    desc: 'Reform insurance and reimbursement to reward wellness. Make healthy choices the affordable choices. End perverse incentives.'
  }].map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card-dark hover-lift",
      style: {
        padding: '50px',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '-30px',
        right: '-15px',
        fontSize: '140px',
        fontWeight: '900',
        color: 'rgba(13, 92, 63, 0.08)',
        fontFamily: "'Outfit', sans-serif"
      }
    }, item.num), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '60px',
        height: '60px',
        background: 'linear-gradient(135deg, #0d5c3f, #0a4a33)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#faf9f6',
        fontWeight: '700',
        fontSize: '20px'
      }
    }, item.num)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '15px'
      }
    }, item.title), /*#__PURE__*/React.createElement("p", {
      style: {
        color: '#a0a0a0',
        lineHeight: '1.8',
        fontSize: '16px'
      }
    }, item.desc));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 5%',
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "movement-grid",
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "FOUNDER"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(32px, 4vw, 44px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '30px'
    }
  }, "Dr. Bizal's ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Vision")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: '1.9',
      color: '#a0a0a0',
      marginBottom: '25px'
    }
  }, "After 40 years of helping individuals transform their health one patient at a time, Dr. Bizal realized that systemic change was necessary to reach the millions who need it most."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: '1.9',
      color: '#a0a0a0',
      marginBottom: '25px'
    }
  }, "Health Reform 2026 brings together his Four Realizations with policy advocacy, practitioner training, and grassroots mobilization to create lasting change."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: '1.9',
      color: '#a0a0a0'
    }
  }, "\"This isn't about politics. It's about giving every American the opportunity to experience what optimal health truly feels like.\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20px',
      right: '-20px',
      width: '100%',
      height: '100%',
      border: '2px solid rgba(212, 175, 55, 0.2)',
      borderRadius: '12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: drBizalPhoto,
    alt: "Dr. Stephen Bizal",
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "join-movement",
    style: {
      padding: '120px 5%',
      background: 'linear-gradient(135deg, #0d5c3f 0%, #0a4a33 100%)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-30%',
      left: '-10%',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-20%',
      right: '-5%',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(36px, 5vw, 52px)',
      fontWeight: '400',
      marginBottom: '20px'
    }
  }, "Join The ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Movement")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      opacity: '0.9',
      marginBottom: '50px',
      lineHeight: '1.8'
    }
  }, "Be part of the change. Sign up to receive updates, action alerts, and opportunities to participate in Health Reform 2026."), movementSubmitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '50px',
      background: 'rgba(0,0,0,0.2)',
      borderRadius: '12px',
      border: '1px solid rgba(212, 175, 55, 0.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '80px',
      height: '80px',
      background: '#d4af37',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 25px',
      fontSize: '36px',
      color: '#0a0a0a'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '28px',
      marginBottom: '15px'
    }
  }, "Welcome to the Movement!"), /*#__PURE__*/React.createElement("p", {
    style: {
      opacity: '0.9'
    }
  }, "Check your inbox for a confirmation and next steps.")) : /*#__PURE__*/React.createElement("form", {
    name: "movement-signup",
    method: "POST",
    "data-netlify": "true",
    onSubmit: handleMovementSubmit,
    style: {
      background: 'rgba(0,0,0,0.2)',
      padding: '40px',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "movement-signup"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    required: true,
    placeholder: "Your Full Name",
    value: movementForm.name,
    onChange: function onChange(e) {
      return setMovementForm(_objectSpread(_objectSpread({}, movementForm), {}, {
        name: e.target.value
      }));
    },
    style: {
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#faf9f6'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    required: true,
    placeholder: "Your Email Address",
    value: movementForm.email,
    onChange: function onChange(e) {
      return setMovementForm(_objectSpread(_objectSpread({}, movementForm), {}, {
        email: e.target.value
      }));
    },
    style: {
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#faf9f6'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("select", {
    name: "role",
    value: movementForm.role,
    onChange: function onChange(e) {
      return setMovementForm(_objectSpread(_objectSpread({}, movementForm), {}, {
        role: e.target.value
      }));
    },
    style: {
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#faf9f6'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    style: {
      background: '#0a0a0a'
    }
  }, "I am a..."), /*#__PURE__*/React.createElement("option", {
    value: "patient",
    style: {
      background: '#0a0a0a'
    }
  }, "Patient / Health Seeker"), /*#__PURE__*/React.createElement("option", {
    value: "practitioner",
    style: {
      background: '#0a0a0a'
    }
  }, "Healthcare Practitioner"), /*#__PURE__*/React.createElement("option", {
    value: "advocate",
    style: {
      background: '#0a0a0a'
    }
  }, "Health Advocate"), /*#__PURE__*/React.createElement("option", {
    value: "policymaker",
    style: {
      background: '#0a0a0a'
    }
  }, "Policy Maker"), /*#__PURE__*/React.createElement("option", {
    value: "other",
    style: {
      background: '#0a0a0a'
    }
  }, "Other"))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      width: '100%',
      padding: '18px',
      background: '#d4af37',
      border: 'none',
      color: '#0a0a0a',
      fontFamily: "'Outfit', sans-serif",
      fontSize: '14px',
      fontWeight: '700',
      letterSpacing: '2px',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'all 0.3s ease'
    }
  }, "JOIN HEALTH REFORM 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '12px',
      opacity: '0.7',
      marginTop: '20px'
    }
  }, "We respect your privacy. Unsubscribe anytime.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 5%',
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '28px',
      marginBottom: '40px'
    }
  }, "Ready to Learn More?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://healthreform2026.org",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-primary",
    style: {
      textDecoration: 'none'
    }
  }, "Visit HealthReform2026.org"), /*#__PURE__*/React.createElement("button", {
    className: "btn-secondary",
    onClick: function onClick() {
      return scrollToSection('mentoring');
    }
  }, "Work With Dr. Bizal"))))), currentPage === 'media' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '50vh',
      display: 'flex',
      alignItems: 'center',
      padding: '160px 5% 80px',
      background: 'radial-gradient(ellipse at 70% 50%, rgba(13, 92, 63, 0.15) 0%, transparent 50%), linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "PRESS & MEDIA"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(40px, 5vw, 60px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '30px',
      lineHeight: '1.2'
    }
  }, "Media ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Kit")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: '1.9',
      color: '#a0a0a0',
      maxWidth: '600px'
    }
  }, "Resources for journalists, podcasters, and event organizers interested in featuring Dr. Bizal."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 5%',
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "WATCH"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "Dr. Bizal ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '40px',
      alignItems: 'center',
      marginBottom: '60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden',
      borderRadius: '12px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.youtube.com/embed/2l0fm5UZejw",
    title: "Dr. Bizal Speaking",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      borderRadius: '12px'
    },
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: speakingPhoto,
    alt: "Dr. Bizal speaking at Health Optimization Summit",
    style: {
      width: '100%',
      borderRadius: '12px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '20px',
      color: '#707070',
      fontSize: '14px',
      textAlign: 'center'
    }
  }, "Dr. Bizal at the Health Optimization Summit"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/channel/UC9wHKwnofQD1y9qfXHt-tUg",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-block',
      marginTop: '15px',
      padding: '10px 20px',
      background: '#c4302b',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '4px',
      fontSize: '13px',
      fontWeight: '600',
      letterSpacing: '1px'
    }
  }, "SUBSCRIBE ON YOUTUBE \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px'
    }
  }, [{
    title: 'Healing vs. Healthcare… Improving Hyperbaric Treatment Outcomes',
    subtitle: '6th International Hyperbaric O₂ Symposium · Los Angeles, CA',
    embedId: '98XaGO086CU',
    icon: '🎤'
  }, {
    title: 'Juicing Watermelon with Dr. Bizal',
    subtitle: '192k+ views on YouTube',
    embedId: 'nyQ5FqgN24M',
    icon: '🍉'
  }, {
    title: 'Juicing Vegetables with Dr. Bizal',
    subtitle: 'Healthy living in action',
    embedId: 'PDP_u53uars',
    icon: '🥬'
  }].map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return setVideoModal({
          title: item.title,
          embedId: item.embedId
        });
      },
      className: "card-dark hover-lift",
      style: {
        padding: '30px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '32px',
        marginBottom: '15px'
      }
    }, item.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: '#d4af37',
        letterSpacing: '1px',
        marginBottom: '8px',
        textTransform: 'uppercase'
      }
    }, item.subtitle), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#faf9f6',
        marginBottom: '15px',
        lineHeight: '1.4'
      }
    }, item.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: '#d4af37',
        fontWeight: '600',
        letterSpacing: '1px'
      }
    }, "WATCH NOW \u2192"));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 5%',
      background: '#0f0f0f'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "LISTEN"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "Podcast ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Appearances")), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px'
    }
  }, [{
    title: 'Dr. Stephen Bizal, Generator 1/4',
    podcast: 'Align To Your Design Podcast',
    host: 'Baeth Davis',
    url: 'https://youtu.be/qeB_G8oLuw4?si=ft_hvtbnT2c4-XPS',
    icon: '🎙️'
  }, {
    title: "Your Owner's Manual for A Healed Human Body",
    podcast: 'The Jay Campbell Podcast',
    host: 'Jay Campbell',
    url: 'https://www.youtube.com/watch?v=7CUIgD3EWNw',
    icon: '🎙️'
  }, {
    title: 'The Optimal Life',
    podcast: 'Inside Personal Growth Podcast',
    host: 'Greg Voisen',
    url: 'https://youtu.be/eyNu1Layo8w?si=XzQMGC0H8o_IScsp',
    icon: '🎙️'
  }].map(function (item, i) {
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: item.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "card-dark hover-lift",
      style: {
        padding: '30px',
        textDecoration: 'none',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '32px',
        marginBottom: '15px'
      }
    }, item.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: '#d4af37',
        letterSpacing: '1px',
        marginBottom: '8px',
        textTransform: 'uppercase'
      }
    }, item.podcast), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#faf9f6',
        marginBottom: '10px',
        lineHeight: '1.4'
      }
    }, item.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '13px',
        color: '#707070',
        marginBottom: '15px'
      }
    }, "with ", item.host), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: '#d4af37',
        fontWeight: '600',
        letterSpacing: '1px'
      }
    }, "LISTEN NOW \u2192"));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 5%',
      background: '#0f0f0f'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "ARCHIVE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '20px'
    }
  }, "TV ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Appearances")), /*#__PURE__*/React.createElement("div", {
    className: "section-divider"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      maxWidth: '600px',
      margin: '30px auto 0',
      lineHeight: '1.8'
    }
  }, "\"Doc Around the Block\" was a health & fitness edutainment series Dr. Bizal created for local cable TV in 1991, proving he's been The Wellness OG for over three decades.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px'
    }
  }, [{
    title: "Kid's Health",
    url: 'https://www.youtube.com/watch?v=5QxNSc2euMM',
    embedId: '5QxNSc2euMM'
  }, {
    title: 'On The Ski Slopes',
    url: 'https://youtu.be/1ddWRzmyIus',
    embedId: '1ddWRzmyIus'
  }, {
    title: 'Riding A Harley Davidson',
    url: 'https://youtu.be/YW2g3Va02M4',
    embedId: 'YW2g3Va02M4'
  }, {
    title: 'Stuntman & Interviewer',
    url: 'https://youtu.be/WK0YOzwcfN4',
    embedId: 'WK0YOzwcfN4'
  }].map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return setVideoModal({
          title: item.title,
          embedId: item.embedId
        });
      },
      className: "card-dark hover-lift",
      style: {
        padding: '30px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '32px',
        marginBottom: '15px'
      }
    }, "\uD83D\uDCFA"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: '#d4af37',
        letterSpacing: '1px',
        marginBottom: '8px',
        textTransform: 'uppercase'
      }
    }, "Doc Around the Block \xB7 1991"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#faf9f6',
        marginBottom: '15px',
        lineHeight: '1.4'
      }
    }, item.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: '#d4af37',
        fontWeight: '600',
        letterSpacing: '1px'
      }
    }, "WATCH NOW \u2192"));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 5%',
      background: '#0f0f0f'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-dark",
    style: {
      padding: '40px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#d4af37'
    }
  }, "Speaking Topics"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      color: '#a0a0a0',
      lineHeight: '2'
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u2022 The Four Realizations for Optimal Health"), /*#__PURE__*/React.createElement("li", null, "\u2022 Why We're Designed to Be Healthy"), /*#__PURE__*/React.createElement("li", null, "\u2022 The Mind-Body Connection"), /*#__PURE__*/React.createElement("li", null, "\u2022 Health Reform 2026 Vision"), /*#__PURE__*/React.createElement("li", null, "\u2022 Corporate Wellness Transformation"))), /*#__PURE__*/React.createElement("div", {
    className: "card-dark",
    style: {
      padding: '40px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#d4af37'
    }
  }, "Bio (Short)"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      lineHeight: '1.8'
    }
  }, "Dr. Stephen C. Bizal, D.C. is a wellness pioneer with 40+ years of experience in functional medicine. Author of \"The Optimal Life\" and founder of Health Reform 2026, he has helped over 10,000 people transform their health.")), /*#__PURE__*/React.createElement("div", {
    className: "card-dark",
    style: {
      padding: '40px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#d4af37'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#a0a0a0',
      lineHeight: '1.8',
      marginBottom: '20px'
    }
  }, "For media inquiries, speaking engagements, or interview requests:"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#faf9f6'
    }
  }, "media@drbizal.com")))))), currentPage === 'privacy' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '100vh',
      padding: '160px 5% 80px',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "LEGAL"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '50px'
    }
  }, "Privacy ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Policy")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#a0a0a0',
      fontSize: '16px',
      lineHeight: '1.9'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#faf9f6'
    }
  }, "Effective Date:"), " January 1, 2026"), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Information We Collect"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "The Bizal Group, Inc. (\"we,\" \"us,\" or \"our\") collects information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, purchase products, or apply for mentoring programs. This may include your name, email address, phone number, and any other information you choose to provide."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "How We Use Your Information"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and communicate with you about products, services, and events offered by The Bizal Group."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Information Sharing"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Data Security"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Your Rights"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "You may request access to, correction of, or deletion of your personal information by contacting us at steve@drbizal.com."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "If you have any questions about this Privacy Policy, please contact us at:"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '10px'
    }
  }, "The Bizal Group, Inc."), /*#__PURE__*/React.createElement("p", null, "Email: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:steve@drbizal.com",
    style: {
      color: '#d4af37'
    }
  }, "steve@drbizal.com")))))), currentPage === 'terms' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '100vh',
      padding: '160px 5% 80px',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '800px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#d4af37',
      fontWeight: '600'
    }
  }, "LEGAL"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: '400',
      marginTop: '15px',
      marginBottom: '50px'
    }
  }, "Terms of ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: '#d4af37'
    }
  }, "Service")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#a0a0a0',
      fontSize: '16px',
      lineHeight: '1.9'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '30px'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#faf9f6'
    }
  }, "Effective Date:"), " January 1, 2026"), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Acceptance of Terms"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "By accessing and using the services provided by The Bizal Group, Inc., including this website, products, and mentoring programs, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Services"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "Our services include educational content, books, audio programs, and private mentoring. The information provided is for educational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Disclaimer"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "The content on this website is provided \"as is\" without warranties of any kind. Dr. Stephen Bizal and The Bizal Group, Inc. are not liable for any decisions made based on the information provided. Always consult with qualified healthcare professionals regarding your specific health concerns."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Intellectual Property"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "All content, including text, graphics, logos, images, audio, and video, is the property of The Bizal Group, Inc. and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Refund Policy"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "Digital products are non-refundable once accessed. For mentoring programs, refund policies are outlined in individual program agreements. Please contact us directly for any concerns."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Limitation of Liability"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "To the fullest extent permitted by law, The Bizal Group, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services."), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#faf9f6',
      fontSize: '20px',
      marginBottom: '15px',
      marginTop: '40px'
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px'
    }
  }, "For questions about these Terms of Service, please contact us at:"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '10px'
    }
  }, "The Bizal Group, Inc."), /*#__PURE__*/React.createElement("p", null, "Email: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:steve@drbizal.com",
    style: {
      color: '#d4af37'
    }
  }, "steve@drbizal.com")))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '80px 5% 40px',
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '60px',
      marginBottom: '60px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '25px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      border: '2px solid #d4af37',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: drBizalPhoto,
    alt: "Dr. Bizal",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: '700',
      fontSize: '16px'
    }
  }, "DR. BIZAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '2px',
      color: '#d4af37'
    }
  }, "THE WELLNESS OG"))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#707070',
      fontSize: '14px',
      lineHeight: '1.7'
    }
  }, "Transforming lives through the science of optimal health since 1984.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '12px',
      letterSpacing: '2px',
      color: '#d4af37',
      marginBottom: '25px'
    }
  }, "EXPLORE"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none'
    }
  }, ['About', 'Philosophy', 'Movement', 'Media'].map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item,
      style: {
        marginBottom: '12px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return item === 'About' || item === 'Media' || item === 'Movement' ? navigateTo(item.toLowerCase()) : scrollToSection(item.toLowerCase());
      },
      style: {
        background: 'none',
        border: 'none',
        color: '#a0a0a0',
        fontSize: '14px',
        cursor: 'pointer',
        padding: 0,
        fontFamily: "'Outfit', sans-serif"
      }
    }, item));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '12px',
      letterSpacing: '2px',
      color: '#d4af37',
      marginBottom: '25px'
    }
  }, "SHOP"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return scrollToSection('mentoring');
    },
    style: {
      background: 'none',
      border: 'none',
      color: '#a0a0a0',
      fontSize: '14px',
      cursor: 'pointer',
      padding: 0,
      fontFamily: "'Outfit', sans-serif"
    }
  }, "Mentoring")), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return scrollToSection('shop');
    },
    style: {
      background: 'none',
      border: 'none',
      color: '#a0a0a0',
      fontSize: '14px',
      cursor: 'pointer',
      padding: 0,
      fontFamily: "'Outfit', sans-serif"
    }
  }, "Tools")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '12px',
      letterSpacing: '2px',
      color: '#d4af37',
      marginBottom: '25px'
    }
  }, "CONNECT"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none'
    }
  }, [{
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UC9wHKwnofQD1y9qfXHt-tUg'
  }, {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/dr-stephen-bizal-d-c-a337a6367'
  }].map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.name,
      style: {
        marginBottom: '12px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: item.url,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        color: '#a0a0a0',
        textDecoration: 'none',
        fontSize: '14px'
      }
    }, item.name));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '12px',
      letterSpacing: '2px',
      color: '#d4af37',
      marginBottom: '25px'
    }
  }, "CONTACT"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:steve@drbizal.com",
    style: {
      color: '#a0a0a0',
      textDecoration: 'none',
      fontSize: '14px'
    }
  }, "steve@drbizal.com"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #1a1a1a',
      paddingTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#505050',
      fontSize: '13px'
    }
  }, "\xA9 2026 Dr. Stephen Bizal. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '30px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navigateTo('privacy');
    },
    style: {
      background: 'none',
      border: 'none',
      color: '#505050',
      fontSize: '13px',
      cursor: 'pointer',
      padding: 0,
      fontFamily: "'Outfit', sans-serif"
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return navigateTo('terms');
    },
    style: {
      background: 'none',
      border: 'none',
      color: '#505050',
      fontSize: '13px',
      cursor: 'pointer',
      padding: 0,
      fontFamily: "'Outfit', sans-serif"
    }
  }, "Terms of Service"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-9999px',
      top: '-9999px',
      width: '1px',
      height: '1px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ytPlayerDivRef
  })));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(DrBizalWebsite, null));
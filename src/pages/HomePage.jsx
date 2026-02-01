import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Home,
  Building2,
  Layers,
  Wind,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  Zap,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

// Static data moved outside component to prevent recreation on every render
const aboutImages = [
  "/images/about/about-1.jpeg",
  "/images/about/about-2.jpeg",
  "/images/about/about-3.jpeg",
  "/images/about/about-4.jpeg",
];

const services = [
  {
    icon: Home,
    title: "Hausreinigung",
    description:
      "Nach einem anstrengenden Arbeitstag nach Hause zu kommen und ein blitzsauberes Haus vorzufinden, ist eines der besten Gefühle.",
    features: [
      "Wöchentliche Reinigung",
      "Flexible Zeiten",
      "Eigene Produkte möglich",
    ],
    image: "/images/services/hausreinigung.webp",
  },
  {
    icon: Layers,
    title: "Treppenhausreinigung",
    description:
      "Der erste Eindruck zählt! Das Treppenhaus muss einen guten ersten Eindruck machen, und wir sorgen dafür, dass es das tut.",
    features: ["Regelmäßige Reinigung", "Glasflächen", "Handläufe & Details"],
    image: "/images/services/treppenhausreinigung.webp",
  },
  {
    icon: Building2,
    title: "Büroreinigung",
    description:
      "Das Büro soll sich wie ein Zuhause anfühlen! Je entspannter und gelassener Sie sind, desto produktiver sind Sie.",
    features: ["Nach Büroschluss", "Individuelle Pläne", "Sanitäranlagen"],
    image: "/images/services/bueroreinigung.webp",
  },
  {
    icon: Wind,
    title: "Fensterreinigung",
    description:
      "Kristallklare Fenster für mehr Licht und bessere Aussicht. Professionelle Reinigung für streifenfreien Glanz.",
    features: ["Innen & Außen", "Rahmen inklusive", "Professionelle Technik"],
    image: "/images/services/fensterreinigung.jpeg",
  },
  {
    icon: Zap,
    title: "Solarreinigung",
    description:
      "Professionelle Wartung von Solarmodulen für optimale Effizienz und maximale Energieausbeute.",
    features: [
      "Schonende Reinigung",
      "Effizienzsteigerung",
      "Regelmäßige Wartung",
    ],
    image: "/images/services/solarreinigung.jpg",
  },
];

const stats = [
  { number: "10+", label: "Jahre Erfahrung" },
  { number: "100%", label: "Kundenzufriedenheit" },
  { number: "5", label: "Standorte" },
];

const locations = [
  "Berlin",
  "Eberswalde",
  "Bernau",
  "Bad Freinwalde",
  "Angermünde",
  "Umgebung",
];

const testimonials = [
  {
    name: "Maik Ritter",
    role: "Privatkundin, Berlin",
    rating: 5,
    text: "Die Dienstleistung der Firma D.A.N.K. Reinigung findet völlig unauffällig immer zu unserer vollsten Zufriedenheit statt. Auf Sonderwünsche wird kompetent und unkompliziert reagiert. Absprachen werden immer eingehalten.",
    source: "manual"
  },
  {
    name: "Michael Wietzke",
    role: "Geschäftsführer, Eberswalde",
    rating: 5,
    text: "Wir nutzen die Büroreinigung seit über einem Jahr. Pünktlich, professionell und zu einem fairen Preis. Unsere Mitarbeiter schätzen die saubere Arbeitsumgebung sehr.",
    source: "manual"
  },
  {
    name: "Anna Schmidt",
    role: "Hausbesitzerin, Bernau",
    rating: 5,
    text: "Die Treppenhausreinigung wird regelmäßig und mit größter Sorgfalt durchgeführt. Unser Treppenhaus sieht immer einladend und gepflegt aus. Sehr empfehlenswert!",
    source: "manual"
  },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sparkles, setSparkles] = useState([]);
  const [expandedReview, setExpandedReview] = useState(null);

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return { text, isTruncated: false };
    return {
      text: text.substring(0, maxLength).trim(),
      isTruncated: true
    };
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Auto-advance about images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4); // 4 images total
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Empty dependency - images array never changes

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "services", "about", "locations", "testimonials", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mouse bubble trail effect (respects prefers-reduced-motion)
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return; // Don't add bubble effect if user prefers reduced motion
    }

    let throttleTimer = null;

    const handleMouseMove = (e) => {
      if (throttleTimer) return;

      throttleTimer = setTimeout(() => {
        throttleTimer = null;
      }, 80); // Create bubble every 80ms (optimized from 50ms)

      const bubble = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY, // Fixed positioning, no need for scrollY
        size: Math.random() * 20 + 15, // Random size between 15-35px
      };

      setSparkles((prev) => {
        // Limit to 15 bubbles max for performance
        const newSparkles = [...prev, bubble];
        return newSparkles.length > 15 ? newSparkles.slice(1) : newSparkles;
      });

      // Remove bubble after animation
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== bubble.id));
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      // Update URL hash for deep linking
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  // Handle initial hash on page load for deep linking
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (hash) {
      // Delay to ensure page is fully loaded
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, []);

  return (
    <div
      className={`min-h-screen font-sans overflow-x-hidden ${theme === "dark" ? "dark bg-slate-950 text-slate-100" : "bg-white text-gray-900"}`}
    >
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-[#5aec8b] focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Soap Bubble Trail */}
      {sparkles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble pointer-events-none fixed z-[9999] animate-bubble"
          style={{
            left: bubble.x - bubble.size / 2,
            top: bubble.y - bubble.size / 2,
            width: bubble.size,
            height: bubble.size,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Navigation */}
      <header>
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled
              ? "bg-white/70 backdrop-blur-md shadow-lg"
              : "bg-white/60 backdrop-blur-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                <div className="relative logo-container">
                  <img
                    src="/images/logo.svg"
                    alt="Dank Reinigung Logo"
                    className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10"
                  />
                  <div className="absolute inset-0 blur-xl bg-[#5aec8b]/30 animate-pulse"></div>
                  {/* Floating bubbles around logo */}
                  <div
                    className="absolute -inset-8 pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="logo-bubble logo-bubble-1"></div>
                    <div className="logo-bubble logo-bubble-2"></div>
                    <div className="logo-bubble logo-bubble-3"></div>
                    <div className="logo-bubble logo-bubble-4"></div>
                    <div className="logo-bubble logo-bubble-5"></div>
                    <div className="logo-bubble logo-bubble-6"></div>
                    <div className="logo-bubble logo-bubble-7"></div>
                    <div className="logo-bubble logo-bubble-8"></div>
                  </div>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { label: "Home", section: "home" },
                  { label: "Services", section: "services" },
                  { label: "About", section: "about" },
                  { label: "Locations", section: "locations" },
                  { label: "Bewertungen", section: "testimonials" },
                  { label: "Contact", section: "contact" }
                ].map(
                  (item) => (
                    <button
                      key={item.section}
                      onClick={() => scrollToSection(item.section)}
                      className={`relative text-sm font-medium transition-colors duration-300 ${
                        activeSection === item.section
                          ? "text-[#5aec8b]"
                          : "text-gray-700 hover:text-[#5aec8b]"
                      }`}
                    >
                      {item.label}
                      {activeSection === item.section && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5aec8b] animate-[slideIn_0.3s_ease-out]"></span>
                      )}
                    </button>
                  ),
                )}

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-200/50 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Sun className="w-5 h-5 text-[#5aec8b]" />
                  )}
                </button>
              </div>

              {/* Mobile Theme Toggle and Menu Button */}
              <div className="md:hidden flex items-center gap-3">
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-200/50 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Sun className="w-5 h-5 text-[#5aec8b]" />
                  )}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-700 hover:text-[#5aec8b] transition-colors"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-gray-200 dark:border-slate-700">
              <div className="px-4 py-6 space-y-4">
                {[
                  { label: "Home", section: "home" },
                  { label: "Services", section: "services" },
                  { label: "About", section: "about" },
                  { label: "Locations", section: "locations" },
                  { label: "Bewertungen", section: "testimonials" },
                  { label: "Contact", section: "contact" }
                ].map(
                  (item) => (
                    <button
                      key={item.section}
                      onClick={() => {
                        scrollToSection(item.section);
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-[#5aec8b] transition-colors"
                    >
                      {item.label}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section
          id="home"
          aria-label="Hero section"
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onLoadedMetadata={(e) => {
                e.currentTarget.playbackRate = 1.5;
              }}
            >
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/80 to-slate-900/85 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-slate-950/95"></div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5aec8b]/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5aec8b]/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8 animate-[fadeInUp_1s_ease-out]">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white drop-shadow-lg mb-4">
                  Entdecken Sie
                </span>
                <span className="block bg-gradient-to-r from-[#5aec8b] via-[#4dd67d] to-[#3bc56e] bg-clip-text text-transparent drop-shadow-lg">
                  Einwandfreie Sauberkeit
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
                Professionelle Reinigungsdienstleistungen für Ihr Zuhause und
                Büro. Für makellose Sauberkeit - unsere Profi-Reinigung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group relative px-8 py-4 bg-[#5aec8b] hover:bg-[#4dd67d] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#5aec8b]/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Kostenloses Angebot
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("services")}
                  className="px-8 py-4 border-2 border-[#5aec8b] text-[#5aec8b] rounded-full font-semibold text-lg hover:bg-[#5aec8b]/10 transition-all duration-300"
                >
                  Unsere Services
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center animate-[fadeInUp_1s_ease-out]"
                    style={{
                      animationDelay: `${0.2 + index * 0.1}s`,
                      animationFillMode: "both",
                    }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#5aec8b] to-[#4dd67d] bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80 mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="relative py-32 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="services-title"
              data-animate
              className={`text-center mb-20 transition-all duration-1000 ${
                isVisible["services-title"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#5aec8b] to-[#4dd67d] bg-clip-text text-transparent">
                  Unsere Dienstleistungen
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                Qualität und Schnelligkeit garantiert - mehr als 10 Jahre
                Erfahrung
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    id={`service-${index}`}
                    data-animate
                    className={`group relative bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] ${
                      isVisible[`service-${index}`]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {/* Service Image */}
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} - Professionelle Reinigungsdienstleistung`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-lg bg-[#5aec8b] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="px-2">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-slate-100 group-hover:text-[#5aec8b] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-700 dark:text-slate-300"
                          >
                            <CheckCircle className="w-5 h-5 text-[#5aec8b] mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative py-32 bg-white dark:bg-slate-950"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                id="about-content"
                data-animate
                className={`space-y-6 transition-all duration-1000 ${
                  isVisible["about-content"]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-[#5aec8b] to-[#4dd67d] bg-clip-text text-transparent">
                    Warum Dank Reinigung?
                  </span>
                </h2>

                <div className="space-y-4 text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    Mit mehr als 10 Jahren Erfahrung in der Reinigungsbranche
                    zeichnet sich unser engagiertes Team durch eine Vielzahl von
                    Dienstleistungen aus, um Ihren Bedürfnissen gerecht zu
                    werden.
                  </p>

                  <p>
                    Von der makellosen Fensterreinigung bis hin zur sorgfältigen
                    Treppenhauspflege sorgen wir dafür, dass jeder Winkel Ihrer
                    Räumlichkeiten in perfektem Glanz erstrahlt. Unsere
                    Kompetenz erstreckt sich auch auf eine umfassende
                    Hausreinigung, bei der wir Schmutz und Dreck beseitigen, um
                    die wahre Schönheit Ihres Wohnumfelds zum Vorschein zu
                    bringen. Darüber hinaus reinigen wir auch Sonnenkollektoren,
                    um deren Effizienz und Langlebigkeit zu verbessern.
                  </p>

                  <p>
                    Unsere Reinigungsdienste sind umweltfreundlich, effizient
                    und preiswert. Wir verwenden umweltschonende Methoden, die
                    die Natur schützen und gleichzeitig beste
                    Reinigungsergebnisse liefern. Unsere erfahrenen Mitarbeiter
                    arbeiten schnell und gründlich, sodass Ihre Räumlichkeiten
                    rasch wieder nutzbar sind. Dabei bieten wir Ihnen ein
                    hervorragendes Preis-Leistungs-Verhältnis
                  </p>

                  <p className="text-[#5aec8b] font-semibold">
                    Vertrauen Sie unseren erfahrenen Fachleuten, die in allen
                    Bereichen der Reinigung hervorragende Arbeit leisten.
                  </p>
                </div>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#5aec8b] hover:bg-[#4dd67d] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#5aec8b]/50 transition-all duration-300 hover:scale-105 mt-6"
                >
                  Jetzt kontaktieren
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div
                id="about-features"
                data-animate
                className={`space-y-6 transition-all duration-1000 ${
                  isVisible["about-features"]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="rounded-2xl overflow-hidden mb-8 relative h-96">
                  {aboutImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Dank Reinigung Team und Arbeit - Bild ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  ))}

                  {/* Navigation dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {aboutImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-[#5aec8b] w-6"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: Star,
                      title: "Qualität",
                      desc: "Höchste Standards",
                    },
                    {
                      icon: CheckCircle,
                      title: "Zuverlässig",
                      desc: "Immer pünktlich",
                    },
                    { icon: Sparkles, title: "Erfahren", desc: "10+ Jahre" },
                    {
                      icon: Home,
                      title: "Flexibel",
                      desc: "Nach Ihren Wünschen",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        <Icon className="w-10 h-10 text-[#5aec8b] mb-4" />
                        <h4 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section
          id="locations"
          className="relative py-32 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-slate-900 dark:to-slate-950"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="locations-title"
              data-animate
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible["locations-title"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#5aec8b] to-[#4dd67d] bg-clip-text text-transparent">
                  Unsere Standorte
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-slate-400">
                Wir sind in folgenden Regionen für Sie da
              </p>
            </div>

            <div
              id="locations-grid"
              data-animate
              className={`grid grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-1000 ${
                isVisible["locations-grid"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 flex flex-col items-center justify-center text-center aspect-square"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <MapPin className="w-8 h-8 text-[#5aec8b] mb-2 lg:mb-4" />
                  <h4 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-slate-100">
                    {location}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="testimonials-title"
              data-animate
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible["testimonials-title"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#5aec8b] to-[#4dd67d] bg-clip-text text-transparent">
                  Was unsere Kunden sagen
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                Überzeugen Sie sich von der Qualität unserer Arbeit durch die
                Erfahrungen unserer zufriedenen Kunden
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden carousel-container">
              <div
                className="flex gap-8 carousel-track"
                style={{
                  animation: "scroll 40s linear infinite",
                }}
              >
                {/* Render testimonials multiple times for seamless infinite loop */}
                {[...Array(6)]
                  .flatMap(() => testimonials)
                  .map((testimonial, index) => {
                    const { text, isTruncated } = truncateText(testimonial.text, 150);
                    return (
                      <div
                        key={index}
                        onClick={() => setExpandedReview(testimonial)}
                        className="flex-shrink-0 w-[350px] bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700/50 hover:border-[#5aec8b]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5aec8b]/10 cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-6">
                          <Quote className="w-10 h-10 text-[#5aec8b] opacity-50" />
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-[#5aec8b] text-[#5aec8b]"
                              />
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-slate-300 mb-6 leading-relaxed">
                          "{text}
                          {isTruncated && (
                            <span className="text-[#5aec8b] font-medium ml-1">...Mehr</span>
                          )}"
                        </p>

                        {/* Google verification badge */}
                        {testimonial.source === 'google' && (
                          <div className="flex items-center gap-1.5 mb-3 text-sm text-green-600 dark:text-green-400">
                            <CheckCircle className="w-4 h-4" />
                            <span className="font-medium">Verifizierte Google Bewertung</span>
                          </div>
                        )}

                        <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                          <p className="font-semibold text-gray-900 dark:text-slate-100">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-slate-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* Expanded Review Modal */}
        {expandedReview && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setExpandedReview(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl border border-gray-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setExpandedReview(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-slate-400" />
              </button>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(expandedReview.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Full review text */}
              <p className="text-gray-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                "{expandedReview.text}"
              </p>

              {/* Google badge if applicable */}
              {expandedReview.source === 'google' && (
                <div className="flex items-center gap-1.5 mb-6 text-sm text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">Verifizierte Google Bewertung</span>
                </div>
              )}

              {/* Author info */}
              <div className="pt-6 border-t border-gray-200 dark:border-slate-700">
                <p className="font-semibold text-gray-900 dark:text-slate-100 text-lg">
                  {expandedReview.name}
                </p>
                <p className="text-gray-500 dark:text-slate-400 mt-1">
                  {expandedReview.role}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section
          id="contact"
          className="relative py-32 bg-white dark:bg-slate-950"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="contact-title"
              data-animate
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible["contact-title"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#5aec8b] to-[#4dd67d] bg-clip-text text-transparent">
                  Kontaktieren Sie uns
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam den Weg zu einer schönen und
                dauerhaften Zusammenarbeit beschreiten
              </p>
            </div>

            <div
              id="contact-info"
              data-animate
              className={`grid md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
                isVisible["contact-info"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="tel:015111072738"
                className="group bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
                  Telefon
                </h3>
                <p className="text-[#5aec8b] font-medium">0151 110 727 38</p>
              </a>

              <a
                href="mailto:info@dank-reinigung.de"
                className="group bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
                  E-Mail
                </h3>
                <p className="text-[#5aec8b] font-medium break-all">
                  info@dank-reinigung.de
                </p>
              </a>

              <div className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700/50 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-30"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
                  Adresse
                </h3>
                <p className="text-[#5aec8b] font-medium text-sm">
                  Joachimsthaler Str. 5B
                  <br />
                  16230 Chorin OT Golzow
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="relative py-12 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo Column */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative logo-container mb-4">
                <img
                  src="/images/logo.svg"
                  alt="Dank Reinigung Logo"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10"
                />
                {/* Floating bubbles around logo */}
                <div
                  className="absolute -inset-8 pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="logo-bubble logo-bubble-1"></div>
                  <div className="logo-bubble logo-bubble-2"></div>
                  <div className="logo-bubble logo-bubble-3"></div>
                  <div className="logo-bubble logo-bubble-4"></div>
                  <div className="logo-bubble logo-bubble-5"></div>
                  <div className="logo-bubble logo-bubble-6"></div>
                  <div className="logo-bubble logo-bubble-7"></div>
                  <div className="logo-bubble logo-bubble-8"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-slate-400 text-center md:text-left">
                Professionelle Reinigungsdienstleistungen in Berlin und Umgebung
              </p>
            </div>

            {/* Navigation Column */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Navigation
              </h4>
              <nav className="flex flex-col space-y-2">
                {["Home", "Services", "About", "Locations", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-600 hover:text-[#5aec8b] transition-colors text-center"
                    >
                      {item}
                    </button>
                  ),
                )}
                <Link
                  to="/impressum"
                  className="text-gray-600 dark:text-slate-400 hover:text-[#5aec8b] transition-colors text-center"
                >
                  Impressum und Datenschutz
                </Link>
              </nav>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Kontakt
              </h4>
              <div className="space-y-2 text-sm text-gray-600 text-center md:text-right">
                <p>Tel: 0151 110 727 38</p>
                <p>info@dank-reinigung.de</p>
                <p className="text-xs mt-4">
                  Joachimsthaler Str. 5B
                  <br />
                  16230 Chorin OT Golzow
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Dank Reinigung. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}

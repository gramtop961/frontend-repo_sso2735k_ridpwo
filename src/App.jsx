import Hero from './components/Hero';
import AboutMenu from './components/AboutMenu';
import GalleryTestimonials from './components/GalleryTestimonials';
import ContactFooter from './components/ContactFooter';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#6b4226]" />
          <span className="text-sm font-semibold tracking-wide text-[#2a211d]">Cozy Cafe</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[#3b2b25] md:flex">
          <a href="#about" className="transition hover:text-[#6b4226]">About</a>
          <a href="#menu" className="transition hover:text-[#6b4226]">Menu</a>
          <a href="#testimonials" className="transition hover:text-[#6b4226]">Testimonials</a>
          <a href="#contact" className="transition hover:text-[#6b4226]">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7efe6] antialiased">
      <Navbar />
      <Hero />
      <AboutMenu />
      <GalleryTestimonials />
      <ContactFooter />
    </div>
  );
}

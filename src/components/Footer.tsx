export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-serif font-semibold tracking-wide text-white">
          LUMIÈRE
        </div>
        <p className="text-gray-500 text-sm font-light text-center md:text-left">
          &copy; {new Date().getFullYear()} Lumière Photography. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

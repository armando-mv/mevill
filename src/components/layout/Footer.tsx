
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border/50 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-foreground/60">
          &copy; {currentYear} Mevill Constructions. All rights reserved.
        </p>
        <p className="text-xs text-foreground/40 mt-1">
          Built with precision and passion.
        </p>
      </div>
    </footer>
  );
}

const Footer = () => {
  return (
    <footer className="py-12 bg-accent border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-lg text-foreground">
            Custom European Hardwood
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} Custom European Hardwood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const Footer = () => {
    return (
      <footer className="bg-background text-foreground">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} you can just do things
          </p>
        </div>
      </footer>
    );
  };
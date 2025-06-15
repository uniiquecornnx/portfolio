export const Footer = () => {
    return (
      <footer className="bg-background text-foreground">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} सर नीचे काम ऊपर
          </p>
        </div>
      </footer>
    );
  };
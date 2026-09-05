export default function Footer() {
  return (
    <footer className="border-t border-rule mt-24">
      <div className="max-w-wide mx-auto px-6 py-8 md:px-10 flex items-center justify-between text-sm text-muted">
        <span>Giuseppe Longo</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

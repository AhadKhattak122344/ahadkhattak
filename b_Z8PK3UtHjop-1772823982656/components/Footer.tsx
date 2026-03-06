export function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <span>Ahad Khattak</span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:ahadkhttk12@gmail.com"
            className="hover:text-gray-700 transition-colors duration-150"
          >
            ahadkhttk12@gmail.com
          </a>
          <a
            href="https://github.com/AhadKhattak122344"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ahad-khattak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors duration-150"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

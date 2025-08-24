export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <small>© {year} Coffee Shop. All rights reserved.</small>
        <div className="footer-links">
          <a href="https://github.com/YoadK/coffee-shop-react" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

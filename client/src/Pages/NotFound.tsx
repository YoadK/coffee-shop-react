import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2 className="h2">Page not found</h2>
      <p className="muted">The page you’re looking for doesn’t exist.</p>
      <Link className="btn" to="/">Back to Home</Link>
    </section>
  );
}

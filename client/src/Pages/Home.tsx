import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <section className="hero">
      <div className="panel">
        <h1 className="h1">Find your perfect brew</h1>
        <p className="muted">
          Fresh beans, simple UI, and a fast experience. Start by browsing products or say hi.
        </p>
        <div className="row gap">
          <button className="btn primary" onClick={() => nav("/products")}>
            Browse Products
          </button>
          <button className="btn ghost" onClick={() => nav("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="panel">
        <h3 className="h3">Why us</h3>
        <ul className="muted">
          <li>Freshly roasted beans</li>
          <li>Fast shipping</li>
          <li>Secure checkout</li>
        </ul>
      </div>
    </section>
  );
}

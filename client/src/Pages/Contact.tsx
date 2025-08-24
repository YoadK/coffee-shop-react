import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: POST to your /api/contact endpoint
      // await fetch(`${import.meta.env.VITE_API_URL}/contact`, { ... })
      setStatus("ok");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setStatus("err");
    }
  };

  return (
    <section>
      <h2 className="h2">Contact Us</h2>
      <form className="card form" onSubmit={onSubmit}>
        <input className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="input" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea className="input" placeholder="Message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
        <div className="row gap">
          <button className="btn primary" disabled={!name || !email || !message}>Send</button>
          {status === "ok" && <span className="ok">Thanks! We’ll get back to you.</span>}
          {status === "err" && <span className="err">Something went wrong.</span>}
        </div>
      </form>
    </section>
  );
}

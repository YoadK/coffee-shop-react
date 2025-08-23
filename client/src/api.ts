const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export type Product = { _id?: string; name: string; price: number; category?: string };

export async function listProducts(q = ""): Promise<{ data: Product[] }> {
  const r = await fetch(`${API_URL}/products?q=${encodeURIComponent(q)}`);
  if (!r.ok) throw new Error("Failed to fetch");
  return r.json();
}

export async function createProduct(p: Product): Promise<Product> {
  const r = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(p),
  });
  if (!r.ok) throw new Error((await r.json()).error || "Failed to create");
  return r.json();
}

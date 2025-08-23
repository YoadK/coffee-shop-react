import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { listProducts, createProduct } from './api'

function Header() {
  return (
    <header className="header">
      <div className="brand">☕ Coffee Shop</div>
      <nav className="nav">
        <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink>
      </nav>
    </header>
  )
}

function HomePage() {
  const nav = useNavigate()
  return (
    <div className="container">
      <div className="hero">
        <div className="panel">
          <h1 style={{marginTop:0}}>Welcome 👋</h1>
          <p className="muted">This is a neutral landing page. From here you can go browse your catalog or add new items. It’s a clean starting point for recruiters or users, instead of showing an admin form by default.</p>
          <div className="cta">
            <button className="btn primary" onClick={() => nav('/products')}>Browse Products</button>
            <button className="btn ghost" onClick={() => nav('/products?tab=add')}>Add a Product</button>
          </div>
        </div>
        <div className="panel">
          <h3 style={{marginTop:0}}>What’s included</h3>
          <ul className="muted">
            <li>Client ↔ API wiring (GET + POST)</li>
            <li>Search, loading and error states</li>
            <li>Simple form validation</li>
            <li>Router with Home and Products pages</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function ProductsPage() {
  type Product = Awaited<ReturnType<typeof listProducts>> extends { data: infer P } ? P extends Array<infer U> ? U : never : never

  const url = new URL(window.location.href)
  const initialTab = (url.searchParams.get('tab') === 'add') ? 'add' : 'browse'

  const [tab, setTab] = useState<'browse'|'add'>(initialTab as 'browse' | 'add')
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string|null>(null)
  const [items, setItems] = useState<Product[]>([])

  const fetchData = async (query: string) => {
    try {
      setError(null); setLoading(true)
      const res = await listProducts(query)
      setItems(res.data)
    } catch (e) {
      setError(
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message?: unknown }).message)
          : 'Failed to load products'
      )
    } finally { setLoading(false) }
  }

  useEffect(() => { fetchData('') }, [])

  // Add form state
  const [name, setName] = useState('')
  const [price, setPrice] = useState<number | ''>('')
  const [category, setCategory] = useState('')

  const formValid = useMemo(() => name.trim().length > 0 && price !== '' && Number(price) >= 0, [name, price])

  const onSearch = () => fetchData(q)
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') onSearch() }

  const onCreate = async () => {
    if (!formValid) return
    try {
      setError(null); setLoading(true)
      const created = await createProduct({ name: name.trim(), price: Number(price), category: category.trim() || undefined })
      // Optimistic prepend
      setItems(prev => [created, ...prev])
      setName(''); setPrice(''); setCategory('')
      setTab('browse')
    } catch (e) {
      setError(
        typeof e === 'object' && e !== null && 'message' in e
          ? String((e as { message?: unknown }).message)
          : 'Failed to create product'
      )
    } finally { setLoading(false) }
  }

  return (
    <div className="container">
      <div className="tabs">
        <button className={`tab ${tab==='browse' ? 'active' : ''}`} onClick={() => setTab('browse')}>Browse</button>
        <button className={`tab ${tab==='add' ? 'active' : ''}`} onClick={() => setTab('add')}>Add</button>
      </div>

      {error && <div className="alert" role="alert">{error}</div>}
      {loading && <div className="loading">Loading…</div>}

      {tab === 'browse' && (
        <section>
          <div className="row" style={{marginBottom:12}}>
            <input className="input" placeholder="Search by name…" value={q} onChange={e=>setQ(e.target.value)} onKeyDown={onEnter} />
            <button className="btn" onClick={onSearch}>Search</button>
            <button className="btn ghost" onClick={()=>{ setQ(''); fetchData('') }}>Reset</button>
          </div>

          <div className="grid">
            {items.map(p => (
              <article className="card" key={p._id ?? p.name}>
                <h4 style={{margin:"0 0 6px"}}>{p.name ?? 'Unnamed'}</h4>
                <div className="price">₪{Number(p.price).toFixed(2)}</div>
                {p.category && <div className="muted" style={{marginTop:6}}>Category: {p.category}</div>}
              </article>
            ))}
          </div>
        </section>
      )}

      {tab === 'add' && (
        <section className="card" style={{maxWidth:520}}>
          <h3 style={{marginTop:0}}>Add a new product</h3>
          <div className="row" style={{marginBottom:10}}>
            <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} style={{flex:1}} />
          </div>
          <div className="row" style={{marginBottom:10}}>
            <input className="input" placeholder="Price" inputMode="decimal" value={price} onChange={e=>setPrice(e.target.value === '' ? '' : Number(e.target.value))} style={{width:160}} />
            <input className="input" placeholder="Category (optional)" value={category} onChange={e=>setCategory(e.target.value)} style={{flex:1}} />
          </div>
          <div className="row">
            <button className="btn primary" onClick={onCreate} disabled={!formValid}>Create</button>
            <button className="btn ghost" onClick={()=>{ setName(''); setPrice(''); setCategory('') }}>Clear</button>
          </div>
        </section>
      )}
    </div>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}
import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { useDemo } from '@/lib/demo-context';
export const nav = [['Home','/'],['About','/about'],['Services','/services'],['Projects','/projects'],['Expertise','/expertise'],['Gallery','/gallery'],['Contact','/contact']] as const;
export function Button({children, onClick, type='button', variant='primary', className='', title}: {children:ReactNode; onClick?:()=>void; type?:'button'|'submit'; variant?:'primary'|'outline'|'light'|'ghost'; className?:string; title?:string}) { return <button title={title} type={type} onClick={onClick} className={`btn btn-${variant} ${className}`}>{children}</button>; }
export function SiteLayout({children}: {children:ReactNode}) {
  const [scrolled,setScrolled] = useState(false); const [open,setOpen] = useState(false);
  const pathname = useRouterState({select:s=>s.location.pathname}); const home = pathname === '/';
  const {contact} = useDemo();
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>28); onScroll(); window.addEventListener('scroll',onScroll); return ()=>window.removeEventListener('scroll',onScroll)},[]);
  useEffect(()=>{setOpen(false)},[pathname]);
  return <>
    <header className={`site-header ${home && !scrolled && !open ? 'site-header-overlay':''}`}>
      <div className="site-header-inner container-wide">
        <Link to="/" className="brand" aria-label="RAS Aluform home"><span className="brand-mark"><span>R</span><i /></span><span className="brand-copy"><strong>RAS ALUFORM</strong><small>CONSULTANCY LLP</small></span></Link>
        <nav className={`site-nav ${open?'site-nav-open':''}`} aria-label="Main navigation">{nav.map(([label,to])=><Link key={to} to={to} className={`nav-link ${pathname===to?'nav-active':''}`}>{label}</Link>)}<Link to="/contact" className="nav-mobile-cta">Request Consultation ↗</Link></nav>
        <div className="header-actions"><Link to="/contact" className="header-cta">Request Consultation <span>↗</span></Link><Button variant="ghost" className="menu-toggle" title={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}><span>{open?'×':'☰'}</span></Button></div>
      </div>
    </header>
    <main>{children}</main>
    <footer className="site-footer"><div className="container-wide"><div className="footer-top"><div className="footer-company"><div className="footer-logo">RAS ALUFORM<span>CONSULTANCY LLP</span></div><p>Precision-led architecture, engineering and technical consultancy for the built environment.</p><div className="footer-rule" /></div><div><h4>QUICK LINKS</h4>{nav.filter(([n])=>n!=='Expertise').map(([label,to])=><Link key={to} to={to}>{label}</Link>)}</div><div><h4>OUR SERVICES</h4>{['Architecture Consultancy','Engineering Consultancy','Aluform Consultancy','Technical Testing','Engineering Analysis'].map(s=><Link key={s} to="/services">{s}</Link>)}</div><div><h4>GET IN TOUCH</h4><p>Kolhapur, Maharashtra, India</p><a href={`tel:${contact.phone}`}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><Link to="/contact" className="footer-contact">Start a conversation ↗</Link></div></div><div className="footer-bottom"><span>© 2026 RAS ALUFORM CONSULTANCY LLP. All Rights Reserved.</span><span>Built on precision. Driven by purpose.</span><Link to="/admin/login">Admin Login</Link></div></div></footer>
  </>;
}
export function Eyebrow({children}: {children:ReactNode}) { return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>; }
export function PageBanner({tag,title,description,image}: {tag:string;title:string;description?:string;image?:string}) { return <section className="page-banner" style={image?{backgroundImage:`linear-gradient(90deg, rgba(11,31,51,.94), rgba(11,31,51,.46)), url('${image}')`}:undefined}><div className="container-wide"><Eyebrow>{tag}</Eyebrow><h1>{title}</h1>{description&&<p>{description}</p>}</div><div className="banner-index">RAS / {tag}</div></section>; }
export function SectionHeading({eyebrow,title,description,action}: {eyebrow:string;title:string;description?:string;action?:ReactNode}) { return <div className="section-heading"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{description&&<p>{description}</p>}</div>{action}</div>; }

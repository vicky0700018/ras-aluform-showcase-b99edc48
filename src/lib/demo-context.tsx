import { createContext, useContext, useState, type ReactNode } from 'react';
import { defaultContact, defaultHero, initialEnquiries, initialGallery, initialProjects, initialServices, initialTestimonials, type Enquiry, type GalleryItem, type Project, type Service, type Testimonial } from './demo-data';

type State = {
  hero: typeof defaultHero; setHero: React.Dispatch<React.SetStateAction<typeof defaultHero>>;
  contact: typeof defaultContact; setContact: React.Dispatch<React.SetStateAction<typeof defaultContact>>;
  about: string; setAbout: React.Dispatch<React.SetStateAction<string>>;
  expertise: string; setExpertise: React.Dispatch<React.SetStateAction<string>>;
  services: Service[]; setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  projects: Project[]; setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  gallery: GalleryItem[]; setGallery: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
  testimonials: Testimonial[]; setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  enquiries: Enquiry[]; setEnquiries: React.Dispatch<React.SetStateAction<Enquiry[]>>;
  loggedIn: boolean; setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
const DemoContext = createContext<State | null>(null);
export function DemoProvider({ children }: { children: ReactNode }) {
  const [hero,setHero] = useState(defaultHero);
  const [contact,setContact] = useState(defaultContact);
  const [about,setAbout] = useState('We bring architecture, engineering and practical site expertise together to support thoughtful project decisions. From aluminium formwork to technical testing, our work is grounded in precision and a clear understanding of real-world execution.');
  const [expertise,setExpertise] = useState('Our multidisciplinary approach connects design intent with technical feasibility, quality and on-site execution.');
  const [services,setServices] = useState(initialServices);
  const [projects,setProjects] = useState(initialProjects);
  const [gallery,setGallery] = useState(initialGallery);
  const [testimonials,setTestimonials] = useState(initialTestimonials);
  const [enquiries,setEnquiries] = useState(initialEnquiries);
  const [loggedIn,setLoggedIn] = useState(false);
  return <DemoContext.Provider value={{hero,setHero,contact,setContact,about,setAbout,expertise,setExpertise,services,setServices,projects,setProjects,gallery,setGallery,testimonials,setTestimonials,enquiries,setEnquiries,loggedIn,setLoggedIn}}>{children}</DemoContext.Provider>;
}
export function useDemo() { const context = useContext(DemoContext); if (!context) throw new Error('DemoProvider missing'); return context; }

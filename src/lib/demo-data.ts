import heroImage from '@/assets/hero-architecture.jpg';
import deskImage from '@/assets/engineering-desk.jpg';
import buildingImage from '@/assets/project-building.jpg';
import siteImage from '@/assets/aluform-site.jpg';

export const images = { heroImage, deskImage, buildingImage, siteImage };
export type Service = { id: string; title: string; description: string; status: string; code: string };
export type Project = { id: string; title: string; location: string; category: string; description: string; image: string; scope: string; details: string; status: string };
export type GalleryItem = { id: string; title: string; category: string; description: string; image: string };
export type Testimonial = { id: string; client: string; company: string; quote: string; rating: string; status: string };
export type Enquiry = { id: string; name: string; email: string; phone: string; company: string; service: string; message: string; date: string; status: string };
export const initialServices: Service[] = ([
  ['Architectural Consultancy','Planning, design coordination and architectural consultation.','01'],
  ['Structural Engineering','Technical structural planning, evaluation and engineering support.','02'],
  ['Aluform Consultancy','Specialized consultancy for aluminium formwork systems and execution.','03'],
  ['Technical Testing','Technical testing and performance assessment for engineering requirements.','04'],
  ['Engineering Analysis','Detailed technical analysis and engineering evaluation.','05'],
  ['Site Technical Consultancy','Professional technical guidance and on-site engineering support.','06'],
  ['Project Planning','Technical project planning, coordination and execution support.','07'],
  ['Quality & Compliance','Technical quality assessment and documentation support.','08'],
] as [string,string,string][]).map(([title,description,code]) => ({ id: code, title, description, code, status: 'Active' }));
export const initialProjects: Project[] = ([
  ['modern-residential-tower','Modern Residential Tower','Kolhapur, Maharashtra','Aluform','Structural and aluminium formwork consultancy for a contemporary residential landmark.',heroImage],
  ['commercial-complex','Commercial Complex','Pune, Maharashtra','Engineering','Engineering consultancy supporting efficient commercial development.',buildingImage],
  ['high-rise-development','High-Rise Residential Development','Maharashtra','Analysis','Detailed technical analysis for a high-rise residential structure.',siteImage],
  ['industrial-facility','Industrial Facility','Maharashtra','Testing','Technical testing and quality assessment for an industrial facility.',deskImage],
  ['urban-residential','Urban Residential Project','Kolhapur','Architecture','Architectural coordination and engineering support for urban living.',buildingImage],
  ['premium-commercial','Premium Commercial Development','Pune','Engineering','Integrated technical consultancy for a premium commercial destination.',heroImage],
] as [string,string,string,string,string,string][]).map(([id,title,location,category,description,image]) => ({ id,title,location,category,description,image,scope:'Technical planning, design review, site coordination and practical execution support.',details:'Engineering review, project documentation, quality assessment and technical consultancy.',status:'Published' }));
export const initialGallery: GalleryItem[] = [
  { id:'1', title:'Formwork inspection', category:'Aluform', description:'Aluminium formwork technical review', image:siteImage },
  { id:'2', title:'Structural development', category:'Projects', description:'High-rise construction overview', image:heroImage },
  { id:'3', title:'Design coordination', category:'Architecture', description:'Architectural model and drawings', image:deskImage },
  { id:'4', title:'Commercial architecture', category:'Engineering', description:'Contemporary building study', image:buildingImage },
  { id:'5', title:'Site evaluation', category:'Site Work', description:'On-site technical coordination', image:siteImage },
  { id:'6', title:'Technical planning', category:'Technical Analysis', description:'Precision-led design review', image:deskImage },
];
export const initialTestimonials: Testimonial[] = [
  { id:'1', client:'Project Partner', company:'Residential Development', quote:'Professional technical approach with excellent attention to project requirements.', rating:'5', status:'Active' },
  { id:'2', client:'Project Collaborator', company:'Commercial Project', quote:'Strong engineering understanding and practical consultancy support.', rating:'5', status:'Active' },
  { id:'3', client:'Industry Associate', company:'Engineering Project', quote:'Very systematic and professional throughout the project.', rating:'5', status:'Active' },
];
export const initialEnquiries: Enquiry[] = [
  { id:'1', name:'Sample Client', email:'client@example.com', phone:'9876543210', company:'Sample Developers', service:'Aluform Consultancy', message:'Interested in technical support for a proposed project.', date:'Demo entry', status:'New' },
  { id:'2', name:'Demo Partner', email:'partner@example.com', phone:'9876543211', company:'Example Projects', service:'Structural Engineering', message:'Seeking engineering consultancy for an upcoming development.', date:'Demo entry', status:'Contacted' },
];
export const defaultHero = { badge:'ARCHITECTURE • ENGINEERING • TECHNICAL ANALYSIS', heading:'Engineering Precision. Architectural Excellence.', description:'RAS ALUFORM CONSULTANCY LLP delivers professional architecture, engineering consultancy, technical testing and analysis solutions with a focus on precision, performance and practical execution.', primary:'Explore Our Services', secondary:'Request Consultation', image:heroImage };
export const defaultContact = { company:'RAS ALUFORM CONSULTANCY LLP', phone:'3153413215', email:'rasaluform@gmail.com', address:'Csno.250 B/35e Ward No103, D.C Elegance, Nagala Park, Kolhapur, Karvir, Kolhapur, Maharashtra, India, 416003', description:'Architecture and engineering consultancy, technical testing and analysis.' };
export const expertiseItems = ['Aluform Systems','Structural Engineering','Architectural Coordination','Technical Testing','Site Analysis','Quality Assessment','Engineering Documentation','Project Consultancy'];
export const testingItems = ['Technical Inspection','Structural Assessment','Material / Construction Evaluation','Site Analysis','Engineering Testing','Quality Assessment','Performance Analysis','Technical Reporting'];

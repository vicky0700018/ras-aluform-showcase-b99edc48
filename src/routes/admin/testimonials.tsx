import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/testimonials')({
 head: () => ({ meta: [{ title: 'Testimonials | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo testimonials management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Testimonials | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo testimonials management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="testimonials"/>
});

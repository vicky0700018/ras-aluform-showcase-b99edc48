import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/enquiries')({
 head: () => ({ meta: [{ title: 'Enquiries | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo enquiries management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Enquiries | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo enquiries management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="enquiries"/>
});

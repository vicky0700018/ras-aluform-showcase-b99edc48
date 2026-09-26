import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/projects')({
 head: () => ({ meta: [{ title: 'Projects | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo projects management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Projects | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo projects management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="projects"/>
});

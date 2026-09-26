import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/dashboard')({
 head: () => ({ meta: [{ title: 'Dashboard | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo dashboard management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Dashboard | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo dashboard management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="dashboard"/>
});

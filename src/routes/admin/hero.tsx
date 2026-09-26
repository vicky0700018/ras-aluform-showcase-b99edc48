import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/hero')({
 head: () => ({ meta: [{ title: 'Hero | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo hero management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Hero | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo hero management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="hero"/>
});

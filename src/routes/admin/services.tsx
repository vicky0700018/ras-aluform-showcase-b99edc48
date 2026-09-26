import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/services')({
 head: () => ({ meta: [{ title: 'Services | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo services management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Services | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo services management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="services"/>
});

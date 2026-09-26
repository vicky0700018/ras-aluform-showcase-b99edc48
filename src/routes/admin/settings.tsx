import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/settings')({
 head: () => ({ meta: [{ title: 'Settings | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo settings management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Settings | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo settings management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="settings"/>
});

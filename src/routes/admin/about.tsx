import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/about')({
 head: () => ({ meta: [{ title: 'About | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo about management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'About | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo about management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="about"/>
});

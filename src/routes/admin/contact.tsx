import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/contact')({
 head: () => ({ meta: [{ title: 'Contact | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo contact management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Contact | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo contact management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="contact"/>
});

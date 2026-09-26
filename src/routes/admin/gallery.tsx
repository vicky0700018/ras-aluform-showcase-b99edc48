import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/Admin';
export const Route = createFileRoute('/admin/gallery')({
 head: () => ({ meta: [{ title: 'Gallery | RAS ALUFORM Admin' }, { name: 'description', content: 'Demo gallery management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Gallery | RAS ALUFORM Admin' }, { property: 'og:description', content: 'Demo gallery management for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: () => <AdminPage section="gallery"/>
});

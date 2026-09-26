import { createFileRoute } from '@tanstack/react-router';
import { AdminLogin } from '@/components/Admin';
export const Route = createFileRoute('/admin/login')({
 head: () => ({ meta: [{ title: 'Admin Login | RAS ALUFORM CONSULTANCY LLP' }, { name: 'description', content: 'Demo admin access for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:title', content: 'Admin Login | RAS ALUFORM' }, { property: 'og:description', content: 'Demo admin access for RAS ALUFORM CONSULTANCY LLP.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
 component: AdminLogin,
});

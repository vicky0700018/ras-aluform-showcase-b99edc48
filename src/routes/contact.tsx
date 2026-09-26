import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/PublicPages';
import { SiteLayout } from '@/components/Site';
export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [
    { title: 'Contact | RAS ALUFORM CONSULTANCY LLP' },
    { name: 'description', content: 'Contact at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:title', content: 'Contact | RAS ALUFORM CONSULTANCY LLP' },
    { property: 'og:description', content: 'Contact at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <SiteLayout><ContactPage/></SiteLayout>,
});

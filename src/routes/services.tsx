import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/PublicPages';
import { SiteLayout } from '@/components/Site';
export const Route = createFileRoute('/services')({
  head: () => ({ meta: [
    { title: 'Our Services | RAS ALUFORM CONSULTANCY LLP' },
    { name: 'description', content: 'Our Services at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:title', content: 'Our Services | RAS ALUFORM CONSULTANCY LLP' },
    { property: 'og:description', content: 'Our Services at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <SiteLayout><ServicesPage/></SiteLayout>,
});

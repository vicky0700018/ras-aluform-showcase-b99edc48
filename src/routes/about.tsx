import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/PublicPages';
import { SiteLayout } from '@/components/Site';
export const Route = createFileRoute('/about')({
  head: () => ({ meta: [
    { title: 'About Us | RAS ALUFORM CONSULTANCY LLP' },
    { name: 'description', content: 'About Us at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:title', content: 'About Us | RAS ALUFORM CONSULTANCY LLP' },
    { property: 'og:description', content: 'About Us at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <SiteLayout><AboutPage/></SiteLayout>,
});

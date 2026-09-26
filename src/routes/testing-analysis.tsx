import { createFileRoute } from '@tanstack/react-router';
import { TestingPage } from '@/components/PublicPages';
import { SiteLayout } from '@/components/Site';
export const Route = createFileRoute('/testing-analysis')({
  head: () => ({ meta: [
    { title: 'Testing & Analysis | RAS ALUFORM CONSULTANCY LLP' },
    { name: 'description', content: 'Testing & Analysis at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:title', content: 'Testing & Analysis | RAS ALUFORM CONSULTANCY LLP' },
    { property: 'og:description', content: 'Testing & Analysis at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <SiteLayout><TestingPage/></SiteLayout>,
});

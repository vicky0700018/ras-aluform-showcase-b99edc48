import { createFileRoute } from '@tanstack/react-router';
import { ExpertisePage } from '@/components/PublicPages';
import { SiteLayout } from '@/components/Site';
export const Route = createFileRoute('/expertise')({
  head: () => ({ meta: [
    { title: 'Technical Expertise | RAS ALUFORM CONSULTANCY LLP' },
    { name: 'description', content: 'Technical Expertise at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:title', content: 'Technical Expertise | RAS ALUFORM CONSULTANCY LLP' },
    { property: 'og:description', content: 'Technical Expertise at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <SiteLayout><ExpertisePage/></SiteLayout>,
});

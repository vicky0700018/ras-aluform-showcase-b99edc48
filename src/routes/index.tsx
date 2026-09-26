import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/PublicPages';
import { SiteLayout } from '@/components/Site';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Architecture & Engineering Consultancy | RAS ALUFORM CONSULTANCY LLP' },
    { name: 'description', content: 'Architecture & Engineering Consultancy at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:title', content: 'Architecture & Engineering Consultancy | RAS ALUFORM CONSULTANCY LLP' },
    { property: 'og:description', content: 'Architecture & Engineering Consultancy at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <SiteLayout><HomePage/></SiteLayout>,
});

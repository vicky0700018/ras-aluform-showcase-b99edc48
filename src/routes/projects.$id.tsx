import { createFileRoute } from '@tanstack/react-router';
import { ProjectDetailPage } from '@/components/PublicPages';
import { SiteLayout } from '@/components/Site';
export const Route = createFileRoute('/projects/$id')({
  head: () => ({ meta: [
    { title: 'Project Details | RAS ALUFORM CONSULTANCY LLP' },
    { name: 'description', content: 'Project Details at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:title', content: 'Project Details | RAS ALUFORM CONSULTANCY LLP' },
    { property: 'og:description', content: 'Project Details at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <SiteLayout><ProjectDetailPage/></SiteLayout>,
});

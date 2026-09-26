import { createFileRoute } from '@tanstack/react-router';
import { ProjectsPage } from '@/components/PublicPages';
import { SiteLayout } from '@/components/Site';
export const Route = createFileRoute('/projects')({
  head: () => ({ meta: [
    { title: 'Projects | RAS ALUFORM CONSULTANCY LLP' },
    { name: 'description', content: 'Projects at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:title', content: 'Projects | RAS ALUFORM CONSULTANCY LLP' },
    { property: 'og:description', content: 'Projects at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <SiteLayout><ProjectsPage/></SiteLayout>,
});

import { createFileRoute } from '@tanstack/react-router';
import { GalleryPage } from '@/components/PublicPages';
import { SiteLayout } from '@/components/Site';
export const Route = createFileRoute('/gallery')({
  head: () => ({ meta: [
    { title: 'Gallery | RAS ALUFORM CONSULTANCY LLP' },
    { name: 'description', content: 'Gallery at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:title', content: 'Gallery | RAS ALUFORM CONSULTANCY LLP' },
    { property: 'og:description', content: 'Gallery at RAS ALUFORM CONSULTANCY LLP — architecture, engineering, aluform consultancy and technical analysis in Kolhapur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: () => <SiteLayout><GalleryPage/></SiteLayout>,
});

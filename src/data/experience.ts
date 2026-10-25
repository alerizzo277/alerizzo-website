import { it } from '../i18n/it';
import type { TimelineEntry } from './timeline';

// Metadati condivisi; testi centralizzati nei dizionari IT/EN.
export const experience = [
  {
    technologies: ['Angular', 'Java', 'SQL'],
    id: 'argentea', name: 'Argentea S.r.l.', role: it.entries['argentea'].role,
    start: '2025-04', logo: '/logos/argentea/argentea.png', website: 'https://www.argentea.it/',
    dialogLogo: { src: '/logos/argentea/argentea-zucchetti.png', width: 1983, height: 793, alt: it.entries['argentea'].logoAlt },
    paragraphs: it.entries['argentea'].paragraphs,
  },
  {
    technologies: ['Angular', 'TypeScript', 'GraphQL'],
    id: 'job-informatica', name: 'Job Informatica', role: it.entries['job-informatica'].role,
    start: '2024-01', end: '2025-03', logo: '/logos/jobinformatica.png', website: 'https://www.jobinformatica.com/en/',
    paragraphs: it.entries['job-informatica'].paragraphs,
  },
] as const satisfies readonly TimelineEntry[];

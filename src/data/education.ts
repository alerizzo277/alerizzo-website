import { it } from '../i18n/it';
import type { TimelineEntry } from './timeline';

export const education = [
  {
    technologies: ['PHP', 'MariaDB', 'InfluxDB', 'FFmpeg'],
    id: 'unitn', name: 'Università di Trento', role: it.entries['unitn'].role,
    start: '2020-09', end: '2024-03', logo: '/logos/unitn.png', website: 'https://www.unitn.it/en',
    paragraphs: it.entries['unitn'].paragraphs,
    document: { href: '/documents/tesi-ale-rizzo.pdf', label: it.entries['unitn'].documentLabel },
  },
  {
    id: 'itt', name: 'ITT Vittorio Veneto', role: it.entries['itt'].role,
    start: '2015-09', end: '2020-06', logo: '/logos/iis.png', website: 'https://www.iisvittorioveneto.edu.it/',
    technologies: ['PHP', 'MySQL', 'MVC'],
    repository: { href: 'https://github.com/LeonardoDeFaveri/ErasmusReview', label: 'GitHub' },
    paragraphs: it.entries['itt'].paragraphs,
  },
] as const satisfies readonly TimelineEntry[];

export interface TimelineEntry {
  id: string;
  name: string;
  role: string;
  start: string;
  end?: string;
  logo: string;
  website: string;
  dialogLogo?: { src: string; width: number; height: number; alt: string };
  technologies?: readonly string[];
  paragraphs: readonly string[];
  repository?: { href: string; label: string };
  document?: { href: string; label: string };
}

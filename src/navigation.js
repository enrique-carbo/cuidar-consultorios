import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Especialistas',
      links: [
        {
          text: 'Dermatología',
          href: getPermalink('/homes/dermatologia'),
        },
        {
          text: 'Medicina General',
          href: getPermalink('/homes/medicinageneral'),
        },
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Turnos Web',
          href: getPermalink('/#turnosweb'),
        },
        {
          text: 'Demanda Espontánea',
          href: getPermalink('/#demandaespontanea'),
        },
        {
          text: 'Urgencias',
          href: getPermalink('/emergency'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Términos',
          href: getPermalink('/terms'),
        },
        {
          text: 'Políticas de Privacidad',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Urgencias',
      href: '/emergency',
    },
  ],
  actions: [{ text: 'Turnos', href: 'https://cal.com/enriquecarbo/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Especialidades',
      links: [
        { text: 'Dermatologia', href: '/homes/dermatologia' },
        { text: 'Medicina General', href: '/homes/medicinageneral' },
        
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'Turnos Web', href: '/#turnosweb' },
        { text: 'Demanda espontánea', href: '/#demandaespontanea' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Urgencias',
      links: [
        { text: 'Urgencias', href: '/emergency' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        
      ],
    },
    {
      title: 'Blog',
      links: [
        { text: 'Blog', href: '/blog#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Políticas de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Material solo con fines educativos. No es un consejo médico.
    Antes de tomar cualquier medicamento, suplemento o hierbas, consulte a su médico para una evaluación adecuada.
  `,
};

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
        }        
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
          text: 'Términos',
          href: getPermalink('/terms'),
        },
        {
          text: 'Políticas de Privacidad',
          href: getPermalink('/privacy'),
        }
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
          text: 'Primeros Auxilios',
          href: getPermalink('primeros-auxilios', 'category'),
        }
      ],
    },
    {
      text: 'Urgencias',
      href: '/emergency',
    }
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
      ],
    },
    {
      title: 'Urgencias',
      links: [
        { text: 'Urgencias', href: '/emergency' }        
      ],
    },
    {
      title: 'Blog',
      links: [
        { text: 'Blog', href: '/blog' },
        {
          text: 'Primeros Auxilios',
          href: getPermalink('primeros-auxilios', 'category'),
        }
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

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'id6',
  tagline: 'Open source authentication and authorization as a service',
  url: 'https://docs.id6.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'id6',
  projectName: 'id6',
  themeConfig: {
    image: 'static/img/social-cover.png',
    navbar: {
      title: '',
      logo: {
        alt: 'id6 logo',
        src: 'img/logo.svg',
      },
      items: [
        { href: 'https://twitter.com/id6io', label: 'Twitter', position: 'right' },
        { href: 'https://github.com/id6/id6', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/id6io',
            },
            {
              label: 'Github',
              href: 'https://github.com/id6/id6/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.id6.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/id6/id6',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} id6`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/id6/id6-docs/edit/latest/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    ['@easyops-cn/docusaurus-search-local', {
      hashed: true,
    }],
  ],
  scripts: [
    {
      src: 'https://ackee.id6.io/ackee.js',
      async: true,
      defer: false,
      'data-ackee-server': 'https://ackee.id6.io',
      'data-ackee-domain-id': 'bbda296d-76ff-429a-a6ad-fb20766ee297',
    },
  ],
};

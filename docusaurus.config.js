/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'id6',
  tagline: 'Open source authentication and authorization as a service',
  url: 'https://docs.id6.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'id6', // Usually your GitHub org/user name.
  projectName: 'id6', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'id6',
      logo: {
        alt: 'id6 logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: '/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/id6/id6',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
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
              to: 'https://id6.io/blog',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/id6/id6/edit/latest/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

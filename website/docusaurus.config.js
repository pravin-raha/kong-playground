module.exports = {
  title: 'Kong Playground',
  tagline: 'Quick setup to try out kong ecosystem.',
  url: 'https://pravin-raha.github.io',
  baseUrl: '/kong-playground/',
  favicon: 'img/favicon.ico',
  organizationName: 'pravin-raha', 
  projectName: 'kong-playground',
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    navbar: {
      title: 'Kong Playground',
      logo: {
        alt: 'Kong Playground',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/getting_started',
          activeBasePath: 'docs/getting_started',
          label: 'Docs',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting started",
              to: "docs/getting_started"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub Repo",
              href: "https://github.com/pravin-raha/kong-playground"
            }
          ]
        }
      ],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

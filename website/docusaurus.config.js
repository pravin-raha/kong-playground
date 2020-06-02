module.exports = {
  title: 'Kong Playground',
  tagline: 'Quick setup to try out kong ecosystem.',
  url: 'https://pravin-raha.github.io',
  baseUrl: '/kong-playground/',
  favicon: 'img/favicon.ico',
  organizationName: 'pravin-raha', 
  projectName: 'kong-playground',
  themeConfig: {
    navbar: {
      title: 'Kong Playground',
      logo: {
        alt: 'Kong Playground',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
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
              href: "https://pravin-raha.github.io/kong-playground"
            }
          ]
        }
      ],
      scripts: ['https://buttons.github.io/buttons.js'],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting_started',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  
  title: 'AISP - Artificial Immune Systems Project',
  tagline: 'Based on metaphors of the immune system',
  favicon: 'img/icon.svg',

  // Set the production url of your site here
  url: 'https://ais-project.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AIS-Project', // Usually your GitHub org/user name.
  projectName: 'ais-project.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      pt: {
        htmlLang: 'pt-br',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      plugins: ['@docusaurus/plugin-content-pages'],
      sidebar: {
        collapsible: true,
      },
      navbar: {
        title: 'AISP',
        logo: {
          alt: 'AISP',
          src: 'img/logo.png',
        },
        
        items: [
          
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/AIS-Project/aisp',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
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
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Wiki Github',
                href: 'https://github.com/AIS-Project/aisp/wiki',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AIS-Project/aisp',
              },
              {
                label: 'Pipy',
                href: 'https://pypi.org/project/aisp/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AISP, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        wrap: true,
      },
      pagination: false,
    }),
    
    themes: [
      [
        '@easyops-cn/docusaurus-search-local',
        /* @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          hashed: true,
          language: ["en", "pt"],
          indexBlog: false,
          indexPages: false,
          highlightSearchTermsOnTargetPage: true,
          searchResultLimits: 6,
        }),
      ],
    ],
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv/config');
const {themes} = require('prism-react-renderer')
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const math = require('remark-math');
const katex = require('rehype-katex');
const versions = require('./versions.json');
const isDev = process.env.NODE_ENV === 'development';

function getNextVersionName() {
  return versions[0];
}

function getVersions() {
  if (isDev) {
    return ['current', ...versions];
  }

  return versions;
}

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'AISP - Artificial Immune Systems Package',
  tagline: 'A set of immuno inspired techniques!',
  favicon: 'img/icon.svg',

  // Set the production url of your site here
  url: process.env.URL || 'https://ais-package.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // @ts-ignore
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AIS-Package', // Usually your GitHub org/user name.
  projectName: 'ais-package.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      pt: {
        htmlLang: 'pt-br',
        calendar: 'DD/MM/YYYY',
      },
    },

  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          remarkPlugins: [math],
          rehypePlugins: [
            [katex, { strict: false }],
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: isDev ? 'current' : getNextVersionName(),
          onlyIncludeVersions: getVersions(),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/aisp-social-card.jpg',
      metadata: [
        { name: 'keywords', content: 'Package python' },
        { name: 'keywords', content: 'classification' },
        { name: 'keywords', content: 'artificial immune system' },
        { name: 'keywords', content: 'natural computing' },
        { name: 'keywords', content: 'scientific computing' },
        { name: 'keywords', content: 'aisp' },
        { name: 'keywords', content: 'aisp python package' },
        { nome: 'keywords', conteúdo: 'Pacote python' },
        { nome: 'keywords', conteúdo: 'classificação' },
        { nome: 'keywords', conteúdo: 'sistema imunológico artificial' },
        { nome: 'keywords', conteúdo: 'computação natural' },
        { nome: 'keywords', conteúdo: 'computação científica' },
        { nome: 'keywords', conteúdo: 'Negative Selection Algorithm' },
      ],
      plugins: [
        '@docusaurus/plugin-content-pages',
        '@docusaurus/plugin-sitemap',
        {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      ],
      sidebar: {
        collapsible: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
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
            href: 'https://github.com/AIS-Package/aisp',
            label: 'GitHub',
            position: 'right'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: false,
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
                href: 'https://github.com/AIS-Package/aisp/wiki',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AIS-Package/aisp',
              },
              {
                label: 'PyPi',
                href: 'https://pypi.org/project/aisp/',
              },
              {
                label: 'TestPyPI',
                href: 'https://test.pypi.org/project/aisp/',
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

import { defineConfig } from 'vitepress'

const hostname = 'https://oopbuyspreadsheet-budget.com'
const siteTitle = 'Best Oopbuy Budget Spreadsheet 2026 | 2,500+ Affordable Finds with QC Photos'
const siteDescription = 'Explore the ultimate Oopbuy budget spreadsheet updated daily. Discover 2,500+ verified affordable sneakers, hoodies, and streetwear finds under $25 with real QC photos and USD pricing.'

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  lang: 'en-US',
  cleanUrls: 'with-subfolders',

  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtm.js?id=GTM-KJ455LX2' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    `],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: siteTitle }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: hostname }],
    ['meta', { property: 'og:image', content: `${hostname}/favicon.png` }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: siteTitle }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
    ['script', {}, `
      (function() {
        function sendTracking(eventName) {
          if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, {
              event_category: 'directory_navigation',
              event_label: eventName,
              value: 1.0
            });
          }
        }
        function bindTracking() {
          document.querySelectorAll('a.cta-spreadsheet, a.hero-action, a.wide-cta, a.text-button').forEach(function(el) {
            if (!el.dataset.tracked) {
              el.dataset.tracked = '1';
              el.addEventListener('click', function() { sendTracking('external_directory_click'); });
            }
          });
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindTracking);
        else bindTracking();
        new MutationObserver(bindTracking).observe(document.body, { childList: true, subtree: true });
      })();
    `],
  ],

  themeConfig: {
    logo: '/favicon.png',
    siteTitle,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Under $10', link: 'https://productsite-8wf.pages.dev/?view=styles&platform=oopbuy&price=under-10' },
      { text: 'Under $20', link: 'https://productsite-8wf.pages.dev/?view=styles&platform=oopbuy&price=under-20' },
      { text: 'Budget Sneakers', link: 'https://productsite-8wf.pages.dev/?view=styles&platform=oopbuy&category=sneakers&price=under-20' },
      { text: 'Winter Hoodies', link: 'https://productsite-8wf.pages.dev/?view=styles&platform=oopbuy&category=hoodies&season=winter' },
      { text: 'Summer Tees', link: 'https://productsite-8wf.pages.dev/?view=styles&platform=oopbuy&category=tees&season=summer' },
      { text: 'Brands', link: '/#featured-brands' },
      { text: 'All Finds', link: 'https://productsite-8wf.pages.dev/?view=styles&platform=oopbuy' },
    ],
    sidebar: false,
    outline: false,
  },

  sitemap: {
    hostname,
  },
})

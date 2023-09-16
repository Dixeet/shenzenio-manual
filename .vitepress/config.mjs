import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "Shenzen IO Manual",
  description: "Shenzen IO Digital Manual",
  themeConfig: {
    nav: [
      { text: 'Language Reference Card', link: '/' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Language Reference Card', link: '/' },
          {
            text: 'Story Introduction',
            collapsed: true,
            items: [
              { text: 'Some progress… and a suggestion', link: '/stories/progress-suggestion' },
              { text: 'Great chatting with you', link: '/stories/great-chatting' },
              { text: 'Visa Application Form of the People’s Republic of China', link: '/stories/visa-application' }
            ]
          },
          {
            text: 'Application Notes',
            collapsed: true,
            items: [
              { text: 'AN268: Two Interfaces, Limitless Possibilities', link: '/application-notes/an268' },
              { text: 'AN393: Make Sure To Get Enough Sleep!', link: '/application-notes/an393' },
              { text: 'AN650: Reference Design: Touch-Activated Light Controller', link: '/application-notes/an650' },
            ]
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dixeet/shenzenio-manual' }
    ]
  }
})

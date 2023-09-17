import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: './src',
  title: "Shenzen IO Manual",
  description: "Shenzen IO Digital Manual",
  markdown: {
    breaks: true,
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    },

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
          { text: 'MCxxxx Family Language Reference', link: '/mcxxxx-language' },
          {
            text: 'Parts Datasheets',
            collapsed: true,
            items: [
              { text: 'MC4000', link: '/parts/mc4000' },
              { text: 'MC6000', link: '/parts/mc6000' },
              { text: 'DX300', link: '/parts/dx300' },
              { text: '100P-14', link: '/parts/100p-14' },
              { text: '200P-14', link: '/parts/200p-14' },
              { text: 'LC70Gxx', link: '/parts/lc70gxx' },
              { text: 'DT2415', link: '/parts/dt2415' },
              { text: 'C2S-RF901', link: '/parts/c2s-rf901' },
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

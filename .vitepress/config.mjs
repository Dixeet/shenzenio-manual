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
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dixeet/shenzenio-manual' }
    ]
  }
})

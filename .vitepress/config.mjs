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
          { text: 'Language Reference Card', link: '/' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dixeet/shenzenio-manual' }
    ]
  }
})

import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Hongbusi',
  description: 'Hongbusi\'s personal site.',

  srcDir: './src',
  lastUpdated: true,

  themeConfig: {
    nav: [

    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/Hongbusi' },
      { icon: 'github', link: 'https://github.com/Hongbusi' }
    ],

    footer: {
      copyright: 'Copyright © 2021-present Hongbusi'
    }
  }
})


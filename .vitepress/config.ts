import { defineConfig } from 'vitepress'
import fs from 'fs'

function getSideBar(dir) {
  const sidebar: {}[] = []
  const files = fs.readdirSync(`docs/${dir}`)
  files.forEach((file) => {
    if (!file.includes('.md')) {
      const i = getSideBar(`${dir}/${file}`)
      let entry = {
        text: file.replace(/-/g, ' '),
        link: `/docs/${dir}/${file}/`,
        items: [ ...i ],
      }
      if (i.length !== 0) { entry = { ...entry, collapsed: true } }
      sidebar.push(entry)
    }
  })
  return sidebar
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Appleseed",
  description: "Where to?",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Countries', link: '/docs/countries/' }
    ],

    sidebar: [ ...getSideBar('countries') ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

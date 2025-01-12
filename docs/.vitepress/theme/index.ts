import { h } from 'vue'
import { type EnhanceAppContext } from 'vitepress'
import Theme from 'vitepress/theme'
import HomePage from '../components/HomePage.vue'
import WarnBadge from '../components/WarnBadge.vue'
import StabilityLevel from '../components/StabilityLevel.vue'
import 'uno.css'
import './style.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('WarnBadge', WarnBadge)
    app.component('StabilityLevel', StabilityLevel)
  },
}

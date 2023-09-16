import DefaultTheme from 'vitepress/theme'
import './custom.scss'
import WideSubtitleBlock from '../../src/components/WideSubtitleBlock.vue';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('WideSubtitleBlock', WideSubtitleBlock)
  }
}
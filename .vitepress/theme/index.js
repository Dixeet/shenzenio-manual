import DefaultTheme from 'vitepress/theme'
import './custom.scss'
import WideSubtitleBlock from '../../src/components/WideSubtitleBlock.vue';
import TwoCols from '../../src/components/TwoCols.vue';
import ImgContainer from '../../src/components/ImgContainer.vue';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('WideSubtitleBlock', WideSubtitleBlock);
    ctx.app.component('TwoCols', TwoCols);
    ctx.app.component('ImgContainer', ImgContainer);
  }
}
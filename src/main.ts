import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: {
    en: require('./assets/en.json'),
    es: require('./assets/es.json'),
    po: require('./assets/po.json'),
    ge: require('./assets/ge.json'),
    fr: require('./assets/fr.json'),
    jp: require('./assets/jp.json'),
    ch: require('./assets/ch.json'),
    ko: require('./assets/ko.json'),
  }
});

createApp(App)
  .use(i18n)
  .mount('#app');
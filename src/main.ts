import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: {
    de: require('./assets/de.json'),
    en: require('./assets/en.json'),
    es: require('./assets/es.json'),
    fr: require('./assets/fr.json'),
    ja: require('./assets/ja.json'),
    ko: require('./assets/ko.json'),
    pt: require('./assets/pt.json'),
    zh: require('./assets/zh.json')
  }
});

createApp(App)
  .use(i18n)
  .mount('#app');
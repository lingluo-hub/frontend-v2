import '@mdi/font/css/materialdesignicons.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

import zhHans from 'vuetify/es5/locale/zh-Hans'
import ja from 'vuetify/es5/locale/ja'
import ko from 'vuetify/es5/locale/ko'
import en from 'vuetify/es5/locale/en'

import ConfirmationDialog from './confirmation-dialog'
import i18n from "@/i18n";

Vue.use(Vuetify)

const themes = {
  light: {
    accent1: colors.indigo.darken4,
    accent2: colors.orange.darken4,
    accent3: colors.blue.darken4,

    background: '#f5f5f5',
    lightenedBackground: '#d9d9d9',
    indigoBackground: '#eee',
    text: '#0e0e0e',
    textDarken: colors.grey.darken4
  },
  dark: {
    accent1: colors.indigo.lighten3,
    accent2: colors.orange.lighten3,
    accent3: colors.blue.lighten3,

    background: colors.blueGrey.darken4,
    lightenedBackground: colors.blueGrey.darken3,
    indigoBackground: '#191d37',
    text: '#ececec',
    textDarken: colors.grey.lighten3
  }
}

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  lang: {
    locales: { zh: zhHans, ja, ko, en }
  },
  theme: {
    options: {
      customProperties: true
    },
    themes
  }
})

Vue.use(ConfirmationDialog, { vuetify, i18n })

export default vuetify

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'nuxt 技术专栏',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: '{{escape description }}'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    plugins: [
        { src: '~plugins/nuxt-quill-plugin.js', ssr: false }
    ],
    css: [
        {src: '~/assets/stylus/base.styl', lang: 'stylus'},
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.core.css'
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        vendor: ['wangeditor']
        /*
        ** Run ESLint on save
        */
        // extend (config, { isDev, isClient }) {
        //   if (isDev && isClient) {
        //     config.module.rules.push({
        //       enforce: 'pre',
        //       test: /\.(js|vue)$/,
        //       loader: 'eslint-loader',
        //       exclude: /(node_modules)/
        //     })
        //   }
        // }
    }


}

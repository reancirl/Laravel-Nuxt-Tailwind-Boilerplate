export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  loadingIndicator: {
    name: 'rotating-plane',
    color: '#fff',
    background: '#d9504b'
  },

  loading: {
    color: '#d9504b',
    height: '5px',
    continuous: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Laravel-Nuxt-Tailwind | Boilerplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-tailwind.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    baseURL: 'http://localhost:8000',
  },

  proxy: {
    '/api': {
      target: 'https://localhost:8000/',
      pathRewrite: { '^/api': '/' }
    }
  },

  auth: {
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: 'http://localhost:8000',
        
        endpoints: {
          login: {
            url: '/api/login',
          },
          user: {
            url: '/api/user',
          },
          logout: {
            url: '/api/logout',
          }
        },

        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },

        refreshToken: {
          maxAge: 20160 * 60
        },
      }
    },
  
    redirect: {
      home:'/dashboard',
      logout: '/login'
    },
  },

  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-tailwind']
  }
}
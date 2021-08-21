const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['*'], // ['cdn.discordapp.com'],
  },
  ...withReactSvg({
    include: path.resolve(__dirname, 'assets'),
    webpack(config, options) {
      return config
    }
  })
}

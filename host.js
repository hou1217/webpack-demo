if (process.env.NODE_ENV === 'development') {
  module.exports = `http://media.dc.wallan-tech.com`
} else if (process.env.NODE_ENV === 'test') {
  module.exports = `http://media.dc.wallan-tech.com`
} else {
  module.exports = `http://media.dc.wallan-tech.com`
}


import host from './host'

function getApi (api) {
  return host + api
}

export default {
  all : getApi('http://media.dc.wallan-tech.com/media-dc/index?tag=__all__'),
}
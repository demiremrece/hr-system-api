const NodeCache = require('node-cache');

class Cache {
  constructor() {
    throw new Error('Use Cache.getInstance()');
  }

  static getInstance() {
    if (!Cache.instance) {
      Cache.instance = new NodeCache({ stdTTL: 100, checkperiod: 120 });

      Cache.instance.set('courses', {});
    }
    return Cache.instance;
  }
}
module.exports = Cache;

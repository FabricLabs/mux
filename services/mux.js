const Filesystem = require('@fabric/core/types/filesystem');
const Service = require('@fabric/core/types/service');

class Mux extends Service {
  constructor (settings) {
    super(settings);

    this.settings = Object.assign({
      inputs: {},
      outputs: {}
    }, this.settings, settings);

    this._state = {
      content: {}
    };

    return this;
  }
}

module.exports = Mux;

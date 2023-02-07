const Filesystem = require('@fabric/core/types/filesystem');
const Peer = require('@fabric/core/types/peer');
const Service = require('@fabric/core/types/service');

class Mux extends Service {
  constructor (settings) {
    super(settings);

    this.settings = Object.assign({
      fabric: {
        port: 7798
      },
      fs: {},
      inputs: {},
      outputs: {}
    }, this.settings, settings);

    this.fs = new Filesystem(this.settings.fs);
    this.node = new Peer(this.settings.fabric);

    this._state = {
      content: {
        status: 'PAUSED'
      }
    };

    return this;
  }

  async start () {
    this._state.content.status = 'STARTING';
    this._state.content.status = 'STARTED';
    this.commit();
    return this;
  }

  async stop () {
    this._state.content.status = 'STOPPING';
    this._state.content.status = 'STOPPED';
    this.commit();
    return this;
  }
}

module.exports = Mux;

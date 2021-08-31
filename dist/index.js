(function(){
  var torRequest, torpool;
  torRequest = require('tor-request');
  torpool = function(opt){
    opt == null && (opt = {});
    this.ports = opt.ports || [9050];
    this.ptr = 0;
    return this;
  };
  torpool.prototype = import$(Object.create(Object.prototype), {
    fetch: function(opt){
      opt == null && (opt = {});
      torRequest.setTorAddress('127.0.0.1', this.ports[this.ptr]);
      this.ptr = (this.ptr + 1) % this.ports.length;
      return new Promise(function(res, rej){
        return torRequest.request(opt, function(e, r, b){
          if (e) {
            return rej(e);
          } else {
            return res(b);
          }
        });
      });
    }
  });
  module.exports = torpool;
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);

require! <[tor-request]>

torpool = (opt = {}) ->
  @ports = opt.ports or [9050]
  @ptr = 0
  @

torpool.prototype = Object.create(Object.prototype) <<< do
  fetch: ({url}) ->
    tor-request.setTorAddress '127.0.0.1', @ports[@ptr]
    @ptr = (@ptr + 1) % @ports.length
    (res, rej) <- new Promise _
    (e, r, b) <- tor-request.request url, _
    if e => rej e else res b

module.exports = torpool

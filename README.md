# pooltor

fetch data using tor network

## usage

Need to have `tor` installed and running first:

    brew install tor
    # use following ports: 9050, 9052, 9053, 9054
    tor +SocksPort 9050 +SocksPort 9052 +SocksPort 9053 +SocksPort 9054

    plt = new pooltor ports: [9050 9052 9053 9054]
    opt = {
      url: url
      encoding: null
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36' }
    }

    # use tor network. return `Buffer` object
    plt.fetch opt

    # alternatively, use regular request
    new Promise (res, rej) ->
      (e,r,b) <- request opt, _
      return if e => rej(e) else res(b)


## License

MIT

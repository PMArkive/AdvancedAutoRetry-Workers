# Advanced Auto Retry Workers

A collection of Cloudflare workers used for the Advanced Auto Retry service.

## Workers

- **autoretry-fastdl-parser**: Runs on all FastDL map requests to store information about which IPs have downloaded a map
- **autoretry-api**: Runs as an API for the [Advanced Auto Retry plugin](https://github.com/Vauff/AdvancedAutoRetry) to connect to and grab the information stored by the parser

## Installation

Installation is too complex to maintain a proper tutorial for. Feel free to contact Vauff for some assistance if you're interested in using this on your server, or try it on your own if you're well versed in SourceMod and Cloudflare setup.

Some key points if you're doing the latter:
- IPv6 needs to be disabled on the Cloudflare domain so the IPs match what clients are using to connect to the gameserver
- Due to the 1000 KV write limit on the free workers plan, you need to subscribe to Workers Bundled if you intend to use this on a server where more than 1000 map download requests can happen per day
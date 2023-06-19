# cgwebhooks
command line utility to interact with the Optimizely Content Graph Webhooks API

## Installation

```shell
npm i cgwebhooks-cli -g

yarn global add cgwebhooks-cli
```

## Actions

You can perform the following actions with the CLI

### --help

use --help to list all commands and options

```shell
Usage: cg-webhooks-cli [options] [command]

CLI to use the Optimizely Content Graph Webhooks API

Options:
  -V, --version                            output the version number
  -h, --help                               display help for command

Commands:
  list <appkey> <appSecret>                lists currently registered commands
  add <appkey> <appSecret> <url>           add a new webhook
  delete <appkey> <appSecret> <webhookId>  delete an existing registered webhook
  help [command]                           display help for command
```


### list

Lists the webhooks registered on your Content Graph Instance
```shell
cgwebhooks list {appKey} {appSecret}

Output:
---------------------------------------------
id: c6cb3a2a-8d4b-4b48-89d2-7e8e92f44160
---------------------------------------------
url: https://webhook.site/7e8e92f44160
method: POST
```
### add

Register a new webhook on your Content Graph Instance
```shell
cgwebhooks add {appKey} {appSecret} {webhookUrlToInvoke}

Output:
webhook registered with url: {webhookUrlToInvoke}

```

### delete

Delete an existing registered webhook

```shell
cgwebhooks delete {appKey} {appSecret} {webhookId}

Output:
webhook deleted with id webhookId

```
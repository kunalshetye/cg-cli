import {createCommand} from "commander";
import {sendRequest} from "../lib/hmac.js";
import {webhookApiUrl} from "./webhooks.js";
const log = console.log;

export const listWebhooksCmd = createCommand("list")
    .description("lists currently registered webhooks")
    .argument("<appkey>", "ContentGraph AppKey")
    .argument("<appSecret>", "ContentGraph AppSecret")
    .action((appKey, appSecret) => {
        sendRequest(webhookApiUrl, appKey, appSecret, "GET")
            .then(r => r.json())
            .then((json) => {
                //log(json);
                json.forEach((webhook) => {
                    log(`---------------------------------------------`)
                    log(`id: ${webhook.id}`);
                    log(`---------------------------------------------`)
                    log(`url: ${webhook.request.url}`);
                    if(webhook.request.method !== undefined)
                        log(`method: ${webhook.request.method}`)
                    if(webhook.request.headers !== undefined)
                        log(`method: ${webhook.request.headers}`)
                    log();
                })
            })
            .catch((error) => {
                log(`failed with error: ${error}`);
            });
    })
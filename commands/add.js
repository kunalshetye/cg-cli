import {createCommand} from "commander";
import {sendRequest} from "./hmac.js";
import {webhookApiUrl} from "./commands.js";
const log = console.log;

export const addWebhooksCmd = createCommand("add")
    .description("add a new webhook")
    .argument("<appkey>", "ContentGraph AppKey")
    .argument("<appSecret>", "ContentGraph AppSecret")
    .argument("<url>", "Webhook Endpoint to Invoke")
    .action((appKey, appSecret, url) => {
        const requestObject = {
            request: {
                url: url,
                method: "POST"
            }
        }
        sendRequest(webhookApiUrl, appKey, appSecret, "POST", {}, requestObject)
            .then(r => {
                log(`webhook registered with url: ${url}`)
            })
            .catch((error) => {
                log(`failed with error: ${error}`);
            });
    });
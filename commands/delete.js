import {createCommand} from "commander";
import {sendRequest} from "./hmac.js";
import {webhookApiUrl} from "./commands.js";
const log = console.log;

export const deleteWebhooksCmd = createCommand("delete")
    .description("delete an existing registered webhook")
    .argument("<appkey>", "ContentGraph AppKey")
    .argument("<appSecret>", "ContentGraph AppSecret")
    .argument("<webhookId>", "Webhook Id to Delete")
    .action((appKey, appSecret, webhookId) => {
        sendRequest(`${webhookApiUrl}/${webhookId}`, appKey, appSecret, "DELETE")
            .then(r => {
                log(`webhook deleted with id ${webhookId}`);
            })
            .catch((error) => {
                log(`failed with error: ${error}`);
            });
    });
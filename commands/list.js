import {createCommand} from "commander";
import {sendRequest} from "./hmac.js";
import {webhookApiUrl} from "./commands.js";

export const listWebhooksCmd = createCommand("list")
    .description("lists currently registered commands")
    .argument("<appkey>", "ContentGraph AppKey")
    .argument("<appSecret>", "ContentGraph AppSecret")
    .action((appKey, appSecret) => {
        console.log("list commands");
        console.log(`${appKey} - ${appSecret}`)
        sendRequest(webhookApiUrl, appKey, appSecret, "GET")
            .then(r => r.json())
            .then((json) => console.log(json));
    })
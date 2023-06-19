import {listWebhooksCmd} from "./list.js";
import {addWebhooksCmd} from "./add.js";
import {deleteWebhooksCmd} from "./delete.js";
export const webhookApiUrl = "https://cg.optimizely.com/api/webhooks";
export const webhookCommands = [
    listWebhooksCmd,
    addWebhooksCmd,
    deleteWebhooksCmd
];
import {listWebhooksCmd} from "./list.js";
import {addWebhooksCmd} from "./add.js";
import {deleteWebhooksCmd} from "./delete.js";
import {createCommand} from "commander";
export const webhookApiUrl = "https://cg.optimizely.com/api/webhooks";


export const webhookCommands = createCommand("webhooks").description("use the webhooks API");
webhookCommands.addCommand(listWebhooksCmd);
webhookCommands.addCommand(addWebhooksCmd);
webhookCommands.addCommand(deleteWebhooksCmd);
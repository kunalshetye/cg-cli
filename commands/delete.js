import {createCommand} from "commander";

export const deleteWebhooksCmd = createCommand("delete")
    .description("delete an existing registered webhook")
    .action(() => console.log("delete webhook"))
import {createCommand} from "commander";

export const addWebhooksCmd = createCommand("add")
    .description("add a new webhook")
    .action(() => console.log("add webhook"))
#!/usr/bin/env node

import {Command} from 'commander';
import {webhookCommands} from "./webhooks/webhooks.js";

const program = new Command();

program
    .name('cg')
    .description('CLI to interact with the Optimizely Content Graph API')
    .version('0.1.0');

program.addCommand(webhookCommands);

program.parse();
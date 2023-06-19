#!/usr/bin/env node

import {Command} from 'commander';
import {webhookCommands} from "./commands/commands.js";

const program = new Command();

program
    .name('cg-webhooks-cli')
    .description('CLI to use the Optimizely Content Graph Webhooks API')
    .version('0.1.0');

webhookCommands.forEach((cmd) => program.addCommand(cmd));

program.parse();
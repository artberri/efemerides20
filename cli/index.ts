#!/usr/bin/env node

import { addCrawlCommand } from "./crawl/command"
import { program } from "./program"

addCrawlCommand(program)

program.parse(process.argv)

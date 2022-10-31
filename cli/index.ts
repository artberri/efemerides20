#!/usr/bin/env node

import util from "util"
import { addCrawlCommand } from "./crawl/command"
import { program } from "./program"
import { addGetTopicsCommand } from "./topics/command"

util.inspect.defaultOptions.maxArrayLength = null

addCrawlCommand(program)
addGetTopicsCommand(program)

program.parse(process.argv)

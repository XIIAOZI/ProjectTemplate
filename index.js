#!/usr/bin/env node
const program = require('commander');
const {argsOptions} = require('./lib/core/args');
const {creatCommander} = require('./lib/core/creat');
// 自定义脚手架配置版本指令。
program.version(require('./package.json').version, '-v,--version');
argsOptions();
creatCommander();
// 解析参数argv。
program.parse(process.argv);
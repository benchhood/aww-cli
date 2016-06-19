#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
var program = require('commander');
var json_data = require('./aww.json');

var DataLibrary = require('./DataLibrary.js');
var datalib = new DataLibrary(json_data);

program
  .version('0.0.1')
  .option('-a, --all', 'Show all categories')
  .option('-c, --category [type]  ', 'Add the specified type of category','')//, 'node.js')
  .option('-t, --topic [type]  ', 'Add the specified type of topic','')//, 'node.js')
  .option('-r, --random [type]', 'Number of random entries that will be displayed', '1')

  .parse(process.argv);
 if (program.all) {
  console.log('IN ALL');
  var resultList = datalib.getCategoriesSync();
  console.log(resultList);
}
else if (program.category) {
  console.log("IN CATEGORY")
  // console.log(program.category)
  console.log("RANDO"+program.random);
  var resultList = datalib.getRandomEntryFromCategorySync(program.category, program.random);
  console.log(resultList)
} else if (program.topic) {
  console.log("IN TOPIC")
  // console.log(program.topic)
  console.log("RANDO"+program.random);
  var resultList = datalib.getRandomEntryFromTopicSync(program.topic, program.random);
  console.log(resultList)

} else {
  // Default show help options
  console.log();
}
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
  .option('-o, --open', 'Open url in a browser')
  .option('-z, --cat [type]  ', 'Add the specified type of category','')
  .option('-y, --top [type]  ', 'Add the specified type of topic','')
  .option('-t, --topic [type]  ', 'Get random projects under that topic','')
  .option('-c, --category [type]  ', 'Get random projects under that category','')
  .option('-r, --random [type]', 'Number of random entries that will be displayed', '1')
  .parse(process.argv);

 if (program.all) {
 	/* Handling aww -a.
 	 * Fetches all categories in the list
 	 */
  var resultList = datalib.getCategoriesSync();
	  for(var i = 0; i < resultList.length; i++) {
	  	console.log(resultList[i]);
		}
} else if (program.category) {
  /* Handling aww -c <category_name>.
 	 * Fetches all projects from a given category.
 	 * Optional argument -r <random_count> that specifies the no. of projects to be fetched.
 	 * By default randomcount is '1'. So, it fetches one project from that category.
 	 */
  var resultList = datalib.getRandomProjectFromCategorySync(program.category, program.random);
  for(var i = 0; i < resultList.length; i++) {
	  	console.log(resultList[i]);
  }
} else if (program.topic) {
	/* Handling aww -t <topic_name>.
 	 * Fetches all projects from a given topic.
 	 * Optional argument -r <random_count> that specifies the no. of projects to be fetched.
 	 * By default randomcount is '1'. So, it fetches one project from that topic.
 	 */
  var resultList = datalib.getRandomProjectFromTopicSync(program.topic, program.random);
  for(var i = 0; i < resultList.length; i++) {
	  	console.log(resultList[i]);
  }

} else {
  /* Executed by default when no arguments are passed.
   * Can also be used with aww -o in order to open the link in a browser.
   * Fetches an awesome project that will make your day.
   */

  console.log('Hack your awesome project !');
  console.log('-----------------------------')
  var resultList = datalib.getRandomProjectForToday();
  for(var i=0; i < resultList.length; i++) {
		var resultUrl = resultList[i].toString();
		if(program.open) {
			console.log('Please check the link the new browser window')
  			const opn = require('opn');
  			opn(resultUrl);
  		}
  		console.log(resultUrl)
  }
}
var array_rand = require('../array_rand/index.js')
var DataLibrary = function(jsonData) {
	this.jsonData = jsonData;
}
DataLibrary.prototype.getCategoriesSync = function() {
	var	uniqueList = [];
	this.jsonData['awesomeList'].forEach(function(awesomeobj) {
		if (uniqueList.indexOf(awesomeobj.category) === -1) {
	    uniqueList.push(awesomeobj.category);
	  }
	});
	return uniqueList;
};

DataLibrary.prototype.getCategories = function(callback) {
	var	uniqueList = [];
	try {
		
		this.jsonData['awesomeList'].forEach(function(awesomeobj) {
			if (uniqueList.indexOf(awesomeobj.category) === -1) {
		    uniqueList.push(awesomeobj.category);
		  }
		});
		callback(null, uniqueList);
	}
	catch(err) {
		callback(err);
	}
};


/* This function is used to return all the entries 
 * that matches a given category. It can be given by 
 * the command "aww -c <category_name>" 
 */
DataLibrary.prototype.getRandomEntryFromCategorySync = function(categoryFilter, randomCount) {
	var queryList = [], resultList = []
	console.log(categoryFilter.toLowerCase())
	this.jsonData['awesomeList'].forEach(function(awesomeobj) {
		var awesomeobjCategoryTrim = awesomeobj.category.toLowerCase().trim();
		var categoryFilterTrim = categoryFilter.toLowerCase().trim()
		if (awesomeobjCategoryTrim.indexOf(categoryFilterTrim) > -1) {
			queryList.push('{'+' :' + awesomeobj.name + ', url : ' + awesomeobj.url+'}');
	  }
	});
	if (randomCount < 0) {
		randomCount = 1;
	} else if (randomCount > queryList.length) {
		randomCount = queryList.length;
	}

	resultList = array_rand.getRandomNumberInRangeSync(queryList, randomCount, 0	, queryList.length - 1);
	return resultList;
};


/* This function is used to return all the entries 
 * that matches a given category. It can be given by 
 * the command "aww -c <category_name>" 
 */
DataLibrary.prototype.getRandomProjectFromCategorySync = function(categoryFilter, randomCount) {
	
	var queryList = [], resultList = []
		console.log(categoryFilter.toLowerCase())
		this.jsonData['awesomeList'].forEach(function(awesomeobj) {
			var awesomeobjCategoryTrim = awesomeobj.category.toLowerCase().trim();
			var categoryFilterTrim = categoryFilter.toLowerCase().trim()
			//console.log(awesomeobj.data);
			if(awesomeobjCategoryTrim.indexOf(categoryFilterTrim) > -1) {
			awesomeobj.data.forEach(function(awesomeobjData) {
//				console.log(awesomeobjData.url);
				queryList.push(awesomeobjData.url);
			});
		  }
		});
		if (randomCount < 0) {
			randomCount = 1;
		} else if (randomCount > queryList.length) {
			randomCount = queryList.length;
		}

	resultList = array_rand.getRandomNumberInRangeSync(queryList, randomCount, 0	, queryList.length - 1);
	return resultList;
};

/* This function is used to return all the entries 
 * that matches a given topic. It can be given by 
 * the command "aww -t <topic_name>" 
 */
DataLibrary.prototype.getRandomEntryFromTopicSync = function(topicFilter, randomCount) {
	var queryList = [], resultList = []
	console.log(topicFilter.toLowerCase())
	this.jsonData['awesomeList'].forEach(function(awesomeobj) {
		var awesomeobjTopicTrim = awesomeobj.name.toLowerCase().trim();
		var topicFilterTrim = topicFilter.toLowerCase().trim()
		if (awesomeobjTopicTrim.indexOf(topicFilterTrim) > -1) {
			queryList.push('{'+'category :' + awesomeobj.category + ', url : ' + awesomeobj.url+'}');
	  }
	});
	if (randomCount < 0) {
		randomCount = 1;
	} else if (randomCount > queryList.length) {
		randomCount = queryList.length;
	}

	resultList = array_rand.getRandomNumberInRangeSync(queryList, randomCount, 0	, queryList.length - 1);
	return resultList;
};

/* This function is used to return all the entries 
 * that matches a given Topic. It can be given by 
 * the command "aww -c <Topic_name>" 
 */
DataLibrary.prototype.getRandomProjectFromTopicSync = function(topicFilter, randomCount) {
	
	var queryList = [], resultList = []
		console.log(topicFilter.toLowerCase())
		this.jsonData['awesomeList'].forEach(function(awesomeobj) {
			var awesomeobjTopicTrim = awesomeobj.name.toLowerCase().trim();
			var topicFilterTrim = topicFilter.toLowerCase().trim()
			//console.log(awesomeobj.data);
			if(awesomeobjTopicTrim.indexOf(topicFilterTrim) > -1) {
			awesomeobj.data.forEach(function(awesomeobjData) {
//				console.log(awesomeobjData.url);
				queryList.push(awesomeobjData.url);
			});
		  }
		});
		if (randomCount < 0) {
			randomCount = 1;
		} else if (randomCount > queryList.length) {
			randomCount = queryList.length;
		}

	resultList = array_rand.getRandomNumberInRangeSync(queryList, randomCount, 0	, queryList.length - 1);
	return resultList;
};
module.exports = DataLibrary;
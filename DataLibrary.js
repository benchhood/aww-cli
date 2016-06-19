var DataLibrary = function(jsonData) {
	this.jsonData = jsonData;
}
DataLibrary.prototype.getCategories = function() {
	var	uniqueList = [];
	this.jsonData['awesomeList'].forEach(function(awesomeobj) {
		if (uniqueList.indexOf(awesomeobj.category) === -1) {
	    uniqueList.push(awesomeobj.category);
	  }
	});
	return uniqueList;
};
module.exports = DataLibrary;
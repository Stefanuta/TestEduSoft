jQuery.fn.extend({

	getUrlParam: function (strParamName, lastValue = true) {
		strParamName = decodeURIComponent(strParamName);

		var returnVal = new Array();
		var qString = null;

		if ($(this).attr("nodeName") === "#document") {
			//document-handler
			if (window.location.search.search(strParamName) > -1) {
				qString = window.location.search.substr(1, window.location.search.length).split("&");
			}
		} else if ($(this).attr("src") !== undefined) {
			var strHref = $(this).attr("src");
			if (strHref.indexOf("?") > -1) {
				var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
				qString = strQueryString.split("&");
			}
		} else if ($(this).attr("href") !== undefined) {
			strHref = $(this).attr("href");
			if (strHref.indexOf("?") > -1) {
				strQueryString = strHref.substr(strHref.indexOf("?") + 1);
				qString = strQueryString.split("&");
			}
		} else {
			return null;
		}

		if (qString === null) return null;

		for (var i = 0; i < qString.length; i++) {
			var args = qString[i].split("=");
			if (decodeURIComponent(args[0]) === strParamName) {
				returnVal.push(args[1] === undefined ? null : decodeURIComponent(args[1]));
			}
		}

		return returnVal.length === 0 ? null : returnVal.length === 1 ? returnVal[0] : lastValue ? returnVal[returnVal.length - 1] : returnVal;
	}
});

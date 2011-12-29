
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
Modernizr.load({
	test: (function () {
			return true;
		})(),
	yep: 'js/libs/jQuery/plugins/chosen.jquery.js',
	callback: function (url, result, key) {
		if (result) {
			$(document).ready(function () {
				$('select.chosen').chosen();
			});
		}
	}
});

Modernizr.load({
	test: (function () {
			return true;
		})(),
	yep: 'js/libs/jwerty.js',
	callback: function (url, result, key) {
		if (result) {
			//Code here
		}
	}
});

Modernizr.load([
	{
		test: (function () {
				return true;
			})(),
		yep: 'js/libs/jQuery/plugins/bootstrap-modal.js',
		callback: function (url, result, key) {
			if (result) {
				if (result) {
					$('#my-modal').modal({
						keyboard: true
					});
				}
			}
		}
	},
	{
		test: (function () {
				return true;
			})(),
		yep: 'js/libs/bootbox.js',
		callback: function (url, result, key) {
			if (result) {
				if (result) {
					//code
				}
			}
		}
	}
]);

Modernizr.load({
	test: (function () {
			return true;
		})(),
	yep: 'js/libs/jQuery/plugins/bootstrap-dropdown.js',
	callback: function (url, result, key) {
		if (result) {
			//Code here
		}
	}
});

Modernizr.load({
	test: (function () {
			return true;
		})(),
	yep: 'js/libs/jQuery/plugins/bootstrap-scrollspy.js',
	callback: function (url, result, key) {
		if (result) {
			//Code here
		}
	}
});

Modernizr.load({
	test: (function () {
			return true;
		})(),
	yep: 'js/libs/jQuery/plugins/bootstrap-buttons.js',
	callback: function (url, result, key) {
		if (result) {
			//Code here
		}
	}
});

Modernizr.load({
	test: (function () {
			return true;
		})(),
	yep: 'js/libs/jQuery/plugins/bootstrap-tabs.js',
	callback: function (url, result, key) {
		if (result) {
			//Code here
		}
	}
});

Modernizr.load([
	{
		test: (function () {
				return true;
			})(),
		yep: 'js/libs/jQuery/plugins/bootstrap-twipsy.js',
		callback: function (url, result, key) {
			if (result) {
				//Code here
			}
		}
	},
	//Dependency on twipsy
	//so we make sure it loads after twipsy
	{
		test: (function () {
				return true;
			})(),
		yep: 'js/libs/jQuery/plugins/bootstrap-popover.js',
		callback: function (url, result, key) {
			if (result) {
				//Code here
			}
		}
	}
]);

Modernizr.load({
	test: (function () {
			return true;
		})(),
	yep: 'js/libs/jQuery/plugins/bootstrap-alerts.js',
	callback: function (url, result, key) {
		if (result) {
			//Code here
		}
	}
});

Modernizr.load({
	test: (function () {
			return true;
		})(),
	yep: 'js/libs/Prettify/prettify.js',
	callback: function (url, result, key) {
		if (result) {
			prettyPrint();
		}
	}
});

Modernizr.load([{
	test: (function () {return 0 < $('table.tablesorter').length; })(),
	yep: 'js/libs/jQuery/plugins/tablesorter.jquery.js',
	callback: function (url, result, key) {
		if (result) {
			//Code here
			Modernizr.load([{
				load : 'js/libs/jQuery/plugins/tablesorter.pager.jquery.js',
				complete : function() {
					$('table.tablesorter')
						.tablesorter()
						.tablesorterPager({
							container: $('table.tablesorter > tfoot.pager')
						})
					;
				}
			}]);
		}
	}
}]);
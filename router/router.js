
(function(){
	"use strict";

	var EventUtil = {
		on: function(element, type, callback){
			if(element.addEventListener){
				element.addEventListener(type, callback, false);
			}else if(element.attachEvent){
				element.attachEvent('on' + type, callback);
			}else{
				element['on' + type] = callback;
			}
		},
		off: function(element, type, callback){
			if(element.removeEventListener){
				element.removeEventListener(type, callback, false);
			}else if(element.detachEvent){
				element.detachEvent('on' + type, callback);
			}else{
				element['on' + type] = null;
			}
		}
	};

	var Router = function(routes){
		this.routes = routes;
		this.curHash = window.location.hash;
	};

	Router.prototype.addRoute = function(path, callback){
		this.routes[path] = callback;
	};

	Router.prototype.route = function(path, callback){
		if(typeof this.routes[path] !== 'function'){
			this.addRoute(path, callback);
			location.hash = path
		}else{
			this.routes[path]();
		}
	};

	Router.prototype.reload = function(path){
		var h = window.location.hash;
		if(h !== ''){
			this.routes[h.split('#')[1]]();
		}
		
	};

	Router.prototype.checkHash = function(){
		var h = window.location.hash;
		if(h != this.curHash){
			this.curHash = h;
			this.reload();
		}
	};

	Router.prototype.init = function(){
		if('onpopstate' in window){
			EventUtil.on(window, 'popstate', this.reload.bind(this));
		}else{
			EventUtil.on(window, 'hashchange', this.reload.bind(this));
		}

		EventUtil.on(window, 'load', this.reload.bind(this));
	};

	window.Router = Router;
})();

	
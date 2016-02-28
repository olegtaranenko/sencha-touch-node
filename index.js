Ext = {};

global.__defineGetter__('document', function() {
	return {
		getElementsByTagName: function () {
			return [{
				src: '/'
			}];
		}
	};
});

global.__defineGetter__('location', function() {
	return {
		href: ''
	};
});


var ExtLoader = function() {
	var extPath = __dirname + '/lib/Ext/';
	var extCorePath = extPath + '/core/';

	this.load = function () {
		require(extCorePath+'Ext.js');
		require(extCorePath+'version/Version.js');
		require(extCorePath+'lang/Object.js');
		require(extCorePath+'lang/Array.js');
		require(extCorePath+'lang/Date.js');
		require(extCorePath+'lang/Function.js');
		require(extCorePath+'lang/Number.js');
		require(extCorePath+'lang/String.js');
		require(extCorePath+'class/Base.js');
		require(extCorePath+'class/Class.js');
		require(extCorePath+'class/ClassManager.js');
		require(extCorePath+'lang/Error.js');
		require(extCorePath+'class/Loader.js');

		require(extPath+'DateExtras.js');
		require(extPath+'util/Format.js');
		require(extPath+'util/DelayedTask.js');
		require(extPath+'event/Event.js');

		require(extCorePath+'Ext-more.js');

		Ext.Loader.config.enabled = true;
		Ext.Loader.setPath('Ext', __dirname+'/lib/Ext');

		global.__defineGetter__('window', function() {
			return {};
		});

		Ext.require('Ext.data.ModelManager');
		Ext.require('Ext.data.Store');

	}
};

new ExtLoader().load();


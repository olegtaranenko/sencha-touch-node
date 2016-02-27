//@require Ext.Class
//@require Ext.ClassManager
//@require Ext.Loader

/**
 * Base class for all mixins.
 * @private
 */
Ext.define('Ext.mixin.Mixin', {
    onClassExtended: function(cls, data) {
        var mixinConfig = data.mixinConfig,
            parentClassMixinConfig,
            beforeHooks, afterHooks;

        if (mixinConfig) {
            parentClassMixinConfig = cls.superclass.mixinConfig;

            if (parentClassMixinConfig) {
                mixinConfig = data.mixinConfig = Ext.merge({}, parentClassMixinConfig, mixinConfig);
            }

            data.mixinId = mixinConfig.id;

            beforeHooks = mixinConfig.beforeHooks;
            afterHooks = mixinConfig.hooks || mixinConfig.afterHooks;

            if (beforeHooks || afterHooks) {
                Ext.Function.interceptBefore(data, 'onClassMixedIn', function(targetClass) {
                    var mixin = this.prototype;

                    if (beforeHooks) {
                        Ext.Object.each(beforeHooks, function(from, to) {
                            targetClass.override(to, function() {
                                var fromFn = mixin[from] || mixin.self[from];
                                if (fromFn.apply(this, arguments) !== false) {
                                    var callOverriddenFn = this.callOverridden || this.prototype.callOverridden;
                                    return callOverriddenFn.call(this, arguments);
                                }
                            });
                        });
                    }

                    if (afterHooks) {
                        Ext.Object.each(afterHooks, function(from, to) {
                            targetClass.override(to, function() {
                                var callOverriddenFn = this.callOverridden || this.prototype.callOverridden,
                                    ret = callOverriddenFn.call(this, arguments),
                                    fromFn = mixin[from] || mixin.self[from];

                                fromFn.apply(this, arguments);

                                return ret;
                            });
                        });
                    }
                });
            }
        }
    }
});

//@tag foundation,core
//@define Ext.Error
//@require Ext.JSON

Ext.Error = {
    raise: function(object) {
        var msg = object.msg || object;
        throw new Error(msg);
    }
};

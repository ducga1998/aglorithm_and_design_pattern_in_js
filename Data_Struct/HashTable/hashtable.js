
(function ($) {
    // A reference to the generic hasOwnProperty() function.
    var hasOwnProperty = [].hasOwnProperty;

    var keysProperty = "constructor,hasOwnProperty,isPrototypeOf,prototypeIsEnumerable,toLocaleString,toString,valueOf".split(",");
    for (var key, o = {}, i = 0; key = keysProperty[i]; i++) {
        o[key] = i;
        for (key in o) {
            keysProperty.splice(i--, 1);
            delete o[key];
        }
    }

    //////////////////////////////////_______________________\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    /////////////////////////////////|| HASHTABLE FUNCTION ||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //////////////////////////////////-----------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    function Hashtable(obj) {
        obj = arguments.length ? obj : {};

        var hash = {}, key, keys = keysProperty.slice(0), i = 0;
        while (key = keys[i++]) {
            !hasOwnProperty.call(obj, key)
                ? hash[key] = obj[key]
                : keys.splice(i, 1);
        }
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                keys.push(key);
                hash[key] = obj[key];
            }
        }

        var _ = { o: hash, k: keys };
        this._ = function (k) {
            return k === $ ? _ : undefined;
        };
        return this;
    }

    // Get an item at the specified `key`.
    Hashtable.prototype.get = function (key) {
        return this._($).o[key];
    };

    // Returns an array of all of the keys.
    Hashtable.prototype.keys = function () {
        return this._($).k.slice(0);
    };

    // Returns a boolean value indicating whether or not the specified `value` is
    // contained within the
    Hashtable.prototype.containsValue = p.contains = function (value) {
        var _ = this._($), keys = _.k, obj = _.o, i = keys.length;
        while (--i >= 0) {
            if (obj[keys[i]] === value) {
                return true;
            }
        }
        return false;
    };

    // Returns a boolean value indicating whether or not the specified `key` is
    // contained within the hash table.
    Hashtable.prototype.containsKey = function (key) {
        var keys = this._($).k, i = keys.length;
        while (--i >= 0) {
            if (keys[i] == key) {
                return true;
            }
        }
        return false;
    };

    // Clear the hash table and return the object indexed by the keys that
    // contains all of the items.
    Hashtable.prototype.clear = function () {
        var _ = this._($), ret = _.o;
        _.k = [];
        _.o = {};
        return ret;
    };

    // Get an array of all of the items.
    Hashtable.prototype.elements = function () {
        var elems = [],
            _ = this._($),
            keys = _.k,
            i = 0,
            len = keys.length,
            obj = _.o;
        while (i < len) {
            elems.push(obj[keys[i++]]);
        }
        return elems;
    };

    // Get the amount of items.
    Hashtable.prototype.size = function () {
        return this._($).k.length;
    };

    // Removes the item at the specified key and returns the item that is removed.
    Hashtable.prototype.remove = function (key) {
        var _ = this._($), keys = _.k, obj = _.o, i = keys.length;
        while (--i >= 0) {
            if (keys[i] == key) {
                var ret = obj[keys.splice(i, 1)[0]];
                delete obj[key];
                break;
            }
        }
        return ret;
    };

    // Puts one or more items in this hash table, returning the previous value(s).
    Hashtable.prototype.put = function (key, value) {
        var _ = this._($), keys = _.k, obj = _.o;
        // If only one value is to be added...
        if (arguments.length - 1) {
            if (hasOwnProperty.call(obj, key)) {
                ret = obj[key];
            }
            else {
                keys.push(key);
            }
            obj[key] = value;
        }
        // If all of the key-value pairs in the specified object are to be added...
        else {
            var ret = {},
                objNew = key,
                newKeys = (new Hashtable(objNew)).keys(),
                i = newKeys.length;
            while (--i >= 0) {
                _ = newKeys[i];
                if (hasOwnProperty.call(obj, _)) {
                    ret[_] = obj[_];
                }
                else {
                    keys.push(_);
                }
                obj[_] = objNew[_];
            }
        }
        return ret;
    };
    // Makes copy of the Hashtable.
    Hashtable.prototype.clone = function () {
        return new Hashtable(this._($).o);
    };

    if (hasOwnProperty.call(this, "Hashtable")) {
        Hashtable.__OLD__ = this.Hashtable;
    }
    this.Hashtable = Hashtable;
})({})
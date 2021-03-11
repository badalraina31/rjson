# rjson


RJSON is an extension of JSON to support more types. It supports all JSON-safe
types, as well as:

 - **Date** - JavaScript `Date`
 - **Binary** - JavaScript `Uint8Array` or the
   result of [`EJSON.newBinary`]
 - **User-defined types** - see [`EJSON.addType`]

All RJSON serializations are also valid JSON.  For example an object with a date
and a binary buffer would be serialized in EJSON as:

    {
      "d": {"$date": 1358205756553},
      "b": {"$binary": "c3VyZS4="}
    }

For more details, see the [EJSON section](http://gh.com/#ejson) of the Meteor docs.
// Generated by CoffeeScript 1.9.3
(function() {
    module.exports = {
        id: {
            type: "int",
            autoIncrement: true,
            primaryKey: true
        },
        name : "varchar(40)",
        desc : "varchar(500)",
        sort : {
            type: 'int',
            defaultValue: 0
        },
        is_show: {
            type: "int",
            defaultValue:0
        }
    };

}).call(this);
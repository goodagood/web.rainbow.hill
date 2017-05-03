'use strict';

var _a = require('./a');

//import { cube, foo } from 'my-module';

var cca = (0, _a.cube)(8);
var ccf = _a.foo;

window.cca = (0, _a.cube)(11);

function show_import() {
    return (0, _a.cube)(3) + '  ' + _a.foo;
}

console.log((0, _a.cube)(3)); // 27
console.log(_a.foo); // 4.555806215962888

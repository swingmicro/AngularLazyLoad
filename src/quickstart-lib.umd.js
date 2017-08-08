(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.quickstartLib = global.quickstartLib || {}),global.vendor.core));
}(this, (function (exports,_angular_core) { 'use strict';

var LibComponent = (function () {
    function LibComponent() {
        //Consider this as input
        this.name = 'Angular Library';
    }
    return LibComponent;
}());
LibComponent.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'my-lib',
                template: "<h2>Hello {{name}}</h2> ",
                styles: [""]
            },] },
];


LibComponent.ctorParameters = function () { return []; };

var LibService = (function () {
    function LibService() {
    }
    /**
     * @return {?}
     */
    LibService.prototype.getMeaning = function () { return 42; };
    return LibService;
}());
LibService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
LibService.ctorParameters = function () { return []; };

var LibModule = (function () {
    function LibModule() {
    }
    return LibModule;
}());
LibModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [LibComponent],
                providers: [LibService],
                exports: [LibComponent]
            },] },
];
/**
 * @nocollapse
 */
LibModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

exports.LibComponent = LibComponent;
exports.LibService = LibService;
exports.LibModule = LibModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=quickstart-lib.umd.js.map

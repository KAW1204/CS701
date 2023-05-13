"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Part1Component = void 0;
var core_1 = require("@angular/core");
var Part1Component = exports.Part1Component = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-part1',
            templateUrl: './part1.component.html',
            styleUrls: ['./part1.component.css']
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Part1Component = _classThis = /** @class */ (function () {
        function Part1Component_1() {
            if (localStorage.getItem("Wilkerson_cart") == null) {
                this.defaultBooks = [
                    { title: 'Absolute Java', qty: 1, price: 114.95 },
                    { title: 'Pro HTML5', qty: 2, price: 27.95 },
                    { title: 'Head First HTML5', qty: 1, price: 27.89 }
                ];
            }
            else {
                this.defaultBooks = JSON.parse(localStorage['Wilkerson_cart']);
            }
        }
        Part1Component_1.prototype.removebooks = function (array) {
            return this.defaultBooks.splice(array.index, 1);
        };
        Part1Component_1.prototype.addbook = function () {
            this.defaultBooks.push({ title: "New Book", qty: 1, price: 10.99 });
            return this.defaultBooks;
        };
        Part1Component_1.prototype.saveBooks = function () {
            window.localStorage.setItem('Wilkerson_cart', JSON.stringify(this.defaultBooks));
            return this.defaultBooks;
        };
        Part1Component_1.prototype.updateTotal = function () {
            var total = 0;
            return total;
        };
        Part1Component_1.prototype.ngOnInit = function () {
        };
        return Part1Component_1;
    }());
    __setFunctionName(_classThis, "Part1Component");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Part1Component = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Part1Component = _classThis;
}();

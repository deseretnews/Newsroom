webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"row\" id=\"router-container\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"row\" class=\"footer\">Built by\n    <a href=\"https://twitter.com/jadeallencook\" target=\"_blank\">@jadeallencook</a> for the\n    <a href=\"https://www.deseretnews.com/\" target=\"_blank\">Deseret News</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "div.container div.footer {\n  text-align: center;\n  font-size: 0.75em;\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        var config = {
            apiKey: "AIzaSyDpJaDpX8MPIOTXJg_oKMY4-0e0AvizW8c",
            authDomain: "dn-interactives.firebaseapp.com",
            databaseURL: "https://dn-interactives.firebaseio.com",
            projectId: "dn-interactives",
            storageBucket: "dn-interactives.appspot.com",
            messagingSenderId: "403753384515"
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"](config);
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (!user)
                _this.router.navigate(['/login']);
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_venues_venues_component__ = __webpack_require__("./src/app/pages/venues/venues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_almanac_almanac_component__ = __webpack_require__("./src/app/pages/almanac/almanac.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_almanac_person_person_component__ = __webpack_require__("./src/app/components/almanac/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_almanac_calling_calling_component__ = __webpack_require__("./src/app/components/almanac/calling/calling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_almanac_people_people_component__ = __webpack_require__("./src/app/components/almanac/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_almanac_loading_loading_component__ = __webpack_require__("./src/app/components/almanac/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_almanac_countries_countries_component__ = __webpack_require__("./src/app/components/almanac/countries/countries.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'venues', component: __WEBPACK_IMPORTED_MODULE_8__pages_venues_venues_component__["a" /* VenuesComponent */] },
    { path: 'almanac', component: __WEBPACK_IMPORTED_MODULE_9__pages_almanac_almanac_component__["a" /* AlmanacComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_venues_venues_component__["a" /* VenuesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_almanac_almanac_component__["a" /* AlmanacComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_almanac_person_person_component__["a" /* PersonComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_almanac_calling_calling_component__["a" /* CallingComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_almanac_people_people_component__["a" /* PeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_almanac_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_almanac_countries_countries_component__["a" /* CountriesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/almanac/calling/calling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <h3>Callings</h3>\n  </div>\n  <div class=\"col-3\">\n    <input (keyup)=\"findCalling()\" type=\"text\" class=\"form-control\" [(ngModel)]=\"this.calling.name\" name=\"calling\"\n      placeholder=\"Search or add calling by name...\" autocomplete=\"off\">\n  </div>\n  <div class=\"col-3\">\n    <input (keyup)=\"findCalling()\" type=\"text\" class=\"form-control\" [(ngModel)]=\"this.date.start.ui\" name=\"start date\"\n      placeholder=\"Start MM/DD/YYYY\" (keyup)=\"formatDate($event, 'start')\">\n  </div>\n  <div class=\"col-3\">\n    <input (keyup)=\"findCalling()\" type=\"text\" class=\"form-control\" [(ngModel)]=\"this.date.end.ui\" name=\"end date\"\n      placeholder=\"End MM/DD/YYYY\" (keyup)=\"formatDate($event, 'end')\">\n  </div>\n  <div class=\"col-3\">\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\" [(ngModel)]=\"this.calling.emeritus\">\n      <label class=\"form-check-label\" for=\"defaultCheck1\">\n        Emeritus\n      </label>\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <br />\n    <button *ngIf=\"!this.editor.editing\" class=\"btn btn-primary\" (click)=\"add()\">Add Calling</button>\n    <button *ngIf=\"this.editor.editing\" class=\"btn btn-primary\" (click)=\"add(this.editor.key)\">Update Calling</button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <br />\n    <ul *ngIf=\"getKeys(this.callingResults).length > 0\">\n      <li *ngFor=\"let key of getKeys(this.callingResults)\">\n        {{ this.callingResults[key].name }}\n        <a (click)=\"edit(key)\">Edit</a>\n        <a (click)=\"delete(key)\" class=\"delete\">Delete</a>\n        <a (click)=\"addCallingToPerson(key)\">Add To Person</a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/almanac/calling/calling.component.scss":
/***/ (function(module, exports) {

module.exports = "button {\n  width: 100%; }\n\nul {\n  list-style: none;\n  padding: 0px; }\n\nul li a {\n    color: #007bff;\n    cursor: pointer;\n    margin-left: 15px; }\n\nul li a.delete {\n    color: red; }\n\ndiv.form-check {\n  margin-top: 6px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/almanac/calling/calling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_almanac__ = __webpack_require__("./src/app/models/almanac.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_almanac_service__ = __webpack_require__("./src/app/services/almanac.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CallingComponent = /** @class */ (function () {
    function CallingComponent(AlmanacService) {
        this.AlmanacService = AlmanacService;
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.calling = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["a" /* Calling */]();
        this.callings = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.callings;
        this.callingResults = [];
        this.date = {
            start: {
                ui: '',
                fb: new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["c" /* Date */]()
            },
            end: {
                ui: '',
                fb: new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["c" /* Date */]()
            },
        };
        this.editor = {
            editing: false,
            key: null
        };
        this.findCalling();
    }
    CallingComponent.prototype.getKeys = function (obj) {
        return Object.keys(obj);
    };
    CallingComponent.prototype.reset = function () {
        this.calling = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["a" /* Calling */]();
        this.editor.editing = false;
        this.date = {
            start: {
                ui: '',
                fb: new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["c" /* Date */]()
            },
            end: {
                ui: '',
                fb: new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["c" /* Date */]()
            },
        };
        this.findCalling();
    };
    CallingComponent.prototype.dateFBExport = function (string) {
        var array = string.split('/');
        var date = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["c" /* Date */]();
        date.month = parseInt(array[0]);
        date.day = parseInt(array[1]);
        date.year = parseInt(array[2]);
        return date;
    };
    CallingComponent.prototype.dateToUID = function (string) {
        var array = string.split('/');
        string = parseInt(array[0] + array[1] + array[2]);
        return string;
    };
    CallingComponent.prototype.add = function (uid) {
        var _this = this;
        if (!uid) {
            uid = this.AlmanacService.guid();
        }
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/people/" + this.uid + "/").once('value', function (snapshot) {
            if (snapshot.val()) {
                _this.calling.people.push(_this.uid);
            }
            else {
                _this.calling.people = [];
            }
        }).then(function () {
            Promise.all([new Promise(function (res, rej) {
                    var dateUID = _this.dateToUID(_this.date.start.ui);
                    if (_this.date.start.ui && _this.date.start.ui.length === 10) {
                        _this.date.start.fb = _this.dateFBExport(_this.date.start.ui);
                        if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID]) {
                            __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID] = _this.date.start.fb;
                            __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID].callings = [uid];
                        }
                        else if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID].callings.indexOf(uid) === -1) {
                            __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID].callings.push(uid);
                        }
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/dates/" + dateUID + "/").set(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID]).then(function () {
                            _this.calling.start = dateUID;
                            res();
                        });
                    }
                    else {
                        res();
                    }
                }), new Promise(function (res, rej) {
                    var dateUID = _this.dateToUID(_this.date.end.ui);
                    if (_this.date.end.ui && _this.date.end.ui.length === 10) {
                        _this.date.end.fb = _this.dateFBExport(_this.date.end.ui);
                        if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID]) {
                            __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID] = _this.date.end.fb;
                            __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID].callings = [uid];
                        }
                        else if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID].callings.indexOf(uid) === -1) {
                            __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID].callings.push(uid);
                        }
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/dates/" + dateUID + "/").set(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID]).then(function () {
                            _this.calling.end = dateUID;
                            res();
                        });
                    }
                    else {
                        res();
                    }
                })]).then(function () {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/callings/" + uid + "/").set(JSON.parse(JSON.stringify(_this.calling))).then(function () {
                    _this.callings = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.callings;
                    _this.findCalling();
                    if (_this.calling.people.length) {
                        _this.addCallingToPerson(uid);
                    }
                    _this.reset();
                });
            });
        });
    };
    CallingComponent.prototype.setUIDates = function (key) {
        var date = this.date[key].fb;
        this.date[key].ui = date.month + "/" + date.day + "/" + date.year;
    };
    CallingComponent.prototype.edit = function (key) {
        var _this = this;
        this.editor.editing = true;
        this.editor.key = key;
        this.calling = this.AlmanacService.newObj(this.callings[key]);
        if (this.callings[key].start) {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/dates/" + this.callings[key].start + "/").once('value', function (snapshot) {
                _this.date.start.fb = snapshot.val();
                _this.setUIDates('start');
            });
        }
        if (this.callings[key].end) {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/dates/" + this.callings[key].end + "/").once('value', function (snapshot) {
                _this.date.start.fb = snapshot.val();
                _this.setUIDates('end');
            });
        }
    };
    CallingComponent.prototype.delete = function (key) {
        var _this = this;
        var calling = this.callings[key], fb = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"](), dates = ['start', 'end'];
        // remove calling ref from dates
        dates.forEach(function (string) {
            if (calling[string]) {
                fb.ref("almanac/dates/" + calling[string] + "/").once('value', function (snapshot) {
                    var date = snapshot.val(), temp = [];
                    date.callings.forEach(function (calling) {
                        if (calling !== key) {
                            temp.push(calling);
                        }
                    });
                    date.callings = temp;
                    fb.ref("almanac/dates/" + calling[string] + "/").set(date);
                });
            }
        });
        // remove calling from person
        if (calling.people) {
            calling.people.forEach(function (person) {
                var callings = [];
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people[person].callings.forEach(function (callingKey) {
                    if (callingKey !== key) {
                        callings.push(callingKey);
                    }
                });
                fb.ref("almanac/people/" + person + "/callings/").set(callings);
            });
        }
        // remove calling from fb
        fb.ref("almanac/callings/" + key + "/").remove().then(function () {
            _this.reset();
        });
    };
    CallingComponent.prototype.addCallingToPerson = function (key) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people[this.uid]) {
            if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people[this.uid].callings) {
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people[this.uid].callings = [key];
            }
            else if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people[this.uid].callings.indexOf(key) === -1) {
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people[this.uid].callings.push(key);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people[this.uid].callings = [key];
            }
            var people = [];
            if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.callings[key].people) {
                people = [this.uid];
            }
            else if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.callings[key].people.indexOf(this.uid) === -1) {
                people = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.callings[key].people;
                people.push(this.uid);
            }
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/people/" + this.uid + "/callings/").set(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people[this.uid].callings).then(function () {
                console.log(people);
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/callings/" + key + "/people/").set(people);
                _this.update.emit();
            });
        }
    };
    CallingComponent.prototype.findCalling = function () {
        var _this = this;
        if (!this.editor.editing) {
            this.callings = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.callings;
            this.callingResults = [];
            Object.keys(this.callings).forEach(function (calling) {
                if (_this.callings[calling].name.toLowerCase().indexOf(_this.calling.name.toLowerCase()) > -1 && Object.keys(_this.callingResults).length < 10) {
                    _this.callingResults[calling] = _this.callings[calling];
                }
            });
        }
    };
    CallingComponent.prototype.formatDate = function (event, objKey) {
        if (event.keyCode !== 8 && this.date[objKey].ui && isFinite(event.key) && !isNaN(parseInt(event.key))) {
            if (this.date[objKey].ui.length === 2)
                this.date[objKey].ui += '/';
            if (this.date[objKey].ui.length === 5)
                this.date[objKey].ui += '/';
            if (this.date[objKey].ui.length > 9)
                this.date[objKey].ui = this.date[objKey].ui.substring(0, 10);
        }
        else if (event.keyCode !== 16 && event.keyCode !== 8) {
            this.date[objKey].ui = this.date[objKey].ui.substring(0, this.date[objKey].ui.length - 1);
        }
    };
    CallingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CallingComponent.prototype, "uid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CallingComponent.prototype, "update", void 0);
    CallingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calling',
            template: __webpack_require__("./src/app/components/almanac/calling/calling.component.html"),
            styles: [__webpack_require__("./src/app/components/almanac/calling/calling.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_almanac_service__["a" /* AlmanacService */]],
            host: {
                class: 'col-12'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_almanac_service__["a" /* AlmanacService */]])
    ], CallingComponent);
    return CallingComponent;
}());



/***/ }),

/***/ "./src/app/components/almanac/countries/countries.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"row\">\n  <div class=\"col-6\">\n    <div class=\"dropdown\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n        aria-haspopup=\"true\" aria-expanded=\"false\">\n        Choose Country\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\" *ngFor=\"let country of almanac.getCountries()\" (click)=\"edit(country.uid)\">\n          {{ country.name }}\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-6\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"country.name\" name=\"name\" placeholder=\"Name\" disabled>\n  </div>\n  <div class=\"col-12\">\n    <textarea class=\"form-control\" name=\"history\" [(ngModel)]=\"country.history\" placeholder=\"Country's history...\" id=\"history\"></textarea>\n  </div>\n  <div class=\"col-12\">\n      <button class=\"btn btn-primary\" (click)=\"saveCountry()\">Save Country</button>\n  </div>\n  <div class=\"col-3\">\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"editor.year\" (change)=\"getYear()\" name=\"year\" placeholder=\"Year\">\n  </div>\n  <div class=\"col-3\">\n    <input type=\"number\" class=\"form-control\" placeholder=\"Population\" [(ngModel)]=\"year.population\">\n  </div>\n  <div class=\"col-3\">\n      <input type=\"number\" class=\"form-control\" placeholder=\"Membership\" [(ngModel)]=\"year.membership\">\n  </div>\n  <div class=\"col-3\">\n      <input type=\"number\" class=\"form-control\" placeholder=\"Branches in wards\" [(ngModel)]=\"year.branches.wards\">\n  </div>\n  <div class=\"col-3\">\n      <input type=\"number\" class=\"form-control\" placeholder=\"Branches in missions\" [(ngModel)]=\"year.branches.missions\">\n  </div>\n  <div class=\"col-3\">\n      <input type=\"number\" class=\"form-control\" placeholder=\"Missions\" [(ngModel)]=\"year.missions\">\n  </div>\n  <div class=\"col-3\">\n      <input type=\"number\" class=\"form-control\" placeholder=\"First Stake\" [(ngModel)]=\"year.stake\">\n  </div>\n  <div class=\"col-3\">\n      <button class=\"btn btn-primary\" *ngIf=\"editor.key\" (click)=\"saveYear()\">Save Year</button>\n      <button class=\"btn btn-secondary\" *ngIf=\"!editor.key\">Select Country First</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/almanac/countries/countries.component.scss":
/***/ (function(module, exports) {

module.exports = "div.row > div {\n  padding-bottom: 25px; }\n\na.dropdown-item {\n  cursor: pointer; }\n\nbutton.dropdown-toggle {\n  width: 100%; }\n\ndiv.row > div > button {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/almanac/countries/countries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_almanac__ = __webpack_require__("./src/app/models/almanac.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_almanac_service__ = __webpack_require__("./src/app/services/almanac.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(almanac) {
        this.almanac = almanac;
        this.countries = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.countries;
        this.country = new __WEBPACK_IMPORTED_MODULE_2__models_almanac__["b" /* Country */]();
        this.year = new __WEBPACK_IMPORTED_MODULE_2__models_almanac__["g" /* Year */]();
        this.editor = {
            key: null,
            year: new Date().getFullYear()
        };
    }
    CountriesComponent.prototype.getYear = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.years[this.editor.year] && __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.years[this.editor.year][this.editor.key]) {
            this.year = Object.assign(new __WEBPACK_IMPORTED_MODULE_2__models_almanac__["g" /* Year */](), __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.years[this.editor.year][this.editor.key]);
        }
        else {
            this.year = new __WEBPACK_IMPORTED_MODULE_2__models_almanac__["g" /* Year */]();
        }
    };
    CountriesComponent.prototype.saveYear = function () {
        if (this.editor.key) {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("/almanac/years/" + this.editor.year + "/" + this.editor.key + "/").set(this.year).then(function () {
                console.log(true);
            });
        }
    };
    CountriesComponent.prototype.reset = function () {
        this.country = new __WEBPACK_IMPORTED_MODULE_2__models_almanac__["b" /* Country */]();
        this.year = new __WEBPACK_IMPORTED_MODULE_2__models_almanac__["g" /* Year */]();
        this.getYear();
        this.editor.key = null;
    };
    CountriesComponent.prototype.saveCountry = function () {
        var _this = this;
        if (this.editor.key) {
            var country = this.almanac.newObj(this.country);
            delete country['uid'];
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("/almanac/countries/" + this.editor.key + "/").set(country).then(function () {
                _this.reset();
            });
        }
    };
    CountriesComponent.prototype.edit = function (key) {
        this.editor.key = key;
        this.country = this.countries[this.editor.key];
        this.getYear();
    };
    CountriesComponent.prototype.ngOnInit = function () {
    };
    CountriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-countries',
            template: __webpack_require__("./src/app/components/almanac/countries/countries.component.html"),
            styles: [__webpack_require__("./src/app/components/almanac/countries/countries.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_almanac_service__["a" /* AlmanacService */]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/components/almanac/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Loading...</p>"

/***/ }),

/***/ "./src/app/components/almanac/loading/loading.component.scss":
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 25px; }\n"

/***/ }),

/***/ "./src/app/components/almanac/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__("./src/app/components/almanac/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/components/almanac/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/almanac/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-dark\">\n  <thead>\n    <tr>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Birth State</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let person of this.almanac.getPeople()\" (click)=\"editPerson(person.uid)\">\n      <td>{{ this.almanac.getName(person.name).first }}</td>\n      <td>{{ this.almanac.getName(person.name).last }}</td>\n      <td *ngIf=\"person.birth.location\">{{ this.almanac.getState(person.birth.location) }}</td>\n      <td *ngIf=\"!person.birth.location\">Not Set</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/almanac/people/people.component.scss":
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin-top: 25px; }\n\ntable {\n  margin-top: 25px; }\n"

/***/ }),

/***/ "./src/app/components/almanac/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_almanac_service__ = __webpack_require__("./src/app/services/almanac.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(almanac) {
        this.almanac = almanac;
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.people = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.people;
    }
    PeopleComponent.prototype.editPerson = function (uid) {
        this.edit.emit(uid);
    };
    PeopleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], PeopleComponent.prototype, "edit", void 0);
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-people',
            template: __webpack_require__("./src/app/components/almanac/people/people.component.html"),
            styles: [__webpack_require__("./src/app/components/almanac/people/people.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_almanac_service__["a" /* AlmanacService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_almanac_service__["a" /* AlmanacService */]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/components/almanac/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <h4>New Person</h4>\n  <form>\n    <div class=\"row\">\n      <!-- basic -->\n      <div class=\"col-3\">\n        <input type=\"text\" autocomplete=\"given-name\" class=\"form-control\" [(ngModel)]=\"this.name.first\" name=\"first-name\" placeholder=\"First name\">\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" autocomplete=\"family-name\" class=\"form-control\" [(ngModel)]=\"this.name.last\" name=\"last-name\" placeholder=\"Last name\">\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" autocomplete=\"bday\" class=\"form-control\" [(ngModel)]=\"this.birthDate\" (keyup)=\"formatDateInput($event, 'birthDate')\" name=\"birth-date\" placeholder=\"Birth Date MM/DD/YYYY\">\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"this.deathDate\" name=\"death-date\" (keyup)=\"formatDateInput($event, 'deathDate')\" placeholder=\"Death Date MM/DD/YYYY\">\n      </div>\n      <!-- birth -->\n      <div class=\"col-3\">\n        <input type=\"text\" autocomplete=\"address-level1\" class=\"form-control\" [(ngModel)]=\"this.birthLocation.street1\" name=\"birth-street\"\n          placeholder=\"Birth Street\">\n      </div>\n      <div class=\"col-3\">\n        <select class=\"form-control\" [(ngModel)]=\"this.birthLocation.country\" (change)=\"updateStates()\" name=\"birth-countries\" autocomplete=\"country-name\">\n          <option value=\"\" disabled selected>Select Country</option>\n          <option *ngFor=\"let country of this.countries\" value=\"{{ country.uid }}\">{{ country.name }}</option>\n        </select>\n      </div>\n      <div class=\"col-3\">\n        <select class=\"form-control\" [(ngModel)]=\"this.birthLocation.state\" name=\"birth-states\" autocomplete=\"state\">\n          <option value=\"\" disabled selected>Select State</option>\n          <option *ngFor=\"let state of this.states.birth\" value=\"{{ state.uid }}\">{{ state.name }}</option>\n        </select>\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" autocomplete=\"postal-code\" class=\"form-control\" [(ngModel)]=\"this.birthLocation.postal\" name=\"birth-postal\"\n          placeholder=\"Birth Zip\" type=\"number\">\n      </div>\n      <!-- death -->\n      <div class=\"col-3\">\n        <input type=\"text\" autocomplete=\"address-level1\" class=\"form-control\" [(ngModel)]=\"this.deathLocation.street1\" name=\"death-street1\"\n          placeholder=\"Death Street\">\n      </div>\n      <div class=\"col-3\">\n        <select class=\"form-control\" [(ngModel)]=\"this.deathLocation.country\" (change)=\"updateStates()\" name=\"death-countries\" autocomplete=\"country-name\">\n          <option value=\"\" disabled selected>Select Country</option>\n          <option *ngFor=\"let country of this.countries\" value=\"{{ country.uid }}\">{{ country.name }}</option>\n        </select>\n      </div>\n      <div class=\"col-3\">\n        <select class=\"form-control\" [(ngModel)]=\"this.deathLocation.state\" name=\"death-states\" autocomplete=\"state\">\n          <option value=\"\" disabled selected>Select State</option>\n          <option *ngFor=\"let state of this.states.death\" value=\"{{ state.uid }}\">{{ state.name }}</option>\n        </select>\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" autocomplete=\"postal-code\" class=\"form-control\" [(ngModel)]=\"this.deathLocation.postal\" name=\"death-postal\"\n          placeholder=\"Death Zip\" type=\"number\">\n      </div>\n      <!-- photo -->\n      <div class=\"col-12\">\n        <input type=\"text\" autocomplete=\"url\" class=\"form-control\" [(ngModel)]=\"this.person.photo\" name=\"photo-url\" placeholder=\"Photo URL\">\n      </div>\n      <!-- bio -->\n      <div class=\"col-12\">\n        <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"this.person.bio\" name=\"bio\" placeholder=\"Bio\"></textarea>\n      </div>\n      <div class=\"col-12\">\n          <div *ngIf=\"this.error\" class=\"alert alert-danger\" role=\"alert\">\n            {{ this.error }}\n          </div>\n          <button class=\"btn btn-primary\" (click)=\"save()\">Save Person</button>\n          <button class=\"btn btn-secondary\" (click)=\"clear()\">Clear Person</button>\n        </div>\n      </div>\n      <!-- calling -->\n      <app-calling [uid]=\"this.uid\" (update)=\"updateCallings()\"></app-calling>\n      <div class=\"col-12\">\n        <ul>\n          <li>\n            <b *ngIf=\"this.person.callings && this.person.callings.length > 0\">This Person's Calling(s)</b>\n            <b *ngIf=\"!this.person.callings\">This Person Has No Callings</b>\n          </li>\n          <li *ngFor=\"let key of this.person.callings\">\n            <span *ngIf=\"callings[key]\">{{ callings[key].name }}</span>\n            <span *ngIf=\"!callings[key]\">Calling \"{{ key }}\" not found...</span>\n          </li>\n        </ul>\n      </div>\n  </form>\n  <br />\n  <h4>Recently Added People</h4>\n  <app-people (edit)=\"edit($event)\"></app-people>\n</section>\n"

/***/ }),

/***/ "./src/app/components/almanac/person/person.component.scss":
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 25px; }\n  section input,\n  section textarea {\n    margin-bottom: 15px; }\n  ul {\n  list-style: none;\n  padding: 0px; }\n  ul li a {\n    color: #007bff;\n    cursor: pointer;\n    margin-left: 15px; }\n"

/***/ }),

/***/ "./src/app/components/almanac/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_almanac__ = __webpack_require__("./src/app/models/almanac.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_almanac_service__ = __webpack_require__("./src/app/services/almanac.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonComponent = /** @class */ (function () {
    function PersonComponent(almanac) {
        this.almanac = almanac;
        this.person = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["f" /* Person */]();
        this.name = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["e" /* Name */]();
        this.birthLocation = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["d" /* Location */]();
        this.deathLocation = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["d" /* Location */]();
        this.callings = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac['callings'];
        this.uid = this.almanac.guid();
        this.people = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people;
        this.countries = this.almanac.getCountries();
        this.states = {
            birth: this.almanac.getStates(null),
            death: this.almanac.getStates(null)
        };
        this.error = '';
    }
    PersonComponent.prototype.edit = function (uid) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/people/" + uid).once('value').then(function (snapshot) {
            _this.clear();
            _this.uid = uid;
            _this.person = snapshot.val();
            _this.name = _this.almanac.getName(_this.person.name);
            if (!_this.person.photo)
                _this.person.photo = '';
            if (_this.person.birth.date)
                _this.birthDate = _this.almanac.formatDate(_this.almanac.getDate(_this.person.birth.date));
            else
                _this.birthDate = '';
            if (_this.person.birth.location)
                _this.birthLocation = _this.almanac.getLocation(_this.person.birth.location);
            else
                _this.birthLocation = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["d" /* Location */]();
            if (_this.person.death.date)
                _this.deathDate = _this.almanac.formatDate(_this.almanac.getDate(_this.person.death.date));
            else
                _this.deathDate = '';
            if (_this.person.death.location)
                _this.deathLocation = _this.almanac.getLocation(_this.person.death.location);
            else
                _this.deathLocation = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["d" /* Location */]();
            _this.updateStates();
        });
    };
    PersonComponent.prototype.clear = function () {
        this.person = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["f" /* Person */]();
        this.name = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["e" /* Name */]();
        this.uid = this.almanac.guid();
        this.birthDate = '';
        this.birthLocation = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["d" /* Location */]();
        this.deathDate = '';
        this.deathLocation = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["d" /* Location */]();
    };
    PersonComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        if (!this.name.first || !this.name.first || !this.person.bio)
            valid = false;
        if (!this.name.first)
            this.error = 'Umm, looks like you forgot the first name...';
        else if (!this.name.last)
            this.error = 'So you got the first name but where\'s the last name?';
        else if (!this.person.bio)
            this.error = 'Please write a little bio for this person before you upload...';
        if (valid) {
            return true;
        }
        else {
            var message = setInterval(function () {
                _this.error = '';
                clearInterval(message);
            }, 3000);
            return false;
        }
    };
    PersonComponent.prototype.save = function () {
        var _this = this;
        // validate person form for db upload
        if (this.validate()) {
            // generate uids
            var uids_1 = {
                person: this.uid,
                name: this.almanac.guid(),
                location: {
                    birth: this.almanac.guid(),
                    death: this.almanac.guid()
                }
            };
            // if no uid for name, create one
            if (!this.person.name)
                this.person.name = uids_1.name;
            // push name data to db
            this.name.person = uids_1.person;
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/names/" + this.person.name).set(this.name);
            // check birth & death location/date
            ['birth', 'death'].forEach(function (birthDeath) {
                var event = _this.person[birthDeath];
                if (event) {
                    ['date', 'location'].forEach(function (dateLocation) {
                        var capitalizedKey = dateLocation.charAt(0).toUpperCase() + dateLocation.slice(1);
                        var value = _this[birthDeath + capitalizedKey];
                        var valid = false;
                        // make sure value is present
                        for (var x in value) {
                            if (value[x] && value[x].length > 0) {
                                valid = true;
                            }
                        }
                        // saving method for dates
                        if (valid && dateLocation === 'date' && value.split('/').length === 3) {
                            var date = value.split('/');
                            var dateUID = parseInt(date[0] + date[1] + date[2]);
                            _this.person[birthDeath].date = dateUID;
                            var obj = new __WEBPACK_IMPORTED_MODULE_1__models_almanac__["c" /* Date */]();
                            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID]) {
                                obj = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.dates[dateUID];
                            }
                            obj.month = parseInt(date[0]);
                            obj.day = parseInt(date[1]);
                            obj.year = parseInt(date[2]);
                            if (obj.people[birthDeath + "s"].indexOf(uids_1.person) === -1) {
                                obj.people[birthDeath + "s"].push(uids_1.person);
                            }
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/dates/" + dateUID).set(obj);
                        }
                        else if (valid && dateLocation === 'location') {
                            // saving method for locations
                            var locationUID = uids_1.location[birthDeath];
                            // update existing location
                            if (_this.person[birthDeath].location) {
                                locationUID = _this.person[birthDeath].location;
                            }
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/locations/" + locationUID).set(_this[birthDeath + "Location"]);
                            _this.person[birthDeath].location = locationUID;
                        }
                    });
                }
            });
            // push or update person in db
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("almanac/people/" + uids_1.person).set(this.person);
            this.clear();
        }
    };
    PersonComponent.prototype.formatDateInput = function (event, objKey) {
        if (event.keyCode !== 8 && this[objKey] && isFinite(event.key) && !isNaN(parseInt(event.key))) {
            if (this[objKey].length === 2)
                this[objKey] += '/';
            if (this[objKey].length === 5)
                this[objKey] += '/';
            if (this[objKey].length > 9)
                this[objKey] = this[objKey].substring(0, 10);
        }
        else if (event.keyCode !== 16 && event.keyCode !== 8) {
            this[objKey] = this[objKey].substring(0, this[objKey].length - 1);
        }
    };
    PersonComponent.prototype.updateStates = function () {
        this.states.birth = this.almanac.getStates(this.birthLocation.country);
        this.states.death = this.almanac.getStates(this.deathLocation.country);
    };
    PersonComponent.prototype.updateCallings = function () {
        this.callings = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac['callings'];
        var person = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].almanac.people[this.uid];
        if (person) {
            this.person.callings = person.callings;
        }
    };
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-person',
            template: __webpack_require__("./src/app/components/almanac/person/person.component.html"),
            styles: [__webpack_require__("./src/app/components/almanac/person/person.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_almanac_service__["a" /* AlmanacService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_almanac_service__["a" /* AlmanacService */]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">\n    <img src=\"https://www.deseretnews.com/v4/dist/3d030804bee0161fa244b52a297c43e6.svg\" />\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\" *ngIf=\"signedIn\">\n      <a class=\"nav-item nav-link\" routerLink=\"/venues\">Venues</a>\n      <a class=\"nav-item nav-link\" routerLink=\"/almanac\">Almanac</a>\n      <a class=\"nav-item nav-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "nav.navbar {\n  margin-bottom: 25px;\n  text-align: center; }\n  nav.navbar a.navbar-brand {\n    margin-left: 25px; }\n  nav.navbar a.navbar-brand img {\n      height: 25px; }\n  nav.navbar div.collapse div.navbar-nav {\n    margin-left: auto;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  nav.navbar div.collapse div.navbar-nav a {\n      cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        this.signedIn = false;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (!user)
                _this.signedIn = false;
            else
                _this.signedIn = true;
        });
        router.events.subscribe(function () {
            if (__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser)
                _this.signedIn = true;
            else
                _this.signedIn = false;
        });
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/models/almanac.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Location; });
/* unused harmony export Event */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calling; });
var Location = /** @class */ (function () {
    function Location() {
        this.street1 = '';
        this.state = '';
        this.postal = null;
        this.country = '';
        this.events = [];
    }
    return Location;
}());

var Event = /** @class */ (function () {
    function Event() {
        this.date = '';
        this.location = '';
    }
    return Event;
}());

var Name = /** @class */ (function () {
    function Name() {
        this.first = '';
        this.last = '';
        this.person = '';
    }
    return Name;
}());

var Date = /** @class */ (function () {
    function Date() {
        this.month = null;
        this.day = null;
        this.year = null;
        this.people = {
            deaths: [],
            births: []
        };
        this.callings = {
            starts: [],
            ends: []
        };
    }
    return Date;
}());

var Country = /** @class */ (function () {
    function Country() {
        this.name = '';
        this.history = '';
        this.year = [];
    }
    return Country;
}());

var Year = /** @class */ (function () {
    function Year() {
        this.population = null;
        this.membership = null;
        this.branches = {
            wards: null,
            missions: null
        };
        this.missions = null;
        this.stake = null;
    }
    return Year;
}());

var Person = /** @class */ (function () {
    function Person() {
        this.name = '';
        this.birth = new Event();
        this.death = new Event();
        this.photo = '';
        this.bio = '';
        this.callings = [];
    }
    return Person;
}());

var Calling = /** @class */ (function () {
    function Calling() {
        this.name = '';
        this.start = null;
        this.end = null;
        this.people = [''];
        this.emeritus = null;
    }
    return Calling;
}());



/***/ }),

/***/ "./src/app/pages/almanac/almanac.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Almanac</h1>\n\n<div class=\"dropdown\">\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n    aria-expanded=\"false\">\n    Choose Section\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <a (click)=\"changeSection('person')\" class=\"dropdown-item\">Person</a>\n    <a (click)=\"changeSection('calling')\" class=\"dropdown-item\">Calling</a>\n    <a (click)=\"changeSection('countries')\" class=\"dropdown-item\">Countries</a>\n  </div>\n</div>\n\n<app-person *ngIf=\"section === 'person'\"></app-person>\n<app-calling *ngIf=\"section === 'calling'\"></app-calling>\n<app-countries *ngIf=\"section === 'countries'\"></app-countries>\n<app-loading *ngIf=\"section === 'loading'\"></app-loading>\n"

/***/ }),

/***/ "./src/app/pages/almanac/almanac.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/almanac/almanac.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmanacComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_almanac_service__ = __webpack_require__("./src/app/services/almanac.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlmanacComponent = /** @class */ (function () {
    function AlmanacComponent(AlmanacService) {
        var _this = this;
        this.AlmanacService = AlmanacService;
        this.section = 'loading';
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('almanac/').on('value', function (snapshot) {
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac = snapshot.val();
            _this.section = 'countries';
            console.log('Getting value from Firebase...');
        });
    }
    AlmanacComponent.prototype.changeSection = function (section) {
        this.section = section;
    };
    AlmanacComponent.prototype.ngOnInit = function () {
    };
    AlmanacComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-almanac',
            template: __webpack_require__("./src/app/pages/almanac/almanac.component.html"),
            styles: [__webpack_require__("./src/app/pages/almanac/almanac.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_almanac_service__["a" /* AlmanacService */]],
            host: {
                class: 'col-12'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_almanac_service__["a" /* AlmanacService */]])
    ], AlmanacComponent);
    return AlmanacComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome</h1>\n<p>This is your connection to creating and managing databases for Newsroom.js intereactives.</p>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\"></div>\n  <div class=\"col-6\">\n    <h1>Login</h1>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Email</span>\n      </div>\n      <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n    </div>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Password</span>\n      </div>\n      <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n    </div>\n    <span class=\"error\">{{error}}</span>\n    <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n    <button class=\"btn btn-secondary\" (click)=\"signup()\">Signup</button>\n  </div>\n  <div class=\"col-3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "div.row div h1 {\n  margin-bottom: 25px;\n  text-align: center; }\n\ndiv.row div div.input-group {\n  margin-bottom: 15px; }\n\ndiv.row div div.input-group div span {\n    width: 100px; }\n\ndiv.row div button.btn {\n  margin-bottom: 25px; }\n\ndiv.row div span.error {\n  display: block;\n  margin-bottom: 15px;\n  color: red;\n  font-style: italic; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        var _this = this;
        this.router = router;
        this.email = '';
        this.password = '';
        this.error = '';
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user)
                _this.router.navigate(['/home']);
        });
        if (__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser)
            this.router.navigate(['/home']);
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.password).then(function () {
            _this.router.navigate(['/home']);
        }).catch(function (error) {
            _this.error = error.message;
        });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(this.email, this.password).then(function () {
            _this.login();
        }).catch(function (error) {
            _this.error = error.message;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            host: {
                class: 'col-12'
            },
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/venues/venues.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Venues</h1>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"photo\" [style.background-image]=\"setBackground(venue.image)\"></div>\n  </div>\n  <div class=\"col-md-8\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"venue.name\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Image\" [(ngModel)]=\"venue.image\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Location\" [(ngModel)]=\"venue.location\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Capacity\" [(ngModel)]=\"venue.capacity\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Parking\" [(ngModel)]=\"venue.parking\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Security\" [(ngModel)]=\"venue.security\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"venue.phone\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Website URL\" [(ngModel)]=\"venue.website\">\n    <textarea class=\"form-control\" placeholder=\"Food and beverage\" rows=\"3\" [(ngModel)]=\"venue.food\"></textarea>\n    <textarea class=\"form-control\" placeholder=\"Notes\" rows=\"3\" [(ngModel)]=\"venue.notes\"></textarea>\n    <div *ngIf=\"editor.success\" class=\"alert alert-success\" role=\"alert\">\n      {{editor.success}}\n    </div>\n    <div *ngIf=\"editor.error\" class=\"alert alert-danger\" role=\"alert\">\n      {{editor.error}}\n    </div>\n    <div *ngIf=\"editor.warning\" class=\"alert alert-warning\" role=\"alert\">\n      {{editor.warning}}\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"post()\">Submit</button>\n    <button class=\"btn btn-secondary\" (click)=\"clear()\">Clear</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Location</th>\n          <th scope=\"col\">Phone</th>\n          <th scope=\"col\">Website</th>\n          <th scope=\"col\">Options</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let venue of venues.reverse(); index as x\">\n          <td>{{venue.name}}</td>\n          <td>{{venue.location}}</td>\n          <td>{{venue.phone}}</td>\n          <td>\n            <a href=\"http://www.{{venue.website}}\" target=\"_blank\">{{venue.website}}</a>\n          </td>\n          <td>\n            <span class=\"edit\" (click)=\"edit(venues.length - x - 1)\">Edit</span> or\n            <span class=\"delete\" (click)=\"delete(venues.length - x - 1)\">Delete</span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/venues/venues.component.scss":
/***/ (function(module, exports) {

module.exports = "div.row {\n  margin-bottom: 25px; }\n  div.row div span.success {\n    color: blue; }\n  div.row div span.error {\n    color: red; }\n  div.row div div.photo {\n    height: 250px;\n    width: 90%;\n    float: left;\n    background-color: grey;\n    margin-bottom: 25px;\n    background-size: cover;\n    background-position: center center; }\n  div.row input,\n  div.row textarea {\n    margin-bottom: 15px; }\n  div.row input {\n    width: 40%;\n    display: inline-block;\n    margin-right: 15px; }\n  div.row div table tbody tr td span {\n    cursor: pointer; }\n  div.row div table tbody tr td span.delete {\n    color: red; }\n  div.row div table tbody tr td span.edit {\n    color: #007bff; }\n"

/***/ }),

/***/ "./src/app/pages/venues/venues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VenuesComponent = /** @class */ (function () {
    function VenuesComponent(_sanitizer) {
        var _this = this;
        this._sanitizer = _sanitizer;
        this.venue = {
            name: '',
            image: '',
            location: '',
            capacity: '',
            parking: '',
            security: '',
            phone: '',
            website: '',
            food: '',
            notes: ''
        };
        this.editor = {
            id: null,
            success: '',
            error: '',
            warning: ''
        };
        this.venues = [];
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/venues').on('value', function (snapshot) {
            _this.venues = snapshot.val();
        });
    }
    VenuesComponent.prototype.setBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    VenuesComponent.prototype.delete = function (id) {
        var _this = this;
        this.venues = this.venues.filter(function (item) {
            return item !== _this.venues[id];
        });
        this.update();
    };
    VenuesComponent.prototype.clear = function () {
        this.venue = {
            name: '',
            image: '',
            location: '',
            capacity: '',
            parking: '',
            security: '',
            phone: '',
            website: '',
            food: '',
            notes: ''
        };
        this.editor.id = null;
    };
    VenuesComponent.prototype.edit = function (id) {
        this.venue = this.venues[id];
        if (!this.venue.notes)
            this.venue.notes = '';
        this.editor.id = id;
        window.scrollTo(0, 0);
    };
    VenuesComponent.prototype.alert = function () {
        var _this = this;
        var clear = setTimeout(function () {
            _this.editor.error = '';
            _this.editor.success = '';
            clearTimeout(clear);
        }, 5000);
    };
    VenuesComponent.prototype.update = function () {
        var _this = this;
        this.editor.warning = 'Working...';
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('venues').set(this.venues).then(function () {
            _this.editor.warning = '';
            _this.editor.success = 'Success!';
            _this.alert();
        }).catch(function (msg) {
            _this.editor.warning = '';
            _this.editor.error = msg;
            _this.alert();
        });
    };
    VenuesComponent.prototype.post = function () {
        if (this.venue.name.length <= 0) {
            this.editor.warning = 'You forgot a name';
            this.alert();
        }
        else {
            if (this.editor.id)
                this.venues[this.editor.id] = this.venue;
            else
                this.venues.push(this.venue);
            this.update();
        }
    };
    VenuesComponent.prototype.ngOnInit = function () {
    };
    VenuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-venues',
            host: {
                class: 'col-12'
            },
            template: __webpack_require__("./src/app/pages/venues/venues.component.html"),
            styles: [__webpack_require__("./src/app/pages/venues/venues.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], VenuesComponent);
    return VenuesComponent;
}());



/***/ }),

/***/ "./src/app/services/almanac.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmanacService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlmanacService = /** @class */ (function () {
    function AlmanacService() {
        var _this = this;
        this.section = 'person';
        // display
        this.getName = function (uid) { return _this.newObj(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.names[uid]); };
        this.getLocation = function (uid) { return _this.newObj(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.locations[uid]); };
        this.getState = function (uid) {
            var location = _this.getLocation(uid);
            if (!location.state) {
                return 'Not Set';
            }
            else {
                return _this.newObj(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.states[location.country][location.state]);
            }
        };
        this.getCountry = function (uid) { return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.countries[uid]; };
        this.getDate = function (uid) { return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.dates[uid]; };
        // obj requests
        this.getPeople = function () {
            var people = [];
            Object.keys(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac['people']).forEach(function (uid) {
                var person = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.people[uid];
                person.uid = uid;
                people.push(person);
            });
            return people;
        };
        this.getCountries = function () {
            var array = [], unitedStates = {};
            Object.keys(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.countries).forEach(function (uid) {
                var obj = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.countries[uid];
                obj.uid = uid;
                if (obj.name === 'United States') {
                    unitedStates = obj;
                }
                array.push(obj);
            });
            array.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                else if (a.name > b.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            if (unitedStates) {
                array.unshift(unitedStates);
            }
            return _this.newObj(array);
        };
        this.getStates = function (uid) {
            var array = [];
            if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.states[uid]) {
                Object.keys(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.states[uid]).forEach(function (uid2) {
                    var obj = {
                        name: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].almanac.states[uid][uid2],
                        uid: uid2
                    };
                    array.push(obj);
                });
            }
            array.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            return _this.newObj(array);
        };
        // build
        this.newObj = function (obj) { return JSON.parse(JSON.stringify(obj)); };
        this.capitalize = function (string) { return string.charAt(0).toUpperCase() + string.slice(1); };
        this.getKeys = function (obj) { return Object.keys(obj); };
        this.clear = function () { _this[_this.section] = _this.newObj(_this['new' + _this.capitalize(_this.section)]); };
        this.formatDate = function (date) { return date.month + '/' + date.day + '/' + date.year; };
        this.compareObjs = function (obj1, obj2) {
            var test = true;
            Object.keys(obj1).forEach(function (key) {
                if (!obj1[key] || !obj2[key])
                    test = false;
                else if (obj1[key] !== obj2[key])
                    test = false;
            });
            return test;
        };
    }
    // generate uid
    AlmanacService.prototype.guid = function () {
        var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    AlmanacService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AlmanacService);
    return AlmanacService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    almanac: null
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
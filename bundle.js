/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/badges.js":
/*!***********************!*\
  !*** ./src/badges.js ***!
  \***********************/
/*! exports provided: NoBadge, StatusBadge, BreakBadge, LongBreakBadge, StatsBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoBadge\", function() { return NoBadge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StatusBadge\", function() { return StatusBadge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BreakBadge\", function() { return BreakBadge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LongBreakBadge\", function() { return LongBreakBadge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StatsBadge\", function() { return StatsBadge; });\n/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ \"./src/logger.js\");\n/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.js */ \"./src/icons.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\n\n\nfunction makeDynamic(state, item) {\n  if (state.refresh) {\n    return {\n      refresh: state.refresh,\n      ...item\n    };\n  } else {\n    return item;\n  }\n}\n\nfunction NoBadge(state) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].debug(`Displaying empty badge for card ${state.name}`);\n  const no_badge = {};\n  return makeDynamic(state, no_badge);\n}\nfunction StatusBadge(state) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].debug(`Displaying status badge for card ${state.name}`);\n  const status_badge = {\n    icon: _icons_js__WEBPACK_IMPORTED_MODULE_1__[\"status_icon\"],\n    title: \"Pomorello\",\n    text: `Pomodoro: ${state.timeStr()}`,\n    color: \"green\"\n  };\n  return makeDynamic(state, status_badge);\n}\nfunction BreakBadge(state) {\n  if (state.break_parity % 3 === 0) {\n    return LongBreakBadge(state);\n  }\n\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].debug(`Displaying break badge for card ${state.name}`);\n  const break_badge = {\n    icon: _icons_js__WEBPACK_IMPORTED_MODULE_1__[\"break_icon\"],\n    title: \"Pomorello\",\n    text: `Break: ${state.timeStr()}`,\n    color: \"blue\"\n  };\n  return makeDynamic(state, break_badge);\n}\nfunction LongBreakBadge(state) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].debug(`Displaying long break badge for card ${state.name}`);\n  const lbreak_badge = {\n    icon: _icons_js__WEBPACK_IMPORTED_MODULE_1__[\"long_break_icon\"],\n    title: \"Pomorello\",\n    text: `Long Break: ${state.timeStr()}`,\n    color: \"blue\"\n  };\n  return makeDynamic(state, lbreak_badge);\n}\nfunction StatsBadge(state) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].debug(`Displaying statistics badge for card ${state.name}`);\n  let time_ms = Object.entries(state.set_hist || {}).reduce((acc, pair) => acc + pair[0] * pair[1], 0);\n  const time_s = Math.floor(time_ms / 1000);\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].debug(`Stats for card ${state.name}: ${time_s} seconds`);\n  const stats_badge = {\n    icon: _icons_js__WEBPACK_IMPORTED_MODULE_1__[\"pomorello_icon\"],\n    title: \"Activity Summary\",\n    text: `Time spent : ${Object(_data_js__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(time_s)}`,\n    color: null\n  };\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].info(`Stats badge for card ${state.name}:\\n${JSON.stringify(stats_badge, null, 2)}`);\n  return makeDynamic(state, stats_badge);\n}\n\n//# sourceURL=webpack:///./src/badges.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: format, State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"format\", function() { return format; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\n/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ \"./src/logger.js\");\n\nfunction format(seconds) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(`Formatting time from ${seconds}`);\n  const hrs = Math.floor(seconds / 3600) % 24;\n  const hrs_str = hrs.toFixed(0);\n  const mins = Math.floor(seconds / 60) % 60;\n  const mins_str = mins.toFixed(0);\n  const secs = seconds % 60;\n  const secs_str = secs.toFixed(0);\n\n  if (hrs) {\n    return `${hrs_str} h, ${mins_str} m`;\n  } else {\n    return `${mins_str} m, ${secs_str} s`;\n  }\n}\nclass State {\n  constructor(refresh = 10) {\n    _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(`Constructing new card with refresh ${refresh}`);\n    this.is_active = false;\n    this.is_break = false;\n    this.start_ms = 0;\n    this.set_length = 1000 * 60 * 25;\n    this.break_length = 1000 * 60 * 5;\n    this.break_parity = 0;\n    this.set_hist = {};\n    this.name = \"?\";\n    this.refresh = refresh;\n  }\n\n  async fetch(t) {\n    _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(\"Fetching data\");\n    const name_p = t.card(\"name\");\n    let data = await t.getAll();\n\n    try {\n      data = data.card.shared || {};\n    } catch {\n      data = {};\n    }\n\n    _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(\"Got data\");\n    this.is_active = data.POMORELLO_ACTIVE || this.is_active;\n    this.is_break = data.POMORELLO_BREAK || this.is_break;\n    this.start_ms = data.POMORELLO_START || this.start_ms;\n    this.set_length = data.POMORELLO_SET_LENGTH || this.set_length;\n    this.break_length = data.POMORELLO_BREAK_LENGTH || this.break_length;\n    this.break_parity = data.POMORELLO_BREAK_PARITY || this.break_parity;\n    this.set_hist = data.POMORELLO_SET_HISTORY || this.set_hist;\n    this.name = (await name_p).name;\n    _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].info(JSON.stringify(this, null, 2));\n  }\n\n  async sync(t) {\n    _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(`Syncing card ${this.name}`);\n    return t.set(\"card\", \"shared\", {\n      POMORELLO_ACTIVE: this.is_active,\n      POMORELLO_BREAK: this.is_break,\n      POMORELLO_START: this.start_ms,\n      POMORELLO_SET_LENGTH: this.set_length,\n      POMORELLO_BREAK_LENGTH: this.break_length,\n      POMORELLO_BREAK_PARITY: this.break_parity,\n      POMORELLO_SET_HISTORY: this.set_hist // Name should be read-only\n\n    });\n  }\n\n  age() {\n    const age = Date.now() - this.start_ms;\n    _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(`Computing age for card ${this.name}: ${age}`);\n    return age;\n  }\n\n  timeStr() {\n    _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(`Formatting time for card ${this.name}`);\n    let length;\n\n    if (this.is_active) {\n      length = this.set_length;\n    } else if (this.is_break) {\n      length = this.break_length;\n\n      if (this.break_parity % 3 === 0) {\n        length *= 3;\n      }\n    }\n\n    const time_ms = length - this.age();\n    let time_s = Math.floor(time_ms / 1000);\n\n    if (this.refresh) {\n      time_s = this.refresh * Math.ceil(time_s / this.refresh);\n    }\n\n    return format(time_s);\n  }\n\n  addSet() {\n    _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(`Incrementing history of completed set for card ${this.name}`);\n    const prev = this.set_hist[this.set_length] || 0;\n    this.set_hist[this.set_length] = prev + 1;\n    this.break_parity += 1;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! exports provided: pomorello_icon, status_icon, break_icon, long_break_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pomorello_icon\", function() { return pomorello_icon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"status_icon\", function() { return status_icon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"break_icon\", function() { return break_icon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"long_break_icon\", function() { return long_break_icon; });\nconst pomorello_icon = \"./target.svg\";\nconst status_icon = \"./clock.svg\";\nconst break_icon = \"./single-bed.svg\";\nconst long_break_icon = \"./award.svg\";\n\n//# sourceURL=webpack:///./src/icons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/update.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _badges_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badges.js */ \"./src/badges.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.js */ \"./src/icons.js\");\n/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logger.js */ \"./src/logger.js\");\n\n\n\n\n\n\nwindow.TrelloPowerUp.initialize({\n  \"card-buttons\": async t => {\n    return [{\n      icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__[\"pomorello_icon\"],\n      text: \"Pomorello\",\n      callback: async new_t => Object(_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"MainMenu\"])(new_t)\n    }];\n  },\n  \"card-badges\": t => {\n    _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].trace(\"Loading card-badges\");\n    return [{\n      dynamic: async () => {\n        const state = new _data_js__WEBPACK_IMPORTED_MODULE_3__[\"State\"]();\n        _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].debug(\"State initialized\");\n        await state.fetch(t);\n        _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].info(`State retrieved for card ${state.name}`);\n        const age_ms = state.age();\n\n        if (state.is_active) {\n          _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].trace(\"Pomodoro active\");\n\n          if (age_ms > state.set_length) {\n            _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].trace(\"Pomodoro expired\");\n            await Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"Break\"])(t, state);\n            return Object(_badges_js__WEBPACK_IMPORTED_MODULE_2__[\"BreakBadge\"])(state);\n          } else {\n            _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].trace(\"Pomodoro in progress\");\n            return Object(_badges_js__WEBPACK_IMPORTED_MODULE_2__[\"StatusBadge\"])(state);\n          }\n        } else if (state.is_break) {\n          _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].trace(\"Break active\");\n\n          if (age_ms > state.break_length * (state.break_parity % 3 === 0 ? 3 : 1)) {\n            _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].trace(\"Break expired\");\n            await Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"End\"])(t, state);\n            return Object(_badges_js__WEBPACK_IMPORTED_MODULE_2__[\"NoBadge\"])(state);\n          } else {\n            _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].trace(\"Break in progress\");\n            return Object(_badges_js__WEBPACK_IMPORTED_MODULE_2__[\"BreakBadge\"])(state);\n          }\n        } else {\n          _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].trace(\"No Pomodoro active\");\n          return Object(_badges_js__WEBPACK_IMPORTED_MODULE_2__[\"NoBadge\"])(state);\n        }\n      }\n    }];\n  },\n  \"card-detail-badges\": t => {\n    _logger_js__WEBPACK_IMPORTED_MODULE_5__[\"Logger\"].trace(\"Loading card-detail-badges\");\n    return [{\n      dynamic: async () => {\n        const state = new _data_js__WEBPACK_IMPORTED_MODULE_3__[\"State\"]();\n        await state.fetch(t);\n\n        if (state.is_active) {\n          return Object(_badges_js__WEBPACK_IMPORTED_MODULE_2__[\"StatusBadge\"])(state);\n        } else if (state.is_break) {\n          return Object(_badges_js__WEBPACK_IMPORTED_MODULE_2__[\"BreakBadge\"])(state);\n        } else {\n          return Object(_badges_js__WEBPACK_IMPORTED_MODULE_2__[\"NoBadge\"])(state);\n        }\n      }\n    }, {\n      dynamic: async () => {\n        const state = new _data_js__WEBPACK_IMPORTED_MODULE_3__[\"State\"]();\n        await state.fetch(t);\n        return Object(_badges_js__WEBPACK_IMPORTED_MODULE_2__[\"StatsBadge\"])(state);\n      }\n    }];\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logger\", function() { return Logger; });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Logger {\n  /* LOG LEVELS:\n   * 0: OFF\n   * 1: INFO\n   * 2: DEBUG\n   * 3: TRACE\n   */\n\n  /* Log transport\n   * Defaults to console.log\n   */\n  static info(message) {\n    if (Logger.level >= 1) {\n      Logger.log(message);\n    }\n  }\n\n  static debug(message) {\n    if (Logger.level >= 2) {\n      Logger.log(message);\n    }\n  }\n\n  static trace(message) {\n    if (Logger.level >= 3) {\n      Logger.log(message);\n    }\n  }\n\n}\n\n_defineProperty(Logger, \"level\", 0);\n\n_defineProperty(Logger, \"log\", console.log);\n\n//# sourceURL=webpack:///./src/logger.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: SetMenu, ActionMenu, MainMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetMenu\", function() { return SetMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionMenu\", function() { return ActionMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainMenu\", function() { return MainMenu; });\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/update.js\");\n/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ \"./src/logger.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\n\nfunction SetMenu(t, state) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_1__[\"Logger\"].trace(\"Showing dropdown powerup menu\");\n  const short_set = {\n    text: \"Short Set \" + \"15m active, 3m break, 9m long break\".replace(/ /g, '\\xa0'),\n    callback: new_t => Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"Start\"])(new_t, state, 15, 3)\n  };\n  const med_set = {\n    text: \"Standard Set \" + \"25m active, 5m break, 15m long break\".replace(/ /g, '\\xa0'),\n    callback: new_t => Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"Start\"])(new_t, state, 25, 5)\n  };\n  const long_set = {\n    text: \"Long Set \" + \"45m active, 10m break, 30m long break\".replace(/ /g, '\\xa0'),\n    callback: new_t => Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"Start\"])(new_t, state, 45, 5)\n  };\n  let debug_set = {};\n\n  if (_logger_js__WEBPACK_IMPORTED_MODULE_1__[\"Logger\"].level >= 2) {\n    debug_set = {\n      text: \"Debug Set \" + \"1m active, 10s break, 30s long break\".replace(/ /g, '\\xa0'),\n      callback: new_t => Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"Start\"])(new_t, state, 1, 1 / 6)\n    };\n  }\n\n  return t.popup({\n    title: \"Start a Pomodoro\",\n    items: [short_set, med_set, long_set, debug_set]\n  });\n}\nfunction ActionMenu(t, state) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_1__[\"Logger\"].trace(\"Showing dropdown action menu\");\n  const kill_set = {\n    text: \"Cancel Set\",\n    callback: new_t => Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"End\"])(new_t, state)\n  };\n  return t.popup({\n    title: \"Stop a Pomodoro\",\n    items: [kill_set]\n  });\n}\nasync function MainMenu(t) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_1__[\"Logger\"].trace(\"Showing main menu\");\n  const state = new _data_js__WEBPACK_IMPORTED_MODULE_2__[\"State\"]();\n  await state.fetch(t);\n  const start = {\n    text: \"Start a Set\",\n    callback: new_t => SetMenu(new_t, state)\n  };\n  const stop = {\n    text: \"Stop a Set\",\n    callback: new_t => ActionMenu(new_t, state)\n  };\n  return t.popup({\n    title: \"Pomorello Menu\",\n    items: [start, stop]\n  });\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/notifications.js":
/*!******************************!*\
  !*** ./src/notifications.js ***!
  \******************************/
/*! exports provided: notify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notify\", function() { return notify; });\n/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ \"./src/logger.js\");\n\nfunction notify(t, message) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(\"Creating notification...\");\n  return t.alert({\n    message,\n    duration: 10,\n    display: \"success\"\n  });\n}\n\n//# sourceURL=webpack:///./src/notifications.js?");

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/*! exports provided: Start, Break, End */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Start\", function() { return Start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Break\", function() { return Break; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"End\", function() { return End; });\n/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ \"./src/logger.js\");\n/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.js */ \"./src/notifications.js\");\n\n\nasync function Start(t, state, set_length_m, break_length_m) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(\"Starting new set\");\n  state.is_active = true;\n  state.is_break = false;\n  state.start_ms = Date.now();\n  state.set_length = 1000 * 60 * set_length_m;\n  state.break_length = 1000 * 60 * break_length_m;\n  const toReturn = state.sync(t);\n  t.closePopup();\n  return toReturn;\n}\nasync function Break(t, state) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(`Pomodoro for card ${state.name} finished.`);\n  Object(_notifications_js__WEBPACK_IMPORTED_MODULE_1__[\"notify\"])(t, `Pomodoro for card ${state.name} complete.\\nTime to take a break!`);\n  state.is_active = false;\n  state.is_break = true;\n  state.start_ms = Date.now();\n  state.addSet();\n  const toReturn = state.sync(t);\n  t.closePopup();\n  return toReturn;\n}\nasync function End(t, state) {\n  _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"].trace(`Break for card ${state.name} finished.`);\n  Object(_notifications_js__WEBPACK_IMPORTED_MODULE_1__[\"notify\"])(t, `Break for card ${state.name} has ended!`);\n  state.is_active = false;\n  state.is_break = false;\n  state.start_ms = 0;\n  const toReturn = state.sync(t);\n  t.closePopup();\n  return toReturn;\n}\n\n//# sourceURL=webpack:///./src/update.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });
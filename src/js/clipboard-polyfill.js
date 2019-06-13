!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.clipboard=factory():root.clipboard=factory()}("undefined"!=typeof self?self:this,function(){return modules=[function(module,exports,__webpack_require__){"use strict";var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})},__generator=this&&this.__generator||function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=0<(t=_.trys).length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}};Object.defineProperty(exports,"__esModule",{value:!0});var DT_1=__webpack_require__(1);exports.DT=DT_1.DT;var debugLog=function(s){},showWarnings=!0,warn=function(){(console.warn||console.log).apply(console,arguments)}.bind("[clipboard-polyfill]"),TEXT_PLAIN="text/plain";function setDebugLog(f){debugLog=f}function suppressWarnings(){showWarnings=!1,DT_1.suppressDTWarnings()}function write(data){return __awaiter(this,void 0,void 0,function(){var text;return __generator(this,function(_a){if(showWarnings&&!data.getData(TEXT_PLAIN)&&warn("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),seemToBeInIE()){if(function(data){var text=data.getData(TEXT_PLAIN);if(void 0===text)throw"No `text/plain` value was specified.";return window.clipboardData.setData("Text",text)}(data))return[2];throw"Copying failed, possibly because the user rejected it."}if(execCopy(data))return debugLog("regular execCopy worked"),[2];if(-1<navigator.userAgent.indexOf("Edge"))return debugLog('UA "Edge" => assuming success'),[2];if(copyUsingTempSelection(document.body,data))return debugLog("copyUsingTempSelection worked"),[2];if(function(data){var tempElem=document.createElement("div");tempElem.setAttribute("style","-webkit-user-select: text !important"),tempElem.textContent="temporary element",document.body.appendChild(tempElem);var success=copyUsingTempSelection(tempElem,data);return document.body.removeChild(tempElem),success}(data))return debugLog("copyUsingTempElem worked"),[2];if(void 0!==(text=data.getData(TEXT_PLAIN))&&function(str){debugLog("copyTextUsingDOM");var tempElem=document.createElement("div");tempElem.setAttribute("style","-webkit-user-select: text !important");var spanParent=tempElem;tempElem.attachShadow&&(debugLog("Using shadow DOM."),spanParent=tempElem.attachShadow({mode:"open"}));var span=document.createElement("span");span.innerText=str,spanParent.appendChild(span),document.body.appendChild(tempElem),selectionSet(span);var result=document.execCommand("copy");return selectionClear(),document.body.removeChild(tempElem),result}(text))return debugLog("copyTextUsingDOM worked"),[2];throw"Copy command failed."})})}function writeText(s){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return navigator.clipboard&&navigator.clipboard.writeText?(debugLog("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(s)]):[2,write(DTFromText(s))]})})}function read(){return __awaiter(this,void 0,void 0,function(){var _a;return __generator(this,function(_b){switch(_b.label){case 0:return _a=DTFromText,[4,readText()];case 1:return[2,_a.apply(void 0,[_b.sent()])]}})})}function readText(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){if(navigator.clipboard&&navigator.clipboard.readText)return debugLog("Using `navigator.clipboard.readText()`."),[2,navigator.clipboard.readText()];if(seemToBeInIE())return debugLog("Reading text using IE strategy."),[2,function(){return __awaiter(this,void 0,void 0,function(){var text;return __generator(this,function(_a){if(""===(text=window.clipboardData.getData("Text")))throw"Empty clipboard or could not read plain text from clipboard";return[2,text]})})}()];throw"Read is not supported in your browser."})})}exports.setDebugLog=setDebugLog,exports.suppressWarnings=suppressWarnings,exports.write=write,exports.writeText=writeText,exports.read=read,exports.readText=readText;var useStarShown=!1;function useStar(){useStarShown||(showWarnings&&warn('The deprecated default object of `clipboard-polyfill` was called. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'),useStarShown=!0)}var ClipboardPolyfillDefault=function(){function ClipboardPolyfillDefault(){}return ClipboardPolyfillDefault.setDebugLog=function(f){return useStar(),setDebugLog(f)},ClipboardPolyfillDefault.suppressWarnings=function(){return useStar(),suppressWarnings()},ClipboardPolyfillDefault.write=function(data){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return useStar(),[2,write(data)]})})},ClipboardPolyfillDefault.writeText=function(s){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return useStar(),[2,writeText(s)]})})},ClipboardPolyfillDefault.read=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return useStar(),[2,read()]})})},ClipboardPolyfillDefault.readText=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return useStar(),[2,readText()]})})},ClipboardPolyfillDefault.DT=DT_1.DT,ClipboardPolyfillDefault}();exports.default=ClipboardPolyfillDefault;var FallbackTracker=function(){this.success=!1};function execCopy(data){var tracker=new FallbackTracker,listener=function(tracker,data,e){debugLog("listener called"),tracker.success=!0,data.forEach(function(value,key){var clipboardData=e.clipboardData;clipboardData.setData(key,value),key===TEXT_PLAIN&&clipboardData.getData(key)!=value&&(debugLog("setting text/plain failed"),tracker.success=!1)}),e.preventDefault()}.bind(this,tracker,data);document.addEventListener("copy",listener);try{document.execCommand("copy")}finally{document.removeEventListener("copy",listener)}return tracker.success}function copyUsingTempSelection(e,data){selectionSet(e);var success=execCopy(data);return selectionClear(),success}function selectionSet(elem){var sel=document.getSelection();if(sel){var range=document.createRange();range.selectNodeContents(elem),sel.removeAllRanges(),sel.addRange(range)}}function selectionClear(){var sel=document.getSelection();sel&&sel.removeAllRanges()}function DTFromText(s){var dt=new DT_1.DT;return dt.setData(TEXT_PLAIN,s),dt}function seemToBeInIE(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var dataTypes=["text/plain","text/html"],warn=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),showWarnings=!0;exports.suppressDTWarnings=function(){showWarnings=!1};var DT=function(){function DT(){this.m={}}return DT.prototype.setData=function(type,value){showWarnings&&-1===dataTypes.indexOf(type)&&warn("Unknown data type: "+type,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[type]=value},DT.prototype.getData=function(type){return this.m[type]},DT.prototype.forEach=function(f){for(var k in this.m)f(this.m[k],k)},DT}();exports.DT=DT}],installedModules={},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0);function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var modules,installedModules});
//# sourceMappingURL=clipboard-polyfill.js.map
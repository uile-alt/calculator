parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
new Vue({el:"#app",data:{equation:"0",isDecimalAdded:!1,isOperatorAdded:!1,isStarted:!1},methods:{isOperator:function(t){return["+","-","×","÷"].indexOf(t)>-1},append:function(t){if("0"===this.equation&&!this.isOperator(t))return"."===t?(this.equation+=""+t,this.isDecimalAdded=!0):this.equation=""+t,void(this.isStarted=!0);if(!this.isOperator(t)){if("."===t&&this.isDecimalAdded)return;"."===t?(this.isDecimalAdded=!0,this.isOperatorAdded=!0):this.isOperatorAdded=!1,this.equation+=""+t}this.isOperator(t)&&!this.isOperatorAdded&&(this.equation+=""+t,this.isDecimalAdded=!1,this.isOperatorAdded=!0)},calculate:function calculate(){var result=this.equation.replace(new RegExp("×","g"),"*").replace(new RegExp("÷","g"),"/");this.equation=parseFloat(eval(result).toFixed(9)).toString(),this.isDecimalAdded=!1,this.isOperatorAdded=!1},calculateToggle:function(){!this.isOperatorAdded&&this.isStarted&&(this.equation=this.equation+"* -1",this.calculate())},calculatePercentage:function(){!this.isOperatorAdded&&this.isStarted&&(this.equation=this.equation+"* 0.01",this.calculate())},clear:function(){this.equation="0",this.isDecimalAdded=!1,this.isOperatorAdded=!1,this.isStarted=!1}}});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f58ffc15.js.map
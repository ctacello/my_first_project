!function(e){var t={};function o(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);class s{constructor(e,t,o){this.name=e,this.secondname=t,this.sum=o}}class n{constructor(e,t,o){this.title=e,this.type=t,this.value=o}}console.log("Hello, world, my name is Staniz."),console.log("Lets do this task!"),console.log("Test hash"),console.log(" ");let i=new class{constructor(){this.clients=[],this.goods=[],this.buyHistory=[],this.addClient=e=>{this.clients.push(e)},this.removeClient=e=>{this.clients.splice(e,1)},this.addGoods=e=>{this.goods.push(e)},this.removeGoods=e=>{this.goods.splice(e,1)},this.addBuyHistory=e=>{this.buyHistory.push(e)},this.removeBuyHistory=e=>{this.BuyHistory.splice(e,1)}}},r=new s("John","Tribiani",0),l=new s("Max","Lanister",0);i.addClient(r),i.addClient(l),i.removeClient(1);let u=new n("Apple","Fruits",10),c=new n("Cherry","Fruits",15),d=new n("Tomato","Vegetables",20),a=new n("Cap","Kitchen",50);i.addGoods(u),i.addGoods(c),i.addGoods(d),i.addGoods(a),i.removeGoods(3),console.log(i.clients),console.log(i.goods),console.log(i.clients.client01)}]);
(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{187:function(e,t,n){"use strict";var r=n(39),a=n(0),o=n(43);n(1);var l=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.color,n=e.label,r=e.testID,a=e.value,l={color:t};return Object(o.a)("option",{style:l,testID:r,value:a},n)},r}(a.Component);l.propTypes={};var c=n(4);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this)._handleChange=function(e){var n=t.props.onValueChange,r=e.target,a=r.selectedIndex,o=r.value;n&&n(o,a)},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.children,n=e.enabled,r=e.selectedValue,a=e.style,l=e.testID,c=(e.itemStyle,e.mode,e.prompt,e.onValueChange,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","enabled","selectedValue","style","testID","itemStyle","mode","prompt","onValueChange"]));return Object(o.a)("select",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({children:t,disabled:!1===n||void 0,onChange:this._handleChange,style:[p.initial,a],testID:l,value:r},c))},r}(a.Component);i.Item=l,i.propTypes={};var p=c.a.create({initial:{fontFamily:"System",fontSize:"inherit",margin:0}});t.a=Object(r.a)(i)},270:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(15),a=n.n(r),o=n(0),l=n.n(o),c=n(187),u=n(5),i=n(3),p=n(269),s={AB:[51.083333,-114.083333],BC:[49.25,-123.13333],MB:[49.88333,-97.166667],NB:[47.36226,-68.32787],NL:[47.55,-52.66666],NS:[44.65,-63.6],NT:[62.45,-114.35],NU:[63.7416279,-68.5537083],ON:[43.666667,-79.416667],PE:[46.238225,-63.139481],PQ:[45.5,-73.583333],SK:[50.45,-104.616667],YT:[60.71666,-135.05]},y=n(143);function f(e){var t=e.callback,n=Object(o.useState)("ON"),r=a()(n,2),f=r[0],h=r[1],b="web"===u.a.OS,v=function(e){h(e);var n=a()(s[e],2),r=n[0],o=n[1];t(e,{lat:r,lng:o})};return b?l.a.createElement(i.a,{style:y.a.pickerWrapper},l.a.createElement(c.a,{placeholder:"Choose Province",selectedValue:f,style:y.a.pickerContent,onValueChange:function(e,t){return v(e)}},Object.keys(p.a).map((function(e){return l.a.createElement(c.a.Item,{label:p.a[e],value:e,key:e})})))):l.a.createElement(c.a,{placeholder:"Choose Province",selectedValue:f,style:y.a.picker,onValueChange:function(e,t){return v(e)}},Object.keys(p.a).map((function(e){return l.a.createElement(c.a.Item,{label:p.a[e],value:e,key:e})})))}}}]);
//# sourceMappingURL=0.7d981327.chunk.js.map
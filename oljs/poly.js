/* Rerun without minification (remove `.min` from URL path) for verbose metadata */

(function(undefined) {function _mutation(e){if(e.length){if(1===e.length)return"string"==typeof e[0]?document.createTextNode(e[0]):e[0];for(var t,n=document.createDocumentFragment(),r=e.length,o=-1;++o<r;)t=e[o],n.appendChild("string"==typeof t?document.createTextNode(t):t);return n}throw new Error("DOM Exception 8")}Document.prototype.after=Element.prototype.after=function(){this.parentNode&&this.parentNode.insertBefore(_mutation(arguments),this.nextSibling)},"Text"in this&&(Text.prototype.after=Element.prototype.after);Document.prototype.append=Element.prototype.append=function(){this.appendChild(_mutation(arguments))};Document.prototype.before=Element.prototype.before=function(){this.parentNode&&this.parentNode.insertBefore(_mutation(arguments),this)},"Text"in this&&(Text.prototype.before=Element.prototype.before);Document.prototype.prepend=Element.prototype.prepend=function(){this.insertBefore(_mutation(arguments),this.firstChild)};Document.prototype.replaceWith=Element.prototype.replaceWith=function(){this.parentNode&&this.parentNode.replaceChild(_mutation(arguments),this)},"Text"in this&&(Text.prototype.replaceWith=Element.prototype.replaceWith);}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
/*! parsely-js-api - v1.6.0-dev.3 - 2020-05-06
 * http://www.parsely.com/
 * 2020 Parsely, Inc. */

window.PARSELY=window.PARSELY||{},function(){var t=function(){return function(t){this!==window&&void 0!==this&&(this.msgs.length>=100&&(this.msgs=this.msgs.slice(0,100)),this.msgs.push(t))}};PARSELY.console={"msgs":[],"log":t(),"dir":t()}}(),function(){var t=PARSELY.console,e=document.getElementById("parsely-cfg");e?function(e,s,n){var o=s+(PARSELY.statichost||"cdn.parsely.com"),i="parsely-script-sst-"+Math.floor(99999999*Math.random()),c=document.getElementById(i),a=n.parentElement;(c=document.createElement("script")).id=i,c.async=!0;var l=o+"/keys/"+e+"/p.js";t.log("Loading site-specific bundle from "+l),c.src=l,a.appendChild(c),PARSELY.loaded=!0}(PARSELY.site||e.getAttribute("data-parsely-site"),document.location.protocol+"//",e):t.log("Parse.ly disabled because configuration root element missing: #parsely-cfg")}();
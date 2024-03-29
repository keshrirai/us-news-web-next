//tealium universal tag - utag.132 ut4.0.202012291905, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}
return true;};u.checkFunction=function(fn){if(u.typeOf(fn)==="string"&&window[fn]&&u.typeOf(window[fn])==="function"){return window[fn];}};u.map={};u.extend=[];u.loader_cb=function(a,b,c){utag.DB("send:132:CALLBACK");var c,f,g,_event,_item,_items,_length;u.initialized=true;Sailthru.init(Object.assign(u.data.init,{onSignupSuccess:function(dict){if(dict&&dict.response&&dict.response.vars){dict.response.vars.usn_visitor_id=utag_data.usn_visitor_id;dict.response.vars.usn_session_id=utag_data.usn_session_id;Sailthru.integration('userSignUp',dict.response);}}}));if(u.data.pageviewTracking==="manual"){if(u.data.pageview.url){u.data.pageview.tags=u.data.pageview.tags||{};Sailthru.track("pageview",u.data.pageview);}}
if(u.data.order_id&&u.data.event_list.toString().indexOf("purchase")===-1){u.data.event_list.push("purchase");}
for(var i=0;i<u.data.event_list.length;i++){_event=u.data.event_list[i];if(_event==="userSignUp"){u.data.userSignUp.email=u.data.userSignUp.email||u.data.customer_id||"";u.data.userSignUp.lists=u.data.userSignUp.lists||{};if(!u.data.userSignUp.email&&(!u.data.userSignUp.id||!u.data.userSignUp.key)){utag.DB(u.id+": WARN: userSignUp event parameter missing: one of the following must be populated: Email or ID and Key");}
if(u.isEmptyObject(u.data.userSignUp.lists)&&u.isEmptyObject(u.data.userSignUp.vars)&&!u.data.userSignUp.source){utag.DB(u.id+": WARN: userSignUp event parameter missing: one of the following must be populated: Lists, Vars, or Source");}
if(u.data.userSignUp.onSuccess){u.data.userSignUp.onSuccess=u.checkFunction(u.data.userSignUp.onSuccess);}
if(u.data.userSignUp.onError){u.data.userSignUp.onError=u.checkFunction(u.data.userSignUp.onError);}
Sailthru.integration(_event,u.data.userSignUp);}else if(_event==="userSignUpConfirmedOptIn"){if(u.data.userSignUpConfirmedOptIn.template_name){u.data.userSignUpConfirmedOptIn.template.name=u.data.userSignUpConfirmedOptIn.template_name;delete u.data.userSignUpConfirmedOptIn.template_name;}
if(u.data.userSignUpConfirmedOptIn.template_vars){u.data.userSignUpConfirmedOptIn.template.vars=u.data.userSignUpConfirmedOptIn.template_vars;delete u.data.userSignUpConfirmedOptIn.template_vars;}
u.data.userSignUpConfirmedOptIn.email=u.data.userSignUpConfirmedOptIn.email||u.data.customer_id||"";if(!u.data.userSignUpConfirmedOptIn.email&&(!u.data.userSignUpConfirmedOptIn.id||!u.data.userSignUpConfirmedOptIn.key)){utag.DB(u.id+": WARN: userSignUpConfirmedOptIn event parameter missing: one of the following must be populated: Email or ID and Key");}
if(u.data.userSignUpConfirmedOptIn.template.name===undefined){utag.DB(u.id+": WARN: userSignUpConfirmedOptIn event parameter missing: Template Name");}
if(u.data.userSignUpConfirmedOptIn.onSuccess){u.data.userSignUpConfirmedOptIn.onSuccess=u.checkFunction(u.data.userSignUpConfirmedOptIn.onSuccess);}
if(u.data.userSignUpConfirmedOptIn.onError){u.data.userSignUpConfirmedOptIn.onError=u.checkFunction(u.data.userSignUpConfirmedOptIn.onError);}
Sailthru.integration(_event,u.data.userSignUpConfirmedOptIn);}else if(_event==="addToCart"){u.data.addToCart.email=u.data.addToCart.email||u.data.customer_id||"";if(!u.data.addToCart.email){utag.DB(u.id+": WARN: addToCart event parameter missing: Email");}
if(u.data.product_id.length===0&&u.data.product_url.length===0){utag.DB(u.id+": WARN: addToCart event parameter missing: one of the following must be populated: List of Product IDs or List of Product URLs");}else{_items=[];if(u.data.product_id.length===0){_length=u.data.product_url.length;}else{_length=u.data.product_id.length;}
for(var i=0;i<_length;i++){_item={};if(u.data.product_url[i]){_item.url=u.data.product_url[i];}
if(u.data.product_id[i]){_item.sku=u.data.product_id[i];}
if(u.data.product_name[i]){_item.title=u.data.product_name[i];}
if(u.data.product_images[i]){_item.images=u.data.product_images[i];}
if(u.data.product_vars[i]){_item.vars=u.data.product_vars[i];}
if(u.data.product_unit_price){_item.price=u.data.product_unit_price[i];}
_items.push(_item);}
u.data.addToCart.items=_items;}
if(u.data.addToCart.reminder_time&&!u.data.addToCart.reminder_template){utag.DB(u.id+": WARN: addToCart event parameter missing: Reminder Template");}
if(u.data.addToCart.reminder_template&&!u.data.addToCart.reminder_time){utag.DB(u.id+": WARN: addToCart event parameter missing: Reminder Time");}
if(u.data.addToCart.onSuccess){u.data.addToCart.onSuccess=u.checkFunction(u.data.addToCart.onSuccess);}
if(u.data.addToCart.onError){u.data.addToCart.onError=u.checkFunction(u.data.addToCart.onError);}
Sailthru.integration(_event,u.data.addToCart);}else if(_event==="purchase"){u.data.purchase.email=u.data.purchase.email||u.data.customer_id||"";if(!u.data.purchase.email){utag.DB(u.id+": WARN: purchase event parameter missing: Email");}
if(u.data.product_id.length===0&&u.data.product_url.length===0){utag.DB(u.id+": WARN: addToCart event parameter missing: one of the following must be populated: List of Product IDs or List of Product URLs");}else{_items=[];if(u.data.product_id.length===0){_length=u.data.product_url.length;}else{_length=u.data.product_id.length;}
for(var i=0;i<_length;i++){_item={};if(u.data.product_url[i]){_item.url=u.data.product_url[i];}
if(u.data.product_id[i]){_item.sku=u.data.product_id[i];}
if(u.data.product_quantity[i]){_item.qty=u.data.product_quantity[i];}
if(u.data.product_name[i]){_item.title=u.data.product_name[i];}
if(u.data.product_images[i]){_item.images=u.data.product_images[i];}
if(u.data.product_vars[i]){_item.vars=u.data.product_vars[i];}
if(u.data.product_unit_price){_item.price=u.data.product_unit_price[i];}
_items.push(_item);}
u.data.purchase.items=_items;}
if(u.data.purchase.onSuccess){u.data.purchase.onSuccess=u.checkFunction(u.data.purchase.onSuccess);}
if(u.data.purchase.onError){u.data.purchase.onError=u.checkFunction(u.data.purchase.onError);}
Sailthru.integration(_event,u.data.purchase);}else if(_event!==""){u.data[_event]=u.data[_event]||{};u.data[_event].name=u.data[_event].name||_event;if(!u.data[_event].email&&(!u.data[_event].id||!u.data[_event].key)){utag.DB(u.id+": WARN: "+_event+" event parameter missing: one of the following must be populated: Email or ID and Key");}
u.data[_event].vars=u.data[_event].vars||{};Sailthru.integration(_event,u.data[_event]);}}
utag.DB("send:132:CALLBACK:COMPLETE");};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b,data.c);}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:132");utag.DB(b);var c,d,e,f,key;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://ak.sail-horizon.com/spm/spm.v1.min.js","pageviewTracking":"automatic","event_list":[],"init":{"customerId":"0030bc2385cce273599b9455a033d84e"},"pageview":{},"meta":{},"userSignUp":{},"userSignUpConfirmedOptIn":{"template":{}},"addToCart":{},"purchase":{},"customEvent":{},"product_id":[],"product_name":[],"product_sku":[],"product_brand":[],"product_category":[],"product_subcategory":[],"product_quantity":[],"product_unit_price":[],"product_discount":[],"product_url":[],"product_images":[],"product_vars":[]};utag.DB("send:132:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("meta.")===0){u.map_func(["meta",e[f].substring(5)],u.data,b[d]);}else{u.map_func(e[f].split("."),u.data,b[d]);}}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event_list=u.data.event_list.concat(u.map[d].split(","));}}}}
utag.DB("send:132:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.order_tax=u.data.order_tax||b._ctax||"";u.data.order_store=u.data.order_store||b._cstore||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.order_coupon_code=u.data.order_coupon_code||b._cpromo||"";u.data.order_type=u.data.order_type||b._ctype||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";u.data.customer_city=u.data.customer_city||b._ccity||"";u.data.customer_state=u.data.customer_state||b._cstate||"";u.data.customer_zip=u.data.customer_zip||b._czip||"";u.data.customer_country=u.data.customer_country||b._ccountry||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_sku.length===0&&b._csku!==undefined){u.data.product_sku=b._csku.slice(0);}
if(u.data.product_brand.length===0&&b._cbrand!==undefined){u.data.product_brand=b._cbrand.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_subcategory.length===0&&b._ccat2!==undefined){u.data.product_subcategory=b._ccat2.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.product_discount.length===0&&b._cpdisc!==undefined){u.data.product_discount=b._cpdisc.slice(0);}
if(!u.data.init.customerId){utag.DB(u.id+": Tag not fired: customerId not populated");return;}
if(u.data.pageviewTracking==="manual"){u.data.init.autoTrackPageview=false;}
for(key in u.data.meta){var metaTag=document.createElement("meta");metaTag.name=key;metaTag.content=u.data.meta[key];try{document.head.appendChild(metaTag);}catch(error){utag.DB(u.id+": Unable to add meta tags to the HEAD.");}}
if(u.initialized){u.loader_cb(a,b,c);}else{u.queue.push({"data":u.data,"a":a,"b":b,"c":c});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_132","attrs":{}});}}
utag.DB("send:132:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("132","usnews.main"));}catch(error){utag.DB(error);}

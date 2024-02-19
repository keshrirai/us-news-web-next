//tealium universal tag - utag.202 ut4.0.202207271847, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1,'link':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
if(a==='view'){function loadPermutiveScript(){const src="https://cdn.permutive.com/6c3e19e3-d05e-45d1-8f79-fcd6cb2f3a21-web.js";const scriptExists=document.querySelector("script[src='"+src+"']");if(!scriptExists){const script=document.createElement('script');script.src=src;script.async=true;document.head.appendChild(script);}}
function initialize(){function _getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(window.document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===' '){c=c.substring(1);}
if(c.indexOf(name)===0){return c.substring(name.length,c.length);}}
return"";}
!function(n,e,o,r,i){if(!e){e=e||{},window.permutive=e,e.q=[],e.config=i||{},e.config.projectId=o,e.config.apiKey=r,e.config.environment=e.config.environment||"production";for(var t=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],c=0;c<t.length;c++){var f=t[c];e[f]=function(n){return function(){var o=Array.prototype.slice.call(arguments,0);e.q.push({functionName:n,arguments:o})}}(f)}}}(document,window.permutive,"6c3e19e3-d05e-45d1-8f79-fcd6cb2f3a21","88d83ac0-6145-43be-9204-6ef481076e36",{});window.permutive.readyWithTimeout=function(e,i,t){var u=!1,n=function(){u||(e(),u=!0)};(t=t||1/0)!==1/0&&window.setTimeout(n,t),permutive.ready(n,i)};if(_getCookie('usprivacy')&&_getCookie('usprivacy')==='1YYY'){window.permutive.consent({"opt_in":false});}}
function setAdServerTargeting(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting("permutive").length){var g=window.localStorage.getItem("_pdfps");window.googletag.pubads().setTargeting("permutive",g?JSON.parse(g):[])}});window.ntvConfig=window.ntvConfig||{},window.ntvConfig.keyValues=window.ntvConfig.keyValues||{};var s=localStorage.getItem('_pnativo');if(s)window.ntvConfig.keyValues.permutive=JSON.parse(s).join(",");}
function identifyUser(){const idAliases=[];let priority=0;if(b.aws_cognito_email_hashed||b.sailthru_email_hashed){idAliases.push({"id":!!b['aws_cognito_email_hashed']?b['aws_cognito_email_hashed']:b['sailthru_email_hashed'],"tag":"email_md5","priority":priority});priority+=1;}
if(b['aws_cognito_email_hashed_sha256']){idAliases.push({"id":b['aws_cognito_email_hashed_sha256'],"tag":"email_sha256","priority":priority});priority+=1;}
if(b.usn_visitor_id||b['cp.usn_visitor_id']){idAliases.push({"id":b.usn_visitor_id?b.usn_visitor_id:b['cp.usn_visitor_id'],"tag":"internal","priority":priority});}
if(idAliases.length>0){window.permutive.identify(idAliases);}}
function setPageviewTracker(){let data={};function _splitWhenExists(prop,delim){const val=b[prop];return(!!val&&typeof(val)==='string')?val.split(delim):[];}
function _getBooleanFromProp(prop){return b[prop]==undefined?null:b[prop]==='true';}
function _getNumberFromProp(prop,numType){if(!b[prop])return null;const str=b[prop].replace(',','');if(numType==='float')return parseFloat(str);return parseInt(str,10);}
data={"type":b['page_type'],"viewport":b['meta.viewport'],"modules":b['modules'],"usprivacy":b['cp.usprivacy'],"optimizedlySupport":b['meta.optimizely'],"crazyeggScriptTag":b['crazyeggScriptTag'],"nativoScriptTag":b['nativoScriptTag'],"isMobile":b['is_mobile']&&(b['is_mobile']==='1'),"profileType":b['profile_type'],"rankinglistType":b['rankinglist_type'],"pageNumber":b['page'],"tab":b['tab'],"nunjucksTemplate":b['nunjucks_template'],};data.user={"usnVisitorId":b['usn_visitor_id']||'',"usnSessionId":b['usn_session_id']||'',"usnPageviewId":b['usn_pageview_id']||'',"usnHitId":b['usn_hit_id']||'',"awsCognitoSub":b['aws_cognito_sub']||'',"awsCognitoEmail":b['aws_cognito_email_hashed']||'',"usnAnalyticsId":b['usn_analytics_id']||'',"newsletter_src":_splitWhenExists('usn_src',','),"sailthruEmail":b['sailthru_email_hashed']||'',"education":{"customerKaplanStatus":window.localStorage.getItem('customer_kaplan_status'),"compassIsPremium":(function(){window.localStorage.getItem('customer_compass_is_premium')=='true'})(),}}
data.article={"site":{"vertical":b['site_vertical'],"product":b['site_product'],"productSubsection":b['site_product_subsection'],"portal":b['site_portal'],"productSection":b['site_product_section'],"zone":b['site_zone'],},"authors":[b['article_byline']].filter(function(e){return!!e;}),"title":b['meta.og.title'],"tags":b['bucket_tags']||[],"keywords":_splitWhenExists('meta.keywords',','),"type":b['mega.og.type'],"description":b['meta.description'],"image":b['meta.og:image'],"embeddedGallery":_getBooleanFromProp('article_embedded_gallery'),"publishDate":b['article_publish_date']?new Date(b['article_publish_date']).toISOString():null,};if(!!b['site_product']&&['bestetfs','bestmutualfunds'].includes(b['site_product'].toLowerCase())){data.investing={'fundFamily':b['fund_family'],'search':{'category':b['qp.category'],'etfs':b['qp.etfs'],'maxExpenses':_getNumberFromProp('qp.expenses-max','float'),'minExpenses':_getNumberFromProp('qp.expenses-min','float'),'family':b['qp.family'],'mutualFunds':_getBooleanFromProp('qp.mutual-funds'),'name':b['qp.name'],'returnPeriod':b['qp.return-period'],'maxTotalReturn':_getNumberFromProp('qp.total-return-max'),'minTotalReturn':_getNumberFromProp('qp.total-return-min'),'resultsCount':_getNumberFromProp('search_results_count'),}}}
if(!!b['site_product']&&b['site_product'].toLowerCase().includes('hospital')){data.hospital={'ids':b['hospitals_displayed']||[],'location':{'city':b['hospital_city'],'state':b['hospital_state'],},'speciality':b['hospital_specialty'],'hasAppointments':_getBooleanFromProp('has_appointments'),'search':{'location':b['qp.city'],'name':b['qp.hospital_name'],'type':b['qp.type'],'resultsCount':_getNumberFromProp('search_results_count'),}};}
if(!!b['site_product']&&b['site_product'].toLowerCase().includes('doctors')){data.doctor={'categories':_splitWhenExists('category_general',' '),'hospitalAffiliationIds':_splitWhenExists('doctor_hospital_affiliations','; '),'location':{'formatted':b['doctor_location'],'city':b['doctor_location_city'],'state':b['doctor_location_state']},'specialization':b['doctor_specialization'],'subSpecialization':b['doctor_sub_specialization'],'hasAppointments':b['site_product'].toLowerCase()==='doctors'?_getBooleanFromProp('has_appointments'):null,'hasAwards':_getBooleanFromProp('has_awards'),'hasBoardCertifications':_getBooleanFromProp('has_board_certifications'),'hasCertificationsAndLicensure':_getBooleanFromProp('has_certifications_and_licensure'),'hasEducation':_getBooleanFromProp('has_education'),'hasHospital':_getBooleanFromProp('has_hospital'),'hasPatientconnect':_getBooleanFromProp('has_patientconnect'),'hasPhoto':_getBooleanFromProp('has_photo'),'hasPublications':_getBooleanFromProp('has_publications'),'hasLanguages':_getBooleanFromProp('has_languages'),'hasInsurance':_getBooleanFromProp('has_insurance'),'search':{'distance':_getNumberFromProp('qp.distance'),'gender':b['qp.gender'],'hasAppointment':_getBooleanFromProp('qp.has_appointment'),'hospital':b['qp.hospital'],'language':b['qp.language'],'location':b['qp.location'],'name':b['qp.name'],'speciality':b['qp.specialty'],'maxYOE':_getNumberFromProp('qp.years-of-experience-max'),'minYOE':_getNumberFromProp('qp.years-of-experience-min'),'topHospitals':_getBooleanFromProp('qp.do-top-hospitals'),}};}
if(!!b['site_vertical']&&b['site_vertical'].toLowerCase()==='autos'){let maxPrice=_getNumberFromProp('qp.price_max'),minPrice=_getNumberFromProp('qp.price_min');if(!(maxPrice&&minPrice)&&!!b['qp.invoice']){[maxPrice,minPrice]=b['qp.invoice'].split(' - ').map(function(str){return parseInt(str.substring(1,str.length-1),10)*1000;})}
var fuel=null;var autoType=null;var yr=null;const adParameters=window&&window.adParameters?window.adParameters.split(";"):[];adParameters.forEach(function(param){let kv=param.split("=");if(kv.length>1){switch(kv[0]){case"fuel":fuel=kv[1];break;case"yr":yr=kv[1];break;case"type":autoType=kv[1];break;}}});data.auto={'make':b['make'],'model':b['model'],'modelYear':b['model_year'],'fuel':fuel,'type':autoType,'year':yr,'inventoryLocation':b['inventory_location'],'search':{'maxMileage':_getNumberFromProp('qp.mileage_max'),'minMileage':_getNumberFromProp('qp.mileage_min'),'model':b['qp.model'],'originalModel':b['qp.orig-model'],'minPrice':minPrice,'maxPrice':maxPrice,'zip':b['qp.zip'],'maxYear':_getNumberFromProp('qp.year_max'),'minYear':_getNumberFromProp('qp.year_min'),'range':b['qp.range'],'bodyStyle':b['qp.body_style'],'page':_getNumberFromProp('qp.page'),'src':b['qp.src'],'bodyStyle':b['qp.body_style'],'drivetrain':b['qp.drivetrain'],'engine':b['qp.engine'],'features':b['qp.features'],'fuel':b['qp.fuel'],'make':b['qp.make'],'mpgHighway':b['qp.mpg_highway'],'seating':_getNumberFromProp('qp.seating'),'trans':b['qp.trans'],}};}
if(!!b['site_vertical']&&b['site_vertical'].toLowerCase()==='travel'){data.travel={'leadgen':b['leadgen']||[],};}
data.search={'query':b['qp.q'],};permutive.addon('web',{page:data});}
initialize();setAdServerTargeting();identifyUser();setPageviewTracker();loadPermutiveScript();}else if(a==='link'&&window.permutive&&b.event_dmp){var spl=(s)=>s?s.split('|'):undefined;window.permutive.track("AffiliateLinkClicks",{'trackingId':spl(b.event_category),'trackingCampaign':spl(b.event_action),'trackingPlacement':spl(b.event_label),'trackingPartner':b.event_partner,});}
}};utag.o[loader].loader.LOAD(id);})("202","usnews.main");}catch(error){utag.DB(error);}
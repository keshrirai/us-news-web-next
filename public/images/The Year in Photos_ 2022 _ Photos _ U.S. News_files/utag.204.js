//tealium universal tag - utag.204 ut4.0.202205121451, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.isEmptyObject=function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false;}
return true;};u.toBoolean=function(val){val=val||"";return val===true||val.toLowerCase()==="true"||val.toLowerCase()==="on";};u.shouldUpdateConfigOnLink=function(){var key;if(!u.isEmptyObject(u.data.config.custom_map)||!u.isEmptyObject(u.data.set)){return true;}
for(key in u.data.config){if(key.match("user_id|page_path|page_title|page_location")){return true;}}
return false;};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(utag.ut.gtagScriptRequested){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0&&(s[i].id&&s[i].id.indexOf("utag")>-1)){return true;}}
var data_layer_name=""||"dataLayer";window[data_layer_name]=window[data_layer_name]||[];if(typeof window[window.gtagRename]!=="function"){window[window.gtagRename]=function(){window[data_layer_name].push(arguments);};var cross_track=u.toBoolean("true"),cross_track_domains="choicehomewarranty.com,selecthomewarranty.com,homewarranty.firstam.com,ahs.com";if(cross_track&&cross_track_domains!==""){window[window.gtagRename]("set","linker",{domains:cross_track_domains.split(","),accept_incoming:true});}
window[window.gtagRename]("js",new Date());}
return false;};u.scriptrequested=u.hasgtagjs();u.o=window[window.gtagRename];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.setGlobalProperties=function(data,reset,custom_property){var map={"user_id":{"name":"user_id","type":"exists","reset":true},"page_path":{"name":"page_path","type":"exists","reset":true},"page_title":{"name":"page_title","type":"exists","reset":true},"page_location":{"name":"page_location","type":"exists","reset":false},"developer_id.dYmQxMT":{"name":"developer_id.dYmQxMT","type":"exists","reset":false}},prop,g={};if(custom_property&&reset){g[custom_property]="";}
for(prop in utag.loader.GV(map)){if(reset&&map[prop].reset){g[map[prop].name]="";}else{if(map[prop].type==="bool"){if(data[prop]==true||data[prop]==="true"){g[map[prop].name]=true;}}
else if(map[prop].type==="exists"){if(data[prop]){g[map[prop].name]=data[prop];}}}}
if(!u.isEmptyObject(g)){u.o("set",g);}};u.item=function(imp,len){var g={},i,j,key,items=[];if(imp===true){len=len||u.data.impression_id.length||u.data.impression_name.length;for(i=0;i<len;i++){g={};if(u.data.impression_id[i]){g.id=u.data.impression_id[i];}
if(u.data.impression_name[i]){g.name=u.data.impression_name[i];}
if(u.data.impression_brand[i]){g.brand=u.data.impression_brand[i];}
if(u.data.impression_variant[i]){g.variant=u.data.impression_variant[i];}
if(u.data.impression_category[i]){g.category=u.data.impression_category[i];}
if(u.data.impression_price[i]){g.price=u.data.impression_price[i];}
if(u.data.impression_list_name){g.list_name=u.data.impression_list_name;}
if(u.data.impression_list_id){g.list_id=u.data.impression_list_id;}
if(u.data.impression_list_position[i]){g.list_position=u.data.impression_list_position[i];}
for(key in u.data.cdm_product_scope){if(Array.isArray(u.data.cdm_product_scope[key])){g[key]=u.data.cdm_product_scope[key][i];}else{g[key]=u.data.cdm_product_scope[key];}}
items.push(g);}}else{len=len||u.data.product_id.length||u.data.product_name.length;for(i=0;i<len;i++){g={};if(u.data.autofill_params==="true"){for(j=0;j<u.data.product_id.length;j++){u.data.product_name[j]=u.data.product_name[j]||u.data.product_id[j];u.data.product_unit_price[j]=u.data.product_unit_price[j]||"1.00";u.data.product_quantity[j]=u.data.product_quantity[j]||"1";}}
g.id=u.data.product_id[i];if(u.data.product_name[i]){g.name=u.data.product_name[i];}
if(u.data.product_brand[i]){g.brand=u.data.product_brand[i];}
if(u.data.product_category[i]){g.category=u.data.product_category[i];}
if(u.data.product_category2[i]){g.category2=u.data.product_category2[i];}
if(u.data.product_category3[i]){g.category3=u.data.product_category3[i];}
if(u.data.product_category4[i]){g.category4=u.data.product_category4[i];}
if(u.data.product_category5[i]){g.category5=u.data.product_category5[i];}
if(u.data.product_promo_code[i]){g.coupon=u.data.product_promo_code[i];}
if(u.data.product_unit_price[i]){g.price=u.data.product_unit_price[i];}
if(u.data.product_quantity[i]){g.quantity=u.data.product_quantity[i];}
if(u.data.product_variant[i]){g.variant=u.data.product_variant[i];}
if(u.data.product_list_position[i]){g.list_position=u.data.product_list_position[i];}
if(u.data.product_list_name){g.list_name=u.data.product_list_name;}
if(u.data.product_list_id){g.list_id=u.data.product_list_id;}
if(u.data.product_location_id[i]){g.location_id=u.data.product_location_id[i];}
if(u.data.start_date[i]){g.start_date=u.data.start_date[i];}
if(u.data.end_date[i]){g.end_date=u.data.end_date[i];}
if(u.data.origin[i]){g.origin=u.data.origin[i];}
if(u.data.destination[i]){g.destination=u.data.destination[i];}
if(u.data.flight_number[i]){g.flight_number=u.data.flight_number[i];}
if(u.data.travel_class[i]){g.travel_class=u.data.travel_class[i];}
if(u.data.fare_product[i]){g.fare_product=u.data.fare_product[i];}
if(u.data.booking_code[i]){g.booking_code=u.data.booking_code[i];}
for(key in u.data.cdm_product_scope){if(Array.isArray(u.data.cdm_product_scope[key])){g[key]=u.data.cdm_product_scope[key][i];}else{g[key]=u.data.cdm_product_scope[key];}}
items.push(g);}}
return items;};u.promotion=function(len){var f,g,promo=[];len=len||u.data.promo_id.length;for(f=0;f<len;f++){g={};g.id=u.data.promo_id[f];g.name=(u.data.promo_name[f]?u.data.promo_name[f]:u.data.promo_id[f]);if(u.data.promo_creative_name[f]){g.creative_name=u.data.promo_creative_name[f];}
if(u.data.promo_creative_slot[f]){g.creative_slot=u.data.promo_creative_slot[f];}
if(u.data.promo_location_id[f]){g.location_id=u.data.promo_location_id[f];}
promo.push(g);}
return promo;};u.event_map={"add_to_cart":[{"name":"value"},{"name":"currency"},{"name":"items"}],"add_to_wishlist":[{"name":"value"},{"name":"currency"},{"name":"items"}],"begin_checkout":[{"name":"value"},{"name":"currency"},{"name":"items"},{"name":"coupon"}],"checkout_progress":[{"name":"value"},{"name":"currency"},{"name":"items"},{"name":"coupon"},{"name":"checkout_step"}],"exception":[{"name":"description"},{"name":"fatal"}],"generate_lead":[{"name":"value"},{"name":"currency"},{"name":"transaction_id"}],"login":[{"name":"method"}],"purchase":[{"name":"transaction_id","required":true},{"name":"value"},{"name":"currency"},{"name":"tax"},{"name":"shipping"},{"name":"affiliation"},{"name":"coupon"},{"name":"items"},{"name":"trip_type"},{"name":"passengers"}],"refund":[{"name":"transaction_id","required":true},{"name":"value"},{"name":"currency"},{"name":"tax"},{"name":"shipping"},{"name":"affiliation"},{"name":"coupon"},{"name":"items"}],"remove_from_cart":[{"name":"value"},{"name":"currency"},{"name":"items"}],"screen_view":[{"name":"screen_name"}],"search":[{"name":"search_term"},{"name":"origin"},{"name":"destination"},{"name":"start_date"},{"name":"end_date"}],"select_content":[{"name":"content_type"},{"name":"items"},{"name":"promotions"}],"set_checkout_option":[{"name":"checkout_step"},{"name":"checkout_option"}],"share":[{"name":"method"},{"name":"content_type"},{"name":"content_id"}],"sign_up":[{"name":"method"}],"timing_complete":[{"name":"name","required":true},{"name":"value","required":true},{"name":"event_category"},{"name":"event_label"}],"view_item":[{"name":"items"}],"view_item_list":[{"name":"items"}],"view_promotion":[{"name":"promotions"}],"view_search_results":[{"name":"search_term"}],"add_payment_info":[{"name":"items"},{"name":"value"},{"name":"payment_type"},{"name":"currency"}],"add_shipping_info":[{"name":"items"},{"name":"value"},{"name":"shipping_tier"},{"name":"currency"}],"present_offer":[{"name":"item_id"},{"name":"item_name"},{"name":"item_category"}],"earn_virtual_currency":[{"name":"virtual_currency_name"},{"name":"value"}],"join_group":[{"name":"group_id"}],"level_end":[{"name":"level_name"},{"name":"success"}],"level_start":[{"name":"level_name"}],"level_up":[{"name":"character"},{"name":"level"}],"post_score":[{"name":"level"},{"name":"character"},{"name":"score"}],"spend_virtual_currency":[{"name":"item_name"},{"name":"virtual_currency_name"},{"name":"value"}],"tutorial_begin":[],"tutorial_complete":[],"unlock_achievement":[{"name":"achievement_id"}]};u.std_params={"transaction_id":function(){return u.data.order_id;},"affiliation":function(){return u.data.order_store;},"value":function(event){if(event.match(/timing_complete|virtual_currency/i)){return u.data.event.value;}
return u.data.order_total;},"currency":function(){return u.data.order_currency;},"tax":function(){return u.data.order_tax;},"shipping":function(){return u.data.order_shipping;},"coupon":function(){return u.data.order_coupon_code;},"description":function(){return u.data.event.description;},"fatal":function(){return u.toBoolean(u.data.event.fatal);},"screen_name":function(){return u.data.event.screen_name;},"method":function(){return u.data.event.method;},"search_term":function(){return u.data.event.search_term;},"content_type":function(){return u.data.event.content_type;},"content_id":function(){return u.data.event.content_id;},"promotions":function(event){if(event==="select_content"&&u.data.event.content_type!=="product"){return u.promotion(1);}else if(event!=="select_content"){return u.promotion();}},"name":function(){return u.data.event.name;},"event_category":function(){return u.data.event.event_category;},"event_label":function(){return u.data.event.event_label;},"items":function(event){if(event==="view_item"||event==="add_to_cart"||event==="remove_from_cart"){return u.item(false,1);}
if(event==="view_item_list"){return u.item(true);}
if(event==="select_content"&&u.data.event.content_type){return u.item(false,1);}
return u.item();},"item_category":function(){return u.data.product_category[0]?u.data.product_category[0]:"";},"item_name":function(){return u.data.product_name[0]?u.data.product_name[0]:"";},"item_id":function(){return u.data.product_id[0]?u.data.product_id[0]:"";},"quantity":function(){return u.data.product_quantity[0]?u.data.product_quantity[0]:"";},"price":function(){return u.data.product_unit_price[0]?u.data.product_unit_price[0]:"";}};u.map={"event_category":"event.event_category","event_action":"event_name","event_label":"event.event_label","usn_visitor_id":"cdm.dimension2-visitor id-all","usn_session_id":"cdm.dimension3-session id-all","usn_pageview_id":"cdm.dimension4-pageview id-all","tealium_environment":"cdm.dimension5-tealium environment-all","dom.referrer":"cdm.dimension8-Referrer-all","adblock":"cdm.dimension12-(012) AdBlocker-all","ab_test_id":"cdm.dimension13-(013) A/B Test ID + Variant-all,cdm.dimension14-(014) A/B Testing Session-all","site_portal":"cdm.dimension15-site portal-all","site_product":"cdm.dimension16-site product-all","site_product_section":"cdm.dimension17-site product section-all","site_product_subsection":"cdm.dimension18-site product subsection-all","content_type":"cdm.dimension19-product content type-all","site_vertical":"cdm.dimension20-site vertical-all","event_name:purchase":"purchase","site_version":"cdm.dimension21-(021) Site Version-all","site_section":"cdm.dimension22-(022) Site Section-all","tab":"cdm.dimension24-(024) Tab Name-all","qp.page":"cdm.dimension25-(025) Page Number-all","article_publish_date":"cdm.dimension27-(027) Article Publish Date-all","article_template":"cdm.dimension28-(028) Article Template-all","article_byline":"cdm.dimension29-(029) Byline Report-all","meta.keywords":"cdm.dimension30-(030) Meta Tag Keywords-all","rankinglist_type":"cdm.dimension31-(031) Ranking List Type-all","bucket_tags":"cdm.dimension32-(032) Bucket Tags-all","primary_tag":"cdm.dimension33-(033) Primary Tag-all","profile_type":"cdm.dimension34-(034) Profile Type-all","page_container":"cdm.dimension39-(039) Page Template-all","tracking_id":"cdm.dimension40-(040) Testing Leadgen-all","content_partner":"cdm.dimension41-(041) Content Partner-all","page_type":"cdm.dimension42-(042) Content Type-all","modules":"cdm.dimension43-(043) Modules-all","subtracking":"cdm.dimension44-(044) Subtracking-all","campaign_id":"cdm.dimension46-(046) Campaign ID-all","model_year":"cdm.dimension48-(048) Model Year-all","make":"cdm.dimension49-(049) Make-all","model":"cdm.dimension50-(050) Model-all","inventory_location":"cdm.dimension51-(051) Inventory Location-all","pubtemplate":"cdm.dimension53-(053) PubTemplateAutos-all","user_zip_codes":"cdm.dimension54-(054) User Zip Code-all","destination_url":"cdm.dimension9-(009) Click URL-all","usn_hit_id":"cdm.dimension56-(056) Hit ID-all","schools_displayed":"cdm.dimension57-(057) Schools Displayed-all","customer_kaplan_status":"cdm.dimension58-(058) Customer Kaplan Status-all","fund_family":"cdm.dimension59-(059) Fund Family-all","placement":"cdm.dimension60-(060) Placement-all","js_page.counter":"cdm.dimension61-(061) Search Number-all","qp.int":"cdm.dimension62-(062) Internal Campaign-all","doctor_specialization":"cdm.dimension63-(063) Doctor Specialization-all","doctor_sub_specialization":"cdm.dimension64-(064) Doctor Subspecialization-all","hospitals_displayed":"cdm.dimension65-(065) Hospitals Displayed-all","slideshow_name":"cdm.dimension66-(066) Slideshow Name-all","aa_submit":"cdm.dimension67-(067) Agent Ace Submit-all","search_query":"cdm.dimension68-(068) Search Query-all","aws_cognito_sub":"cdm.dimension69-(069) AWS sub-all,cdm.dimension112-AWS sub Sessions-all","hospital_specialty":"cdm.dimension70-(070) Hospital Specialty-all","article_enhancements":"cdm.dimension71-(071) Enhancements-all","buttons":"cdm.dimension72-(072) Buttons-all","firm_affiliations_semicolon":"cdm.dimension73-(073) Firm Affiliations-all","hospital_city":"cdm.dimension74-(074) Hospital City-all","aws_cognito_email_hashed":"cdm.dimension75-(075) AWS email hashed-all,cdm.dimension111-AWS email hashed sessions-all","rec_type":"cdm.dimension76-(076) Rec-Type or Link Text-all","doctor_npi":"cdm.dimension77-(077) doctor npi-all","dom.title":"cdm.dimension78-(078) Title Tag-all","search_results_count":"cdm.dimension79-(079) Search Results Count-all","usn_src":"cdm.dimension110-Tracking code user-all","slideshow_interaction":"cdm.dimension81-(081) Slideshow Interaction-all","auto_load_page":"cdm.dimension82-(082) Auto Page Load-all","hospital_state":"cdm.dimension83-(083) Hospital State-all","article_embedded_gallery":"cdm.dimension84-(084) Embedded Gallery-all","article_embedded_listicle":"cdm.dimension85-(085) Embedded Listicle-all","travel_regions":"cdm.dimension86-(086) Travel Regions-all","performance_now":"cdm.dimension87-(087) Performance Adobe Load-all","suppress_img_flag":"cdm.dimension88-(088) Suppress Image Flag-all","search_doctor_specialty":"cdm.dimension89-(089) Specialty on Event-all","aha_code":"cdm.dimension90-(090) AHA Code Hospitals ID-all","search_doctor_location":"cdm.dimension91-(091) Location on Event-all","clean_url":"config.page_location,cdm.dimension7-Full URL-all","email_hashed":"cdm.dimension92-User ID-all,customer_id","widget_impression_1":"cdm.dimension94-widget impression 1-all","widget_impression_2":"cdm.dimension95-widget impression 2-all","widget_impression_3":"cdm.dimension96-widget impression 3-all","widget_impression_4":"cdm.dimension97-widget impression 4-all","widget_impression_5":"cdm.dimension98-widget impression 5-all","widget_impression_6":"cdm.dimension99-widget impression 6-all","widget_impression_7":"cdm.dimension100-widget impression 7-all","widget_impression_8":"cdm.dimension101-widget impression 8-all","widget_impression_9":"cdm.dimension102-widget impression 9-all","widget_impression_10":"cdm.dimension103-widget impression 10-all","widget_impression_11":"cdm.dimension104-widget impression 11-all","widget_impression_12":"cdm.dimension105-widget impression 12-all","product_impression_name":"impression_list_name,impression_name","product_impression_variant":"impression_variant","product_impression_id":"impression_id,impression_list_id","clean_querystring":"cdm.dimension26-Querystring Hit-all","sailthru_email_hashed":"cdm.dimension106-Sailthru Email Hashed-all","google_amp_path":"cdm.dimension93-Google AMP Path-all","site_zone":"cdm.dimension107-(107) sitezone-all","leadgen":"cdm.dimension108-leadgen-all","5LH_360":"cdm.dimension109-fivelh join-all","clean_pathname":"cdm.dimension55-Pagename-all","languages":"cdm.dimension113-Languages-all","previous_page_name":"cdm.dimension114-previous page name-all","qp.src":"cdm.dimension80-(080) Tracking code src-all,cdm.dimension115-(115) Tracking code src session-all","account_type":"cdm.dimension116-(116) account type-all","doctor_location":"cdm.dimension117-(117) doctor location-all","event_partner":"cdm.dimension118-(118) partner-all","usn_click_id":"cdm.dimension119-(119) click_id-all","custom_content_campaign":"cdm.dimension120-(120) Custom Content Campaign-all","partner_impressions":"cdm.dimension121-(121) Partner Impressions-all"};u.extend=[function(a,b){try{if(1){var denylist=['usn_visitor_id','usn_session_id','usn_pageview_id','usn_hit_id','email_hashed','aws_cognito_email_hashed','sailthru_email_hashed','aws_cognito_sub','usn_src','ab_test_id','usn_click_id'];for(d in utag.loader.GV(u.map)){if(u.map[d].indexOf('cdm.dimension')>-1&&denylist.indexOf(d)===-1){if((typeof b[d]=='undefined')||(b[d]=="")){b[d]="-"}}}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['event_name']!='undefined'&&typeof b['event_name']!='undefined'&&b['event_name']!=''&&b['event_name'].toString().toLowerCase()!='null'.toLowerCase())){b['event_category']=b['event_name'];b['event_action']=b['campaign_id'];b['event_label']=b['placement']}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if(1){c=[b['site_vertical'],b['site_portal'],b['site_product'],b['site_product_subsection'],b['site_product_section']];b['5LH_360']=c.join('/')}}catch(e){utag.DB(e);}},function(a,b){try{if(1){window.utag_data.event_targets=undefined;}}catch(e){utag.DB(e)}},function(a,b){try{if(1){var trackedWidgets=document.querySelectorAll('[data-tracking-id], [data-tracking-identifier]'),blocklist=['top_nav'],delimiter=':',dimensionMaxLength=150,currentDimensionLength=0,currentDimension=1;b['widget_impression_'+currentDimension]=[];b['partner_impressions']=[];Array.from(trackedWidgets).forEach(function(el){var trackedWidget,trackedPartnerWidget,trackingID=el.getAttribute('data-tracking-id')?el.getAttribute('data-tracking-id'):el.getAttribute('data-tracking-identifier'),trackingCampaign=el.getAttribute('data-tracking-campaign'),trackingPlacement=el.getAttribute('data-tracking-placement'),trackingPartner=el.getAttribute('data-tracking-partner'),trackingNPI=el.getAttribute('data-tracking-npi'),trackingAHA=el.getAttribute('data-tracking-aha');if(trackingID&&(blocklist.indexOf(trackingID)<0)){trackedWidget=trackingID;if(trackingCampaign){trackedWidget+=delimiter+trackingCampaign;}
if(trackingPlacement){trackedWidget+=delimiter+trackingPlacement;}
if(trackingNPI){trackedWidget+=delimiter+trackingNPI;}
if(trackingAHA){trackedWidget+=delimiter+trackingAHA;}
if(trackingPartner){trackedPartnerWidget=trackingPartner;}}
if(trackedWidget&&b['widget_impression_'+currentDimension].indexOf(trackedWidget)<0){currentDimensionLength+=trackedWidget.length+1;if(currentDimensionLength>dimensionMaxLength){currentDimension++;b['widget_impression_'+currentDimension]=[];currentDimensionLength=trackedWidget.length+1;}
b['widget_impression_'+currentDimension].push(trackedWidget);}
if(trackedPartnerWidget&&b['partner_impressions'].indexOf(trackedPartnerWidget)<0){b['partner_impressions'].push(trackedPartnerWidget);}});}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['event_action']=='undefined'&&typeof b['event_category']!='undefined')||(typeof b['event_action']!='undefined'&&b['event_action']==''&&typeof b['event_category']!='undefined')||(typeof b['campaign_id']=='undefined'&&typeof b['event_name']!='undefined')||(typeof b['campaign_id']!='undefined'&&b['campaign_id']==''&&typeof b['event_name']!='undefined')){b['event_action']='not_set'}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(typeof window.optimizely!=='undefined'){var currentCampaigns=window.optimizely.get('state').getCampaignStates({"isActive":true}),campaignID,variationID,isInCampaignHoldback;if(Object.keys(currentCampaigns).length>0){var currentCampaign=currentCampaigns[Object.keys(currentCampaigns)[0]];campaignID=currentCampaign.id;variationID=currentCampaign.variation.id;isInCampaignHoldback=currentCampaign.isInCampaignHoldback;}
if(typeof campaignID!=='undefined'&&typeof variationID!=='undefined'&&!isInCampaignHoldback){b['ab_test_id']=campaignID+'-'+variationID;}else if(typeof b['ab_test_id']!=='undefined'){delete b['ab_test_id'];}}}}catch(e){utag.DB(e)}},function(a,b,c,d){c=['site_vertical'];for(d=0;d<c.length;d++){try{b[c[d]]=b[c[d]]instanceof Array?b[c[d]]:b[c[d]]instanceof Object?b[c[d]]:b[c[d]].toString().toLowerCase()}catch(e){utag.DB(e);}}},function(a,b,c,d){c=['site_portal'];for(d=0;d<c.length;d++){try{b[c[d]]=b[c[d]]instanceof Array?b[c[d]]:b[c[d]]instanceof Object?b[c[d]]:b[c[d]].toString().toLowerCase()}catch(e){utag.DB(e);}}},function(a,b,c,d){c=['site_product_section'];for(d=0;d<c.length;d++){try{b[c[d]]=b[c[d]]instanceof Array?b[c[d]]:b[c[d]]instanceof Object?b[c[d]]:b[c[d]].toString().toLowerCase()}catch(e){utag.DB(e);}}},function(a,b,c,d){c=['site_product'];for(d=0;d<c.length;d++){try{b[c[d]]=b[c[d]]instanceof Array?b[c[d]]:b[c[d]]instanceof Object?b[c[d]]:b[c[d]].toString().toLowerCase()}catch(e){utag.DB(e);}}},function(a,b,c,d){c=['site_product_subsection'];for(d=0;d<c.length;d++){try{b[c[d]]=b[c[d]]instanceof Array?b[c[d]]:b[c[d]]instanceof Object?b[c[d]]:b[c[d]].toString().toLowerCase()}catch(e){utag.DB(e);}}},function(a,b){try{if(b['dom.domain'].toString().toLowerCase().indexOf('realestate.usnews.com'.toLowerCase())>-1){try{b['site_zone']='realestate/'+utag_data.site_product}catch(e){}}}catch(e){utag.DB(e);}},function(a,b,c,d){try{if(1){c=[b['meta.site'],b['meta.zone']];b['site_zone_colon']=c.join(':')}}catch(e){utag.DB(e);}},function(a,b){try{if(b['dom.domain'].toString().toLowerCase().indexOf('realestate.usnews.com'.toLowerCase())>-1){try{b['site_zone_colon']='realestate:'+utag_data.site_product}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(b['dom.url'].toString().toLowerCase().indexOf('/search'.toLowerCase())>-1||b['dom.url'].toString().toLowerCase().indexOf('/best-colleges/rankings/'.toLowerCase())>-1||(b['dom.url'].toString().toLowerCase().indexOf('/best-colleges/'.toLowerCase())>-1&&b['page_type'].toString().toLowerCase().indexOf('directory'.toLowerCase())>-1&&b['meta.zone'].toString().toLowerCase().indexOf('directory'.toLowerCase())>-1)){b['search_query']=b['dom.query_string']}}catch(e){utag.DB(e);}},function(a,b){try{if(b['bucket_tags'].toString().toLowerCase().indexOf('healthday'.toLowerCase())>-1||b['meta.keywords'].toString().toLowerCase().indexOf('healthday'.toLowerCase())>-1){try{b['site_zone']='news/healthday'}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(b['bucket_tags'].toString().toLowerCase().indexOf('healthday'.toLowerCase())>-1||b['meta.keywords'].toString().toLowerCase().indexOf('healthday'.toLowerCase())>-1){try{b['site_zone_colon']='news:healthday'}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((b['dom.domain'].toString().toLowerCase().indexOf('premium'.toLowerCase())>-1&&b['meta.site'].toString().toLowerCase().indexOf('Best Colleges'.toLowerCase())>-1)){b['site_product']='poecolleges';try{b['site_zone']='POE Colleges/'+utag_data['meta.zone']}catch(e){};try{b['site_zone_colon']='POE Colleges:'+utag_data['meta.zone']}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((b['dom.domain'].toString().toLowerCase().indexOf('premium'.toLowerCase())>-1&&b['meta.site'].toString().toLowerCase().indexOf('Best Grad'.toLowerCase())>-1)){b['site_product']='poegrad';try{b['site_zone']='POE Grad/'+utag_data['meta.zone']}catch(e){};try{b['site_zone_colon']='POE Grad:'+utag_data['meta.zone']}catch(e){}}}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:204");utag.DB(b);var c,d,e,f,h,i,cdm,cdm_event_flag,event_param,event_param_value,prop;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://www.googletagmanager.com/gtag/js?id=##utag_tracking_id##","tracking_id":"UA-8279968-12","cross_track":"true","cross_track_domains":"choicehomewarranty.com,selecthomewarranty.com,homewarranty.firstam.com,ahs.com","transport_type":"default"||"default","allow_display_features":"true","screen_view":"false","anonymize_ip":"false","clear_global_vars":"false","optimize_id":"","use_amp_client_id":"false","allow_anchor":"false","data_layer_name":"","checkout_step":"","checkout_option":"","product_action_list":"","product_list_position":"","product_variant":[],"impression_id":[],"impression_name":[],"impression_price":[],"impression_category":[],"impression_brand":[],"impression_variant":[],"impression_list_name":[],"impression_list_position":[],"promo_id":[],"promo_name":[],"promo_creative_name":[],"promo_creative_slot":[],"promo_location_id":[],"product_id":[],"product_name":[],"product_sku":[],"product_brand":[],"product_category":[],"product_category2":[],"product_category3":[],"product_category4":[],"product_category5":[],"product_subcategory":[],"product_quantity":[],"product_unit_price":[],"product_discount":[],"product_promo_code":[],"product_location_id":[],"cdm_product_scope":{},"start_date":[],"end_date":[],"origin":[],"destination":[],"flight_number":[],"travel_class":[],"fare_product":[],"booking_code":[],"page_view_event_data":{},"set":{"developer_id.dYmQxMT":true},"config":{"custom_map":{}},"event":{},"items":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:204:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event_name=u.map[d];}}}}
utag.DB("send:204:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.order_tax=u.data.order_tax||b._ctax||"";u.data.order_store=u.data.order_store||b._cstore||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.order_coupon_code=u.data.order_coupon_code||b._cpromo||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_sku.length===0&&b._csku!==undefined){u.data.product_sku=b._csku.slice(0);}
if(u.data.product_brand.length===0&&b._cbrand!==undefined){u.data.product_brand=b._cbrand.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_subcategory.length===0&&b._ccat2!==undefined){u.data.product_subcategory=b._ccat2.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.typeOf(u.data.tracking_id)==="string"&&u.data.tracking_id!==""){u.data.tracking_id=u.data.tracking_id.replace(/\s/g,"").split(",");}
if(!u.data.tracking_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
if(u.data.gtag_enable_tcf_support){window["gtag_enable_tcf_support"]=u.toBoolean(u.data.gtag_enable_tcf_support);}
for(i=0;i<u.data.tracking_id.length;i++){if(!/^[a-zA-Z]{1}-|^[a-zA-Z]{2}-/.test(u.data.tracking_id[i])){u.data.tracking_id[i]="UA-"+u.data.tracking_id[i];}}
u.data.base_url=u.data.base_url.replace("##utag_tracking_id##",u.data.tracking_id[0]);if(u.data.data_layer_name){u.data.base_url=u.data.base_url+"&l="+u.data.data_layer_name;}
u.data.event.send_to=u.data.event.send_to||u.data.tracking_id;if(u.data.customer_id){u.data.config.user_id=u.data.customer_id;}
if(u.toBoolean(u.data.clear_global_vars)){u.setGlobalProperties(u.data.config,true);for(prop in utag.loader.GV(u.data.set)){u.setGlobalProperties(u.data.set,true,prop);}}
u.setGlobalProperties(u.data.config,false);u.setGlobalProperties(u.data.set,false);if(!u.data.event_name&&u.data.order_id){u.data.event_name="purchase";}
cdm=[];for(d in u.data.cdm){cdm_event_flag=false;cdm=d.split("-");var cdm_name,cdm_event;cdm[0]=cdm[0].replace("contentGroup","content_group");if(cdm[0].indexOf("content_group")>=0){cdm_name=cdm[0];cdm_event=cdm[2]||cdm[1]||"all";}else{cdm_name=cdm[1]||cdm[0];cdm_event=cdm[2];u.data.config.custom_map[cdm[0]]=cdm_name;}
if(cdm_event==="all"){u.data.config[cdm_name]=u.data.cdm[d];}else if(cdm_event==="link"&&a==="link"){cdm_event_flag=true;}else if(cdm_event==="ecom"&&u.data.event_name&&u.data.event_name.match(/add_payment_info|add_to_cart|add_to_wishlist|begin_checkout|checkout_progress|purchase|refund|remove_from_cart|product_click|promotion_click|set_checkout_option|view_item|view_item_list|view_promotion/)){cdm_event_flag=true;}else if(cdm_event==="prod"){u.data.cdm_product_scope[cdm_name]=u.data.cdm[d];}else if(cdm_event==="page_view"){u.data.page_view_event_data[cdm_name]=u.data.cdm[d];}else if(u.data.event_name===cdm_event){cdm_event_flag=true;}
if(cdm_event_flag){u.data.event[cdm_name]=u.data.cdm[d];}}
if(u.toBoolean(u.data.anonymize_ip)&&u.data.config.anonymize_ip===undefined){u.data.config.anonymize_ip=true;}
if(u.toBoolean(u.data.cross_track)&&u.data.config.linker===undefined){u.data.config.linker={"accept_incoming":u.toBoolean(u.data.cross_track),"domains":u.data.cross_track_domains,"use_anchor":u.toBoolean(u.data.allow_anchor)};}
if(u.data.allow_display_features==="false"&&u.data.config.allow_display_features===undefined&&u.data.config.allow_ad_personalization_signals===undefined){u.data.config.allow_ad_personalization_signals=false;}
if(u.data.config.allow_display_features!==undefined&&u.data.config.allow_ad_personalization_signals===undefined){u.data.config.allow_ad_personalization_signals=u.toBoolean(u.data.config.allow_display_features);delete u.data.config.allow_display_features;}
if(u.toBoolean(u.data.enhanced_link_attribution)&&!u.data.config.link_attribution){u.data.config.link_attribution=true;}
if(u.data.optimize_id&&u.data.config.optimize_id===undefined){u.data.config.optimize_id=u.data.optimize_id;}
if(u.data.use_amp_client_id&&u.data.config.use_amp_client_id===undefined){u.data.config.use_amp_client_id=u.data.use_amp_client_id;}
if(u.data.transport_type!=="default"){u.data.config.transport_type=u.data.transport_type;}
u.data.config.send_page_view=false;if(a==="view"){for(i=0;i<u.data.tracking_id.length;i++){u.o("config",u.data.tracking_id[i],u.data.config);}
if(u.toBoolean(u.data.screen_view)){u.o("event","screen_view",u.data.event);}else{u.data.config.sent_to=u.data.tracking_id[0];u.data.page_view_event_data.send_to=u.data.tracking_id[0];u.o("event","page_view",u.data.page_view_event_data);}}
if(u.data.event_name){if(u.data.event_name==="product_click"&&a==="link"){u.data.event.content_type="product";u.data.event_name="select_content";}else if(u.data.event_name==="promotion_click"&&a==="link"){u.data.event_name="select_content";}
if(u.data.event.non_interaction){u.data.event.non_interaction=true;}
if(u.event_map[u.data.event_name]){for(i=0;i<u.event_map[u.data.event_name].length;i++){event_param=u.event_map[u.data.event_name][i];event_param_value=u.std_params[event_param.name]?u.std_params[event_param.name](u.data.event_name):u.data[event_param.name]||"";if(event_param_value!==""){u.data.event[event_param.name]=event_param_value;}
if(u.data.event[event_param.name]===undefined&&event_param.required){utag.DB(u.id+": Event: "+u.data.event_name+": Required attribute not populated");}}}
if(u.data.event_name!=="product_click"&&u.data.event_name!=="promotion_click"){if(a==="link"&&u.shouldUpdateConfigOnLink()){for(i=0;i<u.data.tracking_id.length;i++){u.o("config",u.data.tracking_id[i],u.data.config);}}
u.o("event",u.data.event_name,u.data.event);}}
if(!u.hasgtagjs()){u.scriptrequested=true;utag.ut.gtagScriptRequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_204","attrs":{}});}
utag.DB("send:204:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("204","usnews.main"));}catch(error){utag.DB(error);}

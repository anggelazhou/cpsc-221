(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[307],{"0jNN":function(e,t,r){"use strict"
var n=Object.prototype.hasOwnProperty
var o=Array.isArray
var a=function(){var e=[]
for(var t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase())
return e}()
var i=function(e){while(e.length>1){var t=e.pop()
var r=t.obj[t.prop]
if(o(r)){var n=[]
for(var a=0;a<r.length;++a)"undefined"!==typeof r[a]&&n.push(r[a])
t.obj[t.prop]=n}}}
var s=function(e,t){var r=t&&t.plainObjects?Object.create(null):{}
for(var n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n])
return r}
var l=function e(t,r,a){if(!r)return t
if("object"!==typeof r){if(o(t))t.push(r)
else{if(!t||"object"!==typeof t)return[t,r];(a&&(a.plainObjects||a.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=true)}return t}if(!t||"object"!==typeof t)return[t].concat(r)
var i=t
o(t)&&!o(r)&&(i=s(t,a))
if(o(t)&&o(r)){r.forEach((function(r,o){if(n.call(t,o)){var i=t[o]
i&&"object"===typeof i&&r&&"object"===typeof r?t[o]=e(i,r,a):t.push(r)}else t[o]=r}))
return t}return Object.keys(r).reduce((function(t,o){var i=r[o]
n.call(t,o)?t[o]=e(t[o],i,a):t[o]=i
return t}),i)}
var c=function(e,t){return Object.keys(t).reduce((function(e,r){e[r]=t[r]
return e}),e)}
var u=function(e,t,r){var n=e.replace(/\+/g," ")
if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(n)}catch(e){return n}}
var f=function(e,t,r){if(0===e.length)return e
var n=e
"symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e))
if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}))
var o=""
for(var i=0;i<n.length;++i){var s=n.charCodeAt(i)
if(45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){o+=n.charAt(i)
continue}if(s<128){o+=a[s]
continue}if(s<2048){o+=a[192|s>>6]+a[128|63&s]
continue}if(s<55296||s>=57344){o+=a[224|s>>12]+a[128|s>>6&63]+a[128|63&s]
continue}i+=1
s=65536+((1023&s)<<10|1023&n.charCodeAt(i))
o+=a[240|s>>18]+a[128|s>>12&63]+a[128|s>>6&63]+a[128|63&s]}return o}
var d=function(e){var t=[{obj:{o:e},prop:"o"}]
var r=[]
for(var n=0;n<t.length;++n){var o=t[n]
var a=o.obj[o.prop]
var s=Object.keys(a)
for(var l=0;l<s.length;++l){var c=s[l]
var u=a[c]
if("object"===typeof u&&null!==u&&-1===r.indexOf(u)){t.push({obj:a,prop:c})
r.push(u)}}}i(t)
return e}
var p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var v=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var m=function(e,t){return[].concat(e,t)}
e.exports={arrayToObject:s,assign:c,combine:m,compact:d,decode:u,encode:f,isBuffer:v,isRegExp:p,merge:l}},KuFa:function(e,t,r){"use strict"
r.r(t)
var n=r("An8g")
var o=r("u7Gu")
var a=r("EcmN")
var i=r("ouhR")
var s=r.n(i)
r("q1tI")
var l=r("i8i4")
var c=r.n(l)
var u=r("x1Tw")
var f=r("Qyje")
var d=r.n(f)
var p=r("Et5h")
var v=r("7FZx")
var m=r("FIFq")
var b=r.n(m)
var h=function(e,t){return function(){return e.apply(t,arguments)}},y=function(e,t){for(var r in t)g.call(t,r)&&(e[r]=t[r])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},g={}.hasOwnProperty
var _=function(e){y(t,e)
function t(){this.toggleSpeedgraderLink=h(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(b.a.View)
var O=r("goGJ")
var j=r("oMlh")
var N=r("GXQz")
r("Z+Ib")
var E=r("y8OA")
var S=r("H4Sz")
var w=r("mKSb")
var k=r("i+HM")
var x=r("ppA4")
var I=r("6V2X")
var C=r("KzpP")
const D=new E["default"]
D.init({itemType:"assignment",page:"show"})
let R=[]
function T(e){if("0"!==e){const t={selectedStudentGroupId:e}
R.push(t)
ENV.selected_student_group_id=e
P()
A()
u["a"].put(`/api/v1/courses/${ENV.COURSE_ID}/gradebook_settings`,d.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}})).finally(()=>{R=R.filter(e=>e!==t)
A()})}}function A(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&(!ENV.selected_student_group_id||R.length>0)
const t=document.getElementById("speed_grader_link_mount_point")
t&&c.a.render(Object(n["a"])(k["a"],{disabled:e,href:ENV.speed_grader_url,disabledTip:a["a"].t("Must select a student group first")}),t)}function P(){const e=document.getElementById("student_group_filter_mount_point")
e&&c.a.render(Object(n["a"])(w["a"],{categories:ENV.group_categories,label:a["a"].t("Select Group to Grade"),onChange:T,value:ENV.selected_student_group_id}),e)}const Q=Promise.all([r.e(6),r.e(57),r.e(677)]).then(r.bind(null,"/j35"))
s()(()=>{const e=s()("#assignment_publish_button")
if(e.length>0){const t=new p["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new _({model:t,el:"#assignment-speedgrader-link"}).render()
const r=new v["a"]({model:t,el:e})
r.render()
r.on("publish",()=>s()("#moderated_grading_button").show())
r.on("unpublish",()=>s()("#moderated_grading_button").hide())}Q.then(()=>{s()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:window.location})})
return Object(O["a"])()})
s()(()=>s()("#content").on("click","#mark-as-done-checkbox",(function(){return j["a"].toggle(this)})))
function V(e,t=true){e&&e.preventDefault()
c.a.render(Object(n["a"])(x["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentShare:{content_type:"assignment",content_id:ENV.ASSIGNMENT_ID},onDismiss:()=>{V(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}function B(e,t=true){e&&e.preventDefault()
c.a.render(Object(n["a"])(I["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentSelection:{assignments:[ENV.ASSIGNMENT_ID]},onDismiss:()=>{B(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}s()(()=>{s()(".direct-share-send-to-menu-item").click(V)
s()(".direct-share-copy-to-menu-item").click(B)})
s()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&P()
A()}})
s()(()=>{s()(".upload_submissions_link").click(e=>{e.preventDefault()
s()("#re_upload_submissions_form").slideToggle()})
s()(".download_submissions_link").click((function(e){e.preventDefault()
o["a"].downloadSubmissions(s()(this).attr("href"))
s()(".upload_submissions_link").slideDown()}))
Object(C["a"])(ENV.USER_ASSET_STRING)
s()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?s()(".assignment_peer_reviews_link").slideDown():s()(".assignment_peer_reviews_link").slideUp()})})
s()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
N["default"].init(e,t)
document.getElementById("assignment_external_tools")&&S["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})},KzpP:function(e,t,r){"use strict"
r.d(t,"a",(function(){return f}))
var n=r("ouhR")
var o=r.n(n)
var a=r("EcmN")
r("Z+Ib")
const i="re_upload_submissions_form"
function s({submissions_zip:e}){if(!e)return false
if(!e.match(/\.zip$/)){o()(this).formErrors({submissions_zip:a["a"].t("Please upload files as a .zip")})
return false}const t=this.find('button[type="submit"]')
t.attr("disabled",true)
t.text(a["a"].t("Uploading..."))
return true}function l(e){const t=o()("#"+i)
t.find('input[name="submissions_zip"]').remove()
t.removeAttr("enctype")
t.append(`<input type="hidden" name="attachment_id" value="${e.id}">`)
document.getElementById(i).submit()}function c(e){const t=this.find('button[type="submit"]')
t.attr("disabled",false)
t.text(a["a"].t("Upload Files"))
return this}function u(e){return{errorMessage:a["a"].t("Upload error. Please try again.")}}function f(e){const t={fileUpload:true,fileUploadOptions:{context_code:e,formDataTarget:"uploadDataUrl",intent:"submissions_zip_upload",preparedFileUpload:true,singleFile:true,upload_only:true,preferFileValueForInputName:false},object_name:"attachment",beforeSubmit:s,error:c,errorFormatter:u,success:l}
o()("#"+i).formSubmit(t)
return t}},QSc6:function(e,t,r){"use strict"
var n=r("0jNN")
var o=r("sxOR")
var a=Object.prototype.hasOwnProperty
var i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}}
var s=Array.isArray
var l=Array.prototype.push
var c=function(e,t){l.apply(e,s(t)?t:[t])}
var u=Date.prototype.toISOString
var f=o["default"]
var d={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:n.encode,encodeValuesOnly:false,format:f,formatter:o.formatters[f],indices:false,serializeDate:function(e){return u.call(e)},skipNulls:false,strictNullHandling:false}
var p=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e}
var v=function e(t,r,o,a,i,l,u,f,v,m,b,h,y){var g=t
"function"===typeof u?g=u(r,g):g instanceof Date?g=m(g):"comma"===o&&s(g)&&(g=g.join(","))
if(null===g){if(a)return l&&!h?l(r,d.encoder,y,"key"):r
g=""}if(p(g)||n.isBuffer(g)){if(l){var _=h?r:l(r,d.encoder,y,"key")
return[b(_)+"="+b(l(g,d.encoder,y,"value"))]}return[b(r)+"="+b(String(g))]}var O=[]
if("undefined"===typeof g)return O
var j
if(s(u))j=u
else{var N=Object.keys(g)
j=f?N.sort(f):N}for(var E=0;E<j.length;++E){var S=j[E]
if(i&&null===g[S])continue
s(g)?c(O,e(g[S],"function"===typeof o?o(r,S):r,o,a,i,l,u,f,v,m,b,h,y)):c(O,e(g[S],r+(v?"."+S:"["+S+"]"),o,a,i,l,u,f,v,m,b,h,y))}return O}
var m=function(e){if(!e)return d
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||d.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var r=o["default"]
if("undefined"!==typeof e.format){if(!a.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.")
r=e.format}var n=o.formatters[r]
var i=d.filter;("function"===typeof e.filter||s(e.filter))&&(i=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}
e.exports=function(e,t){var r=e
var n=m(t)
var o
var a
if("function"===typeof n.filter){a=n.filter
r=a("",r)}else if(s(n.filter)){a=n.filter
o=a}var l=[]
if("object"!==typeof r||null===r)return""
var u
u=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"
var f=i[u]
o||(o=Object.keys(r))
n.sort&&o.sort(n.sort)
for(var d=0;d<o.length;++d){var p=o[d]
if(n.skipNulls&&null===r[p])continue
c(l,v(r[p],p,f,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var b=l.join(n.delimiter)
var h=true===n.addQueryPrefix?"?":""
n.charsetSentinel&&("iso-8859-1"===n.charset?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&")
return b.length>0?h+b:""}},Qyje:function(e,t,r){"use strict"
var n=r("QSc6")
var o=r("nmq7")
var a=r("sxOR")
e.exports={formats:a,parse:o,stringify:n}},goGJ:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
var n=r("ouhR")
var o=r.n(n)
r("rEd+")
function a(){return o()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=o()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return o()(t).html()}catch(e){}}})}},"i+HM":function(e,t,r){"use strict"
var n=r("An8g")
var o=r("VTBJ")
var a=r("q1tI")
var i=r.n(a)
r("17x9")
var s=r("5Shj")
var l=r("EcmN")
function c(e){return i.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGrader™"))}function u(e){const t=e.className?"icon-speed-grader "+e.className:"icon-speed-grader"
let r={className:t,href:e.href}
e.disabled&&(r=Object(o["a"])(Object(o["a"])({},r),{},{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(n["a"])(s["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,c(r)):c(r)}t["a"]=u},mKSb:function(e,t,r){"use strict"
var n=r("An8g")
r("17x9")
var o=r("sTNg")
var a=r("EcmN")
r("q1tI")
function i(e){return Object(n["a"])("option",{value:e.id},e.id,e.name)}function s(e){return Object(n["a"])("optgroup",{label:e.name},"group_category_"+e.id,e.groups.map(e=>i(e)))}function l(e){return Object(n["a"])(o["a"],{id:"student-group-filter",label:e.label},void 0,Object(n["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(n["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",a["a"].t("Select One")),e.categories.map(e=>s(e))))}t["a"]=l},nmq7:function(e,t,r){"use strict"
var n=r("0jNN")
var o=Object.prototype.hasOwnProperty
var a=Array.isArray
var i={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))}
var l="utf8=%26%2310003%3B"
var c="utf8=%E2%9C%93"
var u=function(e,t){var r={}
var u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e
var f=Infinity===t.parameterLimit?void 0:t.parameterLimit
var d=u.split(t.delimiter,f)
var p=-1
var v
var m=t.charset
if(t.charsetSentinel)for(v=0;v<d.length;++v)if(0===d[v].indexOf("utf8=")){d[v]===c?m="utf-8":d[v]===l&&(m="iso-8859-1")
p=v
v=d.length}for(v=0;v<d.length;++v){if(v===p)continue
var b=d[v]
var h=b.indexOf("]=")
var y=-1===h?b.indexOf("="):h+1
var g,_
if(-1===y){g=t.decoder(b,i.decoder,m,"key")
_=t.strictNullHandling?null:""}else{g=t.decoder(b.slice(0,y),i.decoder,m,"key")
_=t.decoder(b.slice(y+1),i.decoder,m,"value")}_&&t.interpretNumericEntities&&"iso-8859-1"===m&&(_=s(_))
_&&"string"===typeof _&&t.comma&&_.indexOf(",")>-1&&(_=_.split(","))
b.indexOf("[]=")>-1&&(_=a(_)?[_]:_)
o.call(r,g)?r[g]=n.combine(r[g],_):r[g]=_}return r}
var f=function(e,t,r){var n=t
for(var o=e.length-1;o>=0;--o){var a
var i=e[o]
if("[]"===i&&r.parseArrays)a=[].concat(n)
else{a=r.plainObjects?Object.create(null):{}
var s="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i
var l=parseInt(s,10)
if(r.parseArrays||""!==s)if(!isNaN(l)&&i!==s&&String(l)===s&&l>=0&&r.parseArrays&&l<=r.arrayLimit){a=[]
a[l]=n}else a[s]=n
else a={0:n}}n=a}return n}
var d=function(e,t,r){if(!e)return
var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var a=/(\[[^[\]]*])/
var i=/(\[[^[\]]*])/g
var s=r.depth>0&&a.exec(n)
var l=s?n.slice(0,s.index):n
var c=[]
if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return
c.push(l)}var u=0
while(r.depth>0&&null!==(s=i.exec(n))&&u<r.depth){u+=1
if(!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return
c.push(s[1])}s&&c.push("["+n.slice(s.index)+"]")
return f(c,t,r)}
var p=function(e){if(!e)return i
if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined")
var t="undefined"===typeof e.charset?i.charset:e.charset
return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth||false===e.depth?+e.depth:i.depth,ignoreQueryPrefix:true===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:false!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}
e.exports=function(e,t){var r=p(t)
if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{}
var o="string"===typeof e?u(e,r):e
var a=r.plainObjects?Object.create(null):{}
var i=Object.keys(o)
for(var s=0;s<i.length;++s){var l=i[s]
var c=d(l,o[l],r)
a=n.merge(a,c,r)}return n.compact(a)}},oMlh:function(e,t,r){"use strict"
var n=r("ouhR")
var o=r.n(n)
r("jYyc")
t["a"]={toggle(e){const t=o()(e).data.bind(o()(e))
return o.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
o()(e).toggleClass("btn-success")
o()("i",e).toggleClass("icon-empty icon-complete")
o()(".mark-done-labels span",e).toggleClass("visible")})}}},sxOR:function(e,t,r){"use strict"
var n=String.prototype.replace
var o=/%20/g
var a=r("0jNN")
var i={RFC1738:"RFC1738",RFC3986:"RFC3986"}
e.exports=a.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},i)},ysUD:function(e,t,r){"use strict"
r.d(t,"a",(function(){return w}))
var n=r("VTBJ")
var o=r("rePB")
var a=r("1OyB")
var i=r("vuIU")
var s=r("Ji7U")
var l=r("LK+K")
var c=r("q1tI")
var u=r.n(c)
var f=r("17x9")
var d=r.n(f)
var p=r("TSYQ")
var v=r.n(p)
var m=r("eAd9")
var b=r.n(m)
var h=r("J2CL")
var y=r("sQ3t")
var g=r("jtGx")
function _(e){var t=e.colors,r=e.borders,n=e.stacking
return{zIndex:n.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:t.borderBrand,borderRadius:r.radiusMedium,borderWidth:r.widthSmall}}_.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
var O,j,N,E
var S={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var w=(O=Object(h["j"])(_,S),O(j=(E=N=function(e){Object(s["a"])(r,e)
var t=Object(l["a"])(r)
function r(){var e
Object(a["a"])(this,r)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i]
e=t.call.apply(t,[this].concat(o))
e.handleElementRef=function(t){e.props.elementRef(t)}
e.contentRef=function(t){e._content=t}
return e}Object(i["a"])(r,[{key:"componentDidMount",value:function(){this.props.fullscreen&&b.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&b.a.off()}},{key:"render",value:function(){var e
var t=Object(y["a"])(this.props.children,{ref:this.contentRef})
var a=v()((e={},Object(o["a"])(e,S.root,true),Object(o["a"])(e,S[this.props.placement],true),Object(o["a"])(e,S.fullscreen,this.props.fullscreen),e))
var i=Object(n["a"])({},Object(g["a"])(this.props,r.propTypes),{className:a,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){i.onClick=this.props.onClick
i.tabIndex=-1}return u.a.createElement("span",i,t)}}])
r.displayName="Mask"
return r}(c["Component"]),N.propTypes={onDismiss:d.a.func,placement:d.a.oneOf(["top","center","bottom","stretch"]),fullscreen:d.a.bool,children:d.a.node,onClick:d.a.func,elementRef:d.a.func},N.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},E))||j)}}])

//# sourceMappingURL=assignment_show-c-29796d6d04.js.map
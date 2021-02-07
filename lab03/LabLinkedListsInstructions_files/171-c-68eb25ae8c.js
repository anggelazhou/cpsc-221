(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[171],{"4LsN":function(e,t,n){"use strict"
n.r(t)
n.d(t,"default",(function(){return L}))
var a=n("q1tI")
var i=n.n(a)
var s=n("17x9")
var r=n("/HcR")
var l=n.n(r)
var o=n("L+/K")
var d=n("Zgll")
var c=n("RqKb")
var u=n("n12J")
var p=n("Xx/m")
var h=n("TstA")
var g=n("xHhu")
var f=n("WfMV")
var O=n("5JRF")
var m=n("Ff2n")
var b=n("LvDl")
var v=n("Oioo")
var S=n("4Awi")
const R="_noOptionsOption"
function C(){return i.a.createElement("div",null)}C.propTypes={id:s["string"].isRequired,value:s["string"].isRequired}
function y(){return i.a.createElement("div",null)}y.propTypes={label:s["string"].isRequired}
class w extends i.a.Component{constructor(e){super(e)
this.backupKey=0
this.handleBlur=e=>{this.setState({highlightedOptionId:null,announcement:null})
this.props.onBlur&&this.props.onBlur(e)}
this.handleShowOptions=()=>{this.setState({isShowingOptions:true})}
this.handleHideOptions=e=>{this.setState(e=>{const t=this.getOptionLabelById(e.selectedOptionId)
return{isShowingOptions:false,highlightedOptionId:null,inputValue:t}})}
this.handleHighlightOption=(e,{id:t})=>{if(t===R)return
const n=this.getOptionLabelById(t)
const a=this.state.isShowingOptions?"":this.props.translatedStrings.LIST_EXPANDED
const i="keydown"===e.type?n:this.state.inputValue
this.setState({highlightedOptionId:t,inputValue:i,announcement:`${n} ${a}`})}
this.handleSelectOption=(e,{id:t})=>{if(t===R)this.setState({isShowingOptions:false,announcement:this.props.translatedStrings.LIST_COLLAPSED})
else{const n=this.getOptionLabelById(t)
const a=this.state.selectedOptionId
this.setState({selectedOptionId:t,inputValue:n,isShowingOptions:false,announcement:l()(this.props.translatedStrings.OPTION_SELECTED,{option:n})})
const i=this.getOptionByFieldValue("id",t)
a!==t&&this.props.onChange(e,i.props.value)}}
const t=this.getOptionByFieldValue("value",e.value)
this.state={inputValue:t?t.props.children:"",isShowingOptions:false,highlightedOptionId:null,selectedOptionId:t?t.props.id:null,announcement:null}
this._selectRef=i.a.createRef()}focus(){var e
null===(e=this._selectRef.current)||void 0===e||e.focus()}componentDidUpdate(e){if(this.props.value!==e.value||!Object(b["isEqual"])(this.props.children,e.children)){const e=this.getOptionByFieldValue("value",this.props.value)
this.setState({inputValue:e?e.props.children:"",selectedOptionId:e?e.props.id:""})}}render(){const e=this.props,t=e.id,n=e.label,a=(e.value,e.onChange,e.children),s=(e.noOptionsLabel,Object(m["a"])(e,["id","label","value","onChange","children","noOptionsLabel"]))
return i.a.createElement(i.a.Fragment,null,i.a.createElement(v["a"],Object.assign({ref:this._selectRef,id:t,renderLabel:()=>n,assistiveText:this.props.translatedStrings.USE_ARROWS,inputValue:this.state.inputValue,isShowingOptions:this.state.isShowingOptions,onBlur:this.handleBlur,onRequestShowOptions:this.handleShowOptions,onRequestHideOptions:this.handleHideOptions,onRequestHighlightOption:this.handleHighlightOption,onRequestSelectOption:this.handleSelectOption},s),this.renderChildren(a)),i.a.createElement(o["a"],{liveRegion:this.props.liveRegion,liveRegionPoliteness:"assertive",screenReaderOnly:true},this.state.announcement))}renderChildren(e){if(!Array.isArray(e))return Object(S["a"])(e,[C])?this.renderOption(e):Object(S["a"])(e,[y])?this.renderGroup(e):this.renderNoOptionsOption()
const t=e.map(e=>{if(Array.isArray(e))return this.renderChildren(e)
if(Object(S["a"])(e,[C]))return this.renderOption(e)
if(Object(S["a"])(e,[y]))return this.renderGroup(e)
return null}).filter(e=>!!e)
if(0===t.length)return this.renderNoOptionsOption()
return t}renderOption(e){const t=e.props,n=t.id,a=t.children,s=Object(m["a"])(t,["id","children"])
return i.a.createElement(v["a"].Option,Object.assign({id:n,key:e.key||n||++this.backupKey,isHighlighted:n===this.state.highlightedOptionId,isSelected:n===this.state.selectedOptionId},s),a)}renderGroup(e){const t=e.props,n=t.id,a=t.label,s=Object(m["a"])(t,["id","label"])
const r=Object(b["compact"])(Object(b["castArray"])(e.props.children))
return i.a.createElement(v["a"].Group,Object.assign({"data-testid":"Group:"+a,renderLabel:()=>a,key:e.key||n||++this.backupKey},s),r.map(e=>this.renderOption(e)))}renderNoOptionsOption(){return i.a.createElement(v["a"].Option,{id:R,isHighlighted:false,isSelected:false},this.props.noOptionsLabel)}getOptionLabelById(e){const t=this.getOptionByFieldValue("id",e)
return t?t.props.children:""}getOptionByFieldValue(e,t,n=Object(b["castArray"])(this.props.children)){if(!this.props.children)return null
let a=null
for(let i=0;i<n.length;++i){const s=n[i]
if(Array.isArray(s))a=this.getOptionByFieldValue(e,t,s)
else if(Object(S["a"])(s,[C]))s.props[e]===t&&(a=s)
else if(Object(S["a"])(s,[y])){const n=Object(b["castArray"])(s.props.children)
for(let i=0;i<n.length;++i){const s=n[i]
if(s.props[e]===t){a=s
break}}}if(a)break}return a}}w.Option=C
w.Group=y
w.propTypes={id:s["string"],label:Object(s["oneOfType"])([s["node"],s["func"]]).isRequired,liveRegion:s["func"],value:s["string"],onChange:s["func"].isRequired,children:s["node"],noOptionsLabel:s["string"],translatedStrings:Object(s["shape"])({USE_ARROWS:s["string"].isRequired,LIST_COLLAPSED:s["string"].isRequired,LIST_EXPANDED:s["string"].isRequired,OPTION_SELECTED:s["string"].isRequired}),onBlur:s["func"]}
w.defaultProps={noOptionsLabel:"---"}
class E extends a["Component"]{constructor(...e){super(...e)
this._langSelectRef=i.a.createRef()
this._deleteCCBtnRef=i.a.createRef()
this.handleLanguageChange=(e,t)=>{this.props.onLanguageSelected(this.props.languages.find(e=>e.id===t))}
this.handleDeleteRow=e=>{this.props.onDeleteRow(this.props.selectedLanguage.id)}}get isReadonly(){return this.props.selectedFile&&this.props.selectedLanguage}focus(){this._langSelectRef.current?this._langSelectRef.current.focus():this._deleteCCBtnRef.current&&this._deleteCCBtnRef.current.focus()}renderChoosing(){return i.a.createElement(h["a"],{as:"div",wrap:"wrap",justifyItems:"start",alignItems:"end","data-testid":"CC-CreatorRow-choosing"},this.renderSelectLanguage(),this.renderChooseFile())}renderSelectLanguage(){var e
const t=this.props.uploadMediaTranslations.UploadMediaStrings.CLOSED_CAPTIONS_SELECT_LANGUAGE
return i.a.createElement(h["a"].Item,{margin:"0 small small 0"},i.a.createElement(w,{ref:this._langSelectRef,value:null===(e=this.props.selectedLanguage)||void 0===e?void 0:e.id,label:i.a.createElement(f["a"],null,t),liveRegion:this.props.liveRegion,onChange:this.handleLanguageChange,placeholder:t,translatedStrings:this.props.uploadMediaTranslations.SelectStrings},this.props.languages.map(e=>i.a.createElement(w.Option,{key:e.id,id:e.id,value:e.id},e.label))))}renderChooseFile(){const e=this.props.uploadMediaTranslations.UploadMediaStrings,t=e.NO_FILE_CHOSEN,n=e.SUPPORTED_FILE_TYPES,a=e.CLOSED_CAPTIONS_CHOOSE_FILE
return i.a.createElement(h["a"].Item,{margin:"0 small small 0"},i.a.createElement("input",{id:"attachmentFile",accept:".vtt, .srt",ref:e=>{this.fileInput=e},onChange:e=>{this.props.onFileSelected(e.target.files[0])},style:{display:"none"},type:"file"}),i.a.createElement(u["a"],{as:"div"},i.a.createElement(O["a"],{as:"div"},n),i.a.createElement(p["a"],{margin:"xx-small 0 0 0",id:"attachmentFileButton",onClick:()=>{this.fileInput.click()},ref:e=>{this.attachmentFileButton=e}},this.props.selectedFile?this.props.selectedFile.name:a),!this.props.selectedFile&&i.a.createElement(u["a"],{display:"inline-block",margin:"0 0 0 small"},i.a.createElement(O["a"],{color:"secondary"},t))))}renderChosen(){const e=this.props.uploadMediaTranslations.UploadMediaStrings.REMOVE_FILE
return i.a.createElement(h["a"],{as:"div",wrap:"wrap",justifyItems:"start",alignItems:"end","data-testid":"CC-CreatorRow-chosen"},i.a.createElement(h["a"].Item,{margin:"0 0 small 0"},i.a.createElement(u["a"],{as:"div",borderWidth:"small",padding:"0 0 0 small",borderRadius:"medium",width:"100%"},i.a.createElement(h["a"],{justifyItems:"space-between"},i.a.createElement(h["a"].Item,null,i.a.createElement(O["a"],{weight:"bold"},this.props.selectedLanguage.label)),i.a.createElement(h["a"].Item,{margin:"0 0 0 x-small"},i.a.createElement(d["a"],{ref:this._deleteCCBtnRef,withBackground:false,withBorder:false,onClick:this.handleDeleteRow,screenReaderLabel:l()(e,{lang:this.props.selectedLanguage.label})},i.a.createElement(g["a"],null)))))))}render(){return this.isReadonly?this.renderChosen():this.renderChoosing()}}E.propTypes={languages:Object(s["arrayOf"])(Object(s["shape"])({id:s["string"],label:s["string"]})),liveRegion:s["func"],uploadMediaTranslations:Object(s["shape"])({UploadMediaStrings:Object(s["objectOf"])(s["string"]),SelectStrings:Object(s["objectOf"])(s["string"])}),onDeleteRow:s["func"],onFileSelected:s["func"],onLanguageSelected:s["func"],selectedFile:Object(s["shape"])({name:s["string"].isRequired}),selectedLanguage:Object(s["shape"])({id:s["string"].isRequired,label:s["string"].isRequired})}
class L extends a["Component"]{constructor(e){var t
super(e)
this.newButtonClick=()=>{this.setState({addingNewClosedCaption:true,newSelectedFile:null,newSelectedLanguage:null,announcement:null})}
this.onFileSelected=e=>{this.state.newSelectedLanguage&&e?this.setState(t=>{const n=t.subtitles.concat([{locale:t.newSelectedLanguage.id,file:e,isNew:true}])
this.props.updateSubtitles(n)
return{subtitles:n,addingNewClosedCaption:false,newSelectedFile:null,newSelectedLanguage:null,announcement:l()(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION,{lang:t.newSelectedLanguage.label})}}):this.setState({newSelectedFile:e,announcement:null})}
this.onLanguageSelected=e=>{this.state.newSelectedFile?this.setState(t=>{const n=t.subtitles.concat([{locale:e.id,file:t.newSelectedFile,isNew:true}])
this.props.updateSubtitles(n)
return{subtitles:n,addingNewClosedCaption:false,newSelectedFile:null,newSelectedLanguage:null,announcement:l()(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION,{lang:e.label})}}):this.setState({newSelectedLanguage:e,announcement:null})}
this.onRowDelete=e=>{this.setState(t=>{const n=this.props.languages.findIndex(t=>t.id===e)
const a=t.subtitles.findIndex(t=>t.locale===e)
const i=t.subtitles.filter(t=>t.locale!==e)
this.props.updateSubtitles(i)
return{subtitles:i,addingNewClosedCaption:!(i.length>0)||t.addingNewClosedCaption,announcement:l()(this.props.uploadMediaTranslations.UploadMediaStrings.DELETED_CAPTION,{lang:null===n||void 0===n?void 0:n.label}),lastDeletedCCIndex:a}})}
this.state={addingNewClosedCaption:!(null===e||void 0===e||null===(t=e.subtitles)||void 0===t?void 0:t.length),newSelectedFile:null,newSelectedLanguage:null,lastDeletedCCIndex:-1,subtitles:e.subtitles||[],announcement:null}
this._addButtonRef=i.a.createRef()
this._newCreatorRef=i.a.createRef()
this._nextCCRef=i.a.createRef()}componentDidUpdate(){if(document.activeElement===document.body){if(this._newCreatorRef.current)this._newCreatorRef.current.focus()
else if(this._nextCCRef.current)this._nextCCRef.current.focus()
else{var e
null===(e=this._addButtonRef.current)||void 0===e||e.focus()}this.setState(e=>{if(-1!==e.lastDeletedCCIndex)return{lastDeletedCCIndex:-1}
return null})}}render(){const e=this.props.uploadMediaTranslations.UploadMediaStrings.ADD_NEW_CAPTION_OR_SUBTITLE
return i.a.createElement(u["a"],{display:"inline-block","data-testid":"ClosedCaptionPanel"},this.state.announcement&&i.a.createElement(o["a"],{liveRegion:this.props.liveRegion,screenReaderOnly:true,isLiveRegionAtomic:true,liveRegionPoliteness:"assertive"},this.state.announcement),i.a.createElement(u["a"],{display:"inline-block"},this.state.subtitles.map((e,t)=>i.a.createElement(E,{ref:t===this.state.lastDeletedCCIndex?this._nextCCRef:void 0,key:e.locale,liveRegion:this.props.liveRegion,uploadMediaTranslations:this.props.uploadMediaTranslations,onDeleteRow:this.onRowDelete,onLanguageSelected:this.onLanguageSelected,onFileSelected:this.onFileSelected,languages:this.props.languages,selectedLanguage:this.props.languages.find(t=>t.id===e.locale),selectedFile:e.file}))),this.state.addingNewClosedCaption?i.a.createElement(u["a"],{as:"div"},i.a.createElement(E,{ref:this._newCreatorRef,liveRegion:this.props.liveRegion,uploadMediaTranslations:this.props.uploadMediaTranslations,onDeleteRow:this.onRowDelete,onLanguageSelected:this.onLanguageSelected,onFileSelected:this.onFileSelected,languages:this.props.languages.filter(e=>!this.state.subtitles.find(t=>t.locale===e.id)),selectedLanguage:this.state.newSelectedLanguage,selectedFile:this.state.newSelectedFile})):i.a.createElement("div",{style:{position:"relative",textAlign:"center"}},i.a.createElement(d["a"],{ref:this._addButtonRef,shape:"circle",color:"primary",screenReaderLabel:e,onClick:this.newButtonClick,margin:"x-small auto"},i.a.createElement(c["a"],null))))}}L.propTypes={liveRegion:s["func"].isRequired,subtitles:Object(s["arrayOf"])(Object(s["shape"])({locale:s["string"].isRequired,file:Object(s["shape"])({name:s["string"].isRequired}).isRequired})),updateSubtitles:s["func"].isRequired,uploadMediaTranslations:Object(s["shape"])({UploadMediaStrings:Object(s["objectOf"])(s["string"]),SelectStrings:Object(s["objectOf"])(s["string"])}).isRequired,languages:Object(s["arrayOf"])(Object(s["shape"])({id:s["string"],language:s["string"]})).isRequired}},RqKb:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var i=n("1OyB")
var s=n("vuIU")
var r=n("Ji7U")
var l=n("LK+K")
var o=n("q1tI")
var d=n.n(o)
var c=n("hPGw")
var u=d.a.createElement("path",{d:"M915.743529 213L915.743529 915.743529 213 915.743529 213 1003.58647 915.743529 1003.58647 915.743529 1706.33 1003.58647 1706.33 1003.58647 1003.58647 1706.33 1003.58647 1706.33 915.743529 1003.58647 915.743529 1003.58647 213z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(r["a"])(n,e)
var t=Object(l["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(s["a"])(n,[{key:"render",value:function(){return d.a.createElement(c["a"],Object.assign({},this.props,{name:"IconAdd",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconAddLine"
return n}(o["Component"])
p.glyphName="add"
p.variant="Line"
p.propTypes=Object(a["a"])({},c["a"].propTypes)},Zgll:function(e,t,n){"use strict"
n.d(t,"a",(function(){return y}))
var a=n("Ff2n")
var i=n("1OyB")
var s=n("vuIU")
var r=n("Ji7U")
var l=n("LK+K")
var o=n("q1tI")
var d=n.n(o)
var c=n("17x9")
var u=n.n(c)
var p=n("oXx0")
var h=n("J2CL")
var g=n("jtGx")
var f=n("6SzX")
var O=n("C6Zt")
var m=n("tPrY")
var b,v,S,R,C
var y=(b=Object(p["a"])(),v=Object(h["j"])(m["b"]),b(S=v(S=(C=R=function(e){Object(r["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r]
e=t.call.apply(t,[this].concat(s))
e._baseButton=null
return e}Object(s["a"])(n,[{key:"focus",value:function(){this._baseButton&&this._baseButton.focus()}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,i=t.renderIcon,s=t.screenReaderLabel,r=t.type,l=t.size,o=t.elementRef,c=t.as,u=t.interaction,p=t.color,h=t.focusColor,m=t.shape,b=t.withBackground,v=t.withBorder,S=t.margin,R=t.cursor,C=t.href,y=Object(a["a"])(t,["children","renderIcon","screenReaderLabel","type","size","elementRef","as","interaction","color","focusColor","shape","withBackground","withBorder","margin","cursor","href"])
var w=this.theme
return d.a.createElement(O["a"],Object.assign({},Object(g["b"])(y),{type:r,size:l,elementRef:o,as:c,interaction:u,color:p,focusColor:h,shape:m,withBackground:b,withBorder:v,margin:S,cursor:R,href:C,renderIcon:n||i,theme:w,ref:function(t){e._baseButton=t},__dangerouslyIgnoreExperimentalWarnings:true}),d.a.createElement(f["a"],null,s))}},{key:"focused",get:function(){return this._baseButton&&this._baseButton.focused}}])
n.displayName="IconButton"
return n}(o["Component"]),R.propTypes={children:u.a.oneOfType([u.a.node,u.a.func]),renderIcon:u.a.oneOfType([u.a.node,u.a.func]),screenReaderLabel:u.a.string.isRequired,type:u.a.oneOf(["button","submit","reset"]),size:u.a.oneOf(["small","medium","large"]),elementRef:u.a.func,as:u.a.elementType,interaction:u.a.oneOf(["enabled","disabled","readonly"]),color:u.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:u.a.oneOf(["info","inverse"]),shape:u.a.oneOf(["rectangle","circle"]),withBackground:u.a.bool,withBorder:u.a.bool,margin:h["c"].spacing,cursor:u.a.string,href:u.a.string},R.defaultProps={children:null,renderIcon:void 0,type:"button",size:"medium",elementRef:function(e){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",withBackground:true,withBorder:true,margin:"0",cursor:"pointer",href:void 0},C))||S)||S)}}])

//# sourceMappingURL=171-c-68eb25ae8c.js.map
import{g as _,a7 as ln,ah as en,J as w,a0 as z,ai as on,aj as P,ak as tn,al as rn,o as an,C as un,u as sn}from"./D_xzciyk.js";import{p as F,k as cn}from"./BsYmvPZw.js";import{u as pn}from"./D_5VAYnG.js";class S{constructor(l,o,t){this.property=l,this.normal=o,t&&(this.space=t)}}S.prototype.property={};S.prototype.normal={};S.prototype.space=null;function H(n,l){const o={},t={};let r=-1;for(;++r<n.length;)Object.assign(o,n[r].property),Object.assign(t,n[r].normal);return new S(o,t,l)}function L(n){return n.toLowerCase()}class v{constructor(l,o){this.property=l,this.attribute=o}}v.prototype.space=null;v.prototype.boolean=!1;v.prototype.booleanish=!1;v.prototype.overloadedBoolean=!1;v.prototype.number=!1;v.prototype.commaSeparated=!1;v.prototype.spaceSeparated=!1;v.prototype.commaOrSpaceSeparated=!1;v.prototype.mustUseProperty=!1;v.prototype.defined=!1;let dn=0;const u=b(),h=b(),V=b(),e=b(),d=b(),k=b(),m=b();function b(){return 2**++dn}const M=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:h,commaOrSpaceSeparated:m,commaSeparated:k,number:e,overloadedBoolean:V,spaceSeparated:d},Symbol.toStringTag,{value:"Module"})),D=Object.keys(M);class T extends v{constructor(l,o,t,r){let a=-1;if(super(l,o),I(this,"space",r),typeof t=="number")for(;++a<D.length;){const i=D[a];I(this,D[a],(t&M[i])===M[i])}}}T.prototype.defined=!0;function I(n,l,o){o&&(n[l]=o)}const gn={}.hasOwnProperty;function C(n){const l={},o={};let t;for(t in n.properties)if(gn.call(n.properties,t)){const r=n.properties[t],a=new T(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),l[t]=a,o[L(t)]=t,o[L(a.attribute)]=t}return new S(l,o,n.space)}const N=C({space:"xlink",transform(n,l){return"xlink:"+l.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),q=C({space:"xml",transform(n,l){return"xml:"+l.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function W(n,l){return l in n?n[l]:l}function K(n,l){return W(n,l.toLowerCase())}const X=C({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:K,properties:{xmlns:null,xmlnsXLink:null}}),Y=C({transform(n,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:h,ariaAutoComplete:null,ariaBusy:h,ariaChecked:h,ariaColCount:e,ariaColIndex:e,ariaColSpan:e,ariaControls:d,ariaCurrent:null,ariaDescribedBy:d,ariaDetails:null,ariaDisabled:h,ariaDropEffect:d,ariaErrorMessage:null,ariaExpanded:h,ariaFlowTo:d,ariaGrabbed:h,ariaHasPopup:null,ariaHidden:h,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:d,ariaLevel:e,ariaLive:null,ariaModal:h,ariaMultiLine:h,ariaMultiSelectable:h,ariaOrientation:null,ariaOwns:d,ariaPlaceholder:null,ariaPosInSet:e,ariaPressed:h,ariaReadOnly:h,ariaRelevant:null,ariaRequired:h,ariaRoleDescription:d,ariaRowCount:e,ariaRowIndex:e,ariaRowSpan:e,ariaSelected:h,ariaSetSize:e,ariaSort:null,ariaValueMax:e,ariaValueMin:e,ariaValueNow:e,ariaValueText:null,role:null}}),hn=C({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:K,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:k,acceptCharset:d,accessKey:d,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:d,autoFocus:u,autoPlay:u,blocking:d,capture:null,charSet:null,checked:u,cite:null,className:d,cols:e,colSpan:null,content:null,contentEditable:h,controls:u,controlsList:d,coords:e|k,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:V,draggable:h,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:d,height:e,hidden:u,high:e,href:null,hrefLang:null,htmlFor:d,httpEquiv:d,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:d,itemRef:d,itemScope:u,itemType:d,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:e,manifest:null,max:null,maxLength:e,media:null,method:null,min:null,minLength:e,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:e,pattern:null,ping:d,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:d,required:u,reversed:u,rows:e,rowSpan:e,sandbox:d,scope:null,scoped:u,seamless:u,selected:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:e,sizes:null,slot:null,span:e,spellCheck:h,src:null,srcDoc:null,srcLang:null,srcSet:null,start:e,step:null,style:null,tabIndex:e,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:h,width:e,wrap:null,align:null,aLink:null,archive:d,axis:null,background:null,bgColor:null,border:e,borderColor:null,bottomMargin:e,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:e,leftMargin:e,link:null,longDesc:null,lowSrc:null,marginHeight:e,marginWidth:e,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:e,rules:null,scheme:null,scrolling:h,standby:null,summary:null,text:null,topMargin:e,valueType:null,version:null,vAlign:null,vLink:null,vSpace:e,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:e,security:null,unselectable:null}}),mn=C({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:W,properties:{about:m,accentHeight:e,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:e,amplitude:e,arabicForm:null,ascent:e,attributeName:null,attributeType:null,azimuth:e,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:e,by:null,calcMode:null,capHeight:e,className:d,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:e,diffuseConstant:e,direction:null,display:null,dur:null,divisor:e,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:e,enableBackground:null,end:null,event:null,exponent:e,externalResourcesRequired:null,fill:null,fillOpacity:e,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:k,g2:k,glyphName:k,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:e,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:e,horizOriginX:e,horizOriginY:e,id:null,ideographic:e,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:e,k:e,k1:e,k2:e,k3:e,k4:e,kernelMatrix:m,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:e,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:e,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:e,overlineThickness:e,paintOrder:null,panose1:null,path:null,pathLength:e,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:d,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:e,pointsAtY:e,pointsAtZ:e,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:m,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:m,rev:m,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:m,requiredFeatures:m,requiredFonts:m,requiredFormats:m,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:e,specularExponent:e,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:e,strikethroughThickness:e,string:null,stroke:null,strokeDashArray:m,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:e,strokeOpacity:e,strokeWidth:null,style:null,surfaceScale:e,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:m,tabIndex:e,tableValues:null,target:null,targetX:e,targetY:e,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:m,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:e,underlineThickness:e,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:e,values:null,vAlphabetic:e,vMathematical:e,vectorEffect:null,vHanging:e,vIdeographic:e,version:null,vertAdvY:e,vertOriginX:e,vertOriginY:e,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:e,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),fn=/^data[-\w.:]+$/i,j=/-[a-z]/g,yn=/[A-Z]/g;function vn(n,l){const o=L(l);let t=l,r=v;if(o in n.normal)return n.property[n.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&fn.test(l)){if(l.charAt(4)==="-"){const a=l.slice(5).replace(j,kn);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=l.slice(4);if(!j.test(a)){let i=a.replace(yn,bn);i.charAt(0)!=="-"&&(i="-"+i),l="data"+i}}r=T}return new r(t,l)}function bn(n){return"-"+n.toLowerCase()}function kn(n){return n.charAt(1).toUpperCase()}const Cn=H([q,N,X,Y,hn],"html");H([q,N,X,Y,mn],"svg");const A=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],R="default",$=/^@|^v-on:/,Z=/^:|^v-bind:/,J=/^v-model/,Sn=["select","textarea","input"],xn=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),wn=_({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})}},async setup(n){var i,s,c,g,f,p,y,B;const l=(c=(s=(i=ln())==null?void 0:i.appContext)==null?void 0:s.app)==null?void 0:c.$nuxt,o=(l==null?void 0:l.$route)||(l==null?void 0:l._route),{mdc:t}=((g=l==null?void 0:l.$config)==null?void 0:g.public)||{},r={...(f=t==null?void 0:t.components)!=null&&f.prose&&n.prose!==!1?xn:{},...((p=t==null?void 0:t.components)==null?void 0:p.map)||{},...en(((B=(y=n.data)==null?void 0:y.mdc)==null?void 0:B.components)||{}),...n.components},a=w(()=>{var U;const nn=(((U=n.body)==null?void 0:U.children)||[]).map(x=>x.tag||x.type).filter(x=>!A.includes(x));return Array.from(new Set(nn)).sort().join(".")});return await Un(n.body,{tags:r}),{tags:r,contentKey:a,route:o}},render(n){var f,p,y;const{tags:l,tag:o,body:t,data:r,contentKey:a,route:i}=n;if(!t)return null;const s={...r,tags:l,$route:i},c=o!==!1?E(o||((f=s.component)==null?void 0:f.name)||s.component||"div"):void 0,g=G(t,z,s,s);return c?z(c,{...(p=s.component)==null?void 0:p.props,...this.$attrs,key:a},g):(y=g.default)==null?void 0:y.call(g)}});function Pn(n,l,o,t={}){if(n.type==="text")return l(P,n.value);if(n.type==="comment")return l(tn,null,n.value);const r=n.tag,a=Q(n,o.tags);if(n.tag==="binding")return On(n,l,o,t);const i=E(a);typeof i=="object"&&(i.tag=r);const s=Dn(n,o);return l(i,s,G(n,l,o,{...t,...s}))}function On(n,l,o,t={}){var g,f;const r={...t,$document:o,$doc:o},a=/\.|\[(\d+)\]/,s=((g=n.props)==null?void 0:g.value.trim().split(a).filter(Boolean)).reduce((p,y)=>{if(p&&y in p)return typeof p[y]=="function"?p[y]():p[y]},r),c=(f=n.props)==null?void 0:f.defaultValue;return l(P,s??c??"")}function G(n,l,o,t){const a=(n.children||[]).reduce((s,c)=>{if(!En(c))return s[R].push(c),s;const g=An(c);return s[g]=s[g]||[],c.type==="element"&&s[g].push(...c.children||[]),s},{[R]:[]});return Object.entries(a).reduce((s,[c,g])=>(g.length&&(s[c]=()=>{const f=g.map(p=>Pn(p,l,o,t));return Bn(f)}),s),{})}function Dn(n,l){const{tag:o="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const i=t[a];if(J.test(a)&&!Sn.includes(o))return Ln(a,i,r,l);if(a==="v-bind")return Mn(a,i,r,l);if($.test(a))return Rn(a,i,r,l);if(Z.test(a))return Tn(a,i,r,l);const{attribute:s}=vn(Cn,a);return Array.isArray(i)&&i.every(c=>typeof c=="string")?(r[s]=i.join(" "),r):(r[s]=i,r)},{})}function Ln(n,l,o,t){const r=p=>+p,a=p=>p.trim(),i=p=>p,s=n.replace(J,"").split(".").filter(p=>p).reduce((p,y)=>(p[y]=!0,p),{}),c="value",g=s.lazy?"change":"input",f=s.number?r:s.trim?a:i;return o[c]=O(l,t),o.on=o.on||{},o.on[g]=p=>t[l]=f(p),o}function Mn(n,l,o,t){const r=O(l,t);return o=Object.assign(o,r),o}function Rn(n,l,o,t){return n=n.replace($,""),o.on=o.on||{},o.on[n]=()=>O(l,t),o}function Tn(n,l,o,t){return n=n.replace(Z,""),o[n]=O(l,t),o}const E=n=>{if(!A.includes(n)&&!(n!=null&&n.render)&&!(n!=null&&n.ssrRender)){const l=on(F(n),!1);if(typeof l=="object")return l}return n};function O(n,l){const o=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,l);return typeof o>"u"?rn(n):o}function An(n){let l="";for(const o of Object.keys(n.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){l=o.split(/[:#]/,2)[1];break}return l||R}function En(n){return n.tag==="template"}function Bn(n){const l=[];for(const o of n){const t=l[l.length-1];o.type===P&&(t==null?void 0:t.type)===P?t.children=t.children+o.children:l.push(o)}return l}async function Un(n,l){if(!n)return;const o=Array.from(new Set(t(n,l)));await Promise.all(o.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=E(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){const i=r.tag;if(r.type==="text"||i==="binding"||r.type==="comment")return[];const s=Q(r,a.tags),c=[];r.type!=="root"&&!A.includes(s)&&c.push(s);for(const g of r.children||[])c.push(...t(g,a));return c}}function Q(n,l){var t;const o=n.tag;return!o||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?o:l[o]||l[F(o)]||l[cn(n.tag)]||o}const _n=_({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(n){const l=n,o=pn().isEnabled(),t=w(()=>{let i=l.value.body||l.value;return l.excerpt&&l.value.excerpt&&(i=l.value.excerpt),i}),r=w(()=>{const{body:i,excerpt:s,...c}=l.value;return{...c,...l.data}}),a=w(()=>({...l.components,...r.value._components||{}}));return(i,s)=>{const c=wn;return an(),un(c,{body:t.value,data:r.value,tag:n.tag,components:a.value,"data-content-id":sn(o)?n.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{_n as _};

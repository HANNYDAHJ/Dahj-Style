this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["active-filters"]=function(e){function t(t){for(var n,l,a=t[0],s=t[1],i=t[2],b=0,p=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,a=1;a<c.length;a++){var s=c[a];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var n={},r={5:0},o=[];function l(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=n,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(c,n,function(t){return e[t]}.bind(null,n));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=s;return o.push([390,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},105:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(8);function r(e,t){const c=Object(n.useRef)();return Object(n.useEffect)(()=>{c.current===e||t&&!t(e,c.current)||(c.current=e)},[e,t]),c.current}},11:function(e,t){e.exports=window.wp.primitives},116:function(e,t,c){"use strict";var n=c(0),r=(c(10),c(6)),o=c(9),l=c(1);c(154),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:c,onChange:o,heading:a,instanceId:s}=e;const i="h"+c;return Object(n.createElement)(i,{className:t},Object(n.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+s},Object(l.__)("Block title","woo-gutenberg-products-block")),Object(n.createElement)(r.PlainText,{id:"block-title-"+s,className:"wc-block-editor-components-title",value:a,onChange:o}))})},122:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(0);const r=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},123:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(15),r=c(14),o=c(0),l=c(49),a=c(122);const s=e=>{const{namespace:t,resourceName:c,resourceValues:s=[],query:i={},shouldSelect:u=!0}=e;if(!t||!c)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),p=Object(l.a)(i),d=Object(l.a)(s),m=Object(a.a)(),h=Object(r.useSelect)(e=>{if(!u)return null;const r=e(n.COLLECTIONS_STORE_KEY),o=[t,c,p,d],l=r.getCollectionError(...o);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(l)}return{results:r.getCollection(...o),isLoading:!r.hasFinishedResolution("getCollection",o)}},[t,c,d,p,u]);return null!==h&&(b.current=h),b.current}},13:function(e,t){e.exports=window.wp.blocks},14:function(e,t){e.exports=window.wp.data},15:function(e,t){e.exports=window.wc.wcBlocksData},154:function(e,t){},155:function(e,t){},17:function(e,t){e.exports=window.wp.htmlEntities},190:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return l}));var n=c(2);const r=Object(n.getSetting)("attributes",[]).reduce((e,t)=>{const c=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;var n;return c.id&&e.push(c),e},[]),o=e=>{if(e)return r.find(t=>t.id===e)},l=e=>{if(e)return r.find(t=>t.taxonomy===e)}},191:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return o}));var n=c(7);const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},c=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const o=e.filter(e=>e.attribute===c.taxonomy),l=o.length?o[0]:null;if(!(l&&l.slug&&Array.isArray(l.slug)&&l.slug.includes(r)))return;const a=l.slug.filter(e=>e!==r),s=e.filter(e=>e.attribute!==c.taxonomy);a.length>0&&(l.slug=a.sort(),s.push(l)),t(Object(n.sortBy)(s,"attribute"))},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},c=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in";const l=e.filter(e=>e.attribute!==c.taxonomy);0===r.length?t(l):(l.push({attribute:c.taxonomy,operator:o,slug:r.map(e=>{let{slug:t}=e;return t}).sort()}),t(Object(n.sortBy)(l,"attribute")))}},2:function(e,t){e.exports=window.wc.wcSettings},200:function(e,t,c){"use strict";var n=c(5),r=c.n(n),o=c(0),l=c(4),a=c.n(l),s=c(1),i=c(108),u=c(512);c(155);var b=e=>{let{text:t,screenReaderText:c="",element:n="li",className:l="",radius:s="small",children:i=null,...u}=e;const b=n,p=a()(l,"wc-block-components-chip","wc-block-components-chip--radius-"+s),d=Boolean(c&&c!==t);return Object(o.createElement)(b,r()({className:p},u),Object(o.createElement)("span",{"aria-hidden":d,className:"wc-block-components-chip__text"},t),d&&Object(o.createElement)("span",{className:"screen-reader-text"},c),i)};t.a=e=>{let{ariaLabel:t="",className:c="",disabled:n=!1,onRemove:l=(()=>{}),removeOnAnyClick:p=!1,text:d,screenReaderText:m="",...h}=e;const O=p?"span":"button";if(!t){const e=m&&"string"==typeof m?m:d;t="string"!=typeof e?
/* translators: Remove chip. */
Object(s.__)("Remove","woo-gutenberg-products-block"):Object(s.sprintf)(
/* translators: %s text of the chip to remove. */
Object(s.__)('Remove "%s"',"woo-gutenberg-products-block"),e)}const g={"aria-label":t,disabled:n,onClick:l,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||l()}},f=p?g:{},v=p?{"aria-hidden":!0}:g;return Object(o.createElement)(b,r()({},h,f,{className:a()(c,"is-removable"),element:p?"button":h.element,screenReaderText:m,text:d}),Object(o.createElement)(O,r()({className:"wc-block-components-chip__remove"},v),Object(o.createElement)(i.a,{className:"wc-block-components-chip__remove-icon",icon:u.a,size:16})))}},25:function(e,t){e.exports=window.wp.isShallowEqual},29:function(e,t,c){"use strict";var n=c(0),r=c(4),o=c.n(r);t.a=e=>{let t,{label:c,screenReaderLabel:r,wrapperElement:l,wrapperProps:a={}}=e;const s=null!=c,i=null!=r;return!s&&i?(t=l||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(n.createElement)(t,a,r)):(t=l||n.Fragment,s&&i&&c!==r?Object(n.createElement)(t,a,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},r)):Object(n.createElement)(t,a,c))}},3:function(e,t){e.exports=window.wp.components},30:function(e,t){e.exports=window.wc.priceFormat},390:function(e,t,c){e.exports=c(455)},391:function(e,t){},455:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c.n(n),o=c(0),l=c(1),a=c(13),s=c(11),i=Object(o.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(o.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(o.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),u=c(108),b=c(4),p=c.n(b),d=c(6),m=c(3),h=c(98),O=c(116),g=c(60),f=c(78),v=c(2),j=(c(10),c(29)),w=(c(391),c(190)),_=c(30),y=c(200);const k=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?Object(l.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(l.__)("Between %1$s and %2$s","woo-gutenberg-products-block"),Object(_.formatPrice)(e),Object(_.formatPrice)(t)):Number.isFinite(e)?Object(l.sprintf)(
/* translators: %s min price */
Object(l.__)("From %s","woo-gutenberg-products-block"),Object(_.formatPrice)(e)):Object(l.sprintf)(
/* translators: %s max price */
Object(l.__)("Up to %s","woo-gutenberg-products-block"),Object(_.formatPrice)(t)),E=e=>{let{type:t,name:c,prefix:n,removeCallback:r=(()=>{}),showLabel:a=!0,displayStyle:s}=e;const i=n?Object(o.createElement)(o.Fragment,null,n," ",c):c,u=Object(l.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(l.__)("Remove %s filter","woo-gutenberg-products-block"),c);return Object(o.createElement)("li",{className:"wc-block-active-filters__list-item",key:t+":"+c},a&&Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===s?Object(o.createElement)(y.a,{element:"span",text:i,onRemove:r,radius:"large",ariaLabel:u}):Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-name"},i,Object(o.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:r},Object(o.createElement)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)("ellipse",{cx:"8",cy:"8",rx:"8",ry:"8",transform:"rotate(-180 8 8)",fill:"currentColor",fillOpacity:"0.7"}),Object(o.createElement)("rect",{x:"10.636",y:"3.94983",width:"2",height:"9.9466",transform:"rotate(45 10.636 3.94983)",fill:"white"}),Object(o.createElement)("rect",{x:"12.0503",y:"11.0209",width:"2",height:"9.9466",transform:"rotate(135 12.0503 11.0209)",fill:"white"})),Object(o.createElement)(j.a,{screenReaderLabel:u}))))};var x=c(123),S=c(17),C=c(191),N=e=>{let{attributeObject:t={},slugs:c=[],operator:n="in",displayStyle:r}=e;const{results:a,isLoading:s}=Object(x.a)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[t.id]}),[i,u]=Object(f.b)("attributes",[]);if(s)return null;const b=t.label;return Object(o.createElement)("li",null,Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-type"},b,":"),Object(o.createElement)("ul",null,c.map((e,c)=>{const s=a.find(t=>t.slug===e);if(!s)return null;let p="";return c>0&&"and"===n&&(p=Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},Object(l.__)("and","woo-gutenberg-products-block"))),E({type:b,name:Object(S.decodeEntities)(s.name||e),prefix:p,removeCallback:()=>{Object(C.a)(i,u,t,e)},showLabel:!1,displayStyle:r})})))},L=e=>{let{attributes:t,isEditor:c=!1}=e;const[n,r]=Object(f.b)("attributes",[]),[a,s]=Object(f.b)("stock_status",[]),[i,u]=Object(f.b)("min_price"),[b,d]=Object(f.b)("max_price"),m=Object(v.getSetting)("stockStatusOptions",[]),h=Object(o.useMemo)(()=>{if(a.length>0)return a.map(e=>E({type:Object(l.__)("Stock Status","woo-gutenberg-products-block"),name:m[e],removeCallback:()=>{const t=a.filter(t=>t!==e);s(t)},displayStyle:t.displayStyle}))},[m,a,s,t.displayStyle]),O=Object(o.useMemo)(()=>Number.isFinite(i)||Number.isFinite(b)?E({type:Object(l.__)("Price","woo-gutenberg-products-block"),name:k(i,b),removeCallback:()=>{u(void 0),d(void 0)},displayStyle:t.displayStyle}):null,[i,b,t.displayStyle,u,d]),g=Object(o.useMemo)(()=>n.map(e=>{const c=Object(w.b)(e.attribute);return Object(o.createElement)(N,{attributeObject:c,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator})}),[n,t.displayStyle]);if(!(n.length>0||a.length>0||Number.isFinite(i)||Number.isFinite(b)||c))return null;const _="h"+t.headingLevel,y=p()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle});return Object(o.createElement)(o.Fragment,null,!c&&t.heading&&Object(o.createElement)(_,{className:"wc-block-active-filters__title"},t.heading),Object(o.createElement)("div",{className:"wc-block-active-filters"},Object(o.createElement)("ul",{className:y},c?Object(o.createElement)(o.Fragment,null,E({type:Object(l.__)("Size","woo-gutenberg-products-block"),name:Object(l.__)("Small","woo-gutenberg-products-block"),displayStyle:t.displayStyle}),E({type:Object(l.__)("Color","woo-gutenberg-products-block"),name:Object(l.__)("Blue","woo-gutenberg-products-block"),displayStyle:t.displayStyle})):Object(o.createElement)(o.Fragment,null,O,h,g)),Object(o.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{u(void 0),d(void 0),r([]),s([])}},Object(o.createElement)(j.a,{label:Object(l.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:Object(l.__)("Clear All Filters","woo-gutenberg-products-block")}))))},H=Object(m.withSpokenMessages)(e=>{let{attributes:t,setAttributes:c}=e;const{className:n,displayStyle:r,heading:a,headingLevel:s}=t,i=Object(d.useBlockProps)({className:n});return Object(o.createElement)("div",i,Object(o.createElement)(d.InspectorControls,{key:"inspector"},Object(o.createElement)(m.PanelBody,{title:Object(l.__)("Block Settings","woo-gutenberg-products-block")},Object(o.createElement)(g.a,{label:Object(l.__)("Display Style","woo-gutenberg-products-block"),value:r,options:[{label:Object(l.__)("List","woo-gutenberg-products-block"),value:"list"},{
/* translators: "Chips" is a tag-like display style for chosen attributes. */
label:Object(l.__)("Chips","woo-gutenberg-products-block"),value:"chips"}],onChange:e=>c({displayStyle:e})}),Object(o.createElement)("p",null,Object(l.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(h.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:s,onChange:e=>c({headingLevel:e})}))),Object(o.createElement)(O.a,{className:"wc-block-active-filters__title",headingLevel:s,heading:a,onChange:e=>c({heading:e})}),Object(o.createElement)(m.Disabled,null,Object(o.createElement)(L,{attributes:t,isEditor:!0})))});Object(a.registerBlockType)("woocommerce/active-filters",{apiVersion:2,title:Object(l.__)("Active Product Filters","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(u.a,{icon:i,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(l.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(l.__)("Show the currently active product filters. Works in combination with the All Products and filters blocks.","woo-gutenberg-products-block"),supports:{html:!1,multiple:!1,color:{text:!0,background:!1}},example:{attributes:{}},attributes:{displayStyle:{type:"string",default:"list"},heading:{type:"string",default:Object(l.__)("Active filters","woo-gutenberg-products-block")},headingLevel:{type:"number",default:3}},edit:H,save(e){let{attributes:t}=e;const{className:c,displayStyle:n,heading:l,headingLevel:a}=t,s={"data-display-style":n,"data-heading":l,"data-heading-level":a};return Object(o.createElement)("div",r()({},d.useBlockProps.save({className:p()("is-loading",c)}),s),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-product-filters__placeholder"}))}})},49:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(0),r=c(25),o=c.n(r);function l(e){const t=Object(n.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},52:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0);const r=Object(n.createContext)("page"),o=()=>Object(n.useContext)(r);r.Provider},6:function(e,t){e.exports=window.wp.blockEditor},60:function(e,t,c){"use strict";var n=c(5),r=c.n(n),o=c(0),l=c(4),a=c.n(l),s=c(3),i=c(9);c(87);class u extends o.Component{constructor(){super(...arguments),this.onClick=this.onClick.bind(this)}onClick(e){this.props.onChange&&this.props.onChange(e.target.value)}render(){const{label:e,checked:t,instanceId:c,className:n,help:l,options:i,value:u}=this.props,b="inspector-toggle-button-control-"+c;let p;return l&&(p="function"==typeof l?l(t):l),Object(o.createElement)(s.BaseControl,{id:b,help:p,className:a()("components-toggle-button-control",n)},Object(o.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},e),Object(o.createElement)(s.ButtonGroup,{"aria-labelledby":b+"__label"},i.map((t,c)=>{const n={};return u===t.value?(n.isPrimary=!0,n["aria-pressed"]=!0):(n.isSecondary=!0,n["aria-pressed"]=!1),Object(o.createElement)(s.Button,r()({key:`${t.label}-${t.value}-${c}`,value:t.value,onClick:this.onClick,"aria-label":e+": "+t.label},n),t.label)})))}}t.a=Object(i.withInstanceId)(u)},7:function(e,t){e.exports=window.lodash},78:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return p})),c.d(t,"c",(function(){return d}));var n=c(15),r=c(14),o=c(0),l=c(25),a=c.n(l),s=c(49),i=c(105),u=c(52);const b=e=>{const t=Object(u.a)();e=e||t;const c=Object(r.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:l}=Object(r.useDispatch)(n.QUERY_STATE_STORE_KEY);return[c,Object(o.useCallback)(t=>{l(e,t)},[e,l])]},p=(e,t,c)=>{const l=Object(u.a)();c=c||l;const a=Object(r.useSelect)(r=>r(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(c,e,t),[c,e]),{setQueryValue:s}=Object(r.useDispatch)(n.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{s(c,e,t)},[c,e,s])]},d=(e,t)=>{const c=Object(u.a)();t=t||c;const[n,r]=b(t),l=Object(s.a)(n),p=Object(s.a)(e),d=Object(i.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(d,p)||(r(Object.assign({},l,p)),m.current=!0)},[l,p,d,r]),m.current?[n,r]:[e,r]}},8:function(e,t){e.exports=window.React},87:function(e,t){},9:function(e,t){e.exports=window.wp.compose},98:function(e,t,c){"use strict";var n=c(0),r=c(7),o=c(1),l=c(3),a=c(11);function s(e){let{level:t}=e;const c={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return c.hasOwnProperty(t)?Object(n.createElement)(a.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(a.Path,{d:c[t]})):null}class i extends n.Component{createLevelControl(e,t,c){const r=e===t;return{icon:Object(n.createElement)(s,{level:e}),title:Object(o.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(o.__)("Heading %d","woo-gutenberg-products-block"),e),isActive:r,onClick:()=>c(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:c,selectedLevel:o,onChange:a}=this.props;return Object(n.createElement)(l.ToolbarGroup,{isCollapsed:e,icon:Object(n.createElement)(s,{level:o}),controls:Object(r.range)(t,c).map(e=>this.createLevelControl(e,o,a))})}}t.a=i}});
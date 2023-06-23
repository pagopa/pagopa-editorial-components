"use strict";(self.webpackChunk_pagopa_pagopa_editorial_components=self.webpackChunk_pagopa_pagopa_editorial_components||[]).push([[7584],{"./node_modules/@mui/material/Divider/Divider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_mui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),_dividerClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Divider/dividerClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],DividerRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.absolute&&styles.absolute,styles[ownerState.variant],ownerState.light&&styles.light,"vertical"===ownerState.orientation&&styles.vertical,ownerState.flexItem&&styles.flexItem,ownerState.children&&styles.withChildren,ownerState.children&&"vertical"===ownerState.orientation&&styles.withChildrenVertical,"right"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&styles.textAlignRight,"left"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&styles.textAlignLeft]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(theme.vars||theme).palette.divider,borderBottomWidth:"thin"},ownerState.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},ownerState.light&&{borderColor:theme.vars?`rgba(${theme.vars.palette.dividerChannel} / 0.08)`:(0,_mui_system__WEBPACK_IMPORTED_MODULE_6__.Fq)(theme.palette.divider,.08)},"inset"===ownerState.variant&&{marginLeft:72},"middle"===ownerState.variant&&"horizontal"===ownerState.orientation&&{marginLeft:theme.spacing(2),marginRight:theme.spacing(2)},"middle"===ownerState.variant&&"vertical"===ownerState.orientation&&{marginTop:theme.spacing(1),marginBottom:theme.spacing(1)},"vertical"===ownerState.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},ownerState.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},ownerState.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(theme.vars||theme).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},ownerState.children&&"vertical"===ownerState.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(theme.vars||theme).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},"right"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),DividerWrapper=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.wrapper,"vertical"===ownerState.orientation&&styles.wrapperVertical]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({display:"inline-block",paddingLeft:`calc(${theme.spacing(1)} * 1.2)`,paddingRight:`calc(${theme.spacing(1)} * 1.2)`},"vertical"===ownerState.orientation&&{paddingTop:`calc(${theme.spacing(1)} * 1.2)`,paddingBottom:`calc(${theme.spacing(1)} * 1.2)`}))),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Divider(inProps,ref){const props=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__.Z)({props:inProps,name:"MuiDivider"}),{absolute=!1,children,className,component=children?"div":"hr",flexItem=!1,light=!1,orientation="horizontal",role="hr"!==component?"separator":void 0,textAlign="center",variant="fullWidth"}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__.Z)(props,_excluded),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},props,{absolute,component,flexItem,light,orientation,role,textAlign,variant}),classes=(ownerState=>{const{absolute,children,classes,flexItem,light,orientation,textAlign,variant}=ownerState,slots={root:["root",absolute&&"absolute",variant,light&&"light","vertical"===orientation&&"vertical",flexItem&&"flexItem",children&&"withChildren",children&&"vertical"===orientation&&"withChildrenVertical","right"===textAlign&&"vertical"!==orientation&&"textAlignRight","left"===textAlign&&"vertical"!==orientation&&"textAlignLeft"],wrapper:["wrapper","vertical"===orientation&&"wrapperVertical"]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_2__.Z)(slots,_dividerClasses__WEBPACK_IMPORTED_MODULE_3__.V,classes)})(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({as:component,className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__.Z)(classes.root,className),role,ref,ownerState},other,{children:children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerWrapper,{className:classes.wrapper,ownerState,children}):null}))}))},"./node_modules/@mui/material/Divider/dividerClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>getDividerUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getDividerUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiDivider",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},"./node_modules/@mui/material/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Link_Link});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/material/utils/useIsFocusVisible.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiLink",slot)}const Link_linkClasses=(0,generateUtilityClasses.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var style=__webpack_require__("./node_modules/@mui/system/esm/style.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js");const colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Link_getTextDecoration=({theme,ownerState})=>{const transformedColor=(color=>colorTransformations[color]||color)(ownerState.color),color=(0,style.DW)(theme,`palette.${transformedColor}`,!1)||ownerState.color,channelColor=(0,style.DW)(theme,`palette.${transformedColor}Channel`);return"vars"in theme&&channelColor?`rgba(${channelColor} / 0.4)`:(0,colorManipulator.Fq)(color,.4)};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],LinkRoot=(0,styled.ZP)(Typography.Z,{name:"MuiLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`underline${(0,capitalize.Z)(ownerState.underline)}`],"button"===ownerState.component&&styles.button]}})((({theme,ownerState})=>(0,esm_extends.Z)({},"none"===ownerState.underline&&{textDecoration:"none"},"hover"===ownerState.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===ownerState.underline&&(0,esm_extends.Z)({textDecoration:"underline"},"inherit"!==ownerState.color&&{textDecorationColor:Link_getTextDecoration({theme,ownerState})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===ownerState.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Link_linkClasses.focusVisible}`]:{outline:"auto"}}))),Link_Link=react.forwardRef((function Link(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiLink"}),{className,color="primary",component="a",onBlur,onFocus,TypographyClasses,underline="always",variant="inherit",sx}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.Z)(),[focusVisible,setFocusVisible]=react.useState(!1),handlerRef=(0,useForkRef.Z)(ref,focusVisibleRef),ownerState=(0,esm_extends.Z)({},props,{color,component,focusVisible,underline,variant}),classes=(ownerState=>{const{classes,component,focusVisible,underline}=ownerState,slots={root:["root",`underline${(0,capitalize.Z)(underline)}`,"button"===component&&"button",focusVisible&&"focusVisible"]};return(0,composeClasses.Z)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(LinkRoot,(0,esm_extends.Z)({color,className:(0,clsx_m.Z)(classes.root,className),classes:TypographyClasses,component,onBlur:event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusVisible(!0),onFocus&&onFocus(event)},ref:handlerRef,ownerState,variant,sx:[...Object.keys(colorTransformations).includes(color)?[]:[{color}],...Array.isArray(sx)?sx:[sx]]},other))}))},"./node_modules/@mui/material/utils/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef.js").Z},"./node_modules/@mui/material/utils/useIsFocusVisible.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>utils_useIsFocusVisible});var react=__webpack_require__("./node_modules/react/index.js");let hadFocusVisibleRecentlyTimeout,hadKeyboardEvent=!0,hadFocusVisibleRecently=!1;const inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function handleKeyDown(event){event.metaKey||event.altKey||event.ctrlKey||(hadKeyboardEvent=!0)}function handlePointerDown(){hadKeyboardEvent=!1}function handleVisibilityChange(){"hidden"===this.visibilityState&&hadFocusVisibleRecently&&(hadKeyboardEvent=!0)}function isFocusVisible(event){const{target}=event;try{return target.matches(":focus-visible")}catch(error){}return hadKeyboardEvent||function focusTriggersKeyboardModality(node){const{type,tagName}=node;return!("INPUT"!==tagName||!inputTypesWhitelist[type]||node.readOnly)||"TEXTAREA"===tagName&&!node.readOnly||!!node.isContentEditable}(target)}const utils_useIsFocusVisible=function useIsFocusVisible(){const ref=react.useCallback((node=>{null!=node&&function prepare(doc){doc.addEventListener("keydown",handleKeyDown,!0),doc.addEventListener("mousedown",handlePointerDown,!0),doc.addEventListener("pointerdown",handlePointerDown,!0),doc.addEventListener("touchstart",handlePointerDown,!0),doc.addEventListener("visibilitychange",handleVisibilityChange,!0)}(node.ownerDocument)}),[]),isFocusVisibleRef=react.useRef(!1);return{isFocusVisibleRef,onFocus:function handleFocusVisible(event){return!!isFocusVisible(event)&&(isFocusVisibleRef.current=!0,!0)},onBlur:function handleBlurVisible(){return!!isFocusVisibleRef.current&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((()=>{hadFocusVisibleRecently=!1}),100),isFocusVisibleRef.current=!1,!0)},ref}}},"./node_modules/@mui/system/esm/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/esm/Container/createContainer.js").Z)()},"./node_modules/@mui/utils/esm/setRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}__webpack_require__.d(__webpack_exports__,{Z:()=>setRef})},"./node_modules/@mui/utils/esm/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useForkRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_setRef__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/setRef.js");function useForkRef(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>refs.every((ref=>null==ref))?null:instance=>{refs.forEach((ref=>{(0,_setRef__WEBPACK_IMPORTED_MODULE_1__.Z)(ref,instance)}))}),refs)}},"./src/stories/Linsting/light.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:()=>Standard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>light_stories});var Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),EContainer=__webpack_require__("./src/components/EContainer.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ListingItem=props=>{const{text,htmlTitle="",href,isLast=!1}=props;return(0,jsx_runtime.jsxs)(Box.Z,{mb:isLast?0:2,children:[href?(0,jsx_runtime.jsx)(Link.Z,{href,target:"_blank",mb:2,variant:"body2",fontWeight:600,title:htmlTitle,children:text}):(0,jsx_runtime.jsx)(Typography.Z,{fontWeight:600,mb:2,variant:"body2",title:htmlTitle,children:text}),(0,jsx_runtime.jsx)(Divider.Z,{sx:{marginTop:"16px"}})]})};ListingItem.displayName="ListingItem";const Listing=props=>{const{title,date:{preDate,date,locale,options},name="",items}=props;return(0,jsx_runtime.jsxs)(EContainer.Z,{py:4,background:"background.paper",direction:"column",children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"h5",mb:2,children:title}),(0,jsx_runtime.jsx)(Typography.Z,{color:"text.secondary",fontSize:12,fontWeight:600,mb:5,children:`${preDate} ${new Intl.DateTimeFormat(locale,options).format(date)}`}),(0,jsx_runtime.jsx)(Typography.Z,{color:"text.secondary",fontSize:14,fontWeight:700,mb:2,textTransform:"uppercase",children:name}),items.map(((props,i)=>(0,jsx_runtime.jsx)(ListingItem,{...props,isLast:items.length===i+1},`${props.text}-${i}`)))]})};Listing.displayName="Listing";const components_Listing=Listing;try{Listing.displayName="Listing",Listing.__docgenInfo={description:"",displayName:"Listing",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"{ preDate?: string | undefined; date: Date; locale?: string | undefined; options: DateTimeFormatOptions; }"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ListingItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Listing/index.tsx#Listing"]={docgenInfo:Listing.__docgenInfo,name:"Listing",path:"src/components/Listing/index.tsx#Listing"})}catch(__react_docgen_typescript_loader_error){}const light_stories={component:components_Listing,title:"Listing/light"},Template=args=>(0,jsx_runtime.jsx)(components_Listing,{...args});Template.displayName="Template";const Standard=Template.bind({});Standard.args={title:"Lorem ipsum",name:"Nome",date:{preDate:"Ultimo aggiornamento",date:new Date,locale:"it-IT",options:{day:"2-digit",month:"long",year:"numeric"}},items:[{text:"Lorem ipsum dolor sit amet, consectetuer asipscing elit",href:"https://google.it",htmlTitle:"vai al sito"},{text:"Lorem ipsum dolor sit amet, consectetuer asipscing elit"},{text:"Lorem ipsum dolor sit amet, consectetuer asipscing elit"},{text:"Lorem ipsum dolor sit amet, consectetuer asipscing elit"}]},Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:"args => <Listing {...args} />",...Standard.parameters?.docs?.source}}};const __namedExportsOrder=["Standard"]},"./src/components/EContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),_mui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/Container/Container.js"),_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const EContainer=props=>{const{alignItems,background,children,direction="row",py={},px,spacing,sx}=props,backgroundIsJSX=(0,_utils__WEBPACK_IMPORTED_MODULE_0__.MW)(background);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.Z,{component:"section",sx:{px:{xs:4},position:"relative",overflow:"hidden"},py,px,bgcolor:backgroundIsJSX?void 0:background,children:[backgroundIsJSX&&background,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Z,{maxWidth:"lg",disableGutters:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__.ZP,{container:!0,direction,spacing,alignItems,sx,children})})]})};EContainer.displayName="EContainer";const __WEBPACK_DEFAULT_EXPORT__=EContainer;try{EContainer.displayName="EContainer",EContainer.__docgenInfo={description:"",displayName:"EContainer",props:{alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string | Element"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveStyleValue<GridDirection>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EContainer.tsx#EContainer"]={docgenInfo:EContainer.__docgenInfo,name:"EContainer",path:"src/components/EContainer.tsx#EContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MW:()=>isJSX,Or:()=>useIsVisible,dx:()=>hrefNoOp});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const isJSX=arg=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(arg);function useIsVisible(ref){const[isIntersecting,setIntersecting]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const observer=new IntersectionObserver((([entry])=>{setIntersecting(entry.isIntersecting)}));return ref.current&&observer.observe(ref.current),()=>{observer.disconnect()}}),[ref]),isIntersecting}const hrefNoOp="javascript:void(0)"}}]);
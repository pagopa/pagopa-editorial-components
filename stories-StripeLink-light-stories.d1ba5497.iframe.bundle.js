"use strict";(self.webpackChunk_pagopa_pagopa_editorial_components=self.webpackChunk_pagopa_pagopa_editorial_components||[]).push([[7894],{"./src/stories/StripeLink/light.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithoutButtonText:()=>WithoutButtonText,WithoutIcon:()=>WithoutIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_StripeLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/StripeLink.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"StripeLink/light",component:_components_StripeLink__WEBPACK_IMPORTED_MODULE_0__.Z,args:{theme:"light",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim massa nec velit ultrices porta vel suscipit nunc. ",icon:{icon:"VolunteerActivism",color:"white"},buttonText:"Donate"}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_StripeLink__WEBPACK_IMPORTED_MODULE_0__.Z,{...args});Template.displayName="Template";const Default=Template.bind({}),WithoutIcon=Template.bind({});WithoutIcon.args={...Default.args,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{})};const WithoutButtonText=Template.bind({});WithoutButtonText.args={...Default.args,buttonText:""},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <StripeLink {...args} />",...Default.parameters?.docs?.source}}},WithoutIcon.parameters={...WithoutIcon.parameters,docs:{...WithoutIcon.parameters?.docs,source:{originalSource:"args => <StripeLink {...args} />",...WithoutIcon.parameters?.docs?.source}}},WithoutButtonText.parameters={...WithoutButtonText.parameters,docs:{...WithoutButtonText.parameters?.docs,source:{originalSource:"args => <StripeLink {...args} />",...WithoutButtonText.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithoutIcon","WithoutButtonText"]},"./src/components/EContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),_mui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/Container/Container.js"),_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const EContainer=props=>{const{alignItems,background,children,direction="row",py={},px,spacing,sx}=props,backgroundIsJSX=(0,_utils__WEBPACK_IMPORTED_MODULE_0__.MW)(background);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.Z,{component:"section",sx:{px:{xs:4},position:"relative",overflow:"hidden"},py,px,bgcolor:backgroundIsJSX?void 0:background,children:[backgroundIsJSX&&background,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Z,{maxWidth:"lg",disableGutters:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__.ZP,{container:!0,direction,spacing,alignItems,sx,children})})]})};EContainer.displayName="EContainer";const __WEBPACK_DEFAULT_EXPORT__=EContainer;try{EContainer.displayName="EContainer",EContainer.__docgenInfo={description:"",displayName:"EContainer",props:{alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string | Element"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveStyleValue<GridDirection>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EContainer.tsx#EContainer"]={docgenInfo:EContainer.__docgenInfo,name:"EContainer",path:"src/components/EContainer.tsx#EContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/EIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>EIcon});var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/icons-material/esm/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const EIcon=props=>{const IconWrapper=({icon,...rest})=>{if((0,_utils__WEBPACK_IMPORTED_MODULE_0__.MW)(icon))return react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(icon,{...rest,...icon.props});const Icon=icon&&_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__[icon];return Icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{...rest,color:"inherit"}):null};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{color:props?.color??"inherit",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconWrapper,{...props})})};EIcon.displayName="EIcon";try{EIcon.displayName="EIcon",EIcon.__docgenInfo={description:"",displayName:"EIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:'Element | "Abc" | "AbcOutlined" | "AbcRounded" | "AbcSharp" | "AbcTwoTone" | "AccessAlarm" | "AccessAlarmOutlined" | "AccessAlarmRounded" | "AccessAlarms" | "AccessAlarmSharp" | ... 10544 more ...'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<SvgIconClasses> & Partial<ClassNameMap<never>>)"}},children:{defaultValue:null,description:"Node passed into the SVG element.",name:"children",required:!1,type:{name:"ReactNode"}},fontSize:{defaultValue:{value:"'medium'"},description:"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"inherit"'},{value:'"large"'},{value:'"medium"'}]}},htmlColor:{defaultValue:null,description:"Applies a color attribute to the SVG element.",name:"htmlColor",required:!1,type:{name:"string"}},inheritViewBox:{defaultValue:{value:"false"},description:"If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`\nprop will be ignored.\nUseful when you want to reference a custom `component` and have `SvgIcon` pass that\n`component`'s viewBox to the root node.",name:"inheritViewBox",required:!1,type:{name:"boolean"}},shapeRendering:{defaultValue:null,description:"The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this prop.",name:"shapeRendering",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},titleAccess:{defaultValue:null,description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent",name:"titleAccess",required:!1,type:{name:"string"}},viewBox:{defaultValue:{value:"'0 0 24 24'"},description:'Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox="0 0 50 20",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.',name:"viewBox",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EIcon.tsx#EIcon"]={docgenInfo:EIcon.__docgenInfo,name:"EIcon",path:"src/components/EIcon.tsx#EIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/StripeLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/icons-material/ArrowForward.js"),_EContainer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/EContainer.tsx"),_EIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/EIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StripeLink=props=>{const{icon,subtitle,theme,buttonText}=props,themeStyle="light"===theme?"primary.main":"background.paper",themeStyleBg="light"===theme?"primary.main":"text.primary",bgButton="light"===theme?"background.paper":"primary.main";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_EContainer__WEBPACK_IMPORTED_MODULE_0__.Z,{background:themeStyleBg,py:2,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ZP,{item:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{direction:{md:"row",xs:"column"},justifyContent:{md:"flex-start"},spacing:3,alignItems:{md:"center",xs:"flex-start"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_EIcon__WEBPACK_IMPORTED_MODULE_1__.R,{...icon,sx:{display:{md:"flex",xs:"none"},visibility:{md:"visible",xs:"hidden"}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{variant:"body2",color:"background.paper",children:subtitle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{variant:"contained",size:"small",sx:{backgroundColor:bgButton,color:themeStyle,":hover":{backgroundColor:bgButton}},endIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_7__.Z,{color:"inherit"}),children:buttonText})]})})})};StripeLink.displayName="StripeLink";const __WEBPACK_DEFAULT_EXPORT__=StripeLink;try{StripeLink.displayName="StripeLink",StripeLink.__docgenInfo={description:"",displayName:"StripeLink",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string | Element"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"EIconProps"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StripeLink.tsx#StripeLink"]={docgenInfo:StripeLink.__docgenInfo,name:"StripeLink",path:"src/components/StripeLink.tsx#StripeLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MW:()=>isJSX,Or:()=>useIsVisible,dx:()=>hrefNoOp});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const isJSX=arg=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(arg);function useIsVisible(ref){const[isIntersecting,setIntersecting]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const observer=new IntersectionObserver((([entry])=>{setIntersecting(entry.isIntersecting)}));return ref.current&&observer.observe(ref.current),()=>{observer.disconnect()}}),[ref]),isIntersecting}const hrefNoOp="javascript:void(0)"}}]);
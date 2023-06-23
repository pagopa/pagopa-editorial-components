"use strict";(self.webpackChunk_pagopa_pagopa_editorial_components=self.webpackChunk_pagopa_pagopa_editorial_components||[]).push([[8430],{"./node_modules/@mui/material/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/Stack/createStack.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.Z)({createStyledComponent:(0,_styles_styled__WEBPACK_IMPORTED_MODULE_1__.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root}),useThemeProps:inProps=>(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_2__.Z)({props:inProps,name:"MuiStack"})})},"./node_modules/@mui/system/esm/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/esm/Container/createContainer.js").Z)()},"./node_modules/@mui/system/esm/Stack/createStack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createStack});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),_styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/styled.js"),_useThemeProps__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_createTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),_breakpoints__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),_spacing__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","direction","spacing","divider","children","className"],defaultTheme=(0,_createTheme__WEBPACK_IMPORTED_MODULE_2__.Z)(),defaultCreateStyledComponent=(0,_styled__WEBPACK_IMPORTED_MODULE_3__.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root});function useThemePropsDefault(props){return(0,_useThemeProps__WEBPACK_IMPORTED_MODULE_4__.Z)({props,name:"MuiStack",defaultTheme})}function joinChildren(children,separator){const childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const style=({ownerState,theme})=>{let styles=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({display:"flex",flexDirection:"column"},(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.k9)({theme},(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,_spacing__WEBPACK_IMPORTED_MODULE_7__.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.P$)({values:ownerState.direction,base}),spacingValues=(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,_spacing__WEBPACK_IMPORTED_MODULE_7__.NA)(transformer,propValue)}};var direction};styles=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_8__.Z)(styles,(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.k9)({theme},spacingValues,styleFromPropValue))}return styles=(0,_breakpoints__WEBPACK_IMPORTED_MODULE_6__.dt)(theme.breakpoints,styles),styles};function createStack(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiStack"}=options,StackRoot=createStyledComponent(style);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Grid(inProps,ref){const themeProps=useThemeProps(inProps),props=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_11__.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children,className}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_12__.Z)(props,_excluded),ownerState={direction,spacing},classes=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_9__.Z)({root:["root"]},(slot=>(0,_mui_utils__WEBPACK_IMPORTED_MODULE_10__.Z)(componentName,slot)),{});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StackRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({as:component,ownerState,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_13__.Z)(classes.root,className)},other,{children:divider?joinChildren(children,divider):children}))}))}},"./src/stories/Abstract/light.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomBodyAndBackground:()=>CustomBodyAndBackground,WithBackground:()=>WithBackground,WithoutBackground:()=>WithoutBackground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_Abstract__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Abstract/index.ts"),_abstractCommons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Abstract/abstractCommons.tsx"),_assets_abstract_image_jpeg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/assets/abstract_image.jpeg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Abstract/light",component:_components_Abstract__WEBPACK_IMPORTED_MODULE_0__.$,args:_abstractCommons__WEBPACK_IMPORTED_MODULE_1__.Pg},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Abstract__WEBPACK_IMPORTED_MODULE_0__.$,{...args,theme:"light"});Template.displayName="Template";const WithoutBackground=Template.bind({}),WithBackground=Template.bind({});WithBackground.args={background:_assets_abstract_image_jpeg__WEBPACK_IMPORTED_MODULE_2__};const CustomBodyAndBackground=Template.bind({});CustomBodyAndBackground.args={description:_abstractCommons__WEBPACK_IMPORTED_MODULE_1__.J0,background:_abstractCommons__WEBPACK_IMPORTED_MODULE_1__.VZ},WithoutBackground.parameters={...WithoutBackground.parameters,docs:{...WithoutBackground.parameters?.docs,source:{originalSource:'args => {\n  return <Abstract {...args} theme="light" />;\n}',...WithoutBackground.parameters?.docs?.source}}},WithBackground.parameters={...WithBackground.parameters,docs:{...WithBackground.parameters?.docs,source:{originalSource:'args => {\n  return <Abstract {...args} theme="light" />;\n}',...WithBackground.parameters?.docs?.source}}},CustomBodyAndBackground.parameters={...CustomBodyAndBackground.parameters,docs:{...CustomBodyAndBackground.parameters?.docs,source:{originalSource:'args => {\n  return <Abstract {...args} theme="light" />;\n}',...CustomBodyAndBackground.parameters?.docs?.source}}};const __namedExportsOrder=["WithoutBackground","WithBackground","CustomBodyAndBackground"]},"./src/components/Abstract/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Abstract});var Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),EContainer=__webpack_require__("./src/components/EContainer.tsx"),utils=__webpack_require__("./src/utils/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Abstract=({overline,title,description,theme,background,layout="left"})=>{const textColor="dark"===theme?"background.paper":"text.primary",overlay="dark"===theme?"linear-gradient(76.77deg, rgba(0, 115, 230, 0.7) 40.28%, rgba(0, 115, 230, 0) 100%), ":"linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), ",backgroundColor="dark"===theme?"primary.dark":"background.paper",eyeletColor="dark"===theme?"background.paper":"text.secondary",BackgroundImage=(0,utils.MW)(background)?background:(0,jsx_runtime.jsx)(Box.Z,{role:"presentation",sx:{px:{xs:4},position:"absolute",inset:0,zIndex:-10,height:"100%",width:"100%",objectFit:"cover",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:`${overlay}url(${background??""})`}}),{spacing}=(0,useTheme.Z)();return(0,jsx_runtime.jsx)(EContainer.Z,{background:background?BackgroundImage:backgroundColor,sx:{height:{lg:spacing(66)}},children:(0,jsx_runtime.jsx)(Stack.Z,{py:spacing(10),px:{sm:spacing(2)},width:"100%",justifyContent:"center",alignItems:{center:"center",right:"flex-end",left:"flex-start"}[layout],children:(0,jsx_runtime.jsxs)(Typography.Z,{display:"flex",flexDirection:"column",maxWidth:spacing(70),textAlign:layout,color:textColor,gap:spacing(2),children:[(0,jsx_runtime.jsx)(Typography.Z,{color:eyeletColor,variant:"overline",children:overline}),(0,jsx_runtime.jsx)(Typography.Z,{color:textColor,variant:"h4",children:title}),(0,jsx_runtime.jsx)(Typography.Z,{component:"string"==typeof description?"p":"div",color:textColor,variant:"body1",children:description})]})})})};Abstract.displayName="Abstract";try{Abstract.displayName="Abstract",Abstract.__docgenInfo={description:"",displayName:"Abstract",props:{overline:{defaultValue:null,description:"",name:"overline",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string | Element"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string | Element"}},layout:{defaultValue:{value:"left"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Abstract/Abstract.tsx#Abstract"]={docgenInfo:Abstract.__docgenInfo,name:"Abstract",path:"src/components/Abstract/Abstract.tsx#Abstract"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/EContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),_mui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/Container/Container.js"),_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const EContainer=props=>{const{alignItems,background,children,direction="row",py={},px,spacing,sx}=props,backgroundIsJSX=(0,_utils__WEBPACK_IMPORTED_MODULE_0__.MW)(background);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.Z,{component:"section",sx:{px:{xs:4},position:"relative",overflow:"hidden"},py,px,bgcolor:backgroundIsJSX?void 0:background,children:[backgroundIsJSX&&background,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Z,{maxWidth:"lg",disableGutters:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__.ZP,{container:!0,direction,spacing,alignItems,sx,children})})]})};EContainer.displayName="EContainer";const __WEBPACK_DEFAULT_EXPORT__=EContainer;try{EContainer.displayName="EContainer",EContainer.__docgenInfo={description:"",displayName:"EContainer",props:{alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string | Element"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveStyleValue<GridDirection>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EContainer.tsx#EContainer"]={docgenInfo:EContainer.__docgenInfo,name:"EContainer",path:"src/components/EContainer.tsx#EContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Abstract/abstractCommons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J0:()=>descriptionComponent,Kb:()=>imageComponentDark,Pg:()=>defaultValues,VZ:()=>imageComponent});var _assets_abstract_image_jpeg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/assets/abstract_image.jpeg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const descriptionComponent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:"Excepteur sint"})," obcaecat cupiditat non proident, sunt in culpa qui officia ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{children:"deserunt mollit anim"})," id est laborum."]}),imageComponent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:"flex",width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"absolute",zIndex:-1,height:"600px",width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_abstract_image_jpeg__WEBPACK_IMPORTED_MODULE_0__,style:{zIndex:-2,opacity:.3}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{children:"Custom Label"})]}),imageComponentDark=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:"flex",width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"absolute",zIndex:-1,height:"600px",width:"100%",backgroundColor:"darkblue",opacity:.5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_abstract_image_jpeg__WEBPACK_IMPORTED_MODULE_0__,style:{zIndex:-2,opacity:.3}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{children:"Custom Label"})]}),defaultValues={overline:"Per i cittadini",title:"Lorem ipsum dolor sit amet, consectetur",description:"Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",layout:"left"}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MW:()=>isJSX,Or:()=>useIsVisible,dx:()=>hrefNoOp});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const isJSX=arg=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(arg);function useIsVisible(ref){const[isIntersecting,setIntersecting]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const observer=new IntersectionObserver((([entry])=>{setIntersecting(entry.isIntersecting)}));return ref.current&&observer.observe(ref.current),()=>{observer.disconnect()}}),[ref]),isIntersecting}const hrefNoOp="javascript:void(0)"},"./src/stories/assets/abstract_image.jpeg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/abstract_image.c666cd96.jpeg"}}]);
"use strict";(self.webpackChunk_pagopa_pagopa_editorial_components=self.webpackChunk_pagopa_pagopa_editorial_components||[]).push([[4142],{"./src/stories/HowTo/light.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoIcons:()=>NoIcons,WithBottomLink:()=>WithBottomLink,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_HowTo__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/HowTo/index.ts"),_howToCommons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/HowTo/howToCommons.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"HowTo/light",component:_components_HowTo__WEBPACK_IMPORTED_MODULE_0__.K,argTypes:{title:{control:"text",defaultValue:"Come funziona"},rowMaxSteps:{control:{type:"number",min:1,step:1},defaultValue:4},stepsAlignment:{control:{type:"inline-radio"},defaultValue:"center",options:["left","center","right"]}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_HowTo__WEBPACK_IMPORTED_MODULE_0__.K,{...args,theme:"light"});Template.displayName="Template";const WithIcons=args=>{const steps=(0,_howToCommons__WEBPACK_IMPORTED_MODULE_1__.I)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Template,{...args,steps})};WithIcons.displayName="WithIcons";const NoIcons=args=>{const steps=(0,_howToCommons__WEBPACK_IMPORTED_MODULE_1__.I)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Template,{...args,steps})};NoIcons.displayName="NoIcons";const WithBottomLink=args=>{const steps=(0,_howToCommons__WEBPACK_IMPORTED_MODULE_1__.I)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Template,{...args,steps,link:_howToCommons__WEBPACK_IMPORTED_MODULE_1__.a})};WithBottomLink.displayName="WithBottomLink",WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:"(args: HowToProps) => {\n  const steps = getSteps(true);\n  return <Template {...args} steps={steps} />;\n}",...WithIcons.parameters?.docs?.source}}},NoIcons.parameters={...NoIcons.parameters,docs:{...NoIcons.parameters?.docs,source:{originalSource:"(args: HowToProps) => {\n  const steps = getSteps(false);\n  return <Template {...args} steps={steps} />;\n}",...NoIcons.parameters?.docs?.source}}},WithBottomLink.parameters={...WithBottomLink.parameters,docs:{...WithBottomLink.parameters?.docs,source:{originalSource:"(args: HowToProps) => {\n  const steps = getSteps(false);\n  return <Template {...args} steps={steps} link={howToLink} />;\n}",...WithBottomLink.parameters?.docs?.source}}};const __namedExportsOrder=["WithIcons","NoIcons","WithBottomLink"];try{WithIcons.displayName="WithIcons",WithIcons.__docgenInfo={description:"",displayName:"WithIcons",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Step[]"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"{ href: string; label: string; target?: HTMLAttributeAnchorTarget; }"}},rowMaxSteps:{defaultValue:null,description:"",name:"rowMaxSteps",required:!1,type:{name:"number"}},stepsAlignment:{defaultValue:null,description:"",name:"stepsAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/HowTo/light.stories.tsx#WithIcons"]={docgenInfo:WithIcons.__docgenInfo,name:"WithIcons",path:"src/stories/HowTo/light.stories.tsx#WithIcons"})}catch(__react_docgen_typescript_loader_error){}try{NoIcons.displayName="NoIcons",NoIcons.__docgenInfo={description:"",displayName:"NoIcons",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Step[]"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"{ href: string; label: string; target?: HTMLAttributeAnchorTarget; }"}},rowMaxSteps:{defaultValue:null,description:"",name:"rowMaxSteps",required:!1,type:{name:"number"}},stepsAlignment:{defaultValue:null,description:"",name:"stepsAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/HowTo/light.stories.tsx#NoIcons"]={docgenInfo:NoIcons.__docgenInfo,name:"NoIcons",path:"src/stories/HowTo/light.stories.tsx#NoIcons"})}catch(__react_docgen_typescript_loader_error){}try{WithBottomLink.displayName="WithBottomLink",WithBottomLink.__docgenInfo={description:"",displayName:"WithBottomLink",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Step[]"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"{ href: string; label: string; target?: HTMLAttributeAnchorTarget; }"}},rowMaxSteps:{defaultValue:null,description:"",name:"rowMaxSteps",required:!1,type:{name:"number"}},stepsAlignment:{defaultValue:null,description:"",name:"stepsAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/HowTo/light.stories.tsx#WithBottomLink"]={docgenInfo:WithBottomLink.__docgenInfo,name:"WithBottomLink",path:"src/stories/HowTo/light.stories.tsx#WithBottomLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/EContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),_mui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/Container/Container.js"),_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const EContainer=props=>{const{alignItems,background,children,direction="row",py={},px,spacing,sx}=props,backgroundIsJSX=(0,_utils__WEBPACK_IMPORTED_MODULE_0__.MW)(background);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.Z,{component:"section",sx:{px:{xs:4},position:"relative",overflow:"hidden"},py,px,bgcolor:backgroundIsJSX?void 0:background,children:[backgroundIsJSX&&background,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Z,{maxWidth:"lg",disableGutters:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__.ZP,{container:!0,direction,spacing,alignItems,sx,children})})]})};EContainer.displayName="EContainer";const __WEBPACK_DEFAULT_EXPORT__=EContainer;try{EContainer.displayName="EContainer",EContainer.__docgenInfo={description:"",displayName:"EContainer",props:{alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string | Element"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveStyleValue<GridDirection>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EContainer.tsx#EContainer"]={docgenInfo:EContainer.__docgenInfo,name:"EContainer",path:"src/components/EContainer.tsx#EContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/EIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>EIcon});var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/icons-material/esm/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const EIcon=props=>{const IconWrapper=({icon,...rest})=>{if((0,_utils__WEBPACK_IMPORTED_MODULE_0__.MW)(icon))return react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(icon,{...rest,...icon.props});const Icon=icon&&_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__[icon];return Icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{...rest,color:"inherit"}):null};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{color:props?.color??"inherit",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconWrapper,{...props})})};EIcon.displayName="EIcon";try{EIcon.displayName="EIcon",EIcon.__docgenInfo={description:"",displayName:"EIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:'Element | "Abc" | "AbcOutlined" | "AbcRounded" | "AbcSharp" | "AbcTwoTone" | "AccessAlarm" | "AccessAlarmOutlined" | "AccessAlarmRounded" | "AccessAlarms" | "AccessAlarmSharp" | ... 10544 more ...'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<SvgIconClasses> & Partial<ClassNameMap<never>>)"}},children:{defaultValue:null,description:"Node passed into the SVG element.",name:"children",required:!1,type:{name:"ReactNode"}},fontSize:{defaultValue:{value:"'medium'"},description:"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"inherit"'},{value:'"large"'},{value:'"medium"'}]}},htmlColor:{defaultValue:null,description:"Applies a color attribute to the SVG element.",name:"htmlColor",required:!1,type:{name:"string"}},inheritViewBox:{defaultValue:{value:"false"},description:"If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`\nprop will be ignored.\nUseful when you want to reference a custom `component` and have `SvgIcon` pass that\n`component`'s viewBox to the root node.",name:"inheritViewBox",required:!1,type:{name:"boolean"}},shapeRendering:{defaultValue:null,description:"The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this prop.",name:"shapeRendering",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},titleAccess:{defaultValue:null,description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent",name:"titleAccess",required:!1,type:{name:"string"}},viewBox:{defaultValue:{value:"'0 0 24 24'"},description:'Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox="0 0 50 20",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.',name:"viewBox",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EIcon.tsx#EIcon"]={docgenInfo:EIcon.__docgenInfo,name:"EIcon",path:"src/components/EIcon.tsx#EIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/HowTo/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>HowTo});__webpack_require__("./node_modules/react/index.js");var Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js");const how_to_background_dark_namespaceObject=__webpack_require__.p+"static/media/how-to-background-dark.e51486b5.jpeg",how_to_background_light_namespaceObject=__webpack_require__.p+"static/media/how-to-background-light.857af9ed.jpeg";var EIcon=__webpack_require__("./src/components/EIcon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HowToStep=({index,stepIcon,title,description,theme,isLastStep})=>{const isDarkTheme="dark"===theme,stepNum=index+1;return(0,jsx_runtime.jsxs)(Stack.Z,{spacing:1,component:"article",children:[stepIcon&&(0,jsx_runtime.jsxs)(Stack.Z,{spacing:1.2,children:[(0,jsx_runtime.jsx)(Typography.Z,{color:isDarkTheme?"white":"primary",sx:{opacity:.6},variant:"overline",children:`0${stepNum}`}),(0,jsx_runtime.jsxs)(Stack.Z,{justifyContent:"space-between",alignItems:"center",direction:"row",color:isDarkTheme?"white":void 0,children:[(0,jsx_runtime.jsx)(EIcon.R,{icon:stepIcon.icon,...stepIcon}),!isLastStep&&(0,jsx_runtime.jsx)(Box.Z,{sx:{opacity:.6,transform:{xs:"rotate(90deg)",md:"none"}},children:(0,jsx_runtime.jsx)(ArrowIcon,{color:isDarkTheme?"white":"#0062c3"})})]})]}),!stepIcon&&(0,jsx_runtime.jsx)(Typography.Z,{color:isDarkTheme?"white":"primary",variant:"h6",component:"p",children:`0${stepNum}`}),(0,jsx_runtime.jsx)(Typography.Z,{color:isDarkTheme?"white":"text.primary",variant:"h5",component:"p",children:title}),"string"==typeof description?(0,jsx_runtime.jsx)(Typography.Z,{color:isDarkTheme?"white":"text.primary",variant:"body2",children:description}):(0,jsx_runtime.jsx)(Box.Z,{color:isDarkTheme?"white":"text.primary",children:description})]})};HowToStep.displayName="HowToStep";const ArrowIcon=({color="none"})=>(0,jsx_runtime.jsx)("svg",{"aria-hidden":"true",fill:"none",height:"24",viewBox:"0 0 44 24",width:"44",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{clipRule:"evenodd",d:"m31.5429 1.04289c.3905-.39052 1.0237-.39052 1.4142 0l10.25 10.25001c.1953.1953.2929.4512.2929.7071s-.0976.5118-.2929.7071l-10.25 10.25c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l8.5429-8.5429h-38.5858c-.552284 0-1-.4477-1-1s.447716-1 1-1h38.5858l-8.5429-8.5429c-.3905-.39051-.3905-1.02369 0-1.41421z",fill:color,fillRule:"evenodd"})});ArrowIcon.displayName="ArrowIcon";try{HowToStep.displayName="HowToStep",HowToStep.__docgenInfo={description:"",displayName:"HowToStep",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},isLastStep:{defaultValue:null,description:"",name:"isLastStep",required:!0,type:{name:"boolean"}},stepIcon:{defaultValue:null,description:"",name:"stepIcon",required:!1,type:{name:"EIconProps"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string | Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HowTo/HowToStep.tsx#HowToStep"]={docgenInfo:HowToStep.__docgenInfo,name:"HowToStep",path:"src/components/HowTo/HowToStep.tsx#HowToStep"})}catch(__react_docgen_typescript_loader_error){}var ArrowForward=__webpack_require__("./node_modules/@mui/icons-material/ArrowForward.js"),EContainer=__webpack_require__("./src/components/EContainer.tsx");const HowTo=props=>{const{title,steps,theme,link,rowMaxSteps=4,stepsAlignment="center"}=props,isDarkTheme="dark"===theme,background=isDarkTheme?how_to_background_dark_namespaceObject:how_to_background_light_namespaceObject,alignment={center:"center",left:"start",right:"end"}[stepsAlignment],stepsRows=((steps,rowMaxSteps)=>{const numSteps=steps.length;return new Array(Math.ceil(numSteps/rowMaxSteps)).fill(void 0).map(((_,i)=>steps.slice(i*rowMaxSteps,i*rowMaxSteps+rowMaxSteps)))})(steps,rowMaxSteps),Background=(0,jsx_runtime.jsx)(Box.Z,{component:"img",role:"presentation",loading:"lazy",sx:{position:"absolute",inset:0,zIndex:-10,height:"100%",width:"100%",objectFit:"cover"},src:background});return(0,jsx_runtime.jsxs)(EContainer.Z,{background:Background,py:{xs:6,md:8},children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,children:(0,jsx_runtime.jsx)(Typography.Z,{color:isDarkTheme?"white":"text.primary",sx:{textAlign:"center",mb:8},variant:"h4",children:title})}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,children:[stepsRows.map(((stepRow,i)=>(0,jsx_runtime.jsx)(Stack.Z,{direction:{md:"row"},justifyContent:alignment,spacing:{xs:4,md:8},sx:{mt:i>0?{xs:4,md:8}:0},children:stepRow.map(((step,j)=>(0,jsx_runtime.jsx)(Box.Z,{flex:.25,children:(0,jsx_runtime.jsx)(HowToStep,{index:i*rowMaxSteps+j,theme,isLastStep:i*rowMaxSteps+j===steps.length-1,...step})},j)))},i))),link&&(0,jsx_runtime.jsxs)(Link.Z,{sx:{display:"flex",alignItems:"center",mt:6},href:link.href,target:link.target,color:isDarkTheme?"white":"primary",underline:"none",fontWeight:600,children:[link.label,(0,jsx_runtime.jsx)(ArrowForward.Z,{sx:{ml:1,mt:.5},fontSize:"small","aria-hidden":"true"})]})]})]})};HowTo.displayName="HowTo";try{HowTo.displayName="HowTo",HowTo.__docgenInfo={description:"",displayName:"HowTo",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Step[]"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"{ href: string; label: string; target?: HTMLAttributeAnchorTarget; }"}},rowMaxSteps:{defaultValue:null,description:"",name:"rowMaxSteps",required:!1,type:{name:"number"}},stepsAlignment:{defaultValue:null,description:"",name:"stepsAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HowTo/HowTo.tsx#HowTo"]={docgenInfo:HowTo.__docgenInfo,name:"HowTo",path:"src/components/HowTo/HowTo.tsx#HowTo"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/HowTo/howToCommons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>getSteps,a:()=>howToLink});var _mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/icons-material/AccountBalance.js");const icon={stepIcon:{icon:(0,__webpack_require__("./node_modules/react/jsx-runtime.js").jsx)(_mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_1__.Z,{fontSize:"large"})}},getSteps=withIcons=>[{...withIcons?icon:{},title:"Sicuro",description:"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. "},{...withIcons?icon:{},title:"Un risparmio di denaro per tutti: cittadini, imprese ed enti ",description:"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. "},{...withIcons?icon:{},title:"I tempi di attesa tra l’invio e la ricezione delle notifiche spariscono",description:"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. "},{...withIcons?icon:{},title:"La CO2 emessa per erogare il servizio diminuisce sensibilmente",description:"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid ex ea commodi consequat. "}],howToLink={href:"#",label:"See more"};try{getSteps.displayName="getSteps",getSteps.__docgenInfo={description:"",displayName:"getSteps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/HowTo/howToCommons.tsx#getSteps"]={docgenInfo:getSteps.__docgenInfo,name:"getSteps",path:"src/stories/HowTo/howToCommons.tsx#getSteps"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MW:()=>isJSX,Or:()=>useIsVisible,dx:()=>hrefNoOp});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const isJSX=arg=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(arg);function useIsVisible(ref){const[isIntersecting,setIntersecting]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const observer=new IntersectionObserver((([entry])=>{setIntersecting(entry.isIntersecting)}));return ref.current&&observer.observe(ref.current),()=>{observer.disconnect()}}),[ref]),isIntersecting}const hrefNoOp="javascript:void(0)"}}]);
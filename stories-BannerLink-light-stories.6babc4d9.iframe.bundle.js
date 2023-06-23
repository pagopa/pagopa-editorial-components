"use strict";(self.webpackChunk_pagopa_pagopa_editorial_components=self.webpackChunk_pagopa_pagopa_editorial_components||[]).push([[1395],{"./src/stories/BannerLink/light.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BodyComponent:()=>BodyComponent,CustomDecorator:()=>CustomDecorator,OneButton:()=>OneButton,Standard:()=>Standard,TwoButtons:()=>TwoButtons,TwoButtonsAndIcon:()=>TwoButtonsAndIcon,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>light_stories});var BannerLink=__webpack_require__("./src/components/BannerLink/index.ts"),defaults=__webpack_require__("./src/stories/BannerLink/defaults.tsx");const login_namespaceObject=__webpack_require__.p+"static/media/login.9efd608a.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const light_stories={component:BannerLink.B,title:"BannerLink/light",argTypes:{},args:defaults.c.args},Template=args=>(0,jsx_runtime.jsx)(BannerLink.B,{...args});Template.displayName="Template";const Standard=Template.bind({}),OneButton=Template.bind({});OneButton.args={ctaButtons:[{color:"primary",variant:"outlined",text:"LEGGI LE FAQ",onClick:()=>{alert("LEGGI LE FAQ")}}]};const TwoButtons=Template.bind({});TwoButtons.args={ctaButtons:defaults.c.ctaButtons};const WithIcon=Template.bind({});WithIcon.args={decoration:{src:login_namespaceObject,alt:"Login"}};const TwoButtonsAndIcon=Template.bind({});TwoButtonsAndIcon.args={decoration:{src:login_namespaceObject,alt:"Login"},ctaButtons:defaults.c.ctaButtons};const BodyComponent=Template.bind({});BodyComponent.args={body:defaults.c.body,ctaButtons:defaults.c.ctaButtons};const CustomDecorator=Template.bind({});CustomDecorator.args={body:defaults.c.body,ctaButtons:defaults.c.ctaButtons,decoration:(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#0073E6",width:"100px",height:"100px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"32px",color:"white"},children:"PA"})},Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:"args => <BannerLink {...args} />",...Standard.parameters?.docs?.source}}},OneButton.parameters={...OneButton.parameters,docs:{...OneButton.parameters?.docs,source:{originalSource:"args => <BannerLink {...args} />",...OneButton.parameters?.docs?.source}}},TwoButtons.parameters={...TwoButtons.parameters,docs:{...TwoButtons.parameters?.docs,source:{originalSource:"args => <BannerLink {...args} />",...TwoButtons.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"args => <BannerLink {...args} />",...WithIcon.parameters?.docs?.source}}},TwoButtonsAndIcon.parameters={...TwoButtonsAndIcon.parameters,docs:{...TwoButtonsAndIcon.parameters?.docs,source:{originalSource:"args => <BannerLink {...args} />",...TwoButtonsAndIcon.parameters?.docs?.source}}},BodyComponent.parameters={...BodyComponent.parameters,docs:{...BodyComponent.parameters?.docs,source:{originalSource:"args => <BannerLink {...args} />",...BodyComponent.parameters?.docs?.source}}},CustomDecorator.parameters={...CustomDecorator.parameters,docs:{...CustomDecorator.parameters?.docs,source:{originalSource:"args => <BannerLink {...args} />",...CustomDecorator.parameters?.docs?.source}}};const __namedExportsOrder=["Standard","OneButton","TwoButtons","WithIcon","TwoButtonsAndIcon","BodyComponent","CustomDecorator"]},"./src/components/BannerLink/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>BannerLink});var useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Ctas=__webpack_require__("./src/components/Ctas.tsx"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Content=({title,body,theme})=>{const{palette,spacing}=(0,useTheme.Z)(),textColor="dark"===theme?palette.primary.contrastText:palette.text.primary;return(0,jsx_runtime.jsxs)(Stack.Z,{textAlign:"center",gap:spacing(2),children:[(0,jsx_runtime.jsx)(Typography.Z,{color:textColor,variant:"h6",children:title}),(0,jsx_runtime.jsx)(Typography.Z,{color:textColor,variant:"body2",children:body})]})};Content.displayName="Content";try{Content.displayName="Content",Content.__docgenInfo={description:"",displayName:"Content",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string | Element"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BannerLink/Content.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"src/components/BannerLink/Content.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}var utils=__webpack_require__("./src/utils/index.ts");const BannerLink=props=>{const{theme,body,title,ctaButtons,decoration=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})}=props,{palette}=(0,useTheme.Z)(),backgroundColor="dark"===theme?palette.primary.dark:(0,colorManipulator.Fq)(palette.info.main,.08);return(0,jsx_runtime.jsx)(Box.Z,{bgcolor:backgroundColor,component:"section",children:(0,jsx_runtime.jsx)(Container.Z,{children:(0,jsx_runtime.jsxs)(Stack.Z,{gap:4,sx:styles.main,children:[decoration?(0,utils.MW)(decoration)?decoration:(0,jsx_runtime.jsx)("img",{...decoration}):null,(0,jsx_runtime.jsx)(Content,{body,title,theme}),ctaButtons?.length&&(0,jsx_runtime.jsx)(Ctas.s,{theme,ctaButtons})]})})})};BannerLink.displayName="BannerLink";const styles={main:{alignItems:"center",justifyContent:"center",padding:{md:"64px 24px",xs:"32px 24px"}}};try{BannerLink.displayName="BannerLink",BannerLink.__docgenInfo={description:"",displayName:"BannerLink",props:{decoration:{defaultValue:null,description:"",name:"decoration",required:!1,type:{name:"Element | ImgProps"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string | Element"}},ctaButtons:{defaultValue:null,description:"",name:"ctaButtons",required:!1,type:{name:"CtaButton[]"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BannerLink/BannerLink.tsx#BannerLink"]={docgenInfo:BannerLink.__docgenInfo,name:"BannerLink",path:"src/components/BannerLink/BannerLink.tsx#BannerLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Ctas.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Ctas});var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Ctas=({ctaButtons,theme,reverse})=>{const buttonsThemeDefault=[{color:"dark"===theme?"negative":"primary",variant:"contained"},{color:"dark"===theme?"negative":"primary",variant:"outlined"}];return ctaButtons?.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__.Z,{display:"flex",direction:reverse?"row-reverse":"row",justifyContent:"left",spacing:2,children:ctaButtons.map(((button,i)=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__.MW)(button)?button:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{sx:{width:{md:"auto",xs:"100%"},display:"flex"},...buttonsThemeDefault[i],...button,children:button.text},`${button.text}-${i}`)))}):null};try{Ctas.displayName="Ctas",Ctas.__docgenInfo={description:"",displayName:"Ctas",props:{ctaButtons:{defaultValue:null,description:"",name:"ctaButtons",required:!1,type:{name:"CtaButton[]"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Ctas.tsx#Ctas"]={docgenInfo:Ctas.__docgenInfo,name:"Ctas",path:"src/components/Ctas.tsx#Ctas"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/BannerLink/defaults.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>defaults});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaults={args:{theme:"light",title:"Vuoi diventare un Partner tecnologico qualificato?",body:"Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it"},body:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Leggi le domande frequenti sull’adesione a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"pagoPA"})," da parte degli Enti Creditori oppure scrivi a:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"mailto:account@pagopa.it",children:"account@pagopa.it"})]}),ctaButtons:[{text:"LEGGI LE FAQ",onClick:()=>{alert("LEGGI LE FAQ")}},{text:"LEGGI LE FAQ",onClick:()=>{alert("LEGGI LE FAQ")}}]}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MW:()=>isJSX,Or:()=>useIsVisible,dx:()=>hrefNoOp});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const isJSX=arg=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(arg);function useIsVisible(ref){const[isIntersecting,setIntersecting]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const observer=new IntersectionObserver((([entry])=>{setIntersecting(entry.isIntersecting)}));return ref.current&&observer.observe(ref.current),()=>{observer.disconnect()}}),[ref]),isIntersecting}const hrefNoOp="javascript:void(0)"}}]);
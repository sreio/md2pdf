(this.webpackJsonpmd2pdf=this.webpackJsonpmd2pdf||[]).push([[0],{16:function(e,n,t){e.exports=t(33)},22:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),i=t(10),l=t.n(i),s=(t(21),t(22),t(1)),c=t(2),d=e=>{document.querySelector(".CodeMirror").CodeMirror.setValue(e)},u=e=>o.a.createElement("p",Object.assign({},e,{style:{position:"relative"}}),o.a.createElement("input",{id:"mdFile",type:"file",style:{display:"none"},onChange:e=>{if(e.currentTarget.files.length>0){const n=new FileReader;n.onload=e=>{if(2!==e.target.readyState)return;if(e.target.error)return void alert("Error while reading file");const n=e.target.result;d(n)},n.readAsText(e.target.files[0])}},accept:".md"}),o.a.createElement("label",{htmlFor:"mdFile",style:{position:"absolute",opacity:0,top:0,left:0,right:0,bottom:0,zIndex:2,cursor:"pointer"}}),o.a.createElement("span",{role:"img","aria-label":"upload"},"\ud83d\udcc1"),o.a.createElement("span",null,"\u9009\u62e9"));var m=Object(c.a)(e=>{let{className:n}=e;return o.a.createElement("header",{className:n+" no-print"},o.a.createElement("p",{className:"project"}," md2pdf "),o.a.createElement("iframe",{title:"github-button",className:"project",style:{display:"block"},src:"https://ghbtns.com/github-btn.html?user=sreio&repo=md2pdf&type=star&count=true",frameBorder:"0",scrolling:"0",width:"100px",height:"20px"}),o.a.createElement("div",{className:"menu"},o.a.createElement(u,{className:"button upload"}),o.a.createElement("p",{className:"button download",onClick:()=>{let e="";const n=document.querySelector(".preview").querySelector("h1");if(n){e=n.innerText;const t=document.title;document.title=e,window.requestAnimationFrame(()=>{document.title=t})}window.print()}},o.a.createElement("span",{role:"img","aria-label":"download"},"\ud83c\udf89"),o.a.createElement("span",null,"\u8f6c\u6362"))))})(r||(r=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  flex-shrink: 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  user-select: none;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: black;\n  background-color: rgb(233, 233, 233);\n  display: flex;\n  align-items: center;\n  height: 40px;\n  .project {\n    font-weight: bold;\n    margin: 5px;\n    flex-shrink: 0;\n    height: 20px;\n  }\n  div.menu {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    .button {\n      height: 80%;\n      margin: 0;\n      display: flex;\n      align-items: center;\n      margin-left: 3px;\n      border-radius: 3px;\n      border: 1px solid black;\n      padding: 10px;\n      cursor: pointer;\n    }\n  }\n\n  /* span.author {\n    position: fixed;\n    bottom: 2px;\n    left: 2px;\n    opacity: 0.5;\n    color: white;\n    height: 20px;\n    z-index:99;\n  } */\n  @keyframes dance {\n    0% {\n      transform: rotate(3deg);\n    }\n    100% {\n      transform: rotate(-2deg);\n    }\n  }\n"]))),p=t(4);const h="# \u4e2a\u4eba\u4fe1\u606f\n* \u674e\u67d0/\u7537\n* \u624b\u673a\uff1a15512341234\n* Email\uff1a15512341234@163.com\n* \u6e05\u534e\u5927\u5b66/\u672c\u79d1/\u8ba1\u7b97\u673a\u4e0e\u79d1\u5b66\n* \u5de5\u4f5c\u5e74\u9650\uff1a10\u5e74\n\n# \u6c42\u804c\u610f\u5411\n* \u671f\u671b\u804c\u4f4d\uff1a\u9ad8\u7ea7\u5f00\u53d1\u5de5\u7a0b\u5e08\n* \u671f\u671b\u85aa\u8d44\uff1a\u9762\u8bae\n* \u671f\u671b\u57ce\u5e02\uff1a\u5317\u4eac\n\n# \u6280\u80fd\u6e05\u5355\n- Web\u5f00\u53d1\uff1aPHP/Hack/Node\n- Web\u6846\u67b6\uff1aThinkPHP/Yaf/Yii/Lavarel/LazyPHP\n- \u524d\u7aef\u6846\u67b6\uff1aBootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic\n- \u524d\u7aef\u5de5\u5177\uff1aBower/Gulp/SaSS/LeSS/PhoneGap\n- \u6570\u636e\u5e93\u76f8\u5173\uff1aMySQL/PgSQL/PDO/SQLite\n- \u7248\u672c\u7ba1\u7406\u3001\u6587\u6863\u548c\u81ea\u52a8\u5316\u90e8\u7f72\u5de5\u5177\uff1aSvn/Git/PHPDoc/Phing/Composer\n- \u5355\u5143\u6d4b\u8bd5\uff1aPHPUnit/SimpleTest/Qunit\n- \u4e91\u548c\u5f00\u653e\u5e73\u53f0\uff1aSAE/BAE/AWS/\u5fae\u535a\u5f00\u653e\u5e73\u53f0/\u5fae\u4fe1\u5e94\u7528\u5f00\u53d1\n\n# \u5de5\u4f5c\u7ecf\u5386\n* ABC\u516c\u53f8 \uff082018\u5e7411\u6708 ~ \u81f3\u4eca\uff09\n* JKL\u516c\u53f8 \uff082014\u5e7411\u6708 ~ 2018\u5e7411\u6708\uff09\n\n# \u9879\u76ee\u7ecf\u9a8c\n\n## ABC\u516c\u53f8 \uff082018\u5e7411\u6708 ~ \u81f3\u4eca\uff09\n### DEF\u9879\u76ee \n\u6211\u5728\u6b64\u9879\u76ee\u8d1f\u8d23\u4e86\u54ea\u4e9b\u5de5\u4f5c\uff0c\u5206\u522b\u5728\u54ea\u4e9b\u5730\u65b9\u505a\u5f97\u51fa\u8272/\u548c\u522b\u4eba\u4e0d\u4e00\u6837/\u6210\u957f\u5feb\uff0c\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u6700\u56f0\u96be\u7684\u95ee\u9898\u662f\u4ec0\u4e48\uff0c\u6211\u91c7\u53d6\u4e86\u4ec0\u4e48\u63aa\u65bd\uff0c\u6700\u540e\u7ed3\u679c\u5982\u4f55\u3002\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u6700\u81ea\u8c6a\u7684\u6280\u672f\u7ec6\u8282\u662f\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\uff0c\u5b9e\u65bd\u524d\u548c\u5b9e\u65bd\u540e\u7684\u6570\u636e\u5bf9\u6bd4\u5982\u4f55\uff0c\u540c\u4e8b\u548c\u9886\u5bfc\u5bf9\u6b64\u7684\u53cd\u5e94\u5982\u4f55\u3002\n\n\n### GHI\u9879\u76ee \n\u6211\u5728\u6b64\u9879\u76ee\u8d1f\u8d23\u4e86\u54ea\u4e9b\u5de5\u4f5c\uff0c\u5206\u522b\u5728\u54ea\u4e9b\u5730\u65b9\u505a\u5f97\u51fa\u8272/\u548c\u522b\u4eba\u4e0d\u4e00\u6837/\u6210\u957f\u5feb\uff0c\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u6700\u56f0\u96be\u7684\u95ee\u9898\u662f\u4ec0\u4e48\uff0c\u6211\u91c7\u53d6\u4e86\u4ec0\u4e48\u63aa\u65bd\uff0c\u6700\u540e\u7ed3\u679c\u5982\u4f55\u3002\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u6700\u81ea\u8c6a\u7684\u6280\u672f\u7ec6\u8282\u662f\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\uff0c\u5b9e\u65bd\u524d\u548c\u5b9e\u65bd\u540e\u7684\u6570\u636e\u5bf9\u6bd4\u5982\u4f55\uff0c\u540c\u4e8b\u548c\u9886\u5bfc\u5bf9\u6b64\u7684\u53cd\u5e94\u5982\u4f55\u3002\n\n\n### \u5176\u4ed6\u9879\u76ee\n\n\uff08\u6bcf\u4e2a\u516c\u53f8\u51992~3\u4e2a\u6838\u5fc3\u9879\u76ee\u5c31\u597d\u4e86\uff0c\u5982\u679c\u4f60\u6709\u975e\u5e38\u5927\u91cf\u7684\u9879\u76ee\uff0c\u90a3\u4e48\u6309\u5206\u7c7b\u8fdb\u884c\u5408\u5e76\uff0c\u6bcf\u4e00\u7c7b\u9009\u4e00\u4e2a\u5178\u578b\u5199\u51fa\u6765\u3002\u5176\u4ed6\u7684\u4e00\u7b14\u5e26\u8fc7\u5373\u53ef\u3002\uff09\n\n## JKL\u516c\u53f8 \uff082014\u5e7411\u6708 ~ 2018\u5e7411\u6708\uff09\n\n### MNO\u9879\u76ee \n\u6211\u5728\u6b64\u9879\u76ee\u8d1f\u8d23\u4e86\u54ea\u4e9b\u5de5\u4f5c\uff0c\u5206\u522b\u5728\u54ea\u4e9b\u5730\u65b9\u505a\u5f97\u51fa\u8272/\u548c\u522b\u4eba\u4e0d\u4e00\u6837/\u6210\u957f\u5feb\uff0c\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u6700\u56f0\u96be\u7684\u95ee\u9898\u662f\u4ec0\u4e48\uff0c\u6211\u91c7\u53d6\u4e86\u4ec0\u4e48\u63aa\u65bd\uff0c\u6700\u540e\u7ed3\u679c\u5982\u4f55\u3002\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u6700\u81ea\u8c6a\u7684\u6280\u672f\u7ec6\u8282\u662f\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\uff0c\u5b9e\u65bd\u524d\u548c\u5b9e\u65bd\u540e\u7684\u6570\u636e\u5bf9\u6bd4\u5982\u4f55\uff0c\u540c\u4e8b\u548c\u9886\u5bfc\u5bf9\u6b64\u7684\u53cd\u5e94\u5982\u4f55\u3002\n\n\n### PQR\u9879\u76ee \n\u6211\u5728\u6b64\u9879\u76ee\u8d1f\u8d23\u4e86\u54ea\u4e9b\u5de5\u4f5c\uff0c\u5206\u522b\u5728\u54ea\u4e9b\u5730\u65b9\u505a\u5f97\u51fa\u8272/\u548c\u522b\u4eba\u4e0d\u4e00\u6837/\u6210\u957f\u5feb\uff0c\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u6700\u56f0\u96be\u7684\u95ee\u9898\u662f\u4ec0\u4e48\uff0c\u6211\u91c7\u53d6\u4e86\u4ec0\u4e48\u63aa\u65bd\uff0c\u6700\u540e\u7ed3\u679c\u5982\u4f55\u3002\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u6700\u81ea\u8c6a\u7684\u6280\u672f\u7ec6\u8282\u662f\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\uff0c\u5b9e\u65bd\u524d\u548c\u5b9e\u65bd\u540e\u7684\u6570\u636e\u5bf9\u6bd4\u5982\u4f55\uff0c\u540c\u4e8b\u548c\u9886\u5bfc\u5bf9\u6b64\u7684\u53cd\u5e94\u5982\u4f55\u3002\n\n\n### \u5176\u4ed6\u9879\u76ee\n\n\uff08\u6bcf\u4e2a\u516c\u53f8\u51992~3\u4e2a\u6838\u5fc3\u9879\u76ee\u5c31\u597d\u4e86\uff0c\u5982\u679c\u4f60\u6709\u975e\u5e38\u5927\u91cf\u7684\u9879\u76ee\uff0c\u90a3\u4e48\u6309\u5206\u7c7b\u8fdb\u884c\u5408\u5e76\uff0c\u6bcf\u4e00\u7c7b\u9009\u4e00\u4e2a\u5178\u578b\u5199\u51fa\u6765\u3002\u5176\u4ed6\u7684\u4e00\u7b14\u5e26\u8fc7\u5373\u53ef\u3002\uff09\n\n# \u81f4\u8c22\n&nbsp;&nbsp;\u611f\u8c22\u60a8\u82b1\u65f6\u95f4\u9605\u8bfb\u6211\u7684\u7b80\u5386\uff0c\u671f\u5f85\u80fd\u6709\u673a\u4f1a\u548c\u60a8\u5171\u4e8b\u3002\n\n";var g=function(){var e;let n=null!==(e=window.localStorage.getItem("sreio_md2pdf"))&&void 0!==e?e:h;const[t,r]=Object(a.useState)(n);return[t,r]};const f=Object(p.Container)(g);var v;var b=Object(c.a)(e=>{let{className:n}=e;return o.a.createElement("div",{className:n,id:"suspense-loading"},o.a.createElement("p",null),o.a.createElement("p",null),o.a.createElement("p",null))})(v||(v=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & > p {\n    margin: 5px;\n    width: 5px;\n    height: 15px;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-name: load;\n    animation-duration: ",";\n    &:nth-child(1) {\n      animation-delay: ",";\n    }\n    &:nth-child(2) {\n      animation-delay: ",";\n    }\n  }\n  @keyframes load {\n    25% {\n      transform: translateY(-10px);\n    }\n    75% {\n      transform: translateY(10px);\n    }\n  }\n"])),e=>e.duration+"s",e=>e.duration/3+"s",e=>2*e.duration/3+"s");class w extends o.a.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,n){this.setState({error:e,errorInfo:n})}render(){return this.state.errorInfo?o.a.createElement("div",null,o.a.createElement("p",null,"Error occurs"),o.a.createElement("button",{onClick:()=>{window.location.reload()},style:{background:"none",padding:"5px",borderRadius:"5px",boxShadow:"1px 1px 1px grey",outline:"none",cursor:"pointer"}},"Reload This Page")):this.props.children}}var E,x=w;t(9);const y=c.a.div(E||(E=Object(s.a)(["\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n  padding: 10px;\n  @media print {\n    padding: 0;\n    overflow-y: hidden;\n  }\n"]))),k=Object(a.lazy)(()=>Promise.all([t.e(2),t.e(4)]).then(t.bind(null,285)));var S,j,O=e=>{let{source:n,children:t}=e;return o.a.createElement(x,null,o.a.createElement(a.Suspense,{fallback:o.a.createElement(b,{duration:.5})},o.a.createElement(y,{className:"preview  markdown-body"},o.a.createElement(k,{source:n},t))))},N=t(13);t(26),t(27),t(28);let L=null!==(S=window.localStorage.getItem("sreio_md2pdf"))&&void 0!==S?S:h;var P,C=Object(c.a)(e=>{let{className:n,setText:t}=e;return o.a.createElement(N.UnControlled,{className:n,value:L,options:{mode:"gfm",theme:"mdn-like",lineNumbers:!0,lineWrapping:!0},onChange:(e,n,r)=>{window.localStorage.setItem("sreio_md2pdf",r),t(r)}})})(j||(j=Object(s.a)(["\n  height: 100%;\n  .CodeMirror {\n    height: 100%;\n    line-height: 1.5;\n  }\n"])));var T,W=Object(c.a)(e=>{let{className:n,setText:t,width:r}=e;return o.a.createElement("div",{style:{width:r},className:n},o.a.createElement(C,{setText:t}))})(P||(P=Object(s.a)(["\n  flex-shrink: 0;\n  height: 100%;\n  width: 50%;\n  color: rgb(204, 204, 204);\n"])));var A=Object(c.a)(e=>{let{className:n,setDrag:t,setStartX:r}=e;return o.a.createElement("div",{className:n,onMouseDown:e=>{t(!0),(e=>{const{nativeEvent:n}=e,t=n.offsetX;r(t)})(e)}})})(T||(T=Object(s.a)(["\n  width: ",";\n  flex-shrink: 0;\n  background-color: ",";\n  height: 100%;\n  color: white;\n  text-align: center;\n  cursor: col-resize;\n  user-select: none;\n"])),"15px",e=>e.isDrag?"#0984e3":"rgb(233,233,233)");var D,F=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{};const[t,r]=Object(a.useState)(!1),[o,i]=Object(a.useState)(!1),l=e=>{e.preventDefault(),e.stopPropagation()};return Object(a.useEffect)(()=>{const a=e=>{i(!1),l(e)},o=e=>{i(!0),l(e)},s=e=>{i(!1),l(e),c(e.dataTransfer.files)},c=e=>{if(e&&e[0]&&e[0].name&&/\.(md)$/i.test(e[0].name)&&!t){const t=new FileReader;t.onload=e=>{r(!1),n(e.target.result)},t.readAsText(e[0]),r(!0)}},d=e.current;if(d)return d.addEventListener("dragenter",l,!0),d.addEventListener("dragover",o,!0),d.addEventListener("dragleave",a,!0),d.addEventListener("drop",s,!0),()=>{d.removeEventListener("dragenter",l,!0),d.removeEventListener("dragover",o,!0),d.removeEventListener("dragleave",a,!0),d.removeEventListener("drop",s,!0)}},[e,n,t,o]),[t,o]};var I,M=Object(c.a)(e=>{let{className:n}=e;const[t,r]=Object(p.useProvided)(f),[i,l]=Object(a.useState)(!1),[s,c]=Object(a.useState)(0),[u,m]=Object(a.useState)(window.innerWidth/2),h=Object(a.useRef)(null),[g,v]=F(h,d);return Object(a.useEffect)(()=>{const e=()=>l(!1);return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}},[]),o.a.createElement("div",{ref:h,style:{opacity:v||g?.5:1},className:n,onMouseMove:e=>{if(!i)return;const n=e.nativeEvent.pageX;m(n-s)}},o.a.createElement(W,{className:"no-print",width:u,setText:r}),o.a.createElement(A,{className:"no-print",isDrag:i,setDrag:l,setStartX:c}),o.a.createElement(O,null,t))})(D||(D=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  height: calc(100% - 40px);\n  display: flex;\n"])));var z=Object(c.a)(e=>{let{className:n}=e;return o.a.createElement("div",{className:n,id:"md2pdf-app"},o.a.createElement(p.Provider,{inject:[f]},o.a.createElement(m,null),o.a.createElement(M,null)))})(I||(I=Object(s.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-family: \u5fae\u8f6f\u96c5\u9ed1, sans-serif;\n  @media print {\n    &,\n    div {\n      display: block;\n      height: auto;\n      /* Reset to normalize for FireFox */\n    }\n    .no-print,\n    .no-print * {\n      display: none !important;\n    }\n  }\n"])));const B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,n){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;null!=t&&(t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}const R=document.getElementById("root");window.addEventListener("drop",e=>e.preventDefault(),!0),window.addEventListener("dragover",e=>e.preventDefault(),!0),window.addEventListener("beforeunload",e=>(e||window.event).returnValue="Please check and backup the change before refresh or leave."),l.a.render(o.a.createElement(z,null),R),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const n="".concat(".","/service-worker.js");B?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then(t=>{const r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):H(e,n)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):H(n,e)})}}()}},[[16,1,3]]]);
//# sourceMappingURL=main.9f7623aa.chunk.js.map
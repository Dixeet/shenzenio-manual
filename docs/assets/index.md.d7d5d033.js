import{o as a,c as o,k as e,r as i,n as r,b as c,w as d,a as s,H as u}from"./chunks/framework.9e21ba36.js";const p={class:"language- vp-adaptive-theme"},_={__name:"CardApp",props:["pre"],setup(n){const t=n;return(l,x)=>(a(),o("div",p,[e("div",{class:r(["shiki github-dark vp-code-dark app-card__content",{"app-card__content--pre":t.pre!==void 0}])},[i(l.$slots,"default")],2),e("div",{class:r(["shiki github-light vp-code-light app-card__content",{"app-card__content--pre":t.pre!==void 0}])},[i(l.$slots,"default")],2)]))}};const m=e("div",{class:"--flex --flex-wrap --justify-between"},[e("div",{class:""},[e("div",{class:"--mb-5"},[e("div",{class:"--font-size-4 --mb-2"},"Basic Instructions"),e("div",{class:"--font-size-3 cheatsheet__commands-group"},[e("div",{class:""},[e("strong",null,"nop")]),e("div",{class:""},[e("strong",null,"mov"),s(" R/I R/I")]),e("div",{class:""},[e("strong",null,"jmp"),s(" L")]),e("div",{class:""},[e("strong",null,"slp"),s(" R/I")]),e("div",{class:""},[e("strong",null,"slx"),s(" P")]),e("div",null," ")])]),e("div",{class:"--mb-5"},[e("div",{class:"--font-size-4 --mb-2"},"Test Instructions"),e("div",{class:"--font-size-3 cheatsheet__commands-group"},[e("div",{class:""},[e("strong",null,"teq"),s(" R/I R/I")]),e("div",{class:""},[e("strong",null,"tgt"),s(" R/I R/I")]),e("div",{class:""},[e("strong",null,"tlt"),s(" R/I R/I")]),e("div",{class:""},[e("strong",null,"tcp"),s(" R/I R/I")])])])]),e("div",{class:""},[e("div",{class:"--mb-5"},[e("div",{class:"--font-size-4 --mb-2"},"Arithmetic Instructions"),e("div",{class:"--font-size-3 cheatsheet__commands-group"},[e("div",{class:""},[e("strong",null,"add"),s(" R/I")]),e("div",{class:""},[e("strong",null,"sub"),s(" R/I")]),e("div",{class:""},[e("strong",null,"mul"),s(" R/I")]),e("div",{class:""},[e("strong",null,"not")]),e("div",{class:""},[e("strong",null,"dgt"),s(" R/I")]),e("div",{class:""},[e("strong",null,"dst"),s(" R/I R/I")])])]),e("div",{class:"--mb-5"},[e("div",{class:"--font-size-4 --mb-2"},"Registers"),e("div",{class:"--font-size-3 cheatsheet__commands-group"},[e("div",{class:""},[e("strong",null,"acc")]),e("div",{class:""},[e("strong",null,[s("dat "),e("em",{class:"--font-size-2 em--top-text"},"[1]")])]),e("div",{class:""},[e("strong",null,[s("p0, p1 "),e("em",{class:"em--top-text --font-size-2"},"[1]")])]),e("div",{class:""},[e("strong",null,[s("x0, x1, x2, x3 "),e("em",{class:"em--top-text --font-size-2"},"[1]")])])])])])],-1),g=e("div",{class:"--mt-5 --flex --justify-center"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Notation"),e("th",null,"Meaning")])]),e("tbody",null,[e("tr",null,[e("td",null,"R"),e("td",null,"Register")]),e("tr",null,[e("td",null,"I"),e("td",null,[s("Integer "),e("em",{class:"em--top-text --font-size-2"},"[2]")])]),e("tr",null,[e("td",null,"R/I"),e("td",null,[s("Register or integer "),e("em",{class:"em--top-text --font-size-2"},"[2]")])]),e("tr",null,[e("td",null,"P"),e("td",null,"Pin register (p0, p1, etc.)")]),e("tr",null,[e("td",null,"L"),e("td",null,[s("Label "),e("em",{class:"em--top-text --font-size-2"},"[3]")])])])])],-1),h=e("div",{class:"--font-italic --font-size-3"},[e("p",null," [1] Not all registers are available on all microcontrollers. Refer to the parts datasheets for pin diagrams and register information. "),e("p",null," [2] Integer values must be in the range -999 to 999. "),e("p",null," [3] Labels used as operands must be defined elsewhere in the program. ")],-1),v={__name:"TheCheatSheet",setup(n){return(t,l)=>(a(),c(_,{pre:""},{default:d(()=>[m,g,h]),_:1}))}},f=e("h1",{id:"shenzen-io-manual",tabindex:"-1"},[s("Shenzen IO Manual "),e("a",{class:"header-anchor",href:"#shenzen-io-manual","aria-label":'Permalink to "Shenzen IO Manual"'},"​")],-1),I=e("h2",{id:"language-reference-card",tabindex:"-1"},[s("Language Reference Card "),e("a",{class:"header-anchor",href:"#language-reference-card","aria-label":'Permalink to "Language Reference Card"'},"​")],-1),z=JSON.parse('{"title":"Shenzen IO Manual","titleTemplate":false,"description":"","frontmatter":{"titleTemplate":false},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),b={name:"index.md"},k=Object.assign(b,{setup(n){return(t,l)=>(a(),o("div",null,[f,I,u(v)]))}});export{z as __pageData,k as default};

(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(9),c=(n(0),n(153)),a={id:"getting_started",title:"Getting started",sidebar_label:"Getting started"},s={id:"getting_started",title:"Getting started",description:"Spin up Kong and other service container using docker compose.",source:"@site/docs/getting_started.md",permalink:"/kong-playground/docs/getting_started",sidebar_label:"Getting started",sidebar:"someSidebar",next:{title:"List of service",permalink:"/kong-playground/docs/service_list"}},i=[],p={rightToc:i};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"##Spin up Kong and other service container using docker compose."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"git clone https://github.com/pravin-raha/kong-playground.git\ncd kong-playground\ncd docker\ndocker-compose up\n")),Object(c.b)("p",null,"##Stop docker compose"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose stop\n")),Object(c.b)("p",null,"##Tear down the complete Kong infrastructure."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose down -v\n")))}d.isMDXComponent=!0}}]);
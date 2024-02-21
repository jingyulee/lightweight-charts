"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2163],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>h});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),g=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=g(e.components);return r.createElement(s.Provider,{value:a},e.children)},o="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),o=g(t),m=n,h=o["".concat(s,".").concat(m)]||o[m]||y[m]||i;return t?r.createElement(h,l(l({ref:a},d),{},{components:t})):r.createElement(h,l({ref:a},d))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[o]="string"==typeof e?e:n,l[1]=p;for(var g=2;g<i;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92916:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var r=t(58168),n=(t(96540),t(15680));const i={id:"IChartApi",title:"Interface: IChartApi",sidebar_label:"IChartApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"api/interfaces/IChartApi",id:"version-3.8/api/interfaces/IChartApi",title:"Interface: IChartApi",description:"The main interface of a single chart.",source:"@site/versioned_docs/version-3.8/api/interfaces/IChartApi.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IChartApi",permalink:"/lightweight-charts/docs/3.8/api/interfaces/IChartApi",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"IChartApi",title:"Interface: IChartApi",sidebar_label:"IChartApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},g=[{value:"Methods",id:"methods",level:2},{value:"remove",id:"remove",level:3},{value:"Returns",id:"returns",level:4},{value:"resize",id:"resize",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"addAreaSeries",id:"addareaseries",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"addBaselineSeries",id:"addbaselineseries",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"addBarSeries",id:"addbarseries",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"addCandlestickSeries",id:"addcandlestickseries",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"addHistogramSeries",id:"addhistogramseries",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"addLineSeries",id:"addlineseries",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"removeSeries",id:"removeseries",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"subscribeClick",id:"subscribeclick",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-9",level:4},{value:"unsubscribeClick",id:"unsubscribeclick",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-10",level:4},{value:"subscribeCrosshairMove",id:"subscribecrosshairmove",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-11",level:4},{value:"unsubscribeCrosshairMove",id:"unsubscribecrosshairmove",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-12",level:4},{value:"priceScale",id:"pricescale",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-13",level:4},{value:"timeScale",id:"timescale",level:3},{value:"Returns",id:"returns-14",level:4},{value:"applyOptions",id:"applyoptions",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Returns",id:"returns-15",level:4},{value:"options",id:"options",level:3},{value:"Returns",id:"returns-16",level:4},{value:"takeScreenshot",id:"takescreenshot",level:3},{value:"Returns",id:"returns-17",level:4}],d={toc:g},o="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(o,(0,r.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The main interface of a single chart."),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"remove"},"remove"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"remove"),"(): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,"Removes the chart object including all DOM elements. This is an irreversible operation, you cannot do anything with the chart after removing it."),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"resize"},"resize"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"resize"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"width"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"height"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"forceRepaint?"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,"Sets fixed size of the chart. By default chart takes up 100% of its container."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"width")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"number")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Target width of the chart.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"height")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"number")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Target height of the chart.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"forceRepaint?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:"left"},"True to initiate resize immediately. One could need this to get screenshot immediately after resize.")))),(0,n.yg)("h4",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"addareaseries"},"addAreaSeries"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"addAreaSeries"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"areaOptions?"),"): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Area"'),">"),(0,n.yg)("p",null,"Creates an area series with specified parameters."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const series = chart.addAreaSeries();\n")),(0,n.yg)("h4",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"areaOptions?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/AreaStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaStyleOptions"))," & ",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Area"'),">"),(0,n.yg)("p",null,"An interface of the created series."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"addbaselineseries"},"addBaselineSeries"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"addBaselineSeries"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"baselineOptions?"),"): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Baseline"'),">"),(0,n.yg)("p",null,"Creates a baseline series with specified parameters."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const series = chart.addBaselineSeries();\n")),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"baselineOptions?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/BaselineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineStyleOptions"))," & ",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,n.yg)("h4",{id:"returns-3"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Baseline"'),">"),(0,n.yg)("p",null,"An interface of the created series."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"addbarseries"},"addBarSeries"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"addBarSeries"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"barOptions?"),"): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Bar"'),">"),(0,n.yg)("p",null,"Creates a bar series with specified parameters."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const series = chart.addBarSeries();\n")),(0,n.yg)("h4",{id:"parameters-3"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"barOptions?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/BarStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BarStyleOptions"))," & ",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,n.yg)("h4",{id:"returns-4"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Bar"'),">"),(0,n.yg)("p",null,"An interface of the created series."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"addcandlestickseries"},"addCandlestickSeries"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"addCandlestickSeries"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"candlestickOptions?"),"): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Candlestick"'),">"),(0,n.yg)("p",null,"Creates a candlestick series with specified parameters."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const series = chart.addCandlestickSeries();\n")),(0,n.yg)("h4",{id:"parameters-4"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"candlestickOptions?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/CandlestickStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickStyleOptions"))," & ",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,n.yg)("h4",{id:"returns-5"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Candlestick"'),">"),(0,n.yg)("p",null,"An interface of the created series."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"addhistogramseries"},"addHistogramSeries"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"addHistogramSeries"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"histogramOptions?"),"): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Histogram"'),">"),(0,n.yg)("p",null,"Creates a histogram series with specified parameters."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const series = chart.addHistogramSeries();\n")),(0,n.yg)("h4",{id:"parameters-5"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"histogramOptions?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/HistogramStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramStyleOptions"))," & ",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,n.yg)("h4",{id:"returns-6"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Histogram"'),">"),(0,n.yg)("p",null,"An interface of the created series."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"addlineseries"},"addLineSeries"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"addLineSeries"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"lineOptions?"),"): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Line"'),">"),(0,n.yg)("p",null,"Creates a line series with specified parameters."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const series = chart.addLineSeries();\n")),(0,n.yg)("h4",{id:"parameters-6"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"lineOptions?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/LineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"LineStyleOptions"))," & ",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,n.yg)("h4",{id:"returns-7"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.yg)("inlineCode",{parentName:"p"},'"Line"'),">"),(0,n.yg)("p",null,"An interface of the created series."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"removeseries"},"removeSeries"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"removeSeries"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"seriesApi"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,"Removes a series of any type. This is an irreversible operation, you cannot do anything with the series after removing it."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"chart.removeSeries(series);\n")),(0,n.yg)("h4",{id:"parameters-7"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"seriesApi")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<keyof ",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/SeriesOptionsMap"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),">")))),(0,n.yg)("h4",{id:"returns-8"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"subscribeclick"},"subscribeClick"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"subscribeClick"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,"Subscribe to the chart click event."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"function myClickHandler(param) {\n    if (!param.point) {\n        return;\n    }\n\n    console.log(`Click at ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);\n}\n\nchart.subscribeClick(myClickHandler);\n")),(0,n.yg)("h4",{id:"parameters-8"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"handler")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#mouseeventhandler"},(0,n.yg)("inlineCode",{parentName:"a"},"MouseEventHandler"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Handler to be called on mouse click.")))),(0,n.yg)("h4",{id:"returns-9"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"unsubscribeclick"},"unsubscribeClick"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"unsubscribeClick"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,"Unsubscribe a handler that was previously subscribed using ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/IChartApi#subscribeclick"},"subscribeClick"),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"chart.unsubscribeClick(myClickHandler);\n")),(0,n.yg)("h4",{id:"parameters-9"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"handler")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#mouseeventhandler"},(0,n.yg)("inlineCode",{parentName:"a"},"MouseEventHandler"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Previously subscribed handler")))),(0,n.yg)("h4",{id:"returns-10"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"subscribecrosshairmove"},"subscribeCrosshairMove"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"subscribeCrosshairMove"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,"Subscribe to the crosshair move event."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"function myCrosshairMoveHandler(param) {\n    if (!param.point) {\n        return;\n    }\n\n    console.log(`Crosshair moved to ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);\n}\n\nchart.subscribeClick(myCrosshairMoveHandler);\n")),(0,n.yg)("h4",{id:"parameters-10"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"handler")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#mouseeventhandler"},(0,n.yg)("inlineCode",{parentName:"a"},"MouseEventHandler"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Handler to be called on crosshair move.")))),(0,n.yg)("h4",{id:"returns-11"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"unsubscribecrosshairmove"},"unsubscribeCrosshairMove"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"unsubscribeCrosshairMove"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,"Unsubscribe a handler that was previously subscribed using ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/IChartApi#subscribecrosshairmove"},"subscribeCrosshairMove"),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"chart.unsubscribeCrosshairMove(myCrosshairMoveHandler);\n")),(0,n.yg)("h4",{id:"parameters-11"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"handler")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#mouseeventhandler"},(0,n.yg)("inlineCode",{parentName:"a"},"MouseEventHandler"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Previously subscribed handler")))),(0,n.yg)("h4",{id:"returns-12"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"pricescale"},"priceScale"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"priceScale"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"priceScaleId?"),"): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/IPriceScaleApi"},(0,n.yg)("inlineCode",{parentName:"a"},"IPriceScaleApi"))),(0,n.yg)("p",null,"Returns API to manipulate a price scale."),(0,n.yg)("h4",{id:"parameters-12"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"priceScaleId?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ID of the price scale.")))),(0,n.yg)("h4",{id:"returns-13"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/IPriceScaleApi"},(0,n.yg)("inlineCode",{parentName:"a"},"IPriceScaleApi"))),(0,n.yg)("p",null,"Price scale API."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"timescale"},"timeScale"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"timeScale"),"(): ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ITimeScaleApi"))),(0,n.yg)("p",null,"Returns API to manipulate the time scale"),(0,n.yg)("h4",{id:"returns-14"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ITimeScaleApi"))),(0,n.yg)("p",null,"Target API"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"applyoptions"},"applyOptions"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"applyOptions"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"options"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,"Applies new options to the chart"),(0,n.yg)("h4",{id:"parameters-13"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"options")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/3.8/api/interfaces/ChartOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"ChartOptions")),">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Any subset of options.")))),(0,n.yg)("h4",{id:"returns-15"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"options"},"options"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"options"),"(): ",(0,n.yg)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ChartOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"ChartOptions")),">"),(0,n.yg)("p",null,"Returns currently applied options"),(0,n.yg)("h4",{id:"returns-16"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ChartOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"ChartOptions")),">"),(0,n.yg)("p",null,"Full set of currently applied options, including defaults"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"takescreenshot"},"takeScreenshot"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"takeScreenshot"),"(): ",(0,n.yg)("inlineCode",{parentName:"p"},"HTMLCanvasElement")),(0,n.yg)("p",null,"Make a screenshot of the chart with all the elements excluding crosshair."),(0,n.yg)("h4",{id:"returns-17"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"HTMLCanvasElement")),(0,n.yg)("p",null,"A canvas with the chart drawn on. Any ",(0,n.yg)("inlineCode",{parentName:"p"},"Canvas")," methods like ",(0,n.yg)("inlineCode",{parentName:"p"},"toDataURL()")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"toBlob()")," can be used to serialize the result."))}y.isMDXComponent=!0}}]);
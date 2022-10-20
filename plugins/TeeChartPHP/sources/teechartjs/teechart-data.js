/*
 TeeChart(tm) for JavaScript(tm)
 @fileOverview TeeChart for JavaScript(tm)
 v2.4 Feb 2018
 Copyright(c) 2012-2017 by Steema Software SL. All Rights Reserved.
 http://www.steema.com

 Licensed with commercial and non-commercial attributes,
 specifically: http://www.steema.com/licensing/html5

 JavaScript is a trademark of Oracle Corporation.
*/
var Tee=Tee||{};
(function(){function y(v,t,d){var a,c=t,b;do if(b=c.links){var f=b.length;for(a=0;a<f;a++){var g=b[a].dimension;do{var e=v;do if(g==e)return b[a].searchDimension=b[a].dimension,d.push(b[a]),b[a];while(e=e.parent);if((e=y(v,g,d))||(e=y(g,v,d)))return d.unshift(b[a]),e}while(g=g.parent)}}while(c=c.parent);b=t.subDimensions;for(a=0;a<b.length;a++)if(e=y(v,b[a],d))return e;return null}"undefined"!==typeof exports&&(exports.Tee=Tee);Tee.Data=function(){function v(d,a){if(a){var c,b=a.length;for(c=0;c<
b;c++)d.push({id:a[c],value:0,count:0})}}this.datasets=[];this.addDataSet=function(d,a,c,b){a&&a.implementation&&(a=t(a));d=new Tee.Data.Dimension(d,c,b);d.object=a;d.dataset=d;d.dimensions=[];d.engine=this;this.datasets.push(d);return d};this.addJSON=function(d,a,c,b){return this.addDataSet(d,JSON.parse(a),c,b)};this.applyStyle=function(d,a){switch(a){case 0:d.panel.transparent=!1,d.panel.format.round.x=0,d.panel.format.round.y=0,d.panel.format.stroke.size=2,d.panel.format.stroke.fill="darkgray"}};
this.groupOther=function(d,a,c){var b,f=d.values.length;if(f>a){var g=0;var e=f-a;for(b=a;b<f;b++)g+=d.values[b];d.values[a-1]=g;d.labels[a-1]=c;d.values.splice(a,e);d.labels.splice(a,e);d.code.splice(a,e);return e}return-1};this.slider=function(d,a,c,b,f,g){var e=new Tee.Slider(d);e.min=0;e.max=a.length-1;e.step=1;e.position=e.min;e.useRange=!1;e.thumbSize=12;e.horizontal=!0;e.bounds.x=c;e.bounds.y=b;e.bounds.width=f;e.bounds.height=g;d.tools.add(e);return e};var t=function(d){var a={};if(1==d.nodeType){if(0<
d.attributes.length)for(var c=0;c<d.attributes.length;c++){var b=d.attributes.item(c);a[b.nodeName]=b.value}}else 3==d.nodeType&&(a=d.nodeValue);if(d.hasChildNodes())for(c=0;c<d.childNodes.length;c++){b=d.childNodes.item(c);var f=b.nodeName;if("undefined"==typeof a[f])"#text"===f?b.hasChildNodes()?a[f]=t(b):(b=b.nodeValue.trim(),""!==b&&(a=b)):"xml"==f?a=t(b):a[f]=t(b);else{if("undefined"==typeof a[f].push){var g=a[f];a[f]=[];a[f].push(g)}a[f].push(t(b))}}return a};this.loadXMLDoc=function(d){var a=
window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");a.open("GET",d,!1);a.send();return a.responseXML};this.loadXMLString=function(d){window.DOMParser?(parser=new DOMParser,xmlDoc=parser.parseFromString(d,"text/xml")):(xmlDoc=new ActiveXObject("Microsoft.XMLDOM"),xmlDoc.async=!1,xmlDoc.loadXML(d));return xmlDoc};this.queryDim=function(d,a,c){var b=d.dimension.getLinksTo(a),f;if(b){var g=b[0];d.initDims();var e="function"===typeof d.name?d.name:null;d.dimension.traverse(function(h,
f){if(!d.name||d.consider(h)){if(a)if(null===g.field&&a==g.dimension)var m=a.hasID?a.parent?a.data[a.id]:h[a.id]:a==d.dimension?f||c.length:a.field?h[a.field]:f;else(m=a.searchAcross(b,h))&&a.hasID&&(m=m[a.id]);else m=d.dimension.title,m||(m=d.dimension.dataset.object,d.dimension.field&&(m=m[d.dimension.field]));if(null!==m&&(!a||a.nulls||""!==m)){var l=-1,k,p=e?e(h):d.name?h[d.name]:h;"undefined"===typeof p?p=null:("number"!==typeof p&&(p=parseFloat(p)),p!==p&&(p=null));if(null!==p){a&&a.datetime&&
(m=a.datePart(m));for(k=0;k<c.length;k++)if(c[k].id==m){l=k;if(0===c[l].count)c[l].count=1,c[l].value=p;else{k=d.measure;var u=p,n=c[l];n.count++;switch(k){case "sum":case "average":n.value+=u;break;case "high":if(1==n.count||u>n.value)n.value=u;break;case "low":if(1==n.count||u<n.value)n.value=u}}break}-1==l&&c.push({id:m,value:p,count:1})}}}return!0});if("count"==d.measure)for(f=0;f<c.length;f++){var h=c[f];h.value=h.count}else if("average"==d.measure)for(f=0;f<c.length;f++)h=c[f],0<h.count&&(h.value/=
h.count);return!0}return!1};this.query=function(d,a){var c,b,f=[],g,e;var h=a instanceof Array?a:[a];var k=d instanceof Array?d:[d];var l=k.length;if(0<l){var m=(e=k[0])?e.selected:null;var z=[];m?z=m instanceof Array?m:[m]:e&&(e.id||e.field)&&(z=e.getIds())}for(m=0;m<h.length;m++)if(c=h[m]){for(g=l-1;0<=g;g--){var q=k[g];if(0<g){if(q){var p=q.selected;if(p)if(p instanceof Array||(p=[p]),q.selectedInclude)var u=p;else for(u=q.getIds(),b=0;b<p.length;b++)u.splice(u.indexOf(p[b]),1);else u=q.getIds();
for(var n=0;n<u.length;n++)if(q.selected=u[n],q.nulls||""!==q.selected)if(b=[],v(b,z),this.queryDim(c,k[g-1],b,q)){var r;if(!(r=q.nulls)){var x=0;for(r=0;r<b.length;r++)x+=b[r].count;r=0<x}r&&f.push({metric:c,dimension:q,values:b,master:q.selected,masterdim:k[g-1]})}q.selected=p;break}}else b=[],v(b,z),this.queryDim(c,q,b)&&f.push({metric:c,dimension:q,values:b,master:null})}if(0<l&&e&&!e.nulls)for(q=0;q<f[0].values.length;){for(c=g=0;c<f.length;c++)g+=f[c].values[q].count;if(0===g)for(c=0;c<f.length;c++)f[c].values.splice(q,
1);else q++}}return f};this.Chart=function(d,a){function c(a,b){var c=0,h;for(h=0;h<a.length;h++)c+=a[h].data.values[b];return c}var b=new Tee.Chart(d);b.engine=this;b.panel.margins.left=0;var f=new Tee.ToolTip(b);f.render="dom";b.tools.add(f);f.ongettext=function(a,b,c,f){a="";var h=c.data.labels;1<c.chart.series.count()&&(a="<br/>"+c.title);c.data.x&&(a+="<br/>"+c.data.x[f]);return b+" "+(0<h.length?h[f]:"")+a};var g=new Tee.Animation;g.onstart=function(){this.s.fill="yellow"};g.onstop=function(){this.s.fill=
this.old};g.duration=100;g.animateHover=function(a){this.s=a.series.items[0].hover.stroke;this.old=this.s.fill;this.animate(a)};b.title.text=a;b.guessStyle=function(a){return this.defaultStyle?this.defaultStyle:30<a.length?Tee.Line:Tee.Bar};b.newSeries=function(a,c){var h=c.values,f=c.dimension,d=c.master;c.masterdim||(d=d&&f&&f.id?d[f.id]:c.master||c.metric.title);var g=b.guessStyle(h),e=b.addSeries(new g),k=e.data;e.title=""+(d||"(none)");e.marks.style="value";e.cursor="pointer";k.values=[];k.labels=
[];k.code=[];var n=b.series.items.length;d=[];var r;f&&f.titles&&y(f.titles,f,d);if(1<n){var x=b.series.items[n-2].data;for(r=0;r<x.values.length;r++)k.values.push(0),k.labels.push(x.labels[r]),k.code.push(x.code[r]);for(r=0;r<h.length;r++){n=h[r];var w=x.code.indexOf(n.id);-1==w?(k.values.push(n.value),w=f&&f.titles?(w=f.searchAcross(d,n.id))?w[f.titles.id]:"":n.id[f.id],k.labels.push(w),k.code.push(n.id)):k.values[w]=n.value}}else for(r=0;r<h.length;r++)n=h[r],k.values.push(n.value),w=f&&f.titles?
(w=f.searchAcross(d,n.id))?w[f.titles.id]:"":""+n.id,k.labels.push(w),k.code.push(n.id);g==Tee.CircularGauge&&e.setValue(e.data.values[0]);if(this.onnewseries)this.onnewseries(this,e);return e};b.defaultStyle=null;b.animateChanges=!1;b.setSeriesStyle=function(a){if(a&&""!==a&&"auto"!==a){var b=this.series,c;this.defaultStyle=c="string"===typeof a?eval(a):a;for(var h=0;h<b.items.length;h++){var f=b.items[h].data;a=new c;a.setChart(a,this);a.format.fill=b.items[h].format.fill;a.data=f;b.items[h]=a}this.draw()}else this.defaultStyle=
null};b.fill=function(a,b,c){this.fillQuery(this.engine.query(a,b),a,b,c)};b.fillQuery=function(a,c,f,d){var h,g=b.series.items;b.series.items=[];if(a){for(h=0;h<a.length;h++){var e=a[h];var k=e.metric;this.newSeries(k,e).onclick=b.engine._onclickseries;if(""===b.title.text||"undefined"===typeof b.title.text)b.title.text=k.dimension.title;f instanceof Array||(b.legend.title.text=k.title+"\n"+k.measure,b.legend.title.format.font.textAlign="right");(e=c instanceof Array?c[0]:c)&&e!=k.dataset&&(b.axes.bottom.title.text=
e.datetime?e.title+" "+e.dateKeys[e.datetime.selected]:e.title)}0<a.length&&(b.axes.left.title.text=a[0].metric.title)}a=this.sort;""!==a.sortBy&&this.sortData(a.sortBy,"ascending"===a.order);""!==a.series&&this.sortSeries("ascending"==a.series);if(b.animateChanges&&g.length==b.series.items.length){a=b.series.items[0];var l=a.data.values;if(g[0].prototype==a.prototype&&g[0].data.values.length==l.length){var m=l.slice(0),x;a=new Tee.Animation(b,function(a){for(var b=0;b<l.length;b++)x=g[0].data.values[b],
l[b]=x+(m[b]-x)*a});c=b.axes.left.automatic;b.axes.left.automatic=!1;a.duration=150;a.animate();b.axes.left.automatic=c}}d||b.draw()};this.applyStyle(b,0);b.animateClick=function(){g.animateHover(b)};this.onclickseries=null;this._onclickseries=function(a,b){var c=a.chart;c.onclickseries&&(c.animateClick(),c.onclickseries(a,b))};b.setSeriesPalette=function(a,b){var c=a.palette,f=a.count(),h=a.data.code;c.colors=Array(f);for(var e=0;e<f;e++){var d=h[e];b.isSelected(d)||(c.colors[e]="silver")}};b.sortData=
function(a,b){var f=this.series.count(),e=this.series.items[0];if(0<f){if(1<f&&"values"==a){f=e.data.values.length;var d=this.series.items;var h=Array(f);for(e=0;e<f;e++)h[e]=e;h.sort(function(a,f){var e=c(d,a),h=c(d,f);return b?e-h:h-e})}else h=this.series.items[0].doSort(a,b);this.series.each(function(a){for(var b={values:[],labels:[],code:[]},c=a.data,f,e=0;e<c.values.length;e++)f=h[e],b.values.push(c.values[f]),b.labels.push(c.labels[f]),b.code.push(c.code[f]);a.data=b})}};b.sortSeries=function(a){var b=
this.series.items,c=b.length;if(!(2>c)){var f=Array(c),e,d,g=a?-1:1,h=a?1:-1;for(a=0;a<c;a++)f[a]=a;f.sort(function(a,c){e=b[a].title.toLowerCase();d=b[c].title.toLowerCase();return e<d?g:e==d?0:h});var n=Array(c);for(a=0;a<c;a++)n[a]=b[f[a]];this.series.items=n}};b.groupOther=function(a){this.series.each(function(b){var c=Engine.groupOther(b.data,a,"Other");-1<c&&(b.data.code[c]=null,b.data.code.splice(0,c))})};b.totalPoints=function(){var a=0;this.series.each(function(b){a+=b.data.values.length});
return a};b.sort={sortBy:"",order:"descending",series:"ascending"};b.setPositionPercent=function(a,b,c,f){var e=self.innerHeight?self.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body?document.body.clientHeight:0,d=self.innerHeight?self.innerWidth:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientWidth:document.body?document.body.clientWidth:0,g=this.canvas;c=.01*c*d|0;f=.01*
f*e|0;g.style.position="absolute";g.style.left=a*d*.01+"px";g.style.top=b*e*.01+"px";g.style.width=c+"px";g.style.height=f+"px";g.setAttribute("width",c);g.setAttribute("height",f);this.bounds.width=c;this.bounds.height=f;this.draw()};if(Tee.SeriesAnimation){f=b.animation=new Tee.SeriesAnimation(b);f.kind="zoomin";f.duration=300;var e=new Tee.FadeAnimation(b);e.fade.series=!0;f.items.push(e)}return b}};Tee.Data.Metric=function(v,t,d){this.name=d;this.title=t||d;this.dimension=v;var a=(this.dataset=
v.dataset).engine;this.measure="sum";this.initDims=function(){var c,b=a.datasets.length,f,d=this.dimension;this.allDims=[];for(c=0;c<b;c++){var e=a.datasets[c].dimensions;var h=e.length;for(f=0;f<h;f++){var k=e[f];d!=k&&!d.hasParent(k)&&k.anySelected()&&(k._link=k.dataset==d.dataset?null:d.getLinksTo(k),this.allDims.push(k))}}};this.consider=function(a){var b,c=this.allDims.length;for(b=0;b<c;b++){var d=this.allDims[b];if(d._link){var e=a;for(var h=0;h<d._link.length;h++)e=d.search(d._link[h],e);
e&&d.id&&(e=e[d.id])}else e=a[d.field];if("undefined"===typeof e||null===e)return!1;d.datetime&&(e=d.datePart(e));if(!d.inSelected(e))return!1}return!0}};Tee.Data.Dimension=function(v,t,d){this.engine=this.parent=this.dataset=null;this.subDimensions=[];this.field=t;this.id=d;this.title=v||t;this.nulls=!0;this.hasID="undefined"!==typeof d&&null!==d&&""!==d;this.metrics=[];this.links=[];this.select=this.selected=null;this.selectedInclude=!0;this.dateKeys={c:"Century",x:"Decade",y:"Year",m:"Month",w:"Weekday",
d:"Day"};this.addDimension=function(a,c,b){return this.addSubDimension(this,a,c,b)};this.addSubDimension=function(a,c,b,f){c=new Tee.Data.Dimension(c,b,f);c.engine=this.engine;if(c.parent=a)c.dataset=a.dataset,c.dataset&&(c.index=c.dataset.dimensions.push(c)),a.subDimensions.push(c);return c};this.addMetric=function(a,c,b){a=new Tee.Data.Metric(this,a,c);b&&(a.measure=b);this.metrics.push(a);return a};this.addLink=function(a,c,b){a={field:a,dimension:c,datasetField:b,parent:this};this.links.push(a);
return a};this.hasParent=function(a){for(var c=this.parent;c;){if(c==a)return!0;c=c.parent}return!1};this.inSelected=function(a){return this.select?this.select(a):this.selected instanceof Array?this.selectedInclude?-1!=this.selected.indexOf(a):-1==this.selected.indexOf(a):this.selectedInclude?this.selected==a:this.selected!=a};this.get=function(a){var c=this.id,b,f=this.datetime,d=this;this.traverse(function(e){f&&(e=d.datePart(e));return a==(c?e[c]:e)?(b=e,!1):!0});return b};this.datePart=function(a){var c=
this.datetime,b=c.selected;if("string"==typeof a){var f=a.match(/(\d+)/g);if("y"==b)return f[c.yearField||2];if("m"==b)return f[c.monthField||0];if("x"==b)return 10*(parseInt(f[2],10)/10|0);if("d"==b)return f[c.dayField||1];if("w"==b)return(new Date(a)).getDay()}else if(a instanceof Date){if("y"==b)return a.getFullYear();if("m"==b)return a.getMonth()+1;if("x"==b)return 10*(a.getFullYear()/10|0);if("d"==b)return a.getDate();if("w"==b)return a.getDay()}return a};this.getValues=function(){var a=[],c=
this.field,b=this.id,f=this;this.traverse(function(d){b&&(d=c?d[c]:d[b]);f.datetime&&(d=f.datePart(d));-1==a.indexOf(d)&&a.push(d);return!0});return a};this.getIds=function(){var a=[],c,b=this.id,f=this.field,d=this;(this.parent?this.parent:this).traverse(function(e){c=b?e[b]:f?e[f]:e;d.datetime&&(c=d.datePart(c));(d.nulls||c)&&-1==a.indexOf(c)&&a.push(c);return!0});return a};this.isSelected=function(a){return this.select?this.select(a):this.selected?this.inSelected(a):!0};this.anySelected=function(){if(this.select)return!0;
var a=this.selected;if(null!==a&&"undefined"!=typeof a)if(a instanceof Array)for(var c=0;c<a.length;c++){if(a[c])return!0}else return!0;return!1};this.toggleSelected=function(a,c){this.selected||(this.selected=[]);var b=a.data.code[c],f=this.selected.indexOf(b);-1===f?this.selected.push(b):(this.selected.splice(f,1),0===this.selected.length&&(this.selected=null));a.chart.setSeriesPalette(a,this)};this.traverse=function(a){function c(f,d){var e=b[d];var g=e.anySelected();var l=e.field?f[e.field]:f,
m=e.parent?f:l;if(!g||e.isSelected(e.id?m[e.id]:m))if(e.data=m,l instanceof Array)if(g=l.length,0<d)for(e=0;e<g;e++){if(!c(l[e],d-1))return!1}else for(e=0;e<g;e++){if(!a(l[e],e))return!1}else if(0<d){a:if(l&&"object"===typeof l){var t=Object.keys(l),q=t.length,p=b[0],u=p.anySelected();for(e=0;e<q;e++)if(m=t[e],!u||p.isSelected(m))if(g=l[m],p.data=g,!a(g,m)){l=!1;break a}l=!0}else l=a(l,void 0);if(!l)return!1}else if(!a(m))return!1;return!0}var b=[],f=this;do b.push(f);while(f=f.parent);(f=this.dataset.object)&&
c(f,b.length-1)};this.searchAcross=function(a,c){for(var b=c,f=this,d=0;d<a.length;d++)b=f.search(a[d],b,0<d),d<a.length-1&&(f=a[d+1].parent,a[d+1].searchDimension=f);b&&this.engine.cache&&(c.cache||(c.cache=[]),c.cache[this.index]||(c.cache[this.index]=b));return b};this.search=function(a,c,b){if(c.cache&&c.cache[this.index])return c.cache[this.index];var d=null,g,e=a.search,h=b?a.field:a.datasetField;b=b?a.datasetField:a.field;var k=b instanceof Array;if(k){var l=[];for(g=0;g<b.length;g++)l.push(c[b[g]])}else l=
c[b];a=a.searchDimension||a.dimension;do if(a.traverse(function(a){if(e){if(e(a,c))return d=a,!1}else if(k){var b=!0;for(g=0;g<l.length;g++)if(a[h[g]]!==l[g]){b=!1;break}if(b)return d=a,!1}else if(a[h]==l)return d=a,!1;return!0}),d){if(a.dataset!==this.dataset)return d;if(a!==this)if(a.parent)a=a.parent,d=a.data;else break}else break;while(a!==this);return d?this.id?d:d[this.field]:null};this.getLinksTo=function(a){if(a&&a!=this.dataset&&a.dataset!=this.dataset){var c=[],b=y(a,this,c);b||(b=y(this,
a,c));return b?c:null}return[{field:null,dimension:a,datasetField:null,parent:this}]}}}).call(this);
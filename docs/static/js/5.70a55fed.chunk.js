(this["webpackJsonpcra-template"]=this["webpackJsonpcra-template"]||[]).push([[5],{542:function(e,t,n){e.exports={"graph-container":"graph-container__1rFgy4GXGo"}},551:function(e,t,n){"use strict";n.r(t);var o,a=n(31),r=n.n(a),i=n(74),d=n(20),s=n(22),c=n(35),u=n(36),l=n(0),h=n.n(l),p=n(250),f=n(6),g=n(540),m=n.n(g),v=n(231),b=n(542),y=n.n(b),E=n(21),k=new(function(){function e(){Object(d.a)(this,e),this.subs={}}return Object(s.a)(e,[{key:"$on",value:function(e,t){this.subs[e]=this.subs[e]||[],this.subs[e].push(t)}},{key:"$emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this.subs[e]=this.subs[e]||[],this.subs[e].forEach((function(e){e.apply(void 0,n)}))}}]),e}()),w=null,M=!1,j=null,x=null,I=[],O={"add-edge":{getEvents:function(){return{mousedown:"onMousedown",mouseup:"onMouseup",mousemove:"onMousemove","node:mouseenter":"nodeMouseEnter"}},onMousedown:function(e){e.stopPropagation();var t=e.item.getModel();j=t.id,M||(k.$emit("addingEdge",!0),this.graph.getNodes().forEach((function(e){var t=e.getContainer().find((function(e){return"node-topPoint"===e.get("name")}));I.push(t),t.attr("opacity",1)})),w=this.graph.addItem("edge",{source:j,target:j,sourceAnchor:1}),M=!0)},onMouseup:function(e){e.stopPropagation();var t=e.item;if("node"===t.getType()&&M&&w){var n=t.getModel();x=n.id,-1!==this.graph.save().edges.findIndex((function(e){return e.source===j&&e.target===x}))?this.graph.removeItem(w):this.graph.updateItem(w,{target:x,targetAnchor:0})}"node"!==t.getType()&&this.graph.removeItem(w),I.forEach((function(e){e.attr("opacity",0)})),k.$emit("addingEdge",!1),I=[],M=!1,w=null,"default"!==this.graph.getCurrentMode()&&this.graph.setMode("default")},onMousemove:function(e){if(M&&w){var t={x:e.x,y:e.y};this.graph.updateItem(w,{target:t})}},nodeMouseEnter:function(){}}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:150,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;m.a.registerNode("custom-node",{draw:function(n,o){var a=o.addShape("rect",{attrs:{x:0,y:0,width:e,height:t,stroke:"blue",fill:"#fff",radius:4,cursor:"move"},name:"node-rect-keyShape"});return o.addShape("text",{attrs:{text:n.label,x:19,y:19,fontSize:14,fontWeight:700,textAlign:"left",textBaseline:"middle",fill:"blue",cursor:"move"},draggable:!0,name:"node-text"}),o.addShape("circle",{attrs:{x:e/2,y:0,r:5,fill:"#fff",stroke:"blue",opacity:0},name:"node-topPoint"}),o.addShape("circle",{attrs:{x:e/2,y:t,r:5,fill:"#fff",stroke:"blue",opacity:0,cursor:"crosshair"},name:"node-bottomPoint"}),a},afterDraw:function(e,t){var n=t.find((function(e){return"node-bottomPoint"===e.get("name")}));n&&(n.on("mouseenter",(function(){n.attr("fill","blue")})),n.on("mouseleave",(function(){n.attr({fill:"#fff"})})),n.on("mousedown",(function(e){k.$emit("bottomPointMousedown")})))}},"rect")},S=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).graph=null,o.graphId="graph-container",o.selectedNode=null,o.hoverNode=null,o.addingEdge=!1,o.state={},o.data={},o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){N(),Object.entries(O).forEach((function(e){var t=Object(E.a)(e,2),n=t[0],o=t[1];m.a.registerBehavior(n,o)})),this.init(),this.bindEvent()}},{key:"init",value:function(){this.graph=new m.a.Graph({container:this.graphId,width:1e3,height:500,fitCenter:!0,defaultNode:{type:"custom-node",style:{}},defaultEdge:{type:"cubic-vertical",style:{stroke:"#5B8FF9",endArrow:!0,lineWidth:3}},modes:{default:["drag-canvas","drag-node"],addEdge:["add-edge"]},nodeStateStyles:{selected:{lineWidth:4,"node-text":{fill:"gray"},"node-bottomPoint":{opacity:1},"node-topPoint":{opacity:1}},hover:{lineWidth:2,"node-bottomPoint":{opacity:1},"node-topPoint":{opacity:1}}},edgeStateStyles:{hover:{stroke:"red"},selected:{lineWidth:8}}}),this.graph.read(this.data)}},{key:"bindEvent",value:function(){var e=this;this.graph.on("node:mouseenter",(function(t){var n=t.item;e.hoverNode=n,e.addingEdge||e.graph.setItemState(n,"hover",!0)})),this.graph.on("node:mouseleave",(function(t){var n=t.item;e.addingEdge||e.graph.setItemState(n,"hover",!1)})),this.graph.on("click",(function(){e.selectedNode&&(e.graph.setItemState(e.selectedNode,"selected",!1),e.selectedNode=null)})),this.graph.on("node:click",(function(t){var n=t.item;e.selectedNode=n,e.graph.setItemState(n,"selected",!0)})),k.$on("bottomPointMousedown",(function(){e.graph.setMode("addEdge")})),k.$on("addingEdge",(function(t){e.addingEdge=t,!t&&e.hoverNode&&(e.graph.setItemState(e.hoverNode,"hover",!1),e.hoverNode=null)}))}},{key:"addNode",value:function(){var e=Object(v.uniqueId)(),t={id:"rect".concat(e),label:"\u81ea\u5b9a\u4e49\u8282\u70b9rect".concat(e),x:350+100*Math.random(),y:50,anchorPoints:[[.5,0],[.5,1]]};this.graph.addItem("node",t)}},{key:"consoleData",value:function(){console.log(this.graph.save())}},{key:"render",value:function(){var e=this;return h.a.createElement("div",null,h.a.createElement("button",{type:"button",onClick:function(){return e.addNode()}},"\u6dfb\u52a0\u8282\u70b9"),h.a.createElement("button",{type:"button",onClick:function(){return e.consoleData()},style:{marginLeft:16}},"\u6253\u5370\u6570\u636e"),h.a.createElement("div",{className:y.a["graph-container"],id:this.graphId}))}}]),n}(l.Component),P=Object(p.b)("list")(o=Object(p.c)(o=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(Object(f.q)(this.props.list)),t=this.props.list.getInterfaceList,e.t0=console,e.next=5,t();case 5:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement(S,null))}}]),n}(l.Component))||o)||o;t.default=P}}]);
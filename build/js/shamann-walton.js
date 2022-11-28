function drawChart(){var t=20,e=40,a=30,r=40,o=650-r-e,i=350-t-a,l=2e3;var s=d3.select("#chart").append("svg").attr("width",o+r+e).attr("height",i+t+a).call((function(t){const e=d3.select(t.node().parentNode),a=parseInt(t.style("width"),10),r=parseInt(t.style("height"),10),o=a/r;function i(){const a=parseInt(e.style("width"));t.attr("width",a),t.attr("height",Math.round(a/o))}t.attr("viewBox",`0 0 ${a} ${r}`).attr("preserveAspectRatio","xMinYMid").call(i),d3.select(window).on("resize."+e.attr("id"),i)})).append("g").attr("transform",`translate(${r}, ${t})`),n=[{x:1965,y:.25},{x:1967,y:.4},{x:1968,y:.32},{x:1970,y:.55},{x:1973,y:.43},{x:1974,y:.45},{x:1975,y:.65},{x:1976,y:.68},{x:1979,y:.99},{x:1980,y:.97},{x:1983,y:1.25},{x:1984,y:1.2},{x:1985,y:1.34},{x:1986,y:1.31},{x:1987,y:1.57},{x:1988,y:1.52},{x:1989,y:1.78},{x:1992,y:1.55},{x:1993,y:1.72},{x:1994,y:2.2},{x:1995,y:1.99},{x:1997,y:2.3},{x:1998,y:2.8},{x:1999,y:3.8},{x:2001,y:3.6},{x:2003,y:3.76},{x:2004,y:3.82},{x:2005,y:3.5},{x:2006,y:3.9},{x:2007,y:4.2},{x:2008,y:4.17},{x:2009,y:4.24},{x:2011,y:4.85},{x:2012,y:5.25},{x:2014,y:5.75},{x:2015,y:6.2},{x:2017,y:6.4},{x:2019,y:6.28},{x:2020,y:6.8}],c=[1970,1979,1986,1994,1999,2005,2012,2019],p=n.filter((t=>c.includes(t.x))),d=d3.scaleLinear().domain([1965,2020]).range([0,o]),y=d3.axisBottom(d).ticks(9).tickFormat(((t,e)=>0!==e?`'${t.toString().split("").slice(2).join("")}`:"")).tickPadding(15).tickSizeInner(-i);s.append("g").attr("transform","translate(0,"+i+")").call(y);var u=d3.scaleLinear().domain([0,7]).range([i,0]),g=d3.axisLeft(u);g.ticks(9).tickPadding(10).tickFormat(((t,e)=>0!==e?`$${t}M`:`${t}`)).tickSizeInner(-o),s.append("g").call(g);let x=d3.line().x((t=>d(t[0]))).y((t=>u(t[1])));s.append("path").attr({d:x(n),class:"lineChart"});s.append("path").datum(n).attr("fill","url(#gradient)").attr("stroke","none").attr("fill-opacity",0).transition().delay(l).duration(2500).attr("fill-opacity",.3).attr("d",d3.area().x((function(t){return d(t.x)})).y0(i).y1((function(t){return u(t.y)}))),s.append("defs"),s.call((t=>{const e=t.select("defs").append("linearGradient").attr("id","gradient").attr("x1","0%").attr("y1","100%").attr("x2","0%").attr("y2","0%");e.append("stop").attr("offset","0%").attr("style","stop-color:#2028E833;"),e.append("stop").attr("offset","100%").attr("style","stop-color:#2028E8bb;")}));let f=s.append("path").datum(n).attr("fill","none").attr("stroke-width",2).attr("d",d3.line().x((function(t){return d(t.x)})).y((function(t){return u(t.y)})));var m=f.node().getTotalLength();f.attr("stroke-dasharray",m+" "+m).attr("stroke-dashoffset",m).attr("stroke","skyblue").transition().delay(1e3).duration(2e3).ease(d3.easeCircleIn).attr("stroke","#3D35F1").attr("stroke-dashoffset",0),s.selectAll("w").data(p).enter().append("circle").attr("fill","#3D35F1").attr("stroke","white").attr("cy",i).attr("cx",(function(t){return d(t.x)})).attr("r",10).attr("opacity",0).attr("stroke-width",0).attr("fill","#3D35F1").transition().delay(l).delay(((t,e)=>120*e+1e3)).duration(2e3).ease(d3.easeElasticOut).attr("cx",(function(t){return d(t.x)})).attr("cy",(function(t){return u(t.y)})).attr("r",3).attr("stroke-width",2.3).attr("fill","white").attr("stroke","#3D35F1").attr("opacity",1)}const observer=new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.isIntersecting&&(drawChart(),e.unobserve(t.target))}))}),{threshold:.2}),target=document.querySelector("#chart-container");observer.observe(target),gsap.registerPlugin(ScrollTrigger);const purpleTl=gsap.timeline({scrollTrigger:{trigger:"#purple-message",start:"top 100%",end:"top 15%"},defaults:{duration:1,ease:"pow3.out()"}}).from("#purple-message",{opacity:0,x:-50,delay:.1}).from("#purple-message > p",{filter:"blur(2px)",opacity:0,x:100},"<"),mapTl=gsap.timeline({scrollTrigger:{trigger:"#map-container",start:"top 100%",end:"top 15%"}}).fromTo("#map-container",{opacity:0,filter:"saturate(0%)"},{opacity:1,filter:"saturate(120%)",duration:2,ease:"pow3.Out"}).from("#map-image",{scale:1.3,rotate:60,opacity:0,duration:1.2,ease:"Expo.inOut(2)"},"<").from("#san-francisco-city-map",{opacity:0,filter:"grayscale(1)",duration:.4,ease:"circ.Out()"},"<50%").from("#san-francisco-pin",{scale:2,opacity:0,duration:.4,ease:"circ.out(2)"},"<50%").from("#map-container-center",{scale:2,opacity:0,duration:.4,ease:"circ.out(2)"},"<50%").from(".map-location-label",{scale:0,opacity:0,duration:.4,stagger:-.5,ease:"back.out(2)"},"<").from(".map-container-circle",{opacity:0,scale:.5,duration:.8,stagger:-.2,ease:"back.out(2)"},"<").from(".broadcast-label",{scale:2,opacity:0,duration:.8,stagger:-.5,ease:"back.out(2)"},"<25%").from(".broadcast-label > div",{xPercent:0,scale:0,opacity:0,duration:.3,stagger:-.5,ease:"circ.out()"},"<10%"),logosTl=gsap.timeline({scrollTrigger:{trigger:".tv-logo",start:"top 100%"}});logosTl.from(".tv-logo",{opacity:0,rotateY:50,x:-30,duration:.7,stagger:.1,ease:"back.out(2)"}),gsap.from("#walton-circle-image",{scrollTrigger:{trigger:"#walton-circle-image",start:"-50px 100%"},opacity:0,filter:"grayscale(1) blur(5px)",xPercent:15,duration:1,ease:"quad.0ut"});const bubble=document.querySelector(".bubble-container"),megaTl=gsap.timeline({scrollTrigger:{trigger:"#mass_media_circle",start:"40% 100%"}}).from("#megaphone",{rotate:60,opacity:0,scale:0,x:350,y:300,duration:1,ease:"back.out(1.7)"}).fromTo(bubble,{opacity:0,scale:0,rotate:20,x:200,y:100},{opacity:1,scale:1,x:0,y:0,rotate:-2,duration:.8,ease:"back.out(3)"},"<75%").from(bubble.querySelector("p"),{filter:"blur(4px)",scale:1.1,opacity:0,duration:.5,ease:"circ.out"}),popupOverlay=document.querySelector(".popup-overlay"),popup=document.querySelector("#video-popup"),ytPlayerIframe=document.querySelector(".yt_player_iframe"),openPopup=t=>{popupOverlay.classList.remove("hidden"),popupOverlay.classList.toggle("animate__animated"),popup.classList.toggle("hidden"),document.querySelector("body").classList.add("overflow-hidden");let e=ytPlayerIframe.cloneNode();e.src="https://www.youtube.com/embed/rHQnWL0zY8U?autoplay=1&playsinline=1",e.setAttribute("allowfullscreen","allowfullscreen"),popup.appendChild(e)},closePopup=()=>{popupOverlay.classList.add("hidden"),popup.classList.add("hidden"),popup.querySelector(".yt_player_iframe").remove(),document.querySelector("body").classList.remove("overflow-hidden")};
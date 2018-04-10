/* jqplot 1.0.9 | (c) 2009-2016 Chris Leonello | jplot.com
   jsDate | (c) 2010-2016 Chris Leonello
 */
!function(a){function b(b){a.jqplot.ElemContainer.call(this),this.name=b,this._series=[],this.show=!1,this.tickRenderer=a.jqplot.AxisTickRenderer,this.tickOptions={},this.labelRenderer=a.jqplot.AxisLabelRenderer,this.labelOptions={},this.label=null,this.showLabel=!0,this.min=null,this.max=null,this.autoscale=!1,this.pad=1.2,this.padMax=null,this.padMin=null,this.ticks=[],this.numberTicks,this.tickInterval,this.renderer=a.jqplot.LinearAxisRenderer,this.rendererOptions={},this.showTicks=!0,this.showTickMarks=!0,this.showMinorTicks=!0,this.drawMajorGridlines=!0,this.drawMinorGridlines=!1,this.drawMajorTickMarks=!0,this.drawMinorTickMarks=!0,this.useSeriesColor=!1,this.borderWidth=null,this.borderColor=null,this.scaleToHiddenSeries=!1,this._dataBounds={min:null,max:null},this._intervalStats=[],this._offsets={min:null,max:null},this._ticks=[],this._label=null,this.syncTicks=null,this.tickSpacing=75,this._min=null,this._max=null,this._tickInterval=null,this._numberTicks=null,this.__ticks=null,this._options={}}function c(b){a.jqplot.ElemContainer.call(this),this.show=!1,this.location="ne",this.labels=[],this.showLabels=!0,this.showSwatches=!0,this.placement="insideGrid",this.xoffset=0,this.yoffset=0,this.border,this.background,this.textColor,this.fontFamily,this.fontSize,this.rowSpacing="0.5em",this.renderer=a.jqplot.TableLegendRenderer,this.rendererOptions={},this.preDraw=!1,this.marginTop=null,this.marginRight=null,this.marginBottom=null,this.marginLeft=null,this.escapeHtml=!1,this._series=[],a.extend(!0,this,b)}function d(b){a.jqplot.ElemContainer.call(this),this.text=b,this.show=!0,this.fontFamily,this.fontSize,this.textAlign,this.textColor,this.renderer=a.jqplot.DivTitleRenderer,this.rendererOptions={},this.escapeHtml=!1}function e(b){b=b||{},a.jqplot.ElemContainer.call(this),this.show=!0,this.xaxis="xaxis",this._xaxis,this.yaxis="yaxis",this._yaxis,this.gridBorderWidth=2,this.renderer=a.jqplot.LineRenderer,this.rendererOptions={},this.data=[],this.gridData=[],this.label="",this.showLabel=!0,this.color,this.negativeColor,this.lineWidth=2.5,this.lineJoin="round",this.lineCap="round",this.linePattern="solid",this.shadow=!0,this.shadowAngle=45,this.shadowOffset=1.25,this.shadowDepth=3,this.shadowAlpha="0.1",this.breakOnNull=!1,this.markerRenderer=a.jqplot.MarkerRenderer,this.markerOptions={},this.showLine=!0,this.showMarker=!0,this.index,this.fill=!1,this.fillColor,this.fillAlpha,this.fillAndStroke=!1,this.disableStack=!1,this._stack=!1,this.neighborThreshold=4,this.fillToZero=!1,this.fillToValue=0,this.fillAxis="y",this.useNegativeColors=!0,this._stackData=[],this._plotData=[],this._plotValues={x:[],y:[]},this._intervals={x:{},y:{}},this._prevPlotData=[],this._prevGridData=[],this._stackAxis="y",this._primaryAxis="_xaxis",this.canvas=new a.jqplot.GenericCanvas,this.shadowCanvas=new a.jqplot.GenericCanvas,this.plugins={},this._sumy=0,this._sumx=0,this._type="",this.step=!1}function f(){a.jqplot.ElemContainer.call(this),this.drawGridlines=!0,this.gridLineColor="#cccccc",this.gridLineWidth=1,this.background="#fffdf6",this.borderColor="#999999",this.borderWidth=2,this.drawBorder=!0,this.shadow=!0,this.shadowAngle=45,this.shadowOffset=1.5,this.shadowWidth=3,this.shadowDepth=3,this.shadowColor=null,this.shadowAlpha="0.07",this._left,this._top,this._right,this._bottom,this._width,this._height,this._axes=[],this.renderer=a.jqplot.CanvasGridRenderer,this.rendererOptions={},this._offsets={top:null,bottom:null,left:null,right:null}}function g(){function h(a){for(var b,c=0;c<a.length;c++)for(var d,e=[a[c].data,a[c]._stackData,a[c]._plotData,a[c]._prevPlotData],f=0;4>f;f++)if(d=!0,b=e[f],"x"==a[c]._stackAxis){for(var g=0;g<b.length;g++)if("number"!=typeof b[g][1]){d=!1;break}d&&b.sort(function(a,b){return a[1]-b[1]})}else{for(var g=0;g<b.length;g++)if("number"!=typeof b[g][0]){d=!1;break}d&&b.sort(function(a,b){return a[0]-b[0]})}}function i(a){var b,c,d=a.data.plot,e=d.eventCanvas._elem.offset(),f={x:a.pageX-e.left,y:a.pageY-e.top},g={xaxis:null,yaxis:null,x2axis:null,y2axis:null,y3axis:null,y4axis:null,y5axis:null,y6axis:null,y7axis:null,y8axis:null,y9axis:null,yMidAxis:null},h=["xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis","yMidAxis"],i=d.axes;for(b=11;b>0;b--)c=h[b-1],i[c].show&&(g[c]=i[c].series_p2u(f[c.charAt(0)]));return{offsets:e,gridPos:f,dataPos:g}}function j(b,c){function d(a,b,c){var d=(b[1]-c[1])/(b[0]-c[0]),e=b[1]-d*b[0],f=a+b[1];return[(f-e)/d,f]}var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x=c.series;for(g=c.seriesStack.length-1;g>=0;g--)switch(e=c.seriesStack[g],h=x[e],u=h._highlightThreshold,h.renderer.constructor){case a.jqplot.BarRenderer:for(j=b.x,k=b.y,f=0;f<h._barPoints.length;f++)if(t=h._barPoints[f],s=h.gridData[f],j>t[0][0]&&j<t[2][0]&&(k>t[2][1]&&k<t[0][1]||k<t[2][1]&&k>t[0][1]))return{seriesIndex:h.index,pointIndex:f,gridData:s,data:h.data[f],points:h._barPoints[f]};break;case a.jqplot.PyramidRenderer:for(j=b.x,k=b.y,f=0;f<h._barPoints.length;f++)if(t=h._barPoints[f],s=h.gridData[f],j>t[0][0]+u[0][0]&&j<t[2][0]+u[2][0]&&k>t[2][1]&&k<t[0][1])return{seriesIndex:h.index,pointIndex:f,gridData:s,data:h.data[f],points:h._barPoints[f]};break;case a.jqplot.DonutRenderer:if(n=h.startAngle/180*Math.PI,j=b.x-h._center[0],k=b.y-h._center[1],i=Math.sqrt(Math.pow(j,2)+Math.pow(k,2)),j>0&&-k>=0?l=2*Math.PI-Math.atan(-k/j):j>0&&0>-k?l=-Math.atan(-k/j):0>j?l=Math.PI-Math.atan(-k/j):0==j&&-k>0?l=3*Math.PI/2:0==j&&0>-k?l=Math.PI/2:0==j&&0==k&&(l=0),n&&(l-=n,0>l?l+=2*Math.PI:l>2*Math.PI&&(l-=2*Math.PI)),m=h.sliceMargin/180*Math.PI,i<h._radius&&i>h._innerRadius)for(f=0;f<h.gridData.length;f++)if(o=f>0?h.gridData[f-1][1]+m:m,p=h.gridData[f][1],l>o&&p>l)return{seriesIndex:h.index,pointIndex:f,gridData:[b.x,b.y],data:h.data[f]};break;case a.jqplot.PieRenderer:if(n=h.startAngle/180*Math.PI,j=b.x-h._center[0],k=b.y-h._center[1],i=Math.sqrt(Math.pow(j,2)+Math.pow(k,2)),j>0&&-k>=0?l=2*Math.PI-Math.atan(-k/j):j>0&&0>-k?l=-Math.atan(-k/j):0>j?l=Math.PI-Math.atan(-k/j):0==j&&-k>0?l=3*Math.PI/2:0==j&&0>-k?l=Math.PI/2:0==j&&0==k&&(l=0),n&&(l-=n,0>l?l+=2*Math.PI:l>2*Math.PI&&(l-=2*Math.PI)),m=h.sliceMargin/180*Math.PI,i<h._radius)for(f=0;f<h.gridData.length;f++)if(o=f>0?h.gridData[f-1][1]+m:m,p=h.gridData[f][1],l>o&&p>l)return{seriesIndex:h.index,pointIndex:f,gridData:[b.x,b.y],data:h.data[f]};break;case a.jqplot.BubbleRenderer:j=b.x,k=b.y;var y=null;if(h.show){for(var f=0;f<h.gridData.length;f++)s=h.gridData[f],r=Math.sqrt((j-s[0])*(j-s[0])+(k-s[1])*(k-s[1])),r<=s[2]&&(q>=r||null==q)&&(q=r,y={seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]});if(null!=y)return y}break;case a.jqplot.FunnelRenderer:j=b.x,k=b.y;var z,A,B,C=h._vertices,D=C[0],E=C[C.length-1];for(z=d(k,D[0],E[3]),A=d(k,D[1],E[2]),f=0;f<C.length;f++)if(B=C[f],k>=B[0][1]&&k<=B[3][1]&&j>=z[0]&&j<=A[0])return{seriesIndex:h.index,pointIndex:f,gridData:null,data:h.data[f]};break;case a.jqplot.LineRenderer:if(j=b.x,k=b.y,i=h.renderer,h.show){if(!(!(h.fill||h.renderer.bands.show&&h.renderer.bands.fill)||c.plugins.highlighter&&c.plugins.highlighter.show)){var F=!1;if(j>h._boundingBox[0][0]&&j<h._boundingBox[1][0]&&k>h._boundingBox[1][1]&&k<h._boundingBox[0][1])for(var G,H=h._areaPoints.length,f=H-1,G=0;H>G;G++){var I=[h._areaPoints[G][0],h._areaPoints[G][1]],J=[h._areaPoints[f][0],h._areaPoints[f][1]];(I[1]<k&&J[1]>=k||J[1]<k&&I[1]>=k)&&I[0]+(k-I[1])/(J[1]-I[1])*(J[0]-I[0])<j&&(F=!F),f=G}if(F)return{seriesIndex:e,pointIndex:null,gridData:h.gridData,data:h.data,points:h._areaPoints};break}w=h.markerRenderer.size/2+h.neighborThreshold,v=w>0?w:0;for(var f=0;f<h.gridData.length;f++)if(s=h.gridData[f],i.constructor==a.jqplot.OHLCRenderer)if(i.candleStick){var K=h._yaxis.series_u2p;if(j>=s[0]-i._bodyWidth/2&&j<=s[0]+i._bodyWidth/2&&k>=K(h.data[f][2])&&k<=K(h.data[f][3]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else if(i.hlc){var K=h._yaxis.series_u2p;if(j>=s[0]-i._tickLength&&j<=s[0]+i._tickLength&&k>=K(h.data[f][1])&&k<=K(h.data[f][2]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else{var K=h._yaxis.series_u2p;if(j>=s[0]-i._tickLength&&j<=s[0]+i._tickLength&&k>=K(h.data[f][2])&&k<=K(h.data[f][3]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else if(null!=s[0]&&null!=s[1]&&(r=Math.sqrt((j-s[0])*(j-s[0])+(k-s[1])*(k-s[1])),v>=r&&(q>=r||null==q)))return q=r,{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}break;default:if(j=b.x,k=b.y,i=h.renderer,h.show){w=h.markerRenderer.size/2+h.neighborThreshold,v=w>0?w:0;for(var f=0;f<h.gridData.length;f++)if(s=h.gridData[f],i.constructor==a.jqplot.OHLCRenderer)if(i.candleStick){var K=h._yaxis.series_u2p;if(j>=s[0]-i._bodyWidth/2&&j<=s[0]+i._bodyWidth/2&&k>=K(h.data[f][2])&&k<=K(h.data[f][3]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else if(i.hlc){var K=h._yaxis.series_u2p;if(j>=s[0]-i._tickLength&&j<=s[0]+i._tickLength&&k>=K(h.data[f][1])&&k<=K(h.data[f][2]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else{var K=h._yaxis.series_u2p;if(j>=s[0]-i._tickLength&&j<=s[0]+i._tickLength&&k>=K(h.data[f][2])&&k<=K(h.data[f][3]))return{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}else if(r=Math.sqrt((j-s[0])*(j-s[0])+(k-s[1])*(k-s[1])),v>=r&&(q>=r||null==q))return q=r,{seriesIndex:e,pointIndex:f,gridData:s,data:h.data[f]}}}return null}this.animate=!1,this.animateReplot=!1,this.axes={xaxis:new b("xaxis"),yaxis:new b("yaxis"),x2axis:new b("x2axis"),y2axis:new b("y2axis"),y3axis:new b("y3axis"),y4axis:new b("y4axis"),y5axis:new b("y5axis"),y6axis:new b("y6axis"),y7axis:new b("y7axis"),y8axis:new b("y8axis"),y9axis:new b("y9axis"),yMidAxis:new b("yMidAxis")},this.baseCanvas=new a.jqplot.GenericCanvas,this.captureRightClick=!1,this.data=[],this.dataRenderer,this.dataRendererOptions,this.defaults={axesDefaults:{},axes:{xaxis:{},yaxis:{},x2axis:{},y2axis:{},y3axis:{},y4axis:{},y5axis:{},y6axis:{},y7axis:{},y8axis:{},y9axis:{},yMidAxis:{}},seriesDefaults:{},series:[]},this.defaultAxisStart=1,this.drawIfHidden=!1,this.eventCanvas=new a.jqplot.GenericCanvas,this.fillBetween={series1:null,series2:null,color:null,baseSeries:0,fill:!0},this.fontFamily,this.fontSize,this.grid=new f,this.legend=new c,this.noDataIndicator={show:!1,indicator:"Loading Data...",axes:{xaxis:{min:0,max:10,tickInterval:2,show:!0},yaxis:{min:0,max:12,tickInterval:3,show:!0}}},this.negativeSeriesColors=a.jqplot.config.defaultNegativeColors,this.options={},this.previousSeriesStack=[],this.plugins={},this.series=[],this.seriesStack=[],this.seriesColors=a.jqplot.config.defaultColors,this.sortData=!0,this.stackSeries=!1,this.syncXTicks=!0,this.syncYTicks=!0,this.target=null,this.targetId=null,this.textColor,this.title=new d,this._drawCount=0,this._sumy=0,this._sumx=0,this._stackData=[],this._plotData=[],this._width=null,this._height=null,this._plotDimensions={height:null,width:null},this._gridPadding={top:null,right:null,bottom:null,left:null},this._defaultGridPadding={top:10,right:10,bottom:23,left:10},this._addDomReference=a.jqplot.config.addDomReference,this.preInitHooks=new a.jqplot.HooksManager,this.postInitHooks=new a.jqplot.HooksManager,this.preParseOptionsHooks=new a.jqplot.HooksManager,this.postParseOptionsHooks=new a.jqplot.HooksManager,this.preDrawHooks=new a.jqplot.HooksManager,this.postDrawHooks=new a.jqplot.HooksManager,this.preDrawSeriesHooks=new a.jqplot.HooksManager,this.postDrawSeriesHooks=new a.jqplot.HooksManager,this.preDrawLegendHooks=new a.jqplot.HooksManager,this.addLegendRowHooks=new a.jqplot.HooksManager,this.preSeriesInitHooks=new a.jqplot.HooksManager,this.postSeriesInitHooks=new a.jqplot.HooksManager,this.preParseSeriesOptionsHooks=new a.jqplot.HooksManager,this.postParseSeriesOptionsHooks=new a.jqplot.HooksManager,this.eventListenerHooks=new a.jqplot.EventListenerManager,this.preDrawSeriesShadowHooks=new a.jqplot.HooksManager,this.postDrawSeriesShadowHooks=new a.jqplot.HooksManager,this.colorGenerator=new a.jqplot.ColorGenerator,this.negativeColorGenerator=new a.jqplot.ColorGenerator,this.canvasManager=new a.jqplot.CanvasManager,this.themeEngine=new a.jqplot.ThemeEngine;this.init=function(c,d,e){e=e||{};for(var f=0;f<a.jqplot.preInitHooks.length;f++)a.jqplot.preInitHooks[f].call(this,c,d,e);for(var f=0;f<this.preInitHooks.hooks.length;f++)this.preInitHooks.hooks[f].call(this,c,d,e);if(this.targetId="#"+c,this.target=a("#"+c),this._addDomReference&&this.target.data("jqplot",this),this.target.removeClass("jqplot-error"),!this.target.get(0))throw new Error("No plot target specified");if("static"==this.target.css("position")&&this.target.css("position","relative"),this.target.hasClass("jqplot-target")||this.target.addClass("jqplot-target"),this.target.height())this._height=g=this.target.height();else{var g;g=e&&e.height?parseInt(e.height,10):this.target.attr("data-height")?parseInt(this.target.attr("data-height"),10):parseInt(a.jqplot.config.defaultHeight,10),this._height=g,this.target.css("height",g+"px")}if(this.target.width())this._width=i=this.target.width();else{var i;i=e&&e.width?parseInt(e.width,10):this.target.attr("data-width")?parseInt(this.target.attr("data-width"),10):parseInt(a.jqplot.config.defaultWidth,10),this._width=i,this.target.css("width",i+"px")}for(var f=0,j=G.length;j>f;f++)this.axes[G[f]]=new b(G[f]);if(this._plotDimensions.height=this._height,this._plotDimensions.width=this._width,this.grid._plotDimensions=this._plotDimensions,this.title._plotDimensions=this._plotDimensions,this.baseCanvas._plotDimensions=this._plotDimensions,this.eventCanvas._plotDimensions=this._plotDimensions,this.legend._plotDimensions=this._plotDimensions,this._height<=0||this._width<=0||!this._height||!this._width)throw new Error("Canvas dimension not set");if(e.dataRenderer&&a.isFunction(e.dataRenderer)&&(e.dataRendererOptions&&(this.dataRendererOptions=e.dataRendererOptions),this.dataRenderer=e.dataRenderer,d=this.dataRenderer(d,this,this.dataRendererOptions)),e.noDataIndicator&&a.isPlainObject(e.noDataIndicator)&&a.extend(!0,this.noDataIndicator,e.noDataIndicator),null==d||0==a.isArray(d)||0==d.length||0==a.isArray(d[0])||0==d[0].length){if(0==this.noDataIndicator.show)throw new Error("No data specified");for(var k in this.noDataIndicator.axes)for(var l in this.noDataIndicator.axes[k])this.axes[k][l]=this.noDataIndicator.axes[k][l];this.postDrawHooks.add(function(){var b=this.eventCanvas.getHeight(),c=this.eventCanvas.getWidth(),d=a('<div class="jqplot-noData-container" style="position:absolute;"></div>');this.target.append(d),d.height(b),d.width(c),d.css("top",this.eventCanvas._offsets.top),d.css("left",this.eventCanvas._offsets.left);var e=a('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');d.append(e),e.html(this.noDataIndicator.indicator);var f=e.height(),g=e.width();e.height(f),e.width(g),e.css("top",(b-f)/2+"px")})}this.data=a.extend(!0,[],d),this.parseOptions(e),this.textColor&&this.target.css("color",this.textColor),this.fontFamily&&this.target.css("font-family",this.fontFamily),this.fontSize&&this.target.css("font-size",this.fontSize),this.title.init(),this.legend.init(),this._sumy=0,this._sumx=0,this.computePlotData();for(var f=0;f<this.series.length;f++){this.seriesStack.push(f),this.previousSeriesStack.push(f),this.series[f].shadowCanvas._plotDimensions=this._plotDimensions,this.series[f].canvas._plotDimensions=this._plotDimensions;for(var m=0;m<a.jqplot.preSeriesInitHooks.length;m++)a.jqplot.preSeriesInitHooks[m].call(this.series[f],c,this.data,this.options.seriesDefaults,this.options.series[f],this);for(var m=0;m<this.preSeriesInitHooks.hooks.length;m++)this.preSeriesInitHooks.hooks[m].call(this.series[f],c,this.data,this.options.seriesDefaults,this.options.series[f],this);this.series[f]._plotDimensions=this._plotDimensions,this.series[f].init(f,this.grid.borderWidth,this);for(var m=0;m<a.jqplot.postSeriesInitHooks.length;m++)a.jqplot.postSeriesInitHooks[m].call(this.series[f],c,this.data,this.options.seriesDefaults,this.options.series[f],this);for(var m=0;m<this.postSeriesInitHooks.hooks.length;m++)this.postSeriesInitHooks.hooks[m].call(this.series[f],c,this.data,this.options.seriesDefaults,this.options.series[f],this);this._sumy+=this.series[f]._sumy,this._sumx+=this.series[f]._sumx}for(var n,o,f=0,j=G.length;j>f;f++)n=G[f],o=this.axes[n],o._plotDimensions=this._plotDimensions,o.init(),null==this.axes[n].borderColor&&("x"!==n.charAt(0)&&o.useSeriesColor===!0&&o.show?o.borderColor=o._series[0].color:o.borderColor=this.grid.borderColor);this.sortData&&h(this.series),this.grid.init(),this.grid._axes=this.axes,this.legend._series=this.series;for(var f=0;f<a.jqplot.postInitHooks.length;f++)a.jqplot.postInitHooks[f].call(this,c,this.data,e);for(var f=0;f<this.postInitHooks.hooks.length;f++)this.postInitHooks.hooks[f].call(this,c,this.data,e)},this.resetAxesScale=function(b,c){var d=c||{},e=b||this.axes;if(e===!0&&(e=this.axes),a.isArray(e))for(var f=0;f<e.length;f++)this.axes[e[f]].resetScale(d[e[f]]);else if("object"==typeof e)for(var g in e)this.axes[g].resetScale(d[g])},this.reInitialize=function(c,d){for(var e=a.extend(!0,{},this.options,d),f=this.targetId.substr(1),g=null==c?this.data:c,i=0;i<a.jqplot.preInitHooks.length;i++)a.jqplot.preInitHooks[i].call(this,f,g,e);for(var i=0;i<this.preInitHooks.hooks.length;i++)this.preInitHooks.hooks[i].call(this,f,g,e);if(this._height=this.target.height(),this._width=this.target.width(),this._height<=0||this._width<=0||!this._height||!this._width)throw new Error("Target dimension not set");this._plotDimensions.height=this._height,this._plotDimensions.width=this._width,this.grid._plotDimensions=this._plotDimensions,this.title._plotDimensions=this._plotDimensions,this.baseCanvas._plotDimensions=this._plotDimensions,this.eventCanvas._plotDimensions=this._plotDimensions,this.legend._plotDimensions=this._plotDimensions;for(var j,k,l,m,i=0,n=G.length;n>i;i++){j=G[i],m=this.axes[j],k=m._ticks;for(var l=0,o=k.length;o>l;l++){var p=k[l]._elem;p&&(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F&&window.G_vmlCanvasManager.uninitElement(p.get(0)),p.emptyForce(),p=null,k._elem=null)}k=null,delete m.ticks,delete m._ticks,this.axes[j]=new b(j),this.axes[j]._plotWidth=this._width,this.axes[j]._plotHeight=this._height}c&&(e.dataRenderer&&a.isFunction(e.dataRenderer)&&(e.dataRendererOptions&&(this.dataRendererOptions=e.dataRendererOptions),this.dataRenderer=e.dataRenderer,c=this.dataRenderer(c,this,this.dataRendererOptions)),this.data=a.extend(!0,[],c)),d&&this.parseOptions(e),this.title._plotWidth=this._width,this.textColor&&this.target.css("color",this.textColor),this.fontFamily&&this.target.css("font-family",this.fontFamily),this.fontSize&&this.target.css("font-size",this.fontSize),this.title.init(),this.legend.init(),this._sumy=0,this._sumx=0,this.seriesStack=[],this.previousSeriesStack=[],this.computePlotData();for(var i=0,n=this.series.length;n>i;i++){this.seriesStack.push(i),this.previousSeriesStack.push(i),this.series[i].shadowCanvas._plotDimensions=this._plotDimensions,this.series[i].canvas._plotDimensions=this._plotDimensions;for(var l=0;l<a.jqplot.preSeriesInitHooks.length;l++)a.jqplot.preSeriesInitHooks[l].call(this.series[i],f,this.data,this.options.seriesDefaults,this.options.series[i],this);for(var l=0;l<this.preSeriesInitHooks.hooks.length;l++)this.preSeriesInitHooks.hooks[l].call(this.series[i],f,this.data,this.options.seriesDefaults,this.options.series[i],this);this.series[i]._plotDimensions=this._plotDimensions,this.series[i].init(i,this.grid.borderWidth,this);for(var l=0;l<a.jqplot.postSeriesInitHooks.length;l++)a.jqplot.postSeriesInitHooks[l].call(this.series[i],f,this.data,this.options.seriesDefaults,this.options.series[i],this);for(var l=0;l<this.postSeriesInitHooks.hooks.length;l++)this.postSeriesInitHooks.hooks[l].call(this.series[i],f,this.data,this.options.seriesDefaults,this.options.series[i],this);this._sumy+=this.series[i]._sumy,this._sumx+=this.series[i]._sumx}for(var i=0,n=G.length;n>i;i++)j=G[i],m=this.axes[j],m._plotDimensions=this._plotDimensions,m.init(),null==m.borderColor&&("x"!==j.charAt(0)&&m.useSeriesColor===!0&&m.show?m.borderColor=m._series[0].color:m.borderColor=this.grid.borderColor);this.sortData&&h(this.series),this.grid.init(),this.grid._axes=this.axes,this.legend._series=this.series;for(var i=0,n=a.jqplot.postInitHooks.length;n>i;i++)a.jqplot.postInitHooks[i].call(this,f,this.data,e);for(var i=0,n=this.postInitHooks.hooks.length;n>i;i++)this.postInitHooks.hooks[i].call(this,f,this.data,e)},this.quickInit=function(){if(this._height=this.target.height(),this._width=this.target.width(),this._height<=0||this._width<=0||!this._height||!this._width)throw new Error("Target dimension not set");this._plotDimensions.height=this._height,this._plotDimensions.width=this._width,this.grid._plotDimensions=this._plotDimensions,this.title._plotDimensions=this._plotDimensions,this.baseCanvas._plotDimensions=this._plotDimensions,this.eventCanvas._plotDimensions=this._plotDimensions,this.legend._plotDimensions=this._plotDimensions;for(var b in this.axes)this.axes[b]._plotWidth=this._width,this.axes[b]._plotHeight=this._height;this.title._plotWidth=this._width,this.textColor&&this.target.css("color",this.textColor),this.fontFamily&&this.target.css("font-family",this.fontFamily),this.fontSize&&this.target.css("font-size",this.fontSize),this._sumy=0,this._sumx=0,this.computePlotData();for(var c=0;c<this.series.length;c++)"line"===this.series[c]._type&&this.series[c].renderer.bands.show&&this.series[c].renderer.initBands.call(this.series[c],this.series[c].renderer.options,this),this.series[c]._plotDimensions=this._plotDimensions,this.series[c].canvas._plotDimensions=this._plotDimensions,this._sumy+=this.series[c]._sumy,this._sumx+=this.series[c]._sumx;for(var d,e=0;12>e;e++){d=G[e];for(var f=this.axes[d]._ticks,c=0;c<f.length;c++){var g=f[c]._elem;g&&(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F&&window.G_vmlCanvasManager.uninitElement(g.get(0)),g.emptyForce(),g=null,f._elem=null)}f=null,this.axes[d]._plotDimensions=this._plotDimensions,this.axes[d]._ticks=[]}this.sortData&&h(this.series),this.grid._axes=this.axes,this.legend._series=this.series},this.computePlotData=function(){this._plotData=[],this._stackData=[];var b,c,d;for(c=0,d=this.series.length;d>c;c++){b=this.series[c],this._plotData.push([]),this._stackData.push([]);var e=b.data;this._plotData[c]=a.extend(!0,[],e),this._stackData[c]=a.extend(!0,[],e),b._plotData=this._plotData[c],b._stackData=this._stackData[c];var f={x:[],y:[]};if(this.stackSeries&&!b.disableStack){b._stack=!0;for(var g="x"===b._stackAxis?0:1,h=0,i=e.length;i>h;h++){var j=e[h][g];if(null==j&&(j=0),this._plotData[c][h][g]=j,this._stackData[c][h][g]=j,c>0)for(var k=c;k--;){var l=this._plotData[k][h][g];if(j*l>=0){this._plotData[c][h][g]+=l,this._stackData[c][h][g]+=l;break}}}}else{for(var m=0;m<b.data.length;m++)f.x.push(b.data[m][0]),f.y.push(b.data[m][1]);this._stackData.push(b.data),this.series[c]._stackData=b.data,this._plotData.push(b.data),b._plotData=b.data,b._plotValues=f}for(c>0&&(b._prevPlotData=this.series[c-1]._plotData),b._sumy=0,b._sumx=0,m=b.data.length-1;m>-1;m--)b._sumy+=b.data[m][1],b._sumx+=b.data[m][0]}},this.populatePlotData=function(b,c){this._plotData=[],this._stackData=[],b._stackData=[],b._plotData=[];var d={x:[],y:[]};if(this.stackSeries&&!b.disableStack){b._stack=!0;for(var e,f,g,h,i="x"===b._stackAxis?0:1,j=a.extend(!0,[],b.data),k=a.extend(!0,[],b.data),l=0;c>l;l++)for(var m=this.series[l].data,n=0;n<m.length;n++)g=m[n],e=null!=g[0]?g[0]:0,f=null!=g[1]?g[1]:0,j[n][0]+=e,j[n][1]+=f,h=i?f:e,b.data[n][i]*h>=0&&(k[n][i]+=h);for(var o=0;o<k.length;o++)d.x.push(k[o][0]),d.y.push(k[o][1]);this._plotData.push(k),this._stackData.push(j),b._stackData=j,b._plotData=k,b._plotValues=d}else{for(var o=0;o<b.data.length;o++)d.x.push(b.data[o][0]),d.y.push(b.data[o][1]);this._stackData.push(b.data),this.series[c]._stackData=b.data,this._plotData.push(b.data),b._plotData=b.data,b._plotValues=d}for(c>0&&(b._prevPlotData=this.series[c-1]._plotData),b._sumy=0,b._sumx=0,o=b.data.length-1;o>-1;o--)b._sumy+=b.data[o][1],b._sumx+=b.data[o][0]},this.getNextSeriesColor=function(a){var b=0,c=a.seriesColors;return function(){return b<c.length?c[b++]:(b=0,c[b++])}}(this),this.parseOptions=function(b){for(var c=0;c<this.preParseOptionsHooks.hooks.length;c++)this.preParseOptionsHooks.hooks[c].call(this,b);for(var c=0;c<a.jqplot.preParseOptionsHooks.length;c++)a.jqplot.preParseOptionsHooks[c].call(this,b);this.options=a.extend(!0,{},this.defaults,b);var d=this.options;if(this.animate=d.animate,this.animateReplot=d.animateReplot,this.stackSeries=d.stackSeries,a.isPlainObject(d.fillBetween))for(var f,g=["series1","series2","color","baseSeries","fill"],c=0,h=g.length;h>c;c++)f=g[c],null!=d.fillBetween[f]&&(this.fillBetween[f]=d.fillBetween[f]);d.seriesColors&&(this.seriesColors=d.seriesColors),d.negativeSeriesColors&&(this.negativeSeriesColors=d.negativeSeriesColors),d.captureRightClick&&(this.captureRightClick=d.captureRightClick),this.defaultAxisStart=b&&null!=b.defaultAxisStart?b.defaultAxisStart:this.defaultAxisStart,this.colorGenerator.setColors(this.seriesColors),this.negativeColorGenerator.setColors(this.negativeSeriesColors),a.extend(!0,this._gridPadding,d.gridPadding),this.sortData=null!=d.sortData?d.sortData:this.sortData;for(var c=0;12>c;c++){var i=G[c],j=this.axes[i];j._options=a.extend(!0,{},d.axesDefaults,d.axes[i]),a.extend(!0,j,d.axesDefaults,d.axes[i]),j._plotWidth=this._width,j._plotHeight=this._height}var k=function(b,c,d){var e,f,g=[];if(c=c||"vertical",a.isArray(b[0]))a.extend(!0,g,b);else for(e=0,f=b.length;f>e;e++)"vertical"==c?g.push([d+e,b[e]]):g.push([b[e],d+e]);return g};this.series=[];for(var c=0;c<this.data.length;c++){for(var l=a.extend(!0,{index:c},{seriesColors:this.seriesColors,negativeSeriesColors:this.negativeSeriesColors},this.options.seriesDefaults,this.options.series[c],{rendererOptions:{animation:{show:this.animate}}}),g=new e(l),m=0;m<a.jqplot.preParseSeriesOptionsHooks.length;m++)a.jqplot.preParseSeriesOptionsHooks[m].call(g,this.options.seriesDefaults,this.options.series[c]);for(var m=0;m<this.preParseSeriesOptionsHooks.hooks.length;m++)this.preParseSeriesOptionsHooks.hooks[m].call(g,this.options.seriesDefaults,this.options.series[c]);a.extend(!0,g,l);var n="vertical";switch(g.renderer===a.jqplot.BarRenderer&&g.rendererOptions&&"horizontal"==g.rendererOptions.barDirection&&(n="horizontal",g._stackAxis="x",g._primaryAxis="_yaxis"),g.data=k(this.data[c],n,this.defaultAxisStart),g.xaxis){case"xaxis":g._xaxis=this.axes.xaxis;break;case"x2axis":g._xaxis=this.axes.x2axis}g._yaxis=this.axes[g.yaxis],g._xaxis._series.push(g),g._yaxis._series.push(g),g.show?(g._xaxis.show=!0,g._yaxis.show=!0):(g._xaxis.scaleToHiddenSeries&&(g._xaxis.show=!0),g._yaxis.scaleToHiddenSeries&&(g._yaxis.show=!0)),g.label||(g.label="Series "+(c+1).toString()),this.series.push(g);for(var m=0;m<a.jqplot.postParseSeriesOptionsHooks.length;m++)a.jqplot.postParseSeriesOptionsHooks[m].call(this.series[c],this.options.seriesDefaults,this.options.series[c]);for(var m=0;m<this.postParseSeriesOptionsHooks.hooks.length;m++)this.postParseSeriesOptionsHooks.hooks[m].call(this.series[c],this.options.seriesDefaults,this.options.series[c])}a.extend(!0,this.grid,this.options.grid);for(var c=0,h=G.length;h>c;c++){var i=G[c],j=this.axes[i];null==j.borderWidth&&(j.borderWidth=this.grid.borderWidth)}"string"==typeof this.options.title?this.title.text=this.options.title:"object"==typeof this.options.title&&a.extend(!0,this.title,this.options.title),this.title._plotWidth=this._width,this.legend.setOptions(this.options.legend);for(var c=0;c<a.jqplot.postParseOptionsHooks.length;c++)a.jqplot.postParseOptionsHooks[c].call(this,b);for(var c=0;c<this.postParseOptionsHooks.hooks.length;c++)this.postParseOptionsHooks.hooks[c].call(this,b)},this.destroy=function(){this.canvasManager.freeAllCanvases(),this.eventCanvas&&this.eventCanvas._elem&&this.eventCanvas._elem.unbind(),this.target.empty(),this.target[0].innerHTML=""},this.replot=function(b){var c=b||{},d=c.data||null,e=c.clear===!1?!1:!0,f=c.resetAxes||!1;delete c.data,delete c.clear,delete c.resetAxes,this.target.trigger("jqplotPreReplot"),e&&this.destroy(),d||!a.isEmptyObject(c)?this.reInitialize(d,c):this.quickInit(),f&&this.resetAxesScale(f,c.axes),this.draw(),this.target.trigger("jqplotPostReplot")},this.redraw=function(a){a=null!=a?a:!0,this.target.trigger("jqplotPreRedraw"),a&&(this.canvasManager.freeAllCanvases(),this.eventCanvas._elem.unbind(),this.target.empty());for(var b in this.axes)this.axes[b]._ticks=[];this.computePlotData(),this._sumy=0,this._sumx=0;for(var c=0,d=this.series.length;d>c;c++)this._sumy+=this.series[c]._sumy,this._sumx+=this.series[c]._sumx;this.draw(),this.target.trigger("jqplotPostRedraw")},this.draw=function(){if(this.drawIfHidden||this.target.is(":visible")){this.target.trigger("jqplotPreDraw");var b,c,d;for(b=0,d=a.jqplot.preDrawHooks.length;d>b;b++)a.jqplot.preDrawHooks[b].call(this);for(b=0,d=this.preDrawHooks.hooks.length;d>b;b++)this.preDrawHooks.hooks[b].apply(this,this.preDrawSeriesHooks.args[b]);this.target.append(this.baseCanvas.createElement({left:0,right:0,top:0,bottom:0},"jqplot-base-canvas",null,this)),this.baseCanvas.setContext(),this.target.append(this.title.draw()),this.title.pack({top:0,left:0});var e=this.legend.draw({},this),f={top:0,left:0,bottom:0,right:0};if("outsideGrid"==this.legend.placement){switch(this.target.append(e),this.legend.location){case"n":f.top+=this.legend.getHeight();break;case"s":f.bottom+=this.legend.getHeight();break;case"ne":case"e":case"se":f.right+=this.legend.getWidth();break;case"nw":case"w":case"sw":f.left+=this.legend.getWidth();break;default:f.right+=this.legend.getWidth()}e=e.detach()}var g,h=this.axes;for(b=0;12>b;b++)g=G[b],this.target.append(h[g].draw(this.baseCanvas._ctx,this)),h[g].set();h.yaxis.show&&(f.left+=h.yaxis.getWidth());var i,j=["y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"],k=[0,0,0,0,0,0,0,0],l=0;for(i=0;8>i;i++)h[j[i]].show&&(l+=h[j[i]].getWidth(),k[i]=l);if(f.right+=l,h.x2axis.show&&(f.top+=h.x2axis.getHeight()),this.title.show&&(f.top+=this.title.getHeight()),h.xaxis.show&&(f.bottom+=h.xaxis.getHeight()),this.options.gridDimensions&&a.isPlainObject(this.options.gridDimensions)){var m=parseInt(this.options.gridDimensions.width,10)||0,n=parseInt(this.options.gridDimensions.height,10)||0,o=(this._width-f.left-f.right-m)/2,p=(this._height-f.top-f.bottom-n)/2;p>=0&&o>=0&&(f.top+=p,f.bottom+=p,f.left+=o,f.right+=o)}var q=["top","bottom","left","right"];for(var i in q)null==this._gridPadding[q[i]]&&f[q[i]]>0?this._gridPadding[q[i]]=f[q[i]]:null==this._gridPadding[q[i]]&&(this._gridPadding[q[i]]=this._defaultGridPadding[q[i]]);var r=this._gridPadding;for("outsideGrid"===this.legend.placement&&(r={top:this.title.getHeight(),left:0,right:0,bottom:0},"s"===this.legend.location&&(r.left=this._gridPadding.left,r.right=this._gridPadding.right)),h.xaxis.pack({position:"absolute",bottom:this._gridPadding.bottom-h.xaxis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right}),h.yaxis.pack({position:"absolute",top:0,left:this._gridPadding.left-h.yaxis.getWidth(),height:this._height},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top}),h.x2axis.pack({position:"absolute",top:this._gridPadding.top-h.x2axis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right}),b=8;b>0;b--)h[j[b-1]].pack({position:"absolute",top:0,right:this._gridPadding.right-k[b-1]},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});var s=(this._width-this._gridPadding.left-this._gridPadding.right)/2+this._gridPadding.left-h.yMidAxis.getWidth()/2;h.yMidAxis.pack({position:"absolute",top:0,left:s,zIndex:9,textAlign:"center"},{min:this._height-this._gridPadding.bottom,
max:this._gridPadding.top}),this.target.append(this.grid.createElement(this._gridPadding,this)),this.grid.draw();var t=this.series,u=t.length;for(b=0,d=u;d>b;b++)c=this.seriesStack[b],this.target.append(t[c].shadowCanvas.createElement(this._gridPadding,"jqplot-series-shadowCanvas",null,this)),t[c].shadowCanvas.setContext(),t[c].shadowCanvas._elem.data("seriesIndex",c);for(b=0,d=u;d>b;b++)c=this.seriesStack[b],this.target.append(t[c].canvas.createElement(this._gridPadding,"jqplot-series-canvas",null,this)),t[c].canvas.setContext(),t[c].canvas._elem.data("seriesIndex",c);this.target.append(this.eventCanvas.createElement(this._gridPadding,"jqplot-event-canvas",null,this)),this.eventCanvas.setContext(),this.eventCanvas._ctx.fillStyle="rgba(0,0,0,0)",this.eventCanvas._ctx.fillRect(0,0,this.eventCanvas._ctx.canvas.width,this.eventCanvas._ctx.canvas.height),this.bindCustomEvents(),this.legend.preDraw?(this.eventCanvas._elem.before(e),this.legend.pack(r),this.legend._elem?this.drawSeries({legendInfo:{location:this.legend.location,placement:this.legend.placement,width:this.legend.getWidth(),height:this.legend.getHeight(),xoffset:this.legend.xoffset,yoffset:this.legend.yoffset}}):this.drawSeries()):(this.drawSeries(),u&&a(t[u-1].canvas._elem).after(e),this.legend.pack(r));for(var b=0,d=a.jqplot.eventListenerHooks.length;d>b;b++)this.eventCanvas._elem.bind(a.jqplot.eventListenerHooks[b][0],{plot:this},a.jqplot.eventListenerHooks[b][1]);for(var b=0,d=this.eventListenerHooks.hooks.length;d>b;b++)this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[b][0],{plot:this},this.eventListenerHooks.hooks[b][1]);var v=this.fillBetween;if("number"==typeof v.series1)v.fill&&v.series1!==v.series2&&v.series1<u&&v.series2<u&&"line"===t[v.series1]._type&&"line"===t[v.series2]._type&&this.doFillBetweenLines();else if(null!=v.series1&&null!=v.series2){var w=!1;if(v.series1.length===v.series2.length)for(var x=0,y=0,z=0;z<v.series1.length;z++){if(x=v.series1[z],y=v.series2[z],!(x!==y&&u>x&&u>y&&"line"===t[x]._type&&"line"===t[y]._type)){w=!1;break}w=!0}v.fill&&w&&this.doFillBetweenLines()}for(var b=0,d=a.jqplot.postDrawHooks.length;d>b;b++)a.jqplot.postDrawHooks[b].call(this);for(var b=0,d=this.postDrawHooks.hooks.length;d>b;b++)this.postDrawHooks.hooks[b].apply(this,this.postDrawHooks.args[b]);this.target.is(":visible")&&(this._drawCount+=1);var A,B,C,D;for(b=0,d=u;d>b;b++)A=t[b],B=A.renderer,C=".jqplot-point-label.jqplot-series-"+b,B.animation&&B.animation._supported&&B.animation.show&&(this._drawCount<2||this.animateReplot)&&(D=this.target.find(C),D.stop(!0,!0).hide(),A.canvas._elem.stop(!0,!0).hide(),A.shadowCanvas._elem.stop(!0,!0).hide(),A.canvas._elem.jqplotEffect("blind",{mode:"show",direction:B.animation.direction},B.animation.speed),A.shadowCanvas._elem.jqplotEffect("blind",{mode:"show",direction:B.animation.direction},B.animation.speed),D.fadeIn(.8*B.animation.speed));D=null,this.target.trigger("jqplotPostDraw",[this])}},g.prototype.doFillBetweenLines=function(){function a(a,e){var f=c[a],g=c[e];if(g.renderer.smooth)var h=g.renderer._smoothedData.slice(0).reverse();else var h=g.gridData.slice(0).reverse();if(f.renderer.smooth)var i=f.renderer._smoothedData.concat(h);else var i=f.gridData.concat(h);var j=null!==b.color?b.color:c[d].fillColor,k=null!==b.baseSeries?b.baseSeries:a,l=c[k].renderer.shapeRenderer,m={fillStyle:j,fill:!0,closePath:!0};l.draw(f.shadowCanvas._ctx,i,m)}var b=this.fillBetween,c=this.series,d=b.series1,e=b.series2,f=0,g=0;if("number"==typeof d&&"number"==typeof e)f=e>d?d:e,g=e>d?e:d,a(f,g);else for(var h=0;h<d.length;h++)f=d[h]<e[h]?d[h]:e[h],g=e[h]>d[h]?e[h]:d[h],a(f,g)},this.bindCustomEvents=function(){this.eventCanvas._elem.bind("click",{plot:this},this.onClick),this.eventCanvas._elem.bind("dblclick",{plot:this},this.onDblClick),this.eventCanvas._elem.bind("mousedown",{plot:this},this.onMouseDown),this.eventCanvas._elem.bind("mousemove",{plot:this},this.onMouseMove),this.eventCanvas._elem.bind("mouseenter",{plot:this},this.onMouseEnter),this.eventCanvas._elem.bind("mouseleave",{plot:this},this.onMouseLeave),this.captureRightClick?(this.eventCanvas._elem.bind("mouseup",{plot:this},this.onRightClick),this.eventCanvas._elem.get(0).oncontextmenu=function(){return!1}):this.eventCanvas._elem.bind("mouseup",{plot:this},this.onMouseUp)},this.onClick=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d),f=a.Event("jqplotClick");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])},this.onDblClick=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d),f=a.Event("jqplotDblClick");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])},this.onMouseDown=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d),f=a.Event("jqplotMouseDown");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])},this.onMouseUp=function(b){var c=i(b),d=a.Event("jqplotMouseUp");d.pageX=b.pageX,d.pageY=b.pageY,a(this).trigger(d,[c.gridPos,c.dataPos,null,b.data.plot])},this.onRightClick=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d);if(d.captureRightClick)if(3==b.which){var f=a.Event("jqplotRightClick");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])}else{var f=a.Event("jqplotMouseUp");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])}},this.onMouseMove=function(b){var c=i(b),d=b.data.plot,e=j(c.gridPos,d),f=a.Event("jqplotMouseMove");f.pageX=b.pageX,f.pageY=b.pageY,a(this).trigger(f,[c.gridPos,c.dataPos,e,d])},this.onMouseEnter=function(b){var c=i(b),d=b.data.plot,e=a.Event("jqplotMouseEnter");e.pageX=b.pageX,e.pageY=b.pageY,e.relatedTarget=b.relatedTarget,a(this).trigger(e,[c.gridPos,c.dataPos,null,d])},this.onMouseLeave=function(b){var c=i(b),d=b.data.plot,e=a.Event("jqplotMouseLeave");e.pageX=b.pageX,e.pageY=b.pageY,e.relatedTarget=b.relatedTarget,a(this).trigger(e,[c.gridPos,c.dataPos,null,d])},this.drawSeries=function(b,c){var d,e,f;if(c="number"==typeof b&&null==c?b:c,b="object"==typeof b?b:{},c!=F)e=this.series[c],f=e.shadowCanvas._ctx,f.clearRect(0,0,f.canvas.width,f.canvas.height),e.drawShadow(f,b,this),f=e.canvas._ctx,f.clearRect(0,0,f.canvas.width,f.canvas.height),e.draw(f,b,this),e.renderer.constructor==a.jqplot.BezierCurveRenderer&&c<this.series.length-1&&this.drawSeries(c+1);else for(d=0;d<this.series.length;d++)e=this.series[d],f=e.shadowCanvas._ctx,f.clearRect(0,0,f.canvas.width,f.canvas.height),e.drawShadow(f,b,this),f=e.canvas._ctx,f.clearRect(0,0,f.canvas.width,f.canvas.height),e.draw(f,b,this);b=c=d=e=f=null},this.moveSeriesToFront=function(b){b=parseInt(b,10);var c=a.inArray(b,this.seriesStack);if(-1!=c){if(c==this.seriesStack.length-1)return void(this.previousSeriesStack=this.seriesStack.slice(0));var d=this.seriesStack[this.seriesStack.length-1],e=this.series[b].canvas._elem.detach(),f=this.series[b].shadowCanvas._elem.detach();this.series[d].shadowCanvas._elem.after(f),this.series[d].canvas._elem.after(e),this.previousSeriesStack=this.seriesStack.slice(0),this.seriesStack.splice(c,1),this.seriesStack.push(b)}},this.moveSeriesToBack=function(b){b=parseInt(b,10);var c=a.inArray(b,this.seriesStack);if(0!=c&&-1!=c){var d=this.seriesStack[0],e=this.series[b].canvas._elem.detach(),f=this.series[b].shadowCanvas._elem.detach();this.series[d].shadowCanvas._elem.before(f),this.series[d].canvas._elem.before(e),this.previousSeriesStack=this.seriesStack.slice(0),this.seriesStack.splice(c,1),this.seriesStack.unshift(b)}},this.restorePreviousSeriesOrder=function(){var a,b,c,d,e,f;if(this.seriesStack!=this.previousSeriesStack){for(a=1;a<this.previousSeriesStack.length;a++)e=this.previousSeriesStack[a],f=this.previousSeriesStack[a-1],b=this.series[e].canvas._elem.detach(),c=this.series[e].shadowCanvas._elem.detach(),this.series[f].shadowCanvas._elem.after(c),this.series[f].canvas._elem.after(b);d=this.seriesStack.slice(0),this.seriesStack=this.previousSeriesStack.slice(0),this.previousSeriesStack=d}},this.restoreOriginalSeriesOrder=function(){var a,b,c,d=[];for(a=0;a<this.series.length;a++)d.push(a);if(this.seriesStack!=d)for(this.previousSeriesStack=this.seriesStack.slice(0),this.seriesStack=d,a=1;a<this.seriesStack.length;a++)b=this.series[a].canvas._elem.detach(),c=this.series[a].shadowCanvas._elem.detach(),this.series[a-1].shadowCanvas._elem.after(c),this.series[a-1].canvas._elem.after(b)},this.activateTheme=function(a){this.themeEngine.activate(this,a)}}function h(a,b){return(3.4182054+b)*Math.pow(a,-.3534992)}function i(a){var b=(Math.exp(2*a)-1)/(Math.exp(2*a)+1);return b}function j(a){function b(a,b){return a-b==0?Math.pow(10,10):a-b}var c=this.renderer.smooth,d=this.canvas.getWidth(),e=this._xaxis.series_p2u,f=this._yaxis.series_p2u,g=null,i=a.length/d,j=[],k=[];g=isNaN(parseFloat(c))?h(i,.5):parseFloat(c);for(var l=[],m=[],n=0,o=a.length;o>n;n++)l.push(a[n][1]),m.push(a[n][0]);for(var p,q,r,s,t=a.length-1,u=1,v=a.length;v>u;u++){for(var w=[],x=[],y=0;2>y;y++){var n=u-1+y;0==n||n==t?w[y]=Math.pow(10,10):l[n+1]-l[n]==0||l[n]-l[n-1]==0?w[y]=0:(m[n+1]-m[n])/(l[n+1]-l[n])+(m[n]-m[n-1])/(l[n]-l[n-1])==0?w[y]=0:(l[n+1]-l[n])*(l[n]-l[n-1])<0?w[y]=0:w[y]=2/(b(m[n+1],m[n])/(l[n+1]-l[n])+b(m[n],m[n-1])/(l[n]-l[n-1]))}1==u?w[0]=1.5*(l[1]-l[0])/b(m[1],m[0])-w[1]/2:u==t&&(w[1]=1.5*(l[t]-l[t-1])/b(m[t],m[t-1])-w[0]/2),x[0]=-2*(w[1]+2*w[0])/b(m[u],m[u-1])+6*(l[u]-l[u-1])/Math.pow(b(m[u],m[u-1]),2),x[1]=2*(2*w[1]+w[0])/b(m[u],m[u-1])-6*(l[u]-l[u-1])/Math.pow(b(m[u],m[u-1]),2),s=1/6*(x[1]-x[0])/b(m[u],m[u-1]),r=.5*(m[u]*x[0]-m[u-1]*x[1])/b(m[u],m[u-1]),q=(l[u]-l[u-1]-r*(Math.pow(m[u],2)-Math.pow(m[u-1],2))-s*(Math.pow(m[u],3)-Math.pow(m[u-1],3)))/b(m[u],m[u-1]),p=l[u-1]-q*m[u-1]-r*Math.pow(m[u-1],2)-s*Math.pow(m[u-1],3);for(var z,A,B=(m[u]-m[u-1])/g,y=0,o=g;o>y;y++)z=[],A=m[u-1]+y*B,z.push(A),z.push(p+q*A+r*Math.pow(A,2)+s*Math.pow(A,3)),j.push(z),k.push([e(z[0]),f(z[1])])}return j.push(a[n]),k.push([e(a[n][0]),f(a[n][1])]),[j,k]}function k(a){var b,c,d,e,f,g,j,k,l,m,n,o,p,q,r,s,t,u,v=this.renderer.smooth,w=this.renderer.tension,x=this.canvas.getWidth(),y=this._xaxis.series_p2u,z=this._yaxis.series_p2u,A=null,B=null,C=null,D=null,E=null,F=null,G=null,H=a.length/x,I=[],J=[];A=isNaN(parseFloat(v))?h(H,.5):parseFloat(v),isNaN(parseFloat(w))||(w=parseFloat(w));for(var K=0,L=a.length-1;L>K;K++)for(null===w?(E=Math.abs((a[K+1][1]-a[K][1])/(a[K+1][0]-a[K][0])),q=.3,r=.6,s=(r-q)/2,t=2.5,u=-1.4,G=E/t+u,C=s*i(G)-s*i(u)+q,K>0&&(F=Math.abs((a[K][1]-a[K-1][1])/(a[K][0]-a[K-1][0]))),G=F/t+u,D=s*i(G)-s*i(u)+q,B=(C+D)/2):B=w,b=0;A>b;b++)c=b/A,d=(1+2*c)*Math.pow(1-c,2),e=c*Math.pow(1-c,2),f=Math.pow(c,2)*(3-2*c),g=Math.pow(c,2)*(c-1),a[K-1]?(j=B*(a[K+1][0]-a[K-1][0]),k=B*(a[K+1][1]-a[K-1][1])):(j=B*(a[K+1][0]-a[K][0]),k=B*(a[K+1][1]-a[K][1])),a[K+2]?(l=B*(a[K+2][0]-a[K][0]),m=B*(a[K+2][1]-a[K][1])):(l=B*(a[K+1][0]-a[K][0]),m=B*(a[K+1][1]-a[K][1])),n=d*a[K][0]+f*a[K+1][0]+e*j+g*l,o=d*a[K][1]+f*a[K+1][1]+e*k+g*m,p=[n,o],I.push(p),J.push([y(n),z(o)]);return I.push(a[L]),J.push([y(a[L][0]),z(a[L][1])]),[I,J]}function l(b,c,d){for(var e=0;e<this.series.length;e++)this.series[e].renderer.constructor==a.jqplot.LineRenderer&&this.series[e].highlightMouseOver&&(this.series[e].highlightMouseDown=!1)}function m(){this.plugins.lineRenderer&&this.plugins.lineRenderer.highlightCanvas&&(this.plugins.lineRenderer.highlightCanvas.resetCanvas(),this.plugins.lineRenderer.highlightCanvas=null),this.plugins.lineRenderer.highlightedSeriesIndex=null,this.plugins.lineRenderer.highlightCanvas=new a.jqplot.GenericCanvas,this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-lineRenderer-highlight-canvas",this._plotDimensions,this)),this.plugins.lineRenderer.highlightCanvas.setContext(),this.eventCanvas._elem.bind("mouseleave",{plot:this},function(a){o(a.data.plot)})}function n(a,b,c,d){var e=a.series[b],f=a.plugins.lineRenderer.highlightCanvas;f._ctx.clearRect(0,0,f._ctx.canvas.width,f._ctx.canvas.height),e._highlightedPoint=c,a.plugins.lineRenderer.highlightedSeriesIndex=b;var g={fillStyle:e.highlightColor};"line"===e.type&&e.renderer.bands.show&&(g.fill=!0,g.closePath=!0),e.renderer.shapeRenderer.draw(f._ctx,d,g),f=null}function o(a){var b=a.plugins.lineRenderer.highlightCanvas;b._ctx.clearRect(0,0,b._ctx.canvas.width,b._ctx.canvas.height);for(var c=0;c<a.series.length;c++)a.series[c]._highlightedPoint=null;a.plugins.lineRenderer.highlightedSeriesIndex=null,a.target.trigger("jqplotDataUnhighlight"),b=null}function p(a,b,c,d,e){if(d){var f=[d.seriesIndex,d.pointIndex,d.data],g=jQuery.Event("jqplotDataMouseOver");if(g.pageX=a.pageX,g.pageY=a.pageY,e.target.trigger(g,f),e.series[f[0]].highlightMouseOver&&f[0]!=e.plugins.lineRenderer.highlightedSeriesIndex){var h=jQuery.Event("jqplotDataHighlight");h.which=a.which,h.pageX=a.pageX,h.pageY=a.pageY,e.target.trigger(h,f),n(e,d.seriesIndex,d.pointIndex,d.points)}}else null==d&&o(e)}function q(a,b,c,d,e){if(d){var f=[d.seriesIndex,d.pointIndex,d.data];if(e.series[f[0]].highlightMouseDown&&f[0]!=e.plugins.lineRenderer.highlightedSeriesIndex){var g=jQuery.Event("jqplotDataHighlight");g.which=a.which,g.pageX=a.pageX,g.pageY=a.pageY,e.target.trigger(g,f),n(e,d.seriesIndex,d.pointIndex,d.points)}}else null==d&&o(e)}function r(a,b,c,d,e){var f=e.plugins.lineRenderer.highlightedSeriesIndex;null!=f&&e.series[f].highlightMouseDown&&o(e)}function s(a,b,c,d,e){if(d){var f=[d.seriesIndex,d.pointIndex,d.data],g=jQuery.Event("jqplotDataClick");g.which=a.which,g.pageX=a.pageX,g.pageY=a.pageY,e.target.trigger(g,f)}}function t(a,b,c,d,e){if(d){var f=[d.seriesIndex,d.pointIndex,d.data],g=e.plugins.lineRenderer.highlightedSeriesIndex;null!=g&&e.series[g].highlightMouseDown&&o(e);var h=jQuery.Event("jqplotDataRightClick");h.which=a.which,h.pageX=a.pageX,h.pageY=a.pageY,e.target.trigger(h,f)}}function u(a){var b;if(a=Math.abs(a),a>=10)b="%d";else if(a>1)b=a===parseInt(a,10)?"%d":"%.1f";else{var c=-Math.floor(Math.log(a)/Math.LN10);b="%."+c+"f"}return b}function v(b,c,d){for(var e,f,g,h,i,j,k,l=Math.floor(d/2),m=Math.ceil(1.5*d),n=Number.MAX_VALUE,o=c-b,p=a.jqplot.getSignificantFigures,q=0,r=m-l+1;r>q;q++)j=l+q,e=o/(j-1),f=p(e),e=Math.abs(d-j)+f.digitsRight,n>e?(n=e,g=j,k=f.digitsRight):e===n&&f.digitsRight<k&&(g=j,k=f.digitsRight);return h=Math.max(k,Math.max(p(b).digitsRight,p(c).digitsRight)),i=0===h?"%d":"%."+h+"f",e=o/(g-1),[b,c,g,i,e]}function w(a,b){b=b||7;var c,d=a/(b-1),e=Math.pow(10,Math.floor(Math.log(d)/Math.LN10)),f=d/e;return c=1>e?f>5?10*e:f>2?5*e:f>1?2*e:e:f>5?10*e:f>4?5*e:f>3?4*e:f>2?3*e:f>1?2*e:e}function x(a,b){b=b||1;var c,d=Math.floor(Math.log(a)/Math.LN10),e=Math.pow(10,d),f=a/e;return f/=b,c=.38>=f?.1:1.6>=f?.2:4>=f?.5:8>=f?1:16>=f?2:5,c*e}function y(a,b){var c,d,e=Math.floor(Math.log(a)/Math.LN10),f=Math.pow(10,e),g=a/f;return g/=b,d=.38>=g?.1:1.6>=g?.2:4>=g?.5:8>=g?1:16>=g?2:5,c=d*f,[c,d,f]}function z(a,b){return a-b}function A(a){if(null==a||"object"!=typeof a)return a;var b=new a.constructor;for(var c in a)b[c]=A(a[c]);return b}function B(a,b){if(null!=b&&"object"==typeof b)for(var c in b)"highlightColors"==c&&(a[c]=A(b[c])),null!=b[c]&&"object"==typeof b[c]?(a.hasOwnProperty(c)||(a[c]={}),B(a[c],b[c])):a[c]=b[c]}function C(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1}function D(a){return null===a?"[object Null]":Object.prototype.toString.call(a)}function E(b,c,d,e){return a.isPlainObject(b)?b:(b={effect:b},c===F&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"===a.type(c)||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b)}var F;a.fn.emptyForce=function(){for(var b,c=0;null!=(b=a(this)[c]);c++){if(1===b.nodeType&&a.cleanData(b.getElementsByTagName("*")),a.jqplot.use_excanvas)b.outerHTML="";else for(;b.firstChild;)b.removeChild(b.firstChild);b=null}return a(this)},a.fn.removeChildForce=function(a){for(;a.firstChild;)this.removeChildForce(a.firstChild),a.removeChild(a.firstChild)},a.fn.jqplot=function(){for(var b=[],c=[],d=0,e=arguments.length;e>d;d++)a.isArray(arguments[d])?b.push(arguments[d]):a.isPlainObject(arguments[d])&&c.push(arguments[d]);return this.each(function(d){var e,f,g,h,i=a(this),j=b.length,k=c.length;g=j>d?b[d]:j?b[j-1]:null,h=k>d?c[d]:k?c[k-1]:null,e=i.attr("id"),e===F&&(e="jqplot_target_"+a.jqplot.targetCounter++,i.attr("id",e)),f=a.jqplot(e,g,h),i.data("jqplot",f)})},a.jqplot=function(b,c,d){var e=null,f=null;3===arguments.length?(e=c,f=d):2===arguments.length&&(a.isArray(c)?e=c:a.isPlainObject(c)&&(f=c)),null===e&&null!==f&&f.data&&(e=f.data);var h=new g;if(a("#"+b).removeClass("jqplot-error"),!a.jqplot.config.catchErrors)return h.init(b,e,f),h.draw(),h.themeEngine.init.call(h),h;try{return h.init(b,e,f),h.draw(),h.themeEngine.init.call(h),h}catch(i){var j=a.jqplot.config.errorMessage||i.message;a("#"+b).append('<div class="jqplot-error-message">'+j+"</div>"),a("#"+b).addClass("jqplot-error"),document.getElementById(b).style.background=a.jqplot.config.errorBackground,document.getElementById(b).style.border=a.jqplot.config.errorBorder,document.getElementById(b).style.fontFamily=a.jqplot.config.errorFontFamily,document.getElementById(b).style.fontSize=a.jqplot.config.errorFontSize,document.getElementById(b).style.fontStyle=a.jqplot.config.errorFontStyle,document.getElementById(b).style.fontWeight=a.jqplot.config.errorFontWeight}},a.jqplot.version="1.0.9",a.jqplot.revision="d96a669",a.jqplot.targetCounter=1,a.jqplot.CanvasManager=function(){"undefined"==typeof a.jqplot.CanvasManager.canvases&&(a.jqplot.CanvasManager.canvases=[],a.jqplot.CanvasManager.free=[]);var b=[];this.getCanvas=function(){var c,d=!0;if(!a.jqplot.use_excanvas)for(var e=0,f=a.jqplot.CanvasManager.canvases.length;f>e;e++)if(a.jqplot.CanvasManager.free[e]===!0){d=!1,c=a.jqplot.CanvasManager.canvases[e],a.jqplot.CanvasManager.free[e]=!1,b.push(e);break}return d&&(c=document.createElement("canvas"),b.push(a.jqplot.CanvasManager.canvases.length),a.jqplot.CanvasManager.canvases.push(c),a.jqplot.CanvasManager.free.push(!1)),c},this.initCanvas=function(b){if(a.jqplot.use_excanvas)return window.G_vmlCanvasManager.initElement(b);var c=b.getContext("2d"),d=1;window.devicePixelRatio>1&&(c.webkitBackingStorePixelRatio===F||c.webkitBackingStorePixelRatio<2)&&(d=window.devicePixelRatio);var e=b.width,f=b.height;return b.width=d*b.width,b.height=d*b.height,b.style.width=e+"px",b.style.height=f+"px",c.save(),c.scale(d,d),b},this.freeAllCanvases=function(){for(var a=0,c=b.length;c>a;a++)this.freeCanvas(b[a]);b=[]},this.freeCanvas=function(b){if(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F)window.G_vmlCanvasManager.uninitElement(a.jqplot.CanvasManager.canvases[b]),a.jqplot.CanvasManager.canvases[b]=null;else{var c=a.jqplot.CanvasManager.canvases[b];c.getContext("2d").clearRect(0,0,c.width,c.height),a(c).unbind().removeAttr("class").removeAttr("style"),a(c).css({left:"",top:"",position:""}),c.width=0,c.height=0,a.jqplot.CanvasManager.free[b]=!0}}},a.jqplot.log=function(){window.console&&window.console.log.apply(window.console,arguments)},a.jqplot.config={addDomReference:!1,enablePlugins:!1,defaultHeight:300,defaultWidth:400,UTCAdjust:!1,timezoneOffset:new Date(6e4*(new Date).getTimezoneOffset()),errorMessage:"",errorBackground:"",errorBorder:"",errorFontFamily:"",errorFontSize:"",errorFontStyle:"",errorFontWeight:"",catchErrors:!1,defaultTickFormatString:"%.1f",defaultColors:["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"],defaultNegativeColors:["#498991","#C08840","#9F9274","#546D61","#646C4A","#6F6621","#6E3F5F","#4F64B0","#A89050","#C45923","#187399","#945381","#959E5C","#C7AF7B","#478396","#907294"],dashLength:4,gapLength:4,dotGapLength:2.5,srcLocation:"jqplot/src/",pluginLocation:"jqplot/src/plugins/"},a.jqplot.arrayMax=function(a){return Math.max.apply(Math,a)},a.jqplot.arrayMin=function(a){return Math.min.apply(Math,a)},a.jqplot.enablePlugins=a.jqplot.config.enablePlugins,a.jqplot.support_canvas=function(){return"undefined"==typeof a.jqplot.support_canvas.result&&(a.jqplot.support_canvas.result=!!document.createElement("canvas").getContext),a.jqplot.support_canvas.result},a.jqplot.support_canvas_text=function(){return"undefined"==typeof a.jqplot.support_canvas_text.result&&(window.G_vmlCanvasManager!==F&&window.G_vmlCanvasManager._version>887?a.jqplot.support_canvas_text.result=!0:a.jqplot.support_canvas_text.result=!(!document.createElement("canvas").getContext||"function"!=typeof document.createElement("canvas").getContext("2d").fillText)),a.jqplot.support_canvas_text.result},a.jqplot.use_excanvas=a.support.boxModel&&a.support.objectAll&&$support.leadingWhitespace||a.jqplot.support_canvas()?!1:!0,a.jqplot.preInitHooks=[],a.jqplot.postInitHooks=[],a.jqplot.preParseOptionsHooks=[],a.jqplot.postParseOptionsHooks=[],a.jqplot.preDrawHooks=[],a.jqplot.postDrawHooks=[],a.jqplot.preDrawSeriesHooks=[],a.jqplot.postDrawSeriesHooks=[],a.jqplot.preDrawLegendHooks=[],a.jqplot.addLegendRowHooks=[],a.jqplot.preSeriesInitHooks=[],a.jqplot.postSeriesInitHooks=[],a.jqplot.preParseSeriesOptionsHooks=[],a.jqplot.postParseSeriesOptionsHooks=[],a.jqplot.eventListenerHooks=[],a.jqplot.preDrawSeriesShadowHooks=[],a.jqplot.postDrawSeriesShadowHooks=[],a.jqplot.ElemContainer=function(){this._elem,this._plotWidth,this._plotHeight,this._plotDimensions={height:null,width:null}},a.jqplot.ElemContainer.prototype.createElement=function(b,c,d,e,f){this._offsets=c;var g=d||"jqplot",h=document.createElement(b);return this._elem=a(h),this._elem.addClass(g),this._elem.css(e),this._elem.attr(f),h=null,this._elem},a.jqplot.ElemContainer.prototype.getWidth=function(){return this._elem?this._elem.outerWidth(!0):null},a.jqplot.ElemContainer.prototype.getHeight=function(){return this._elem?this._elem.outerHeight(!0):null},a.jqplot.ElemContainer.prototype.getPosition=function(){return this._elem?this._elem.position():{top:null,left:null,bottom:null,right:null}},a.jqplot.ElemContainer.prototype.getTop=function(){return this.getPosition().top},a.jqplot.ElemContainer.prototype.getLeft=function(){return this.getPosition().left},a.jqplot.ElemContainer.prototype.getBottom=function(){return this._elem.css("bottom")},a.jqplot.ElemContainer.prototype.getRight=function(){return this._elem.css("right")},b.prototype=new a.jqplot.ElemContainer,b.prototype.constructor=b,b.prototype.init=function(){a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.tickOptions.axis=this.name,null==this.tickOptions.showMark&&(this.tickOptions.showMark=this.showTicks),null==this.tickOptions.showMark&&(this.tickOptions.showMark=this.showTickMarks),null==this.tickOptions.showLabel&&(this.tickOptions.showLabel=this.showTicks),null==this.label||""==this.label?this.showLabel=!1:this.labelOptions.label=this.label,0==this.showLabel&&(this.labelOptions.show=!1),0==this.pad&&(this.pad=1),0==this.padMax&&(this.padMax=1),0==this.padMin&&(this.padMin=1),null==this.padMax&&(this.padMax=(this.pad-1)/2+1),null==this.padMin&&(this.padMin=(this.pad-1)/2+1),this.pad=this.padMax+this.padMin-1,(null!=this.min||null!=this.max)&&(this.autoscale=!1),null==this.syncTicks&&this.name.indexOf("y")>-1?this.syncTicks=!0:null==this.syncTicks&&(this.syncTicks=!1),this.renderer.init.call(this,this.rendererOptions)},b.prototype.draw=function(a,b){return this.__ticks&&(this.__ticks=null),this.renderer.draw.call(this,a,b)},b.prototype.set=function(){this.renderer.set.call(this)},b.prototype.pack=function(a,b){this.show&&this.renderer.pack.call(this,a,b),null==this._min&&(this._min=this.min,this._max=this.max,this._tickInterval=this.tickInterval,this._numberTicks=this.numberTicks,this.__ticks=this._ticks)},b.prototype.reset=function(){this.renderer.reset.call(this)},b.prototype.resetScale=function(b){a.extend(!0,this,{min:null,max:null,numberTicks:null,tickInterval:null,_ticks:[],ticks:[]},b),this.resetDataBounds()},b.prototype.resetDataBounds=function(){var b=this._dataBounds;b.min=null,b.max=null;for(var c,d,e,f=this.show?!0:!1,g=0;g<this._series.length;g++)if(d=this._series[g],d.show||this.scaleToHiddenSeries){e=d._plotData,"line"===d._type&&d.renderer.bands.show&&"x"!==this.name.charAt(0)&&(e=[[0,d.renderer.bands._min],[1,d.renderer.bands._max]]);var h=1,i=1;null!=d._type&&"ohlc"==d._type&&(h=3,i=2);for(var j=0,c=e.length;c>j;j++)"xaxis"==this.name||"x2axis"==this.name?((null!=e[j][0]&&e[j][0]<b.min||null==b.min)&&(b.min=e[j][0]),(null!=e[j][0]&&e[j][0]>b.max||null==b.max)&&(b.max=e[j][0])):((null!=e[j][h]&&e[j][h]<b.min||null==b.min)&&(b.min=e[j][h]),(null!=e[j][i]&&e[j][i]>b.max||null==b.max)&&(b.max=e[j][i]));f&&d.renderer.constructor!==a.jqplot.BarRenderer?f=!1:f&&this._options.hasOwnProperty("forceTickAt0")&&0==this._options.forceTickAt0?f=!1:f&&d.renderer.constructor===a.jqplot.BarRenderer&&("vertical"==d.barDirection&&"xaxis"!=this.name&&"x2axis"!=this.name?(null!=this._options.pad||null!=this._options.padMin)&&(f=!1):"horizontal"!=d.barDirection||"xaxis"!=this.name&&"x2axis"!=this.name||(null!=this._options.pad||null!=this._options.padMin)&&(f=!1))}f&&this.renderer.constructor===a.jqplot.LinearAxisRenderer&&b.min>=0&&(this.padMin=1,this.forceTickAt0=!0)},c.prototype=new a.jqplot.ElemContainer,c.prototype.constructor=c,c.prototype.setOptions=function(b){if(a.extend(!0,this,b),"inside"==this.placement&&(this.placement="insideGrid"),this.xoffset>0){if("insideGrid"==this.placement)switch(this.location){case"nw":case"w":case"sw":null==this.marginLeft&&(this.marginLeft=this.xoffset+"px"),this.marginRight="0px";break;case"ne":case"e":case"se":default:null==this.marginRight&&(this.marginRight=this.xoffset+"px"),this.marginLeft="0px"}else if("outside"==this.placement)switch(this.location){case"nw":case"w":case"sw":null==this.marginRight&&(this.marginRight=this.xoffset+"px"),this.marginLeft="0px";break;case"ne":case"e":case"se":default:null==this.marginLeft&&(this.marginLeft=this.xoffset+"px"),this.marginRight="0px"}this.xoffset=0}if(this.yoffset>0){if("outside"==this.placement)switch(this.location){case"sw":case"s":case"se":null==this.marginTop&&(this.marginTop=this.yoffset+"px"),this.marginBottom="0px";break;case"ne":case"n":case"nw":default:null==this.marginBottom&&(this.marginBottom=this.yoffset+"px"),this.marginTop="0px"}else if("insideGrid"==this.placement)switch(this.location){case"sw":case"s":case"se":null==this.marginBottom&&(this.marginBottom=this.yoffset+"px"),this.marginTop="0px";break;case"ne":case"n":case"nw":default:null==this.marginTop&&(this.marginTop=this.yoffset+"px"),this.marginBottom="0px"}this.yoffset=0}},c.prototype.init=function(){a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.renderer.init.call(this,this.rendererOptions)},c.prototype.draw=function(b,c){for(var d=0;d<a.jqplot.preDrawLegendHooks.length;d++)a.jqplot.preDrawLegendHooks[d].call(this,b);return this.renderer.draw.call(this,b,c)},c.prototype.pack=function(a){this.renderer.pack.call(this,a)},d.prototype=new a.jqplot.ElemContainer,d.prototype.constructor=d,d.prototype.init=function(){a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.renderer.init.call(this,this.rendererOptions)},d.prototype.draw=function(a){return this.renderer.draw.call(this,a)},d.prototype.pack=function(){this.renderer.pack.call(this)},e.prototype=new a.jqplot.ElemContainer,e.prototype.constructor=e,e.prototype.init=function(b,c,d){this.index=b,this.gridBorderWidth=c;var e,f,g=this.data,h=[];for(e=0,f=g.length;f>e;e++)if(this.breakOnNull)h.push(g[e]);else{if(null==g[e]||null==g[e][0]||null==g[e][1])continue;h.push(g[e])}if(this.data=h,this.color||(this.color=d.colorGenerator.get(this.index)),this.negativeColor||(this.negativeColor=d.negativeColorGenerator.get(this.index)),this.fillColor||(this.fillColor=this.color),this.fillAlpha){var i=a.jqplot.normalize2rgb(this.fillColor),i=a.jqplot.getColorComponents(i);this.fillColor="rgba("+i[0]+","+i[1]+","+i[2]+","+this.fillAlpha+")"}a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.renderer.init.call(this,this.rendererOptions,d),this.markerRenderer=new this.markerRenderer,this.markerOptions.color||(this.markerOptions.color=this.color),null==this.markerOptions.show&&(this.markerOptions.show=this.showMarker),this.showMarker=this.markerOptions.show,this.markerRenderer.init(this.markerOptions)},e.prototype.draw=function(b,c,d){var e=c==F?{}:c;b=b==F?this.canvas._ctx:b;var f,g,h;for(f=0;f<a.jqplot.preDrawSeriesHooks.length;f++)a.jqplot.preDrawSeriesHooks[f].call(this,b,e);for(this.show&&(this.renderer.setGridData.call(this,d),e.preventJqPlotSeriesDrawTrigger||a(b.canvas).trigger("jqplotSeriesDraw",[this.data,this.gridData]),g=[],g=e.data?e.data:this._stack?this._plotData:this.data,h=e.gridData||this.renderer.makeGridData.call(this,g,d),"line"===this._type&&this.renderer.smooth&&this.renderer._smoothedData.length&&(h=this.renderer._smoothedData),this.renderer.draw.call(this,b,h,e,d)),f=0;f<a.jqplot.postDrawSeriesHooks.length;f++)a.jqplot.postDrawSeriesHooks[f].call(this,b,e,d);b=c=d=f=g=h=null},e.prototype.drawShadow=function(b,c,d){var e=c==F?{}:c;b=b==F?this.shadowCanvas._ctx:b;var f,g,h;for(f=0;f<a.jqplot.preDrawSeriesShadowHooks.length;f++)a.jqplot.preDrawSeriesShadowHooks[f].call(this,b,e);for(this.shadow&&(this.renderer.setGridData.call(this,d),g=[],g=e.data?e.data:this._stack?this._plotData:this.data,h=e.gridData||this.renderer.makeGridData.call(this,g,d),this.renderer.drawShadow.call(this,b,h,e,d)),f=0;f<a.jqplot.postDrawSeriesShadowHooks.length;f++)a.jqplot.postDrawSeriesShadowHooks[f].call(this,b,e);b=c=d=f=g=h=null},e.prototype.toggleDisplay=function(a,b){var c,d;c=a.data.series?a.data.series:this,a.data.speed&&(d=a.data.speed),d?c.canvas._elem.is(":hidden")||!c.show?(c.show=!0,c.canvas._elem.removeClass("jqplot-series-hidden"),c.shadowCanvas._elem&&c.shadowCanvas._elem.fadeIn(d),c.canvas._elem.fadeIn(d,b),c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+c.index).fadeIn(d)):(c.show=!1,c.canvas._elem.addClass("jqplot-series-hidden"),c.shadowCanvas._elem&&c.shadowCanvas._elem.fadeOut(d),c.canvas._elem.fadeOut(d,b),c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+c.index).fadeOut(d)):c.canvas._elem.is(":hidden")||!c.show?(c.show=!0,c.canvas._elem.removeClass("jqplot-series-hidden"),c.shadowCanvas._elem&&c.shadowCanvas._elem.show(),c.canvas._elem.show(0,b),c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+c.index).show()):(c.show=!1,c.canvas._elem.addClass("jqplot-series-hidden"),c.shadowCanvas._elem&&c.shadowCanvas._elem.hide(),c.canvas._elem.hide(0,b),c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+c.index).hide())},f.prototype=new a.jqplot.ElemContainer,f.prototype.constructor=f,f.prototype.init=function(){a.isFunction(this.renderer)&&(this.renderer=new this.renderer),this.renderer.init.call(this,this.rendererOptions)},f.prototype.createElement=function(a,b){return this._offsets=a,this.renderer.createElement.call(this,b)},f.prototype.draw=function(){this.renderer.draw.call(this)},a.jqplot.GenericCanvas=function(){a.jqplot.ElemContainer.call(this),this._ctx},a.jqplot.GenericCanvas.prototype=new a.jqplot.ElemContainer,a.jqplot.GenericCanvas.prototype.constructor=a.jqplot.GenericCanvas,a.jqplot.GenericCanvas.prototype.createElement=function(b,c,d,e){this._offsets=b;var f="jqplot";c!=F&&(f=c);var g;return g=e.canvasManager.getCanvas(),null!=d&&(this._plotDimensions=d),g.width=this._plotDimensions.width-this._offsets.left-this._offsets.right,g.height=this._plotDimensions.height-this._offsets.top-this._offsets.bottom,this._elem=a(g),this._elem.css({position:"absolute",left:this._offsets.left,top:this._offsets.top}),this._elem.addClass(f),g=e.canvasManager.initCanvas(g),g=null,this._elem},a.jqplot.GenericCanvas.prototype.setContext=function(){return this._ctx=this._elem.get(0).getContext("2d"),this._ctx;
},a.jqplot.GenericCanvas.prototype.resetCanvas=function(){this._elem&&(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F&&window.G_vmlCanvasManager.uninitElement(this._elem.get(0)),this._elem.emptyForce()),this._ctx=null},a.jqplot.HooksManager=function(){this.hooks=[],this.args=[]},a.jqplot.HooksManager.prototype.addOnce=function(a,b){b=b||[];for(var c=!1,d=0,e=this.hooks.length;e>d;d++)this.hooks[d]==a&&(c=!0);c||(this.hooks.push(a),this.args.push(b))},a.jqplot.HooksManager.prototype.add=function(a,b){b=b||[],this.hooks.push(a),this.args.push(b)},a.jqplot.EventListenerManager=function(){this.hooks=[]},a.jqplot.EventListenerManager.prototype.addOnce=function(a,b){for(var c,d,e=!1,d=0,f=this.hooks.length;f>d;d++)c=this.hooks[d],c[0]==a&&c[1]==b&&(e=!0);e||this.hooks.push([a,b])},a.jqplot.EventListenerManager.prototype.add=function(a,b){this.hooks.push([a,b])};var G=["yMidAxis","xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];a.jqplot.computeHighlightColors=function(b){var c;if(a.isArray(b)){c=[];for(var d=0;d<b.length;d++){for(var e=a.jqplot.getColorComponents(b[d]),f=[e[0],e[1],e[2]],g=f[0]+f[1]+f[2],h=0;3>h;h++)f[h]=g>660?.85*f[h]:.73*f[h]+90,f[h]=parseInt(f[h],10),f[h]>255?255:f[h];f[3]=.3+.35*e[3],c.push("rgba("+f[0]+","+f[1]+","+f[2]+","+f[3]+")")}}else{for(var e=a.jqplot.getColorComponents(b),f=[e[0],e[1],e[2]],g=f[0]+f[1]+f[2],h=0;3>h;h++)f[h]=g>660?.85*f[h]:.73*f[h]+90,f[h]=parseInt(f[h],10),f[h]>255?255:f[h];f[3]=.3+.35*e[3],c="rgba("+f[0]+","+f[1]+","+f[2]+","+f[3]+")"}return c},a.jqplot.ColorGenerator=function(b){b=b||a.jqplot.config.defaultColors;var c=0;this.next=function(){return c<b.length?b[c++]:(c=0,b[c++])},this.previous=function(){return c>0?b[c--]:(c=b.length-1,b[c])},this.get=function(a){var c=a-b.length*Math.floor(a/b.length);return b[c]},this.setColors=function(a){b=a},this.reset=function(){c=0},this.getIndex=function(){return c},this.setIndex=function(a){c=a}},a.jqplot.hex2rgb=function(a,b){a=a.replace("#",""),3==a.length&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2));var c;return c="rgba("+parseInt(a.slice(0,2),16)+", "+parseInt(a.slice(2,4),16)+", "+parseInt(a.slice(4,6),16),b&&(c+=", "+b),c+=")"},a.jqplot.rgb2hex=function(a){for(var b=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/,c=a.match(b),d="#",e=1;4>e;e++){var f;-1!=c[e].search(/%/)?(f=parseInt(255*c[e]/100,10).toString(16),1==f.length&&(f="0"+f)):(f=parseInt(c[e],10).toString(16),1==f.length&&(f="0"+f)),d+=f}return d},a.jqplot.normalize2rgb=function(b,c){if(-1!=b.search(/^ *rgba?\(/))return b;if(-1!=b.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/))return a.jqplot.hex2rgb(b,c);throw new Error("Invalid color spec")},a.jqplot.getColorComponents=function(b){b=a.jqplot.colorKeywordMap[b]||b;for(var c=a.jqplot.normalize2rgb(b),d=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/,e=c.match(d),f=[],g=1;4>g;g++)-1!=e[g].search(/%/)?f[g-1]=parseInt(255*e[g]/100,10):f[g-1]=parseInt(e[g],10);return f[3]=parseFloat(e[4])?parseFloat(e[4]):1,f},a.jqplot.colorKeywordMap={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb( 0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb( 0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb( 0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb( 95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(220, 20, 60)",cyan:"rgb( 0, 255, 255)",darkblue:"rgb( 0, 0, 139)",darkcyan:"rgb( 0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgreen:"rgb( 0, 100, 0)",darkgrey:"rgb(169, 169, 169)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb( 85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb( 72, 61, 139)",darkslategray:"rgb( 47, 79, 79)",darkslategrey:"rgb( 47, 79, 79)",darkturquoise:"rgb( 0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb( 0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb( 30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb( 34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb( 0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb( 75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgray:"rgb(211, 211, 211)",lightgreen:"rgb(144, 238, 144)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb( 32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb( 0, 255, 0)",limegreen:"rgb( 50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb( 0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb( 60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb( 0, 250, 154)",mediumturquoise:"rgb( 72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb( 25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb( 0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb( 65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb( 46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb( 0, 255, 127)",steelblue:"rgb( 70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb( 0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb( 64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)"},a.jqplot.AxisLabelRenderer=function(b){a.jqplot.ElemContainer.call(this),this.axis,this.show=!0,this.label="",this.fontFamily=null,this.fontSize=null,this.textColor=null,this._elem,this.escapeHTML=!1,a.extend(!0,this,b)},a.jqplot.AxisLabelRenderer.prototype=new a.jqplot.ElemContainer,a.jqplot.AxisLabelRenderer.prototype.constructor=a.jqplot.AxisLabelRenderer,a.jqplot.AxisLabelRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.AxisLabelRenderer.prototype.draw=function(b,c){return this._elem&&(this._elem.emptyForce(),this._elem=null),this._elem=a('<div style="position:absolute;" class="jqplot-'+this.axis+'-label"></div>'),Number(this.label)&&this._elem.css("white-space","nowrap"),this.escapeHTML?this._elem.text(this.label):this._elem.html(this.label),this.fontFamily&&this._elem.css("font-family",this.fontFamily),this.fontSize&&this._elem.css("font-size",this.fontSize),this.textColor&&this._elem.css("color",this.textColor),this._elem},a.jqplot.AxisLabelRenderer.prototype.pack=function(){},a.jqplot.AxisTickRenderer=function(b){a.jqplot.ElemContainer.call(this),this.mark="outside",this.axis,this.showMark=!0,this.showGridline=!0,this.isMinorTick=!1,this.size=4,this.markSize=6,this.show=!0,this.showLabel=!0,this.label=null,this.value=null,this._styles={},this.formatter=a.jqplot.DefaultTickFormatter,this.prefix="",this.suffix="",this.formatString="",this.fontFamily,this.fontSize,this.textColor,this.escapeHTML=!1,this._elem,this._breakTick=!1,a.extend(!0,this,b)},a.jqplot.AxisTickRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.AxisTickRenderer.prototype=new a.jqplot.ElemContainer,a.jqplot.AxisTickRenderer.prototype.constructor=a.jqplot.AxisTickRenderer,a.jqplot.AxisTickRenderer.prototype.setTick=function(a,b,c){return this.value=a,this.axis=b,c&&(this.isMinorTick=!0),this},a.jqplot.AxisTickRenderer.prototype.draw=function(){null===this.label&&(this.label=this.prefix+this.formatter(this.formatString,this.value)+this.suffix);var b={position:"absolute"};Number(this.label)&&(b.whitSpace="nowrap"),this._elem&&(this._elem.emptyForce(),this._elem=null),this._elem=a(document.createElement("div")),this._elem.addClass("jqplot-"+this.axis+"-tick"),this.escapeHTML?this._elem.text(this.label):this._elem.html(this.label),this._elem.css(b);for(var c in this._styles)this._elem.css(c,this._styles[c]);return this.fontFamily&&this._elem.css("font-family",this.fontFamily),this.fontSize&&this._elem.css("font-size",this.fontSize),this.textColor&&this._elem.css("color",this.textColor),this._breakTick&&this._elem.addClass("jqplot-breakTick"),this._elem},a.jqplot.DefaultTickFormatter=function(b,c){return"number"==typeof c?(b||(b=a.jqplot.config.defaultTickFormatString),a.jqplot.sprintf(b,c)):String(c)},a.jqplot.PercentTickFormatter=function(b,c){return"number"==typeof c?(c=100*c,b||(b=a.jqplot.config.defaultTickFormatString),a.jqplot.sprintf(b,c)):String(c)},a.jqplot.AxisTickRenderer.prototype.pack=function(){},a.jqplot.CanvasGridRenderer=function(){this.shadowRenderer=new a.jqplot.ShadowRenderer},a.jqplot.CanvasGridRenderer.prototype.init=function(b){this._ctx,a.extend(!0,this,b);var c={lineJoin:"miter",lineCap:"round",fill:!1,isarc:!1,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.shadowWidth,closePath:!1,strokeStyle:this.shadowColor};this.renderer.shadowRenderer.init(c)},a.jqplot.CanvasGridRenderer.prototype.createElement=function(b){var c;this._elem&&(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==F&&(c=this._elem.get(0),window.G_vmlCanvasManager.uninitElement(c),c=null),this._elem.emptyForce(),this._elem=null),c=b.canvasManager.getCanvas();var d=this._plotDimensions.width,e=this._plotDimensions.height;return c.width=d,c.height=e,this._elem=a(c),this._elem.addClass("jqplot-grid-canvas"),this._elem.css({position:"absolute",left:0,top:0}),c=b.canvasManager.initCanvas(c),this._top=this._offsets.top,this._bottom=e-this._offsets.bottom,this._left=this._offsets.left,this._right=d-this._offsets.right,this._width=this._right-this._left,this._height=this._bottom-this._top,c=null,this._elem},a.jqplot.CanvasGridRenderer.prototype.draw=function(){function b(b,d,e,f,g){c.save(),g=g||{},(null==g.lineWidth||0!=g.lineWidth)&&(a.extend(!0,c,g),c.beginPath(),c.moveTo(b,d),c.lineTo(e,f),c.stroke(),c.restore())}this._ctx=this._elem.get(0).getContext("2d");var c=this._ctx,d=this._axes;c.save(),c.clearRect(0,0,this._plotDimensions.width,this._plotDimensions.height),c.fillStyle=this.backgroundColor||this.background,c.fillRect(this._left,this._top,this._width,this._height),c.save(),c.lineJoin="miter",c.lineCap="butt",c.lineWidth=this.gridLineWidth,c.strokeStyle=this.gridLineColor;for(var e,f,g,h,i=["xaxis","yaxis","x2axis","y2axis"],j=4;j>0;j--){var k=i[j-1],l=d[k],m=l._ticks,n=m.length;if(l.show){if(l.drawBaseline){var o={};switch(null!==l.baselineWidth&&(o.lineWidth=l.baselineWidth),null!==l.baselineColor&&(o.strokeStyle=l.baselineColor),k){case"xaxis":b(this._left,this._bottom,this._right,this._bottom,o);break;case"yaxis":b(this._left,this._bottom,this._left,this._top,o);break;case"x2axis":b(this._left,this._bottom,this._right,this._bottom,o);break;case"y2axis":b(this._right,this._bottom,this._right,this._top,o)}}for(var p=n;p>0;p--){var q=m[p-1];if(q.show){var r=Math.round(l.u2p(q.value))+.5;switch(k){case"xaxis":if(q.showGridline&&this.drawGridlines&&(!q.isMinorTick&&l.drawMajorGridlines||q.isMinorTick&&l.drawMinorGridlines)&&b(r,this._top,r,this._bottom),q.showMark&&q.mark&&(!q.isMinorTick&&l.drawMajorTickMarks||q.isMinorTick&&l.drawMinorTickMarks)){g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;switch(h){case"outside":e=this._bottom,f=this._bottom+g;break;case"inside":e=this._bottom-g,f=this._bottom;break;case"cross":e=this._bottom-g,f=this._bottom+g;break;default:e=this._bottom,f=this._bottom+g}this.shadow&&this.renderer.shadowRenderer.draw(c,[[r,e],[r,f]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:.75*this.gridLineWidth,depth:2,fill:!1,closePath:!1}),b(r,e,r,f)}break;case"yaxis":if(q.showGridline&&this.drawGridlines&&(!q.isMinorTick&&l.drawMajorGridlines||q.isMinorTick&&l.drawMinorGridlines)&&b(this._right,r,this._left,r),q.showMark&&q.mark&&(!q.isMinorTick&&l.drawMajorTickMarks||q.isMinorTick&&l.drawMinorTickMarks)){g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;switch(h){case"outside":e=this._left-g,f=this._left;break;case"inside":e=this._left,f=this._left+g;break;case"cross":e=this._left-g,f=this._left+g;break;default:e=this._left-g,f=this._left}this.shadow&&this.renderer.shadowRenderer.draw(c,[[e,r],[f,r]],{lineCap:"butt",lineWidth:1.5*this.gridLineWidth,offset:.75*this.gridLineWidth,fill:!1,closePath:!1}),b(e,r,f,r,{strokeStyle:l.borderColor})}break;case"x2axis":if(q.showGridline&&this.drawGridlines&&(!q.isMinorTick&&l.drawMajorGridlines||q.isMinorTick&&l.drawMinorGridlines)&&b(r,this._bottom,r,this._top),q.showMark&&q.mark&&(!q.isMinorTick&&l.drawMajorTickMarks||q.isMinorTick&&l.drawMinorTickMarks)){g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;switch(h){case"outside":e=this._top-g,f=this._top;break;case"inside":e=this._top,f=this._top+g;break;case"cross":e=this._top-g,f=this._top+g;break;default:e=this._top-g,f=this._top}this.shadow&&this.renderer.shadowRenderer.draw(c,[[r,e],[r,f]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:.75*this.gridLineWidth,depth:2,fill:!1,closePath:!1}),b(r,e,r,f)}break;case"y2axis":if(q.showGridline&&this.drawGridlines&&(!q.isMinorTick&&l.drawMajorGridlines||q.isMinorTick&&l.drawMinorGridlines)&&b(this._left,r,this._right,r),q.showMark&&q.mark&&(!q.isMinorTick&&l.drawMajorTickMarks||q.isMinorTick&&l.drawMinorTickMarks)){g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;switch(h){case"outside":e=this._right,f=this._right+g;break;case"inside":e=this._right-g,f=this._right;break;case"cross":e=this._right-g,f=this._right+g;break;default:e=this._right,f=this._right+g}this.shadow&&this.renderer.shadowRenderer.draw(c,[[e,r],[f,r]],{lineCap:"butt",lineWidth:1.5*this.gridLineWidth,offset:.75*this.gridLineWidth,fill:!1,closePath:!1}),b(e,r,f,r,{strokeStyle:l.borderColor})}}}}q=null}l=null,m=null}i=["y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis","yMidAxis"];for(var j=7;j>0;j--){var l=d[i[j-1]],m=l._ticks;if(l.show){var s=m[l.numberTicks-1],t=m[0],u=l.getLeft(),v=[[u,s.getTop()+s.getHeight()/2],[u,t.getTop()+t.getHeight()/2+1]];this.shadow&&this.renderer.shadowRenderer.draw(c,v,{lineCap:"butt",fill:!1,closePath:!1}),b(v[0][0],v[0][1],v[1][0],v[1][1],{lineCap:"butt",strokeStyle:l.borderColor,lineWidth:l.borderWidth});for(var p=m.length;p>0;p--){var q=m[p-1];g=q.markSize,h=q.mark;var r=Math.round(l.u2p(q.value))+.5;if(q.showMark&&q.mark){switch(h){case"outside":e=u,f=u+g;break;case"inside":e=u-g,f=u;break;case"cross":e=u-g,f=u+g;break;default:e=u,f=u+g}v=[[e,r],[f,r]],this.shadow&&this.renderer.shadowRenderer.draw(c,v,{lineCap:"butt",lineWidth:1.5*this.gridLineWidth,offset:.75*this.gridLineWidth,fill:!1,closePath:!1}),b(e,r,f,r,{strokeStyle:l.borderColor})}q=null}t=null}l=null,m=null}if(c.restore(),this.shadow){var v=[[this._left,this._bottom],[this._right,this._bottom],[this._right,this._top]];this.renderer.shadowRenderer.draw(c,v)}0!=this.borderWidth&&this.drawBorder&&(b(this._left,this._top,this._right,this._top,{lineCap:"round",strokeStyle:d.x2axis.borderColor,lineWidth:d.x2axis.borderWidth}),b(this._right,this._top,this._right,this._bottom,{lineCap:"round",strokeStyle:d.y2axis.borderColor,lineWidth:d.y2axis.borderWidth}),b(this._right,this._bottom,this._left,this._bottom,{lineCap:"round",strokeStyle:d.xaxis.borderColor,lineWidth:d.xaxis.borderWidth}),b(this._left,this._bottom,this._left,this._top,{lineCap:"round",strokeStyle:d.yaxis.borderColor,lineWidth:d.yaxis.borderWidth})),c.restore(),c=null,d=null},a.jqplot.DivTitleRenderer=function(){},a.jqplot.DivTitleRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.DivTitleRenderer.prototype.draw=function(){this._elem&&(this._elem.emptyForce(),this._elem=null);var b=(this.renderer,document.createElement("div"));if(this._elem=a(b),this._elem.addClass("jqplot-title"),this.text){if(this.text){var c;this.color?c=this.color:this.textColor&&(c=this.textColor);var d={position:"absolute",top:"0px",left:"0px"};this._plotWidth&&(d.width=this._plotWidth+"px"),this.fontSize&&(d.fontSize=this.fontSize),"string"==typeof this.textAlign?d.textAlign=this.textAlign:d.textAlign="center",c&&(d.color=c),this.paddingBottom&&(d.paddingBottom=this.paddingBottom),this.fontFamily&&(d.fontFamily=this.fontFamily),this._elem.css(d),this.escapeHtml?this._elem.text(this.text):this._elem.html(this.text)}}else this.show=!1,this._elem.height(0),this._elem.width(0);return b=null,this._elem},a.jqplot.DivTitleRenderer.prototype.pack=function(){};var H=.1;a.jqplot.LinePattern=function(b,c){var d={dotted:[H,a.jqplot.config.dotGapLength],dashed:[a.jqplot.config.dashLength,a.jqplot.config.gapLength],solid:null};if("string"==typeof c)if("."===c[0]||"-"===c[0]){var e=c;c=[];for(var f=0,g=e.length;g>f;f++){if("."===e[f])c.push(H);else{if("-"!==e[f])continue;c.push(a.jqplot.config.dashLength)}c.push(a.jqplot.config.gapLength)}}else c=d[c];if(!c||!c.length)return b;var h=0,i=c[0],j=0,k=0,l=0,m=0,n=function(a,c){b.moveTo(a,c),j=a,k=c,l=a,m=c},o=function(a,d){var e=b.lineWidth,f=a-j,g=d-k,l=Math.sqrt(f*f+g*g);if(l>0&&e>0)for(f/=l,g/=l;;){var m=e*i;if(!(l>m)){j=a,k=d,0==(1&h)?b.lineTo(j,k):b.moveTo(j,k),i-=l/e;break}j+=m*f,k+=m*g,0==(1&h)?b.lineTo(j,k):b.moveTo(j,k),l-=m,h++,h>=c.length&&(h=0),i=c[h]}},p=function(){b.beginPath()},q=function(){o(l,m)};return{moveTo:n,lineTo:o,beginPath:p,closePath:q}},a.jqplot.LineRenderer=function(){this.shapeRenderer=new a.jqplot.ShapeRenderer,this.shadowRenderer=new a.jqplot.ShadowRenderer},a.jqplot.LineRenderer.prototype.init=function(b,c){b=b||{},this._type="line",this.renderer.animation={show:!1,direction:"left",speed:2500,_supported:!0},this.renderer.smooth=!1,this.renderer.tension=null,this.renderer.constrainSmoothing=!0,this.renderer._smoothedData=[],this.renderer._smoothedPlotData=[],this.renderer._hiBandGridData=[],this.renderer._lowBandGridData=[],this.renderer._hiBandSmoothedData=[],this.renderer._lowBandSmoothedData=[],this.renderer.bandData=[],this.renderer.bands={show:!1,hiData:[],lowData:[],color:this.color,showLines:!1,fill:!0,fillColor:null,_min:null,_max:null,interval:"3%"};var d={highlightMouseOver:b.highlightMouseOver,highlightMouseDown:b.highlightMouseDown,highlightColor:b.highlightColor};delete b.highlightMouseOver,delete b.highlightMouseDown,delete b.highlightColor,a.extend(!0,this.renderer,b),this.renderer.options=b,this.renderer.bandData.length>1&&(!b.bands||null==b.bands.show)?this.renderer.bands.show=!0:b.bands&&null==b.bands.show&&null!=b.bands.interval&&(this.renderer.bands.show=!0),this.fill&&(this.renderer.bands.show=!1),this.renderer.bands.show&&this.renderer.initBands.call(this,this.renderer.options,c),this._stack&&(this.renderer.smooth=!1);var e={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:!1,strokeStyle:this.color,fillStyle:this.fillColor,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};this.renderer.shapeRenderer.init(e);var f=b.shadowOffset;null==f&&(f=this.lineWidth>2.5?1.25*(1+.6*(Math.atan(this.lineWidth/2.5)/.785398163-1)):1.25*Math.atan(this.lineWidth/2.5)/.785398163);var g={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:!1,angle:this.shadowAngle,offset:f,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};if(this.renderer.shadowRenderer.init(g),this._areaPoints=[],this._boundingBox=[[],[]],!this.isTrendline&&this.fill||this.renderer.bands.show){if(this.highlightMouseOver=!0,this.highlightMouseDown=!1,this.highlightColor=null,d.highlightMouseDown&&null==d.highlightMouseOver&&(d.highlightMouseOver=!1),a.extend(!0,this,{highlightMouseOver:d.highlightMouseOver,highlightMouseDown:d.highlightMouseDown,highlightColor:d.highlightColor}),!this.highlightColor){var h=this.renderer.bands.show?this.renderer.bands.fillColor:this.fillColor;this.highlightColor=a.jqplot.computeHighlightColors(h)}this.highlighter&&(this.highlighter.show=!1)}!this.isTrendline&&c&&(c.plugins.lineRenderer={},c.postInitHooks.addOnce(l),c.postDrawHooks.addOnce(m),c.eventListenerHooks.addOnce("jqplotMouseMove",p),c.eventListenerHooks.addOnce("jqplotMouseDown",q),c.eventListenerHooks.addOnce("jqplotMouseUp",r),c.eventListenerHooks.addOnce("jqplotClick",s),c.eventListenerHooks.addOnce("jqplotRightClick",t))},a.jqplot.LineRenderer.prototype.initBands=function(b,c){var d=b.bandData||[],e=this.renderer.bands;e.hiData=[],e.lowData=[];var f=this.data;if(e._max=null,e._min=null,2==d.length)if(a.isArray(d[0][0])){for(var g,h=0,i=0,j=0,k=d[0].length;k>j;j++)g=d[0][j],(null!=g[1]&&g[1]>e._max||null==e._max)&&(e._max=g[1]),(null!=g[1]&&g[1]<e._min||null==e._min)&&(e._min=g[1]);for(var j=0,k=d[1].length;k>j;j++)g=d[1][j],(null!=g[1]&&g[1]>e._max||null==e._max)&&(e._max=g[1],i=1),(null!=g[1]&&g[1]<e._min||null==e._min)&&(e._min=g[1],h=1);i===h&&(e.show=!1),e.hiData=d[i],e.lowData=d[h]}else if(d[0].length===f.length&&d[1].length===f.length)for(var l=d[0][0]>d[1][0]?0:1,m=l?0:1,j=0,k=f.length;k>j;j++)e.hiData.push([f[j][0],d[l][j]]),e.lowData.push([f[j][0],d[m][j]]);else e.show=!1;else if(d.length>2&&!a.isArray(d[0][0]))for(var l=d[0][0]>d[0][1]?0:1,m=l?0:1,j=0,k=d.length;k>j;j++)e.hiData.push([f[j][0],d[j][l]]),e.lowData.push([f[j][0],d[j][m]]);else{var n=e.interval,o=null,p=null,q=null,r=null;if(a.isArray(n)?(o=n[0],p=n[1]):o=n,isNaN(o)?"%"===o.charAt(o.length-1)&&(q="multiply",o=parseFloat(o)/100+1):(o=parseFloat(o),q="add"),null!==p&&isNaN(p)?"%"===p.charAt(p.length-1)&&(r="multiply",p=parseFloat(p)/100+1):null!==p&&(p=parseFloat(p),r="add"),null!==o){if(null===p&&(p=-o,r=q,"multiply"===r&&(p+=2)),p>o){var s=o;o=p,p=s,s=q,q=r,r=s}for(var j=0,k=f.length;k>j;j++){switch(q){case"add":e.hiData.push([f[j][0],f[j][1]+o]);break;case"multiply":e.hiData.push([f[j][0],f[j][1]*o])}switch(r){case"add":e.lowData.push([f[j][0],f[j][1]+p]);break;case"multiply":e.lowData.push([f[j][0],f[j][1]*p])}}}else e.show=!1}for(var t=e.hiData,u=e.lowData,j=0,k=t.length;k>j;j++)(null!=t[j][1]&&t[j][1]>e._max||null==e._max)&&(e._max=t[j][1]);for(var j=0,k=u.length;k>j;j++)(null!=u[j][1]&&u[j][1]<e._min||null==e._min)&&(e._min=u[j][1]);if(null===e.fillColor){var v=a.jqplot.getColorComponents(e.color);v[3]=.5*v[3],e.fillColor="rgba("+v[0]+", "+v[1]+", "+v[2]+", "+v[3]+")"}},a.jqplot.LineRenderer.prototype.setGridData=function(a){var b=this._xaxis.series_u2p,c=this._yaxis.series_u2p,d=this._plotData,e=this._prevPlotData;this.gridData=[],this._prevGridData=[],this.renderer._smoothedData=[],this.renderer._smoothedPlotData=[],this.renderer._hiBandGridData=[],this.renderer._lowBandGridData=[],this.renderer._hiBandSmoothedData=[],this.renderer._lowBandSmoothedData=[];for(var f=this.renderer.bands,g=!1,h=0,i=d.length;i>h;h++)null!=d[h][0]&&null!=d[h][1]?this.gridData.push([b.call(this._xaxis,d[h][0]),c.call(this._yaxis,d[h][1])]):null==d[h][0]?(g=!0,this.gridData.push([null,c.call(this._yaxis,d[h][1])])):null==d[h][1]&&(g=!0,this.gridData.push([b.call(this._xaxis,d[h][0]),null])),null!=e[h]&&null!=e[h][0]&&null!=e[h][1]?this._prevGridData.push([b.call(this._xaxis,e[h][0]),c.call(this._yaxis,e[h][1])]):null!=e[h]&&null==e[h][0]?this._prevGridData.push([null,c.call(this._yaxis,e[h][1])]):null!=e[h]&&null!=e[h][0]&&null==e[h][1]&&this._prevGridData.push([b.call(this._xaxis,e[h][0]),null]);if(g&&(this.renderer.smooth=!1,"line"===this._type&&(f.show=!1)),"line"===this._type&&f.show){for(var h=0,i=f.hiData.length;i>h;h++)this.renderer._hiBandGridData.push([b.call(this._xaxis,f.hiData[h][0]),c.call(this._yaxis,f.hiData[h][1])]);for(var h=0,i=f.lowData.length;i>h;h++)this.renderer._lowBandGridData.push([b.call(this._xaxis,f.lowData[h][0]),c.call(this._yaxis,f.lowData[h][1])])}if("line"===this._type&&this.renderer.smooth&&this.gridData.length>2){var l;this.renderer.constrainSmoothing?(l=j.call(this,this.gridData),this.renderer._smoothedData=l[0],this.renderer._smoothedPlotData=l[1],f.show&&(l=j.call(this,this.renderer._hiBandGridData),this.renderer._hiBandSmoothedData=l[0],l=j.call(this,this.renderer._lowBandGridData),this.renderer._lowBandSmoothedData=l[0]),l=null):(l=k.call(this,this.gridData),this.renderer._smoothedData=l[0],this.renderer._smoothedPlotData=l[1],f.show&&(l=k.call(this,this.renderer._hiBandGridData),this.renderer._hiBandSmoothedData=l[0],l=k.call(this,this.renderer._lowBandGridData),this.renderer._lowBandSmoothedData=l[0]),l=null)}},a.jqplot.LineRenderer.prototype.makeGridData=function(a,b){var c=this._xaxis.series_u2p,d=this._yaxis.series_u2p,e=[];this.renderer._smoothedData=[],this.renderer._smoothedPlotData=[],this.renderer._hiBandGridData=[],this.renderer._lowBandGridData=[],this.renderer._hiBandSmoothedData=[],this.renderer._lowBandSmoothedData=[];for(var f=this.renderer.bands,g=!1,h=0;h<a.length;h++)null!=a[h][0]&&null!=a[h][1]?(this.step&&h>0&&e.push([c.call(this._xaxis,a[h][0]),d.call(this._yaxis,a[h-1][1])]),e.push([c.call(this._xaxis,a[h][0]),d.call(this._yaxis,a[h][1])])):null==a[h][0]?(g=!0,e.push([null,d.call(this._yaxis,a[h][1])])):null==a[h][1]&&(g=!0,e.push([c.call(this._xaxis,a[h][0]),null]));if(g&&(this.renderer.smooth=!1,"line"===this._type&&(f.show=!1)),"line"===this._type&&f.show){for(var h=0,i=f.hiData.length;i>h;h++)this.renderer._hiBandGridData.push([c.call(this._xaxis,f.hiData[h][0]),d.call(this._yaxis,f.hiData[h][1])]);for(var h=0,i=f.lowData.length;i>h;h++)this.renderer._lowBandGridData.push([c.call(this._xaxis,f.lowData[h][0]),d.call(this._yaxis,f.lowData[h][1])])}if("line"===this._type&&this.renderer.smooth&&e.length>2){var l;this.renderer.constrainSmoothing?(l=j.call(this,e),this.renderer._smoothedData=l[0],this.renderer._smoothedPlotData=l[1],f.show&&(l=j.call(this,this.renderer._hiBandGridData),this.renderer._hiBandSmoothedData=l[0],l=j.call(this,this.renderer._lowBandGridData),this.renderer._lowBandSmoothedData=l[0]),l=null):(l=k.call(this,e),this.renderer._smoothedData=l[0],this.renderer._smoothedPlotData=l[1],f.show&&(l=k.call(this,this.renderer._hiBandGridData),this.renderer._hiBandSmoothedData=l[0],l=k.call(this,this.renderer._lowBandGridData),this.renderer._lowBandSmoothedData=l[0]),l=null)}return e},a.jqplot.LineRenderer.prototype.draw=function(b,c,d,e){var f,g,h,i,j,k=a.extend(!0,{},d),l=k.shadow!=F?k.shadow:this.shadow,m=k.showLine!=F?k.showLine:this.showLine,n=k.fill!=F?k.fill:this.fill,o=k.fillAndStroke!=F?k.fillAndStroke:this.fillAndStroke;if(b.save(),c.length){if(m)if(n){if(this.fillToZero){var p=this.negativeColor;this.useNegativeColors||(p=k.fillStyle);var q=!1,r=k.fillStyle;if(o)var s=c.slice(0);if(0!=this.index&&this._stack){for(var t=this._prevGridData,f=t.length;f>0;f--)c.push(t[f-1]);l&&this.renderer.shadowRenderer.draw(b,c,k),this._areaPoints=c,this.renderer.shapeRenderer.draw(b,c,k)}else{var u=[],v=this.renderer.smooth?this.renderer._smoothedPlotData:this._plotData;this._areaPoints=[];var w=this._yaxis.series_u2p(this.fillToValue);this._xaxis.series_u2p(this.fillToValue);if(k.closePath=!0,"y"==this.fillAxis){u.push([c[0][0],w]),this._areaPoints.push([c[0][0],w]);for(var f=0;f<c.length-1;f++)if(u.push(c[f]),this._areaPoints.push(c[f]),v[f][1]*v[f+1][1]<=0){v[f][1]<0?(q=!0,k.fillStyle=p):(q=!1,k.fillStyle=r);var x=c[f][0]+(c[f+1][0]-c[f][0])*(w-c[f][1])/(c[f+1][1]-c[f][1]);u.push([x,w]),this._areaPoints.push([x,w]),l&&this.renderer.shadowRenderer.draw(b,u,k),this.renderer.shapeRenderer.draw(b,u,k),u=[[x,w]]}v[c.length-1][1]<0?(q=!0,k.fillStyle=p):(q=!1,k.fillStyle=r),u.push(c[c.length-1]),this._areaPoints.push(c[c.length-1]),u.push([c[c.length-1][0],w]),this._areaPoints.push([c[c.length-1][0],w])}l&&this.renderer.shadowRenderer.draw(b,u,k),this.renderer.shapeRenderer.draw(b,u,k)}}else{if(o)var s=c.slice(0);if(0!=this.index&&this._stack)for(var t=this._prevGridData,f=t.length;f>0;f--)c.push(t[f-1]);else{var y=b.canvas.height;c.unshift([c[0][0],y]);var z=c.length;c.push([c[z-1][0],y])}this._areaPoints=c,l&&this.renderer.shadowRenderer.draw(b,c,k),this.renderer.shapeRenderer.draw(b,c,k)}if(o){var A=a.extend(!0,{},k,{fill:!1,closePath:!1});if(this.renderer.shapeRenderer.draw(b,s,A),this.markerRenderer.show)for(this.renderer.smooth&&(s=this.gridData),f=0;f<s.length;f++)this.markerRenderer.draw(s[f][0],s[f][1],b,k.markerOptions)}}else{if(this.renderer.bands.show){var B,C=a.extend(!0,{},k);this.renderer.bands.showLines&&(B=this.renderer.smooth?this.renderer._hiBandSmoothedData:this.renderer._hiBandGridData,this.renderer.shapeRenderer.draw(b,B,k),B=this.renderer.smooth?this.renderer._lowBandSmoothedData:this.renderer._lowBandGridData,this.renderer.shapeRenderer.draw(b,B,C)),this.renderer.bands.fill&&(B=this.renderer.smooth?this.renderer._hiBandSmoothedData.concat(this.renderer._lowBandSmoothedData.reverse()):this.renderer._hiBandGridData.concat(this.renderer._lowBandGridData.reverse()),this._areaPoints=B,C.closePath=!0,C.fill=!0,C.fillStyle=this.renderer.bands.fillColor,this.renderer.shapeRenderer.draw(b,B,C))}l&&this.renderer.shadowRenderer.draw(b,c,k),this.renderer.shapeRenderer.draw(b,c,k)}var g=i=h=j=null;for(f=0;f<this._areaPoints.length;f++){var D=this._areaPoints[f];(g>D[0]||null==g)&&(g=D[0]),(j<D[1]||null==j)&&(j=D[1]),(i<D[0]||null==i)&&(i=D[0]),(h>D[1]||null==h)&&(h=D[1])}if("line"===this.type&&this.renderer.bands.show&&(j=this._yaxis.series_u2p(this.renderer.bands._min),h=this._yaxis.series_u2p(this.renderer.bands._max)),this._boundingBox=[[g,j],[i,h]],this.markerRenderer.show&&!n)for(this.renderer.smooth&&(c=this.gridData),f=0;f<c.length;f++)null!=c[f][0]&&null!=c[f][1]&&this.markerRenderer.draw(c[f][0],c[f][1],b,k.markerOptions)}b.restore()},a.jqplot.LineRenderer.prototype.drawShadow=function(a,b,c){},a.jqplot.LinearAxisRenderer=function(){},a.jqplot.LinearAxisRenderer.prototype.init=function(b){this.breakPoints=null,this.breakTickLabel="&asymp;",this.drawBaseline=!0,this.baselineWidth=null,this.baselineColor=null,this.forceTickAt0=!1,this.forceTickAt100=!1,this.tickInset=0,this.minorTicks=0,this.alignTicks=!1,this._autoFormatString="",this._overrideFormatString=!1,this._scalefact=1,a.extend(!0,this,b),this.breakPoints&&(a.isArray(this.breakPoints)?(this.breakPoints.length<2||this.breakPoints[1]<=this.breakPoints[0])&&(this.breakPoints=null):this.breakPoints=null),
null!=this.numberTicks&&this.numberTicks<2&&(this.numberTicks=2),this.resetDataBounds()},a.jqplot.LinearAxisRenderer.prototype.draw=function(b,c){if(this.show){this.renderer.createTicks.call(this,c);if(this._elem&&(this._elem.emptyForce(),this._elem=null),this._elem=a(document.createElement("div")),this._elem.addClass("jqplot-axis jqplot-"+this.name),this._elem.css("position","absolute"),"xaxis"==this.name||"x2axis"==this.name?this._elem.width(this._plotDimensions.width):this._elem.height(this._plotDimensions.height),this.labelOptions.axis=this.name,this._label=new this.labelRenderer(this.labelOptions),this._label.show){var d=this._label.draw(b,c);d.appendTo(this._elem),d=null}for(var e,f=this._ticks,g=0;g<f.length;g++)e=f[g],e.show&&e.showLabel&&(!e.isMinorTick||this.showMinorTicks)&&this._elem.append(e.draw(b,c));e=null,f=null}return this._elem},a.jqplot.LinearAxisRenderer.prototype.reset=function(){this.min=this._options.min,this.max=this._options.max,this.tickInterval=this._options.tickInterval,this.numberTicks=this._options.numberTicks,this._autoFormatString="",this._overrideFormatString&&this.tickOptions&&this.tickOptions.formatString&&(this.tickOptions.formatString="")},a.jqplot.LinearAxisRenderer.prototype.set=function(){var b,c=0,d=0,e=0,f=null==this._label?!1:this._label.show;if(this.show){for(var g,h=this._ticks,i=0;i<h.length;i++)g=h[i],g._breakTick||!g.show||!g.showLabel||g.isMinorTick&&!this.showMinorTicks||(b="xaxis"==this.name||"x2axis"==this.name?g._elem.outerHeight(!0):g._elem.outerWidth(!0),b>c&&(c=b));g=null,h=null,f&&(d=this._label._elem.outerWidth(!0),e=this._label._elem.outerHeight(!0)),"xaxis"==this.name?(c+=e,this._elem.css({height:c+"px",left:"0px",bottom:"0px"})):"x2axis"==this.name?(c+=e,this._elem.css({height:c+"px",left:"0px",top:"0px"})):"yaxis"==this.name?(c+=d,this._elem.css({width:c+"px",left:"0px",top:"0px"}),f&&this._label.constructor==a.jqplot.AxisLabelRenderer&&this._label._elem.css("width",d+"px")):(c+=d,this._elem.css({width:c+"px",right:"0px",top:"0px"}),f&&this._label.constructor==a.jqplot.AxisLabelRenderer&&this._label._elem.css("width",d+"px"))}},a.jqplot.LinearAxisRenderer.prototype.createTicks=function(b){var c,d,e,f,g=this._ticks,h=this.ticks,i=this.name,j=this._dataBounds,k="x"===this.name.charAt(0)?this._plotDimensions.width:this._plotDimensions.height,l=this.min,m=this.max,n=this.numberTicks,o=this.tickInterval,p=30;if(this._scalefact=(Math.max(k,p+1)-p)/300,h.length){for(f=0;f<h.length;f++){var q=h[f],r=new this.tickRenderer(this.tickOptions);a.isArray(q)?(r.value=q[0],this.breakPoints?q[0]==this.breakPoints[0]?(r.label=this.breakTickLabel,r._breakTick=!0,r.showGridline=!1,r.showMark=!1):q[0]>this.breakPoints[0]&&q[0]<=this.breakPoints[1]?(r.show=!1,r.showGridline=!1,r.label=q[1]):r.label=q[1]:r.label=q[1],r.setTick(q[0],this.name),this._ticks.push(r)):a.isPlainObject(q)?(a.extend(!0,r,q),r.axis=this.name,this._ticks.push(r)):(r.value=q,this.breakPoints&&(q==this.breakPoints[0]?(r.label=this.breakTickLabel,r._breakTick=!0,r.showGridline=!1,r.showMark=!1):q>this.breakPoints[0]&&q<=this.breakPoints[1]&&(r.show=!1,r.showGridline=!1)),r.setTick(q,this.name),this._ticks.push(r))}this.numberTicks=h.length,this.min=this._ticks[0].value,this.max=this._ticks[this.numberTicks-1].value,this.tickInterval=(this.max-this.min)/(this.numberTicks-1)}else{k="xaxis"==i||"x2axis"==i?this._plotDimensions.width:this._plotDimensions.height;var s=this.numberTicks;this.alignTicks&&("x2axis"===this.name&&b.axes.xaxis.show?s=b.axes.xaxis.numberTicks:"y"===this.name.charAt(0)&&"yaxis"!==this.name&&"yMidAxis"!==this.name&&b.axes.yaxis.show&&(s=b.axes.yaxis.numberTicks)),c=null!=this.min?this.min:j.min,d=null!=this.max?this.max:j.max;var t,u,v,w=d-c;if(null!=this.tickOptions&&this.tickOptions.formatString||(this._overrideFormatString=!0),null==this.min||null==this.max&&null==this.tickInterval&&!this.autoscale){this.forceTickAt0&&(c>0&&(c=0),0>d&&(d=0)),this.forceTickAt100&&(c>100&&(c=100),100>d&&(d=100));var x=!1,y=!1;null!=this.min?x=!0:null!=this.max&&(y=!0);var z=a.jqplot.LinearTickGenerator(c,d,this._scalefact,s,x,y),A=null!=this.min?c:c+w*(this.padMin-1),B=null!=this.max?d:d-w*(this.padMax-1);(A>c||d>B)&&(A=null!=this.min?c:c-w*(this.padMin-1),B=null!=this.max?d:d+w*(this.padMax-1),z=a.jqplot.LinearTickGenerator(A,B,this._scalefact,s,x,y)),this.min=z[0],this.max=z[1],this.numberTicks=z[2],this._autoFormatString=z[3],this.tickInterval=z[4]}else{if(c==d){var C=.05;c>0&&(C=Math.max(Math.log(c)/Math.LN10,.05)),c-=C,d+=C}if(this.autoscale&&null==this.min&&null==this.max){for(var D,E,F,G=!1,H=!1,f=0;f<this._series.length;f++){var I=this._series[f],J="x"==I.fillAxis?I._xaxis.name:I._yaxis.name;if(this.name==J){for(var K=I._plotValues[I.fillAxis],L=K[0],M=K[0],N=1;N<K.length;N++)K[N]<L?L=K[N]:K[N]>M&&(M=K[N]);var O=(M-L)/M;I.renderer.constructor==a.jqplot.BarRenderer?L>=0&&(I.fillToZero||O>.1)?G=!0:(G=!1,H=I.fill&&I.fillToZero&&0>L&&M>0?!0:!1):I.fill?L>=0&&(I.fillToZero||O>.1)?G=!0:0>L&&M>0&&I.fillToZero?(G=!1,H=!0):(G=!1,H=!1):0>L&&(G=!1)}}if(G)this.numberTicks=2+Math.ceil((k-(this.tickSpacing-1))/this.tickSpacing),this.min=0,l=0,E=d/(this.numberTicks-1),v=Math.pow(10,Math.abs(Math.floor(Math.log(E)/Math.LN10))),E/v==parseInt(E/v,10)&&(E+=v),this.tickInterval=Math.ceil(E/v)*v,this.max=this.tickInterval*(this.numberTicks-1);else if(H){this.numberTicks=2+Math.ceil((k-(this.tickSpacing-1))/this.tickSpacing);var P=Math.ceil(Math.abs(c)/w*(this.numberTicks-1)),Q=this.numberTicks-1-P;E=Math.max(Math.abs(c/P),Math.abs(d/Q)),v=Math.pow(10,Math.abs(Math.floor(Math.log(E)/Math.LN10))),this.tickInterval=Math.ceil(E/v)*v,this.max=this.tickInterval*Q,this.min=-this.tickInterval*P}else null==this.numberTicks&&(this.tickInterval?this.numberTicks=3+Math.ceil(w/this.tickInterval):this.numberTicks=2+Math.ceil((k-(this.tickSpacing-1))/this.tickSpacing)),null==this.tickInterval?(E=w/(this.numberTicks-1),v=1>E?Math.pow(10,Math.abs(Math.floor(Math.log(E)/Math.LN10))):1,this.tickInterval=Math.ceil(E*v*this.pad)/v):v=1/this.tickInterval,D=this.tickInterval*(this.numberTicks-1),F=(D-w)/2,null==this.min&&(this.min=Math.floor(v*(c-F))/v),null==this.max&&(this.max=this.min+D);var R,S=a.jqplot.getSignificantFigures(this.tickInterval);if(S.digitsLeft>=S.significantDigits)R="%d";else{var v=Math.max(0,5-S.digitsLeft);v=Math.min(v,S.digitsRight),R="%."+v+"f"}this._autoFormatString=R}else{t=null!=this.min?this.min:c-w*(this.padMin-1),u=null!=this.max?this.max:d+w*(this.padMax-1),w=u-t,null==this.numberTicks&&(null!=this.tickInterval?this.numberTicks=Math.ceil((u-t)/this.tickInterval)+1:k>100?this.numberTicks=parseInt(3+(k-100)/75,10):this.numberTicks=2),null==this.tickInterval&&(this.tickInterval=w/(this.numberTicks-1)),null==this.max&&(u=t+this.tickInterval*(this.numberTicks-1)),null==this.min&&(t=u-this.tickInterval*(this.numberTicks-1));var R,S=a.jqplot.getSignificantFigures(this.tickInterval);if(S.digitsLeft>=S.significantDigits)R="%d";else{var v=Math.max(0,5-S.digitsLeft);v=Math.min(v,S.digitsRight),R="%."+v+"f"}this._autoFormatString=R,this.min=t,this.max=u}if(this.renderer.constructor==a.jqplot.LinearAxisRenderer&&""==this._autoFormatString){w=this.max-this.min;var T=new this.tickRenderer(this.tickOptions),U=T.formatString||a.jqplot.config.defaultTickFormatString,U=U.match(a.jqplot.sprintf.regex)[0],V=0;if(U){if(U.search(/[fFeEgGpP]/)>-1){var W=U.match(/\%\.(\d{0,})?[eEfFgGpP]/);V=W?parseInt(W[1],10):6}else U.search(/[di]/)>-1&&(V=0);var X=Math.pow(10,-V);if(this.tickInterval<X&&null==n&&null==o)if(this.tickInterval=X,null==m&&null==l){this.min=Math.floor(this._dataBounds.min/X)*X,this.min==this._dataBounds.min&&(this.min=this._dataBounds.min-this.tickInterval),this.max=Math.ceil(this._dataBounds.max/X)*X,this.max==this._dataBounds.max&&(this.max=this._dataBounds.max+this.tickInterval);var Y=(this.max-this.min)/this.tickInterval;Y=Y.toFixed(11),Y=Math.ceil(Y),this.numberTicks=Y+1}else if(null==m){var Y=(this._dataBounds.max-this.min)/this.tickInterval;Y=Y.toFixed(11),this.numberTicks=Math.ceil(Y)+2,this.max=this.min+this.tickInterval*(this.numberTicks-1)}else if(null==l){var Y=(this.max-this._dataBounds.min)/this.tickInterval;Y=Y.toFixed(11),this.numberTicks=Math.ceil(Y)+2,this.min=this.max-this.tickInterval*(this.numberTicks-1)}else this.numberTicks=Math.ceil((m-l)/this.tickInterval)+1,this.min=Math.floor(l*Math.pow(10,V))/Math.pow(10,V),this.max=Math.ceil(m*Math.pow(10,V))/Math.pow(10,V),this.numberTicks=Math.ceil((this.max-this.min)/this.tickInterval)+1}}}this._overrideFormatString&&""!=this._autoFormatString&&(this.tickOptions=this.tickOptions||{},this.tickOptions.formatString=this._autoFormatString);for(var r,Z,f=0;f<this.numberTicks;f++){if(e=this.min+f*this.tickInterval,r=new this.tickRenderer(this.tickOptions),r.setTick(e,this.name),this._ticks.push(r),f<this.numberTicks-1)for(var N=0;N<this.minorTicks;N++)e+=this.tickInterval/(this.minorTicks+1),Z=a.extend(!0,{},this.tickOptions,{name:this.name,value:e,label:"",isMinorTick:!0}),r=new this.tickRenderer(Z),this._ticks.push(r);r=null}}this.tickInset&&(this.min=this.min-this.tickInset*this.tickInterval,this.max=this.max+this.tickInset*this.tickInterval),g=null},a.jqplot.LinearAxisRenderer.prototype.resetTickValues=function(b){if(a.isArray(b)&&b.length==this._ticks.length){for(var c,d=0;d<b.length;d++)c=this._ticks[d],c.value=b[d],c.label=c.formatter(c.formatString,b[d]),c.label=c.prefix+c.label,c._elem.html(c.label);c=null,this.min=a.jqplot.arrayMin(b),this.max=a.jqplot.arrayMax(b),this.pack()}},a.jqplot.LinearAxisRenderer.prototype.pack=function(b,c){b=b||{},c=c||this._offsets;var d=this._ticks,e=this.max,f=this.min,g=c.max,h=c.min,i=null==this._label?!1:this._label.show;for(var j in b)this._elem.css(j,b[j]);this._offsets=c;var k=g-h,l=e-f;if(this.breakPoints?(l=l-this.breakPoints[1]+this.breakPoints[0],this.p2u=function(a){return(a-h)*l/k+f},this.u2p=function(a){return a>this.breakPoints[0]&&a<this.breakPoints[1]&&(a=this.breakPoints[0]),a<=this.breakPoints[0]?(a-f)*k/l+h:(a-this.breakPoints[1]+this.breakPoints[0]-f)*k/l+h},"x"==this.name.charAt(0)?(this.series_u2p=function(a){return a>this.breakPoints[0]&&a<this.breakPoints[1]&&(a=this.breakPoints[0]),a<=this.breakPoints[0]?(a-f)*k/l:(a-this.breakPoints[1]+this.breakPoints[0]-f)*k/l},this.series_p2u=function(a){return a*l/k+f}):(this.series_u2p=function(a){return a>this.breakPoints[0]&&a<this.breakPoints[1]&&(a=this.breakPoints[0]),a>=this.breakPoints[1]?(a-e)*k/l:(a+this.breakPoints[1]-this.breakPoints[0]-e)*k/l},this.series_p2u=function(a){return a*l/k+e})):(this.p2u=function(a){return(a-h)*l/k+f},this.u2p=function(a){return(a-f)*k/l+h},"xaxis"==this.name||"x2axis"==this.name?(this.series_u2p=function(a){return(a-f)*k/l},this.series_p2u=function(a){return a*l/k+f}):(this.series_u2p=function(a){return(a-e)*k/l},this.series_p2u=function(a){return a*l/k+e})),this.show)if("xaxis"==this.name||"x2axis"==this.name){for(var m=0;m<d.length;m++){var n=d[m];if(n.show&&n.showLabel){var o;if(n.constructor==a.jqplot.CanvasAxisTickRenderer&&n.angle){var p="xaxis"==this.name?1:-1;switch(n.labelPosition){case"auto":o=p*n.angle<0?-n.getWidth()+n._textRenderer.height*Math.sin(-n._textRenderer.angle)/2:-n._textRenderer.height*Math.sin(n._textRenderer.angle)/2;break;case"end":o=-n.getWidth()+n._textRenderer.height*Math.sin(-n._textRenderer.angle)/2;break;case"start":o=-n._textRenderer.height*Math.sin(n._textRenderer.angle)/2;break;case"middle":o=-n.getWidth()/2+n._textRenderer.height*Math.sin(-n._textRenderer.angle)/2;break;default:o=-n.getWidth()/2+n._textRenderer.height*Math.sin(-n._textRenderer.angle)/2}}else o=-n.getWidth()/2;var q=this.u2p(n.value)+o+"px";n._elem.css("left",q),n.pack()}}if(i){var r=this._label._elem.outerWidth(!0);this._label._elem.css("left",h+k/2-r/2+"px"),"xaxis"==this.name?this._label._elem.css("bottom","0px"):this._label._elem.css("top","0px"),this._label.pack()}}else{for(var m=0;m<d.length;m++){var n=d[m];if(n.show&&n.showLabel){var o;if(n.constructor==a.jqplot.CanvasAxisTickRenderer&&n.angle){var p="yaxis"==this.name?1:-1;switch(n.labelPosition){case"auto":case"end":o=p*n.angle<0?-n._textRenderer.height*Math.cos(-n._textRenderer.angle)/2:-n.getHeight()+n._textRenderer.height*Math.cos(n._textRenderer.angle)/2;break;case"start":o=n.angle>0?-n._textRenderer.height*Math.cos(-n._textRenderer.angle)/2:-n.getHeight()+n._textRenderer.height*Math.cos(n._textRenderer.angle)/2;break;case"middle":o=-n.getHeight()/2;break;default:o=-n.getHeight()/2}}else o=-n.getHeight()/2;var q=this.u2p(n.value)+o+"px";n._elem.css("top",q),n.pack()}}if(i){var s=this._label._elem.outerHeight(!0);this._label._elem.css("top",g-k/2-s/2+"px"),"yaxis"==this.name?this._label._elem.css("left","0px"):this._label._elem.css("right","0px"),this._label.pack()}}d=null};a.jqplot.LinearTickGenerator=function(b,c,d,e,f,g){if(f=null===f?!1:f,g=null===g||f?!1:g,b===c&&(c=c?0:1),d=d||1,b>c){var h=c;c=b,b=h}var i=[],j=x(c-b,d),k=a.jqplot.getSignificantFigures;if(null==e)if(f||g){if(f){i[0]=b,i[2]=Math.ceil((c-b)/j+1),i[1]=b+(i[2]-1)*j;var l=k(b).digitsRight,m=k(j).digitsRight;m>l?i[3]=u(j):i[3]="%."+l+"f",i[4]=j}else if(g){i[1]=c,i[2]=Math.ceil((c-b)/j+1),i[0]=c-(i[2]-1)*j;var n=k(c).digitsRight,m=k(j).digitsRight;m>n?i[3]=u(j):i[3]="%."+n+"f",i[4]=j}}else i[0]=Math.floor(b/j)*j,i[1]=Math.ceil(c/j)*j,i[2]=Math.round((i[1]-i[0])/j+1),i[3]=u(j),i[4]=j;else{var o=[];if(o[0]=Math.floor(b/j)*j,o[1]=Math.ceil(c/j)*j,o[2]=Math.round((o[1]-o[0])/j+1),o[3]=u(j),o[4]=j,o[2]===e)i=o;else{var p=w(o[1]-o[0],e);i[0]=o[0],i[2]=e,i[4]=p,i[3]=u(p),i[1]=i[0]+(i[2]-1)*i[4]}}return i},a.jqplot.LinearTickGenerator.bestLinearInterval=x,a.jqplot.LinearTickGenerator.bestInterval=w,a.jqplot.LinearTickGenerator.bestLinearComponents=y,a.jqplot.LinearTickGenerator.bestConstrainedInterval=v,a.jqplot.MarkerRenderer=function(b){this.show=!0,this.style="filledCircle",this.lineWidth=2,this.size=9,this.color="#666666",this.shadow=!0,this.shadowAngle=45,this.shadowOffset=1,this.shadowDepth=3,this.shadowAlpha="0.07",this.shadowRenderer=new a.jqplot.ShadowRenderer,this.shapeRenderer=new a.jqplot.ShapeRenderer,a.extend(!0,this,b)},a.jqplot.MarkerRenderer.prototype.init=function(b){a.extend(!0,this,b);var c={angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,lineWidth:this.lineWidth,depth:this.shadowDepth,closePath:!0};-1!=this.style.indexOf("filled")&&(c.fill=!0),-1!=this.style.indexOf("ircle")&&(c.isarc=!0,c.closePath=!1),this.shadowRenderer.init(c);var d={fill:!1,isarc:!1,strokeStyle:this.color,fillStyle:this.color,lineWidth:this.lineWidth,closePath:!0};-1!=this.style.indexOf("filled")&&(d.fill=!0),-1!=this.style.indexOf("ircle")&&(d.isarc=!0,d.closePath=!1),this.shapeRenderer.init(d)},a.jqplot.MarkerRenderer.prototype.drawDiamond=function(a,b,c,d,e){var f=1.2,g=this.size/2/f,h=this.size/2*f,i=[[a-g,b],[a,b+h],[a+g,b],[a,b-h]];this.shadow&&this.shadowRenderer.draw(c,i),this.shapeRenderer.draw(c,i,e)},a.jqplot.MarkerRenderer.prototype.drawPlus=function(b,c,d,e,f){var g=1,h=this.size/2*g,i=this.size/2*g,j=[[b,c-i],[b,c+i]],k=[[b+h,c],[b-h,c]],l=a.extend(!0,{},this.options,{closePath:!1});this.shadow&&(this.shadowRenderer.draw(d,j,{closePath:!1}),this.shadowRenderer.draw(d,k,{closePath:!1})),this.shapeRenderer.draw(d,j,l),this.shapeRenderer.draw(d,k,l)},a.jqplot.MarkerRenderer.prototype.drawX=function(b,c,d,e,f){var g=1,h=this.size/2*g,i=this.size/2*g,j=a.extend(!0,{},this.options,{closePath:!1}),k=[[b-h,c-i],[b+h,c+i]],l=[[b-h,c+i],[b+h,c-i]];this.shadow&&(this.shadowRenderer.draw(d,k,{closePath:!1}),this.shadowRenderer.draw(d,l,{closePath:!1})),this.shapeRenderer.draw(d,k,j),this.shapeRenderer.draw(d,l,j)},a.jqplot.MarkerRenderer.prototype.drawDash=function(a,b,c,d,e){var f=1,g=this.size/2*f,h=(this.size/2*f,[[a-g,b],[a+g,b]]);this.shadow&&this.shadowRenderer.draw(c,h),this.shapeRenderer.draw(c,h,e)},a.jqplot.MarkerRenderer.prototype.drawLine=function(a,b,c,d,e){var f=[a,b];this.shadow&&this.shadowRenderer.draw(c,f),this.shapeRenderer.draw(c,f,e)},a.jqplot.MarkerRenderer.prototype.drawSquare=function(a,b,c,d,e){var f=1,g=this.size/2/f,h=this.size/2*f,i=[[a-g,b-h],[a-g,b+h],[a+g,b+h],[a+g,b-h]];this.shadow&&this.shadowRenderer.draw(c,i),this.shapeRenderer.draw(c,i,e)},a.jqplot.MarkerRenderer.prototype.drawCircle=function(a,b,c,d,e){var f=this.size/2,g=2*Math.PI,h=[a,b,f,0,g,!0];this.shadow&&this.shadowRenderer.draw(c,h),this.shapeRenderer.draw(c,h,e)},a.jqplot.MarkerRenderer.prototype.draw=function(a,b,c,d){if(d=d||{},null==d.show||0!=d.show)switch(d.color&&!d.fillStyle&&(d.fillStyle=d.color),d.color&&!d.strokeStyle&&(d.strokeStyle=d.color),this.style){case"diamond":this.drawDiamond(a,b,c,!1,d);break;case"filledDiamond":this.drawDiamond(a,b,c,!0,d);break;case"circle":this.drawCircle(a,b,c,!1,d);break;case"filledCircle":this.drawCircle(a,b,c,!0,d);break;case"square":this.drawSquare(a,b,c,!1,d);break;case"filledSquare":this.drawSquare(a,b,c,!0,d);break;case"x":this.drawX(a,b,c,!0,d);break;case"plus":this.drawPlus(a,b,c,!0,d);break;case"dash":this.drawDash(a,b,c,!0,d);break;case"line":this.drawLine(a,b,c,!1,d);break;default:this.drawDiamond(a,b,c,!1,d)}},a.jqplot.ShadowRenderer=function(b){this.angle=45,this.offset=1,this.alpha=.07,this.lineWidth=1.5,this.lineJoin="miter",this.lineCap="round",this.closePath=!1,this.fill=!1,this.depth=3,this.strokeStyle="rgba(0,0,0,0.1)",this.isarc=!1,a.extend(!0,this,b)},a.jqplot.ShadowRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.ShadowRenderer.prototype.draw=function(b,c,d){b.save();var e=null!=d?d:{},f=null!=e.fill?e.fill:this.fill,g=null!=e.fillRect?e.fillRect:this.fillRect,h=null!=e.closePath?e.closePath:this.closePath,i=null!=e.offset?e.offset:this.offset,j=null!=e.alpha?e.alpha:this.alpha,k=null!=e.depth?e.depth:this.depth,l=null!=e.isarc?e.isarc:this.isarc,m=null!=e.linePattern?e.linePattern:this.linePattern;b.lineWidth=null!=e.lineWidth?e.lineWidth:this.lineWidth,b.lineJoin=null!=e.lineJoin?e.lineJoin:this.lineJoin,b.lineCap=null!=e.lineCap?e.lineCap:this.lineCap,b.strokeStyle=e.strokeStyle||this.strokeStyle||"rgba(0,0,0,"+j+")",b.fillStyle=e.fillStyle||this.fillStyle||"rgba(0,0,0,"+j+")";for(var n=0;k>n;n++){var o=a.jqplot.LinePattern(b,m);if(b.translate(Math.cos(this.angle*Math.PI/180)*i,Math.sin(this.angle*Math.PI/180)*i),o.beginPath(),l)b.arc(c[0],c[1],c[2],c[3],c[4],!0);else if(g)g&&b.fillRect(c[0],c[1],c[2],c[3]);else if(c&&c.length)for(var p=!0,q=0;q<c.length;q++)null!=c[q][0]&&null!=c[q][1]?p?(o.moveTo(c[q][0],c[q][1]),p=!1):o.lineTo(c[q][0],c[q][1]):p=!0;h&&o.closePath(),f?b.fill():b.stroke()}b.restore()},a.jqplot.ShapeRenderer=function(b){this.lineWidth=1.5,this.linePattern="solid",this.lineJoin="miter",this.lineCap="round",this.closePath=!1,this.fill=!1,this.isarc=!1,this.fillRect=!1,this.strokeRect=!1,this.clearRect=!1,this.strokeStyle="#999999",this.fillStyle="#999999",a.extend(!0,this,b)},a.jqplot.ShapeRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.ShapeRenderer.prototype.draw=function(b,c,d){b.save();var e=null!=d?d:{},f=null!=e.fill?e.fill:this.fill,g=null!=e.closePath?e.closePath:this.closePath,h=null!=e.fillRect?e.fillRect:this.fillRect,i=null!=e.strokeRect?e.strokeRect:this.strokeRect,j=null!=e.clearRect?e.clearRect:this.clearRect,k=null!=e.isarc?e.isarc:this.isarc,l=null!=e.linePattern?e.linePattern:this.linePattern,m=a.jqplot.LinePattern(b,l);if(b.lineWidth=e.lineWidth||this.lineWidth,b.lineJoin=e.lineJoin||this.lineJoin,b.lineCap=e.lineCap||this.lineCap,b.strokeStyle=e.strokeStyle||e.color||this.strokeStyle,b.fillStyle=e.fillStyle||this.fillStyle,b.beginPath(),k)return b.arc(c[0],c[1],c[2],c[3],c[4],!0),g&&b.closePath(),f?b.fill():b.stroke(),void b.restore();if(j)return b.clearRect(c[0],c[1],c[2],c[3]),void b.restore();if(h||i){if(h&&b.fillRect(c[0],c[1],c[2],c[3]),i)return b.strokeRect(c[0],c[1],c[2],c[3]),void b.restore()}else if(c&&c.length){for(var n=!0,o=0;o<c.length;o++)null!=c[o][0]&&null!=c[o][1]?n?(m.moveTo(c[o][0],c[o][1]),n=!1):m.lineTo(c[o][0],c[o][1]):n=!0;g&&m.closePath(),f?b.fill():b.stroke()}b.restore()},a.jqplot.TableLegendRenderer=function(){},a.jqplot.TableLegendRenderer.prototype.init=function(b){a.extend(!0,this,b)},a.jqplot.TableLegendRenderer.prototype.addrow=function(b,c,d,e){var f,g,h,i,j,k=d?this.rowSpacing+"px":"0px";h=document.createElement("tr"),f=a(h),f.addClass("jqplot-table-legend"),h=null,e?f.prependTo(this._elem):f.appendTo(this._elem),this.showSwatches&&(g=a(document.createElement("td")),g.addClass("jqplot-table-legend jqplot-table-legend-swatch"),g.css({textAlign:"center",paddingTop:k}),i=a(document.createElement("div")),i.addClass("jqplot-table-legend-swatch-outline"),j=a(document.createElement("div")),j.addClass("jqplot-table-legend-swatch"),j.css({backgroundColor:c,borderColor:c}),f.append(g.append(i.append(j)))),this.showLabels&&(g=a(document.createElement("td")),g.addClass("jqplot-table-legend jqplot-table-legend-label"),g.css("paddingTop",k),f.append(g),this.escapeHtml?g.text(b):g.html(b)),g=null,i=null,j=null,f=null,h=null},a.jqplot.TableLegendRenderer.prototype.draw=function(){if(this._elem&&(this._elem.emptyForce(),this._elem=null),this.show){var b=this._series,c=document.createElement("table");this._elem=a(c),this._elem.addClass("jqplot-table-legend");var d={position:"absolute"};this.background&&(d.background=this.background),this.border&&(d.border=this.border),this.fontSize&&(d.fontSize=this.fontSize),this.fontFamily&&(d.fontFamily=this.fontFamily),this.textColor&&(d.textColor=this.textColor),null!=this.marginTop&&(d.marginTop=this.marginTop),null!=this.marginBottom&&(d.marginBottom=this.marginBottom),null!=this.marginLeft&&(d.marginLeft=this.marginLeft),null!=this.marginRight&&(d.marginRight=this.marginRight);for(var e,f=!1,g=!1,h=0;h<b.length;h++)if(e=b[h],(e._stack||e.renderer.constructor==a.jqplot.BezierCurveRenderer)&&(g=!0),e.show&&e.showLabel){var i=this.labels[h]||e.label.toString();if(i){var j=e.color;g&&h<b.length-1?f=!0:g&&h==b.length-1&&(f=!1),this.renderer.addrow.call(this,i,j,f,g),f=!0}for(var k=0;k<a.jqplot.addLegendRowHooks.length;k++){var l=a.jqplot.addLegendRowHooks[k].call(this,e);l&&(this.renderer.addrow.call(this,l.label,l.color,f),f=!0)}i=null}}return this._elem},a.jqplot.TableLegendRenderer.prototype.pack=function(a){if(this.show)if("insideGrid"==this.placement)switch(this.location){case"nw":var b=a.left,c=a.top;this._elem.css("left",b),this._elem.css("top",c);break;case"n":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2,c=a.top;this._elem.css("left",b),this._elem.css("top",c);break;case"ne":var b=a.right,c=a.top;this._elem.css({right:b,top:c});break;case"e":var b=a.right,c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({right:b,top:c});break;case"se":var b=a.right,c=a.bottom;this._elem.css({right:b,bottom:c});break;case"s":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2,c=a.bottom;this._elem.css({left:b,bottom:c});break;case"sw":var b=a.left,c=a.bottom;this._elem.css({left:b,bottom:c});break;case"w":var b=a.left,c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({left:b,top:c});break;default:var b=a.right,c=a.bottom;this._elem.css({right:b,bottom:c})}else if("outside"==this.placement)switch(this.location){case"nw":var b=this._plotDimensions.width-a.left,c=a.top;this._elem.css("right",b),this._elem.css("top",c);break;case"n":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2,c=this._plotDimensions.height-a.top;this._elem.css("left",b),this._elem.css("bottom",c);break;case"ne":var b=this._plotDimensions.width-a.right,c=a.top;this._elem.css({left:b,top:c});break;case"e":var b=this._plotDimensions.width-a.right,c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({left:b,top:c});break;case"se":var b=this._plotDimensions.width-a.right,c=a.bottom;this._elem.css({left:b,bottom:c});break;case"s":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2,c=this._plotDimensions.height-a.bottom;this._elem.css({left:b,top:c});break;case"sw":var b=this._plotDimensions.width-a.left,c=a.bottom;this._elem.css({right:b,bottom:c});break;case"w":var b=this._plotDimensions.width-a.left,c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({right:b,top:c});break;default:var b=a.right,c=a.bottom;this._elem.css({right:b,bottom:c})}else switch(this.location){case"nw":this._elem.css({left:0,top:a.top});break;case"n":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2;this._elem.css({left:b,top:a.top});break;case"ne":this._elem.css({right:0,top:a.top});break;case"e":var c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({right:a.right,top:c});break;case"se":this._elem.css({right:a.right,bottom:a.bottom});break;case"s":var b=(a.left+(this._plotDimensions.width-a.right))/2-this.getWidth()/2;this._elem.css({left:b,bottom:a.bottom});break;case"sw":this._elem.css({left:a.left,bottom:a.bottom});break;case"w":var c=(a.top+(this._plotDimensions.height-a.bottom))/2-this.getHeight()/2;this._elem.css({left:a.left,top:c});break;default:this._elem.css({right:a.right,bottom:a.bottom})}},a.jqplot.ThemeEngine=function(){this.themes={},this.activeTheme=null},a.jqplot.ThemeEngine.prototype.init=function(){var b,c,d,e=new a.jqplot.Theme({_name:"Default"});for(b in e.target)"textColor"==b?e.target[b]=this.target.css("color"):e.target[b]=this.target.css(b);if(this.title.show&&this.title._elem)for(b in e.title)"textColor"==b?e.title[b]=this.title._elem.css("color"):e.title[b]=this.title._elem.css(b);for(b in e.grid)e.grid[b]=this.grid[b];if(null==e.grid.backgroundColor&&null!=this.grid.background&&(e.grid.backgroundColor=this.grid.background),this.legend.show&&this.legend._elem)for(b in e.legend)"textColor"==b?e.legend[b]=this.legend._elem.css("color"):e.legend[b]=this.legend._elem.css(b);var f;for(c=0;c<this.series.length;c++){f=this.series[c],f.renderer.constructor==a.jqplot.LineRenderer?e.series.push(new L):f.renderer.constructor==a.jqplot.BarRenderer?e.series.push(new N):f.renderer.constructor==a.jqplot.PieRenderer?e.series.push(new O):f.renderer.constructor==a.jqplot.DonutRenderer?e.series.push(new P):f.renderer.constructor==a.jqplot.FunnelRenderer?e.series.push(new Q):f.renderer.constructor==a.jqplot.MeterGaugeRenderer?e.series.push(new R):e.series.push({});for(b in e.series[c])e.series[c][b]=f[b]}var g,h;for(b in this.axes){if(h=this.axes[b],g=e.axes[b]=new I,g.borderColor=h.borderColor,g.borderWidth=h.borderWidth,h._ticks&&h._ticks[0])for(d in g.ticks)h._ticks[0].hasOwnProperty(d)?g.ticks[d]=h._ticks[0][d]:h._ticks[0]._elem&&(g.ticks[d]=h._ticks[0]._elem.css(d));if(h._label&&h._label.show)for(d in g.label)h._label[d]?g.label[d]=h._label[d]:h._label._elem&&("textColor"==d?g.label[d]=h._label._elem.css("color"):g.label[d]=h._label._elem.css(d))}this.themeEngine._add(e),this.themeEngine.activeTheme=this.themeEngine.themes[e._name]},a.jqplot.ThemeEngine.prototype.get=function(a){return a?this.themes[a]:this.activeTheme},a.jqplot.ThemeEngine.prototype.getThemeNames=function(){var a=[];for(var b in this.themes)a.push(b);return a.sort(z)},a.jqplot.ThemeEngine.prototype.getThemes=function(){var a=[],b=[];for(var c in this.themes)a.push(c);a.sort(z);for(var d=0;d<a.length;d++)b.push(this.themes[a[d]]);return b},a.jqplot.ThemeEngine.prototype.activate=function(b,c){var d=!1;if(!c&&this.activeTheme&&this.activeTheme._name&&(c=this.activeTheme._name),!this.themes.hasOwnProperty(c))throw new Error("No theme of that name");var e=this.themes[c];this.activeTheme=e;var f,g=["xaxis","x2axis","yaxis","y2axis"];for(p=0;p<g.length;p++){var h=g[p];null!=e.axesStyles.borderColor&&(b.axes[h].borderColor=e.axesStyles.borderColor),null!=e.axesStyles.borderWidth&&(b.axes[h].borderWidth=e.axesStyles.borderWidth)}for(var i in b.axes){var j=b.axes[i];if(j.show){var k=e.axes[i]||{},l=e.axesStyles,m=a.jqplot.extend(!0,{},k,l);if(f=null!=e.axesStyles.borderColor?e.axesStyles.borderColor:m.borderColor,null!=m.borderColor&&(j.borderColor=m.borderColor,d=!0),f=null!=e.axesStyles.borderWidth?e.axesStyles.borderWidth:m.borderWidth,null!=m.borderWidth&&(j.borderWidth=m.borderWidth,d=!0),j._ticks&&j._ticks[0])for(var n in m.ticks)f=m.ticks[n],null!=f&&(j.tickOptions[n]=f,j._ticks=[],d=!0);if(j._label&&j._label.show)for(var n in m.label)f=m.label[n],null!=f&&(j.labelOptions[n]=f,d=!0)}}for(var o in e.grid)null!=e.grid[o]&&(b.grid[o]=e.grid[o]);if(d||b.grid.draw(),b.legend.show)for(o in e.legend)null!=e.legend[o]&&(b.legend[o]=e.legend[o]);if(b.title.show)for(o in e.title)null!=e.title[o]&&(b.title[o]=e.title[o]);var p;for(p=0;p<e.series.length;p++){var q={};for(o in e.series[p])f=null!=e.seriesStyles[o]?e.seriesStyles[o]:e.series[p][o],null!=f&&(q[o]=f,"color"==o?(b.series[p].renderer.shapeRenderer.fillStyle=f,b.series[p].renderer.shapeRenderer.strokeStyle=f,b.series[p][o]=f):"lineWidth"==o||"linePattern"==o?(b.series[p].renderer.shapeRenderer[o]=f,b.series[p][o]=f):"markerOptions"==o?(B(b.series[p].markerOptions,f),B(b.series[p].markerRenderer,f)):b.series[p][o]=f,d=!0)}d&&(b.target.empty(),b.draw());for(o in e.target)null!=e.target[o]&&b.target.css(o,e.target[o])},a.jqplot.ThemeEngine.prototype._add=function(a,b){if(b&&(a._name=b),a._name||(a._name=Date.parse(new Date)),this.themes.hasOwnProperty(a._name))throw new Error("jqplot.ThemeEngine Error: Theme already in use");this.themes[a._name]=a},a.jqplot.ThemeEngine.prototype.remove=function(a){return"Default"==a?!1:delete this.themes[a]},a.jqplot.ThemeEngine.prototype.newTheme=function(b,c){"object"==typeof b&&(c=c||b,b=null),b=c&&c._name?c._name:b||Date.parse(new Date);var d=this.copy(this.themes.Default._name,b);return a.jqplot.extend(d,c),d},a.jqplot.clone=A,a.jqplot.merge=B,a.jqplot.extend=function(){var b,c=arguments[0]||{},d=1,e=arguments.length,f=!1;for("boolean"==typeof c&&(f=c,c=arguments[1]||{},d=2),"object"!=typeof c&&"[object Function]"===!toString.call(c)&&(c={});e>d;d++)if(null!=(b=arguments[d]))for(var g in b){var h=c[g],i=b[g];c!==i&&(f&&i&&"object"==typeof i&&!i.nodeType?c[g]=a.jqplot.extend(f,h||(null!=i.length?[]:{}),i):i!==F&&(c[g]=i))}return c},a.jqplot.ThemeEngine.prototype.rename=function(a,b){if("Default"==a||"Default"==b)throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default");if(this.themes.hasOwnProperty(b))throw new Error("jqplot.ThemeEngine Error: New name already in use.");if(this.themes.hasOwnProperty(a)){var c=this.copy(a,b);return this.remove(a),c}throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid")},a.jqplot.ThemeEngine.prototype.copy=function(b,c,d){if("Default"==c)throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme");if(!this.themes.hasOwnProperty(b)){var e="jqplot.ThemeEngine Error: Source name invalid";throw new Error(e)}if(this.themes.hasOwnProperty(c)){var e="jqplot.ThemeEngine Error: Target name invalid";throw new Error(e)}var f=A(this.themes[b]);return f._name=c,a.jqplot.extend(!0,f,d),this._add(f),f},a.jqplot.Theme=function(b,c){"object"==typeof b&&(c=c||b,b=null),b=b||Date.parse(new Date),this._name=b,this.target={backgroundColor:null},this.legend={textColor:null,fontFamily:null,fontSize:null,border:null,background:null},this.title={textColor:null,fontFamily:null,fontSize:null,textAlign:null},this.seriesStyles={},this.series=[],this.grid={drawGridlines:null,gridLineColor:null,gridLineWidth:null,backgroundColor:null,borderColor:null,borderWidth:null,shadow:null},this.axesStyles={label:{},ticks:{}},this.axes={},"string"==typeof c?this._name=c:"object"==typeof c&&a.jqplot.extend(!0,this,c)};var I=function(){this.borderColor=null,this.borderWidth=null,this.ticks=new J,this.label=new K},J=function(){this.show=null,this.showGridline=null,this.showLabel=null,this.showMark=null,this.size=null,this.textColor=null,this.whiteSpace=null,this.fontSize=null,this.fontFamily=null},K=function(){this.textColor=null,this.whiteSpace=null,this.fontSize=null,
this.fontFamily=null,this.fontWeight=null},L=function(){this.color=null,this.lineWidth=null,this.linePattern=null,this.shadow=null,this.fillColor=null,this.showMarker=null,this.markerOptions=new M},M=function(){this.show=null,this.style=null,this.lineWidth=null,this.size=null,this.color=null,this.shadow=null},N=function(){this.color=null,this.seriesColors=null,this.lineWidth=null,this.shadow=null,this.barPadding=null,this.barMargin=null,this.barWidth=null,this.highlightColors=null},O=function(){this.seriesColors=null,this.padding=null,this.sliceMargin=null,this.fill=null,this.shadow=null,this.startAngle=null,this.lineWidth=null,this.highlightColors=null},P=function(){this.seriesColors=null,this.padding=null,this.sliceMargin=null,this.fill=null,this.shadow=null,this.startAngle=null,this.lineWidth=null,this.innerDiameter=null,this.thickness=null,this.ringMargin=null,this.highlightColors=null},Q=function(){this.color=null,this.lineWidth=null,this.shadow=null,this.padding=null,this.sectionMargin=null,this.seriesColors=null,this.highlightColors=null},R=function(){this.padding=null,this.backgroundColor=null,this.ringColor=null,this.tickColor=null,this.ringWidth=null,this.intervalColors=null,this.intervalInnerRadius=null,this.intervalOuterRadius=null,this.hubRadius=null,this.needleThickness=null,this.needlePad=null};a.fn.jqplotChildText=function(){return a(this).contents().filter(function(){return 3==this.nodeType}).text()},a.fn.jqplotGetComputedFontStyle=function(){for(var a=window.getComputedStyle?window.getComputedStyle(this[0],""):this[0].currentStyle,b=a["font-style"]?["font-style","font-weight","font-size","font-family"]:["fontStyle","fontWeight","fontSize","fontFamily"],c=[],d=0;d<b.length;++d){var e=String(a[b[d]]);e&&"normal"!=e&&c.push(e)}return c.join(" ")},a.fn.jqplotToImageCanvas=function(b){function c(b){var c=parseInt(a(b).css("line-height"),10);return isNaN(c)&&(c=1.2*parseInt(a(b).css("font-size"),10)),c}function d(b,d,e,f,g,h){for(var i=c(b),j=a(b).innerWidth(),k=(a(b).innerHeight(),e.split(/\s+/)),l=k.length,m="",n=[],o=g,p=f,q=0;l>q;q++)m+=k[q],d.measureText(m).width>j&&m.length>k[q].length&&(n.push(q),m="",q--);if(0===n.length)"center"===a(b).css("textAlign")&&(p=f+(h-d.measureText(m).width)/2-s),d.fillText(e,p,g);else{m=k.slice(0,n[0]).join(" "),"center"===a(b).css("textAlign")&&(p=f+(h-d.measureText(m).width)/2-s),d.fillText(m,p,o),o+=i;for(var q=1,r=n.length;r>q;q++)m=k.slice(n[q-1],n[q]).join(" "),"center"===a(b).css("textAlign")&&(p=f+(h-d.measureText(m).width)/2-s),d.fillText(m,p,o),o+=i;m=k.slice(n[q-1],k.length).join(" "),"center"===a(b).css("textAlign")&&(p=f+(h-d.measureText(m).width)/2-s),d.fillText(m,p,o)}}function e(b,c,f){var g=b.tagName.toLowerCase(),h=a(b).position(),i=window.getComputedStyle?window.getComputedStyle(b,""):b.currentStyle,j=c+h.left+parseInt(i.marginLeft,10)+parseInt(i.borderLeftWidth,10)+parseInt(i.paddingLeft,10),k=f+h.top+parseInt(i.marginTop,10)+parseInt(i.borderTopWidth,10)+parseInt(i.paddingTop,10),l=m.width;if("div"!=g&&"span"!=g||a(b).hasClass("jqplot-highlighter-tooltip"))if("table"===g&&a(b).hasClass("jqplot-table-legend")){w.strokeStyle=a(b).css("border-top-color"),w.fillStyle=a(b).css("background-color"),w.fillRect(j,k,a(b).innerWidth(),a(b).innerHeight()),parseInt(a(b).css("border-top-width"),10)>0&&w.strokeRect(j,k,a(b).innerWidth(),a(b).innerHeight()),a(b).find("div.jqplot-table-legend-swatch-outline").each(function(){var b=a(this);w.strokeStyle=b.css("border-top-color");var c=j+b.position().left,d=k+b.position().top;w.strokeRect(c,d,b.innerWidth(),b.innerHeight()),c+=parseInt(b.css("padding-left"),10),d+=parseInt(b.css("padding-top"),10);var e=b.innerHeight()-2*parseInt(b.css("padding-top"),10),f=b.innerWidth()-2*parseInt(b.css("padding-left"),10),g=b.children("div.jqplot-table-legend-swatch");w.fillStyle=g.css("background-color"),w.fillRect(c,d,f,e)}),a(b).find("td.jqplot-table-legend-label").each(function(){var b=a(this),c=j+b.position().left,e=k+b.position().top+parseInt(b.css("padding-top"),10);w.font=b.jqplotGetComputedFontStyle(),w.fillStyle=b.css("color"),d(b,w,b.text(),c,e,l)})}else"canvas"==g&&w.drawImage(b,j,k);else{a(b).children().each(function(){e(this,j,k)});var n=a(b).jqplotChildText();n&&(w.font=a(b).jqplotGetComputedFontStyle(),w.fillStyle=a(b).css("color"),d(b,w,n,j,k,l))}}b=b||{};var f=null==b.x_offset?0:b.x_offset,g=null==b.y_offset?0:b.y_offset,h=null==b.backgroundColor?"rgb(255,255,255)":b.backgroundColor;if(0==a(this).width()||0==a(this).height())return null;if(a.jqplot.use_excanvas)return null;for(var i,j,k,l,m=document.createElement("canvas"),n=a(this).outerHeight(!0),o=a(this).outerWidth(!0),p=a(this).offset(),q=p.left,r=p.top,s=0,t=0,u=["jqplot-table-legend","jqplot-xaxis-tick","jqplot-x2axis-tick","jqplot-yaxis-tick","jqplot-y2axis-tick","jqplot-y3axis-tick","jqplot-y4axis-tick","jqplot-y5axis-tick","jqplot-y6axis-tick","jqplot-y7axis-tick","jqplot-y8axis-tick","jqplot-y9axis-tick","jqplot-xaxis-label","jqplot-x2axis-label","jqplot-yaxis-label","jqplot-y2axis-label","jqplot-y3axis-label","jqplot-y4axis-label","jqplot-y5axis-label","jqplot-y6axis-label","jqplot-y7axis-label","jqplot-y8axis-label","jqplot-y9axis-label"],v=0;v<u.length;v++)a(this).find("."+u[v]).each(function(){i=a(this).offset().top-r,j=a(this).offset().left-q,l=j+a(this).outerWidth(!0)+s,k=i+a(this).outerHeight(!0)+t,-s>j&&(o=o-s-j,s=-j),-t>i&&(n=n-t-i,t=-i),l>o&&(o=l),k>n&&(n=k)});m.width=o+Number(f),m.height=n+Number(g);var w=m.getContext("2d");return w.save(),w.fillStyle=h,w.fillRect(0,0,m.width,m.height),w.restore(),w.translate(s,t),w.textAlign="left",w.textBaseline="top",a(this).children().each(function(){e(this,f,g)}),m},a.fn.jqplotToImageStr=function(b){var c=a(this).jqplotToImageCanvas(b);return c?c.toDataURL("image/png"):null},a.fn.jqplotToImageElem=function(b){var c=document.createElement("img"),d=a(this).jqplotToImageStr(b);return c.src=d,c},a.fn.jqplotToImageElemStr=function(b){var c="<img src="+a(this).jqplotToImageStr(b)+" />";return c},a.fn.jqplotSaveImage=function(){var b=a(this).jqplotToImageStr({});b&&(window.location.href=b.replace("image/png","image/octet-stream"))},a.fn.jqplotViewImage=function(){var b=a(this).jqplotToImageElemStr({});a(this).jqplotToImageStr({});if(b){var c=window.open("");c.document.open("image/png"),c.document.write(b),c.document.close(),c=null}};var S=function(){switch(this.syntax=S.config.syntax,this._type="jsDate",this.proxy=new Date,this.options={},this.locale=S.regional.getLocale(),this.formatString="",this.defaultCentury=S.config.defaultCentury,arguments.length){case 0:break;case 1:if("[object Object]"==D(arguments[0])&&"jsDate"!=arguments[0]._type){var a=this.options=arguments[0];this.syntax=a.syntax||this.syntax,this.defaultCentury=a.defaultCentury||this.defaultCentury,this.proxy=S.createDate(a.date)}else this.proxy=S.createDate(arguments[0]);break;default:for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c]);this.proxy=new Date,this.proxy.setFullYear.apply(this.proxy,b.slice(0,3)),b.slice(3).length&&this.proxy.setHours.apply(this.proxy,b.slice(3))}};S.config={defaultLocale:"en",syntax:"perl",defaultCentury:1900},S.prototype.add=function(a,b){var c=V[b]||V.day;return"number"==typeof c?this.proxy.setTime(this.proxy.getTime()+c*a):c.add(this,a),this},S.prototype.clone=function(){return new S(this.proxy.getTime())},S.prototype.getUtcOffset=function(){return 6e4*this.proxy.getTimezoneOffset()},S.prototype.diff=function(a,b,c){if(a=new S(a),null===a)return null;var d=V[b]||V.day;if("number"==typeof d)var e=(this.proxy.getTime()-a.proxy.getTime())/d;else var e=d.diff(this.proxy,a.proxy);return c?e:Math[e>0?"floor":"ceil"](e)},S.prototype.getAbbrDayName=function(){return S.regional[this.locale].dayNamesShort[this.proxy.getDay()]},S.prototype.getAbbrMonthName=function(){return S.regional[this.locale].monthNamesShort[this.proxy.getMonth()]},S.prototype.getAMPM=function(){return this.proxy.getHours()>=12?"PM":"AM"},S.prototype.getAmPm=function(){return this.proxy.getHours()>=12?"pm":"am"},S.prototype.getCentury=function(){return parseInt(this.proxy.getFullYear()/100,10)},S.prototype.getDate=function(){return this.proxy.getDate()},S.prototype.getDay=function(){return this.proxy.getDay()},S.prototype.getDayOfWeek=function(){var a=this.proxy.getDay();return 0===a?7:a},S.prototype.getDayOfYear=function(){var a=this.proxy,b=a-new Date(""+a.getFullYear()+"/1/1 GMT");return b+=6e4*a.getTimezoneOffset(),a=null,parseInt(b/6e4/60/24,10)+1},S.prototype.getDayName=function(){return S.regional[this.locale].dayNames[this.proxy.getDay()]},S.prototype.getFullWeekOfYear=function(){var a=this.proxy,b=this.getDayOfYear(),c=6-a.getDay(),d=parseInt((b+c)/7,10);return d},S.prototype.getFullYear=function(){return this.proxy.getFullYear()},S.prototype.getGmtOffset=function(){var a=this.proxy.getTimezoneOffset()/60,b=0>a?"+":"-";return a=Math.abs(a),b+U(Math.floor(a),2)+":"+U(a%1*60,2)},S.prototype.getHours=function(){return this.proxy.getHours()},S.prototype.getHours12=function(){var a=this.proxy.getHours();return a>12?a-12:0==a?12:a},S.prototype.getIsoWeek=function(){var a=this.proxy,b=this.getWeekOfYear(),c=new Date(""+a.getFullYear()+"/1/1").getDay(),d=b+(c>4||1>=c?0:1);return 53==d&&new Date(""+a.getFullYear()+"/12/31").getDay()<4?d=1:0===d&&(a=new S(new Date(""+(a.getFullYear()-1)+"/12/31")),d=a.getIsoWeek()),a=null,d},S.prototype.getMilliseconds=function(){return this.proxy.getMilliseconds()},S.prototype.getMinutes=function(){return this.proxy.getMinutes()},S.prototype.getMonth=function(){return this.proxy.getMonth()},S.prototype.getMonthName=function(){return S.regional[this.locale].monthNames[this.proxy.getMonth()]},S.prototype.getMonthNumber=function(){return this.proxy.getMonth()+1},S.prototype.getSeconds=function(){return this.proxy.getSeconds()},S.prototype.getShortYear=function(){return this.proxy.getYear()%100},S.prototype.getTime=function(){return this.proxy.getTime()},S.prototype.getTimezoneAbbr=function(){return this.proxy.toString().replace(/^.*\(([^)]+)\)$/,"$1")},S.prototype.getTimezoneName=function(){var a=/(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());return a[1]||a[2]||"GMT"+this.getGmtOffset()},S.prototype.getTimezoneOffset=function(){return this.proxy.getTimezoneOffset()},S.prototype.getWeekOfYear=function(){var a=this.getDayOfYear(),b=7-this.getDayOfWeek(),c=parseInt((a+b)/7,10);return c},S.prototype.getUnix=function(){return Math.round(this.proxy.getTime()/1e3,0)},S.prototype.getYear=function(){return this.proxy.getYear()},S.prototype.next=function(a){return a=a||"day",this.clone().add(1,a)},S.prototype.set=function(){switch(arguments.length){case 0:this.proxy=new Date;break;case 1:if("[object Object]"==D(arguments[0])&&"jsDate"!=arguments[0]._type){var a=this.options=arguments[0];this.syntax=a.syntax||this.syntax,this.defaultCentury=a.defaultCentury||this.defaultCentury,this.proxy=S.createDate(a.date)}else this.proxy=S.createDate(arguments[0]);break;default:for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c]);this.proxy=new Date,this.proxy.setFullYear.apply(this.proxy,b.slice(0,3)),b.slice(3).length&&this.proxy.setHours.apply(this.proxy,b.slice(3))}return this},S.prototype.setDate=function(a){return this.proxy.setDate(a),this},S.prototype.setFullYear=function(){return this.proxy.setFullYear.apply(this.proxy,arguments),this},S.prototype.setHours=function(){return this.proxy.setHours.apply(this.proxy,arguments),this},S.prototype.setMilliseconds=function(a){return this.proxy.setMilliseconds(a),this},S.prototype.setMinutes=function(){return this.proxy.setMinutes.apply(this.proxy,arguments),this},S.prototype.setMonth=function(){return this.proxy.setMonth.apply(this.proxy,arguments),this},S.prototype.setSeconds=function(){return this.proxy.setSeconds.apply(this.proxy,arguments),this},S.prototype.setTime=function(a){return this.proxy.setTime(a),this},S.prototype.setYear=function(){return this.proxy.setYear.apply(this.proxy,arguments),this},S.prototype.strftime=function(a){return a=a||this.formatString||S.regional[this.locale].formatString,S.strftime(this,a,this.syntax)},S.prototype.toString=function(){return this.proxy.toString()},S.prototype.toYmdInt=function(){return 1e4*this.proxy.getFullYear()+100*this.getMonthNumber()+this.proxy.getDate()},S.regional={en:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],formatString:"%Y-%m-%d %H:%M:%S"},fr:{monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthNamesShort:["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],formatString:"%Y-%m-%d %H:%M:%S"},de:{monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],formatString:"%Y-%m-%d %H:%M:%S"},es:{monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],dayNames:["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"],dayNamesShort:["Dom","Lun","Mar","Mi&eacute;","Juv","Vie","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},ru:{monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],formatString:"%Y-%m-%d %H:%M:%S"},ar:{monthNames:["كانون الثاني","شباط","آذار","نيسان","آذار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"],dayNamesShort:["سبت","أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة"],formatString:"%Y-%m-%d %H:%M:%S"},pt:{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},"pt-BR":{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},pl:{monthNames:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],monthNamesShort:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],dayNames:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],dayNamesShort:["Ni","Pn","Wt","Śr","Cz","Pt","Sb"],formatString:"%Y-%m-%d %H:%M:%S"},nl:{monthNames:["Januari","Februari","Maart","April","Mei","Juni","July","Augustus","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:",".Zaterdag,dayNamesShort:["Zo","Ma","Di","Wo","Do","Vr","Za"],formatString:"%Y-%m-%d %H:%M:%S"},sv:{monthNames:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],monthNamesShort:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],dayNames:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],dayNamesShort:["sön","mån","tis","ons","tor","fre","lör"],formatString:"%Y-%m-%d %H:%M:%S"},it:{monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],formatString:"%d-%m-%Y %H:%M:%S"}},S.regional["en-US"]=S.regional["en-GB"]=S.regional.en,S.regional.getLocale=function(){var a=S.config.defaultLocale;return document&&document.getElementsByTagName("html")&&document.getElementsByTagName("html")[0].lang&&(a=document.getElementsByTagName("html")[0].lang,S.regional.hasOwnProperty(a)||(a=S.config.defaultLocale)),a};var T=864e5,U=function(a,b){a=String(a);var c=b-a.length,d=String(Math.pow(10,c)).slice(1);return d.concat(a)},V={millisecond:1,second:1e3,minute:6e4,hour:36e5,day:T,week:7*T,month:{add:function(a,b){V.year.add(a,Math[b>0?"floor":"ceil"](b/12));var c=a.getMonth()+b%12;12==c?(c=0,a.setYear(a.getFullYear()+1)):-1==c&&(c=11,a.setYear(a.getFullYear()-1)),a.setMonth(c)},diff:function(a,b){var c=a.getFullYear()-b.getFullYear(),d=a.getMonth()-b.getMonth()+12*c,e=a.getDate()-b.getDate();return d+e/30}},year:{add:function(a,b){a.setYear(a.getFullYear()+Math[b>0?"floor":"ceil"](b))},diff:function(a,b){return V.month.diff(a,b)/12}}};for(var W in V)"s"!=W.substring(W.length-1)&&(V[W+"s"]=V[W]);var X=function(a,b,c){if(S.formats[c].shortcuts[b])return S.strftime(a,S.formats[c].shortcuts[b],c);var d=(S.formats[c].codes[b]||"").split("."),e=a["get"+d[0]]?a["get"+d[0]]():"";return d[1]&&(e=U(e,d[1])),e};S.strftime=function(a,b,c,d){var e="perl",f=S.regional.getLocale();c&&S.formats.hasOwnProperty(c)?e=c:c&&S.regional.hasOwnProperty(c)&&(f=c),d&&S.formats.hasOwnProperty(d)?e=d:d&&S.regional.hasOwnProperty(d)&&(f=d),("[object Object]"!=D(a)||"jsDate"!=a._type)&&(a=new S(a),a.locale=f),b||(b=a.formatString||S.regional[f].formatString);for(var g,h=b||"%Y-%m-%d",i="";h.length>0;)(g=h.match(S.formats[e].codes.matcher))?(i+=h.slice(0,g.index),i+=(g[1]||"")+X(a,g[2],e),h=h.slice(g.index+g[0].length)):(i+=h,h="");return i},S.formats={ISO:"%Y-%m-%dT%H:%M:%S.%N%G",SQL:"%Y-%m-%d %H:%M:%S"},S.formats.perl={codes:{matcher:/()%(#?(%|[a-z]))/i,Y:"FullYear",y:"ShortYear.2",m:"MonthNumber.2","#m":"MonthNumber",B:"MonthName",b:"AbbrMonthName",d:"Date.2","#d":"Date",e:"Date",A:"DayName",a:"AbbrDayName",w:"Day",H:"Hours.2","#H":"Hours",I:"Hours12.2","#I":"Hours12",p:"AMPM",M:"Minutes.2","#M":"Minutes",S:"Seconds.2","#S":"Seconds",s:"Unix",N:"Milliseconds.3","#N":"Milliseconds",O:"TimezoneOffset",Z:"TimezoneName",G:"GmtOffset"},shortcuts:{F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",D:"%m/%d/%y","#c":"%a %b %e %H:%M:%S %Y",v:"%e-%b-%Y",R:"%H:%M",r:"%I:%M:%S %p",t:"	",n:"\n","%":"%"}},S.formats.php={codes:{matcher:/()%((%|[a-z]))/i,a:"AbbrDayName",A:"DayName",d:"Date.2",e:"Date",j:"DayOfYear.3",u:"DayOfWeek",w:"Day",U:"FullWeekOfYear.2",V:"IsoWeek.2",W:"WeekOfYear.2",b:"AbbrMonthName",B:"MonthName",m:"MonthNumber.2",h:"AbbrMonthName",C:"Century.2",y:"ShortYear.2",Y:"FullYear",H:"Hours.2",I:"Hours12.2",l:"Hours12",p:"AMPM",P:"AmPm",M:"Minutes.2",S:"Seconds.2",s:"Unix",O:"TimezoneOffset",z:"GmtOffset",Z:"TimezoneAbbr"},shortcuts:{D:"%m/%d/%y",F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",R:"%H:%M",r:"%I:%M:%S %p",t:"	",n:"\n","%":"%"}},S.createDate=function(a){function b(a,b){var c,d,e,f,g=parseFloat(b[1]),h=parseFloat(b[2]),i=parseFloat(b[3]),j=S.config.defaultCentury;return g>31?(d=i,e=h,c=j+g):(d=h,e=g,c=j+i),f=e+"/"+d+"/"+c,a.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/,f)}if(null==a)return new Date;if(a instanceof Date)return a;if("number"==typeof a)return new Date(a);var c=String(a).replace(/^\s*(.+)\s*$/g,"$1");c=c.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/,"$1/$2/$3"),c=c.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i,"$1 $2 $3");var d=c.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);if(d&&d.length>3){var e=parseFloat(d[3]),f=S.config.defaultCentury+e;f=String(f),c=c.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i,d[1]+" "+d[2]+" "+f)}d=c.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/),d&&d.length>3&&(c=b(c,d));var d=c.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);d&&d.length>3&&(c=b(c,d));for(var g,h,i,j=0,k=S.matchers.length,l=c;k>j;){if(h=Date.parse(l),!isNaN(h))return new Date(h);if(g=S.matchers[j],"function"==typeof g){if(i=g.call(S,l),i instanceof Date)return i}else l=c.replace(g[0],g[1]);j++}return NaN},S.daysInMonth=function(a,b){return 2==b?29==new Date(a,1,29).getDate()?29:28:[F,31,F,31,30,31,30,31,31,30,31,30,31][b]},S.matchers=[[/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/,"$2/$1/$3"],[/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/,"$2/$3/$1"],function(a){var b=a.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);if(b){if(b[1]){var c=this.createDate(b[1]);if(isNaN(c))return}else{var c=new Date;c.setMilliseconds(0)}var d=parseFloat(b[2]);return b[6]&&(d="am"==b[6].toLowerCase()?12==d?0:d:12==d?12:d+12),c.setHours(d,parseInt(b[3]||0,10),parseInt(b[4]||0,10),1e3*(parseFloat(b[5]||0)||0)),c}return a},function(a){var b=a.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);if(b){if(b[1]){var c=this.createDate(b[1]);if(isNaN(c))return}else{var c=new Date;c.setMilliseconds(0)}var d=parseFloat(b[2]);return c.setHours(d,parseInt(b[3],10),parseInt(b[4],10),1e3*parseFloat(b[5])),c}return a},function(a){var b=a.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);if(b){var c,d,e,f=new Date,g=S.config.defaultCentury,h=parseFloat(b[1]),i=parseFloat(b[3]);h>31?(d=i,c=g+h):(d=h,c=g+i);var e=C(b[2],S.regional[S.regional.getLocale()].monthNamesShort);return-1==e&&(e=C(b[2],S.regional[S.regional.getLocale()].monthNames)),f.setFullYear(c,e,d),f.setHours(0,0,0,0),f}return a}],a.jsDate=S,a.jqplot.sprintf=function(){function b(a,b,c,d){var e=a.length>=b?"":Array(1+b-a.length>>>0).join(c);return d?a+e:e+a}function c(b){for(var c=new String(b),d=10;d>0&&c!=(c=c.replace(/^(\d+)(\d{3})/,"$1"+a.jqplot.sprintf.thousandsSeparator+"$2"));d--);return c}function d(a,c,d,e,f,g){var h=e-a.length;if(h>0){var i=" ";g&&(i="&nbsp;"),a=d||!f?b(a,e,i,d):a.slice(0,c.length)+b("",h,"0",!0)+a.slice(c.length)}return a}function e(a,c,e,f,g,h,i,j){var k=a>>>0;return e=e&&k&&{2:"0b",8:"0",16:"0x"}[c]||"",a=e+b(k.toString(c),h||0,"0",!1),d(a,e,f,g,i,j)}function f(a,b,c,e,f,g){return null!=e&&(a=a.slice(0,e)),d(a,"",b,c,f,g)}var g=arguments,h=0,i=g[h++];return i.replace(a.jqplot.sprintf.regex,function(i,j,k,l,m,n,o){if("%%"==i)return"%";for(var p=!1,q="",r=!1,s=!1,t=!1,u=!1,v=0;k&&v<k.length;v++)switch(k.charAt(v)){case" ":q=" ";break;case"+":q="+";break;case"-":p=!0;break;case"0":r=!0;break;case"#":s=!0;break;case"&":t=!0;break;case"'":u=!0}if(l=l?"*"==l?+g[h++]:"*"==l.charAt(0)?+g[l.slice(1,-1)]:+l:0,0>l&&(l=-l,p=!0),!isFinite(l))throw new Error("$.jqplot.sprintf: (minimum-)width must be finite");n=n?"*"==n?+g[h++]:"*"==n.charAt(0)?+g[n.slice(1,-1)]:+n:"fFeE".indexOf(o)>-1?6:"d"==o?0:void 0;var w=j?g[j.slice(0,-1)]:g[h++];switch(o){case"s":return null==w?"":f(String(w),p,l,n,r,t);case"c":return f(String.fromCharCode(+w),p,l,n,r,t);case"b":return e(w,2,s,p,l,n,r,t);case"o":return e(w,8,s,p,l,n,r,t);case"x":return e(w,16,s,p,l,n,r,t);case"X":return e(w,16,s,p,l,n,r,t).toUpperCase();case"u":return e(w,10,s,p,l,n,r,t);case"i":var x=parseInt(+w,10);if(isNaN(x))return"";var y=0>x?"-":q,z=u?c(String(Math.abs(x))):String(Math.abs(x));return w=y+b(z,n,"0",!1),d(w,y,p,l,r,t);case"d":var x=Math.round(+w);if(isNaN(x))return"";var y=0>x?"-":q,z=u?c(String(Math.abs(x))):String(Math.abs(x));return w=y+b(z,n,"0",!1),d(w,y,p,l,r,t);case"e":case"E":case"f":case"F":case"g":case"G":var x=+w;if(isNaN(x))return"";var y=0>x?"-":q,A=["toExponential","toFixed","toPrecision"]["efg".indexOf(o.toLowerCase())],B=["toString","toUpperCase"]["eEfFgG".indexOf(o)%2],z=Math.abs(x)[A](n),C=z.toString().split(".");C[0]=u?c(C[0]):C[0],z=C.join(a.jqplot.sprintf.decimalMark),w=y+z;var D=d(w,y,p,l,r,t)[B]();return D;case"p":case"P":var x=+w;if(isNaN(x))return"";var y=0>x?"-":q,C=String(Number(Math.abs(x)).toExponential()).split(/e|E/),E=-1!=C[0].indexOf(".")?C[0].length-1:String(x).length,F=C[1]<0?-C[1]-1:0;if(Math.abs(x)<1)w=n>=E+F?y+Math.abs(x).toPrecision(E):n-1>=E?y+Math.abs(x).toExponential(E-1):y+Math.abs(x).toExponential(n-1);else{var G=n>=E?E:n;w=y+Math.abs(x).toPrecision(G)}var B=["toString","toUpperCase"]["pP".indexOf(o)%2];return d(w,y,p,l,r,t)[B]();case"n":return"";default:return i}})},a.jqplot.sprintf.thousandsSeparator=",",a.jqplot.sprintf.decimalMark=".",a.jqplot.sprintf.regex=/%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g,a.jqplot.getSignificantFigures=function(a){var b=String(Number(Math.abs(a)).toExponential()).split(/e|E/),c=-1!=b[0].indexOf(".")?b[0].length-1:b[0].length,d=b[1]<0?-b[1]-1:0,e=parseInt(b[1],10),f=e+1>0?e+1:0,g=f>=c?0:c-e-1;return{significantDigits:c,digitsLeft:f,digitsRight:g,zeros:d,exponent:e}},a.jqplot.getPrecision=function(b){return a.jqplot.getSignificantFigures(b).digitsRight};var Y=a.uiBackCompat!==!1;a.jqplot.effects={effect:{}};var Z="jqplot.storage.";a.extend(a.jqplot.effects,{version:"1.9pre",save:function(a,b){for(var c=0;c<b.length;c++)null!==b[c]&&a.data(Z+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)null!==b[c]&&a.css(b[c],a.data(Z+b[c]))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b}}),a.fn.extend({jqplotEffect:function(b,c,d,e){function f(b){function c(){a.isFunction(e)&&e.call(d[0]),a.isFunction(b)&&b()}var d=a(this),e=g.complete,f=g.mode;(d.is(":hidden")?"hide"===f:"show"===f)?c():j.call(d[0],g,c)}var g=E.apply(this,arguments),h=g.mode,i=g.queue,j=a.jqplot.effects.effect[g.effect],k=!j&&Y&&a.jqplot.effects[g.effect];return a.fx.off||!j&&!k?h?this[h](g.duration,g.complete):this.each(function(){g.complete&&g.complete.call(this)}):j?i===!1?this.each(f):this.queue(i||"fx",f):k.call(this,{options:g,duration:g.duration,callback:g.complete,mode:g.mode})}});var $=/up|down|vertical/,_=/up|left|vertical|horizontal/;a.jqplot.effects.effect.blind=function(b,c){var d,e,f,g=a(this),h=["position","top","bottom","left","right","height","width"],i=a.jqplot.effects.setMode(g,b.mode||"hide"),j=b.direction||"up",k=$.test(j),l=k?"height":"width",m=k?"top":"left",n=_.test(j),o={},p="show"===i;g.parent().is(".ui-effects-wrapper")?a.jqplot.effects.save(g.parent(),h):a.jqplot.effects.save(g,h),g.show(),f=parseInt(g.css("top"),10),d=a.jqplot.effects.createWrapper(g).css({overflow:"hidden"}),e=k?d[l]()+f:d[l](),o[l]=p?String(e):"0",n||(g.css(k?"bottom":"right",0).css(k?"top":"left","").css({position:"absolute"}),o[m]=p?"0":String(e)),p&&(d.css(l,0),n||d.css(m,e)),d.animate(o,{duration:b.duration,easing:b.easing,queue:!1,complete:function(){"hide"===i&&g.hide(),a.jqplot.effects.restore(g,h),a.jqplot.effects.removeWrapper(g),c()}})}}(jQuery);
/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.9
 * Revision: d96a669
 *
 * Copyright (c) 2009-2016 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function($) {   
    /**
    *  class: $.jqplot.CategoryAxisRenderer
    *  A plugin for jqPlot to render a category style axis, with equal pixel spacing between y data values of a series.
    *  
    *  To use this renderer, include the plugin in your source
    *  > <script type="text/javascript" language="javascript" src="plugins/jqplot.categoryAxisRenderer.js"></script>
    *  
    *  and supply the appropriate options to your plot
    *  
    *  > {axes:{xaxis:{renderer:$.jqplot.CategoryAxisRenderer}}}
    **/
    $.jqplot.CategoryAxisRenderer = function(options) {
        $.jqplot.LinearAxisRenderer.call(this);
        // prop: sortMergedLabels
        // True to sort tick labels when labels are created by merging
        // x axis values from multiple series.  That is, say you have
        // two series like:
        // > line1 = [[2006, 4],            [2008, 9], [2009, 16]];
        // > line2 = [[2006, 3], [2007, 7], [2008, 6]];
        // If no label array is specified, tick labels will be collected
        // from the x values of the series.  With sortMergedLabels
        // set to true, tick labels will be:
        // > [2006, 2007, 2008, 2009]
        // With sortMergedLabels set to false, tick labels will be:
        // > [2006, 2008, 2009, 2007]
        //
        // Note, this property is specified on the renderOptions for the 
        // axes when creating a plot:
        // > axes:{xaxis:{renderer:$.jqplot.CategoryAxisRenderer, rendererOptions:{sortMergedLabels:true}}}
        this.sortMergedLabels = false;
    };
    
    $.jqplot.CategoryAxisRenderer.prototype = new $.jqplot.LinearAxisRenderer();
    $.jqplot.CategoryAxisRenderer.prototype.constructor = $.jqplot.CategoryAxisRenderer;
    
    $.jqplot.CategoryAxisRenderer.prototype.init = function(options){
        this.groups = 1;
        this.groupLabels = [];
        this._groupLabels = [];
        this._grouped = false;
        this._barsPerGroup = null;
        this.reverse = false;
        // prop: tickRenderer
        // A class of a rendering engine for creating the ticks labels displayed on the plot, 
        // See <$.jqplot.AxisTickRenderer>.
        // this.tickRenderer = $.jqplot.AxisTickRenderer;
        // this.labelRenderer = $.jqplot.AxisLabelRenderer;
        $.extend(true, this, {tickOptions:{formatString:'%d'}}, options);
        var db = this._dataBounds;
        // Go through all the series attached to this axis and find
        // the min/max bounds for this axis.
        for (var i=0; i<this._series.length; i++) {
            var s = this._series[i];
            if (s.groups) {
                this.groups = s.groups;
            }
            var d = s.data;
            
            for (var j=0; j<d.length; j++) { 
                if (this.name == 'xaxis' || this.name == 'x2axis') {
                    if (d[j][0] < db.min || db.min == null) {
                        db.min = d[j][0];
                    }
                    if (d[j][0] > db.max || db.max == null) {
                        db.max = d[j][0];
                    }
                }              
                else {
                    if (d[j][1] < db.min || db.min == null) {
                        db.min = d[j][1];
                    }
                    if (d[j][1] > db.max || db.max == null) {
                        db.max = d[j][1];
                    }
                }              
            }
        }
        
        if (this.groupLabels.length) {
            this.groups = this.groupLabels.length;
        }
    };
 

    $.jqplot.CategoryAxisRenderer.prototype.createTicks = function() {
        // we're are operating on an axis here
        var ticks = this._ticks;
        var userTicks = this.ticks;
        var name = this.name;
        // databounds were set on axis initialization.
        var db = this._dataBounds;
        var dim, interval;
        var min, max;
        var pos1, pos2;
        var tt, i;

        // if we already have ticks, use them.
        if (userTicks.length) {
            // adjust with blanks if we have groups
            if (this.groups > 1 && !this._grouped) {
                var l = userTicks.length;
                var skip = parseInt(l/this.groups, 10);
                var count = 0;
                for (var i=skip; i<l; i+=skip) {
                    userTicks.splice(i+count, 0, ' ');
                    count++;
                }
                this._grouped = true;
            }
            this.min = 0.5;
            this.max = userTicks.length + 0.5;
            var range = this.max - this.min;
            this.numberTicks = 2*userTicks.length + 1;
            for (i=0; i<userTicks.length; i++){
                tt = this.min + 2 * i * range / (this.numberTicks-1);
                // need a marker before and after the tick
                var t = new this.tickRenderer(this.tickOptions);
                t.showLabel = false;
                // t.showMark = true;
                t.setTick(tt, this.name);
                this._ticks.push(t);
                var t = new this.tickRenderer(this.tickOptions);
                t.label = userTicks[i];
                // t.showLabel = true;
                t.showMark = false;
                t.showGridline = false;
                t.setTick(tt+0.5, this.name);
                this._ticks.push(t);
            }
            // now add the last tick at the end
            var t = new this.tickRenderer(this.tickOptions);
            t.showLabel = false;
            // t.showMark = true;
            t.setTick(tt+1, this.name);
            this._ticks.push(t);
        }

        // we don't have any ticks yet, let's make some!
        else {
            if (name == 'xaxis' || name == 'x2axis') {
                dim = this._plotDimensions.width;
            }
            else {
                dim = this._plotDimensions.height;
            }
            
            // if min, max and number of ticks specified, user can't specify interval.
            if (this.min != null && this.max != null && this.numberTicks != null) {
                this.tickInterval = null;
            }
            
            // if max, min, and interval specified and interval won't fit, ignore interval.
            if (this.min != null && this.max != null && this.tickInterval != null) {
                if (parseInt((this.max-this.min)/this.tickInterval, 10) != (this.max-this.min)/this.tickInterval) {
                    this.tickInterval = null;
                }
            }
        
            // find out how many categories are in the lines and collect labels
            var labels = [];
            var numcats = 0;
            var min = 0.5;
            var max, val;
            var isMerged = false;
            for (var i=0; i<this._series.length; i++) {
                var s = this._series[i];
                for (var j=0; j<s.data.length; j++) {
                    if (this.name == 'xaxis' || this.name == 'x2axis') {
                        val = s.data[j][0];
                    }
                    else {
                        val = s.data[j][1];
                    }
                    if ($.inArray(val, labels) == -1) {
                        isMerged = true;
                        numcats += 1;      
                        labels.push(val);
                    }
                }
            }
            
            if (isMerged && this.sortMergedLabels) {
                if (typeof labels[0] == "string") {
                    labels.sort();
                } else {
                    labels.sort(function(a,b) { return a - b; });
                }
            }
            
            // keep a reference to these tick labels to use for redrawing plot (see bug #57)
            this.ticks = labels;
            
            // now bin the data values to the right lables.
            for (var i=0; i<this._series.length; i++) {
                var s = this._series[i];
                for (var j=0; j<s.data.length; j++) {
                    if (this.name == 'xaxis' || this.name == 'x2axis') {
                        val = s.data[j][0];
                    }
                    else {
                        val = s.data[j][1];
                    }
                    // for category axis, force the values into category bins.
                    // we should have the value in the label array now.
                    var idx = $.inArray(val, labels)+1;
                    if (this.name == 'xaxis' || this.name == 'x2axis') {
                        s.data[j][0] = idx;
                    }
                    else {
                        s.data[j][1] = idx;
                    }
                }
            }
            
            // adjust with blanks if we have groups
            if (this.groups > 1 && !this._grouped) {
                var l = labels.length;
                var skip = parseInt(l/this.groups, 10);
                var count = 0;
                for (var i=skip; i<l; i+=skip+1) {
                    labels[i] = ' ';
                }
                this._grouped = true;
            }
        
            max = numcats + 0.5;
            if (this.numberTicks == null) {
                this.numberTicks = 2*numcats + 1;
            }

            var range = max - min;
            this.min = min;
            this.max = max;
            var track = 0;
            
            // todo: adjust this so more ticks displayed.
            var maxVisibleTicks = parseInt(3+dim/10, 10);
            var skip = parseInt(numcats/maxVisibleTicks, 10);

            if (this.tickInterval == null) {

                this.tickInterval = range / (this.numberTicks-1);

            }
            // if tickInterval is specified, we will ignore any computed maximum.
            for (var i=0; i<this.numberTicks; i++){
                tt = this.min + i * this.tickInterval;
                var t = new this.tickRenderer(this.tickOptions);
                // if even tick, it isn't a category, it's a divider
                if (i/2 == parseInt(i/2, 10)) {
                    t.showLabel = false;
                    t.showMark = true;
                }
                else {
                    if (skip>0 && track<skip) {
                        t.showLabel = false;
                        track += 1;
                    }
                    else {
                        t.showLabel = true;
                        track = 0;
                    } 
                    t.label = t.formatter(t.formatString, labels[(i-1)/2]);
                    t.showMark = false;
                    t.showGridline = false;
                }
                t.setTick(tt, this.name);
                this._ticks.push(t);
            }
        }
        
    };
    
    // called with scope of axis
    $.jqplot.CategoryAxisRenderer.prototype.draw = function(ctx, plot) {
        if (this.show) {
            // populate the axis label and value properties.
            // createTicks is a method on the renderer, but
            // call it within the scope of the axis.
            this.renderer.createTicks.call(this);
            // fill a div with axes labels in the right direction.
            // Need to pregenerate each axis to get its bounds and
            // position it and the labels correctly on the plot.
            var dim=0;
            var temp;
            // Added for theming.
            if (this._elem) {
                // this._elem.empty();
                // Memory Leaks patch
                this._elem.emptyForce();
            }

            this._elem = this._elem || $('<div class="jqplot-axis jqplot-'+this.name+'" style="position:absolute;"></div>');
            
            if (this.name == 'xaxis' || this.name == 'x2axis') {
                this._elem.width(this._plotDimensions.width);
            }
            else {
                this._elem.height(this._plotDimensions.height);
            }
            
            // create a _label object.
            this.labelOptions.axis = this.name;
            this._label = new this.labelRenderer(this.labelOptions);
            if (this._label.show) {
                var elem = this._label.draw(ctx, plot);
                elem.appendTo(this._elem);
            }
    
            var t = this._ticks;
            for (var i=0; i<t.length; i++) {
                var tick = t[i];
                if (tick.showLabel && (!tick.isMinorTick || this.showMinorTicks)) {
                    var elem = tick.draw(ctx, plot);
                    elem.appendTo(this._elem);
                }
            }
        
            this._groupLabels = [];
            // now make group labels
            for (var i=0; i<this.groupLabels.length; i++)
            {
                var elem = $('<div style="position:absolute;" class="jqplot-'+this.name+'-groupLabel"></div>');
                elem.html(this.groupLabels[i]);
                this._groupLabels.push(elem);
                elem.appendTo(this._elem);
            }
        }
        return this._elem;
    };
    
    // called with scope of axis
    $.jqplot.CategoryAxisRenderer.prototype.set = function() { 
        var dim = 0;
        var temp;
        var w = 0;
        var h = 0;
        var lshow = (this._label == null) ? false : this._label.show;
        if (this.show) {
            var t = this._ticks;
            for (var i=0; i<t.length; i++) {
                var tick = t[i];
                if (tick.showLabel && (!tick.isMinorTick || this.showMinorTicks)) {
                    if (this.name == 'xaxis' || this.name == 'x2axis') {
                        temp = tick._elem.outerHeight(true);
                    }
                    else {
                        temp = tick._elem.outerWidth(true);
                    }
                    if (temp > dim) {
                        dim = temp;
                    }
                }
            }
            
            var dim2 = 0;
            for (var i=0; i<this._groupLabels.length; i++) {
                var l = this._groupLabels[i];
                if (this.name == 'xaxis' || this.name == 'x2axis') {
                    temp = l.outerHeight(true);
                }
                else {
                    temp = l.outerWidth(true);
                }
                if (temp > dim2) {
                    dim2 = temp;
                }
            }
            
            if (lshow) {
                w = this._label._elem.outerWidth(true);
                h = this._label._elem.outerHeight(true); 
            }
            if (this.name == 'xaxis') {
                dim += dim2 + h;
                this._elem.css({'height':dim+'px', left:'0px', bottom:'0px'});
            }
            else if (this.name == 'x2axis') {
                dim += dim2 + h;
                this._elem.css({'height':dim+'px', left:'0px', top:'0px'});
            }
            else if (this.name == 'yaxis') {
                dim += dim2 + w;
                this._elem.css({'width':dim+'px', left:'0px', top:'0px'});
                if (lshow && this._label.constructor == $.jqplot.AxisLabelRenderer) {
                    this._label._elem.css('width', w+'px');
                }
            }
            else {
                dim += dim2 + w;
                this._elem.css({'width':dim+'px', right:'0px', top:'0px'});
                if (lshow && this._label.constructor == $.jqplot.AxisLabelRenderer) {
                    this._label._elem.css('width', w+'px');
                }
            }
        }  
    };
    
    // called with scope of axis
    $.jqplot.CategoryAxisRenderer.prototype.pack = function(pos, offsets) {
        var ticks = this._ticks;
        var max = this.max;
        var min = this.min;
        var offmax = offsets.max;
        var offmin = offsets.min;
        var lshow = (this._label == null) ? false : this._label.show;
        var i;

        for (var p in pos) {
            this._elem.css(p, pos[p]);
        }
        
        this._offsets = offsets;
        // pixellength will be + for x axes and - for y axes becasue pixels always measured from top left.
        var pixellength = offmax - offmin;
        var unitlength = max - min;
        
        if (!this.reverse) {
            // point to unit and unit to point conversions references to Plot DOM element top left corner.
            
            this.u2p = function(u){
                return (u - min) * pixellength / unitlength + offmin;
            };

            this.p2u = function(p){
                return (p - offmin) * unitlength / pixellength + min;
            };
                    
            if (this.name == 'xaxis' || this.name == 'x2axis'){
                this.series_u2p = function(u){
                    return (u - min) * pixellength / unitlength;
                };
                this.series_p2u = function(p){
                    return p * unitlength / pixellength + min;
                };
            }
            
            else {
                this.series_u2p = function(u){
                    return (u - max) * pixellength / unitlength;
                };
                this.series_p2u = function(p){
                    return p * unitlength / pixellength + max;
                };
            }
        }

        else {
            // point to unit and unit to point conversions references to Plot DOM element top left corner.
            
            this.u2p = function(u){
                return offmin + (max - u) * pixellength / unitlength;
            };

            this.p2u = function(p){
                return min + (p - offmin) * unitlength / pixellength;
            };
                    
            if (this.name == 'xaxis' || this.name == 'x2axis'){
                this.series_u2p = function(u){
                    return (max - u) * pixellength / unitlength;
                };
                this.series_p2u = function(p){
                    return p * unitlength / pixellength + max;
                };
            }
            
            else {
                this.series_u2p = function(u){
                    return (min - u) * pixellength / unitlength;
                };
                this.series_p2u = function(p){
                    return p * unitlength / pixellength + min;
                };
            }

        }
            
        
        if (this.show) {
            if (this.name == 'xaxis' || this.name == 'x2axis') {
                for (i=0; i<ticks.length; i++) {
                    var t = ticks[i];
                    if (t.show && t.showLabel) {
                        var shim;
                        
                        if (t.constructor == $.jqplot.CanvasAxisTickRenderer && t.angle) {
                            // will need to adjust auto positioning based on which axis this is.
                            var temp = (this.name == 'xaxis') ? 1 : -1;
                            switch (t.labelPosition) {
                                case 'auto':
                                    // position at end
                                    if (temp * t.angle < 0) {
                                        shim = -t.getWidth() + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    }
                                    // position at start
                                    else {
                                        shim = -t._textRenderer.height * Math.sin(t._textRenderer.angle) / 2;
                                    }
                                    break;
                                case 'end':
                                    shim = -t.getWidth() + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    break;
                                case 'start':
                                    shim = -t._textRenderer.height * Math.sin(t._textRenderer.angle) / 2;
                                    break;
                                case 'middle':
                                    shim = -t.getWidth()/2 + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    break;
                                default:
                                    shim = -t.getWidth()/2 + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    break;
                            }
                        }
                        else {
                            shim = -t.getWidth()/2;
                        }
                        var val = this.u2p(t.value) + shim + 'px';
                        t._elem.css('left', val);
                        t.pack();
                    }
                }
                
                var labeledge=['bottom', 0];
                if (lshow) {
                    var w = this._label._elem.outerWidth(true);
                    this._label._elem.css('left', offmin + pixellength/2 - w/2 + 'px');
                    if (this.name == 'xaxis') {
                        this._label._elem.css('bottom', '0px');
                        labeledge = ['bottom', this._label._elem.outerHeight(true)];
                    }
                    else {
                        this._label._elem.css('top', '0px');
                        labeledge = ['top', this._label._elem.outerHeight(true)];
                    }
                    this._label.pack();
                }
                
                // draw the group labels
                var step = parseInt(this._ticks.length/this.groups, 10) + 1;
                for (i=0; i<this._groupLabels.length; i++) {
                    var mid = 0;
                    var count = 0;
                    for (var j=i*step; j<(i+1)*step; j++) {
                        if (j >= this._ticks.length-1) continue; // the last tick does not exist as there is no other group in order to have an empty one.
                        if (this._ticks[j]._elem && this._ticks[j].label != " ") {
                            var t = this._ticks[j]._elem;
                            var p = t.position();
                            mid += p.left + t.outerWidth(true)/2;
                            count++;
                        }
                    }
                    mid = mid/count;
                    this._groupLabels[i].css({'left':(mid - this._groupLabels[i].outerWidth(true)/2)});
                    this._groupLabels[i].css(labeledge[0], labeledge[1]);
                }
            }
            else {
                for (i=0; i<ticks.length; i++) {
                    var t = ticks[i];
                    if (t.show && t.showLabel) {                        
                        var shim;
                        if (t.constructor == $.jqplot.CanvasAxisTickRenderer && t.angle) {
                            // will need to adjust auto positioning based on which axis this is.
                            var temp = (this.name == 'yaxis') ? 1 : -1;
                            switch (t.labelPosition) {
                                case 'auto':
                                    // position at end
                                case 'end':
                                    if (temp * t.angle < 0) {
                                        shim = -t._textRenderer.height * Math.cos(-t._textRenderer.angle) / 2;
                                    }
                                    else {
                                        shim = -t.getHeight() + t._textRenderer.height * Math.cos(t._textRenderer.angle) / 2;
                                    }
                                    break;
                                case 'start':
                                    if (t.angle > 0) {
                                        shim = -t._textRenderer.height * Math.cos(-t._textRenderer.angle) / 2;
                                    }
                                    else {
                                        shim = -t.getHeight() + t._textRenderer.height * Math.cos(t._textRenderer.angle) / 2;
                                    }
                                    break;
                                case 'middle':
                                    // if (t.angle > 0) {
                                    //     shim = -t.getHeight()/2 + t._textRenderer.height * Math.sin(-t._textRenderer.angle) / 2;
                                    // }
                                    // else {
                                    //     shim = -t.getHeight()/2 - t._textRenderer.height * Math.sin(t._textRenderer.angle) / 2;
                                    // }
                                    shim = -t.getHeight()/2;
                                    break;
                                default:
                                    shim = -t.getHeight()/2;
                                    break;
                            }
                        }
                        else {
                            shim = -t.getHeight()/2;
                        }
                        
                        var val = this.u2p(t.value) + shim + 'px';
                        t._elem.css('top', val);
                        t.pack();
                    }
                }
                
                var labeledge=['left', 0];
                if (lshow) {
                    var h = this._label._elem.outerHeight(true);
                    this._label._elem.css('top', offmax - pixellength/2 - h/2 + 'px');
                    if (this.name == 'yaxis') {
                        this._label._elem.css('left', '0px');
                        labeledge = ['left', this._label._elem.outerWidth(true)];
                    }
                    else {
                        this._label._elem.css('right', '0px');
                        labeledge = ['right', this._label._elem.outerWidth(true)];
                    }   
                    this._label.pack();
                }
                
                // draw the group labels, position top here, do left after label position.
                var step = parseInt(this._ticks.length/this.groups, 10) + 1; // step is one more than before as we don't want to have overlaps in loops
                for (i=0; i<this._groupLabels.length; i++) {
                    var mid = 0;
                    var count = 0;
                    for (var j=i*step; j<(i+1)*step; j++) { // j must never reach (i+1)*step as we don't want to have overlap between loops
                        if (j >= this._ticks.length-1) continue; // the last tick does not exist as there is no other group in order to have an empty one.
                        if (this._ticks[j]._elem && this._ticks[j].label != " ") {
                            var t = this._ticks[j]._elem;
                            var p = t.position();
                            mid += p.top + t.outerHeight()/2;
                            count++;
                        }
                    }
                    mid = mid/count;
                    this._groupLabels[i].css({'top':mid - this._groupLabels[i].outerHeight()/2});
                    this._groupLabels[i].css(labeledge[0], labeledge[1]);
                    
                }
            }
        }
    };    
    
    
})(jQuery);

/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.9
 * Revision: d96a669
 *
 * Copyright (c) 2009-2016 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function($) {
    
    // Class: $.jqplot.BarRenderer
    // A plugin renderer for jqPlot to draw a bar plot.
    // Draws series as a line.
    
    $.jqplot.BarRenderer = function(){
        $.jqplot.LineRenderer.call(this);
    };
    
    $.jqplot.BarRenderer.prototype = new $.jqplot.LineRenderer();
    $.jqplot.BarRenderer.prototype.constructor = $.jqplot.BarRenderer;
    
    // called with scope of series.
    $.jqplot.BarRenderer.prototype.init = function(options, plot) {
        // Group: Properties
        //
        // prop: barPadding
        // Number of pixels between adjacent bars at the same axis value.
        this.barPadding = 8;
        // prop: barMargin
        // Number of pixels between groups of bars at adjacent axis values.
        this.barMargin = 10;
        // prop: barDirection
        // 'vertical' = up and down bars, 'horizontal' = side to side bars
        this.barDirection = 'vertical';
        // prop: barWidth
        // Width of the bar in pixels (auto by devaul).  null = calculated automatically.
        this.barWidth = null;
        // prop: shadowOffset
        // offset of the shadow from the slice and offset of 
        // each succesive stroke of the shadow from the last.
        this.shadowOffset = 2;
        // prop: shadowDepth
        // number of strokes to apply to the shadow, 
        // each stroke offset shadowOffset from the last.
        this.shadowDepth = 5;
        // prop: shadowAlpha
        // transparency of the shadow (0 = transparent, 1 = opaque)
        this.shadowAlpha = 0.08;
        // prop: waterfall
        // true to enable waterfall plot.
        this.waterfall = false;
        // prop: groups
        // group bars into this many groups
        this.groups = 1;
        // prop: varyBarColor
        // true to color each bar of a series separately rather than
        // have every bar of a given series the same color.
        // If used for non-stacked multiple series bar plots, user should
        // specify a separate 'seriesColors' array for each series.
        // Otherwise, each series will set their bars to the same color array.
        // This option has no Effect for stacked bar charts and is disabled.
        this.varyBarColor = false;
        // prop: highlightMouseOver
        // True to highlight slice when moused over.
        // This must be false to enable highlightMouseDown to highlight when clicking on a slice.
        this.highlightMouseOver = true;
        // prop: highlightMouseDown
        // True to highlight when a mouse button is pressed over a slice.
        // This will be disabled if highlightMouseOver is true.
        this.highlightMouseDown = false;
        // prop: highlightColors
        // an array of colors to use when highlighting a bar.
        this.highlightColors = [];
        // prop: transposedData
        // NOT IMPLEMENTED YET.  True if this is a horizontal bar plot and 
        // x and y values are "transposed".  Tranposed, or "swapped", data is 
        // required prior to rev. 894 builds of jqPlot with horizontal bars. 
        // Allows backward compatability of bar renderer horizontal bars with 
        // old style data sets.
        this.transposedData = true;
        this.renderer.animation = {
            show: false,
            direction: 'down',
            speed: 3000,
            _supported: true
        };
        this._type = 'bar';
        
        // if user has passed in highlightMouseDown option and not set highlightMouseOver, disable highlightMouseOver
        if (options.highlightMouseDown && options.highlightMouseOver == null) {
            options.highlightMouseOver = false;
        }
        
        //////
        // This is probably wrong here.
        // After going back and forth on whether renderer should be the thing
        // or extend the thing, it seems that it it best if it is a property
        // on the thing.  This should be something that is commonized 
        // among series renderers in the future.
        //////
        $.extend(true, this, options);

        // really should probably do this
        $.extend(true, this.renderer, options);
        // fill is still needed to properly draw the legend.
        // bars have to be filled.
        this.fill = true;

        // if horizontal bar and animating, reset the default direction
        if (this.barDirection === 'horizontal' && this.rendererOptions.animation && this.rendererOptions.animation.direction == null) {
            this.renderer.animation.direction = 'left';
        }
        
        if (this.waterfall) {
            this.fillToZero = false;
            this.disableStack = true;
        }
        
        if (this.barDirection == 'vertical' ) {
            this._primaryAxis = '_xaxis';
            this._stackAxis = 'y';
            this.fillAxis = 'y';
        }
        else {
            this._primaryAxis = '_yaxis';
            this._stackAxis = 'x';
            this.fillAxis = 'x';
        }
        // index of the currenty highlighted point, if any
        this._highlightedPoint = null;
        // total number of values for all bar series, total number of bar series, and position of this series
        this._plotSeriesInfo = null;
        // Array of actual data colors used for each data point.
        this._dataColors = [];
        this._barPoints = [];
        
        // set the shape renderer options
        var opts = {lineJoin:'miter', lineCap:'round', fill:true, isarc:false, strokeStyle:this.color, fillStyle:this.color, closePath:this.fill};
        this.renderer.shapeRenderer.init(opts);
        // set the shadow renderer options
        var sopts = {lineJoin:'miter', lineCap:'round', fill:true, isarc:false, angle:this.shadowAngle, offset:this.shadowOffset, alpha:this.shadowAlpha, depth:this.shadowDepth, closePath:this.fill};
        this.renderer.shadowRenderer.init(sopts);
        
        plot.postInitHooks.addOnce(postInit);
        plot.postDrawHooks.addOnce(postPlotDraw);
        plot.eventListenerHooks.addOnce('jqplotMouseMove', handleMove);
        plot.eventListenerHooks.addOnce('jqplotMouseDown', handleMouseDown);
        plot.eventListenerHooks.addOnce('jqplotMouseUp', handleMouseUp);
        plot.eventListenerHooks.addOnce('jqplotClick', handleClick);
        plot.eventListenerHooks.addOnce('jqplotRightClick', handleRightClick); 
    };
    
    // called with scope of series
    function barPreInit(target, data, seriesDefaults, options) {
        if (this.rendererOptions.barDirection == 'horizontal') {
            this._stackAxis = 'x';
            this._primaryAxis = '_yaxis';
        }
        if (this.rendererOptions.waterfall == true) {
            this._data = $.extend(true, [], this.data);
            var sum = 0;
            var pos = (!this.rendererOptions.barDirection || this.rendererOptions.barDirection === 'vertical' || this.transposedData === false) ? 1 : 0;
            for(var i=0; i<this.data.length; i++) {
                sum += this.data[i][pos];
                if (i>0) {
                    this.data[i][pos] += this.data[i-1][pos];
                }
            }
            this.data[this.data.length] = (pos == 1) ? [this.data.length+1, sum] : [sum, this.data.length+1];
            this._data[this._data.length] = (pos == 1) ? [this._data.length+1, sum] : [sum, this._data.length+1];
        }
        if (this.rendererOptions.groups > 1) {
            this.breakOnNull = true;
            var l = this.data.length;
            var skip = parseInt(l/this.rendererOptions.groups, 10);
            var count = 0;
            for (var i=skip; i<l; i+=skip) {
                this.data.splice(i+count, 0, [null, null]);
                this._plotData.splice(i+count, 0, [null, null]);
                this._stackData.splice(i+count, 0, [null, null]);
                count++;
            }
            for (i=0; i<this.data.length; i++) {
                if (this._primaryAxis == '_xaxis') {
                    this.data[i][0] = i+1;
                    this._plotData[i][0] = i+1;
                    this._stackData[i][0] = i+1;
                }
                else {
                    this.data[i][1] = i+1;
                    this._plotData[i][1] = i+1;
                    this._stackData[i][1] = i+1;
                }
            }
        }
    }
    
    $.jqplot.preSeriesInitHooks.push(barPreInit);
    
    // needs to be called with scope of series, not renderer.
    $.jqplot.BarRenderer.prototype.calcSeriesNumbers = function() {
        var nvals = 0;
        var nseries = 0;
        var paxis = this[this._primaryAxis];
        var s, series, pos;
        // loop through all series on this axis
        for (var i=0; i < paxis._series.length; i++) {
            series = paxis._series[i];
            if (series === this) {
                pos = i;
            }
            // is the series rendered as a bar?
            if (series.renderer.constructor == $.jqplot.BarRenderer) {
                // gridData may not be computed yet, use data length insted
                nvals += series.data.length;
                nseries += 1;
            }
        }
        // return total number of values for all bar series, total number of bar series, and position of this series
        return [nvals, nseries, pos];
    };

    $.jqplot.BarRenderer.prototype.setBarWidth = function() {
        // need to know how many data values we have on the approprate axis and figure it out.
        var i;
        var nvals = 0;
        var nseries = 0;
        var paxis = this[this._primaryAxis];
        var s, series, pos;
        var temp = this._plotSeriesInfo = this.renderer.calcSeriesNumbers.call(this);
        nvals = temp[0];
        nseries = temp[1];
        var nticks = paxis.numberTicks;
        var nbins = (nticks-1)/2;
        // so, now we have total number of axis values.
        if (paxis.name == 'xaxis' || paxis.name == 'x2axis') {
            if (this._stack) {
                this.barWidth = (paxis._offsets.max - paxis._offsets.min) / nvals * nseries - this.barMargin;
            }
            else {
                this.barWidth = ((paxis._offsets.max - paxis._offsets.min)/nbins  - this.barPadding * (nseries-1) - this.barMargin*2)/nseries;
                // this.barWidth = (paxis._offsets.max - paxis._offsets.min) / nvals - this.barPadding - this.barMargin/nseries;
            }
        }
        else {
            if (this._stack) {
                this.barWidth = (paxis._offsets.min - paxis._offsets.max) / nvals * nseries - this.barMargin;
            }
            else {
                this.barWidth = ((paxis._offsets.min - paxis._offsets.max)/nbins  - this.barPadding * (nseries-1) - this.barMargin*2)/nseries;
                // this.barWidth = (paxis._offsets.min - paxis._offsets.max) / nvals - this.barPadding - this.barMargin/nseries;
            }
        }
        return [nvals, nseries];
    };

    function computeHighlightColors (colors) {
        var ret = [];
        for (var i=0; i<colors.length; i++){
            var rgba = $.jqplot.getColorComponents(colors[i]);
            var newrgb = [rgba[0], rgba[1], rgba[2]];
            var sum = newrgb[0] + newrgb[1] + newrgb[2];
            for (var j=0; j<3; j++) {
                // when darkening, lowest color component can be is 60.
                newrgb[j] = (sum > 570) ?  newrgb[j] * 0.8 : newrgb[j] + 0.3 * (255 - newrgb[j]);
                newrgb[j] = parseInt(newrgb[j], 10);
            }
            ret.push('rgb('+newrgb[0]+','+newrgb[1]+','+newrgb[2]+')');
        }
        return ret;
    }

    function getStart(sidx, didx, comp, plot, axis) {
        // check if sign change
        var seriesIndex = sidx,
            prevSeriesIndex = sidx - 1,
            start,
            prevVal,
            aidx = (axis === 'x') ? 0 : 1;

        // is this not the first series?
        if (seriesIndex > 0) {
            prevVal = plot.series[prevSeriesIndex]._plotData[didx][aidx];

            // is there a sign change
            if ((comp * prevVal) < 0) {
                start = getStart(prevSeriesIndex, didx, comp, plot, axis);
            }

            // no sign change.
            else {
                start = plot.series[prevSeriesIndex].gridData[didx][aidx];
            }

        }

        // if first series, return value at 0
        else {

            start = (aidx === 0) ? plot.series[seriesIndex]._xaxis.series_u2p(0) : plot.series[seriesIndex]._yaxis.series_u2p(0);
        }

        return start;
    }

    
    $.jqplot.BarRenderer.prototype.draw = function(ctx, gridData, options, plot) {
        var i;
        // Ughhh, have to make a copy of options b/c it may be modified later.
        var opts = $.extend({}, options);
        var shadow = (opts.shadow != undefined) ? opts.shadow : this.shadow;
        var showLine = (opts.showLine != undefined) ? opts.showLine : this.showLine;
        var fill = (opts.fill != undefined) ? opts.fill : this.fill;
        var xaxis = this.xaxis;
        var yaxis = this.yaxis;
        var xp = this._xaxis.series_u2p;
        var yp = this._yaxis.series_u2p;
        var pointx, pointy;
        // clear out data colors.
        this._dataColors = [];
        this._barPoints = [];
        
        if (this.barWidth == null || this.rendererOptions.barWidth == null) {//check pull request https://bitbucket.org/cleonello/jqplot/pull-request/61/fix-for-issue-513/diff
            this.renderer.setBarWidth.call(this);
        }
        
        var temp = this._plotSeriesInfo = this.renderer.calcSeriesNumbers.call(this);
        var nvals = temp[0];
        var nseries = temp[1];
        var pos = temp[2];
        var points = [];
        
        if (this._stack) {
            this._barNudge = 0;
        }
        else {
            this._barNudge = (-Math.abs(nseries/2 - 0.5) + pos) * (this.barWidth + this.barPadding);
        }
        if (showLine) {
            var negativeColors = new $.jqplot.ColorGenerator(this.negativeSeriesColors);
            var positiveColors = new $.jqplot.ColorGenerator(this.seriesColors);
            var negativeColor = negativeColors.get(this.index);
            if (! this.useNegativeColors) {
                negativeColor = opts.fillStyle;
            }
            var positiveColor = opts.fillStyle;
            var base;
            var xstart; 
            var ystart;
            
            if (this.barDirection == 'vertical') {
                for (var i=0; i<gridData.length; i++) {
                    if (!this._stack && this.data[i][1] == null) {
                        continue;
                    }
                    points = [];
                    base = gridData[i][0] + this._barNudge;
                    
                    // stacked
                    if (this._stack && this._prevGridData.length) {
                        ystart = getStart(this.index, i, this._plotData[i][1], plot, 'y');
                    }

                    // not stacked
                    else {
                        if (this.fillToZero) {
                            ystart = this._yaxis.series_u2p(0);
                        }
                        else if (this.waterfall && i > 0 && i < this.gridData.length-1) {
                            ystart = this.gridData[i-1][1];
                        }
                        else if (this.waterfall && i == 0 && i < this.gridData.length-1) {
                            if (this._yaxis.min <= 0 && this._yaxis.max >= 0) {
                                ystart = this._yaxis.series_u2p(0);
                            }
                            else if (this._yaxis.min > 0) {
                                ystart = ctx.canvas.height;
                            }
                            else {
                                ystart = 0;
                            }
                        }
                        else if (this.waterfall && i == this.gridData.length - 1) {
                            if (this._yaxis.min <= 0 && this._yaxis.max >= 0) {
                                ystart = this._yaxis.series_u2p(0);
                            }
                            else if (this._yaxis.min > 0) {
                                ystart = ctx.canvas.height;
                            }
                            else {
                                ystart = 0;
                            }
                        }
                        else {
                            ystart = ctx.canvas.height;
                        }
                    }
                    if ((this.fillToZero && this._plotData[i][1] < 0) || (this.waterfall && this._data[i][1] < 0)) {
                        if (this.varyBarColor && !this._stack) {
                            if (this.useNegativeColors) {
                                opts.fillStyle = negativeColors.next();
                            }
                            else {
                                opts.fillStyle = positiveColors.next();
                            }
                        }
                        else {
                            opts.fillStyle = negativeColor;
                        }
                    }
                    else {
                        if (this.varyBarColor && !this._stack) {
                            opts.fillStyle = positiveColors.next();
                        }
                        else {
                            opts.fillStyle = positiveColor;
                        }
                    }
                    
                    if (!this.fillToZero || this._plotData[i][1] >= 0) { 
                        points.push([base-this.barWidth/2, ystart]);
                        points.push([base-this.barWidth/2, gridData[i][1]]);
                        points.push([base+this.barWidth/2, gridData[i][1]]);
                        points.push([base+this.barWidth/2, ystart]);
                    }
                    // for negative bars make sure points are always ordered clockwise
                    else {              
                        points.push([base-this.barWidth/2, gridData[i][1]]);
                        points.push([base-this.barWidth/2, ystart]);
                        points.push([base+this.barWidth/2, ystart]);
                        points.push([base+this.barWidth/2, gridData[i][1]]);
                    }
                    this._barPoints.push(points);
                    // now draw the shadows if not stacked.
                    // for stacked plots, they are predrawn by drawShadow
                    if (shadow && !this._stack) {
                        var sopts = $.extend(true, {}, opts);
                        // need to get rid of fillStyle on shadow.
                        delete sopts.fillStyle;
                        this.renderer.shadowRenderer.draw(ctx, points, sopts);
                    }
                    var clr = opts.fillStyle || this.color;
                    this._dataColors.push(clr);
                    this.renderer.shapeRenderer.draw(ctx, points, opts); 
                }
            }
            
            else if (this.barDirection == 'horizontal'){
                for (var i=0; i<gridData.length; i++) {
                    if (!this._stack && this.data[i][0] == null) {
                        continue;
                    }
                    points = [];
                    base = gridData[i][1] - this._barNudge;
                    xstart;
                    
                    if (this._stack && this._prevGridData.length) {
                        xstart = getStart(this.index, i, this._plotData[i][0], plot, 'x');
                    }
                    // not stacked
                    else {
                        if (this.fillToZero) {
                            xstart = this._xaxis.series_u2p(0);
                        }
                        else if (this.waterfall && i > 0 && i < this.gridData.length-1) {
                            xstart = this.gridData[i-1][0];
                        }
                        else if (this.waterfall && i == 0 && i < this.gridData.length-1) {
                            if (this._xaxis.min <= 0 && this._xaxis.max >= 0) {
                                xstart = this._xaxis.series_u2p(0);
                            }
                            else if (this._xaxis.min > 0) {
                                xstart = 0;
                            }
                            else {
                                xstart = 0;
                            }
                        }
                        else if (this.waterfall && i == this.gridData.length - 1) {
                            if (this._xaxis.min <= 0 && this._xaxis.max >= 0) {
                                xstart = this._xaxis.series_u2p(0);
                            }
                            else if (this._xaxis.min > 0) {
                                xstart = 0;
                            }
                            else {
                                xstart = ctx.canvas.width;
                            }
                        }
                        else {
                            xstart = 0;
                        }
                    }
                    if ((this.fillToZero && this._plotData[i][0] < 0) || (this.waterfall && this._data[i][0] < 0)) {
                        if (this.varyBarColor && !this._stack) {
                            if (this.useNegativeColors) {
                                opts.fillStyle = negativeColors.next();
                            }
                            else {
                                opts.fillStyle = positiveColors.next();
                            }
                        }
                        else {
                            opts.fillStyle = negativeColor;
                        }
                    }
                    else {
                        if (this.varyBarColor && !this._stack) {
                            opts.fillStyle = positiveColors.next();
                        }
                        else {
                            opts.fillStyle = positiveColor;
                        }                    
                    }
                    

                    if (!this.fillToZero || this._plotData[i][0] >= 0) {
                        points.push([xstart, base + this.barWidth / 2]);
                        points.push([xstart, base - this.barWidth / 2]);
                        points.push([gridData[i][0], base - this.barWidth / 2]);
                        points.push([gridData[i][0], base + this.barWidth / 2]);
                    }
                    else {
                        points.push([gridData[i][0], base + this.barWidth / 2]);
                        points.push([gridData[i][0], base - this.barWidth / 2]);
                        points.push([xstart, base - this.barWidth / 2]);
                        points.push([xstart, base + this.barWidth / 2]);
                    }

                    this._barPoints.push(points);
                    // now draw the shadows if not stacked.
                    // for stacked plots, they are predrawn by drawShadow
                    if (shadow && !this._stack) {
                        var sopts = $.extend(true, {}, opts);
                        delete sopts.fillStyle;
                        this.renderer.shadowRenderer.draw(ctx, points, sopts);
                    }
                    var clr = opts.fillStyle || this.color;
                    this._dataColors.push(clr);
                    this.renderer.shapeRenderer.draw(ctx, points, opts);
                } 
            }
        }                
        
        if (this.highlightColors.length == 0) {
            this.highlightColors = $.jqplot.computeHighlightColors(this._dataColors);
        }
        
        else if (typeof(this.highlightColors) == 'string') {
            var temp = this.highlightColors;
            this.highlightColors = [];
            for (var i=0; i<this._dataColors.length; i++) {
                this.highlightColors.push(temp);
            }
        }
        
    };
    
     
    // for stacked plots, shadows will be pre drawn by drawShadow.
    $.jqplot.BarRenderer.prototype.drawShadow = function(ctx, gridData, options, plot) {
        var i;
        var opts = (options != undefined) ? options : {};
        var shadow = (opts.shadow != undefined) ? opts.shadow : this.shadow;
        var showLine = (opts.showLine != undefined) ? opts.showLine : this.showLine;
        var fill = (opts.fill != undefined) ? opts.fill : this.fill;
        var xaxis = this.xaxis;
        var yaxis = this.yaxis;
        var xp = this._xaxis.series_u2p;
        var yp = this._yaxis.series_u2p;
        var pointx, points, pointy, nvals, nseries, pos;
        
        if (this._stack && this.shadow) {
            if (this.barWidth == null) {
                this.renderer.setBarWidth.call(this);
            }
        
            var temp = this._plotSeriesInfo = this.renderer.calcSeriesNumbers.call(this);
            nvals = temp[0];
            nseries = temp[1];
            pos = temp[2];
        
            if (this._stack) {
                this._barNudge = 0;
            }
            else {
                this._barNudge = (-Math.abs(nseries/2 - 0.5) + pos) * (this.barWidth + this.barPadding);
            }
            if (showLine) {
            
                if (this.barDirection == 'vertical') {
                    for (var i=0; i<gridData.length; i++) {
                        if (this.data[i][1] == null) {
                            continue;
                        }
                        points = [];
                        var base = gridData[i][0] + this._barNudge;
                        var ystart;
                    
                        if (this._stack && this._prevGridData.length) {
                            ystart = getStart(this.index, i, this._plotData[i][1], plot, 'y');
                        }
                        else {
                            if (this.fillToZero) {
                                ystart = this._yaxis.series_u2p(0);
                            }
                            else {
                                ystart = ctx.canvas.height;
                            }
                        }
                    
                        points.push([base-this.barWidth/2, ystart]);
                        points.push([base-this.barWidth/2, gridData[i][1]]);
                        points.push([base+this.barWidth/2, gridData[i][1]]);
                        points.push([base+this.barWidth/2, ystart]);
                        this.renderer.shadowRenderer.draw(ctx, points, opts);
                    }
                }
            
                else if (this.barDirection == 'horizontal'){
                    for (var i=0; i<gridData.length; i++) {
                        if (this.data[i][0] == null) {
                            continue;
                        }
                        points = [];
                        var base = gridData[i][1] - this._barNudge;
                        var xstart;
                    
                        if (this._stack && this._prevGridData.length) {
                            xstart = getStart(this.index, i, this._plotData[i][0], plot, 'x');
                        }
                        else {
                            if (this.fillToZero) {
                                xstart = this._xaxis.series_u2p(0);
                            }
                            else {
                                xstart = 0;
                            }
                        }
                    
                        points.push([xstart, base+this.barWidth/2]);
                        points.push([gridData[i][0], base+this.barWidth/2]);
                        points.push([gridData[i][0], base-this.barWidth/2]);
                        points.push([xstart, base-this.barWidth/2]);
                        this.renderer.shadowRenderer.draw(ctx, points, opts);
                    }  
                }
            }   
            
        }
    };
    
    function postInit(target, data, options) {
        for (var i=0; i<this.series.length; i++) {
            if (this.series[i].renderer.constructor == $.jqplot.BarRenderer) {
                // don't allow mouseover and mousedown at same time.
                if (this.series[i].highlightMouseOver) {
                    this.series[i].highlightMouseDown = false;
                }
            }
        }
    }
    
    // called within context of plot
    // create a canvas which we can draw on.
    // insert it before the eventCanvas, so eventCanvas will still capture events.
    function postPlotDraw() {
        // Memory Leaks patch    
        if (this.plugins.barRenderer && this.plugins.barRenderer.highlightCanvas) {

            this.plugins.barRenderer.highlightCanvas.resetCanvas();
            this.plugins.barRenderer.highlightCanvas = null;
        }
         
        this.plugins.barRenderer = {highlightedSeriesIndex:null};
        this.plugins.barRenderer.highlightCanvas = new $.jqplot.GenericCanvas();
        
        this.eventCanvas._elem.before(this.plugins.barRenderer.highlightCanvas.createElement(this._gridPadding, 'jqplot-barRenderer-highlight-canvas', this._plotDimensions, this));
        this.plugins.barRenderer.highlightCanvas.setContext();
        this.eventCanvas._elem.bind('mouseleave', {plot:this}, function (ev) { unhighlight(ev.data.plot); });
    }   
    
    function highlight (plot, sidx, pidx, points) {
        var s = plot.series[sidx];
        var canvas = plot.plugins.barRenderer.highlightCanvas;
        canvas._ctx.clearRect(0,0,canvas._ctx.canvas.width, canvas._ctx.canvas.height);
        s._highlightedPoint = pidx;
        plot.plugins.barRenderer.highlightedSeriesIndex = sidx;
        var opts = {fillStyle: s.highlightColors[pidx]};
        s.renderer.shapeRenderer.draw(canvas._ctx, points, opts);
        canvas = null;
    }
    
    function unhighlight (plot) {
        var canvas = plot.plugins.barRenderer.highlightCanvas;
        canvas._ctx.clearRect(0,0, canvas._ctx.canvas.width, canvas._ctx.canvas.height);
        for (var i=0; i<plot.series.length; i++) {
            plot.series[i]._highlightedPoint = null;
        }
        plot.plugins.barRenderer.highlightedSeriesIndex = null;
        plot.target.trigger('jqplotDataUnhighlight');
        canvas =  null;
    }
    
    
    function handleMove(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            var evt1 = jQuery.Event('jqplotDataMouseOver');
            evt1.pageX = ev.pageX;
            evt1.pageY = ev.pageY;
            plot.target.trigger(evt1, ins);
            if (plot.series[ins[0]].show && plot.series[ins[0]].highlightMouseOver &&
                !(ins[0] == plot.plugins.barRenderer.highlightedSeriesIndex && ins[1] == plot.series[ins[0]]._highlightedPoint)) {
                var evt = jQuery.Event('jqplotDataHighlight');
                evt.which = ev.which;
                evt.pageX = ev.pageX;
                evt.pageY = ev.pageY;
                plot.target.trigger(evt, ins);
                highlight (plot, neighbor.seriesIndex, neighbor.pointIndex, neighbor.points);
            }
        }
        else if (neighbor == null) {
            unhighlight (plot);
        }
    }
    
    function handleMouseDown(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            if (plot.series[ins[0]].highlightMouseDown && !(ins[0] == plot.plugins.barRenderer.highlightedSeriesIndex && ins[1] == plot.series[ins[0]]._highlightedPoint)) {
                var evt = jQuery.Event('jqplotDataHighlight');
                evt.which = ev.which;
                evt.pageX = ev.pageX;
                evt.pageY = ev.pageY;
                plot.target.trigger(evt, ins);
                highlight (plot, neighbor.seriesIndex, neighbor.pointIndex, neighbor.points);
            }
        }
        else if (neighbor == null) {
            unhighlight (plot);
        }
    }
    
    function handleMouseUp(ev, gridpos, datapos, neighbor, plot) {
        var idx = plot.plugins.barRenderer.highlightedSeriesIndex;
        if (idx != null && plot.series[idx].highlightMouseDown) {
            unhighlight(plot);
        }
    }
    
    function handleClick(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            var evt = jQuery.Event('jqplotDataClick');
            evt.which = ev.which;
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            plot.target.trigger(evt, ins);
        }
    }
    
    function handleRightClick(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            var idx = plot.plugins.barRenderer.highlightedSeriesIndex;
            if (idx != null && plot.series[idx].highlightMouseDown) {
                unhighlight(plot);
            }
            var evt = jQuery.Event('jqplotDataRightClick');
            evt.which = ev.which;
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            plot.target.trigger(evt, ins);
        }
    }
    
    
})(jQuery);

/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.9
 * Revision: d96a669
 *
 * Copyright (c) 2009-2016 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function($) {
    
    /**
     * Class: $.jqplot.PointLabels
     * Plugin for putting labels at the data points.
     * 
     * To use this plugin, include the js
     * file in your source:
     * 
     * > <script type="text/javascript" src="plugins/jqplot.pointLabels.js"></script>
     * 
     * By default, the last value in the data ponit array in the data series is used
     * for the label.  For most series renderers, extra data can be added to the 
     * data point arrays and the last value will be used as the label.
     * 
     * For instance, 
     * this series:
     * 
     * > [[1,4], [3,5], [7,2]]
     * 
     * Would, by default, use the y values in the labels.
     * Extra data can be added to the series like so:
     * 
     * > [[1,4,'mid'], [3 5,'hi'], [7,2,'low']]
     * 
     * And now the point labels would be 'mid', 'low', and 'hi'.
     * 
     * Options to the point labels and a custom labels array can be passed into the
     * "pointLabels" option on the series option like so:
     * 
     * > series:[{pointLabels:{
     * >    labels:['mid', 'hi', 'low'],
     * >    location:'se',
     * >    ypadding: 12
     * >    }
     * > }]
     * 
     * A custom labels array in the options takes precendence over any labels
     * in the series data.  If you have a custom labels array in the options,
     * but still want to use values from the series array as labels, set the
     * "labelsFromSeries" option to true.
     * 
     * By default, html entities (<, >, etc.) are escaped in point labels.  
     * If you want to include actual html markup in the labels, 
     * set the "escapeHTML" option to false.
     * 
     */
    $.jqplot.PointLabels = function(options) {
        // Group: Properties
        //
        // prop: show
        // show the labels or not.
        this.show = $.jqplot.config.enablePlugins;
        // prop: location
        // compass location where to position the label around the point.
        // 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'
        this.location = 'n';
        // prop: labelsFromSeries
        // true to use labels within data point arrays.
        this.labelsFromSeries = false;
        // prop: seriesLabelIndex
        // array index for location of labels within data point arrays.
        // if null, will use the last element of the data point array.
        this.seriesLabelIndex = null;
        // prop: labels
        // array of arrays of labels, one array for each series.
        this.labels = [];
        // actual labels that will get displayed.
        // needed to preserve user specified labels in labels array.
        this._labels = [];
        // prop: stackedValue
        // true to display value as stacked in a stacked plot.
        // no effect if labels is specified.
        this.stackedValue = false;
        // prop: ypadding
        // vertical padding in pixels between point and label
        this.ypadding = 6;
        // prop: xpadding
        // horizontal padding in pixels between point and label
        this.xpadding = 6;
        // prop: escapeHTML
        // true to escape html entities in the labels.
        // If you want to include markup in the labels, set to false.
        this.escapeHTML = true;
        // prop: edgeTolerance
        // Number of pixels that the label must be away from an axis
        // boundary in order to be drawn.  Negative values will allow overlap
        // with the grid boundaries.
        this.edgeTolerance = -5;
        // prop: formatter
        // A class of a formatter for the tick text.  sprintf by default.
        this.formatter = $.jqplot.DefaultTickFormatter;
        // prop: formatString
        // string passed to the formatter.
        this.formatString = '';
        // prop: hideZeros
        // true to not show a label for a value which is 0.
        this.hideZeros = false;
        this._elems = [];
        
        $.extend(true, this, options);
    };
    
    var locations = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
    var locationIndicies = {'nw':0, 'n':1, 'ne':2, 'e':3, 'se':4, 's':5, 'sw':6, 'w':7};
    var oppositeLocations = ['se', 's', 'sw', 'w', 'nw', 'n', 'ne', 'e'];
    
    // called with scope of a series
    $.jqplot.PointLabels.init = function (target, data, seriesDefaults, opts, plot){
        var options = $.extend(true, {}, seriesDefaults, opts);
        options.pointLabels = options.pointLabels || {};
        if (this.renderer.constructor === $.jqplot.BarRenderer && this.barDirection === 'horizontal' && !options.pointLabels.location) {
            options.pointLabels.location = 'e';
        }
        // add a pointLabels attribute to the series plugins
        this.plugins.pointLabels = new $.jqplot.PointLabels(options.pointLabels);
        this.plugins.pointLabels.setLabels.call(this);
    };
    
    // called with scope of series
    $.jqplot.PointLabels.prototype.setLabels = function() {   
        var p = this.plugins.pointLabels; 
        var labelIdx;
        if (p.seriesLabelIndex != null) {
            labelIdx = p.seriesLabelIndex;
        }
        else if (this.renderer.constructor === $.jqplot.BarRenderer && this.barDirection === 'horizontal') {
           labelIdx = (this._plotData[0].length < 3) ? 0 : this._plotData[0].length -1;
        }
        else {
            labelIdx = (this._plotData.length === 0) ? 0 : this._plotData[0].length -1;
        }
        p._labels = [];
        if (p.labels.length === 0 || p.labelsFromSeries) {    
            if (p.stackedValue) {
                if (this._plotData.length && this._plotData[0].length){
                    // var idx = p.seriesLabelIndex || this._plotData[0].length -1;
                    for (var i=0; i<this._plotData.length; i++) {
                        p._labels.push(this._plotData[i][labelIdx]);
                    }
                }
            }
            else {
                // var d = this._plotData;
                var d = this.data;
                if (this.renderer.constructor === $.jqplot.BarRenderer && this.waterfall) {
                    d = this._data;
                }
                if (d.length && d[0].length) {
                    // var idx = p.seriesLabelIndex || d[0].length -1;
                    for (var i=0; i<d.length; i++) {
                        p._labels.push(d[i][labelIdx]);
                    }
                }
                d = null;
            }
        }
        else if (p.labels.length){
            p._labels = p.labels;
        }
    };
    
    $.jqplot.PointLabels.prototype.xOffset = function(elem, location, padding) {
        location = location || this.location;
        padding = padding || this.xpadding;
        var offset;
        
        switch (location) {
            case 'nw':
                offset = -elem.outerWidth(true) - this.xpadding;
                break;
            case 'n':
                offset = -elem.outerWidth(true)/2;
                break;
            case 'ne':
                offset =  this.xpadding;
                break;
            case 'e':
                offset = this.xpadding;
                break;
            case 'se':
                offset = this.xpadding;
                break;
            case 's':
                offset = -elem.outerWidth(true)/2;
                break;
            case 'sw':
                offset = -elem.outerWidth(true) - this.xpadding;
                break;
            case 'w':
                offset = -elem.outerWidth(true) - this.xpadding;
                break;
            default: // same as 'nw'
                offset = -elem.outerWidth(true) - this.xpadding;
                break;
        }
        return offset; 
    };
    
    $.jqplot.PointLabels.prototype.yOffset = function(elem, location, padding) {
        location = location || this.location;
        padding = padding || this.xpadding;
        var offset;
        
        switch (location) {
            case 'nw':
                offset = -elem.outerHeight(true) - this.ypadding;
                break;
            case 'n':
                offset = -elem.outerHeight(true) - this.ypadding;
                break;
            case 'ne':
                offset = -elem.outerHeight(true) - this.ypadding;
                break;
            case 'e':
                offset = -elem.outerHeight(true)/2;
                break;
            case 'se':
                offset = this.ypadding;
                break;
            case 's':
                offset = this.ypadding;
                break;
            case 'sw':
                offset = this.ypadding;
                break;
            case 'w':
                offset = -elem.outerHeight(true)/2;
                break;
            default: // same as 'nw'
                offset = -elem.outerHeight(true) - this.ypadding;
                break;
        }
        return offset; 
    };
    
    // called with scope of series
    $.jqplot.PointLabels.draw = function (sctx, options, plot) {
        var p = this.plugins.pointLabels;
        // set labels again in case they have changed.
        p.setLabels.call(this);
        // remove any previous labels
        for (var i=0; i<p._elems.length; i++) {
            // Memory Leaks patch
            // p._elems[i].remove();
            if(p._elems[i]) {
                p._elems[i].emptyForce();
            }
        }
        p._elems.splice(0, p._elems.length);

        if (p.show) {
            var ax = '_'+this._stackAxis+'axis';
        
            if (!p.formatString) {
                p.formatString = this[ax]._ticks[0].formatString;
                p.formatter = this[ax]._ticks[0].formatter;
            }
        
            var pd = this._plotData;
            var ppd = this._prevPlotData;
            var xax = this._xaxis;
            var yax = this._yaxis;
            var elem, helem;

            for (var i=0, l=p._labels.length; i < l; i++) {
                var label = p._labels[i];
                
                if (label == null || (p.hideZeros && parseFloat(label) == 0)) {
                    continue;
                }
                
                label = p.formatter(p.formatString, label);

                helem = document.createElement('div');
                p._elems[i] = $(helem);

                elem = p._elems[i];


                elem.addClass('jqplot-point-label jqplot-series-'+this.index+' jqplot-point-'+i);
                elem.css('position', 'absolute');
                elem.insertAfter(sctx.canvas);

                if (p.escapeHTML) {
                    elem.text(label);
                }
                else {
                    elem.html(label);
                }
                var location = p.location;
                if ((this.fillToZero && pd[i][1] < 0) || (this.fillToZero && this._type === 'bar' && this.barDirection === 'horizontal' && pd[i][0] < 0) || (this.waterfall && parseInt(label, 10)) < 0) {
                    location = oppositeLocations[locationIndicies[location]];
                }


                var ell = xax.u2p(pd[i][0]) + p.xOffset(elem, location);
                var elt = yax.u2p(pd[i][1]) + p.yOffset(elem, location);

                // we have stacked chart but are not showing stacked values,
                // place labels in center.
                if (this._stack && !p.stackedValue) {
                    if (this.barDirection === "vertical") {
                        elt = (this._barPoints[i][0][1] + this._barPoints[i][1][1]) / 2 + plot._gridPadding.top - 0.5 * elem.outerHeight(true);
                    }
                    else {
                        ell = (this._barPoints[i][2][0] + this._barPoints[i][0][0]) / 2 + plot._gridPadding.left - 0.5 * elem.outerWidth(true);
                    }
                }

                if (this.renderer.constructor == $.jqplot.BarRenderer) {
                    if (this.barDirection == "vertical") {
                        ell += this._barNudge;
                    }
                    else {
                        elt -= this._barNudge;
                    }
                }
                elem.css('left', ell);
                elem.css('top', elt);
                var elr = ell + elem.width();
                var elb = elt + elem.height();
                var et = p.edgeTolerance;
                var scl = $(sctx.canvas).position().left;
                var sct = $(sctx.canvas).position().top;
                var scr = sctx.canvas.width + scl;
                var scb = sctx.canvas.height + sct;
                // if label is outside of allowed area, remove it
                if (ell - et < scl || elt - et < sct || elr + et > scr || elb + et > scb) {
                    elem.remove();
                }

                elem = null;
                helem = null;
            }

            // finally, animate them if the series is animated
            // if (this.renderer.animation && this.renderer.animation._supported && this.renderer.animation.show && plot._drawCount < 2) {
            //     var sel = '.jqplot-point-label.jqplot-series-'+this.index;
            //     $(sel).hide();
            //     $(sel).fadeIn(1000);
            // }

        }
    };
    
    $.jqplot.postSeriesInitHooks.push($.jqplot.PointLabels.init);
    $.jqplot.postDrawSeriesHooks.push($.jqplot.PointLabels.draw);
})(jQuery);

/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.9
 * Revision: d96a669
 *
 * Copyright (c) 2009-2016 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function($) {
    /**
     * Class: $.jqplot.PieRenderer
     * Plugin renderer to draw a pie chart.
     * x values, if present, will be used as slice labels.
     * y values give slice size.
     * 
     * To use this renderer, you need to include the 
     * pie renderer plugin, for example:
     * 
     * > <script type="text/javascript" src="plugins/jqplot.pieRenderer.js"></script>
     * 
     * Properties described here are passed into the $.jqplot function
     * as options on the series renderer.  For example:
     * 
     * > plot2 = $.jqplot('chart2', [s1, s2], {
     * >     seriesDefaults: {
     * >         renderer:$.jqplot.PieRenderer,
     * >         rendererOptions:{
     * >              sliceMargin: 2,
     * >              startAngle: -90
     * >          }
     * >      }
     * > });
     * 
     * A pie plot will trigger events on the plot target
     * according to user interaction.  All events return the event object,
     * the series index, the point (slice) index, and the point data for 
     * the appropriate slice.
     * 
     * 'jqplotDataMouseOver' - triggered when user mouseing over a slice.
     * 'jqplotDataHighlight' - triggered the first time user mouses over a slice,
     *   if highlighting is enabled.
     * 'jqplotDataUnhighlight' - triggered when a user moves the mouse out of
     *   a highlighted slice.
     * 'jqplotLegendHighlight' - triggered the first time user mouses over a legend,
     *   if highlighting is enabled.
     * 'jqplotLegendUnhighlight' - triggered when a user moves the mouse out of
     *   a highlighted legend.
     * 'jqplotDataClick' - triggered when the user clicks on a slice.
     * 'jqplotDataRightClick' - tiggered when the user right clicks on a slice if
     * the "captureRightClick" option is set to true on the plot.
     */
    $.jqplot.PieRenderer = function(){
        $.jqplot.LineRenderer.call(this);
    };
    
    $.jqplot.PieRenderer.prototype = new $.jqplot.LineRenderer();
    $.jqplot.PieRenderer.prototype.constructor = $.jqplot.PieRenderer;
    
    // called with scope of a series
    $.jqplot.PieRenderer.prototype.init = function(options, plot) {
        // Group: Properties
        //
        // prop: diameter
        // Outer diameter of the pie, auto computed by default
        this.diameter = null;
        // prop: padding
        // padding between the pie and plot edges, legend, etc.
        this.padding = 20;
        // prop: sliceMargin
        // angular spacing between pie slices in degrees.
        this.sliceMargin = 0;
        // prop: fill
        // true or false, whether to fil the slices.
        this.fill = true;
        // prop: shadowOffset
        // offset of the shadow from the slice and offset of 
        // each succesive stroke of the shadow from the last.
        this.shadowOffset = 2;
        // prop: shadowAlpha
        // transparency of the shadow (0 = transparent, 1 = opaque)
        this.shadowAlpha = 0.07;
        // prop: shadowDepth
        // number of strokes to apply to the shadow, 
        // each stroke offset shadowOffset from the last.
        this.shadowDepth = 5;
        // prop: highlightMouseOver
        // True to highlight slice when moused over.
        // This must be false to enable highlightMouseDown to highlight when clicking on a slice.
        this.highlightMouseOver = true;
        // prop: highlightMouseDown
        // True to highlight when a mouse button is pressed over a slice.
        // This will be disabled if highlightMouseOver is true.
        this.highlightMouseDown = false;
        // prop: highlightColors
        // an array of colors to use when highlighting a slice.
        this.highlightColors = [];
        // prop: dataLabels
        // Either 'label', 'value', 'percent' or an array of labels to place on the pie slices.
        // Defaults to percentage of each pie slice.
        this.dataLabels = 'percent';
        // prop: showDataLabels
        // true to show data labels on slices.
        this.showDataLabels = false;
        // prop: dataLabelFormatString
        // Format string for data labels.  If none, '%s' is used for "label" and for arrays, '%d' for value and '%d%%' for percentage.
        this.dataLabelFormatString = null;
        // prop: dataLabelThreshold
        // Threshhold in percentage (0-100) of pie area, below which no label will be displayed.
        // This applies to all label types, not just to percentage labels.
        this.dataLabelThreshold = 3;
        // prop: dataLabelPositionFactor
        // A Multiplier (0-1) of the pie radius which controls position of label on slice.
        // Increasing will slide label toward edge of pie, decreasing will slide label toward center of pie.
        this.dataLabelPositionFactor = 0.52;
        // prop: dataLabelNudge
        // Number of pixels to slide the label away from (+) or toward (-) the center of the pie.
        this.dataLabelNudge = 2;
        // prop: dataLabelCenterOn
        // True to center the data label at its position.
        // False to set the inside facing edge of the label at its position.
        this.dataLabelCenterOn = true;
        // prop: startAngle
        // Angle to start drawing pie in degrees.  
        // According to orientation of canvas coordinate system:
        // 0 = on the positive x axis
        // -90 = on the positive y axis.
        // 90 = on the negaive y axis.
        // 180 or - 180 = on the negative x axis.
        this.startAngle = 0;
        this.tickRenderer = $.jqplot.PieTickRenderer;
        // prop: showSlice
        // Array for whether the pie chart slice for a data element should be displayed.
        // Containsg true or false for each data element.  If not specified, defaults to true.
        this.showSlice = [];
        // Used as check for conditions where pie shouldn't be drawn.
        this._drawData = true;
        this._type = 'pie';
        
        // if user has passed in highlightMouseDown option and not set highlightMouseOver, disable highlightMouseOver
        if (options.highlightMouseDown && options.highlightMouseOver == null) {
            options.highlightMouseOver = false;
        }
        
        $.extend(true, this, options);

        if (this.sliceMargin < 0) {
            this.sliceMargin = 0;
        }

        this._diameter = null;
        this._radius = null;
        // array of [start,end] angles arrays, one for each slice.  In radians.
        this._sliceAngles = [];
        // index of the currenty highlighted point, if any
        this._highlightedPoint = null;
        
        // set highlight colors if none provided
        if (this.highlightColors.length == 0) {
            for (var i=0; i<this.seriesColors.length; i++){
                var rgba = $.jqplot.getColorComponents(this.seriesColors[i]);
                var newrgb = [rgba[0], rgba[1], rgba[2]];
                var sum = newrgb[0] + newrgb[1] + newrgb[2];
                for (var j=0; j<3; j++) {
                    // when darkening, lowest color component can be is 60.
                    newrgb[j] = (sum > 570) ?  newrgb[j] * 0.8 : newrgb[j] + 0.3 * (255 - newrgb[j]);
                    newrgb[j] = parseInt(newrgb[j], 10);
                }
                this.highlightColors.push('rgb('+newrgb[0]+','+newrgb[1]+','+newrgb[2]+')');
            }
        }
        
        this.highlightColorGenerator = new $.jqplot.ColorGenerator(this.highlightColors);
        
        plot.postParseOptionsHooks.addOnce(postParseOptions);
        plot.postInitHooks.addOnce(postInit);
        plot.eventListenerHooks.addOnce('jqplotMouseMove', handleMove);
        plot.eventListenerHooks.addOnce('jqplotMouseDown', handleMouseDown);
        plot.eventListenerHooks.addOnce('jqplotMouseUp', handleMouseUp);
        plot.eventListenerHooks.addOnce('jqplotClick', handleClick);
        plot.eventListenerHooks.addOnce('jqplotRightClick', handleRightClick);
        plot.postDrawHooks.addOnce(postPlotDraw);
    };
    
    $.jqplot.PieRenderer.prototype.setGridData = function(plot) {
        // set gridData property.  This will hold angle in radians of each data point.
        var stack = [];
        var td = [];
        var sa = this.startAngle/180*Math.PI;
        var tot = 0;
        // don't know if we have any valid data yet, so set plot to not draw.
        this._drawData = false;
        for (var i=0; i<this.data.length; i++){
            if (this.data[i][1] != 0) {
                // we have data, O.K. to draw.
                this._drawData = true;
                if (this.showSlice[i] === undefined) {
                  this.showSlice[i] = true;
                }
            }
            stack.push(this.data[i][1]);
            td.push([this.data[i][0]]);
            if (i>0) {
                stack[i] += stack[i-1];
            }
            tot += this.data[i][1];
        }
        var fact = Math.PI*2/stack[stack.length - 1];
        
        for (var i=0; i<stack.length; i++) {
            td[i][1] = stack[i] * fact;
            td[i][2] = this.data[i][1]/tot;
        }
        this.gridData = td;
    };
    
    $.jqplot.PieRenderer.prototype.makeGridData = function(data, plot) {
        var stack = [];
        var td = [];
        var tot = 0;
        var sa = this.startAngle/180*Math.PI;
        // don't know if we have any valid data yet, so set plot to not draw.
        this._drawData = false;
        for (var i=0; i<data.length; i++){
            if (this.data[i][1] != 0) {
                // we have data, O.K. to draw.
                this._drawData = true;
            }
            stack.push(data[i][1]);
            td.push([data[i][0]]);
            if (i>0) {
                stack[i] += stack[i-1];
            }
            tot += data[i][1];
        }
        var fact = Math.PI*2/stack[stack.length - 1];
        
        for (var i=0; i<stack.length; i++) {
            td[i][1] = stack[i] * fact;
            td[i][2] = data[i][1]/tot;
        }
        return td;
    };

    function calcRadiusAdjustment(ang) {
        return Math.sin((ang - (ang-Math.PI) / 8 / Math.PI )/2.0);
    }

    function calcRPrime(ang1, ang2, sliceMargin, fill, lineWidth) {
        var rprime = 0;
        var ang = ang2 - ang1;
        var absang = Math.abs(ang);
        var sm = sliceMargin;
        if (fill == false) {
            sm += lineWidth;
        }

        if (sm > 0 && absang > 0.01 && absang < 6.282) {
            rprime = parseFloat(sm) / 2.0 / calcRadiusAdjustment(ang);
        }

        return rprime;
    }
    
    $.jqplot.PieRenderer.prototype.drawSlice = function (ctx, ang1, ang2, color, isShadow) {
        if (this._drawData) {
            var r = this._radius;
            var fill = this.fill;
            var lineWidth = this.lineWidth;
            var sm = this.sliceMargin;
            if (this.fill == false) {
                sm += this.lineWidth;
            }
            ctx.save();
            ctx.translate(this._center[0], this._center[1]);
            
            var rprime = calcRPrime(ang1, ang2, this.sliceMargin, this.fill, this.lineWidth);

            var transx = rprime * Math.cos((ang1 + ang2) / 2.0);
            var transy = rprime * Math.sin((ang1 + ang2) / 2.0);

            if ((ang2 - ang1) <= Math.PI) {
                r -= rprime;  
            }
            else {
                r += rprime;
            }

            ctx.translate(transx, transy);
            
            if (isShadow) {
                for (var i=0, l=this.shadowDepth; i<l; i++) {
                    ctx.save();
                    ctx.translate(this.shadowOffset*Math.cos(this.shadowAngle/180*Math.PI), this.shadowOffset*Math.sin(this.shadowAngle/180*Math.PI));
                    doDraw(r);
                }
                for (var i=0, l=this.shadowDepth; i<l; i++) {
                    ctx.restore();
                }
            }
    
            else {
                doDraw(r);
            }
            ctx.restore();
        }
    
        function doDraw (rad) {
            // Fix for IE and Chrome that can't seem to draw circles correctly.
            // ang2 should always be <= 2 pi since that is the way the data is converted.
            // 2Pi = 6.2831853, Pi = 3.1415927
             if (ang2 > 6.282 + this.startAngle) {
                ang2 = 6.282 + this.startAngle;
                if (ang1 > ang2) {
                    ang1 = 6.281 + this.startAngle;
                }
            }
            // Fix for IE, where it can't seem to handle 0 degree angles.  Also avoids
            // ugly line on unfilled pies.
            if (ang1 >= ang2) {
                return;
            }            
        
            ctx.beginPath();  
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.arc(0, 0, rad, ang1, ang2, false);
            ctx.lineTo(0,0);
            ctx.closePath();
        
            if (fill) {
                ctx.fill();
            }
            else {
                ctx.stroke();
            }
        }
    };
    
    // called with scope of series
    $.jqplot.PieRenderer.prototype.draw = function (ctx, gd, options, plot) {
        var i;
        var opts = (options != undefined) ? options : {};
        // offset and direction of offset due to legend placement
        var offx = 0;
        var offy = 0;
        var trans = 1;
        var colorGenerator = new $.jqplot.ColorGenerator(this.seriesColors);
        var sliceColor;

        if (options.legendInfo && options.legendInfo.placement == 'insideGrid') {
            var li = options.legendInfo;
            switch (li.location) {
                case 'nw':
                    offx = li.width + li.xoffset;
                    break;
                case 'w':
                    offx = li.width + li.xoffset;
                    break;
                case 'sw':
                    offx = li.width + li.xoffset;
                    break;
                case 'ne':
                    offx = li.width + li.xoffset;
                    trans = -1;
                    break;
                case 'e':
                    offx = li.width + li.xoffset;
                    trans = -1;
                    break;
                case 'se':
                    offx = li.width + li.xoffset;
                    trans = -1;
                    break;
                case 'n':
                    offy = li.height + li.yoffset;
                    break;
                case 's':
                    offy = li.height + li.yoffset;
                    trans = -1;
                    break;
                default:
                    break;
            }
        }
        
        var shadow = (opts.shadow != undefined) ? opts.shadow : this.shadow;
        var fill = (opts.fill != undefined) ? opts.fill : this.fill;
        
        //see http://stackoverflow.com/questions/20221461/hidpi-retina-plot-drawing
        var cw = parseInt(ctx.canvas.style.width);
        var ch = parseInt(ctx.canvas.style.height);
        //
        
        var w = cw - offx - 2 * this.padding;
        var h = ch - offy - 2 * this.padding;
        var mindim = Math.min(w,h);
        var d = mindim;
        
        // Fixes issue #272.  Thanks hugwijst!
        // reset slice angles array.
        this._sliceAngles = [];

        var sm = this.sliceMargin;
        if (this.fill == false) {
            sm += this.lineWidth;
        }
        
        var rprime;
        var maxrprime = 0;

        var ang, ang1, ang2, shadowColor;
        var sa = this.startAngle / 180 * Math.PI;

        // have to pre-draw shadows, so loop throgh here and calculate some values also.
        for (var i=0, l=gd.length; i<l; i++) {
            ang1 = (i == 0) ? sa : gd[i-1][1] + sa;
            ang2 = gd[i][1] + sa;

            this._sliceAngles.push([ang1, ang2]);

            rprime = calcRPrime(ang1, ang2, this.sliceMargin, this.fill, this.lineWidth);

            if (Math.abs(ang2-ang1) > Math.PI) {
                maxrprime = Math.max(rprime, maxrprime);  
            }
        }

        if (this.diameter != null && this.diameter > 0) {
            this._diameter = this.diameter - 2*maxrprime;
        }
        else {
            this._diameter = d - 2*maxrprime;
        }

        // Need to check for undersized pie.  This can happen if
        // plot area too small and legend is too big.
        if (this._diameter < 6) {
            $.jqplot.log('Diameter of pie too small, not rendering.');
            return;
        }

        var r = this._radius = this._diameter/2;

        this._center = [(cw - trans * offx)/2 + trans * offx + maxrprime * Math.cos(sa), (ch - trans*offy)/2 + trans * offy + maxrprime * Math.sin(sa)];

        if (this.shadow) {
            for (var i=0, l=gd.length; i<l; i++) {
                shadowColor = 'rgba(0,0,0,'+this.shadowAlpha+')';
                this.renderer.drawSlice.call (this, ctx, this._sliceAngles[i][0], this._sliceAngles[i][1], shadowColor, true);
            }
        }
        
        for (var i=0; i<gd.length; i++) {

            sliceColor = colorGenerator.next();

            if (this.showSlice[i]) {
                this.renderer.drawSlice.call (this, ctx, this._sliceAngles[i][0], this._sliceAngles[i][1], sliceColor, false);
            
                if (this.showDataLabels && gd[i][2]*100 >= this.dataLabelThreshold) {
                    var fstr, avgang = (this._sliceAngles[i][0] + this._sliceAngles[i][1])/2, label;
                
                    if (this.dataLabels == 'label') {
                        fstr = this.dataLabelFormatString || '%s';
                        label = $.jqplot.sprintf(fstr, gd[i][0]);
                    }
                    else if (this.dataLabels == 'value') {
                        fstr = this.dataLabelFormatString || '%d';
                        label = $.jqplot.sprintf(fstr, this.data[i][1]);
                    }
                    else if (this.dataLabels == 'percent') {
                        fstr = this.dataLabelFormatString || '%d%%';
                        label = $.jqplot.sprintf(fstr, gd[i][2]*100);
                    }
                    else if (this.dataLabels.constructor == Array) {
                        fstr = this.dataLabelFormatString || '%s';
                        label = $.jqplot.sprintf(fstr, this.dataLabels[i]);
                    }
                
                    var fact = (this._radius ) * this.dataLabelPositionFactor + this.sliceMargin + this.dataLabelNudge;
                
                    var x = this._center[0] + Math.cos(avgang) * fact + this.canvas._offsets.left;
                    var y = this._center[1] + Math.sin(avgang) * fact + this.canvas._offsets.top;
                
                    var labelelem = $('<div class="jqplot-pie-series jqplot-data-label" style="position:absolute;">' + label + '</div>').insertBefore(plot.eventCanvas._elem);
                    if (this.dataLabelCenterOn) {
                        x -= labelelem.width()/2;
                        y -= labelelem.height()/2;
                    }
                    else {
                        x -= labelelem.width() * Math.sin(avgang/2);
                        y -= labelelem.height()/2;
                    }
                    x = Math.round(x);
                    y = Math.round(y);
                    labelelem.css({left: x, top: y});
                }
            }
        }            
    };
    
    $.jqplot.PieAxisRenderer = function() {
        $.jqplot.LinearAxisRenderer.call(this);
    };
    
    $.jqplot.PieAxisRenderer.prototype = new $.jqplot.LinearAxisRenderer();
    $.jqplot.PieAxisRenderer.prototype.constructor = $.jqplot.PieAxisRenderer;
        
    
    // There are no traditional axes on a pie chart.  We just need to provide
    // dummy objects with properties so the plot will render.
    // called with scope of axis object.
    $.jqplot.PieAxisRenderer.prototype.init = function(options){
        //
        this.tickRenderer = $.jqplot.PieTickRenderer;
        $.extend(true, this, options);
        // I don't think I'm going to need _dataBounds here.
        // have to go Axis scaling in a way to fit chart onto plot area
        // and provide u2p and p2u functionality for mouse cursor, etc.
        // for convienence set _dataBounds to 0 and 100 and
        // set min/max to 0 and 100.
        this._dataBounds = {min:0, max:100};
        this.min = 0;
        this.max = 100;
        this.showTicks = false;
        this.ticks = [];
        this.showMark = false;
        this.show = false; 
    };
    
    
    
    
    $.jqplot.PieLegendRenderer = function(){
        $.jqplot.TableLegendRenderer.call(this);
    };
    
    $.jqplot.PieLegendRenderer.prototype = new $.jqplot.TableLegendRenderer();
    $.jqplot.PieLegendRenderer.prototype.constructor = $.jqplot.PieLegendRenderer;
    
    /**
     * Class: $.jqplot.PieLegendRenderer
     * Legend Renderer specific to pie plots.  Set by default
     * when user creates a pie plot.
     */
    $.jqplot.PieLegendRenderer.prototype.init = function(options) {
        // Group: Properties
        //
        // prop: numberRows
        // Maximum number of rows in the legend.  0 or null for unlimited.
        this.numberRows = null;
        // prop: numberColumns
        // Maximum number of columns in the legend.  0 or null for unlimited.
        this.numberColumns = null;
        // prop: width
        // Fixed with of legend.  0 or null for auto size
        this.width = null;
        $.extend(true, this, options);
    };
    
    // called with context of legend
    $.jqplot.PieLegendRenderer.prototype.draw = function() {
        var legend = this;
        if (this.show) {
            var series = this._series;


            this._elem = $(document.createElement('table'));
            this._elem.addClass('jqplot-table-legend');

            var ss = {position:'absolute'};
            if (this.background) {
                ss['background'] = this.background;
            }
            if (this.border) {
                ss['border'] = this.border;
            }
            if (this.fontSize) {
                ss['fontSize'] = this.fontSize;
            }
            if (this.fontFamily) {
                ss['fontFamily'] = this.fontFamily;
            }
            if (this.textColor) {
                ss['textColor'] = this.textColor;
            }
            if (this.marginTop != null) {
                ss['marginTop'] = this.marginTop;
            }
            if (this.marginBottom != null) {
                ss['marginBottom'] = this.marginBottom;
            }
            if (this.marginLeft != null) {
                ss['marginLeft'] = this.marginLeft;
            }
            if (this.marginRight != null) {
                ss['marginRight'] = this.marginRight;
            }

            this._elem.css(ss);

            // Pie charts legends don't go by number of series, but by number of data points
            // in the series.  Refactor things here for that.
            
            var pad = false, 
                reverse = false,
                nr, 
                nc;
            var s = series[0];
            var colorGenerator = new $.jqplot.ColorGenerator(s.seriesColors);
            
            if (s.show) {
                var pd = s.data;
                if (this.numberRows) {
                    nr = this.numberRows;
                    if (!this.numberColumns){
                        nc = Math.ceil(pd.length/nr);
                    }
                    else{
                        nc = this.numberColumns;
                    }
                }
                else if (this.numberColumns) {
                    nc = this.numberColumns;
                    nr = Math.ceil(pd.length/this.numberColumns);
                }
                else {
                    nr = pd.length;
                    nc = 1;
                }
                
                var i, j;
                var tr, td1, td2; 
                var lt, tt, rs, color;
                var idx = 0; 
                var div0, div1;   
                
                for (i=0; i<nr; i++) {
                    tr = $(document.createElement('tr'));
                    tr.addClass('jqplot-table-legend');
                    
                    if (reverse){
                        tr.prependTo(this._elem);
                    }
                    
                    else{
                        tr.appendTo(this._elem);
                    }
                    
                    for (j=0; j<nc; j++) {
                        if (idx < pd.length) {
                            tt = '';
                            if (this.labels[idx]) {
                                lt = this.labels[idx];
                            }
                            else {
                                if (typeof pd[idx][0] === 'object') {
                                    lt = pd[idx][0][0].toString();
                                    tt = pd[idx][0][1].toString();
                                }
                                else  {
                                    lt = pd[idx][0].toString();
                                }
                            }
                            //lt = this.labels[idx] || pd[idx][0].toString();
                            color = colorGenerator.next();
                            if (!reverse){
                                if (i>0){
                                    pad = true;
                                }
                                else{
                                    pad = false;
                                }
                            }
                            else{
                                if (i == nr -1){
                                    pad = false;
                                }
                                else{
                                    pad = true;
                                }
                            }
                            rs = (pad) ? this.rowSpacing : '0';



                            td1 = $(document.createElement('td'));
                            td1.addClass('jqplot-table-legend jqplot-table-legend-swatch');
                            td1.css({textAlign: 'center', paddingTop: rs});

                            div0 = $(document.createElement('div'));
                            div0.addClass('jqplot-table-legend-swatch-outline');
                            if (tt !== '') {
                                div0.attr("title", tt);
                            }
                            div1 = $(document.createElement('div'));
                            div1.addClass('jqplot-table-legend-swatch');
                            div1.css({backgroundColor: color, borderColor: color});
                            td1.append(div0.append(div1));

                            td2 = $(document.createElement('td'));
                            td2.addClass('jqplot-table-legend jqplot-table-legend-label');
                            td2.css('paddingTop', rs);

                            if (this.escapeHtml){
                                td2.text(lt);
                            }
                            else {
                                td2.html('<a title="' + tt + '">' + lt + "</a>");
                            }
                            if (reverse) {
                                td2.prependTo(tr);
                                td1.prependTo(tr);
                            }
                            else {
                                td1.appendTo(tr);
                                td2.appendTo(tr);
                            }
                            pad = true;
                        }
                        idx++;
                    }   
                }
            }
        }
        return this._elem;                
    };
    
    $.jqplot.PieRenderer.prototype.handleMove = function(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            plot.target.trigger('jqplotDataMouseOver', ins);
            if (plot.series[ins[0]].highlightMouseOver && !(ins[0] == plot.plugins.pieRenderer.highlightedSeriesIndex && ins[1] == plot.series[ins[0]]._highlightedPoint)) {
                plot.target.trigger('jqplotDataHighlight', ins);
                highlight (plot, ins[0], ins[1]);
            }
        }
        else if (neighbor == null) {
            unhighlight (plot);
        }
    };
    
    
    // this.eventCanvas._elem.bind($.jqplot.eventListenerHooks[i][0], {plot:this}, $.jqplot.eventListenerHooks[i][1]);
    
    // setup default renderers for axes and legend so user doesn't have to
    // called with scope of plot
    function preInit(target, data, options) {
        options = options || {};
        options.axesDefaults = options.axesDefaults || {};
        options.legend = options.legend || {};
        options.seriesDefaults = options.seriesDefaults || {};
        // only set these if there is a pie series
        var setopts = false;
        if (options.seriesDefaults.renderer == $.jqplot.PieRenderer) {
            setopts = true;
        }
        else if (options.series) {
            for (var i=0; i < options.series.length; i++) {
                if (options.series[i].renderer == $.jqplot.PieRenderer) {
                    setopts = true;
                }
            }
        }
        
        if (setopts) {
            options.axesDefaults.renderer = $.jqplot.PieAxisRenderer;
            options.legend.renderer = options.legend.renderer || $.jqplot.PieLegendRenderer;
            options.legend.preDraw = true;
            options.seriesDefaults.pointLabels = {show: false};
        }
    }
    
    function postInit(target, data, options) {
        for (var i=0; i<this.series.length; i++) {
            if (this.series[i].renderer.constructor == $.jqplot.PieRenderer) {
                // don't allow mouseover and mousedown at same time.
                if (this.series[i].highlightMouseOver) {
                    this.series[i].highlightMouseDown = false;
                }
            }
        }
    }
    
    // called with scope of plot
    function postParseOptions(options) {
        for (var i=0; i<this.series.length; i++) {
            this.series[i].seriesColors = this.seriesColors;
            this.series[i].colorGenerator = $.jqplot.colorGenerator;
        }
    }
    
    function highlight (plot, sidx, pidx) {
        if (plot.series[sidx].showSlice[pidx]) {
            var s = plot.series[sidx];
            var canvas = plot.plugins.pieRenderer.highlightCanvas;
            canvas._ctx.clearRect(0,0,canvas._ctx.canvas.width, canvas._ctx.canvas.height);
            s._highlightedPoint = pidx;
            plot.plugins.pieRenderer.highlightedSeriesIndex = sidx;
            s.renderer.drawSlice.call(s, canvas._ctx, s._sliceAngles[pidx][0], s._sliceAngles[pidx][1], s.highlightColorGenerator.get(pidx), false);
        }
    }
    
    function unhighlight (plot) {
        var canvas = plot.plugins.pieRenderer.highlightCanvas;
        canvas._ctx.clearRect(0,0, canvas._ctx.canvas.width, canvas._ctx.canvas.height);
        for (var i=0; i<plot.series.length; i++) {
            plot.series[i]._highlightedPoint = null;
        }
        plot.plugins.pieRenderer.highlightedSeriesIndex = null;
        plot.target.trigger('jqplotDataUnhighlight');
    }
 
    function handleMove(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            var evt1 = jQuery.Event('jqplotDataMouseOver');
            evt1.pageX = ev.pageX;
            evt1.pageY = ev.pageY;
            plot.target.trigger(evt1, ins);
            if (plot.series[ins[0]].highlightMouseOver && !(ins[0] == plot.plugins.pieRenderer.highlightedSeriesIndex && ins[1] == plot.series[ins[0]]._highlightedPoint)) {
                var evt = jQuery.Event('jqplotDataHighlight');
                evt.which = ev.which;
                evt.pageX = ev.pageX;
                evt.pageY = ev.pageY;
                plot.target.trigger(evt, ins);
                highlight (plot, ins[0], ins[1]);
            }
        }
        else if (neighbor == null) {
            unhighlight (plot);
        }
    } 
    
    function handleMouseDown(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            if (plot.series[ins[0]].highlightMouseDown && !(ins[0] == plot.plugins.pieRenderer.highlightedSeriesIndex && ins[1] == plot.series[ins[0]]._highlightedPoint)) {
                var evt = jQuery.Event('jqplotDataHighlight');
                evt.which = ev.which;
                evt.pageX = ev.pageX;
                evt.pageY = ev.pageY;
                plot.target.trigger(evt, ins);
                highlight (plot, ins[0], ins[1]);
            }
        }
        else if (neighbor == null) {
            unhighlight (plot);
        }
    }
    
    function handleMouseUp(ev, gridpos, datapos, neighbor, plot) {
        var idx = plot.plugins.pieRenderer.highlightedSeriesIndex;
        if (idx != null && plot.series[idx].highlightMouseDown) {
            unhighlight(plot);
        }
    }
    
    function handleClick(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            var evt = jQuery.Event('jqplotDataClick');
            evt.which = ev.which;
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            plot.target.trigger(evt, ins);
        }
    }
    
    function handleRightClick(ev, gridpos, datapos, neighbor, plot) {
        if (neighbor) {
            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
            var idx = plot.plugins.pieRenderer.highlightedSeriesIndex;
            if (idx != null && plot.series[idx].highlightMouseDown) {
                unhighlight(plot);
            }
            var evt = jQuery.Event('jqplotDataRightClick');
            evt.which = ev.which;
            evt.pageX = ev.pageX;
            evt.pageY = ev.pageY;
            plot.target.trigger(evt, ins);
        }
    }    
    
    // called within context of plot
    // create a canvas which we can draw on.
    // insert it before the eventCanvas, so eventCanvas will still capture events.
    function postPlotDraw() {
        // Memory Leaks patch    
        if (this.plugins.pieRenderer && this.plugins.pieRenderer.highlightCanvas) {
            this.plugins.pieRenderer.highlightCanvas.resetCanvas();
            this.plugins.pieRenderer.highlightCanvas = null;
        }

        this.plugins.pieRenderer = {highlightedSeriesIndex:null};
        this.plugins.pieRenderer.highlightCanvas = new $.jqplot.GenericCanvas();
        
        // do we have any data labels?  if so, put highlight canvas before those
        var labels = $(this.targetId+' .jqplot-data-label');
        if (labels.length) {
            $(labels[0]).before(this.plugins.pieRenderer.highlightCanvas.createElement(this._gridPadding, 'jqplot-pieRenderer-highlight-canvas', this._plotDimensions, this));
        }
        // else put highlight canvas before event canvas.
        else {
            this.eventCanvas._elem.before(this.plugins.pieRenderer.highlightCanvas.createElement(this._gridPadding, 'jqplot-pieRenderer-highlight-canvas', this._plotDimensions, this));
        }
        
        var hctx = this.plugins.pieRenderer.highlightCanvas.setContext();
        this.eventCanvas._elem.bind('mouseleave', {plot:this}, function (ev) { unhighlight(ev.data.plot); });
    }
    
    $.jqplot.preInitHooks.push(preInit);
    
    $.jqplot.PieTickRenderer = function() {
        $.jqplot.AxisTickRenderer.call(this);
    };
    
    $.jqplot.PieTickRenderer.prototype = new $.jqplot.AxisTickRenderer();
    $.jqplot.PieTickRenderer.prototype.constructor = $.jqplot.PieTickRenderer;
    
})(jQuery);
    
    
//# sourceMappingURL=report-efo.js.map

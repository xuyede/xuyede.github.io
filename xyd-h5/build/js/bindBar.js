!function(i,r){function a(){void 0,this.$songStart=r(".song-start"),this.$bar=r(".bar"),this.$barCircle=r(".bar-circle"),this.$barBox=r(".bar-box")}a.prototype.autoBar=function(){var t=this;main.barWidth=this.$barBox.innerWidth(),main.audio.addEventListener("timeupdate",function(){if(main.flag){main.duration=this.duration,main.curTime=this.currentTime,void 0,main.duration===main.curTime&&(main.count++,main.count>main.arr.length-1&&(main.count=0),main.rePlay());var i=main.curTime/main.duration,a=Math.floor(main.curTime/60),n=Math.floor(main.curTime%60);n<10&&(n="0"+n),t.$songStart.html("0"+a+":"+n),t.$bar.css("width",Math.floor(i*main.barWidth)+"px"),t.$barCircle.css("left",Math.floor(i*main.barWidth)-7+"px")}},!1)},a.prototype.drag=function(){var t=this;this.$barCircle.on("touchstart",function(i){main.flag=!1;var a=i.changedTouches[0].clientX;t.eleLeft=r(this).position().left,t.disX=a-t.eleLeft}).on("touchmove",function(i){var a=i.changedTouches[0].clientX,n=t.posX=a-t.disX;n<0?n=0:n>main.barWidth-15&&(n=main.barWidth-15),r(this).css("left",n+"px"),t.dragEnd=main.dragBar.dragMove(n)}).on("touchend",function(){r(this).css("left",t.posX+"px"),main.audio.currentTime=t.dragEnd,main.flag=!0})},i.BindBar=a}(window,jQuery);
GridSampler={},GridSampler.checkAndNudgePoints=function(r,a){for(var e=qrcode.width,o=qrcode.height,t=!0,d=0;d<a.length&&t;d+=2){var i=Math.floor(a[d]),n=Math.floor(a[d+1]);if(-1>i||i>e||-1>n||n>o)throw"Error.checkAndNudgePoints ";t=!1,-1==i?(a[d]=0,t=!0):i==e&&(a[d]=e-1,t=!0),-1==n?(a[d+1]=0,t=!0):n==o&&(a[d+1]=o-1,t=!0)}t=!0;for(var d=a.length-2;d>=0&&t;d-=2){var i=Math.floor(a[d]),n=Math.floor(a[d+1]);if(-1>i||i>e||-1>n||n>o)throw"Error.checkAndNudgePoints ";t=!1,-1==i?(a[d]=0,t=!0):i==e&&(a[d]=e-1,t=!0),-1==n?(a[d+1]=0,t=!0):n==o&&(a[d+1]=o-1,t=!0)}},GridSampler.sampleGrid3=function(r,a,e){for(var o=new BitMatrix(a),t=new Array(a<<1),d=0;a>d;d++){for(var i=t.length,n=d+.5,h=0;i>h;h+=2)t[h]=(h>>1)+.5,t[h+1]=n;e.transformPoints1(t),GridSampler.checkAndNudgePoints(r,t);try{for(var h=0;i>h;h+=2){var c=4*Math.floor(t[h])+Math.floor(t[h+1])*qrcode.width*4,l=r[Math.floor(t[h])+qrcode.width*Math.floor(t[h+1])];qrcode.imagedata.data[c]=l?255:0,qrcode.imagedata.data[c+1]=l?255:0,qrcode.imagedata.data[c+2]=0,qrcode.imagedata.data[c+3]=255,l&&o.set_Renamed(h>>1,d)}}catch(f){throw"Error.checkAndNudgePoints"}}return o},GridSampler.sampleGridx=function(r,a,e,o,t,d,i,n,h,c,l,f,m,g,s,u,p,v){var q=PerspectiveTransform.quadrilateralToQuadrilateral(e,o,t,d,i,n,h,c,l,f,m,g,s,u,p,v);return GridSampler.sampleGrid3(r,a,q)};
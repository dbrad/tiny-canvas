function ExpandGLSL(a,d){return"precision mediump float;\n"+a.join("\n").replace(/at/g,"attribute").replace(/va/g,"varying").replace(/un/g,"uniform").replace(/bo/g,"bool").replace(/si/g,"int").replace(/ui/g,"uint").replace(/fl/g,"float").replace(/dl/g,"double").replace(/v2/g,"vec2").replace(/v3/g,"vec3").replace(/v4/g,"vec4").replace(/bv2/g,"bvec2").replace(/bv3/g,"bvec3").replace(/bv4/g,"bvec4").replace(/iv2/g,"ivec2").replace(/iv3/g,"ivec3").replace(/iv4/g,"ivec4").replace(/uv2/g,"uvec2").replace(/uv3/g,
"uvec3").replace(/uv4/g,"uvec4").replace(/dv2/g,"dvec2").replace(/dv3/g,"dvec3").replace(/dv4/g,"dvec4").replace(/m23/g,"mat2x3").replace(/m24/g,"mat2x4").replace(/m32/g,"mat3x2").replace(/m34/g,"mat3x4").replace(/m42/g,"mat4x2").replace(/m43/g,"mat4x3").replace(/m2/g,"mat2").replace(/m3/g,"mat3").replace(/m4/g,"mat4").replace(/gl/g,35633==d?"gl_Position":"gl_FragColor").replace(/t2/g,"texture2D").replace(/s2/g,"sampler2D")}
function CompileShader(a,d,f){f=a.createShader(f);a.shaderSource(f,d);a.compileShader(f);return f}function CreateShaderProgram(a,d,f){var e=a.createProgram();d=CompileShader(a,d,35633);f=CompileShader(a,f,35632);a.attachShader(e,d);a.attachShader(e,f);a.linkProgram(e);e.use=function(){a.useProgram(e)};e.attr=function(b){return a.getAttribLocation(e,b)};e.unif=function(b){return a.getUniformLocation(e,b)};return e}
function CreateBuffer(a,d,f,e){var b=a.createBuffer();a.bindBuffer(d,b);a.bufferData(d,f,e);b.bind=function(){a.bindBuffer(d,b)};b.typedef=function(b,d,e,f,m,q){a.vertexAttribPointer(b,d,e,f,m,q)};b.upload=function(e){a.bindBuffer(d,b);a.bufferSubData(d,0,e)};return b}
function CreateTexture(a,d,f,e){var b=a.createTexture();a.bindTexture(3553,b);a.texParameteri(3553,10242,33071);a.texParameteri(3553,10243,33071);a.texParameteri(3553,10240,9728);a.texParameteri(3553,10241,9728);a.texImage2D(3553,0,6408,f,e,0,6408,5121,d);a.bindTexture(3553,null);b.bind=function(d,e){e=e||0;a.uniform1i(d||0,e);a.activeTexture(a.TEXTURE0+e);a.bindTexture(a.TEXTURE_2D,b)};b.width=f;b.height=e;return b}
function CreateColorTexture(a,d,f,e,b,g,r){for(var l=a.createTexture(),p=new Uint8Array(d*f*4),m=0;m<d*f*4;m+=4)p[m]=e,p[m+1]=b,p[m+2]=g,p[m+3]=r;a.bindTexture(3553,l);a.texParameteri(3553,10242,33071);a.texParameteri(3553,10243,33071);a.texParameteri(3553,10240,9728);a.texParameteri(3553,10241,9728);a.texImage2D(3553,0,6408,d,f,0,6408,5121,p);a.bindTexture(3553,null);l.bind=function(b,d){d=d||0;a.uniform1i(b||0,d);a.activeTexture(a.TEXTURE0+d);a.bindTexture(a.TEXTURE_2D,l)};l.width=d;l.height=f;
return l}
function InitRenderer2D(a){var d=a.getContext("webgl"),f=a.width;a=a.height;var e=CreateShaderProgram(d,ExpandGLSL(["at v2 a;","at v2 b;","at v4 c;","va v2 d;","va v4 e;","un m4 m;","void main(){","gl=m*v4(a,1.0,1.0);","d=b;","e=c;","}"],35633),ExpandGLSL(["va v2 d;","va v4 e;","un s2 f;","void main(){","gl=t2(f,d);","}"],0)),b=new ArrayBuffer(8E5),g=new Float32Array(b);new Float32Array(b);var r=new Uint32Array(b),l=new Uint16Array(6E4),p=CreateBuffer(d,34963,l.byteLength,35044),m=CreateBuffer(d,34962,
b.byteLength,35048),q=0,u=4294967295,c=new Float32Array([1,0,0,1,0,0]),n=new Float32Array(192),k=0,C=Math.cos,D=Math.sin,B=null,t=null,E=e.unif("f");e.use();for(b=y=0;6E4>b;b+=6,y+=4)l[b+0]=y+0,l[b+1]=y+1,l[b+2]=y+2,l[b+3]=y+0,l[b+4]=y+2,l[b+5]=y+3;p.upload(l);m.bind();m.typedef(e.attr("a"),2,5126,0,20,0);m.typedef(e.attr("b"),2,5126,0,20,8);m.typedef(e.attr("c"),4,5121,1,20,16);d.uniformMatrix4fv(e.unif("m"),0,new Float32Array([2/f,0,0,0,0,-2/a,0,0,0,0,1,1,-1,1,0,0]));return t={gl:d,identity:function(){c[0]=
1;c[1]=0;c[2]=0;c[3]=1;c[4]=0;c[5]=0},clear:function(a,c,b){d.clearColor(a,c,b,1);d.clear(16384)},transform:function(a,b,d,e,f,g){b=b*c[1]+b*c[3];d=d*c[0]+d*c[2];e=e*c[1]+e*c[3];f=f*c[0]+f*c[2]+c[4];g=g*c[1]+g*c[3]+c[5];c[0]=a*c[0]+a*c[2];c[1]=b;c[2]=d;c[3]=e;c[4]=f;c[5]=g},translate:function(a,c){t.transform(1,0,0,1,a,c)},scale:function(a,c){t.transform(c,0,0,a,0,0)},rotate:function(a){t.transform(C(a),-D(a),D(a),C(a),0,0)},pushMatrix:function(){n[k+0]=c[0];n[k+1]=c[1];n[k+2]=c[2];n[k+3]=c[3];n[k+
4]=c[4];n[k+5]=c[5];k+=6},popMatrix:function(){k-=6;c[0]=n[k+0];c[1]=n[k+1];c[2]=n[k+2];c[3]=n[k+3];c[4]=n[k+4];c[5]=n[k+5]},setColor:function(a,c,b,d){u=d<<24|a<<16|c<<8|b},drawImage:function(a,c,b){t.drawImageUV(a,c,b,0,0,1,1)},drawImageUV:function(a,b,d,e,f,l,m){var k=b+a.width,n=d+a.height,p=c[0],v=c[1],w=c[2],x=c[3],z=c[4],A=c[5],h=20*q;if(a!=B||1E4<q)t.flush(),B=a,B.bind(E,0);g[h+0]=b*p+d*w+z;g[h+1]=b*v+d*x+A;g[h+2]=e;g[h+3]=f;g[h+5]=k*p+d*w+z;g[h+6]=k*v+d*x+A;g[h+7]=l;g[h+8]=f;g[h+10]=k*p+
n*w+z;g[h+11]=k*v+n*x+A;g[h+12]=l;g[h+13]=m;g[h+15]=b*p+n*w+z;g[h+16]=b*v+n*x+A;g[h+17]=e;g[h+18]=m;r[h+4]=u;r[h+9]=u;r[h+14]=u;r[h+19]=u;++q},flush:function(){0<q&&(m.upload(g.subarray(0,20*q)),d.drawElements(4,6*q,5123,0),q=0)}}};
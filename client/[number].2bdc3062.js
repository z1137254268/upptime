import{S as e,i as t,s as n,r,j as a,e as s,t as c,C as l,d as i,k as o,c as u,a as h,b as d,f,g as m,h as $,l as p,m as g,o as v,p as E,q as b,D,B as w,u as T,n as _,v as L,w as A,x as S,y as O,z as y,A as x}from"./client.8621970d.js";import{c as H,h as C,L as M}from"./createOctokit.31f1ce42.js";function R(e,t,n){const r=e.slice();return r[9]=t[n],r}function I(e){let t,n,l,p,g,v=e[4].title+"",E=("closed"===e[4].state?r.i18n.incidentFixed:r.i18n.incidentOngoing)+"";return{c(){t=c(v),n=a(),l=s("span"),p=c(E),this.h()},l(e){t=d(e,v),n=o(e),l=u(e,"SPAN",{class:!0});var r=h(l);p=d(r,E),r.forEach(i),this.h()},h(){f(l,"class",g=w(`tag ${e[4].state}`)+" svelte-4o16l6")},m(e,r){m(e,t,r),m(e,n,r),m(e,l,r),$(l,p)},p(e,n){16&n&&v!==(v=e[4].title+"")&&T(t,v),16&n&&E!==(E=("closed"===e[4].state?r.i18n.incidentFixed:r.i18n.incidentOngoing)+"")&&T(p,E),16&n&&g!==(g=w(`tag ${e[4].state}`)+" svelte-4o16l6")&&f(l,"class",g)},d(e){e&&i(t),e&&i(n),e&&i(l)}}}function N(e){let t,n=r.i18n.incidentDetails+"";return{c(){t=c(n)},l(e){t=d(e,n)},m(e,n){m(e,t,n)},p:_,d(e){e&&i(t)}}}function B(e){let t,n,l,p,g,v,E,b,D,w,S,O,y,x,H,C,M,I,N,B=r.i18n.incidentOpenedAt+"",P=new Date(e[4].created_at).toLocaleString()+"",j=r.i18n.incidentSubscribe+"",k=r.i18n.incidentViewOnGitHub+"",F=e[4].closed_at&&U(e),q=e[3],z=[];for(let t=0;t<q.length;t+=1)z[t]=V(R(e,q,t));return{c(){t=s("div"),n=s("dl"),l=s("dt"),p=c(B),g=s("dd"),v=c(P),F&&F.c(),E=a(),b=s("div"),D=s("p"),w=s("a"),S=c(j),y=a(),x=s("p"),H=s("a"),C=c(k),I=a();for(let e=0;e<z.length;e+=1)z[e].c();N=L(),this.h()},l(e){t=u(e,"DIV",{class:!0});var r=h(t);n=u(r,"DL",{});var a=h(n);l=u(a,"DT",{});var s=h(l);p=d(s,B),s.forEach(i),g=u(a,"DD",{});var c=h(g);v=d(c,P),c.forEach(i),F&&F.l(a),a.forEach(i),E=o(r),b=u(r,"DIV",{class:!0});var f=h(b);D=u(f,"P",{class:!0});var m=h(D);w=u(m,"A",{href:!0});var $=h(w);S=d($,j),$.forEach(i),m.forEach(i),y=o(f),x=u(f,"P",{class:!0});var T=h(x);H=u(T,"A",{href:!0});var _=h(H);C=d(_,k),_.forEach(i),T.forEach(i),f.forEach(i),r.forEach(i),I=o(e);for(let t=0;t<z.length;t+=1)z[t].l(e);N=L(),this.h()},h(){f(w,"href",O=`https://github.com/${r.owner}/${r.repo}/issues/${e[0]}`),f(D,"class","svelte-4o16l6"),f(H,"href",M=`https://github.com/${r.owner}/${r.repo}/issues/${e[0]}`),f(x,"class","svelte-4o16l6"),f(b,"class","r svelte-4o16l6"),f(t,"class","f")},m(e,r){m(e,t,r),$(t,n),$(n,l),$(l,p),$(n,g),$(g,v),F&&F.m(n,null),$(t,E),$(t,b),$(b,D),$(D,w),$(w,S),$(b,y),$(b,x),$(x,H),$(H,C),m(e,I,r);for(let t=0;t<z.length;t+=1)z[t].m(e,r);m(e,N,r)},p(e,t){if(16&t&&P!==(P=new Date(e[4].created_at).toLocaleString()+"")&&T(v,P),e[4].closed_at?F?F.p(e,t):(F=U(e),F.c(),F.m(n,null)):F&&(F.d(1),F=null),1&t&&O!==(O=`https://github.com/${r.owner}/${r.repo}/issues/${e[0]}`)&&f(w,"href",O),1&t&&M!==(M=`https://github.com/${r.owner}/${r.repo}/issues/${e[0]}`)&&f(H,"href",M),40&t){let n;for(q=e[3],n=0;n<q.length;n+=1){const r=R(e,q,n);z[n]?z[n].p(r,t):(z[n]=V(r),z[n].c(),z[n].m(N.parentNode,N))}for(;n<z.length;n+=1)z[n].d(1);z.length=q.length}},i:_,o:_,d(e){e&&i(t),F&&F.d(),e&&i(I),A(z,e),e&&i(N)}}}function P(e){let t,n;return t=new M({}),{c(){S(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p:_,i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}function U(e){let t,n,a,l,o=r.i18n.incidentClosedAt+"",f=new Date(e[4].closed_at).toLocaleString()+"";return{c(){t=s("dt"),n=c(o),a=s("dd"),l=c(f)},l(e){t=u(e,"DT",{});var r=h(t);n=d(r,o),r.forEach(i),a=u(e,"DD",{});var s=h(a);l=d(s,f),s.forEach(i)},m(e,r){m(e,t,r),$(t,n),m(e,a,r),$(a,l)},p(e,t){16&t&&f!==(f=new Date(e[4].closed_at).toLocaleString()+"")&&T(l,f)},d(e){e&&i(t),e&&i(a)}}}function V(e){let t,n,c,l,d,p=e[5](e[9].body)+"",g=r.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${e[9].html_url}>${new Date(e[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${e[9].user.html_url}>@${e[9].user.login}</a>`)+"";return{c(){t=s("article"),n=s("p"),c=a(),l=s("div"),d=a(),this.h()},l(e){t=u(e,"ARTICLE",{});var r=h(t);n=u(r,"P",{class:!0}),h(n).forEach(i),c=o(r),l=u(r,"DIV",{}),h(l).forEach(i),d=o(r),r.forEach(i),this.h()},h(){f(n,"class","svelte-4o16l6")},m(e,r){m(e,t,r),$(t,n),n.innerHTML=p,$(t,c),$(t,l),l.innerHTML=g,$(t,d)},p(e,t){8&t&&p!==(p=e[5](e[9].body)+"")&&(n.innerHTML=p),8&t&&g!==(g=r.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${e[9].html_url}>${new Date(e[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${e[9].user.html_url}>@${e[9].user.login}</a>`)+"")&&(l.innerHTML=g)},d(e){e&&i(t)}}}function j(e){let t,n,b,D,w,T,_,L,A,S,O,y,x=r.i18n.incidentBack+"";function H(e,t){return e[2]?N:I}document.title=t=r.i18n.incidentTitle.replace("$NUMBER",e[0]);let C=H(e),M=C(e);const R=[P,B],U=[];function V(e,t){return e[1]?0:1}return T=V(e),_=U[T]=R[T](e),{c(){n=a(),b=s("h2"),M.c(),D=a(),w=s("section"),_.c(),L=a(),A=s("footer"),S=s("a"),O=c(x),this.h()},l(e){l('[data-svelte="svelte-1txp228"]',document.head).forEach(i),n=o(e),b=u(e,"H2",{class:!0});var t=h(b);M.l(t),t.forEach(i),D=o(e),w=u(e,"SECTION",{});var r=h(w);_.l(r),r.forEach(i),L=o(e),A=u(e,"FOOTER",{class:!0});var a=h(A);S=u(a,"A",{href:!0});var s=h(S);O=d(s,x),s.forEach(i),a.forEach(i),this.h()},h(){f(b,"class","svelte-4o16l6"),f(S,"href","../"),f(A,"class","svelte-4o16l6")},m(e,t){m(e,n,t),m(e,b,t),M.m(b,null),m(e,D,t),m(e,w,t),U[T].m(w,null),m(e,L,t),m(e,A,t),$(A,S),$(S,O),y=!0},p(e,[n]){(!y||1&n)&&t!==(t=r.i18n.incidentTitle.replace("$NUMBER",e[0]))&&(document.title=t),C===(C=H(e))&&M?M.p(e,n):(M.d(1),M=C(e),M&&(M.c(),M.m(b,null)));let a=T;T=V(e),T===a?U[T].p(e,n):(p(),g(U[a],1,1,(()=>{U[a]=null})),v(),_=U[T],_?_.p(e,n):(_=U[T]=R[T](e),_.c()),E(_,1),_.m(w,null))},i(e){y||(E(_),y=!0)},o(e){g(_),y=!1},d(e){e&&i(n),e&&i(b),M.d(),e&&i(D),e&&i(w),U[T].d(),e&&i(L),e&&i(A)}}}function k(e,t,n){let{number:a}=t,s=D,c=!0,l=!0;const i=H(),o=r.owner,u=r.repo;let h=[],d={};return b((async()=>{try{n(4,d=(await i.issues.get({owner:o,repo:u,issue_number:a,sort:"created",direction:"desc"})).data)}catch(e){C(e)}n(2,l=!1);try{n(3,h=(await i.issues.listComments({owner:o,repo:u,issue_number:a})).data.reverse())}catch(e){C(e)}n(1,c=!1)})),e.$$set=e=>{"number"in e&&n(0,a=e.number)},[a,c,l,h,d,s]}class F extends e{constructor(e){super(),t(this,e,k,j,n,{number:0})}}function q(e){let t,n;return t=new F({props:{number:e[0]}}),{c(){S(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.number=e[0]),t.$set(r)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}async function z(e){const{number:t}=e.params;return{number:t}}function G(e,t,n){let{number:r}=t;return e.$$set=e=>{"number"in e&&n(0,r=e.number)},[r]}export default class extends e{constructor(e){super(),t(this,e,G,q,n,{number:0})}}export{z as preload};

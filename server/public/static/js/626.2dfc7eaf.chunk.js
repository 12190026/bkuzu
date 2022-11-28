"use strict";(self.webpackChunkfacebook_clone_app_react_client=self.webpackChunkfacebook_clone_app_react_client||[]).push([[626],{6414:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(2791),a=n(1876),o=n(9526),s=n(272),i=n(8489),c=n(3430),l=n(3174),u=n(4483),d=n(2734),p=n(7025),x=n(184);var h=function(e){var t=e.fileRef;return(0,x.jsx)(d.ZP,{title:"Select Image from Device",arrow:!0,placement:"bottom",children:(0,x.jsx)(p.Z,{onClick:function(e){e.preventDefault(),t.current.click()},children:(0,x.jsx)(u.G,{icon:l.VmB,color:"rgb(73,189,99)"})})})},g=n(3713),f=n(8302),m=n(3837),y=n(4026),j=n(1606),b=n(1288),Z=n(269),v=n(6513),S=n(5720),k=n(6950),w=n(9576),P=n(6364);var C=function(e){var t=e.userState,n=e.body;return(0,x.jsxs)(f.Z,{children:[(0,x.jsx)("b",{children:t.currentUser.name}),n.feelings?(0,x.jsxs)(x.Fragment,{children:["\xa0 is feeling ",(0,x.jsx)("b",{children:n.feelings})]}):null,n.with.length?(0,x.jsxs)(x.Fragment,{children:[" with ",(0,x.jsx)("b",{children:n.with.map((function(e){return(0,x.jsxs)(x.Fragment,{children:[" \xa0",(n=e,t.users.find((function(e){return e.id==n}))).name,","]});var n}))})]}):null,n.at?(0,x.jsxs)(x.Fragment,{children:[" at "," ",(0,x.jsxs)("b",{children:[n.at," "]})]}):null,n.date?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("b",{children:new Date(n.date).toLocaleDateString()})}):null]})};var D=function(e){var t=e.userState,n=e.handleCloseDialog,r=e.body;return(0,x.jsxs)("div",{children:[(0,x.jsx)(k.Z,{avatar:t.currentUser.profile_pic?(0,x.jsx)(s.Z,{children:(0,x.jsx)("img",{style:{width:"100%",height:"100%"},src:t.currentUser.profile_pic})}):(0,x.jsx)(P.Z,{text:t.currentUser.name,bg:"teal"}),title:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f.Z,{style:{fontWeight:"800",fontSize:"16px"},children:t.currentUser.name})}),action:(0,x.jsx)(p.Z,{onClick:function(){return n()},children:(0,x.jsx)(w.Z,{})})}),(0,x.jsx)(y.Z,{children:(0,x.jsx)(o.Z,{style:{marginTop:"4px"},elevation:0,children:(0,x.jsx)(C,{userState:t,body:r})})})]})},_=n(6685);var E=function(e){var t=e.previewImage,n=e.removeFileImage;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_.Z,{image:t,style:{width:"100",height:"220px"}}),(0,x.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"8px",marginBottom:"8px"},children:(0,x.jsx)(p.Z,{onClick:n,size:"medium",children:(0,x.jsx)(s.Z,{style:{background:"tomato",color:"white"},children:(0,x.jsx)(w.Z,{})})})})]})},I=n(7166),T=n(3032),z=n(1044),O=n(9538),M=n(5032),U=function(e){var t=e.postData,n=e.body,o=e.isImageCaptured,s=e.postImage,l=e.blob,u=(0,O.k6)(),d=(0,r.useState)(!1),p=(0,c.Z)(d,2),x=p[0],h=p[1],g=(0,r.useContext)(a.QE).uiDispatch,f=(0,r.useContext)(a.W5).postDispatch,m=function(){var e=(0,T.Z)((0,I.Z)().mark((function e(t){var n,r;return(0,I.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),n=localStorage.token&&JSON.parse(localStorage.getItem("token")),e.prev=2,e.next=5,z.ZP.post("https://bkuzuauth.herokuapp.com//api/post/",t,{headers:{Authorization:"Bearer ".concat(n)}});case 5:r=e.sent,h(!1),f({type:"ADD_POST",payload:r.data.post}),g({type:"SET_MESSAGE",payload:{color:"success",display:!0,text:r.data.message}}),g({type:"SET_POST_MODEL",payload:!1}),u.push("/"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),h(!1),e.t0&&e.t0.response&&g({type:"SET_MESSAGE",payload:{display:!0,text:e.t0.response.data.error,color:"error"}}),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=(0,T.Z)((0,I.Z)().mark((function e(){var r,a=arguments;return(0,I.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,m((0,i.Z)((0,i.Z)({},t),{},{image:r||"",body:(0,i.Z)({},n)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{handleSubmitPost:function(e){if(e.preventDefault(),o){var t="post/post-".concat(Date.now(),".png");M.t.ref("images/".concat(t)).put(l).on("state_changed",(function(){h(!0)}),(function(e){console.log("error from firebase"),h(!1),g({type:"SET_POST_MODEL",payload:!1})}),(function(){M.t.ref("images").child(t).getDownloadURL().then((function(e){y(e),h(!1)}))}))}else if(s){var n="post/post-".concat(Date.now(),"-").concat(s.name);M.t.ref("images/".concat(n)).put(s).on("state_changed",(function(){h(!0)}),(function(e){console.log("error from firebase"),h(!1),g({type:"SET_POST_MODEL",payload:!1})}),(function(){M.t.ref("images").child(n).getDownloadURL().then((function(e){y(e)}))}))}else y()},loading:x}},F=n(2130);function A(){var e=(0,r.useContext)(a.QE),t=e.uiState,n=e.uiDispatch,o=(0,r.useState)(null),l=(0,c.Z)(o,2),u=l[0],d=l[1],k=(0,r.useState)(null),P=(0,c.Z)(k,2),C=P[0],_=P[1],I=(0,r.useState)(""),T=(0,c.Z)(I,2),z=T[0],O=T[1],M=(0,r.useState)(!1),A=(0,c.Z)(M,2),B=A[0],L=A[1],R=(0,r.useState)({feelings:"",with:[],at:"",date:""}),W=(0,c.Z)(R,2),N=W[0],G=(W[1],(0,r.useState)({privacy:"Public",content:""})),Q=(0,c.Z)(G,2),K=Q[0],J=Q[1],V=(0,r.useContext)(a.St).userState,q=(0,r.useRef)();function H(){d(null),L(!1)}var X=U({postData:K,body:N,postImage:C,isImageCaptured:B,blob:u}),Y=X.handleSubmitPost,$=X.loading;return(0,x.jsxs)("div",{children:[(0,x.jsxs)(f.Z,{style:{color:t.darkMode?null:"grey",padding:"8px",background:t.darkMode?null:"rgb(240,242,245)",borderRadius:"20px",cursor:"pointer"},onClick:function(){return n({type:"SET_POST_MODEL",payload:!0})},children:["What`s in your mind, ",V.currentUser.name," ?"]}),$?(0,x.jsx)(g.Z,{loading:$,text:"Uploading Post..."}):(0,x.jsxs)(m.Z,{disableBackdropClick:!0,disableEscapeKeyDown:!0,fullWidth:!0,scroll:"body",maxWidth:"sm",open:t.postModel,onClose:function(){return n({type:"SET_POST_MODEL",payload:!1})},style:{width:"100%"},children:[(0,x.jsx)(D,{userState:V,handleCloseDialog:function(){n({type:"SET_POST_MODEL",payload:!1})},body:N}),(0,x.jsxs)(y.Z,{children:[(0,x.jsx)(j.Z,{placeholder:"Whats in your mind, ".concat(V.currentUser.name," ?"),multiline:!0,rows:3,value:K.content,onChange:function(e){J((0,i.Z)((0,i.Z)({},K),{},{content:e.target.value}))},style:{background:t.darkMode?null:"#fff",border:"none",width:"100%"}}),(0,x.jsx)(b.Z,{container:!0,justify:"center",style:{marginTop:"4px",marginBottom:"4px"}}),(0,x.jsx)(b.Z,{container:!0,alignItems:"center",justify:"center",style:{marginTop:"4px",marginBottom:"4px"}}),(0,x.jsx)(b.Z,{container:!0,alignItems:"center",justify:"center",children:(0,x.jsx)(b.Z,{item:!0,xs:12,sm:6,md:6,children:(0,x.jsx)(h,{fileRef:q})})}),(0,x.jsx)("span",{children:"Add to your post"}),z&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(F.Z,{children:(0,x.jsxs)("b",{children:["Image Size (",Math.round(C.size/6024)," Kb)"]})}),(0,x.jsx)(E,{previewImage:z,removeFileImage:function(){O(""),_(null)}})]}),function(){if(u){var e=URL.createObjectURL(u);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(F.Z,{children:(0,x.jsxs)("b",{children:["Image Size (",Math.round(u.size/6024)," Kb)"]})}),(0,x.jsx)("img",{src:e,style:{width:"100%",height:"100%"},alt:""}),(0,x.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"8px",marginBottom:"8px"},children:(0,x.jsx)(p.Z,{onClick:H,size:"medium",children:(0,x.jsx)(s.Z,{style:{background:"tomato",color:"white"},children:(0,x.jsx)(w.Z,{})})})})]})}}()]}),(0,x.jsxs)(Z.Z,{children:[(0,x.jsx)(v.Z,{disabled:$,onClick:Y,variant:"contained",color:"primary",style:{width:"100%"},children:$?(0,x.jsx)(S.Z,{variant:"indeterminate",size:25,style:{color:"#fff"}}):" Create Post"}),(0,x.jsx)("input",{type:"file",style:{display:"none"},ref:q,onChange:function(e){_(e.target.files[0]);var t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=function(){d(null),L(!1),O(t.result)}},accept:"image/*",capture:"user"})]})]})]})}var B=function(e){e.user;var t=(0,r.useContext)(a.St).userState,n=(0,r.useContext)(a.QE).uiState;return(0,x.jsx)("div",{children:(0,x.jsx)(o.Z,{style:{maxWidth:"100%",padding:"16px",backgroundColor:n.darkMode&&"rgb(36,37,38)"},children:(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start"},children:[t.currentUser.profile_pic?(0,x.jsx)(s.Z,{children:(0,x.jsx)("img",{src:t.currentUser.profile_pic,width:"100%",height:"100%"})}):(0,x.jsx)(P.Z,{text:t.currentUser.name,bg:t.currentUser.active?"seagreen":"tomato"}),(0,x.jsx)("div",{style:{width:"100%",marginLeft:"16px",marginRight:"16px"},children:(0,x.jsx)(A,{})})]})})})}},1787:function(e,t,n){var r=n(8302),a=(n(2791),n(184));t.Z=function(e){var t=e.post;return(0,a.jsx)("div",{children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("b",{children:(t.body.feelings||t.body.with.length||t.body.at||t.body.date)&&t.user.name}),t.body.feelings?(0,a.jsxs)(a.Fragment,{children:["\xa0 is feeling ",(0,a.jsx)("b",{children:t.body.feelings})]}):null,t.body.with.length?(0,a.jsxs)(a.Fragment,{children:[" with ",(0,a.jsx)("b",{children:t.body.with.map((function(e){return(0,a.jsxs)("span",{children:[" \xa0",e.name,","]},e.id)}))})]}):null,t.body.at?(0,a.jsxs)(a.Fragment,{children:[" at "," ",(0,a.jsxs)("b",{children:[t.body.at," "]})]}):null,t.body.date?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("b",{children:new Date(t.body.date).toLocaleDateString()})}):null]})})}},9948:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(8302),a=n(6513),o=n(2791),s=n(1876),i=n(9153),c=n(2426),l=n.n(c),u=n(283),d=n(6950),p=n(272),x=n(3364),h=n(8154),g=n(2953),f=n(6685),m=n(7447),y=n(1787),j=n(184);var b=function(e){var t=e.post,n=(0,o.useContext)(s.QE).uiState,a=(0,x.Z)(),i=(0,h.Z)(a.breakpoints.only("xs"));return(0,j.jsxs)(o.Fragment,{children:[(t.body.feelings||t.body.with.length||t.body.at||t.body.date)&&(0,j.jsx)(g.Z,{style:{marginBottom:"16px",background:n.darkMode?"rgb(76,76,76)":"rgb(240,242,245)",padding:"16px"},children:(0,j.jsx)(y.Z,{post:t})}),(0,j.jsx)(g.Z,{children:(0,j.jsx)(r.Z,{style:{fontWeight:"400",fontSize:"16px",fontFamily:"fantasy"},children:t.content&&t.content})}),t.image&&(0,j.jsx)(f.Z,{component:"img",style:{width:"100%",maxHeight:"500px",objectFit:"fill"},image:t.image,title:"Paella dish"}),Object.keys(t.profilePostData).length?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(f.Z,{style:{width:"100%",height:"200px"},image:t.profilePostData.coverImage,title:t.user.name}),(0,j.jsx)(p.Z,{style:{border:"6px solid tomato",width:i?"300px":"400px",height:i?"300px":"400px",display:"flex",flexDirection:"row",margin:"auto",borderRadius:"100%",bottom:130},children:(0,j.jsx)("img",{src:t.profilePostData.profileImage,width:"100%",height:"100%",alt:t.profilePostData.profileImage})})]}):null,(0,j.jsx)(m.Z,{})]})},Z=n(1523),v=n(1288),S=n(4483),k=n(1297),w=n(3174),P=n(6990);var C=function(e){var t=e.post,n=(0,o.useContext)(s.W5).postDispatch,r=(0,o.useContext)(s.QE).uiDispatch,i=(0,o.useContext)(s.St).userState,c=function(){return t.likes.includes(i.currentUser.id)};return(0,j.jsx)(o.Fragment,{children:(0,j.jsxs)(a.Z,{onClick:function(){(0,P.Qy)(t.id).then((function(e){e.data&&(n({type:"LIKE_UNLIKE_POST",payload:e.data.post}),r({type:"SET_MESSAGE",payload:{color:"success",text:e.data.message,display:!0}})),e.error&&r({type:"SET_MESSAGE",payload:{color:"error",text:e.data.error,display:!0}})})).catch((function(e){return console.log(e)}))},color:c()?"primary":"inherit",style:{width:"100%"},startIcon:c()?(0,j.jsx)(S.G,{icon:w.u8Q}):(0,j.jsx)(S.G,{icon:k.u8}),children:["(",t.likes.length,")"]})})};var D=function(e){var t=e.post,n=(0,o.useContext)(s.St).userState;(0,o.useEffect)((function(){i()}),[t.likes.length]);var i=function(){var e=n.currentUser.friends.filter((function(e){return t.likes.includes(e.id)}));return t.likes.includes(n.currentUser.id)&&e.push(n.currentUser),e.slice(0,4)};return(0,j.jsxs)("div",{style:{margin:"8px 16px"},children:[(0,j.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginBottom:"16px"},children:[(0,j.jsx)(S.G,{icon:k.u8,style:{padding:"4px",borderRadius:"100%",color:"#fff",background:"rgb(16,162,246)"},size:"lg"}),(0,j.jsx)(r.Z,{style:{marginLeft:"8px",color:"rgb(133,112,118)",fontSize:"12px"},children:i().length?(0,j.jsxs)(j.Fragment,{children:[i().map((function(e){return(0,j.jsxs)("span",{children:[e.name," ,"]},e.id)}))," ..."]}):null})]}),(0,j.jsx)(m.Z,{}),(0,j.jsxs)(v.Z,{container:!0,style:{padding:"4px 0px"},children:[(0,j.jsx)(v.Z,{item:!0,xs:6,children:(0,j.jsx)(C,{post:t})}),(0,j.jsx)(v.Z,{item:!0,xs:6,children:(0,j.jsx)(a.Z,{style:{width:"100%"},startIcon:(0,j.jsx)(S.G,{icon:k.Mz}),component:Z.rU,to:"/post/".concat(t.id),children:"Comments"})})]})]})},_=n(6364);var E=function(e){var t=e.post,n=(0,o.useContext)(s.QE).uiState;return(0,j.jsxs)(u.Z,{style:{marginTop:"20px",backgroundColor:n.darkMode&&"rgb(36,37,38)"},children:[(0,j.jsx)(d.Z,{avatar:t.user&&t.user.profile_pic?(0,j.jsx)(p.Z,{children:(0,j.jsx)("img",{alt:"",src:t.user.profile_pic,style:{width:"100%",height:"100%"}})}):(0,j.jsx)(_.Z,{text:t.user.name,bg:t.user.active?"seagreen":"tomato"}),title:t&&(0,j.jsx)(r.Z,{style:{fontWeight:"800"},children:t.user.name}),subheader:t&&l()(t.createdAt).fromNow()}),(0,j.jsx)(b,{post:t}),(0,j.jsx)(D,{post:t})]})};var I=function(e){var t=e.posts,n=(0,o.useContext)(s.W5).postState,c=(0,i.Z)().fetchPosts;return(0,j.jsxs)("div",{children:[t.length?t.map((function(e){return(0,j.jsx)("div",{children:(0,j.jsx)(E,{post:e})},e.id)})):null,(0,j.jsx)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"center"},children:n.postPagination.totalPage<=n.postPagination.currentPage?(0,j.jsx)(r.Z,{style:{color:"teal"},variant:"body2",children:"No more posts"}):(0,j.jsx)(a.Z,{variant:"contained",color:"primary",onClick:function(){c()},children:"More Posts"})})]})}},3713:function(e,t,n){var r=n(3430),a=n(3837),o=n(9526),s=n(8302),i=n(4446),c=n(2791),l=n(184);t.Z=function(e){var t=e.loading,n=e.text,u=(0,c.useState)(t),d=(0,r.Z)(u,2),p=d[0],x=d[1];return(0,l.jsx)(a.Z,{disableBackdropClick:!0,disableEscapeKeyDown:!0,fullWidth:!0,scroll:"body",maxWidth:"sm",open:p,onClose:function(){return x(!1)},style:{width:"100%"},children:(0,l.jsxs)(o.Z,{style:{width:"100%",height:"100%",padding:"32px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},elevation:15,children:[(0,l.jsx)(s.Z,{style:{fontSize:"20px",fontWeight:"800",marginBottom:"16px"},children:n}),(0,l.jsx)(i.Z,{color:"secondary",style:{width:"50%"}})]})})}},5032:function(e,t,n){n.d(t,{t:function(){return a}});var r=n(1610);n(709);r.Z.initializeApp({apiKey:"AIzaSyCzvuA_6OGIIVRwbck71qBwNyRMXtBdSaE",authDomain:"bkuzu-295d0.firebaseapp.com",projectId:"bkuzu-295d0",storageBucket:"bkuzu-295d0.appspot.com",messagingSenderId:"305647920422",appId:"1:305647920422:web:b1366830f57614bf7e0de7"});var a=r.Z.storage()},9153:function(e,t,n){var r=n(7166),a=n(3032),o=n(3430),s=n(2791),i=n(1044),c=n(1876),l="http://localhost:5000";t.Z=function(){var e=(0,s.useState)(!1),t=(0,o.Z)(e,2),n=t[0],u=t[1],d=(0,s.useContext)(c.W5),p=d.postState,x=d.postDispatch,h=JSON.parse(localStorage.getItem("token")),g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p.post.commentPagination.currentPage>p.post.commentPagination.totalPage)){e.next=2;break}return e.abrupt("return");case 2:return u(!0),e.prev=3,e.next=6,i.ZP.get("".concat(l,"/api/post/").concat(t,"/comment/?page=").concat(p.post.commentPagination.currentPage),{headers:{Authorization:"Bearer ".concat(h)}});case 6:(n=e.sent).data&&x({type:"COMMENT_PAGINATION",payload:{currentPage:n.data.pagination.currentPage+1,totalPage:n.data.pagination.totalPage,comments:n.data.comments}}),u(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),u(!1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p.postPagination.currentPage>p.postPagination.totalPage)){e.next=4;break}return e.abrupt("return");case 4:return u(!0),e.prev=5,e.next=8,i.ZP.get("".concat(l,"/api/post/?page=").concat(p.postPagination.currentPage),{headers:{Authorization:"Bearer ".concat(h)}});case 8:t=e.sent,(n=t.data)&&x({type:"POST_PAGINATION",payload:{currentPage:n.pagination.currentPage+1,totalPage:n.pagination.totalPage,posts:n.posts}}),u(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),u(!1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(){return e.apply(this,arguments)}}();return{fetchPosts:f,fetchComments:g,loading:n}}},6990:function(e,t,n){n.d(t,{Qy:function(){return i},UB:function(){return c}});var r=n(7166),a=n(3032),o=n(1044),s="http://localhost:5000",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.token),e.prev=1,e.next=4,o.ZP.get("".concat(s,"/api/post/").concat(t,"/like_dislike"),{headers:{Authorization:"Bearer ".concat(n)}});case 4:if(!(a=e.sent).data){e.next=7;break}return e.abrupt("return",{data:a.data});case 7:e.next=14;break;case 9:if(e.prev=9,e.t0=e.catch(1),console.log(e.t0),!e.t0||!e.t0.response){e.next=14;break}return e.abrupt("return",{status:e.t0.response.status,error:e.t0.response.data.error});case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.parse(localStorage.token),e.next=4,o.ZP.get("".concat(s,"/api/post/comment/").concat(t,"/like_dislike"),{headers:{Authorization:"Bearer ".concat(n)}});case 4:if(!(a=e.sent).data){e.next=7;break}return e.abrupt("return",{data:a.data});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=626.2dfc7eaf.chunk.js.map
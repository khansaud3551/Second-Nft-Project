(this["webpackJsonpnft-project"]=this["webpackJsonpnft-project"]||[]).push([[0],{265:function(e,t,n){},266:function(e,t,n){},282:function(e,t){},285:function(e,t){},288:function(e,t){},292:function(e,t){},319:function(e,t){},321:function(e,t){},335:function(e,t){},337:function(e,t){},367:function(e,t){},369:function(e,t){},461:function(e,t){},462:function(e,t){},569:function(e,t,n){},571:function(e,t,n){"use strict";n.r(t);var a=n(10),s=n.n(a),i=n(98),r=n.n(i),o=(n(265),n(266),n(62)),l=n(244),c=n(3),d=n.n(c),u=n(33),p=n.n(u),m=n(4),y=(0,n(572).createAlchemyWeb3)("wss://eth-mainnet.alchemyapi.io/v2/ifzyXSjPF_OGffl3dZHF8cqSUCDH0dbR"),b=[{inputs:[{internalType:"string",name:"newUnrevealedURI",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_owner",type:"address"},{indexed:!0,internalType:"address",name:"_approved",type:"address"},{indexed:!0,internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_owner",type:"address"},{indexed:!0,internalType:"address",name:"_operator",type:"address"},{indexed:!1,internalType:"bool",name:"_approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"OwnershipTransfered",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_from",type:"address"},{indexed:!0,internalType:"address",name:"_to",type:"address"},{indexed:!0,internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"SUPPLY_MAX",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"SUPPLY_PER_TX",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to_",type:"address"},{internalType:"uint256",name:"tokenId_",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account_",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId_",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"looksrare",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"marketplacesApproved",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"opensea",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId_",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from_",type:"address"},{internalType:"address",name:"to_",type:"address"},{internalType:"uint256",name:"tokenId_",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from_",type:"address"},{internalType:"address",name:"to_",type:"address"},{internalType:"uint256",name:"tokenId_",type:"uint256"},{internalType:"bytes",name:"data_",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"saleState",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"operator_",type:"address"},{internalType:"bool",name:"approved_",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"},{internalType:"string",name:"newBaseExtension",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newLooksrare",type:"address"}],name:"setLooksrare",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOpensea",type:"address"}],name:"setOpensea",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newSaleState",type:"uint256"}],name:"setSaleState",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newUnrevealedURI",type:"string"}],name:"setUnrevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId_",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"toggleMarketplacesApproved",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index_",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account_",type:"address"},{internalType:"uint256",name:"index_",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from_",type:"address"},{internalType:"address",name:"to_",type:"address"},{internalType:"uint256",name:"tokenId_",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner_",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unrevealedURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account_",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IERC1155",name:"token",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],name:"withdrawERC1155",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"withdrawERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IERC721",name:"token",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"withdrawERC721",outputs:[],stateMutability:"nonpayable",type:"function"}];console.log(b);var j="0x93939BaDF94214ecB2dE2FD1f172c559c6F6AF56",h=new y.eth.Contract(b,j);console.log(h);h.methods.saleState().call().then((function(e){console.log("Sale state is "+e),0==e?(p()("#mydiv").hide(),p()("#nft-num").hide(),p()("#mint-btn").html("Public sale not open yet"),p()("#mint-btn").prop("disabled",!0)):(p()("#mydiv").show(),p()("#nft-num").show(),p()("#mint-btn").html("Mint NFTs"),p()("#mint-btn").prop("disabled",!1))}));function f(){return(f=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.methods.totalSupply().call().then((function(e){console.log("Total supply is "+e),e<=100?h.methods.mint(t).send({to:j,from:window.ethereum.selectedAddress,value:"0"}):h.methods.mint(t).send({to:j,from:window.ethereum.selectedAddress,value:"10000000000000000"*t+""})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){!function(e){f.apply(this,arguments)}(p()("#nft-num").val())}var g=function(){var e;return Object(m.jsxs)("div",{className:"banner px-0 container-fluid banner__overlay","data-aos":"fade",children:[Object(m.jsx)("img",{className:"banner_img",src:"assets/banner.png",alt:""}),Object(m.jsxs)("div",{className:"banner_cont d-flex flex-column flex-md-row ",children:[Object(m.jsx)("div",{id:"mydiv",className:"col-md-3 div_style2",children:Object(m.jsxs)("div",{className:"d-flex w-100",children:[Object(m.jsx)("input",(e={className:"custom_style5675 input-lg w-100",id:"nft-num",name:"nft-num",type:"number"},Object(o.a)(e,"name","number"),Object(o.a)(e,"defaultValue","1"),Object(o.a)(e,"placeholder","1"),Object(o.a)(e,"min","1"),Object(o.a)(e,"max","10"),Object(o.a)(e,"readonly",!0),e)),Object(m.jsxs)("div",{className:"d-flex flex-column gap_8",children:[Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=parseInt(p()("#nft-num").val());e<10&&p()("#nft-num").val(e+1)},children:"+"}),Object(m.jsx)("button",{className:"btn btn-primary ",onClick:function(){var e=parseInt(p()("#nft-num").val());e>1&&p()("#nft-num").val(e-1)},children:"-"})]})]})}),Object(m.jsx)("span",{className:"d-flex justify-content-center",children:Object(m.jsx)("button",{type:"submit",className:"banner_btn w-100",id:"mint-btn",onClick:x,children:"Mint NFTs"})})]}),Object(m.jsx)("div",{className:"overlay_item"})]})};var v=function(){return Object(m.jsxs)("div",{className:"container-fluid p-0 banner__image2",children:[Object(m.jsx)("img",{className:"w-100 card__img ",src:"assets/banner.png",alt:""}),Object(m.jsxs)("div",{className:"banner__layer px-md-4 col-10 col-sm-8 col-md-7 col-lg-6 row text-white",children:[Object(m.jsx)("h1",{className:"w-100 text-center col-12 text-white text670",children:"Roadmap v1"}),Object(m.jsxs)("div",{className:"d-flex justify-content-center ",children:[Object(m.jsx)("h2",{className:"m-0 text679",children:"25%"}),Object(m.jsx)("p",{className:"px-4 m-0 text676",children:"Host our first of many giveaways to holders as a reward (100 FREE Big Bros)"})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-center ",children:[Object(m.jsx)("h2",{className:"m-0 text679",children:"50%"}),Object(m.jsx)("p",{className:"px-4 m-0 text676",children:"Open up Merch Store to show off your Bro"})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-center ",children:[Object(m.jsx)("h2",{className:"m-0 text679",children:"75%"}),Object(m.jsx)("p",{className:"px-4 m-0 text676",children:"Big Bros drawing competition. Winners will receive ETH, NFTs, and more"})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-center ",children:[Object(m.jsx)("h2",{className:"m-0 text679",children:"100%"}),Object(m.jsx)("p",{className:"px-4 m-0 text676",children:"One lucky Big Bro holder will receive an airdropped popular blue chip NFT"})]})]})]})};var O=function(){return Object(m.jsx)("div",{className:"container-fluid bg__blue px-0",children:Object(m.jsx)("div",{className:"container h_main d-flex align-items-center",children:Object(m.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(m.jsx)("div",{"data-aos":"slide-right",className:"col-md-5",children:Object(m.jsx)("img",{className:"w-100",src:"assets/head2.png",alt:""})}),Object(m.jsxs)("div",{"data-aos":"slide-left",className:"col-md-7 text-right",children:[Object(m.jsx)("h2",{className:"text-right",children:"What are Big Bros"}),Object(m.jsx)("p",{className:"line",children:"Big Bros is a collection of 10,000 tough Bros chilling on the Ethereum blockchain. The Big Bros are a combination of hand-drawn traits randomly designed together and generated through a computer program. Our mission as Bros is to grow as much as we can and support each Bro through rewards and giveaways."})]})]})})})};var w=function(){return Object(m.jsx)("div",{className:"conatiner-fuid  bg__color",children:Object(m.jsx)("div",{className:"container h_main  d-flex align-items-center",children:Object(m.jsx)("div",{className:"row d-flex align-items-center",children:Object(m.jsxs)("div",{className:"col-md-8 text-start",children:[Object(m.jsx)("h2",{"data-aos":"fade-right",children:"Why own a Big Bro?"}),Object(m.jsx)("p",{"data-aos":"slide-right",className:"line",children:"Who doesn\u2019t want a Big Bro. On a more serious note, owning a Big Bro doesn\u2019t only give you a revolutionized PFP but it gives you access to events, giveaways, and our airdrops. Big Bros is aimed to be mainly community driven. And because of that, all Big Bros holders will own full rights to their NFT. The team at Big Bros is excited for this journey and is committed to provide support and guidance as a Big Bro should always do."})]})})})})};var T=function(){return Object(m.jsx)("div",{className:"container-fluid px-0 bg__blue",children:Object(m.jsx)("div",{className:"container h_main d-flex align-items-center",children:Object(m.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(m.jsx)("div",{className:"col-md-5",children:Object(m.jsx)("img",{className:"w-100 anim_check","data-aos":"zoom-out-right",src:"assets/head4.png",alt:""})}),Object(m.jsxs)("div",{className:"col-md-7 text-right",children:[Object(m.jsx)("h2",{className:"text-right","data-aos":"zoom-in-up",children:"We are giving away to our Bros!"}),Object(m.jsx)("p",{className:"line","data-aos":"fade-right",children:"There are many problems in the world. Whether it\u2019s world hunger, war, abuse, or hate towards others. A very important goal for us is to donate some of our proceeds to an unfortunate cause. This shall be decided through the Bro community and what is the best way to contribute."})]})]})})})};var N=function(){return Object(m.jsx)("div",{className:"container-fluid bg__color px-0",children:Object(m.jsxs)("div",{className:"faqs container pt-0 mt-md-0 py-md-4","data-aos":"fade-right","data-aos-delay":"200","data-aos-duration":"2000ms",children:[Object(m.jsx)("h1",{className:"text-black faqs__heading mb-3 mt-md-3",children:"FAQS"}),Object(m.jsx)("h2",{children:"Why own a Big Bro?"}),Object(m.jsx)("p",{children:"Owning a Big Bro doesn\u2019t only give you a revolutionized PFP but it gives you access to events, giveaways, and our airdrops. Big Bros is aimed to be mainly community driven. And because of that, all Big Bros holders will own full rights to their NFT. The team at Big Bros is excited for this journey and is committed to provide support and guidance as a Big Bro should always do."}),Object(m.jsx)("h2",{children:"How can you mint?"}),Object(m.jsx)("p",{children:"Minting a Big Bro is simple. Have your wallet setup (MetaMask preferred) with some ETH loaded in. Once you\u2019re all set with setting up a wallet, go ahead and hit the \u201cconnect wallet\u201d button on our site. After that, you will be able to mint by clicking the \u201cMint\u201d button. Upon entering the amount of Bros you want and confirming the transaction you are done. You now own a Big Bro."}),Object(m.jsx)("h2",{children:"What\u2019s next?"}),Object(m.jsx)("p",{children:"Once you minted your Big Bros, you can check them out on OpenSea! Make sure to follow and keep notifications on for our Twitter to ensure you don\u2019t miss out on the giveaways we mentioned."}),Object(m.jsx)("h2",{children:"What do you own with a Big Bro?"}),Object(m.jsx)("p",{children:"Not only do you get an amazing PFP but owning a Big Bro means you own everything about it. IP rights included. Wanna make some merch for your bro? Use your Big Bro as the design! There are endless things you can do by owning the IP rights of your Bro."}),Object(m.jsx)("h2",{children:"How many Big Bros are out there?"}),Object(m.jsx)("p",{className:"m-0 pb-3",children:"We plan on having a total of 10,000 Big Bros created. An approximate of 100 will be reserved strictly for the giveaways listed on our roadmap."})]})})};var _=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"container-fluid px-0 bg__blue",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("img",{className:" img__footer",src:"assets/head3.png",alt:""})})}),Object(m.jsx)("div",{className:" d-flex py-2 flex-column justify-content-center align-items-center bg__footer py-0",children:Object(m.jsx)("p",{className:"m-0 ",children:"2022 \xa9 All Rights Reserved"})})]})},B=n(18),M=n(105),k=n(38),F=n(257);var I=function(){var e=Object(a.useState)(null),t=Object(k.a)(e,2),n=(t[0],t[1]),s=Object(a.useState)(null),i=Object(k.a)(s,2),r=(i[0],i[1]),o=Object(a.useState)(null),l=Object(k.a)(o,2),c=(l[0],l[1]),d=Object(a.useState)("Connect Wallet"),u=Object(k.a)(d,2),p=u[0],y=u[1],b=function(e){r(e),j(e.toString())},j=function(e){window.ethereum.request({method:"eth_getBalance",params:[e,"latest"]}).then((function(e){c(F.a.utils.formatEther(e))})).catch((function(e){n(e.message)}))},h=function(){window.location.reload()};return Object(a.useEffect)((function(){window.ethereum&&(window.ethereum.on("accountsChanged",b),window.ethereum.on("chainChanged",h))}),[]),Object(m.jsx)("div",{className:"walletCard",children:Object(m.jsx)("button",{"data-aos":"slide-down","data-aos-easing":"linear","data-aos-duration":"1000",className:"styling__btn89 px-3  rounded ml-4",onClick:function(){window.ethereum&&window.ethereum.isMetaMask?(console.log("MetaMask Here!"),window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){b(e[0]),y("Wallet Connected"),j(e[0])})).catch((function(e){n(e.message)}))):(console.log("Need to install MetaMask"),n("Please install MetaMask browser extension to interact"))},children:p})})};n(569);function A(e){var t=e.hideMenu,n=Object(B.e)();return Object(a.useEffect)((function(){t()}),[n]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(B.c,{children:Object(m.jsx)(B.a,{path:"/about",element:Object(m.jsx)(C,{})})})})}function C(){return Object(m.jsx)("h1",{className:"m-0"})}var S=function(){var e=Object(a.useRef)(null);return Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{className:"navbars",children:Object(m.jsxs)("div",{className:"navbar-container ",children:[Object(m.jsxs)("a",{"data-aos":"slide-down",href:"#",className:"d-flex align-items-center brand-title ",children:[Object(m.jsx)("img",{className:"logo",src:"assets/head2.png",alt:""}),Object(m.jsx)("h1",{className:"m-0 logo__title text-black",children:"Big Bros"})]}),Object(m.jsx)("button",{onClick:function(t){e.current.classList.toggle("menu-collapse")},className:"navbar-toggler",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{ref:e,className:"navbar-links menu-collapse",children:Object(m.jsxs)("ul",{className:"links-lists m-0",children:[Object(m.jsx)("li",{className:"nav-items","data-aos":"slide-down","data-aos-easing":"linear","data-aos-duration":"1000",children:Object(m.jsx)(M.Link,{activeClass:"is-active",className:"nav-links",to:"rarity",spy:!0,smooth:!0,children:"About"})}),Object(m.jsx)("li",{"data-aos":"slide-down","data-aos-easing":"linear","data-aos-duration":"1000",className:"nav-items",children:Object(m.jsx)(M.Link,{activeclassname:"is-active",className:"nav-links",spy:!0,smooth:!0,to:"bg__color",children:"Team"})}),Object(m.jsx)("li",{"data-aos":"slide-down","data-aos-easing":"linear","data-aos-duration":"1000",className:"nav-items",children:Object(m.jsx)(M.Link,{activeclassname:"is-active",className:"nav-links",to:"faqs",spy:!0,smooth:!0,children:"FAQ"})}),Object(m.jsx)("li",{className:"nav-items","data-aos":"slide-down","data-aos-easing":"linear","data-aos-duration":"1000"}),Object(m.jsx)("li",{className:"nav-items","data-aos":"slide-down","data-aos-easing":"linear","data-aos-duration":"1000",children:Object(m.jsx)("a",{href:"https://twitter.com/bigbrosnfts",target:"_blank",children:Object(m.jsx)("i",{className:"bi bi-twitter nav__icon"})})}),Object(m.jsx)("div",{children:Object(m.jsx)(I,{})})]})})]})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(A,{hideMenu:function(){e.current.classList.contains("menu-collapse")||e.current.classList.add("menu-collapse")}})})]})};var R=function(){return Object(m.jsx)("div",{className:"container-fluid bg__yellow px-0",children:Object(m.jsxs)("div",{className:"rarity container h_main d-flex flex-column  align-items-center",children:[Object(m.jsx)("h1",{className:"mb-4",children:"Rarity"}),Object(m.jsx)("div",{className:"col-md-10 px-md-4 py-md-0","data-aos":"slide-right","data-aos-once":"true","data-aos-delay":"500",children:Object(m.jsx)("img",{className:"w-100",src:"assets/rarity.png",alt:""})})]})})};var E=function(e){var t=e.name,n=e.title,a=e.img;return Object(m.jsx)("div",{className:"col-md-3  pb-1 px-md-4  text-center","data-aos":"flip-left","data-aos-delay":"500",children:Object(m.jsxs)("div",{className:"px-3 py-3 pb-1 border_team",children:[Object(m.jsx)("img",{className:"w-100 border__img",src:a,alt:""}),Object(m.jsx)("h3",{className:"my-0 text-black mt-4 text-capitalize ",children:t}),Object(m.jsx)("p",{className:"m-0 font_2g text-center text-capitalize",children:n})]})})};var P=function(){return Object(m.jsx)("div",{className:"container-fluid bg__blue px-0",children:Object(m.jsxs)("div",{className:"container h_main text-center mt-0 my-md-0 mb-md-0 pt-0 py-md-4",children:[Object(m.jsx)("h1",{children:"Meet The Team"}),Object(m.jsxs)("div",{className:"row g-3 my-5 justify-content-center",children:[Object(m.jsx)(E,{name:"Tyler",title:"developer",img:"assets/CoolBros.png"}),Object(m.jsx)(E,{name:"Chris",title:"Founder",img:"assets/CoolBros2.png"}),Object(m.jsx)(E,{name:"George",title:"developer",img:"assets/CoolBros3.png"})]})]})})},U=n(256),W=n.n(U);n(570);var L=function(){return Object(a.useEffect)((function(){W.a.init({duration:1e3,easing:"ease-in-out-cubic",mirror:!0})}),[]),Object(m.jsxs)("div",{className:"App ",children:[Object(m.jsx)(S,{}),Object(m.jsx)(g,{}),Object(m.jsx)(O,{}),Object(m.jsx)(w,{}),Object(m.jsx)(T,{}),Object(m.jsx)(v,{}),Object(m.jsx)(R,{}),Object(m.jsx)(P,{}),Object(m.jsx)(N,{}),Object(m.jsx)(_,{})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,574)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))},z=n(146);r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(z.a,{children:Object(m.jsx)(L,{})})}),document.getElementById("root")),H()}},[[571,1,2]]]);
//# sourceMappingURL=main.4d3f995b.chunk.js.map
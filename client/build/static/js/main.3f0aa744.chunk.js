(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(65)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),l=a.n(o),c=(a(35),a(36),a(37),a(27)),s=a(6),i=a(7),u=a(8),m=a(10),d=a(9),h=a(11),v=function(e){var t=e.children;return r.a.createElement("section",{className:"header"},t)};function f(e){var t=e.children,a=e.id;return r.a.createElement("div",{className:"container",id:a},t)}function p(e){var t=e.id,a=e.children;return r.a.createElement("section",{className:"row",id:t},a)}function k(e){var t=e.className,a=e.children;return r.a.createElement("ul",{className:t},a)}function b(e){var t=e.children;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(f,{key:"nav-container"},r.a.createElement(k,{className:"navbar-list"},t)))}function E(e){var t=e.children,a=e.id;return r.a.createElement("li",{className:"navbar-item",id:a},t)}function g(e){var t=e.children,a=e.id,n=e.onClick;return r.a.createElement("button",{className:"button button-primary delete",type:"button",id:a,onClick:n},t)}function y(e){var t=e.children,a=e.onClick,n=e.id,o=e.title,l=e.author,c=e.synopsis,s=e.image,i=e.link;return r.a.createElement("button",{className:"button button-primary save",type:"button",id:n,onClick:a,"data-title":o,"data-author":l,"data-synopsis":c,"data-image":s,"data-link":i},t)}function S(){return r.a.createElement("button",{className:"button button-primary",type:"submit",id:"submit"},r.a.createElement("i",{className:"fa fa-search"}))}var w=function(e){var t=e.onSubmit,a=e.value,n=e.onChange;return r.a.createElement("form",{id:"search-form",onSubmit:t},r.a.createElement("input",{type:"search",id:"search-form",placeholder:"I want to read...",value:a,onChange:n}),r.a.createElement(S,null))},N=function(e){var t=e.className,a=e.onClick,n=e.children;return r.a.createElement("a",{className:t,onClick:a,href:"/",rel:"noopener noreferrer"},n)},B=function(){return r.a.createElement("section",{className:"footer"},r.a.createElement("br",null),r.a.createElement("br",null))},I=a(13),C=a.n(I),j={searchBooks:function(e){return C.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&maxResults=40")},getSavedBooks:function(){return C.a.get("/api/books")},saveBook:function(e){return C.a.post("/api/books",e)},deleteBook:function(e){return C.a.delete("/api/books/"+e)}},O=function(e){var t=e.alt,a=e.src;return r.a.createElement("img",{alt:t,src:a})};function D(e){var t=e.children;return r.a.createElement("section",{className:"cards-container"},t)}function L(e){var t=e.opacity,a=e.children;return r.a.createElement("section",{className:"card",style:{opacity:t}},a)}var P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSaveBook=function(e){var t=e.target.id;console.log("key: "+t),a.props.savedId.push(t),console.log(a.props.savedId);var n={title:e.target.dataset.title,author:e.target.dataset.author,synopsis:e.target.dataset.synopsis,image:e.target.dataset.image,link:e.target.dataset.link};a.props.savedBooks.push(n),j.saveBook(n).then(function(e){console.log("successful save")}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{id:"row-two-publiclibrary"},r.a.createElement("h4",null,"Public Library")),r.a.createElement(p,{id:"row-three-searchcards"},this.props.books.length?r.a.createElement(D,null,this.props.books.map(function(t,a){return r.a.createElement(L,{key:"card-"+a,opacity:e.props.savedId.includes(t.volumeInfo.title+"-"+a)?.5:1},r.a.createElement(O,{alt:t.volumeInfo.title,src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:""}),r.a.createElement(N,{className:"book",href:t.volumeInfo.previewLink},r.a.createElement("strong",null,r.a.createElement("i",null,t.volumeInfo.title))," by ",t.volumeInfo.authors),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,t.volumeInfo.description),r.a.createElement(y,{key:"btn-"+a,id:t.volumeInfo.title+"-"+a,onClick:e.handleSaveBook,title:t.volumeInfo.title,author:t.volumeInfo.authors,synopsis:t.volumeInfo.description,image:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"",link:t.volumeInfo.previewLink},"Save"))})):r.a.createElement("h5",null,"No books to display, try a new search.")))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){e.preventDefault();var t=e.target.id;j.deleteBook(t).then(function(e){a.props.getSvdBks(),console.log("successful delete")}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{id:"row-two-yourlibrary"},r.a.createElement("h4",null,"Your Library")),r.a.createElement(p,{id:"row-three-savedcards"},this.props.savedBooks.length?r.a.createElement(D,null,this.props.savedBooks.map(function(t,a){return r.a.createElement(L,{key:"card-"+a},r.a.createElement(O,{alt:t.title,src:t.image?t.image:"",key:"img-"+a}),r.a.createElement(N,{className:"book",href:t.link},r.a.createElement("strong",null,r.a.createElement("i",null,t.title))," by ",t.author),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,t.synopsis),r.a.createElement(g,{key:"save-"+a,id:t._id,onClick:e.handleDelete},"Delete"))})):r.a.createElement("h5",null,"No saved books, try a new search to find books to save.")))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],savedBooks:[],savedId:[],title:"",author:"",synopsis:"",image:"",link:"",search:"",savedPage:!1},a.getSavedBooks=function(){j.getSavedBooks().then(function(e){a.setState({savedBooks:e.data})})},a.handleInputChange=function(e){var t=e.target.value;a.setState({search:t})},a.handleSearchSubmit=function(e){e.preventDefault(),j.searchBooks(a.state.search).then(function(e){a.setState({books:e.data.items})}).catch(function(e){return console.log(e)})},a.onClickHome=function(e){e.preventDefault(),a.setState({savedPage:!1})},a.onClickSaved=function(e){e.preventDefault(),a.setState({savedPage:!0}),a.getSavedBooks()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){return r.a.createElement(f,{id:"main"},r.a.createElement(v,null,r.a.createElement("h1",{className:"title"},"Google Books Search"),r.a.createElement("h4",null,"What's next on your reading list?")),r.a.createElement(b,null,r.a.createElement(E,{id:"nav-home"},r.a.createElement(N,{className:"navbar-link",onClick:this.onClickHome},"Home")),r.a.createElement(E,{id:"nav-saved"},r.a.createElement(N,{className:"navbar-link",onClick:this.onClickSaved},"Saved books")),r.a.createElement(E,{id:"nav-search"},r.a.createElement(w,{onSubmit:this.handleSearchSubmit,value:this.state.search,onChange:this.handleInputChange}))),r.a.createElement("br",null),!this.state.savedPage&&r.a.createElement(P,this.state),this.state.savedPage&&r.a.createElement(x,Object.assign({},this.state,{getSvdBks:this.getSavedBooks})),r.a.createElement(B,null))}}]),t}(n.Component);var H=function(){return r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:A}),r.a.createElement(s.a,{exact:!0,path:"/books",component:x})))};l.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3f0aa744.chunk.js.map
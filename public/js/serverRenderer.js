module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="MRYV")}({"/y+7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("h74D"),u=n("9At1"),a=n("OI6c"),i=(r=a)&&r.__esModule?r:{default:r};var c=(0,n("oncg").withRouter)((0,o.connect)(function(e){return{query:e.appReducers.searchOptions.searchText}},function(e){return{onSearch:function(){e((0,u.fetchPostsIfNeeded)())},setFilter:function(t){e((0,u.setSearchFilter)(t))}}})(i.default));t.default=c},"0Cox":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("cDcd"),a=(r=u)&&r.__esModule?r:{default:r};var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hasError:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.default.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}();t.default=i},"1qsq":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("h74D"),u=n("9At1"),a=n("6xGy"),i=(r=a)&&r.__esModule?r:{default:r};var c=(0,o.connect)(null,function(e){return{onSort:function(t){e((0,u.sortMovies)(t))}}})(i.default);t.default=c},"2+E1":function(e,t){e.exports={movieDetails:"movieDetails-726ea",movieText:"movieDetails-b8d94",rate:"movieDetails-f976b",awards:"movieDetails-7ab94",releaseYear:"movieDetails-4c4cf",duration:"movieDetails-7c4bf"}},"2nN9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("cDcd"),a=(r=u)&&r.__esModule?r:{default:r};n("CW/e");var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.concatenateGenres=n.concatenateGenres.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"concatenateGenres",value:function(e){return 1==e.length?e:e.join(" & ")}},{key:"render",value:function(){var e=this.props,t=e.item,n=e.onClick;return a.default.createElement("div",{className:"movieItem",onClick:n},a.default.createElement("img",{src:t.poster_path}),a.default.createElement("div",{className:"movieDescription"},a.default.createElement("span",{className:"title"},t.title),a.default.createElement("div",{className:"year"},new Date(t.release_date).getFullYear()),a.default.createElement("p",null,this.concatenateGenres(t.genres))))}}]),t}();t.default=i},"4DCN":function(e,t){e.exports=require("redux-logger")},"6Q/G":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("cDcd"),u=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return u.default.createElement("span",null," ",e.value," movies found ")}},"6xGy":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("cDcd"),a=(r=u)&&r.__esModule?r:{default:r};n("gklp");var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),o(t,[{key:"render",value:function(){var e=this.props.onSort;return a.default.createElement("div",{className:"searchby"},a.default.createElement("span",{className:"title"},"Sort by"),a.default.createElement("label",null,a.default.createElement("input",{type:"radio",value:"date",id:"date",name:"sorting",onClick:function(){return e(!0)}}),a.default.createElement("label",{htmlFor:"date"},"release date")),a.default.createElement("label",null,a.default.createElement("input",{type:"radio",value:"rate",id:"rate",name:"sorting",onClick:function(){return e(!1)}}),a.default.createElement("label",{htmlFor:"rate"},"rating")))}}]),t}();t.default=i},"72G+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("cDcd"),u=p(o),a=n("oncg"),i=p(n("M2sI")),c=p(n("aypy")),l=p(n("tl5v")),f=p(n("KKqr")),s=p(n("k/xx"));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props.onBackToSearch,t={backgroundImage:"url("+c.default+")"};return u.default.createElement("header",{className:i.default.AppHeader,style:t},u.default.createElement("h3",{className:i.default.AppLogo,alt:"logo"},"netflixroulette"),u.default.createElement(a.Switch,null,u.default.createElement(a.Route,{path:"/film/:id",render:function(t){return u.default.createElement("div",null,u.default.createElement("input",{type:"button",value:"SEARCH",className:i.default.searchNavigator,onClick:function(){t.history.push("/"),e(!1)}}),u.default.createElement(s.default,null))}}),u.default.createElement(a.Route,{path:"*",render:function(){return u.default.createElement("div",null,u.default.createElement(l.default,null),u.default.createElement(f.default,null))}})))}}]),t}();t.default=d},"7ITC":function(e,t){e.exports=require("react-dom/server")},"8Vax":function(e,t){e.exports=require("babel-polyfill")},"9At1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.REQUEST_POSTS="REQUEST_POSTS",o=t.REQUEST_MOVIE="REQUEST_MOVIE",u=t.RECEIVE_POSTS="RECEIVE_POSTS",a=t.BUILD_MOVIES_CACHE_KEY="BUILD_MOVIES_CACHE_KEY",i=t.INVALIDATE_MOVIES="INVALIDATE_MOVIES",c=t.GET_MOVIE_DETAILS="GET_MOVIE_DETAILS",l=t.SWITCH_HEADER_VIEW="SWITCH_HEADER_VIEW",f=t.SET_FILTER="SET_FILTER",s=t.SET_SEARCH_TEXT="SET_SEARCH_TEXT",p=t.buildMoviesCacheKey=function(e,t){return{type:a,movieGenre:e,search:t}},d=(t.invalidateMovies=function(e){return{type:i,searchBy:e}},t.requestPosts=function(e){return{type:r,searchBy:e}}),h=t.receivePosts=function(e,t){return{type:u,searchBy:e,movies:t.data}},y=t.requestMovie=function(e){return{type:o,id:e}},v=t.receiveMovieDetails=function(e,t){return{type:c,id:e,movie:t}},m=(t.switchHeaderView=function(e){return{type:l,isDetails:e}},t.setSearchFilter=function(e){return{type:f,filter:e}},t.setSearchText=function(e){return{type:s,text:e}},"http://react-cdp-api.herokuapp.com/movies"),b=(t.fetchMovieDetails=function(e){return function(t){return t(y(e)),fetch(m+"/"+e).then(function(e){return e.json()}).then(function(n){return t(v(e,n))}).then(function(e){return t(b("genres",e.movie.genres[0]))})}},t.sortMovies=function(e){return function(t,n){var r=n().appReducers,o=r.moviesCacheKeys,u=r.moviesBySearch[o];if(void 0!=u&&0!=u.items.length){e?u.items.sort(function(e,t){return e.release_date<t.release_date}):u.items.sort(function(e,t){return e.vote_average<t.vote_average});var a={};a.data=u.items,t(h(o,a))}}},t.fetchPostsIfNeeded=function(e,t){return function(n,r){var o=r().appReducers,u=o.searchOptions,a=e||u.filter,i=t||u.searchText;n(p(a,i));var c=(o=r().appReducers).moviesCacheKeys;if(function(e,t){var n=e.moviesBySearch[t];return!n||!n.isFetching&&n.didInvalidate}(o,c))return n(function(e,t,n){return function(r){return r(d(e)),fetch(m+"?searchBy="+t+(n?"&search="+n:"")).then(function(e){return e.json()}).then(function(t){return r(h(e,t))})}}(c,a,i))}})},"9ClG":function(e,t){e.exports=require("react-hot-loader")},"9VmX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n("W+0S"),n("8Vax");var o=n("cDcd"),u=y(o),a=(y(n("M2sI")),n("h74D")),i=(n("9At1"),n("MGin")),c=y(n("cxpO")),l=y(n("eQak")),f=y(n("uJOV")),s=y(n("jkto")),p=y(n("oOpE")),d=y(n("0Cox")),h=n("oncg");function y(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=(e.moviesCacheKeys,e.movies),n=e.isFetching,r=t.length,o=0===t.length;return u.default.createElement("div",null,u.default.createElement(d.default,null,u.default.createElement(c.default,null),u.default.createElement(l.default,{moviesCount:r}),u.default.createElement(i.Switch,null,u.default.createElement(i.Route,{path:"/(film|search)?",render:function(){return u.default.createElement(f.default,{movies:t,isFetching:n,isEmpty:o})}}),u.default.createElement(i.Route,{path:"*",component:p.default})),u.default.createElement(s.default,null)))}}]),t}();t.default=(0,h.withRouter)((0,a.connect)(function(e){var t=e.appReducers,n=t.moviesCacheKeys,r=t.moviesBySearch[n]||{isFetching:!1,items:[]},o=r.isFetching;return{moviesCacheKeys:n,movies:r.items,isFetching:o,location:e.routerReducer.location}})(v))},"CW/e":function(e,t){e.exports={movieItem:"movieItem-851d0",year:"movieItem-5868f",title:"movieItem-6a501",movieDescription:"movieItem-fb2cc"}},ILtA:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),n("W+0S"),n("8Vax");var r=c(n("cDcd")),o=n("9ClG"),u=n("h74D"),a=(n("4DCN"),n("nNRk"),n("oncg"));n("p2bk");var i=c(n("9VmX"));function c(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.hot)(e)(function(e){var t=e.Router,n=e.location,o=e.context,c=e.store,l=e.history;return r.default.createElement(u.Provider,{store:c},r.default.createElement(t,{history:l,context:o,location:n},r.default.createElement(a.Route,{component:i.default})))})}).call(this,n("YuTi")(e))},JYHj:function(e,t){e.exports={statusBar:"statusBar-cae0b",searchby:"statusBar-919bc",title:"statusBar-dd62b"}},KKqr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("h74D"),u=n("9At1"),a=n("SGcA"),i=(r=a)&&r.__esModule?r:{default:r};var c=(0,o.connect)(null,function(e){return{onFilterClick:function(t){e((0,u.setSearchFilter)(t))}}})(i.default);t.default=c},L7ru:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("rKB8"),o=a(n("YhH6")),u=a(n("ZSx1"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return(0,r.createStore)(o.default,e,(0,r.applyMiddleware)(u.default))}},M2sI:function(e,t){e.exports={AppLogo:"app-08eb9",AppHeader:"app-255cb",AppTitle:"app-a0bca",searchNavigator:"app-3b82c"}},MGin:function(e,t){e.exports=require("react-router")},MRYV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function(e,t){var n=(0,i.default)(),c=r.default.createElement(a.default,{context:{},location:e.url,Router:u.StaticRouter,store:n}),l=(0,o.renderToString)(c),f=n.getState(),s=function(e,t){return' \n    <!doctype html>\n    <html>\n        <head>\n            <meta charset=utf-8>\n            <title>React Server Side Rendering</title>\n            <link href="/css/main.css" rel="stylesheet" type="text/css">\n        </head>\n        <body>\n            <div id="root">'+e+"</div>\n            <script>\n                window.PRELOADED_STATE = "+JSON.stringify(t).replace(/</g,"\\u003c")+'\n            <\/script>\n            <script src="/js/main.js"><\/script>\n        </body>\n    </html>\n    '}(l,f);t.send(s)}};var r=c(n("cDcd")),o=n("7ITC"),u=n("oncg"),a=c(n("ILtA")),i=c(n("L7ru"));n("nNRk");function c(e){return e&&e.__esModule?e:{default:e}}},OI6c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n("cDcd")),u=a(n("rwqZ"));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.PureComponent),r(t,[{key:"componentWillMount",value:function(e){var t=this.props,n=t.match,r=t.setFilter,o=t.onSearch,u=n.params[0];u&&u.match("/search/(.+)")&&(r("title"),o())}},{key:"render",value:function(){var e=this.props,t=e.onSearch,n=e.query,r=e.history;e.match;return o.default.createElement("div",null,o.default.createElement("input",{type:"button",value:"SEARCH",className:u.default.searchButton,onClick:function(){r.push("/search/"+n),t()}}))}}]),t}();t.default=i},QKvR:function(e,t){e.exports={resultBody:"resultBody-adc70",emptyResults:"resultBody-72d22"}},QSTJ:function(e,t){e.exports={searchBar:"searchBar-eb55a"}},SGcA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n("cDcd")),u=i(n("gklp")),a=i(n("/y+7"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={searchByTitle:!0},n.toggleSearchFilter=n.toggleSearchFilter.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"toggleSearchFilter",value:function(e){this.setState(function(e){return{searchByTitle:!e.searchByTitle}}),e(this.state.searchByTitle?"genres":"title")}},{key:"render",value:function(){var e=this,t=this.props.onFilterClick,n=this.state.searchByTitle;return o.default.createElement("div",{className:u.default.searchby},o.default.createElement("span",{className:u.default.title},"search by"),o.default.createElement("label",{className:u.default.sTitle},o.default.createElement("input",{type:"radio",name:"toggle",defaultChecked:n,onClick:function(){return e.toggleSearchFilter(t)}}),o.default.createElement("span",null,"title")),o.default.createElement("label",{className:u.default.sGenre},o.default.createElement("input",{type:"radio",name:"toggle",checked:!n,onClick:function(){return e.toggleSearchFilter(t)}}),o.default.createElement("span",null,"genres")),o.default.createElement(a.default,null))}}]),t}();t.default=c},VBvZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("cDcd"),a=(r=u)&&r.__esModule?r:{default:r};n("QSTJ");var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.match.params[0],r="";if(n){var o=n.match("/search/(.+)");o&&2==o.length&&(r=o[1],t(r))}return a.default.createElement("div",null,a.default.createElement("h1",{className:"App-title"},"Find your movie"),a.default.createElement("input",{type:"text",defaultValue:r,onChange:function(e){return t(e.target.value)},className:"searchBar"}))}}]),t}();t.default=i},"W+0S":function(e,t){e.exports=require("isomorphic-fetch")},YhH6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("rKB8"),u=n("cokx"),a=(r=u)&&r.__esModule?r:{default:r},i=n("nNRk");var c=(0,o.combineReducers)({appReducers:a.default,routerReducer:i.routerReducer});t.default=c},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZSx1:function(e,t){e.exports=require("redux-thunk")},aypy:function(e,t,n){e.exports=n.p+"src/assets/header.jpg?248efca35eecc79df62aaa801d62194e"},cDcd:function(e,t){e.exports=require("react")},cokx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n("rKB8"),u=(n("nNRk"),n("9At1"));var a=(0,o.combineReducers)({moviesBySearch:function(){var e,t,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1];switch(a.type){case u.INVALIDATE_MOVIES:case u.RECEIVE_POSTS:case u.REQUEST_POSTS:return r({},o,(e={},t=a.searchBy,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,items:[]},t=arguments[1];switch(t.type){case u.INVALIDATE_MOVIES:return r({},e,{didInvalidate:!0});case u.REQUEST_POSTS:return r({},e,{isFetching:!0,didInvalidate:!1});case u.RECEIVE_POSTS:return r({},e,{isFetching:!1,didInvalidate:!1,items:t.movies});default:return e}}(o[a.searchBy],a),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));default:return o}},moviesCacheKeys:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"title",t=arguments[1];switch(t.type){case u.BUILD_MOVIES_CACHE_KEY:return(t.movieGenre||e)+":"+(t.search||"");default:return e}},movieDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case u.REQUEST_MOVIE:return r({},e,{isFetching:!0,didInvalidate:!1});case u.GET_MOVIE_DETAILS:return r({},e,{isFetching:!1,didInvalidate:!1,item:t.movie,isDetailsView:!0});case u.SWITCH_HEADER_VIEW:return r({},e,{isDetailsView:t.isDetails});default:return e}},searchOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{filter:"title",searchText:""},t=arguments[1];switch(t.type){case u.SET_FILTER:return r({},e,{filter:t.filter});case u.SET_SEARCH_TEXT:return r({},e,{searchText:t.text});default:return e}}});t.default=a},cxpO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("h74D"),u=n("oncg"),a=n("9At1"),i=n("72G+"),c=(r=i)&&r.__esModule?r:{default:r};var l=(0,u.withRouter)((0,o.connect)(function(e){return{movie:e.appReducers.movieDetails.item}},function(e){return{onBackToSearch:function(t){e((0,a.switchHeaderView)(t))}}})(c.default));t.default=l},dxL6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("cDcd"),u=l(o);n("JYHj");var a=n("MGin"),i=l(n("6Q/G")),c=l(n("1qsq"));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.genre,n=e.moviesCount;return u.default.createElement("div",{className:"statusBar"},u.default.createElement(a.Switch,null,u.default.createElement(a.Route,{path:"/film/:id",render:function(){return u.default.createElement("span",null,"Films by ",t," genre")}}),u.default.createElement(a.Route,{path:"/",render:function(){return u.default.createElement("div",null,u.default.createElement(i.default,{value:n}),u.default.createElement(c.default,null))}})))}}]),t}();t.default=f},eQak:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("h74D"),u=n("9At1"),a=n("dxL6"),i=(r=a)&&r.__esModule?r:{default:r};var c=(0,n("oncg").withRouter)((0,o.connect)(function(e){return{genre:(t=e.appReducers.movieDetails.item,t?t.genres[0]:"")};var t},function(e){return{onSearchByGenre:function(t){e((0,u.fetchPosts)(t))}}})(i.default));t.default=c},gklp:function(e,t){e.exports={searchby:"searchFilter-d675f",title:"searchFilter-cb65a"}},h74D:function(e,t){e.exports=require("react-redux")},i2Qh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("cDcd"),u=i(o);n("QKvR");var a=i(n("2nN9"));n("MGin");function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.isEmpty,r=e.movies,o=e.getMovieDetails,i=e.history;return u.default.createElement("div",null,n?t?u.default.createElement("h2",null,"Loading..."):u.default.createElement("div",{className:"emptyResults"},u.default.createElement("h1",null,"No films found.")):u.default.createElement("div",{className:"resultBody"},r.map(function(e){return u.default.createElement(a.default,{key:e.title,item:e,onClick:function(){o(e.id),i.push("/film/"+e.id)}})})))}}]),t}();t.default=c},jkto:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("cDcd"),a=(r=u)&&r.__esModule?r:{default:r};n("M2sI");var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),o(t,[{key:"render",value:function(){return a.default.createElement("footer",null,a.default.createElement("h3",{className:"App-logo"},"netflixroulette"))}}]),t}();t.default=i},"k/xx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("h74D"),u=n("9At1"),a=n("vm6i"),i=(r=a)&&r.__esModule?r:{default:r};var c=(0,n("oncg").withRouter)((0,o.connect)(function(e,t){return{movie:e.appReducers.movieDetails}},function(e){return{onMovieDetails:function(t){e((0,u.fetchMovieDetails)(t))}}})(i.default));t.default=c},nNRk:function(e,t){e.exports=require("react-router-redux")},oOpE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("cDcd"),u=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.location;return u.default.createElement("div",null,u.default.createElement("h3",null,"Page not found for ",u.default.createElement("code",null,t.pathname)))}},oncg:function(e,t){e.exports=require("react-router-dom")},p2bk:function(e,t){},rKB8:function(e,t){e.exports=require("redux")},rwqZ:function(e,t){e.exports={searchButton:"searchButton-c8624"}},tl5v:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("h74D"),u=n("9At1"),a=n("oncg"),i=n("VBvZ"),c=(r=i)&&r.__esModule?r:{default:r};var l=(0,a.withRouter)((0,o.connect)(null,function(e){return{onSearchChange:function(t){e((0,u.setSearchText)(t))}}})(c.default));t.default=l},uJOV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("h74D"),u=n("9At1"),a=n("i2Qh"),i=(r=a)&&r.__esModule?r:{default:r};var c=(0,n("oncg").withRouter)((0,o.connect)(function(e,t){var n=e.appReducers,r=n.moviesBySearch[n.moviesCacheKeys];return{movies:r?r.items:[]}},function(e){return{getMovieDetails:function(t){e((0,u.fetchMovieDetails)(t))}}})(i.default));t.default=c},vm6i:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("cDcd"),a=(r=u)&&r.__esModule?r:{default:r};n("2+E1");var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){var e=this.props.movie,t=e.isFetching,n=e.item;return a.default.createElement("div",null,t?a.default.createElement("h2",null,"Loading..."):a.default.createElement("div",{className:"movieDetails"},a.default.createElement("img",{src:n.poster_path}),a.default.createElement("div",{className:"movieText"},a.default.createElement("h2",null,n.title),a.default.createElement("span",{className:"rate"},n.vote_average),a.default.createElement("p",{className:"awards"},n.genres.join(" & ")),a.default.createElement("p",null,a.default.createElement("span",{className:"releaseYear"},new Date(n.release_date).getFullYear()),a.default.createElement("span",{className:"duration"},n.runtime," min")),a.default.createElement("p",null,n.overview))))}}]),t}();t.default=i}});
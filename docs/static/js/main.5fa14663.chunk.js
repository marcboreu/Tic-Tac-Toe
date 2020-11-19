(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{15:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var c=s(8),r=s(3),n=s(4),i=s(6),a=s(5),l=s(0),o=s(1),b=s.n(o),h=s(7),j=s.n(h),d=(s(15),s(16),function(e){var t="btn btn-outline-light square"+(e.lineWinner?" winnerSquares":"");return Object(l.jsx)("button",{className:t,onClick:e.onClick,children:e.value})}),u=function(e){Object(i.a)(s,e);var t=Object(a.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"renderSquare",value:function(e){var t=this,s=this.props.winnerLineSquare;return Object(l.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},lineWinner:s&&s.includes(e)},e)}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++){for(var s=[],c=0;c<3;c++)s.push(this.renderSquare(3*t+c));e.push(Object(l.jsx)("div",{className:"board-row",children:s},t))}return Object(l.jsx)("div",{className:"col-xs-12 col-md-9 board-container-render",children:e})}}]),s}(b.a.Component),m=function(e){Object(i.a)(s,e);var t=Object(a.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,isAscending:!0},c}return Object(n.a)(s,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),s=t[t.length-1].squares.slice();x(s).winner||s[e]||(s[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:s,latestMove:e}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleSortToggle",value:function(){this.setState({isAscending:!this.state.isAscending})}},{key:"render",value:function(){var e,t=this,s=this.state.history,c=s[this.state.stepNumber],r=x(c.squares),n=r.winner,i=s.map((function(e,s){var c=e.latestMove,r=1+c%3,n=1+Math.floor(c/3),i=s?"    Go to move n:".concat(s,"    Position: col ").concat(r," - row ").concat(n):Object(l.jsx)("i",{className:"fa fa-play","aria-hidden":"true",children:Object(l.jsx)("p",{children:"\xa0\xa0Go to game start"})});return Object(l.jsx)("li",{children:Object(l.jsx)("button",{className:s===t.state.stepNumber?"btn btn-info btn-moves btn-block move-list-item-selected":"btn btn-dark btn-moves btn-block",onClick:function(){return t.jumpTo(s)},children:i})},s)}));e=n?Object(l.jsx)("div",{className:"col-xs-12 status-win",children:"Player ".concat(n," wins! Congrats!")}):n||10!==i.length?Object(l.jsxs)("div",{className:"col-xs-12 status",children:["Next player : ",this.state.xIsNext?"X":"O"]}):Object(l.jsx)("div",{className:"col-xs-12 status-draw",children:"Anyone wins, play again!"});var a=this.state.isAscending;return a||i.reverse(),Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{className:"title-container",children:Object(l.jsx)("h1",{className:"title",children:"Tic Tac Toe"})}),Object(l.jsxs)("div",{className:"col-12 game-board",children:[Object(l.jsx)("div",{className:"row",children:e}),Object(l.jsxs)("div",{className:"row justify-content-center",children:[Object(l.jsx)("div",{className:"col-xs-12 col-md-9 board-container",children:Object(l.jsx)(u,{squares:c.squares,onClick:function(e){return t.handleClick(e)},winnerLineSquare:r.line})}),Object(l.jsxs)("div",{className:"col-xs-12 col-md-3 game-moves",children:[Object(l.jsxs)("button",{className:"btn btn-light btn-moves",onClick:function(){return t.handleSortToggle()},children:[Object(l.jsx)("i",{className:"fa fa-sort","aria-hidden":"true",children:"\xa0\xa0"}),a?"Descending":"Ascending"]}),Object(l.jsx)("ol",{children:i})]})]})]}),Object(l.jsx)(O,{})]})}}]),s}(b.a.Component),x=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var r=Object(c.a)(t[s],3),n=r[0],i=r[1],a=r[2];if(e[n]&&e[n]===e[i]&&e[n]===e[a])return{winner:e[n],line:t[s]}}return{winner:null,line:null}},O=function(){var e=(new Date).getFullYear();return Object(l.jsxs)("div",{className:"site-footer",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm-12 col-md-9",children:[Object(l.jsx)("h6",{children:"About this"}),Object(l.jsx)("a",{href:"https://github.com/marcboreu/Tic-Tac-Toe",children:Object(l.jsx)("button",{className:"btn btn-outline-danger btn-code",children:"View Code"})}),Object(l.jsxs)("p",{className:"text-about",children:["# Tic-Tac-Toe Game with Create React App",Object(l.jsx)("br",{}),"Game tic-tac-toe vitaminated",Object(l.jsx)("br",{}),"### 1.1. First Commit with orginal code",Object(l.jsx)("br",{}),"Original code after first practise. All made in only one index.js file. No components & hooks estructure.",Object(l.jsx)("br",{}),"### 1.2. New Skills",Object(l.jsx)("br",{}),"1. Display the location for each move in the format (col, row) in the move history list.",Object(l.jsx)("br",{}),"2. Bold the currently selected item in the move list.",Object(l.jsx)("br",{}),"3. Rewrite Board to use two loops to make the squares instead of hardcoding them.",Object(l.jsx)("br",{}),"4. Add a toggle button that lets you sort the moves in either ascending or descending order.",Object(l.jsx)("br",{}),"5. When someone wins, highlight the three squares that caused the win.",Object(l.jsx)("br",{}),"6. When no one wins, display a message about the result being a draw.",Object(l.jsx)("br",{})]})]}),Object(l.jsxs)("div",{className:"col-xs-12 col-md-3",children:[Object(l.jsx)("h6",{children:"Quick Links"}),Object(l.jsxs)("ul",{className:"footer-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://marcboreu.github.io/personal/",children:"About me"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://marcboreu.github.io/personal/",children:"Contact me"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/marcboreu/",children:"Linkedin"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://marcboreu.github.io/personal/portfolio",children:"Portfolio"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/marcboreu?tab=repositories",children:"Repositories"})})]})]})]}),Object(l.jsx)("hr",{})]}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-8 col-sm-6 col-xs-12",children:Object(l.jsxs)("p",{className:"copyright-text",children:["Copyright \xa9 ",e," All Rights Reserved || Created and developed by \xa0",Object(l.jsxs)("a",{href:"https://marcboreu.com",target:"_blank",rel:"noreferrer",children:["Marc Boreu",Object(l.jsx)("img",{className:"marcboreu",src:"https://raw.githubusercontent.com/marcboreu/marcboreu/main/logo-footer-mb.png",alt:"Marc Boreu",target:"_blank"})]})]})}),Object(l.jsx)("div",{className:"col-md-4 col-sm-6 col-xs-12",children:Object(l.jsxs)("ul",{className:"social-icons",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"github",href:"https://github.com/marcboreu",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fa fa-github"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"linkedin",href:"https://www.linkedin.com/in/marcboreu/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})})]})};j.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.5fa14663.chunk.js.map
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Square = (props) => {
  const className = "btn btn-outline-light square" + (props.lineWinner ? ' winnerSquares' : '');
  return (
    <button 
      className={className}
      onClick={props.onClick}
    >{props.value}
    </button>
  );
}

class Board extends React.Component {
  
  renderSquare(i) {
    const winnerLineSquare = this.props.winnerLineSquare;
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        lineWinner={winnerLineSquare && winnerLineSquare.includes(i)}
      />
    );
  }

  render() {
    let squares = [];
    for (let i = 0; i < 3; i++) {
      let rows = [];
      for (let j= 0; j < 3; j++) {
        rows.push(this.renderSquare(i * 3 + j));
      }
      squares.push(<div className="board-row" key={i}>{rows}</div>)
    }

    return (
      <div className="col-xs-12 col-md-9 board-container-render">
        {squares}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      isAscending: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          // Store the index of the latest moved square
          latestMove: i,
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  handleSortToggle() {
    this.setState({
      isAscending: !this.state.isAscending
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winnerInfo = calculateWinner(current.squares);
    const winner = winnerInfo.winner;


    let moves = history.map((step, move) => {
      const latestMove = step.latestMove;
      const col = 1 + latestMove % 3;
      const row = 1 + Math.floor(latestMove / 3);
      const desc = move ?
        `    Go to move n:${move}    Position: col ${col} - row ${row}` :
        <i className="fa fa-play" aria-hidden="true"><p>&nbsp;&nbsp;Go to game start</p></i>;
      return (
        <li key={move}>
          <button 
              className={move === this.state.stepNumber ?
                'btn btn-info btn-moves btn-block move-list-item-selected' :
                'btn btn-dark btn-moves btn-block'}
              onClick={() => this.jumpTo(move)}
            >{desc}
            </button>
        </li>
      );
    });


    let status;
      if (winner) {
        status = <div className="col-xs-12 status-win">{(`Player ${winner} wins! Congrats!`)}</div>;
      } else {
        if (!winner && (moves.length === 10)) {
        status = <div className="col-xs-12 status-draw">Anyone wins, play again!</div>
        } else {
          status = <div className="col-xs-12 status">Next player : {(this.state.xIsNext ? 'X' : 'O')}</div>
        }
      }


    const isAscending = this.state.isAscending;
      if (!isAscending) {
        moves.reverse();
      }
    

    return (
      <div className="game">
        <div className="title-container">
          <h1 className="title">Tic Tac Toe</h1>
        </div>
        <div className="col-12 game-board">
            <div className="row">
              {status}
            </div>
          <div className="row justify-content-center">
            <div className="col-xs-12 col-md-9 board-container">
              <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
              winnerLineSquare={winnerInfo.line}
            />
            </div>
            <div className="col-xs-12 col-md-3 game-moves">
            <button 
              className='btn btn-light btn-moves'
              onClick={() => this.handleSortToggle()}><i className="fa fa-sort" aria-hidden="true">&nbsp;&nbsp;</i>
              {isAscending ? 'Descending' : 'Ascending'}
            </button>
              <ol>{moves}</ol>
            </div>
          </div>
        </div>
        <FooterMarcBoreu/>
      </div>
    );
  }
}

// ========================================

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i],
      };
    }
  }
  return {
    winner: null,
    line: null,
  };
};









const FooterMarcBoreu = () => {
  
  const date = new Date().getFullYear();

  return (
        <div className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-9">
                <h6>About this</h6>
                <a href="https://github.com/marcboreu/Tic-Tac-Toe">
                <button className="btn btn-outline-danger btn-code">View Code</button>
                </a>
                <p className="text-about">
                # Tic-Tac-Toe Game with Create React App
                <br/>
                Game tic-tac-toe vitaminated
                <br/>
                ### 1.1. First Commit with orginal code
                <br/>
                Original code after first practise.
                All made in only one index.js file. No components & hooks estructure.
                <br/>
                ### 1.2. New Skills
                <br/>
                1. Display the location for each move in the format (col, row) in the move history list.
                <br/>
                2. Bold the currently selected item in the move list.
                <br/>
                3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
                <br/>
                4. Add a toggle button that lets you sort the moves in either ascending or descending order.
                <br/>
                5. When someone wins, highlight the three squares that caused the win.
                <br/>
                6. When no one wins, display a message about the result being a draw.
                <br/>
                </p>
              </div>
              <div className="col-xs-12 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="https://marcboreu.github.io/personal/">About me</a></li>
                  <li><a href="https://marcboreu.github.io/personal/">Contact me</a></li>
                  <li><a href="https://www.linkedin.com/in/marcboreu/">Linkedin</a></li>
                  <li><a href="https://marcboreu.github.io/personal/portfolio">Portfolio</a></li>
                  <li><a href="https://github.com/marcboreu?tab=repositories">Repositories</a></li>
                </ul>
              </div>
            </div>
            <hr/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright &copy; {date} All Rights Reserved || Created and developed by &nbsp;
                  <a href="https://marcboreu.com" target="_blank" rel="noreferrer">
                   Marc Boreu 
                  <img className="marcboreu" src="https://raw.githubusercontent.com/marcboreu/marcboreu/main/logo-footer-mb.png" alt="Marc Boreu" target="_blank"/>
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="github" href="https://github.com/marcboreu" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
                  <li><a className="linkedin" href="https://www.linkedin.com/in/marcboreu/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>   
                </ul>
              </div>
            </div>
          </div>
        </div>
  );
};



ReactDOM.render(<Game />, document.getElementById("root"));

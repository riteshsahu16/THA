import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function ReactCard(){
  return (

    <div className="card">
      <div id="card-one">
        <img src="data:image/jpeg;base64,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" alt="could not load image" />
          <div className="text">
           <h2>React Card</h2>
            <p>This is a card</p>
          </div>
      </div>
      
     <div id="card-two">
        <div className="board">
          <div className="chess-board">
              <div className="line">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>

              <div className="line">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>

              <div className="line">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>

              <div className="line">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>

              <div className="line">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>

              <div className="line">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>

              <div className="line">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>

              <div className="line">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>
              
            </div>
          </div>
        </div>
      
    </div>
  )
}

ReactDOM.render(
  <ReactCard></ReactCard>, document.getElementById("root")

);

import React, { Component } from 'react';
class Card extends Component {
   state = {}
   render() { 
      return (
         <div className="main">
            <div className="css">
               <header>
                  <style>
                  </style>
               </header>
               </div>
            <div className="card">
               <div className="card-content">
                  <div className="header">
                     <h4>The best game ever is</h4>
                  </div>
               <p>gta game series is <em>the best</em> <strong>serie of game</strong></p>
               <a href="www.google.com">google is here</a>
               </div>
            </div>
         </div>
      );
   }
}
export default Card;
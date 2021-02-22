import React from 'react';
import logo from './logo.svg';
import './Main.scss';
function Main () {
    return(
        <main>
        <h2>Super Cool h2</h2>
        <h3>Super Cool h3</h3>
        <div className="item">
          <h4 className="item-title">Item-title</h4>
          <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed architecto natus nisi voluptates, placeat quaerat tempora fugit? Nihil assumenda voluptates porro eius exercitationem?</p>
          <img className="item-img" src={logo} alt="" />
        </div>
      </main>
    )
}

export default Main;
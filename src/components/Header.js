import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
  render(){
    return(
        <div class = "head">
            <header>
                <hgroup>
                <h1 class = "title"><a href="index.html" >다시모임</a></h1>
                </hgroup>
                <ul id = {"left_select"}>
                <li id="to_home">
                    <a href="https://tfs247.tistory.com" target="_blank">
                    <span>로그아웃</span>
                    </a>
                </li>
                </ul>
        </header>
      </div>
    );
  }
}

export default Header;

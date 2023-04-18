import { Component } from 'react';
import styled from 'styled-components';
import './footer-app.css';

class FooterApp extends Component{
  HeaderButton = styled.button`
    margin: 50px 0 20px 0;
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #000;
    padding-right: 40px;
    border: 0 solid white;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0);
    transition: color .2s linear;
    :hover {
        color: #6f6d6d;
        font-size: 14px;
    }
  
`;

LinerStile = styled.div`
    display: flex;
    justify-content: space-between;
        padding-top: 10px;
        padding-bottom: 10px;
        position: relative;
        align-items: center;
        width: 200px;
        height: 20px;
        margin: 0 auto;
    span {
        content: '';
        display: block;
        width: 60px;
        height: 2px;
        background-color: #000;
    }
    `;


  render() {
    const {ChangePage} = this.props;
    return (
    <div className="footer-app">
        
            <img src='images/VectorBlack.png' alt=''/>
            <this.HeaderButton onClick={() => ChangePage(1)}>Coffee house</this.HeaderButton>
            <this.HeaderButton onClick={() => ChangePage(2)}>Our coffee</this.HeaderButton>
            <this.HeaderButton onClick={() => ChangePage(3)}>For your pleasure</this.HeaderButton>
      
        <this.LinerStile>
            <span></span> 
            <img src='images/Group-1.png' alt=''/>
            <span></span>
        </this.LinerStile>
    </div>
  )}
}

export default FooterApp;
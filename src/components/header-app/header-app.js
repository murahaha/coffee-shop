import { Component } from 'react';
import './header-app.css';
import styled from 'styled-components';

const HeaderImg = styled.div`
        flex: 1 1 auto;
        min-height: 100%;
        width: 1440px;
        height: ${props => props.height};
        background: ${props => props.background};
        
    `;


const  ContentHeader = styled.div`
        text-align: center;
        font-size: 14px;
        height: 100%;
        font-family: 'Merienda';
        font-style: normal;
        font-weight: 700;
        h1 { 
            font-size: 40px;
            line-height: 58px;
            margin-top: ${props => props.margin};
            margin-bottom: 10px;
        }
        h2 {
            font-size: 24px;
            line-height: 35px;
            
            margin-bottom: 20px;
        }
    `;

const LinerStile = styled.div`
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
            background-color: #fff;
        }
    `;

const Button = styled.button`

        font-family: 'Merienda';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        padding: 8px 44px;
        border: 1px solid white;
        border-radius: 3px;
        background-color: rgba( 0,0,0, 0);
        transition: color .2s linear;
        :hover {
            background-color: rgba( 0,0,0, .2);
            color: #bdb5b5;
        }
    
    `;

class HeaderApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pages: '1' 
        }
    }
    
    
    activePage = () => {
        const {page} = this.props.configPage;
        // eslint-disable-next-line default-case
        switch (+page) {
            
            case 1:
                return(
                <ContentHeader margin={'120px'}>
                <h1>Everything You Love About Coffee</h1>
                <LinerStile>
                    <span></span> 
                    <img src='images/Group.png' alt=''/>
                    <span></span>
                </LinerStile>
                <h2>We makes every day full of energy and taste</h2>
                <h2>Want to try our beans?</h2>
                <Button>More</Button>
                </ContentHeader>);
            case 2:
                return(
                <ContentHeader>
                    <h1>Our Coffee</h1>
                </ContentHeader>);
            case 3:     
                return (
                <ContentHeader>
                    <h1>For your pleasure</h1>
                </ContentHeader>);
            case 4: 
                return (
                    <ContentHeader>
                        <h1>Our Coffee</h1>
                    </ContentHeader>);
        }

    }


    render() {
        const {ChangePage} = this.props;
        const {background, height} = this.props.configPage;
        return (
            <HeaderImg background={background}
                        height={height}>   
                <div className="header-app">
                    <img src='images/VectorsmollLogo.png' alt=''/>
                    <button onClick={() => ChangePage(1)}>Coffee house</button>
                    <button onClick={() => ChangePage(2)}>Our coffee</button>
                    <button onClick={() => ChangePage(3)}>For your pleasure</button>
                </div>
                {this.activePage()}
            </HeaderImg>
          )
    }
}





export default HeaderApp;
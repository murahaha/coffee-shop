import { Component } from 'react';
import styled from 'styled-components';
import './about-app.css';
import TabsApp from '../tabs-app/tabs-app';
import AppFilter from '../filter-app/filter-app';


class AboutApp extends Component{ 
    constructor(props) {
        super(props);
        this.state = {
            configPage: this.props.configPage,
            contentPages: this.props.contentPages
        }
    }

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
Content = styled.div`
padding-left: 40px;
    align-items: center;
    margin-top: 30px;
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 400;
    max-width: 580px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    padding-bottom: 100px;
    white-space: pre-wrap;

    color: #000000;
`;
BestItems = styled.div`
        width:100%;
        height: 495px;
        align-items: center;
        
        background: url(images/Mask_Group.jpg);
`;
AllItems = styled.div`
        width:100%;
        align-items: center;
`;
Flex = styled.div`
    margin:30px auto;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    display: flex;
    flex-wrap:wrap;
    width: 61%;

        
`;
Img = styled.img`
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
    margin-right: 40px;
`;
Prod = styled.div`
    text-align: left;
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    b {
        margin-right: 10px;
        font-size: 16px;
    }
`;
// eslint-disable-next-line no-dupe-class-members
Tab = (allItem) => {
    const {Data} = this.props;
    const elements = Data.map(item => {
        const {image, content, title, description, price, id} = item;
        return (<TabsApp
                key={id}
                image={image}
                content={content}
                title={title}
                description={description}
                price={price}
                SetProduct={this.SetProduct}
                ChangePage={this.props.ChangePage}
            />)});
        
    
    return allItem ? elements : elements.slice(0, 3);
}

BestItem = () => {
    return (
        <this.BestItems>
            <h1>Our best</h1>
        <this.Flex>
            {this.Tab()}
        </this.Flex>
        </this.BestItems>
    )
}

AllItem = (allItem) => {
    // const listArr = this.Tab(allItem).reduce((p,c) => {
    //     if(p[p.length-1].length === 3){
    //       p.push([]);
    //     }
    //     p[p.length-1].push(c);
    //     return p;
    //   }, [[]]);
    // const list = listArr.map(elem => {
    //     return (<this.Flex>
    //               {elem}
    //             </this.Flex>)
    // });
    return (
        <this.AllItems>
            <span></span>
            {this.SearchLine()}
            <this.Flex>{this.Tab(allItem)}</this.Flex>   
        </this.AllItems>
    )
}

SearchLine = () => {
     if(this.props.configPage.page === 2) {return (<AppFilter filterBy={this.props.filterBy}
        onUpdateSearch={this.props.onUpdateSearch}
        findIndex={this.props.findIndex}
        term={this.props.term}/>)}
}

Product = () => {
    const {title, description, price} = this.state;
    return (<this.Prod>
            <p><b>County:</b>{title}</p>
            <p><b>Description:</b>{description}</p>
            <p><b>Price:</b>{price}</p>
        </this.Prod>)
}

SetProduct = (title, description, price) => {
    this.setState({title: title, description: description, price: price})
}


  render() {
    const {bestItem, allItem, content, title, image, product} = this.state.contentPages[this.props.configPage.page - 1];
    // console.log(this.configPage.page);
    return (
    <div className="about-app">
        <div className="tabs-content">
            <this.Img src={image} alt=""/>
            <div className="second-tabs-content">        
                <h1>{title}</h1>
                <this.LinerStile>
                    <span></span> 
                    <img src='images/Group-1.png' alt=''/>
                    <span></span>
                </this.LinerStile>
                <this.Content> 
                    {product ? this.Product() : content}
                </this.Content>
            </div>
        </div>
        {bestItem ? this.BestItem(): null}
        {allItem ? this.AllItem(allItem): null}
    </div>
  )}
}

export default AboutApp;
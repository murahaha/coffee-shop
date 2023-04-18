import { Component } from 'react';
import FooterApp from '../footer-app/footer-app';
import HeaderApp from '../header-app/header-app';
import AboutApp from '../about-app/about-app';

import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {image: 'images/815O9ktyfUL.png',content: 'Solimo Coffee Beans 2 kg',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', title: 'Brazil', price: '6.99$',  id: 11},
        {image: 'images/91Ryk2gKejL.png',content: 'AROMISTICO Coffee 1 kg',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', title: 'Kenya', price: '6.99$', id: 12},
        {image: 'images/71qBQnpQFYL.png',content: 'Presto Coffee Beans 1 kg',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', title: 'Columbia', price: '6.99$', id: 13},
        {image: 'images/815O9ktyfUL.png',content: 'Solimo Coffee Beans 2 kg',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', title: 'Madagascar', price: '6.99$', id: 14},
        {image: 'images/71qBQnpQFYL.png',content: 'Presto Coffee Beans 2 kg',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', title: 'Italy', price: '6.99$', id: 15},
        {image: 'images/815O9ktyfUL.png',content: 'Solimo Coffee Beans 2 kg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', title: 'Madagascar', price: '6.99$', id: 17},
        {image: 'images/71qBQnpQFYL.png',content: 'Presto Coffee Beans 2 kg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', title: 'Italy', price: '6.99$', id: 18},
        {image: 'images/815O9ktyfUL.png',content: 'Solimo Coffee Beans 1 kg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', title: 'Guatemala', price: '6.99$', id: 16}
      ],
      configPage: {
        page: '1',
        background: 'url(images/Main_bg.jpg)',
        height: '640px'
      },
      contentPages: [
        {
          height: '640px', 
          background: 'url(images/Main_bg.jpg)', 
          content: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.\n\n Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.`,
          title: 'About Us', 
          bestItem: true, 
          finderBar: false, 
          allItem: false,
          product: false, 
          id: 1
        },
        {
          height: '260px', 
          background: 'url(images/coffee-2179009_1920.png)', 
          image: 'images/girl-865304_1920.jpg', 
          content: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. \n \n Afraid at highly months do things on at. Situation recommend objection do intention so questions.\n As greatly removed calling pleased improve an. \n Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.', 
          title: 'About our beans', 
          bestItem: false, 
          finderBar: true, 
          allItem: true, 
          product: false,
          id: 2
        },
        {
          height: '260px', 
          background: 'url(images/Mask_Group-1.jpg)', 
          image: 'images/coffee-839233_1920.png', 
          content: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. \n \n Afraid at highly months do things on at. Situation recommend objection do intention so questions.\n As greatly removed calling pleased improve an. \n Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.', 
          title: 'About our goods', 
          bestItem: false, 
          finderBar: false, 
          allItem: true, 
          product: false, 
          id: 3
        },
        {
          height: '260px', 
          background: 'url(images/coffee-2179009_1920.png)', 
          image: 'images/81tGmkXdGLL.jpg', 
          title: 'About It', 
          bestItem: false, 
          finderBar: false, 
          allItem: false, 
          product: true,
          id: 4
        }

      ],
      findIndex: 'all',
      term: ''
    }
  }

  searchEmp = (items, term, findIndex) => {
    if (term.length === 0 ) {
      return this.state.configPage.page === 2 ? this.filterBtns(items, findIndex) : items
    }
    return this.filterBtns(items, findIndex).filter(item => {
      return this.state.configPage.page === 2 ? item.content.indexOf(term) > -1 : items
    })
 }

 filterBtns = (items, findIndex) => {
  switch (findIndex) {
    case 'Brazil':
      return items.filter(item => item.title === findIndex);
    case 'Kenya':
      return items.filter(item => item.title === findIndex);
      case 'Columbia':
        return items.filter(item => item.title === findIndex);
    default:
      return items;
  }
 }

  ChangePage = (page) => {
    
    const index = this.state.contentPages.findIndex(elem => elem.id === page);
     this.setState(({configPage, term}) => {
      configPage = {page: (index + 1), background: this.state.contentPages[index].background, height: this.state.contentPages[index].height};
      if (page !== '2') {
        term = '';}
      return {configPage, term}; 
    })
  }

  filterBy = (key) => { 
    this.setState({findIndex: key})
  }

  onUpdateSearch = (term) => {
    
    this.setState({term});
   }
   onUpdateItem = (listItem) => {
    const id = listItem.id;
    this.state.data.forEach((item, i) => {
        if(id === item.id) {
            this.setState(state => {
                state.data[i] = listItem;
            })
        }
    })
   }


  render() {
    const {data, term, findIndex} = this.state;
    const newData = this.searchEmp(data, term, findIndex);
    return (
    <div className='App'>
      <HeaderApp contentPages={this.state.contentPages}
                  configPage={this.state.configPage}
                  ChangePage={this.ChangePage}/>
      <AboutApp  Data={newData}
                  contentPages={this.state.contentPages}
                  configPage={this.state.configPage}
                  index={false}
                  filterBy={this.filterBy}
                  onUpdateSearch={this.onUpdateSearch}
                  findIndex={findIndex}
                  term={this.state.term}
                  ChangePage={this.ChangePage}/>
      <FooterApp ChangePage={this.ChangePage}/> 
    </div>
  )
}
}

export default App;

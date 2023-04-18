import './tabs-app.css';

const  TabsApp = ({image, content, title, description, price, ChangePage, SetProduct}) => {
  return (
    <div className="tabs-app"
        onClick={() => {ChangePage(4);
          SetProduct(title, description, price)}}>  
        <img src={image} alt=""/>
        <p>{content}</p>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}

export default TabsApp;
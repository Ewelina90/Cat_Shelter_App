import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar.jsx';
import CatTable from './cattable.jsx';
import CatBasket from './catbasket.jsx';

document.addEventListener('DOMContentLoaded', () => {

    class App extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                filterText : '',
                likesKids : false,
                picture : '',
                clickOff : true,
                currentCatName : '',
            };
        }

        handleBoxCheck = (event) => {
            this.setState({
                likesKids : !this.state.likesKids,
            });
        };

        handleSearchChange = (value) => {
            this.setState({
                filterText : value,
            });
        };

        handlePictureClick = (catPicture,catName) => {
            this.setState({
                picture : catPicture,
                currentCatName : catName,
                clickOff: false,
            });
        };

        handleClickOf = (event) => {
            this.setState({
                picture : '',
                clickOff: true,
            });
        };

        render() {
            if(this.state.picture){

                return(
                    <CatBasket picture={this.state.picture} currentCatName={this.state.currentCatName} onImgClick={this.handleClickOf}/>
                )
            }else if(this.state.clickOff){
                return (
                    <div className="container">
                        <h1 className="title">ADOPT A C<span style={{color:'#b00e19'}}>A</span>T</h1>
                        <img style={{display:'inline-block'}} src="./images/logo_optimized_min.png"></img>
                        <div className="app">
                            <SearchBar filterText={this.state.filterText} likesKids={this.state.likesKids} onChange={this.handleBoxCheck} onFilter={this.handleSearchChange}/>
                            <CatTable kitties={this.props.kitties} filterText={this.state.filterText} likesKids={this.state.likesKids} onPictureClick={this.handlePictureClick}/>
                        </div>
                    </div>

                )
            }
        }
    }

    const kitties = [
     {category: "Male", age: "4", likesKids: true, name: "Fidel Catstro", picture:'./images/cat_1.jpg', pictureMin:'./images/cat_1_min.jpg'},
     {category: "Male", age: "9", likesKids: true, name: "Hairy Potter",picture:'./images/cat_2.jpg', pictureMin:'./images/cat_2_min.jpg'},
     {category: "Male", age: "2", likesKids: false, name: "Grumpy", picture:'./images/cat_3.jpg', pictureMin:'./images/cat_3_min.jpg'},
     {category: "Female", age: "1", likesKids: true, name: "Jude Paw", picture:'./images/cat_4.jpg', pictureMin:'./images/cat_4_min.jpg'},
     {category: "Female", age: "2", likesKids: false, name: "Lucifurr", picture:'./images/cat_5.jpg', pictureMin:'./images/cat_5_min.jpg'},
     {category: "Female", age: "3", likesKids: true, name: "Meowly Cyrus", picture:'./images/cat_6.jpg', pictureMin:'./images/cat_6_min.jpg'}
    ];

ReactDOM.render(
  <App kitties={kitties} />,
  document.getElementById('app')
)
});

import React from 'react';
import ReactDOM from 'react-dom';

class CatBasket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden : 'hidden',
        };
    }

    handleClickOf = (event) => {
        if(typeof this.props.onImgClick === 'function'){
            this.props.onImgClick();
        }
    };

    render() {
        return (
        <div className="catImg">
            <button className="closebtn" onClick={this.handleClickOf}>X</button>
            <figure>
                <img className="catPicture" src={this.props.picture} />
                <figcaption>{this.props.currentCatName}</figcaption>
            </figure>
        </div>
     )
    }
}

export default CatBasket;

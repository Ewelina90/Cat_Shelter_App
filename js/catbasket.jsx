import React from 'react';
import ReactDOM from 'react-dom';

class CatBasket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictureCopy : this.props.picture,
            hidden : 'hidden',
        };
    }

    handleClickOf = (event) => {
        if(typeof this.props.onImgClick === 'function'){
            this.props.onImgClick();
        }
    };

    handleBtnClick = (event) => {
        event.stopPropagation();
        this.setState({
            hidden : 'visible',
        });
    };

    render() {
        return (
        <div className="catImg">
            <button className="closebtn" onClick={this.handleClickOf}>X</button>
            <figure>
                <img className="catPicture" src={this.props.picture} />
                <figcaption>{this.props.currentCatName}</figcaption>
            </figure>

            <div className="basket">
                <img className='pictureCopy' style={{visibility: this.state.hidden}} src={this.state.pictureCopy} />
                <img className='pictureBasket' src='./images/basket.png' />
                <button className="buybtn" onClick={this.handleBtnClick}><span>Adopt</span></button>
            </div>
        </div>
     )
    }
}

export default CatBasket;

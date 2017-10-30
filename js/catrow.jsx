import React from 'react';
import ReactDOM from 'react-dom';

class CatRow extends React.Component {

    handleImgClick = (picture,catName) => {
        if(typeof this.props.onPictureClick === 'function'){
            this.props.onPictureClick(picture,catName);
        }
    };

    render() {
        const name = this.props.kitty.likesKids ?
        this.props.kitty.name : <span style={{color:'red'}}> {this.props.kitty.name}</span> ;

        return(
            <tr>
                <td><img style={{borderRadius: '50%' }}
                    src={this.props.kitty.pictureMin}
                    onClick={e => this.handleImgClick(this.props.kitty.picture ,this.props.kitty.name)}/>

                </td>
                <td>{name}</td>
                <td>{this.props.kitty.age}</td>
            </tr>
        )
    }
}

export default CatRow;

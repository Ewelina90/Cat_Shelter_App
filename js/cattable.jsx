import React from 'react';
import ReactDOM from 'react-dom';
import CatCategoryRow from './categoryrow.jsx';
import CatRow from './catrow.jsx';

class CatTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.kitties.forEach( kitty => {
            if(kitty.category !== lastCategory){
                rows.push(<CatCategoryRow category={ kitty.category } key={ kitty.category } />);
            }

            if(this.props.likesKids){
                if(kitty.likesKids){
                    rows.push(<CatRow kitty={kitty} key={kitty.name} onPictureClick={this.props.onPictureClick}/>);
                }
            }else if(this.props.filterText){
                const kityName = kitty.name.toLowerCase();
                const inputValue = this.props.filterText.toLowerCase();
                if(kityName.indexOf(inputValue) !== -1){
                    rows.push(<CatRow kitty={kitty} key={kitty.name} onPictureClick={this.props.onPictureClick} />);
                }
            }else{
                rows.push(<CatRow kitty={kitty} key={kitty.name} onPictureClick={this.props.onPictureClick}/>);
            }

            lastCategory = kitty.category;

        });

        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan='2'>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default CatTable;

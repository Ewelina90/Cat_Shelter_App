import React from 'react';
import ReactDOM from 'react-dom';

class CatCategoryRow extends React.Component {

    render() {
        return(
            <tr>
                <th className="category" colSpan='3'>{ this.props.category }</th>
            </tr>
        )
    }
}

export default CatCategoryRow;

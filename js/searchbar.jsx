import React from 'react';
import ReactDOM from 'react-dom';

    class SearchBar extends React.Component {

        handleBoxChecked = () => {
            if ( typeof this.props.onChange === 'function' ){
               this.props.onChange();
           }
       };

       handleInputChange = (event) => {
           if ( typeof this.props.onFilter === 'function' ){
               const value = event.target.value;
              this.props.onFilter(value);
          }
       };

        render() {
            return (
                <form>
                    <input type="text" value={this.props.filterText} onChange={this.handleInputChange} placeholder='Search...'/>
                    <p>
                        <input className="checkbox" type="checkbox" value={this.props.likesKids} onChange={this.handleBoxChecked}/>
                        Only show cats that loves kids
                    </p>
                </form>
            )
        }
    }

export default SearchBar;

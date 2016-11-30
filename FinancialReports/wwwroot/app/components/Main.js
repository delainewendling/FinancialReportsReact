import React, {PropTypes} from 'react';

class Main extends React.Component {
    render(){
      return ( 
        <div className = "main-container" > 
          { this.props.children } 
        </div>
      )
    } 
}
Main.propTypes = {
  children: PropTypes.object.isRequired
}

export default Main;
var React = require('react');

var Dots = React.createClass({

    render : function(){
        return (
            <ul className="indicators">
                {this.props.items.map(function(items, index){
                    return(
                        <li key={index} className={(index === this.props.activeIndex) ? "indicator-item active": "indicator-item" } onClick={this.props.dotsClick.bind(this,index)}></li>
                    );  
                }.bind(this))}
            </ul>
        )
    }
});

module.exports = Dots;
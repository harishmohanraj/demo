var React = require('react');

var Dots = React.createClass({
    createDots : function(items, i){
        var controlClasses =["indicator-item"];
        if(i === this.props.activeIndex){
            controlClasses.push(" active");
        }
        return(
            <li key={i} className={controlClasses.join(' ')} onClick={this.props.dotsClick.bind(this,i)}></li>
        );
    },

    render : function(){
        return (
            <ul className="indicators">
                {this.props.items.map(this.createDots)}
            </ul>
        )
    }
});

module.exports = Dots;
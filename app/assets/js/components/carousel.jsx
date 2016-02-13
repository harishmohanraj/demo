var
	React = require('react'),
    Item = require('./item.jsx'),
    Dots = require('./dots.jsx'),
    Arrow = require('./arrow.jsx');

var Carousel = React.createClass({
    getDefaultProps : function(){
        return{
            autoPlay : true,
            autoPlayInterval : 3000,
            infiniteScroll : true,
            showArrows : true,
            direction : 'left'
        }
    },

    propTypes : {
        data : React.PropTypes.object.isRequired,
        autoPlay : React.PropTypes.bool,
        autoPlayInterval: React.PropTypes.number,
        infiniteScroll:React.PropTypes.bool,
        showArrows:React.PropTypes.bool,
        direction : React.PropTypes.string
    },

    getInitialState: function(){
		return {
            width : window.outerWidth,
            activeIndex : 0,
            autoPlay : this.props.autoPlay,
            autoPlayInterval : this.props.autoPlayInterval,
            direction: this.props.direction,
            infiniteScroll : this.props.infiniteScroll,
            showArrows : this.props.showArrows

		}
	},
    autoScroll : function(){
        this._infiniteScroll = setInterval(function(){
            var activeIndex = this.state.activeIndex,
                length = this.props.data.items.length;

            this.setState({
                activeIndex : (activeIndex + 1) % length
            });

            if (!this.state.infiniteScroll && activeIndex + 1 === length - 1) {
                clearInterval(this._infiniteScroll);
            }

        }.bind(this),this.state.autoPlayInterval)
    },
    componentDidMount :function(){
        this.setState({
            width : this.refs.carouselComponent.getDOMNode().offsetWidth
        });
        if(this.state.autoPlay){
            this.autoScroll();
        }
    },
    dotsClick : function(currentIndex){
        if(currentIndex !== this.state.activeIndex){
            this.setState({
                activeIndex : currentIndex
            });
        }
        if (this.state.autoPlay) {
            clearInterval(this._infiniteScroll);
        }
    },
    slidePrev : function(){
        var direction = ((this.state.activeIndex + this.props.data.items.length) - 1) % this.props.data.items.length;
        this.slideTraverse(direction);
    },
    slideNext : function(){
        var direction = (this.state.activeIndex + 1) % this.props.data.items.length;
        this.slideTraverse(direction);
    },
    slideTraverse : function(direction){
        this.setState({
            activeIndex: direction
        });

        if (this.state.autoPlay) {
            clearInterval(this._infiniteScroll);
        }
    },
	render: function() {
        var children = this.props.data.items,
            width = this.state.width,
            trackWidth = width * children.length,
            trackPositionLeft = -(width * this.state.activeIndex),
            trackPositionRight = trackWidth - (width * (this.state.activeIndex + 1)),
            styleObj = (this.state.direction === 'left') ? { width: trackWidth, marginLeft: trackPositionLeft} : { width: trackWidth,  right: trackPositionRight, 'flexDirection' :'row-reverse'},
            arrowPropsObject = {
                infiniteScroll : this.state.infiniteScroll,
                activeIndex : this.state.activeIndex,
                length : children.length,
                showArrows : this.state.showArrows
            };
        return (
            <div>
                <div ref="carouselComponent" className="carousel carousel-component">
                    <div className="carousel-wrapper">
                            <Item slides={children} styleObj={styleObj}/>
                    </div>
                    <Arrow arrowType="left" slidePrev={this.slidePrev} arrowPropsObject={arrowPropsObject}/>
                    <Arrow arrowType="right" slideNext={this.slideNext} arrowPropsObject={arrowPropsObject}/>
                </div>
                <Dots items = {children} activeIndex = {this.state.activeIndex} dotsClick={this.dotsClick}/>
            </div>
		)
	}

});

module.exports = Carousel;

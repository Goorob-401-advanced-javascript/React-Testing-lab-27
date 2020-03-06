
import React from 'react';
// import 'counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
        counterDecrement = e => {
          e.preventDefault();
          //    this.setState({ count: this.state.count - 1 });
          let count = this.state.count - 1;
          console.log('__STATE__' ,this.state.count );
          this.updatePolarity(count);
        };

        counterIncrement = e => {
          e.preventDefault();
          //    this.setState({ count: this.state.count + 1 });
          let count = this.state.count + 1;
          console.log('__STATE__' ,this.state.count );
          this.updatePolarity(count);
        };
        updatePolarity(count) {
          let polarity = '';
          if (count > 0) {
            polarity = 'positive';
          } else if (count < 0) {
            polarity = 'negative';
          }
          this.setState({ count, polarity });
        }
        render() {
          let classes = ['count', this.state.polarity].join(' ');
          return (
            <div>
              <section> counter : {this.state.count}</section> 
              <p className={classes}>{this.state.polarity}</p>
              <button type="button" className="up" onClick={this.counterIncrement}><span>+</span></button>
              <button type="button" onClick={this.counterDecrement}><span>-</span></button>
                    
            </div>
          );
        }
   
}
export default Counter;
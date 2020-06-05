import React from 'react';
import Desktop from './Desktop';
import '98.css';
import './App.scss';
import { TitleBar, WindowBody } from './Default98';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      current: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateFromDisplay = this.updateFromDisplay.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  updateFromDisplay(num) {
    this.setState({
      current: num,
    });
  }

  render() {
    const { current } = this.state;
    return (
      <Desktop>
        <div className="window" id="Calculator">
          <TitleBar title="Calculator" />
          <WindowBody>
            <Display result={current} onChange={this.updateFromDisplay} />
            <ButtonPanel clickHandler={this.handleClick} />
          </WindowBody>

        </div>
      </Desktop>
    );
  }
}

export default App;

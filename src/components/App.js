import React from 'react';
import Desktop from './Desktop';
import '98.css';
import './App.scss';
import { TitleBar, WindowBody } from './Default98';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      // currentOperation: '',
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(newValue) {
    this.setState({
      value: newValue,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <Desktop>
        <div className="window" id="Calculator">
          <TitleBar title="Calculator" />
          <WindowBody>
            <Display value={value} onChange={this.updateValue} />
            <ButtonPanel onclick={this.updateValue} />
          </WindowBody>

        </div>
      </Desktop>
    );
  }
}

export default App;

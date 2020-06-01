import React from 'react';
import Desktop from './Desktop';
import '98.css';
import './App.scss';
import { TitleBar, WindowBody } from './Default98';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(newValue) {
    console.log(newValue);
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
          </WindowBody>

        </div>
      </Desktop>
    );
  }
}

export default App;

import React from 'react';
import Desktop from './Desktop';
import '98.css';
import './App.scss';
import { TitleBar, WindowBody } from './Default98';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import _calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
    this.updateResult = this.updateResult.bind(this);
  }

  updateResult(newResult) {
    this.setState({
      result: newResult,
    });
  }

  render() {
    const { result } = this.state;
    return (
      <Desktop>
        <div className="window" id="Calculator">
          <TitleBar title="Calculator" />
          <WindowBody>
            <Display result={result} onChange={this.updateResult} />
            <ButtonPanel onclick={this.updateResult} />
          </WindowBody>

        </div>
      </Desktop>
    );
  }
}

export default App;

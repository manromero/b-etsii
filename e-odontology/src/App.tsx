import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel)

class App extends React.Component<{}, {selected: boolean}> {

  constructor(props: {}) {
    super(props);
    this.state = {
      selected: false
    };
  }

  public render() {
    return (
      <div>
        {this.state.selected ?  
          <div>This is my favorite Food: <FontAwesomeIcon icon="stroopwafel" /> </div>
          : 
          <div>This is not my Food: <FontAwesomeIcon icon="stroopwafel" /> </div>
        }
        <button type="button" onClick={() => this.setState({selected: !this.state.selected})} className="btn btn-success">Success</button>
      </div>
    );
  }
}

export default App;

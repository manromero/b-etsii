import * as React from 'react';
import MinEventGroup from './components/MinEventGroup';

class App extends React.Component<{}, {selected: boolean}> {

  constructor(props: {}) {
    super(props);
    this.state = {
      selected: false
    };
  }

  public render() {
    return (
      <div className="container">
        <MinEventGroup />
      </div>
    );
  }
}

export default App;

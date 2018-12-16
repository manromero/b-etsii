import * as React from 'react';

class Collapse extends React.Component {

    public render() {
        return (
            <div className="row marginT1rem">
                <div className="col">
                    <button className="btn btn-primary btn-lg btn-block" type="button">
                        Button with data-target
                    </button>
                </div>
            </div>
        );
      }

}

export default Collapse;
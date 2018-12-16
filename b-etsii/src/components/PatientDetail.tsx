import * as React from 'react';
import PersonalData from './PersonalData';
import Collapse from './Collapse';

class PatientDetail extends React.Component {

    public render() {
        return (
            <div className="row">
                <div className="col">
                <div className="card">
                    <div className="card-body">
                        <PersonalData />
                        <Collapse />
                        <Collapse />
                        <Collapse />
                    </div>
                </div>                  
                </div>
                <div className="col">
                    Formulario abierto
                </div>
            </div>
        );
      }

}

export default PatientDetail;
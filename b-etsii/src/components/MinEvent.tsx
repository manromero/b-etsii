import * as React from 'react';

import * as cocina from '../assets/images/cocina.jpg';
import * as manro from '../assets/images/manro.jpg';

class MinEvent extends React.Component<{}, {}> {

    public render() {
        return (
            <div className="card with20rem">
                <img className="card-img-top" src={cocina} alt="Card image cap"/>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Lunes, 17 de diciembre 20:00</h6>
                    <h5 className="card-title">Card title</h5>
                    <div className="row">
                        <div className="col">
                            <img className="rounded-circle with4rem" src={manro}/>
                        </div>
                        <div className="col-8">
                            <p className="text-muted">Organizado por:</p>
                            <p>Miguel Ángel Núñez</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MinEvent;
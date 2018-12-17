import * as React from 'react';

// import * as cocina from '../assets/images/cocina.jpg';
import * as cardTop from '../assets/images/452818387.jpeg';
import * as manro from '../assets/images/manro.jpg';

class MinEvent extends React.Component<{}, {}> {

    public render() {
        return (
            <div className="card">
                <img className="card-img-top" src={cardTop} alt="Card image cap"/>
                {/* Padding bottom 0 */}
                <div className="card-body pb-0"> 
                    <h6 className="card-subtitle text-muted">Lunes, 17 de diciembre 20:00</h6>
                    <h5 className="card-title">Card title</h5>
                    <div className="d-flex flex-row bd-highlight align-items-center">
                        <div className="p-1 pt-0 bd-highlight">
                            <img className="rounded-circle with4rem" src={manro}/>
                        </div>
                        <div className="p-1 pl-2 bd-highlight">
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
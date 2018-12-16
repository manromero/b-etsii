import * as React from 'react';
import MinEvent from './MinEvent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft, faChevronRight)

class MinEventGroup extends React.Component<{}, {}> {

    public render() {
        return (
            <div className="row">
                <div className="col d-flex align-items-center">
                    <FontAwesomeIcon className="cPointer" icon="chevron-left" />
                </div>
                <div className="col">
                    <MinEvent />
                </div>
                <div className="col">
                    <MinEvent />
                </div>
                <div className="col">
                    <MinEvent />
                </div>
                <div className="col d-flex align-items-center">
                    <FontAwesomeIcon className="cPointer" icon="chevron-right" />
                </div>
            </div>
        );
    }

}

export default MinEventGroup;
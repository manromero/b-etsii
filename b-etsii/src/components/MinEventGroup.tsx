import * as React from 'react';
import MinEvent from './MinEvent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft, faChevronRight)

class MinEventGroup extends React.Component<{}, {showLRIcons: boolean}> {

    constructor(props: {}){
        super(props);
        this.state = {
            showLRIcons: false
        };
    }

    public render() {
        return (
            <div className="minEventGroupWrapper" onMouseOut={() => this.setState({showLRIcons: false})} onMouseOver={() => this.setState({showLRIcons: true})}>
                <div className="wrapperIcon">
                    <FontAwesomeIcon size="5x" className={this.state.showLRIcons ? 'cPointer' : 'cPointer hidden'} icon="chevron-left" />
                </div>
                <div className="d-flex flex-row bd-highlight mb-3 align-items-center clearfix">
                    <div className="p-2 bd-highlight">
                        <MinEvent />
                    </div>
                    <div className="p-2 bd-highlight">
                        <MinEvent />
                    </div>
                    <div className="p-2 bd-highlight">
                        <MinEvent />
                    </div>
                    <div className="p-2 bd-highlight">
                        <MinEvent />
                    </div>
                    <div className="p-2 bd-highlight">
                        <MinEvent />
                    </div>
                    <div className="p-2 bd-highlight">
                        <MinEvent />
                    </div>
                </div>
                <div className="wrapperIcon">
                    <FontAwesomeIcon size="5x" className={this.state.showLRIcons ? 'cPointer float-right' : 'cPointer float-right hidden'} icon="chevron-right" />
                </div>
            </div>
        );
    }

}

export default MinEventGroup;
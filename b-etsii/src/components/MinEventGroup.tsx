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
        this.scroll = this.scroll.bind(this);
    }

    /**
     * Realiza scroll sobre el contenido
     * @param num
     */
    public scroll(num: number): void {
        const elemento = document.getElementById('minEventGroupContent');
        const currentScroll = elemento!.scrollLeft;
        elemento!.scrollTo(currentScroll + num, 0);
    }

    public render() {
        return (
            <div className="minEventGroupWrapper" onMouseOut={() => this.setState({showLRIcons: false})} onMouseOver={() => this.setState({showLRIcons: true})}>
                <div className="wrapperIcon">
                    <div onClick={() => this.scroll(-400)} className="float-left">
                        <FontAwesomeIcon size="5x"  className={'cPointer' + (this.state.showLRIcons ? '' : ' hidden')} icon="chevron-left" />
                    </div>
                    <div onClick={() => this.scroll(400)} className="float-right">
                        <FontAwesomeIcon size="5x" className={'cPointer' + (this.state.showLRIcons ? '' : ' hidden')} icon="chevron-right" />
                    </div>
                </div>
                {/* d-flex flex-row bd-highlight mb-3 align-items-center */}
                <div id="minEventGroupContent" className="clearfix">
                    <div className="w-30 p-2 bd-highlight">
                        <MinEvent />
                    </div>
                    <div className="w-30 p-2 bd-highlight">
                        <MinEvent />
                    </div>
                    <div className="w-30 p-2 bd-highlight">
                        <MinEvent />
                    </div>

                    <div className="w-30 p-2 bd-highlight">
                        <MinEvent />
                    </div>

                    <div className="w-30 p-2 bd-highlight">
                        <MinEvent />
                    </div>
                </div>
            </div>
        );
    }

}

export default MinEventGroup;
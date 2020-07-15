/* tslint:disable */
import * as React from 'react';
import ItemsCarousel from 'react-items-carousel';
import './styles.css';

interface MessageInterface {
    id: string;
}
interface SliderState {
    activeItemIndex: number;
}

interface SliderProps {
    tickets: number[];
    message: (obj: MessageInterface) => string;
    sliderOff?: boolean;
}

class Slider extends React.PureComponent<SliderProps, SliderState> {
    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: 0,
        };
        this.setIndex = this.setIndex.bind(this);
    }

    public render() {
        const chevronWidth = 40;
        const {tickets, message, sliderOff} = this.props;
        const {activeItemIndex} = this.state;

        return (
            <div className="container column">
                <div className="container wrap">
                    <h2>{message({ id: 'activeTickets' })}</h2>
                </div>
                {!sliderOff ?
                <ItemsCarousel
                    classes={{wrapper: 'slider-items'}}
                    requestToChangeActive={this.setIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={7}
                    gutter={20}
                    leftChevron={<button className="slider-btn">{'<'}</button>}
                    rightChevron={<button className="slider-btn">{'>'}</button>}
                    outsideChevron={true}
                    chevronWidth={chevronWidth}
                >
                    {tickets.map(ticket => (<div key={ticket} className="slider-item">{ticket}</div>))}
                </ItemsCarousel>
                :
                <div className='slider-items-off'>{tickets.map(ticket => (<div key={ticket} className="slider-item">{ticket}</div>))}</div>}
            </div>
        );
    }

    private setIndex(value) {
        this.setState({activeItemIndex: value});
    }
}

export {Slider};
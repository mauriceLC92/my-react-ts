import * as React from 'react';
import { HorseCardList } from './HorseCardList';
import  { HorseCardListEmpty } from './HorseCardListEmpty';

import nextPropState from '../../../src/interface';
interface State {
    nextState: State;
}

interface Props {
    horseListEmpty: boolean;
    nextProps?: Props;
}

export class EditableHorseList extends React.Component<Props, State>{
    shouldComponentUpdate(nextProps: nextPropState, nextState: nextPropState){
       if (nextProps.horseListEmpty === this.props.horseListEmpty)
        {
            return false;
        }
        else{
            return true;
        }
    }
    render(){

        if (!this.props.horseListEmpty){
            return(
                <HorseCardListEmpty />
            );
        } else {
            return(
                <HorseCardList />
            );
        }
        
    }
}

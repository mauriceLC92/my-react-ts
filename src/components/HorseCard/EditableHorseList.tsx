import * as React from 'react';
const HorseCardList =require('./HorseCardList') ;
const HorseCardListEmpty =require('./HorseCardListEmpty');

import nextPropState from '../../../src/interface';
interface State {
    nextState: State;
}

interface Props {
    horseListEmpty: any;
    nextProps?: any;
}

export class EditableHorseList extends React.Component<Props, State>{
    shouldComponentUpdate(nextProps: nextPropState, nextState: nextPropState){
        if(nextProps.horseListEmpty === this.props.horseListEmpty)
        {
            return false;
        }
        else{
            return true;
        }
    };
    render(){

        if(!this.props.horseListEmpty){
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

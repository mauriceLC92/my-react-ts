import * as React from 'react';
const HorseCardList =require('./HorseCardList') ;
const HorseCardListEmpty =require('./HorseCardListEmpty');

interface State {
    nextState: State;
}

interface Props {
    horseListEmpty: boolean;
    nextProps: any;
}

export class EditableHorseList extends React.Component<Props, State>{
    shouldComponentUpdate(nextProps, nextState){
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

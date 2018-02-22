import * as React from 'react';
const HorseCard  =require('./HorseCard');
const team =require('../App/teamdata');

import horseInfo from '../../../src/interface';

interface Props {
    
}

interface State {

}

const horseComponents = team.map((horse: horseInfo) => (
    <HorseCard
    id = {horse.id}
    horseAvatar={horse.avatar_url}
    horseLogin={horse.login}
    horseGitUrl={horse.html_url}
    transistion = {horse.transisitonTime}
    />
));

export class HorseCardList extends React.Component<Props, State>{
    
    render(){
        //This is where const horseComponents orgially was
        return(
            <div className="HorseList">
                {horseComponents[Math.floor(Math.random() * horseComponents.length +1)]}
                {horseComponents[Math.floor(Math.random() * horseComponents.length +1)]}
                {horseComponents[Math.floor(Math.random() * horseComponents.length +1)]}
                {horseComponents[Math.floor(Math.random() * horseComponents.length +1)]}
            </div>
        );
    }
} 

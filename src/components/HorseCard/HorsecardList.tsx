import * as React from 'react';
import  { HorseCard }  from './HorseCard';
// import  { team } from '../App/teamdata';
import horseCard from '../HorseCard/team.json'

//import horseInfo from '../../../src/interface';
interface HorseInfo{
    // horse: string;
    id: number;
    horseAvatar: string;
    horseLogin: string;
    horseGitUrl: string;
    transistion: number;
}
interface Props {
    
}

interface State {

}

// const horseComponents = team.map((horse: HorseInfo) => (
// <HorseCard 
//  id={horse.id}
//  horseAvatar={horse.avatar_url} 
//  horseLogin={horse.login} 
//  horseGitUrl={horse.html_url}
// />
// ));

const horseComponents = horseCard.map((horse) => (
    <HorseCard
    id = {horse.id}
    horseAvatar={horse.avatar_url}
    horseLogin={horse.login}
    horseGitUrl={horse.html_url}
    />
));

export class HorseCardList extends React.Component<Props, State>{
    
    render(){
        // This is where const horseComponents orgially was
        return(
            <div className="HorseList">
                {horseComponents[ Math.floor( Math.random() * horseComponents.length + 1 ) ]}
                {horseComponents[ Math.floor( Math.random() * horseComponents.length + 1 ) ]}
                {horseComponents[ Math.floor( Math.random() * horseComponents.length + 1 ) ]}
                {horseComponents[ Math.floor( Math.random() * horseComponents.length + 1 ) ]}
            </div>
        );
    }
} 

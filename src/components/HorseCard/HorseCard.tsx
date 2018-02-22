import * as React from 'react';

interface Props {
    horseAvatar?: string;
    horseGitUrl?: string;
    horseLogin?: boolean;

}

interface State {

}
export class HorseCard extends React.Component<Props, State>{
    render(){
        return(
            <div className="ui card">
                <div className="ui small circular image" >
                    <img src={this.props.horseAvatar} alt="github avatar"/>
                </div>
                <div className="middle aligned content">
                    <a className="ui tiny header" href={this.props.horseGitUrl}>{this.props.horseLogin}</a>
                    {/* <div className='meta'>
                        <span className='description'> Race XP: 2 years</span>
                    </div> */}
                    {/* <div className='description'>
                        Software developer: Implementation team
                    </div> */}
                </div>
                {/* <div className='left aligned extra content'> 
                    <a>
                        <i className="trophy icon"></i>
                        2 wins
                    </a>
                </div> */}
            </div>
        );
    }
}

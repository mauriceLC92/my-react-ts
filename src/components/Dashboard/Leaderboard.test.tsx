import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {LeaderBoard} from './LeaderBoard';

describe('Leaderboard', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LeaderBoard/>, div);
    });
});
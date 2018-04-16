import React, {Component} from 'react';

class App extends Component {
    render() {
        const number = Math.floor(Math.random() * 10000)
        return (
            <div>
                {
                    console.log(number)
                }
            </div>
        );
    }
}

export default App;

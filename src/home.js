import * as React from 'react';
import './home.css'



class home extends React.Component {
  render() {
    return (
      <>
        <div className="welcomeCont">
          <div className="welcomeDiv">
            <div>
              <div className='name-animation'>
                <h1 className="typewriter">Jr</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default home;

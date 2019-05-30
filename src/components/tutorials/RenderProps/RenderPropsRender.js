import React, { Component } from 'react';
import Twrap from '../../utils/Twrap/Twrap';
import User from './User';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import ClickCounter2 from './ClickCounter2';
import HoverCounter2 from './HoverCounter2';

class RenderPropsRender extends Component {
  render() {
    return (
      <Twrap
        title="RenderProps"
        source="http://www.youtube.com/watch?v=NdapMDgNhtE"
      >
        <Counter3>
          {(count, incrementCount) => (
            <ClickCounter2
              count={count}
              incrementCount={incrementCount}
            />
          )}
        </Counter3>

        {/* // inside render props, our function takes in our two arguments, count & incrementCount */}
        <Counter2
          renderCounter={(count, incrementCount) => (
            < HoverCounter2
              count={count}
              incrementCount={incrementCount}
            />
          )}
        />

        <User render={(isLoggedIn) => isLoggedIn ? 'Hello Tornado' : 'Hello Guest'} />

      </Twrap>
    )
  }
}

export default RenderPropsRender

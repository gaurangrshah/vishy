## Context

----------------------------------

> Components A, B, & F are requried to display the logged in username: 

![image-20190529223002290](http://ww4.sinaimg.cn/large/006tNc79ly1g3j4yarlgbj30kp0a9glt.jpg)

> Username is maintained as a property in the <App/>

To be able to display the username in the nested components the username will be passed down as a prop. Component A can directly take in the props, but for component D & F we'd have to do a lot of unnecessary prop drilling to get the username to components D & F. 

![](http://ww1.sinaimg.cn/large/006tNc79ly1g3j537qd3sj30jx09xq38.jpg)

> This only gets worse as your app scales, and even worse usually applies to crucial data and behavioral patterns used to make your app function. 

The Context API allows us to directly send down the data where it's required without having to manually drill down through each component forwarding props through the entire component tree to handle core logic like logged in user, or style sheet rendering. 



To examine the context API we'll create a User context which will enable a component at any level read a prop that is passed at the top level. our goal is to pass the user context from the app component to component F in this exercise. We'll have 4 components each nested further down, with <CompF/> rendering the text: "Component F"

> - <App/>
> - <CompC/>
> - <CompE/>
> - <CompF/>
> - <userContext/>



<App/> renders <CompC/>:

```react
import React, { Component } from 'react'
import CompC from './CompC';

class App extends Component {
  render() {
    return (
      <div>
        <CompC />
      </div>
    )
  }
}

export default App
```



<CompC/> renders <CompE/>:

```react
import React, { Component } from 'react'
import CompE from './CompE';

class CompC extends Component {
  render() {
    return (
      <div>
        <CompE />
      </div>
    )
  }
}

export default CompC
```



<CompE/> renders <CompF/>:

```react
import React, { Component } from 'react'
import CompF from './CompF';
class CompE extends Component {
  render() {
    return (
      <div>
        <CompF />
      </div>
    )
  }
}

export default CompE
```



<CompE/> renders the string "Component F"

```react
import React, { Component } from 'react'

class CompF extends Component {
  render() {
    return (
      <div>
        Component F
      </div>
    )
  }
}

export default CompF
```



### 3 Steps to implement Context:

1. Create the Context
2. Provide a context value
3. Consume the context value where ever needed. 



1. Create a <userContext/>:

```react
import React, { createContext } from 'react'

const UserContext = createContext()
// every component created with the React.createContext() has access to both a provider and a consumer.

// assigning user context provider to a more applicable name before exporting:
const UserProvider = UserContext.Provider
// assigning user context consumer to a more applicable name before exporting:
const UserConsumer = UserContext.Consumer

// exporting the UserContext.Provider & UserContext.Consumer as UserProvider and UserConsumer
export { UserProvider, UserConsumer }

```



2. Provide a context value: — the place you provide from is important, because only the descendants of that component can consume from this provider. We'll wrap <CompC/> where its being rendered from with a <UserProvider/> that we just assigned in the last step.

   ```react
   import React, { Component } from 'react'
   import CompC from './CompC';
   import UserProvider from './userContext';
   
   export class App extends Component {
     render() {
       return (
         <UserProvider>
           <CompC />
         </UserProvider>
       )
     }
   }
   ```

   > The provider is responsible for providing the value we assign to the context and making it available to all descendent components. In our case the value we want to provide is the `username`

   

   To do this we utilize the value attribute available to us on a provider component: 

   ```react
         <UserProvider value="GameON">
   ```

   > This provides a basic value for our descendants to draw from. 

   

3. Consume the username in <CompF/>

   ```react
   import React, { Component } from 'react'
   import { UserConsumer } from './userContext';
   
   class CompF extends Component {
     render() {
       return (
         <UserConsumer>
           {/* we need to specify a function to consume from our provider in the UserConsumer*/}
           {
             (username) => {
               // function takes in user name from the provider, and then returns jsx: 
               return <div>Hello {username}</div>
               //username being consumed from the provider. 
             }
           }
         </UserConsumer>
       )
     }
   }
   
   export default CompF
   ```

> This will now render our {username} with the message "Hello" prepended to it. 



## Setting Default Context Values

Default context values are set while creating the context:

```react
const UserContext = createContext('New Guy')
// added the string 'New Guy' as a default value to the UserContext.
```



Now inside our <App/>

We can actually comment out the <UserProvider/>, because we've already set our default context value: 

```react
 render() {
    return (
      // <UserProvider value="GameOn">
        <CompC />
      {/* </UserProvider> */}
    )
  }
```

Or we cacn reapply the <UserProvider/> and use it to overried the default value from <UserContext/>



### Context Type Property

The context type property on a class component provides an alternative to the context consumer being used to retrieve the value from our context.provider. 

First thing we need to do is to add a default export for the <UserContext/> from userContext.js:

```react
export default UserContext
```



To demonstrate we'll consume the userContext value in <CompE/> by importing <UserContext/>.

```react
import UserContext from './userContext';
// import UserContext to consume here directly

class CompE extends Component {
/* ... */
}

CompE.contextType = UserContext;
// this sets up the UserContext for this component, without a provider. 
// placed right before the export after the component
export default CompE
```



We can also use another pattern, instead of the assignment above:

```react
class CompE extends Component {
  static contextType = UserContext
/* ... */
}
```

> Either of which allows us to access the UserContext value from `this.context`

```react
class CompE extends Component {
  render() {
    return (
      <div>
        <p>
          CompE: Context: {this.context}
          {/* accessing context via this.context, without consumer. */}
        </p>
        CompF: <CompF />
      </div>
    )
  }
}
```





These contextType  patterns have 2 limitations:

1. Only works with class components. 
2. You can only subscribe to a single context, using contextType. 

In either one of the two cases, the Context.Consumer is the way to go. 



### Consuming Multiple Contexts:

![](http://ww2.sinaimg.cn/large/006tNc79ly1g3j7hjuft6j30ow0bh754.jpg)

<ThemeContext.Consumer/> Accepts a function as a child, passing in the `theme` value within the function body, we have another function as a child which provides the UserContext value: `user`, both of them are then passed as props to a final component which then renders them. 
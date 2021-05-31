// replace `${i}` --> \`   \$   {i}   \`

const data = [

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `// create context
import { createContext } from 'react';

const exampleContext = createContext();

export default exampleContext;`
}
],
// output
[],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `// create initial state
const exampleInitialState = {
  value1: true,
  value2: false,
  value3: false,
  value4: []
};

export default exampleInitialState;`
}
],
// output
[],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `// create reducer function
const exampleReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      return {
        ...state,
        value1: true
      };
    case 'CLOSE':
      return {
        ...state,
        value1: false
      };
    default:
      return state;
  }
}

export default exampleReducer;`
}
],
// output
[],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `// create context provider component 
import { useReducer, useCallback } from 'react';

import exampleContext from './exampleContext';
import exampleInitialState from './exampleInitialState';
import exampleReducer from './exampleReducer';

const ExampleProvider = ({ children }) => {

  const [state, dispatch] = useReducer(exampleReducer, exampleInitialState);

  const open = useCallback(
    () => {
      dispatch({type: 'OPEN'});
    }, []
  );
  
  const close = useCallback(
    () => {
      dispatch({type: 'CLOSE'});
    }, []
  );

  return (
    <exampleContext.Provider value={{
      state,
      open,
      close
    }}>
      {children}
    </exampleContext.Provider>
  )
}

export default ExampleProvider;`
}
],
// output
[],
//render
{'render': false}
],


// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `// use provider
import ExampleProvider from './context/ExampleProvider'

const App = () => {

  return (
    <ExampleProvider>
      <Component />
    </ExampleProvider>
  )
}

export default App;`
}
],
// output
[],
//render
{'render': false}
],


// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `import { useContext } from 'react';

import exampleContext from '../../context/exampleContext';

const Component = () => {

  // get provider value object
  const { state: { value1, value2 }, open, close } = useContext(exampleContext);

  return (
    <>
      component
    </>
  )
}

export default Component;`
}
],
// output
[],
//render 
{'render': false}
],


];

module.exports = data;
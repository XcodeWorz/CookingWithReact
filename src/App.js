import React, {useState} from 'react';
import CounterHooks from "./components/CounterHooks";
import logo from './logo.svg';
import './App.css';

export const ThemeContext = React.createContext();


function App() {
	const [theme, setTheme ] = useState('red');
  return (  
  	<ThemeContext.Provider value={{backgroundColor: theme}}>
  		<CounterHooks initialCount={0} />
  		<button onClick={() => setTheme(prevTheme => {
  			return prevTheme == "red" ? 'blue' : "red"
  		})}>Toggle theme</button>
  	</ThemeContext.Provider>
    );
}

export default App;

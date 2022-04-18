import { Counter } from './components/Counter';
import { User } from './components/User';
import { TimerParent } from './components/TimerParent';
import { CountReducer } from './components/CountReducer';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter/>
      <User/>
      <h2>UseEffect -  useRef</h2>
      <hr />
      <TimerParent/>
      <br />
      <h2>UseReducer</h2>
      <hr />
      <CountReducer/>
      <h2>Custom Hooks</h2>
      <hr />
      <Form/>
    </>
  );
}

export default App;

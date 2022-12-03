import './App.css';
import { connect } from 'react-redux';
import { IncAction } from './actions';
import { DecreAction } from './actions';

function App({ local_variable, IncAction, DecreAction }) {
  return (
    <div >
      <center>
        <h1>{local_variable}</h1>
        <button onClick={()=>IncAction(5)}>Increment</button>
        <button onClick={DecreAction}>Decrement</button>
      </center>
    </div>
  );
}
const mapStateToProps = state => ({
  local_variable: state
})

export default connect(mapStateToProps, { IncAction, DecreAction })(App);

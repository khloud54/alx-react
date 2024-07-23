import { getFullYear, getFooterCopy } from './utils';
import './App.css';

export default function App() {
  const isIndex = true;

  return (
    <div className='container'>
      <div className='App-header'>
        <img src={require('./holberton_logo.jpg')} alt='Holberton logo' />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>
          <em>
            Copyright {getFullYear()} - {getFooterCopy(isIndex)}
          </em>
        </p>
      </div>
    </div>
  );
}

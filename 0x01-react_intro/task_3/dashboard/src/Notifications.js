import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

export default function Notifications() {
  function handleClose() {
    console.log('Close button has been clicked');
  }

  return (
    <div className='Notifications'>
      <p>
        Here is the list of notifications
        <button aria-label='Close' onClick={handleClose}>
          <img src={require('./close-icon.png')} alt='Close icon' />
        </button>
      </p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          data-priority='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

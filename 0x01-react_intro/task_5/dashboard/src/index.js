import $ from 'jquery';
import _ from 'lodash';
import './main.css';

$('body').append('<div class="root-notifications"></div>');
$('.root-notifications').append('<div class="Notifications"></div>');
$('.Notifications').append('<p>Here is the list of notifications</p>');
$('p').append('<button aria-label="Close">');
const closeImg = '../assets/close-icon.png';
const closeImgElement = $('img').attr('src', closeImg);
$('button').append(closeImgElement);
$('.Notifications').append('<ul></ul>');
$('ul').append('<li data-priority="default">New course available</li>');
$('ul').append('<li data-priority="urgent">New resume available</li>');
$('ul').append('<li data-priority="urgent" class="latestNotification"></li>');

$('body').append('<div class="container">');
$('.container').append('<div class="App-header">');
const logoImg = '../assets/holberton_logo.png';
const logoImgElement = $('img').attr('src', logoImg);
$('.App-header').append(logoImgElement);
$('.App-header').append('<h1>School dashboard</h1>');

$('.container').append('<div class="App-body">');
$('.App-body').append('<p>Login to access the full dashboard</p>');
$('.App-body').append('<label class="email" for="email">Email:</label>');
$('label.email').append('<input type="text" id="email" name="email" />');
$('.App-body').append(
  '<label class="password" for="password">Password:</label>'
);
$('label.password').append(
  '<input type="password" id="password" name="password" />'
);
$('.App-body').append('<button>OK</button>');

$('.container').append('<div class="App-footer">');
$('.App-footer').append(
  '<p><em>Copyright <span class="year"></span> - <span class="footerCopy"></span></em></p>'
);

const isIndex = true;

function getFullYear() {
  const currentYear = new Date().getFullYear();
  $('span.year').text(currentYear);
}

function getFooterCopy(isIndex) {
  let footerCopy = '';

  if (isIndex) {
    footerCopy = 'Holberton School';
  } else {
    footerCopy = 'Holberton School main dashboard';
  }

  $('span.footerCopy').text(footerCopy);
}

function getLatestNotification() {
  const notification = '<strong>Urgent requirement</strong> - complete by EOD';
  $('li.latestNotification').html(notification);
}

getFullYear();
getFooterCopy(isIndex);
getLatestNotification();

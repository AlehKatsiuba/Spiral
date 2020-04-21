import React from 'react';

const dateConfig = { month: 'short', day: '2-digit', year: 'numeric' };

export function Greeting({ userName, className }) {
  const date = new Date();
  const hours = date.getHours();
  let message = '';
  if (hours >= 0 && hours <= 4) {
    message = "Why aren't you sleeping?";
  } else if (hours > 4 && hours < 12) {
    message = 'Good morning';
  } else if (hours >= 12 && hours < 18) {
    message = 'Good Afternoon';
  } else if (hours > 18) {
    message = 'Good Evening';
  }
  return <div className={className}>{message} {userName} | {date.toLocaleString('default', dateConfig)}</div>
}
import React from 'react';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className="Navigation">
      <div className="Navigation__wrapper">
        <ul className="Navigation__list">
          <li className="Navigation__item Navigation__item--logo">
            NOTE/plan-more
          </li>
          <li className="Navigation__item">Settings</li>
        </ul>
      </div>
    </nav>
  )
}

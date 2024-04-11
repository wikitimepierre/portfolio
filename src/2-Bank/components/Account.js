import React from 'react';
import { Link } from 'react-router-dom';

function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>

      <div className="account-content-wrapper cta">
        <Link to="/2-BANK/mockup">
          <button className="transaction-button">View transactions</button>
        </Link>
      </div>
    </section>
  );
}

export default Account;
import React from 'react';
import { useSelector } from 'react-redux';
import Account from './Account';

function Accounts() {

  const userName = useSelector((state) => state.userInfo.userName) ?? "";
  const welcome = "Welcome back \n" + userName;

  const firstName = useSelector((state) => state.userInfo.firstName) ?? "";
  const amount1 = firstName === "Tony" ? "$2,145,082" : "$2,682";
  const amount2 = firstName === "Tony" ? "$150,584,123,928" : "$15,545";
  const amount3 = firstName === "Tony" ? "$184,124,623" : "$18,021";

  //TODO: remettre le bouton Edit une fois que le composant Edit est debug
  return (
    <div className="header main bg-dark">
      <br /><h1>{welcome}</h1>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount={amount1}
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount={amount2}
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount={amount3}
        description="Current Balance"
      />
      <br />
    </div>
  );
}

export default Accounts;
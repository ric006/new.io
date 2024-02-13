// components/Home.tsx

import React from 'react';
import { useWeb3React } from '@web3-react/core';

const Home: React.FC = () => {
  const { active, account, deactivate } = useWeb3React();

  const connectWallet = async () => {
    // Implement wallet connection logic here
  };

  const disconnectWallet = () => {
    deactivate();
  };

  return (
    <div>
      <h1>Home</h1>
      {active ? (
        <div>
          <p>Connected with {account}</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Home;

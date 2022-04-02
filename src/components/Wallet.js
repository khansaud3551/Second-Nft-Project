import React from "react";
import { ethers } from 'ethers'

function Wallet() {
    // alert("walet function called");
    console.log("walet function called");
    var errorMessage = null;
    var defaultAccount = null;
    var userBalance = null;
    var connButtonText = 'Connect wallet';

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');

            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChangedHandler(result[0]);
                    connButtonText = 'Wallet Connected';
                    console.log("Metamask connected")
                    getAccountBalance(result[0]);
                })
                .catch(error => {
                    errorMessage = error.message;

                });

        } else {
            console.log('Need to install MetaMask');
            errorMessage = 'Please install MetaMask browser extension to interact';
        }
    }

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        defaultAccount = newAccount;
        getAccountBalance(newAccount.toString());
    }

    const getAccountBalance = (account) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
            .then(balance => {
                userBalance = ethers.utils.formatEther(balance);
                console.log("Balance is" + ethers.utils.formatEther(balance));
            })
            .catch(error => {
                errorMessage = error.message;
            });
    };

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }


    // listen for account changes
    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);

    // return <div><button class="btn-primary px-2 py-2 rounded ml-3 " onClick={connectWalletHandler}>{connButtonText}</button></div>;
    return (
      <div className='walletCard'>
        <button className="btn-primary px-2 py-2 rounded ml-3" onClick={connectWalletHandler}>{connButtonText}</button>
        <div className='accountDisplay'>
          <h3>Address: {defaultAccount}</h3>
        </div>
        <div className='balanceDisplay'>
          <h3>Balance: {userBalance}</h3>
        </div>
        {errorMessage}
      </div>
    );
}

export default Wallet;
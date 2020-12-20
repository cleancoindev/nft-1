import React, { useContext } from "react";
import Web3Modal from "web3modal";
import AppContext from "./app-context";
import { Web3Provider } from "@ethersproject/providers";

export default function WalletButton() {
  const context = useContext(AppContext);
  const web3Modal = context?.web3Modal;

  const logoutOfWeb3Modal = function () {
    if (web3Modal) web3Modal.clearCachedProvider();
    window.location.reload();
  };

  const loadWeb3Modal = async function () {
    const provider = await web3Modal?.connect();
    if (context?.setWeb3Provider) {
      context.setWeb3Provider(new Web3Provider(provider));
      console.log(new Web3Provider(provider));
    }
  };

  const buttonOnClick = function () {
    if (!web3Modal?.cachedProvider) {
      loadWeb3Modal();
    }
  };

  let linkText = "Disconnect Wallet";
  if (web3Modal && !web3Modal.cachedProvider) {
    linkText = "Connect Wallet";
  } else if (web3Modal && web3Modal.cachedProvider) {
    linkText = "Disconnect Wallet";
  } else if (!web3Modal) linkText = "Not connected properly";

  const linkType = "button";

  return (
    <>
      {linkType === "button" && (
        <button
          onClick={buttonOnClick}
          className="text-white py-2 px-5 focus:outline-none bg-black hover:bg-gray-800 rounded"
          style={{ transition: "all .15s ease" }}
        >
          {linkText}
        </button>
      )}
      {linkType === "text" && (
        <button
          onClick={logoutOfWeb3Modal}
          className="text-white py-2 px-5 focus:outline-none bg-black hover:bg-gray-800 rounded"
          style={{ transition: "all .15s ease" }}
        >
          {linkText}
        </button>
      )}
    </>
  );
}
import { useState } from "react";
import abi from "./utils/BuyMeACoffee.json";
import background from "./assets/background.svg";
// import { MetaMaskInpageProvider } from "@metamask/providers";

import "./App.css";
import { ethers } from "ethers";

function App() {
  // interface Window {
  //   ethereum?: MetaMaskInpageProvider;
  // }
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [currentAccount, setCurrentAccount] = useState();
  const defaultContractAddress = "0x19779553F7b2F083e5c3F1a7Fc2c30327cb88334";
  const contractABI = abi.abi;

  const initializeProvider = async () => {
    let signer;
    let provider;

    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      console.log(signer);
      setCurrentAccount(signer);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if ((window as any).ethereum) {
        const provider = new ethers.BrowserProvider(
          (window as any).ethereum,
          "any"
        );
        const signer = await provider.getSigner();
        const BuyMeACoffee = new ethers.Contract(
          defaultContractAddress,
          contractABI,
          signer
        );

        console.log("buying coffee");
        const coffeeTxn = await BuyMeACoffee.buyCoffee(
          name ? name : "God",
          message ? message : "Thanks for coffee",
          { value: ethers.parseEther("0.0001") }
        );

        alert("Buying coffee please wait ");
        await coffeeTxn.wait();

        console.log("mined", coffeeTxn.hash);
        alert("Thanks for coffee");
        setName("");
        setMessage("");
      }
    } catch (e) {
      console.log(e);
    }
    setName("");
    setMessage("");
  };

  return (
    // <div className="layout align-ite">

    // </div>
    <div className="relative min-h-screen layout">
      <p className="absolute bottom-5 right-5 text-white">
        Developed By{" "}
        <b>
          <u>
            <a href="https://www.linkedin.com/in/anamol-soman/">Anamol Soman</a>
          </u>
        </b>
      </p>
      <img src={background} className="background-image"></img>{" "}
      <div className="absolute bottom-40 right-80 z-10 ">
        <div className="bg-transparent p-6 rounded-lg  w-150">
          {currentAccount ? (
            <form onSubmit={handleSubmit} className="">
              <div className="flex align-center justify-center mb-4">
                {" "}
                <img
                  src="coffee-icon-large.png"
                  className="w-15 h-15 mr-4"
                ></img>
                <h2 className="text-5xl flex justify-center items-center font-semibold text-[#EED8BF]  ">
                  Buy Me A Coffee
                </h2>
              </div>

              {/* Name Input */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#EED8BF] font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 text-white border border-gray-300 rounded-md focus:outline-none "
                  // placeholder="Enter your name"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block  text-[#EED8BF] font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 text-white border border-[#EED8BF] rounded-md focus:outline-none  focus:ring-blue-50"
                  // placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#EED8BF] text-black font-semibold rounded-md cursor-pointer focus:outline-none "
              >
                Buy A Coffee
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center">
              <h2 className="text-4xl m-4 font-bold text-white">
                CryptoBrew - DApp
              </h2>
              <p className="text-white text-justify my-4">
                CryptoBrew is a decentralized application (dApp) built using
                Web3 concepts, enabling users to support creators with simple
                payments. By using Ethereum smart contracts, CafeBrew allows
                creators to generate a unique payment link, making it easy for
                supporters to send secure and transparent microtransactions
                directly to the creator’s wallet.
              </p>
              <button
                type="button"
                onClick={() => initializeProvider()}
                className="w-full py-3 bg-[#EED8BF] text-black font-semibold rounded-md cursor-pointer focus:outline-none "
              >
                Connect Your Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

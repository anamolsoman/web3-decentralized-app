import { useState } from "react";
import abi from "./utils/BuyMeACoffee.json";
import background from "./assets/background.svg";
// import { MetaMaskInpageProvider } from "@metamask/providers";

import "./App.css";
import { ethers } from "ethers";
import Login from "./components/Login";
import PaymentForm from "./components/PaymentForm";

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
            <PaymentForm
              name={name}
              message={message}
              setName={setName}
              setMessage={setMessage}
              handleSubmit={handleSubmit}
            />
          ) : (
            <Login initializeProvider={initializeProvider} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

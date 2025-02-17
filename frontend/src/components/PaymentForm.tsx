import { useState } from "react";
import abi from "../utils/BuyMeACoffee.json";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState<number>(0.0001);
  const [loading, setLoading] = useState(false);
  const defaultContractAddress = "0x19779553F7b2F083e5c3F1a7Fc2c30327cb88334";
  // const defaultContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractABI = abi.abi;
  const params = useParams();
  const navigate = useNavigate();

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
          params.id ? params.id : defaultContractAddress,
          contractABI,
          signer
        );
        setLoading(true);
        console.log("buying coffee");
        const coffeeTxn = await BuyMeACoffee.buyCoffee(
          name ? name : "God",
          message ? message : "Thanks for coffee",
          { value: ethers.parseEther(amount.toString()) }
        );

        await coffeeTxn.wait();
        setLoading(false);
        navigate("/thank-you");
        setName("");
        setMessage("");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex align-center justify-center mb-3">
        {" "}
        {/* <img src="coffee-icon-large.png" className="w-15 h-15 mr-4"></img> */}
        <h2 className="text-5xl flex justify-center items-center font-semibold text-[#EED8BF]  ">
          Buy Me A Coffee
        </h2>
      </div>

      {/* Name Input */}
      <div className="mb-2">
        <label htmlFor="name" className="block text-[#EED8BF] font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 text-white border border-gray-300 rounded-md focus:outline-none "
          // placeholder="Enter your name"
          required
        />
      </div>

      {/* Amount Input */}
      <div className="mb-2">
        <label htmlFor="name" className="block text-[#EED8BF] font-medium mb-2">
          Amount
        </label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 text-white border border-gray-300 rounded-md focus:outline-none "
          // placeholder="Enter your name"
          required
        />
      </div>

      {/* Message Input */}
      <div className="mb-2">
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
          className="w-full p-2 text-white border border-[#EED8BF] rounded-md focus:outline-none  focus:ring-blue-50"
          // placeholder="Enter your message"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-[#EED8BF] text-black font-semibold rounded-md cursor-pointer focus:outline-none "
      >
        {loading ? "Loading..." : " Buy A Coffee"}
      </button>
    </form>
  );
};

export default PaymentForm;

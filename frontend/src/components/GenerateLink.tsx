import  { useState } from "react";
// import CryptoJS from "crypto-js";
import useStorage from "../hooks/useStorage";

const GenerateLink = () => {
  const [copied, setCopied] = useState(false);
  const { getAddress } = useStorage();

  // Example values (You can dynamically set the wallet address and secret key)
  const originalText = getAddress();
//   const secretKey = "your-32-character-long-secret-key"; // Example secret key

//   function encryptText(text, secretKey) {
//     return CryptoJS.AES.encrypt(text, secretKey).toString();
//   }

  // Decrypt function (not used here but for reference)
//   function decryptText(encryptedText, secretKey) {
//     const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
//     return bytes.toString(CryptoJS.enc.Utf8); // Convert bytes to a UTF-8 string
//   }

  // Encrypt the wallet address
//   const encryptedText = encryptText(originalText, secretKey);

  // Generate the payment URL with the encrypted address
  const paymentUrl = `${import.meta.env.VITE_BASE_URL}/payment/${originalText}`;

  // Function to copy the URL to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(paymentUrl); // Copy to clipboard
    setCopied(true); // Set copied state to true
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <>
      {" "}
      <h2 className="text-2xl font-bold text-center text-[#EED8BF] mb-2">
        Your Share Link is Generated
      </h2>
      <p className="text-center text-[#EED8BF] mb-2">
        Share this payment link with your users to receive payments.
      </p>
      <div className="flex justify-center items-center  p-2 rounded-md">
        <input
          type="text"
          value={paymentUrl}
          readOnly
          className="w-full p-2 border border-transparent focus:outline-none rounded-md mr-2 bg-white "
        />
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-[#EED8BF] w-30 rounded-md font-semibold cursor-pointer focus:outline-none"
        >
          Copy
        </button>
      </div>
      <div className="text-white text-end">
        {copied ? <p>Copied to clipboard</p> : ""}
      </div>
    </>
  );
};

export default GenerateLink;

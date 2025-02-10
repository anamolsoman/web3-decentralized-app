import crypto from "crypto";
import bs58 from "bs58";

const GenerateLink = () => {
  // Function to generate a shortened address using Base58 encoding
  function shortenAddress(address) {
    // First, we hash the wallet address (e.g., using SHA-256)
    const hash = crypto.createHash("sha256").update(address).digest();

    // Now we encode the hash using Base58
    const encodedAddress = bs58.encode(hash);
    return encodedAddress;
  }

  // Function to decode the shortened address back to the original (This is just a demonstration)
  function decodeShortenedAddress(shortened) {
    // Decode the Base58 encoded string
    const decoded = bs58.decode(shortened);

    // Return the decoded hash (not the original address since hashing is one-way)
    return decoded.toString("hex"); // Return it as a hex string
  }

  // Example wallet address (Ethereum address)
  const walletAddress = "0x5FfF7e56Fc8eA0D047d3EDe6fF6Fb4A9b17B5C3B";

  // Shorten the wallet address
  const shortened = shortenAddress(walletAddress);
  console.log("Shortened Address:", shortened);

  // Decode the shortened address (for demonstration purposes)
  const decoded = decodeShortenedAddress(shortened);
  console.log("Decoded Address Hash:", decoded);

  return <div>GenerateLink</div>;
};

export default GenerateLink;

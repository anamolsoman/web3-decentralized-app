const Login = ({ initializeProvider }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl m-4 font-bold text-white">CryptoBrew - DApp</h2>
        <p className="text-white text-justify my-4">
          CryptoBrew is a decentralized application (dApp) built using Web3
          concepts, enabling users to support creators with simple payments. By
          using Ethereum smart contracts, CafeBrew allows creators to generate a
          unique payment link, making it easy for supporters to send secure and
          transparent microtransactions directly to the creator’s wallet.
        </p>
        <button
          type="button"
          onClick={() => initializeProvider()}
          className="w-full py-3 bg-[#EED8BF] text-black font-semibold rounded-md cursor-pointer focus:outline-none "
        >
          Connect Your Wallet
        </button>
      </div>
    </div>
  );
};

export default Login;

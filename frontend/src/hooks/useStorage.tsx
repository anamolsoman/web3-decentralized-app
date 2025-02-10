const useStorage = () => {
  const getAddress = () => {
    return localStorage.getItem("user-address");
  };

  const setAddress = (value) => {
    return localStorage.setItem("user-address", value);
  };

  return { getAddress, setAddress };
};

export default useStorage;

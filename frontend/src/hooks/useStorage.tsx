const useStorage = () => {
  const getAddress = () => {
    return localStorage.getItem("user-address");
  };

  const setAddress = (value: string) => {
    return localStorage.setItem("user-address", value);
  };

  return { getAddress, setAddress };
};

export default useStorage;

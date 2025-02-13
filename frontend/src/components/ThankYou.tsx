import { useParams } from "react-router-dom";

function ThankYou() {
  const { id } = useParams(); // Access the 'id' param from the route
  return <div>Thank you for your payment! ID: {id}</div>;
}

export default ThankYou;

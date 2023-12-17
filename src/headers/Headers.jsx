import { Link } from "react-router-dom";
import './headers.css'
const Headers = () => {

const linkStyle = {
    textDecoration: "none",
    color:"white"

}

  return (
    <div className="header">
      <ul>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/result" style={linkStyle}>Result</Link></li>
        <li><Link to="/restaurant" style={linkStyle}>Restraurant</Link></li>
      </ul>
    </div>
  );
};

export default Headers;

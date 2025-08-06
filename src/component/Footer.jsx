import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer-container">
      <Link id="tnc" to="/tnc" style={{color: '#f7f7f7', textDecoration: 'none'}} >Terms and Condition</Link>
    </div>
  );
}

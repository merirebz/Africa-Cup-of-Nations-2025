import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>CAN 2025</h2>
        <span>Morocco</span>
      </div>

      <ul className="menu">
        <li>Matches</li>
        <li>Groups</li>
        <li>Tableau</li>
        <li>Communication</li>
      </ul>

      
    </nav>
  );
}

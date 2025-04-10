import "./App.css";
import Pattern from "./assets/pattern.svg";
import Profile from "./components/profile";

function Portfolio() {
  return (
    <div
      className="min-h-screen selection:bg-quaternary selection:text-secondary flex justify-center items-center"
      style={{
        backgroundImage: `url(${Pattern}), linear-gradient(rgba(247, 249, 249, 100), rgba(190, 216, 212, 100))`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <Profile />
    </div>
  );
}

export default Portfolio;

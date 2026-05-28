import globeImg from "../assets/images/globe.png";

export default function Header() {
  return (
    <div className="navbar bg-primary shadow-sm flex justify-center gap-3">
      <img className="w-8 rounded-full" src={globeImg} alt="world globe" />
      <a className="text-white text-xl">my travel journal.</a>
    </div>
  );
}

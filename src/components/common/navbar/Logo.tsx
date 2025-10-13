import logo from "../../../assets/images/logo.png";
export function Logo() {
  return (
    <div className="flex-shrink-0">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-50 h-25" />
      </div>
    </div>
  );
}

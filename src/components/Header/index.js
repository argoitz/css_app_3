import "./Header.scss";
import Badge from "./../Badge/index";
import Button2 from "../Button2";

function Header() {
  return (
    <div class="header">
      <Badge text="L" />
      <Button2 text="BUTTON" />
    </div>
  );
}

export default Header;

import "./scrollup.css"
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {

  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup")
    if (scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  } )

  return (
    <a href="#home" className="scrollup" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <FaArrowUp style={{color: "white", margin: "3px 3px" }} />
    </a>
  )
}

export default ScrollUp
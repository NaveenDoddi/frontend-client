import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomPrevArrow = ({ onClick }) => {
      return (
            <button className="custom-prev"
                  onClick={onClick}
                  style={{
                        position: "absolute",
                        bottom: "-40px",
                        left: "44%",
                        zIndex: "10",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        pointerEvents:"auto"
                  }}
            >
                  <FaArrowLeft size={30} />

            </button>
      )
}
const CustomNextArrow = ({ onClick }) => {
      return (
            <button className="custom-next"
                  onClick={onClick}
                  style={{
                        position: "absolute",
                        bottom: "-40px",
                        left: "52%",
                        zIndex: "1",
                        background: "none",
                        border: "none",
                        cursor: "pointer"
                  }}
            >
                  <FaArrowRight size={30} />

            </button>
      )
}

export {CustomPrevArrow, CustomNextArrow}
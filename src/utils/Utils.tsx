import {
  FaCheckCircle,
  FaMinusCircle,
  FaRegCircle,
  FaTimesCircle,
} from "react-icons/fa";

export const loadLastFiveIcons = (gameState: string) => {
  switch (gameState) {
    case "W":
      return <FaCheckCircle color="green" />;
    case "L":
      return <FaTimesCircle color="red" />;
    case "N":
      return <FaRegCircle />;
    case "D":
      return <FaMinusCircle color="grey" />;
  }
};

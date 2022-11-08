import { Button } from "./ButtonBack.styled";

const { useNavigate, useLocation } = require("react-router-dom")

const ButtonBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    navigate(location?.state?.from ?? "/", { replace: true });
  }
  return (
    <Button type="button" onClick={onClick}>
      Back
    </Button>
  )
}

export default ButtonBack;
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate("/");

  return (
    <>
      <h3>Page Not Found</h3>
      <button onClick={clickHandler}>Back to Home</button>
    </>
  );
};

export default PageNotFound;

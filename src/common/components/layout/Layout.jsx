import { useNavigate } from "react-router-dom";

export const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center pt-2 pb-5">
        <h1
          className="text-2xl text-[#0e7dfb] font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          AMA-Consulting
        </h1>
      </div>
      {children}
    </div>
  );
};

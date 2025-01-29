import { FC } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { Navigate } from "react-router-dom";

interface IChildProp {
  children: JSX.Element;
}

export const ProtectedRoute: FC<IChildProp> = ({ children }) => {
  const { userData } = useAppSelector((state) => state.user);
  if (!userData) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const CheckAdmin = ({ children }: Props) => {
  const [isAdmin, setIsAdmin] = useState<boolean>();

  const VITE_DASHBOARD_CODE =
    (import.meta.env.VITE_DASHBOARD_CODE as string) || "";

  useEffect(() => {
    const getSessionDashboardCode = sessionStorage.getItem("code")?.toString();
    if (
      getSessionDashboardCode?.length &&
      getSessionDashboardCode === VITE_DASHBOARD_CODE
    ) {
      setIsAdmin(true);
      return;
    }
    if (prompt("Password", VITE_DASHBOARD_CODE)) {
      sessionStorage.setItem("code", VITE_DASHBOARD_CODE);
      setIsAdmin(true);
      return;
    }

    setIsAdmin(false);
  }, [VITE_DASHBOARD_CODE]);

  return (
    <>
      {isAdmin ? (
        children
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <Link
            to={"/"}
            className="text-4xl transition-all hover:text-gray p-5"
          >
            404 NOT Found
          </Link>
        </div>
      )}
    </>
  );
};

export default CheckAdmin;

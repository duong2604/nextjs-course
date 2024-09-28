import React from "react";

const DashboardLayout = ({
  children,
  user,
  revenue,
  notification,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}) => {
  return (
    <div>
      <div>{user}</div>
      <div>{revenue}</div>
      <div>{notification}</div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;

import { Outlet } from "react-router-dom";

const AdminLayout = () => (
  <div className="admin-layout">
    {/* sidebar admin */}
    <Outlet />
  </div>
);

export default AdminLayout;

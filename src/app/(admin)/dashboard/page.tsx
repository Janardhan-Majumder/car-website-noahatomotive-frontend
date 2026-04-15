export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Manage Products</h2>
          <p>View and edit car listings</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Manage Users</h2>
          <p>View and manage user accounts</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Manage Orders</h2>
          <p>View and process orders</p>
        </div>
      </div>
    </div>
  );
}
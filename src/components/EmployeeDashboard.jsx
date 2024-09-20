import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const mockServiceRequests = [
  {
    id: 1,
    service: "Plumbing",
    customer: "John Doe",
    status: "Pending",
    date: "2024-09-20",
  },
  {
    id: 2,
    service: "Electrical",
    customer: "Jane Smith",
    status: "In Progress",
    date: "2024-09-21",
  },
  {
    id: 3,
    service: "Cleaning",
    customer: "Bob Johnson",
    status: "Completed",
    date: "2024-09-22",
  },
];

const mockServiceHistory = [
  {
    id: 1,
    service: "Gardening",
    customer: "Alice Brown",
    status: "Completed",
    date: "2024-09-15",
  },
  {
    id: 2,
    service: "Painting",
    customer: "Charlie Davis",
    status: "Completed",
    date: "2024-09-16",
  },
  {
    id: 3,
    service: "Carpentry",
    customer: "Eva White",
    status: "Completed",
    date: "2024-09-17",
  },
];

const mockRecentActivities = [
  {
    id: 1,
    activity: "Completed plumbing service for John Doe",
    time: "2 hours ago",
  },
  {
    id: 2,
    activity: "Assigned electrical service to Jane Smith",
    time: "4 hours ago",
  },
  {
    id: 3,
    activity: "Received new cleaning request from Bob Johnson",
    time: "1 day ago",
  },
];

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500";
      case "In Progress":
        return "bg-blue-500";
      case "Completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <span
      className={`${getStatusColor(
        status
      )} text-white px-2 py-1 rounded-full text-xs font-bold`}
    >
      {status}
    </span>
  );
};

const ServiceTable = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 text-left">ID</th>
          <th className="p-3 text-left">Service</th>
          <th className="p-3 text-left">Customer</th>
          <th className="p-3 text-left">Status</th>
          <th className="p-3 text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-b border-gray-200">
            <td className="p-3">{item.id}</td>
            <td className="p-3">{item.service}</td>
            <td className="p-3">{item.customer}</td>
            <td className="p-3">
              <StatusBadge status={item.status} />
            </td>
            <td className="p-3">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SummaryCard = ({ title, value }) => (
  <div className="bg-white rounded-lg p-5 shadow-md text-center flex-1 m-2">
    <h3 className="text-gray-600 mb-2">{title}</h3>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

const RecentActivities = ({ activities }) => (
  <div className="bg-white rounded-lg p-5 shadow-md">
    <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Activities</h2>
    <ul className="space-y-3">
      {activities.map((activity) => (
        <li key={activity.id} className="border-b border-gray-200 pb-2">
          <p className="text-gray-600">{activity.activity}</p>
          <small className="text-gray-400">{activity.time}</small>
        </li>
      ))}
    </ul>
  </div>
);

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState("requests");

  return (
    <div className="w-full">
      <Header />
      <div className="w-10/12 mx-auto font-sans rounded-lg px-6 pt-44">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Employee Dashboard
        </h1>

        <div className="flex flex-wrap justify-between mb-6">
          <SummaryCard title="Total Requests" value="25" />
          <SummaryCard title="In Progress" value="10" />
          <SummaryCard title="Completed" value="15" />
        </div>

        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab("requests")}
            className={`flex-1 py-2 px-4 rounded-tl-lg rounded-bl-lg ${
              activeTab === "requests"
                ? "bg-gray-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Service Requests
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-2 px-4 rounded-tr-lg rounded-br-lg ${
              activeTab === "history"
                ? "bg-gray-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Service History
          </button>
        </div>

        <div className="bg-white rounded-lg p-5 mb-6 shadow-md">
          {activeTab === "requests" && (
            <ServiceTable data={mockServiceRequests} />
          )}
          {activeTab === "history" && (
            <ServiceTable data={mockServiceHistory} />
          )}
        </div>

        <RecentActivities activities={mockRecentActivities} />
      </div>
      <Footer/>
    </div>
  );
};

export default EmployeeDashboard;

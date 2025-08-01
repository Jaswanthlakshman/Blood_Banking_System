import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Blood Banking System</h3>
          <hr />
          <p>
            <b>Blood Banking System,</b> 
             The Admin Home Page is the central command hub of the blood banking system, designed to give administrators a real-time, holistic view of the entire platform. It provides seamless access to critical data across all user types—donors, hospitals, organisations, and other admins—allowing for effective oversight, rapid decision-making, and operational transparency. Admins can view and manage every registration detail, including personal and role-specific information such as donor history, hospital affiliations, and organisation activities. Through this dashboard, they can monitor system-wide activities such as donation events, blood requests, and user engagement, all consolidated into an intuitive interface. The page includes dynamic analytics and intelligent filtering tools to make tracking, segmenting, and auditing user activity simple and actionable. Admins can approve or reject new users, respond to urgent blood requests, deactivate suspicious accounts, and ensure compliance with safety and privacy standards. This isn’t just a management panel it’s a mission control center that empowers administrators to orchestrate a faster, safer, and more responsive blood supply network. By centralizing control and amplifying visibility, the Admin Home Page transforms fragmented processes into a coordinated, life-saving ecosystem, ensuring that the right blood reaches the right hands at the right time.

          </p>
        
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;

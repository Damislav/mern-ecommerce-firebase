import React, { useEffect, useState } from "react";
import AdminProductCard from "../../components/cards/AdminProductCard";
import AdminNav from "../../components/nav/AdminNav";
import { getProductsByCount } from "../../functions/product";
import AllProducts from "./product/AllProducts";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h4>Admin dashbvoard</h4>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

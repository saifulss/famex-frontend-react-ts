import * as React from 'react';
import {Link} from "react-router-dom";

export const HomeView = () => (
  <div>
    HomeView

    <div style={{
      display: "flex",
      justifyContent: "space-between",
      width: "800px"
    }}>
      <Link to="/">Home</Link>
      <Link to="/expense-claims">Claims</Link>
      <Link to="/expense-claims/1">Claim details</Link>
      <Link to="/expense-claims/create">Create claim</Link>
    </div>
  </div>
);
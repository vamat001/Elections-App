import React from "react";
import "./Sidebar.css";

class sidebar extends React.Component {
  render() {
    return (
      <div class="col-sm-12 col-md-6 col-lg-3">
        <ul class="list-group">
          <li class="list-group-item tableItem">President</li>
          <li class="list-group-item tableItem">Vice President</li>
          <li class="list-group-item tableItem">Senator</li>
        </ul>
      </div>
    );
  }
}

export default sidebar;

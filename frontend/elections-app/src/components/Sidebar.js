import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class sidebar extends React.Component {
  render() {
    return (
      // <div class="sidebarOutter">
      //   <div class="sidebarInner">
      //     <ul>
      //       <li style={{cursor: 'pointer'}} onClick={() =>this.select("President")}>
      //         Item 1
      //       </li>
      //       <hr/>
      //       <li>
      //         Item 2
      //       </li>
      //       <hr/>
      //       <li>
      //         Item 2
      //       </li>
      //     </ul>
      //   </div>
      // </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <ul class="list-group">
          <li class="list-group-item tableItem">President</li>
          <li class="list-group-item tableItem">Executive Vice President</li>
          <li class="list-group-item tableItem">
            Vice President of Internal Affairs
          </li>
          <li class="list-group-item tableItem">
            Vice President of External Affairs
          </li>
          <li class="list-group-item tableItem">Vice President of Finance</li>
          <li class="list-group-item tableItem">
            Undergraduate Sustainability Director
          </li>
          <li class="list-group-item tableItem">Personnel Director</li>
          <li class="list-group-item tableItem">
            Marketing and Promotions Director
          </li>
          <li class="list-group-item tableItem">
            Transfer/Non-Traditional Student Director
          </li>
        </ul>
      </div>
    );
  }
}

export default sidebar;

import React, {useContext} from "react";
import { Button } from "react-bootstrap";

const Event = ({ event: e, func: handleViewEvent }) => {
  console.log(handleViewEvent);
  return (
    
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 text-center">
      <div className="card p-0 overflow-hidden h-100 shadow ">
        <div className="card-body">
          <a
            href={e.link !== "" ? e.link : ""}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 className="card-title">{e.name}</h5>
          </a>
          <p className="card-title">{e.event_date.substring(0, 10)}</p>
          <p className="card-text">{e.location}</p>
          <Button variant="secondary" onClick={() => handleViewEvent(e)}>
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Event;

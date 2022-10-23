import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { Briefcase, GeoAlt, ThreeDots } from "react-bootstrap-icons";
import gray from "../../../assets/Rectangle3-1.png";
import eye from "../../../assets/icon/eye.svg";
import share from "../../../assets/icon/share.svg";

const JobCard = () => {
  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <p style={{ fontSize: "18px", fontWeight: 500 }}>Job</p>
          <Card.Title className="d-flex justify-content-between align-items-start">
            <h3> Software Developer</h3>
            <Button variant="light">
              {" "}
              <ThreeDots />{" "}
            </Button>
          </Card.Title>
          <Card.Text className="d-flex">
            <p>
              <Briefcase /> Innovaccer Analytics Private Ltd.
            </p>
            <p className="mx-auto">
              <GeoAlt /> Noida, India
            </p>
          </Card.Text>
          <Button
            variant="outline-success "
            style={{ width: "100%" }}
            className="mb-3 fw-bold"
          >
            Apply on Timesjobs
          </Button>

          <Stack direction="horizontal" gap={3}>
            <div>
              <img
                src={gray}
                className="rounded-circle"
                style={{ width: "48px" }}
                alt="Avatar"
              />
              <span
                className="ms-2"
                style={{ fontSize: "18px", fontWeight: 600 }}
              >
                Joseph Gray
              </span>
            </div>

            <div className="ms-auto">
              <img className="me-1" src={eye} alt="view_iocn" />
              1.4k views
            </div>
            <div style={{ cursor: "pointer" }} className="bg-light px-3 py-2">
              <img style={{ width: 14 }} src={share} alt="share_icon" />
            </div>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};

export default JobCard;

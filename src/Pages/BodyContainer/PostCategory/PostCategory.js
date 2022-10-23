import React from "react";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { CaretDownFill, GeoAlt, PeopleFill } from "react-bootstrap-icons";
import JobCard from "../JobCard/JobCard";
import PostCardContainer from "../PostCardContainer/PostCardContainer";
import "./PostCategory.css";

const PostCategory = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="allpost"
        id="uncontrolled-tab-example"
        className="mb-3 mt-3"
      >
        <Tab eventKey="allpost" title="All Posts (32)">
          <div>
            <PostCardContainer />
          </div>
        </Tab>
        <Tab eventKey="article" title="Article">
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam id
            ad atque voluptatum commodi nam magni accusantium at aliquam unde!
          </div>
        </Tab>
        <Tab eventKey="event" title="Event">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quo!
            Fugit nam sapiente nisi sequi, distinctio quod nulla ipsa, excepturi
            optio, libero pariatur obcaecati sunt.
          </div>
        </Tab>

        <Tab eventKey="education" title="Education">
          <div>Lorem</div>
        </Tab>

        <Tab eventKey="job" title="Job">
          <Row className="mx-auto">
        <Col sm={7}>
        <JobCard />
        </Col>
        <Col sm={4} className="text-end">
          <div style={{ marginTop: -60, marginBottom: 50, marginLeft: "auto" }}>
            <Button variant="light">
              Write a Post <CaretDownFill/>
            </Button>
            <Button variant="primary">
              +<PeopleFill /> Join Group
            </Button>
          </div>
          <div>
            <GeoAlt />
            <input type="text" defaultValue={"Noida, India"} />
          </div>
        </Col>
      </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default PostCategory;

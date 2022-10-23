import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { CaretDownFill, GeoAlt, PeopleFill } from "react-bootstrap-icons";
import sarthak from "../../../assets/Rectangle3.png";
import west from "../../../assets/Rectangle3-3.png";
import ronal from "../../../assets/Rectangle3-2.png";
import post1 from "../../../assets/Rectangle5.png";
import post2 from "../../../assets/Rectangle5-2.png";
import post3 from "../../../assets/Rectangle5-1.png";
import PostCard from "../PostCard/PostCard";
import JobCard from "../JobCard/JobCard";

const data = [
  {
    id: 1,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: {
      name: "Sarthak Kamra",
      img: sarthak,
    },
    views: 1.4,
    img: post1,
    category: "Article",
  },
  {
    id: 2,
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: {
      name: "Sarah West",
      img: west,
    },
    views: 1.4,
    img: post2,
    category: "Education",
  },
  {
    id: 3,
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: {
      name: "Ronal Jones",
      img: ronal,
    },
    views: 1.4,
    img: post3,
    category: "Meetup",
  },
];

const PostCardContainer = () => {
  return (
    <div>
      <Row className="mx-auto">
        <Col sm={10} md={7} lg={7}>
          {data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          <JobCard />
        </Col>
        <Col sm={10} md={5} lg={4} className="text-end">
          <div style={{ marginTop: -60, marginBottom: 50, marginLeft: "auto" }}>
            <Button variant="light">
              Write a Post <CaretDownFill />
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
    </div>
  );
};

export default PostCardContainer;

import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <h3>About</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        veritatis soluta exercitationem eligendi perferendis, corporis dolore
        praesentium necessitatibus minus quis temporibus dolores. Doloribus illo
        magnam laudantium ea, officia nihil quibusdam?
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--gray-500);
    margin-top: 2rem;
  }
`;

export default About;

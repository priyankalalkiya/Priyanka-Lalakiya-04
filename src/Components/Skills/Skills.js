import React from "react";
import styled from "styled-components";
import { skills } from "./SkillsData";
import './Skills.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  border: 0.9px solid black;
  border-radius: 18px;
  padding: 18px 36px;
  background-color: white;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  box-shadow: 1px 4px 4px 4px rgba(47, 45, 45, 0.3);
  @media (max-width: 500px) {
    max-width: 300px;
    padding: 10px 30px;
  }
`;
const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 20px;
  }

`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid black;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 10px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 10px;
  }

`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  
`;

const Skills = () => {
  return (
    <Container id="skill" className="backgroundStyle">
      <Wrapper>
        <h1 className="skill-title"> My <span className="span">Skills</span></h1>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
import {
  Column,
  Heading,
  Media,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import React from "react";
// Using the lightweight mapped structure from workExperience export
interface SimpleExperience {
  slug: string;
  title: string; // company name
  slogan: string; // role/title
  img: string;
  color: string;
}

interface WorkExperienceCardProps {
  experience: SimpleExperience;
}

export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  experience,
}) => {
  return (
    <SmartLink
      href={`/work/${experience.slug}`}
      style={{ textDecoration: "none" }}
    >
      <Column
        gap="12"
        padding="16"
        style={{
          border: "1px solid var(--once-color-neutral-alpha-weak)",
          borderRadius: "12px",
        }}
      >
        <Media
          radius="s"
          aspectRatio="16 / 9"
          alt={experience.title}
          src={experience.img}
          style={{ background: experience.color }}
        />
        <Row gap="8" vertical="center">
          <Heading as="h3" variant="heading-strong-s">
            {experience.title}
          </Heading>
        </Row>
        <Text variant="label-default-s" onBackground="neutral-weak">
          {experience.slogan}
        </Text>
      </Column>
    </SmartLink>
  );
};

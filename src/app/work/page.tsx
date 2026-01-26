import { BeforeAndAfter } from "@/components";
import { about, baseURL, person, work } from "@/resources";
import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

const beforeAndAfters = [
  ...[1, 2, 3, 4].map((n) => ({
    frameTitle: `ProWorkflow Redesign - ${n}`,
    frame: true,
    after: {
      src: `images/projects/before-after/proworkflow/PWF_A_0${n}.png`,
      alt: "After",
      label: "After",
    },
    before: {
      src: `images/projects/before-after/proworkflow/PWF_B_0${n}.png`,
      alt: "Before",
      label: "Before",
    },
  })),

  ...[1, 2, 3, 4].map((n) => ({
    frameTitle: `UI Redesign - ${n}`,
    frame: true,
    after: {
      src: `images/projects/before-after/ui/0${n}_A.png`,
      alt: "After",
      label: "After",
    },
    before: {
      src: `images/projects/before-after/ui/0${n}_B.png`,
      alt: "Before",
      label: "Before",
    },
  })),
];

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-default-m" align="center">
        {work.title}
      </Heading>
      <Text as="div" variant="body-default-l" align="center">
        I love the challenge of taking a complex problem and turning it into
        something simple. <br />
        These 'Before & After' snapshots show my process of bridging the gap
        between messy legacy systems and polished, component-based interfaces.
      </Text>
      {/* <Heading
        as="h2"
        variant="heading-strong-l"
        marginTop="64"
        marginBottom="40"
        align="center"
      >
        Experience
      </Heading> */}
      {/* <Row gap="32" wrap>
        {workExperience.map((exp) => (
          <WorkExperienceCard key={exp.slug} experience={exp} />
        ))}
      </Row> */}
      <Heading
        as="h2"
        variant="heading-strong-l"
        marginTop="l"
        marginBottom="40"
        align="center"
      >
        Before & After
      </Heading>
      <Column gap="160">
        {beforeAndAfters.map((props, index) => (
          <BeforeAndAfter key={index} {...props} />
        ))}
      </Column>

      {/* <Projects /> */}
    </Column>
  );
}

import { BeforeAndAfter, CustomMDX, ScrollToHash } from "@/components";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, person, work, workExperience } from "@/resources";
import { careerHistory } from "@/resources/work-experience";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import {
  AvatarGroup,
  Column,
  Heading,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  const experienceSlugs = workExperience.map((w) => ({ slug: w.slug }));
  return [...posts.map((post) => ({ slug: post.slug })), ...experienceSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);
  // Find rich experience entry from careerHistory (fallback to simplified mapping if needed)
  const fullExperience = careerHistory.find((e) => e.slug === slugPath);
  const experience =
    fullExperience || workExperience.find((e) => e.slug === slugPath);

  if (!post && !experience) return {};

  if (post) {
    return Meta.generate({
      title: post.metadata.title,
      description: post.metadata.summary,
      baseURL: baseURL,
      image:
        post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
      path: `${work.path}/${post.slug}`,
    });
  }

  if (fullExperience) {
    return Meta.generate({
      title: fullExperience.company,
      description: fullExperience.description,
      baseURL: baseURL,
      image: fullExperience.mainImg,
      path: `${work.path}/${fullExperience.slug}`,
    });
  }

  // Fallback for simplified mapping (should be rare once fully migrated)
  return Meta.generate({
    title: experience!.title,
    description: (experience as any).slogan,
    baseURL: baseURL,
    image: (experience as any).img,
    path: `${work.path}/${experience!.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);
  const fullExperience = careerHistory.find((e) => e.slug === slugPath);
  const experience =
    fullExperience || workExperience.find((e) => e.slug === slugPath);

  if (!post && !experience) {
    notFound();
  }

  const avatars =
    post?.metadata.team?.map((person: { avatar: string }) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      {post && (
        <Schema
          as="blogPosting"
          baseURL={baseURL}
          path={`${work.path}/${post.slug}`}
          title={post.metadata.title}
          description={post.metadata.summary}
          datePublished={post.metadata.publishedAt}
          dateModified={post.metadata.publishedAt}
          image={
            post.metadata.image ||
            `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
          }
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
      )}
      {fullExperience && (
        <Schema
          as="article"
          baseURL={baseURL}
          path={`${work.path}/${fullExperience.slug}`}
          title={fullExperience.company}
          description={fullExperience.description}
          image={fullExperience.mainImg}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
      )}
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">{post ? "Projects" : "Work"}</Text>
        </SmartLink>
        {post && (
          <Text
            variant="body-default-xs"
            onBackground="neutral-weak"
            marginBottom="12"
          >
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        )}
        <Heading variant="display-strong-m">
          {post
            ? post.metadata.title
            : fullExperience
            ? fullExperience.company
            : experience!.title}
        </Heading>
      </Column>
      {post && (
        <Row marginBottom="32" horizontal="center">
          <Row gap="16" vertical="center">
            {post.metadata.team && (
              <AvatarGroup reverse avatars={avatars} size="s" />
            )}
            <Text variant="label-default-m" onBackground="brand-weak">
              {post.metadata.team?.map(
                (member: { name: string; linkedIn: string }, idx: number) => (
                  <span key={idx}>
                    {idx > 0 && (
                      <Text as="span" onBackground="neutral-weak">
                        ,{" "}
                      </Text>
                    )}
                    <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
                  </span>
                )
              )}
            </Text>
          </Row>
        </Row>
      )}
      {post && (
        <>
          {post.metadata.images.length > 0 && (
            <Media
              priority
              aspectRatio="16 / 9"
              radius="m"
              alt="image"
              src={post.metadata.images[0]}
            />
          )}
          <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
            <CustomMDX source={post.content} />
          </Column>
          <Column fillWidth gap="40" horizontal="center" marginTop="40">
            <Line maxWidth="40" />
            <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
              Related projects
            </Heading>
            <Projects exclude={[post.slug]} range={[2]} />
          </Column>
        </>
      )}
      {fullExperience && !post && (
        <Column as="article" maxWidth="s" gap="32">
          <Heading as="h2" variant="heading-strong-s">
            Overview
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {fullExperience.description}
          </Text>
          <Heading as="h3" variant="heading-strong-xs">
            Role
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {fullExperience.title}
          </Text>
          {fullExperience.tools?.length > 0 && (
            <>
              <Heading as="h3" variant="heading-strong-xs">
                Tools
              </Heading>
              <Row wrap gap="16">
                {fullExperience.tools.map((tool, i) => (
                  <Text key={i} variant="label-default-s">
                    {tool}
                  </Text>
                ))}
              </Row>
            </>
          )}
          {fullExperience.beforeAfter &&
            fullExperience.beforeAfter.length > 0 && (
              <Column gap="24">
                <Heading as="h3" variant="heading-strong-xs">
                  Before & After
                </Heading>
                <Column gap="40">
                  {fullExperience.beforeAfter.map((ba, i) => (
                    <Column key={i} gap="8">
                      <Text variant="label-strong-s">{ba.description}</Text>
                      <BeforeAndAfter
                        before={{
                          src: ba.before,
                          alt: ba.description + " before",
                          label: "Before",
                        }}
                        after={{
                          src: ba.after,
                          alt: ba.description + " after",
                          label: "After",
                        }}
                        aspectRatio="16 / 9"
                        frame
                        initial={50}
                        hover
                      />
                    </Column>
                  ))}
                </Column>
              </Column>
            )}
          {fullExperience.marketingImgs &&
            fullExperience.marketingImgs.length > 0 && (
              <Column gap="24">
                <Heading as="h3" variant="heading-strong-xs">
                  Marketing
                </Heading>
                <Row wrap gap="16">
                  {fullExperience.marketingImgs.map((img, i) => (
                    <Media
                      key={i}
                      as="img"
                      radius="s"
                      aspectRatio="16 / 9"
                      alt="marketing image"
                      src={img}
                    />
                  ))}
                </Row>
              </Column>
            )}
        </Column>
      )}
      <ScrollToHash />
    </Column>
  );
}

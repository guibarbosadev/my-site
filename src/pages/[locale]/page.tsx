import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetStaticPaths, Metadata } from "next";
import { promises as fs } from "fs";
import { MainProject, SideProject, SocialLink, WorkExperience } from "@/types";
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CardProject from "@/components/card-project/CardProject";
import { useTranslation, getI18n } from "react-i18next";
import { useRouter } from "next/router";

type Props = {
  projects: MainProject[];
  works: WorkExperience[];
  socials: SocialLink[];
  sideProjects: SideProject[];
};

const inter = Inter({ subsets: ["latin"] });
export const metada: Metadata = {
  title: "Guilherme Barbosa",
  description: `Hello, I am Guilherme Barbosa, a software developer, this is my personal website.`,
};
const iconsMap: { [key in SocialLink["name"]]: FontAwesomeIconProps["icon"] } =
  {
    Github: faGithub,
    Linkedin: faLinkedin,
    Twitter: faTwitter,
    Resume: faDownload,
  };

export const getStaticPaths = (async () => {
  return {
    paths: [{ params: { locale: "en" } }, { params: { locale: "pt-BR" } }],
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = async ({
  locale,
}: {
  locale: "en" | "pt-BR";
}) => {
  async function getJSONObject<T>(fileName: string) {
    // const { language } = getI18n() ?? {};

    const file = await fs.readFile(
      `${process.cwd()}/public/i18n/${locale ?? "en"}/${fileName}`,
      "utf8"
    );
    const jsonObject: T = JSON.parse(file);

    console.log({ locale });

    return jsonObject;
  }

  const [projects, socials, works, sideProjects] = await Promise.all([
    getJSONObject<MainProject[]>("main-projects.json"),
    getJSONObject<SocialLink[]>("socials.json"),
    getJSONObject<WorkExperience[]>("works.json"),
    getJSONObject<SideProject[]>("side-projects.json"),
  ]);
  const props: Props = { projects, socials, works, sideProjects };

  return { props };
};

export default function Home({
  projects,
  works,
  socials,
  sideProjects,
}: Props) {
  const { t } = useTranslation();
  const bla = useRouter();

  return (
    <>
      <Head>
        <title>Guilherme Barbosa</title>
        <meta name="description" content="Guilherme Barbosa's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <>
        <main
          className={`${styles.main} ${styles.section}  ${inter.className}`}
        >
          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" className={styles.social}>
                  <FontAwesomeIcon
                    width={30}
                    display="block"
                    icon={iconsMap[social.name]}
                    size="xs"
                  />
                  <span style={{ lineHeight: "2rem" }}>{social.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <Image
            alt="Guilherme Barbosa's picture"
            src="/me.jpg"
            width={250}
            height={250}
            className={styles.image}
          />
          <h1 className={styles.center}>Guilherme Barbosa</h1>
          <p>{t("me.description1")}</p>
          <p>{t("me.description2")}</p>
        </main>
        <section className={styles.section} title="Main projects">
          <h2>Main projects</h2>
          {projects.map((project) => (
            <CardProject project={project} key={project.title} />
          ))}
        </section>
        <section className={styles.section} title="Work experience">
          <h2>Work experience</h2>
          <div className={styles.works}>
            {works.map((work) => (
              <div key={work.name} className={`${styles.work} ${styles.card}`}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3>{work.name}</h3>
                    <span>
                      {work.startYear}-{work.endYear ?? "now"}
                    </span>
                  </div>

                  <p>{work.description}</p>

                  <div className={styles.tags}>
                    {work.technologies.map((technology) => (
                      <div key={technology} className={styles.tag}>
                        {technology}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} title="Other projects">
          <h2>Other projects</h2>
          <div className={styles.works}>
            {sideProjects.map((sideProject) => (
              <div key={sideProject.name} className={styles.sideProjectCard}>
                <div className={styles.sideProjectCardContent}>
                  <h3>{sideProject.name}</h3>
                  <p>{sideProject.description}</p>
                  <div className={styles.tags}>
                    {sideProject.technologies.map((technology) => (
                      <div key={technology} className={styles.tag}>
                        {technology}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.sideProjectCardLinks}>
                  <a href={sideProject.links.source} target="_blank">
                    Source
                  </a>
                  <a href={sideProject.links.preview} target="_blank">
                    Visit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.sectionAboutMe}`}
          title="About myself"
        >
          <h2>About myself</h2>
          <div>
            <p>
              {`
              For me, the perfect analogy is that software development is basically a mix of different
              "games", where the end result is solving a real life problem. Each language/stack/technology/context
              has its own set of rules and common strategys(design patterns), everyone is trying to solve the game,
              as we become more familiar with some specific game(language), our brain faster use some pattern to solve the
              facing problem.
              `}
            </p>
            <br></br>
            <p>
              I say that it is the perfect analogy because, just like any
              complex game, there is always room for improvement. But for me,
              even tough I love this games, their end goal is to help me to
              solve real life problems, that is the purpose, otherwise, they
              would be only games
            </p>
          </div>
        </section>

        <footer className={styles.footer}>
          Made with ❤️ by Guilherme Barbosa. MIT License.{" "}
          <a href="https://github.com/guibarbosadev/my-site" target="_blank">
            Source
          </a>
        </footer>
      </>
    </>
  );
}

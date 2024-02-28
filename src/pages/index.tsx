import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetStaticProps, Metadata } from "next";
import { promises as fs } from "fs";
import { MainProject, SocialLink, WorkExperience } from "@/types";

type Props = {
  projects: MainProject[];
  works: WorkExperience[];
  socials: SocialLink[];
};

const inter = Inter({ subsets: ["latin"] });
export const metada: Metadata = {
  title: "Guilherme Barbosa",
  description: `Hello, I am Guilherme Barbosa, a software developer, this is my personal website.`,
};

export const getStaticProps = async () => {
  async function getJSONObject<T>(fileName: string) {
    const file = await fs.readFile(
      `${process.cwd()}/public/${fileName}`,
      "utf8"
    );
    const jsonObject: T = JSON.parse(file);

    return jsonObject;
  }

  const [projects, socials, works] = await Promise.all([
    getJSONObject<MainProject[]>("main-projects.json"),
    getJSONObject<SocialLink[]>("socials.json"),
    getJSONObject<WorkExperience[]>("works.json"),
  ]);
  const props: Props = { projects, socials, works };

  return { props };
};

export default function Home({ projects, works, socials }: Props) {
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
                <a href={social.href}>{social.name}</a>
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
          <p>I love using code to solve real life problems.</p>
          <p>Developing applications professionally since 2018.</p>
        </main>
        <section className={styles.section} title="Main projects">
          <h2>Main projects</h2>
          {projects.map((project, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <br></br>
                <div>
                  <div>Main problem: </div>
                  <p>{project.problem}</p>
                </div>

                <br></br>
                <div>
                  <div>Solution: </div>
                  <p>{project.solution}</p>
                </div>
              </div>
              <div className={styles.cardFooter}>
                {project.screenshots.map((imageUrl, index) => (
                  <Image
                    key={imageUrl}
                    src={imageUrl}
                    width={150}
                    height={100}
                    style={{ objectFit: "fill" }}
                    alt={`${project.title}'s ${index + 1} image`}
                  />
                ))}
              </div>
            </div>
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
      </>
    </>
  );
}

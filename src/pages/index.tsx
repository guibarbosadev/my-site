import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetStaticProps, Metadata } from "next";
import { promises as fs } from "fs";

type SocialLink = {
  href: string;
  name: string;
};

const inter = Inter({ subsets: ["latin"] });
const socials: SocialLink[] = [
  {
    href: "https://github.com/guibarbosadev",
    name: "Github",
  },
  {
    href: "https://linkedin.com/in/guibarbosadev",
    name: "Linkedin",
  },
  {
    href: "https://twitter.com/guibarbosadev",
    name: "Twitter",
  },
];

export const metada: Metadata = {
  title: "Guilherme Barbosa",
  description: `Hello, I am Guilherme Barbosa, a software developer, this is my personal website.`,
};

export interface MainProject {
  title: string;
  problem: string;
  solution: string;
  participation: string;
  technologies: string;
  screenshots: string[];
}

export const getStaticProps = async () => {
  const file = await fs.readFile(
    process.cwd() + "/public/main-projects.json",
    "utf8"
  );
  const projects = JSON.parse(file);

  return { props: { projects } };
};

export default function Home(props: { projects: MainProject[] }) {
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
          {props.projects.map((project, index) => (
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
                    alt={`${project.title}'s ${index + 1} image`}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </>
    </>
  );
}

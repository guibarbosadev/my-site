import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Metadata } from "next";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Guilherme Barbosa</title>
        <meta name="description" content="Guilherme Barbosa's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div>
        <main
          className={`${styles.main} ${styles.section}  ${inter.className}`}
        >
          <Image
            alt="Guilherme Barbosa's picture"
            src="/me.jpg"
            width={460}
            height={460}
            className={styles.image}
          />
          <h1 className={styles.center}>Guilherme Barbosa</h1>
          <p>
            I love building things that make a big positive impact on society.
          </p>
          <p>Coding has been my profession since 2018.</p>

          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.href}>
                <a href={social.href}>{social.name}</a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

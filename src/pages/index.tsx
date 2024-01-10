import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Image
          alt="Guilherme Barbosa's picture"
          src="/me.jpg"
          width={460}
          height={460}
          className={styles.image}
        />
        <h1 className={styles.center}>Guilherme Barbosa</h1>
        <p>
          I like the challenge of generating positive value to the society using
          my brain to solve real problems.
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
    </>
  );
}

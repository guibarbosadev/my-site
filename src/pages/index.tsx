import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Metadata } from "next";
import { useMemo } from "react";

type SocialLink = {
  href: string;
  name: string;
};

const inter = Inter({ subsets: ["latin"] });

export const metada: Metadata = {
  title: "Guilherme Barbosa",
  description: `Hello, I am Guilherme Barbosa, a software developer, this is my personal website.`,
};

export default function Home() {
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
        <section className={styles.section}>
          <a href="kyteapp.com" className={styles.tag}>
            Kyte
          </a>
          <h2>June 2021 - Now</h2>
          <div>Projects</div>
          <a href="web.kyteapp.com">
            <div className={styles.card}>
              <div className={styles.cardTitle}>[Web App] - Kyte POS</div>
              <div className="cardDescription">
                {`Main problem: many users of Kyte's POS app were not able to use
                on computer, where they would be faster doing everything that
                they already do on the app. Solution: Web version of the Kyte
                POS app, where the business owners are able to basically do
                everything that is already is possible on the app, like, for
                example: - Register and manage orders/sales - Manage stock -
                Manage products - Manage online catalog - Visualize business
                statistics My participation: I was the main developer, which
                made me responsable: - Decide which technologies/patterns would
                be used in the project - Later, review the pull requests from
                other devs - Participate on strategic decisions about how the
                app should be/behave like Main technologies used: react,
                react-native-web, react native, typescript, javacript, redux,
                node.js`}
              </div>
            </div>
          </a>
        </section>
      </div>
    </>
  );
}

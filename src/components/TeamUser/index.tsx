import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type Item = {
  name: string;
  date: string;
  description: string;
  githubUrl: string;
  lattesUrl: string;
};

function TeamUser({
  name,
  date,
  description,
  githubUrl,
  lattesUrl,
}: Readonly<Item>) {
  return (
    <article className={clsx("col col--5", styles.cardSpace)}>
      <div className="card card--full-height">
        <header className="card__header">
          <div className="avatar avatar--vertical">
            <figure>
              <img
                className="avatar__photo avatar__photo--xl"
                src={`${githubUrl}.png`}
                alt={`Avatar de ${name}`}
              />
            </figure>
            <div className="avatar__intro">
              <h3 className={styles.space}>{name}</h3>
              <h6 className={styles.subTitle}>{date}</h6>
            </div>
          </div>
        </header>
        <section className="card__body">
          <p>{description}</p>
        </section>
        <footer className="card__footer text--center">
          <div className="button-group button-group--block">
            {githubUrl && (
              <a
                className="button button--secondary"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link para o GitHub de ${name}`}
              >
                GitHub
              </a>
            )}
            {lattesUrl && (
              <a
                className="button button--secondary"
                href={lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link para o Lattes de ${name}`}
              >
                Lattes
              </a>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
}

export default React.memo(TeamUser);

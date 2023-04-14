import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type Item = {
    name: string;
    date: string;
    description: string;
    githubUrl: string;
    lattesUrl: string;
};


export default function TeamUser({name, date, description, githubUrl, lattesUrl}:Item){
    return(
        <div className={clsx('col col--5', styles.cardSpace)}>
            <div className="card card--full-height">
                <div className="card__header">
                <div className="avatar avatar--vertical">
                    <img
                    className="avatar__photo avatar__photo--xl"
                    src={`${githubUrl}.png`}
                    alt={`${name}'s avatar`}
                    />
                    <div className="avatar__intro">
                        <h3 className={styles.space}>
                            {name}
                        </h3>
                        <h6 className={styles.subTitle}>
                            {date}
                        </h6>
                    </div>
                </div>
                </div>
                <div className="card__body ">
                    {description}
                </div>
                <div className="card__footer text--center">
                    <div className="button-group button-group--block">
                        <a className="button button--secondary" href={githubUrl}>
                            GitHub
                        </a>
                        <a className="button button--secondary" href={lattesUrl}>
                            Lattes
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
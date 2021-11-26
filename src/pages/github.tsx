import type { NextPage } from "next";
import styles from '../styles/index.module.css'
import { useState } from 'react'
import Title from "@/components/atoms/title";
import Feature from "@/components/molecules/feature";

const GitHubRepos: NextPage = ({ repos }) => {

    return (
        <>
            <section className={styles.copy}>

                <Title title="GitHub Repositories" description="List of all of my public repositories"></Title>

            </section>
            <section className={styles.features}>
                {repos.map((f) => (
                    <div key={f.title} className={styles.feature}>
                        <Feature {...f} />
                    </div>
                ))}
            </section>
        </>
    )
}

// get data from the GitHub Api
export async function getStaticProps() {
    // Call an external API endpoint to get repositories.
    const username = 'mysticfalconvt'
    const url = `https://api.github.com/users/${username}/repos`;

    //get the repos from the github api
    const reposWithAllInfo = await fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
    // console.log(reposWithAllInfo)
    //get just the name, description, and html_url of each repo to reduce the size of the data
    const repos = reposWithAllInfo.map(repo => {
        return {
            title: repo.name,
            id: repo.id,
            description: repo.description,
            link: repo.html_url
        }
    });


    return {
        props: { repos }, // will be passed to the page component as props
    }
}

export default GitHubRepos
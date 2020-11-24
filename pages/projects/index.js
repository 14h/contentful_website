import Container from '../../components/container'
import Layout from '../../components/layout'
import Head from 'next/head'
import Header from "../../components/header";
import {get_all_projects} from "../../lib/api";
import React from "react";

export default function Projects({projects}) {
    console.log(projects);

    return (
        <>
            <Layout>
                <Head>
                </Head>
                <Container>
                    <Header
                        selected_nav_elem='projects'
                    />
                    <div className='mt-32'>
                        {
                            projects.map(
                                (project, index) => (
                                    <div
                                        key={`project_${index}`}
                                    >
                                        <a href={`/projects/${project.slug}`}>
                                            <div>{project.name}</div>
                                        </a>

                                    </div>
                                )
                            )
                        }
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const projects = await get_all_projects()
    return {
        props: {
            projects
        },
    }
}

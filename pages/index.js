import Container from '../components/container'
import Layout from '../components/layout'
import {get_all_projects} from '../lib/api'
import Head from 'next/head'
import Header from "../components/header";

export default function Index({projects}) {

    console.log(projects);

    return (
        <>
            <Layout>
                <Head>
                </Head>
                <Container>
                    <Header
                    />
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

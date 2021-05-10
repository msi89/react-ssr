import Layout from "../components/Layout";

const About = () => {
    return <Layout>
        <Layout.Head>
            <title>About us </title>
        </Layout.Head>
        <Layout.Container>
            <h1>Our company</h1>
            <p style={{ maxWidth: '500px' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat eum dignissimos culpa accusantium sed, qui provident voluptatibus, repellendus odio ab quos earum aspernatur natus laborum animi non, ad sint.
            </p>
        </Layout.Container>
    </Layout>
}

export default About;
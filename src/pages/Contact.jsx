import Layout from "../components/Layout";

const Contact = () => {
    return <Layout>
        <Layout.Head>
            <title>Contact us </title>
        </Layout.Head>
        <Layout.Container>
            <h1>Contact Us</h1>
            <p style={{ maxWidth: '500px' }}>
                <input type="email" className="field" name="email" id="email" placeholder="Enter you email" />
                <button>Send</button>
            </p>
        </Layout.Container>
    </Layout>
}

export default Contact;
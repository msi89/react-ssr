import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>
            <Layout.Head>
                <title>My super React app</title>
            </Layout.Head>
            <Layout.Container>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
           </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </Layout.Container>
        </Layout>
    );
}

export default Home;

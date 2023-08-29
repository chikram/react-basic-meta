function Intro2() {
    const styles = {
        color: "green",
        padding: "10px",
        fontWeight: "bold"
    }
    return (
        <div className="blog-post-intro">
            {/*inline css in react*/}
            <h2 style={{ color: "red", fontFamily: "serif" }}>Why I love front-end web development</h2>
            <div>
                <p style={styles}>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro2;
import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';

class mainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        //
        if (typeof window !== 'undefined') {
            const script = document.createElement("script");

            script.src = "https://static.airtable.com/js/embed/embed_snippet_v1.js";
            script.async = true;

            document.body.appendChild(script);
        }
    }

    resize() {
        this.setState({ displayMobile: window.innerWidth <= 760 });
    }



    render() {
        return (
            <PageContainer>
                <Header />
                <FrameContainer>
                    <iframe src="https://airtable.com/embed/shr96cS9bBW60fEgc?backgroundColor=red"
                        style={{
                            className: "airtable-embed airtable-dynamic-height",
                            frameboder: "0",
                            background: "transparent",
                            border: "1px solid #ccc",
                            onmousewheel: "",
                            width: "100%",
                            height: "100%"
                        }}>
                    </iframe>
                </FrameContainer>
                <Footer />
            </PageContainer>
        );
    }
}

export default mainPage;

const PageContainer = styled.div`
width: 100vw;
background-color: #00155d;
overflow: hidden;
`
const FrameContainer = styled.div`
display: flex;
justify-content: center;
width: 80%;
margin: 0 10%;
height: 1700px;
@media (max-width: 768px){
width: 95%;
margin: 0 2.5%;
height: 1850px;
}
`

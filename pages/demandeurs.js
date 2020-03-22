import React, { Component } from 'react';
import styled from "styled-components";
import Link from 'next/link'
import Header from '../components/header';
import Footer from '../components/footer';

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
                    <Image
                        src={this.state.displayMobile ? '/static/images/mobile-background-referent.png' : '/static/images/background-referent.png'}
                        alt='aperçu covid univers'
                    />
                    <iframe src="https://airtable.com/embed/shrvaCq3dxHZeSFJh?backgroundColor=red"
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
background-color: #b15201;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
`
const FrameContainer = styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin: 0 10%;
height: 2400px;
@media (max-width: 768px){
width: 95%;
margin: 0 2.5%;
height: 2200px;

}
`

const Image = styled.img`
width: 100%;
`

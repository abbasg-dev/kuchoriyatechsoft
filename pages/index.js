import ColoredLine from "../components/hr/hr";
import MicroHead from "../components/micro-heading/MicroHead";
import MicroHead2 from "../components/micro-heading/MicroHead2";
import React from "react";
import PortfolioSection from "../components/portfolio-container/PortfolioContainer";
import BannerCarousel from "../components/carousel/bannerCarousel";
import ReviewCarousel from "../components/review-carousel/ReviewCarousel";
import ServiceSection from "../components/service-section/ServiceSection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <main>
          <BannerCarousel />
          <div className="project-in-mind">
            <MicroHead2
              title={"Top-Ranked Web and Mobile App Development Company"}
            />
            <button className="get-quote">Get a quote</button>
          </div>
          <ColoredLine color="#FFF" />
          <MicroHead id={"services"} title={"Our services"} />
          <MicroHead2
            style={{ marginBottom: 40 }}
            title={
              "We bring your ideas to life with our high-quality web and mobile app development services.            "
            }
          />
          <ServiceSection />
          <ColoredLine color="#FFF" />
          <MicroHead
            id={"portfolio"}
            style={{ marginBottom: 40 }}
            title={"Portfolio"}
          />
          <PortfolioSection />
          <ColoredLine color="#FFF" />
          <MicroHead
            style={{ marginBottom: 40 }}
            title={"What are our clients saying?"}
          />
          <div id={"testimonials"} />
          <ReviewCarousel />
        </main>
      </Layout>

      <style jsx>{`
        .project-in-mind {
          margin-top: 40px;
          text-align: center;
          padding: 0 20px 0 20px;
        }
        .get-quote {
          margin-top: 10px;
          background-color: #cd4b03;
          border-radius: 6px;
          color: white;
          outline: none;
          border-width: 0;
          padding: 10px 16px;
          margin-left: 20px;
        }
        .get-quote-stmt {
          font-weight: 100;
          display: inline-block;
        }
        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: n wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        button {
        }
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        button {
          outline: none;
          cursor: pointer;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

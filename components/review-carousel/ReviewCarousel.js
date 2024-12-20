import Carousel from "react-elastic-carousel";
import ClientReview from "../client-review/ClientReview";
import { useMediaQuery } from "react-responsive";

const ReviewCarousel = (props) => {
  const isMobile = useMediaQuery({
    query: `(max-width: 806px)`,
  });
  const reviews = [
    {
      name: "Guiliani",
      job: "Principal Software Engineer (Development & Architecture)",
      opinion:
        "I took services from one of their full-stack Developers for over 5 months co-developing a web application in Angular 4/5 + Node (Kao). Overall, everything was very productive, we finished the project in time with best practices of test-driven development and continuous integration. Throughout, proper version control was practiced.",
    },
    {
      name: "Adella",
      job: "Co Founder",
      opinion:
        "Kuchoriya Softwares. the team helped us with the design and development of our company's new App & Web called 'Singaporeair'. The entire team was very engaged and always very timely in their responses. They helped Singaporeair, Corp develop this Insurance App & web within a few months.",
    },
    {
      name: "James Mitchell",
      job: "CEO",
      opinion:
        'Initially, I was skeptical, given how many scams start with a LinkedIn approach, especially when the solution is overseas and involves "clicking on this link." However, this was different. From the initial consultation to the completion of phase I, Alex and his team were professional, insightful, and enjoyable to work with.',
    },
    {
      name: "Simone Panesar",
      job: "Founder",
      opinion:
        "Working with Kuchoriya Softwares has been a pleasure. The Kuchoriya Softwares team got our work done without any issues or problems. They were very open to accommodating the changes that we made during the project was going on. They carefully reviewed our requirements and delivered on time and within budget!",
    },
  ];
  return (
    <Carousel
      showArrows={false}
      itemsToShow={isMobile ? 1 : 2}
      renderPagination={({ pages, activePage, onClick }) => {
        return <div></div>;
      }}
    >
      {reviews?.map((review, index) => {
        return (
          <div key={index}>
            <ClientReview review={review} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ReviewCarousel;

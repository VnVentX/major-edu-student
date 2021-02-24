import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useLocation, useHistory } from "react-router-dom";

const GameComponent = () => {
  const location = useLocation();
  const history = useHistory();

  //! Get Lesson path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const lessonPath = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

  const data = [
    {
      id: 1,
      gameName: "Game 1",
    },
    {
      id: 2,
      gameName: "Game 2",
    },
    {
      id: 3,
      gameName: "Game 3",
    },
    {
      id: 4,
      gameName: "Game 4",
    },
    {
      id: 5,
      gameName: "Game 5",
    },
    {
      id: 6,
      gameName: "Game 6",
    },
    {
      id: 7,
      gameName: "Game 7",
    },
  ];

  return (
    <div className="page">
      <div
        className="arrow-btn left-arrow"
        onClick={() => history.push(lessonPath[4])}
      >
        <h1>Lesson 1</h1>
      </div>
      <div className="page-contain">
        <div className="game-container">
          <div className="game-title">
            <h1>Game</h1>
          </div>
          <div className="game-slider-wrap">
            <Carousel
              additionalTransfrom={0}
              arrows
              centerMode={false}
              className=""
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1300,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {data?.map((i) => (
                <Link key={i.id} to={`${location.pathname}/${i.id}`}>
                  <div className="game-slider-btn">
                    <h1>{i.gameName}</h1>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameComponent;

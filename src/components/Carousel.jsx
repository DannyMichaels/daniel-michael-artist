import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useVisibleNodes } from '../hooks/useVisibleNodes';

const Carousel = ({ children, visibleItemsCount = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const visibleNodes = useVisibleNodes(
    'carousel__container',
    'carousel__item',
    currentIndex
  );
  const [skipTransition, setSkipTransition] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(
        containerRef.current.offsetWidth ||
          containerRef.current.getClientBoundingRect().width
      );
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    if (currentIndex === 0 % children.length) {
      setCurrentIndex(children.length - visibleItemsCount);
    } else {
      setCurrentIndex((currentIndex - 1 + children.length) % children.length);
    }
  };

  const cloneCount = visibleItemsCount;

  const clonedItems = [
    ...children.map((child, index) =>
      React.cloneElement(child, { key: index })
    ),
  ]; // cloned children

  for (let i = 0; i < cloneCount; i++) {
    clonedItems.push(React.cloneElement(children[i], { key: `clone-${i}` }));
  }

  for (let i = children.length - 1; i > children.length - 1 - cloneCount; i--) {
    clonedItems.unshift(React.cloneElement(children[i], { key: `clone-${i}` }));
  }

  const itemWidth = Math.floor(containerWidth / visibleItemsCount);

  useEffect(() => {
    if (skipTransition) {
      setTimeout(() => {
        setSkipTransition(false);
      }, 10);
    }
  }, [skipTransition]);

  const handleNextClick = () => {
    const translateXNext = translate - itemWidth * visibleItemsCount;
    const lastAllowedUnclonedItem = children.length * -itemWidth;

    const isOnEdgeForward = translateXNext < lastAllowedUnclonedItem;
    if (isOnEdgeForward) {
      setCurrentIndex(0);
      setSkipTransition(true);
      console.log({ isOnEdgeForward });
      setTimeout(() => {
        setSkipTransition(true);
      }, 750);
      return;
    }

    setCurrentIndex((prevState) => prevState + 1);
  };

  const translate =
    currentIndex === 0
      ? -(containerWidth / visibleItemsCount) * cloneCount +
        containerWidth / visibleItemsCount / 2
      : -currentIndex * (containerWidth / visibleItemsCount);

  return (
    <CarouselContainer
      visibleItemsCount={visibleItemsCount}
      containerWidth={containerWidth}
      translate={translate}
      skipTransition={skipTransition}
      className="carousel__container">
      <div className="carousel-wrapper">
        <CarouselButton className="left-arrow" onClick={handlePrevClick}>
          &lt;
        </CarouselButton>
        <div className="carousel-content-wrapper">
          <div className="carousel-content" ref={containerRef}>
            {clonedItems.map((item, index) => {
              let isCenter = false;

              const isVisible = visibleNodes.find(
                (i) => i.getAttribute('data-key') === item.key
              );

              if (isVisible) {
                const centerVisibleNodesIdx = Math.floor(
                  visibleNodes.length / 2
                );

                const centerItem = visibleNodes[centerVisibleNodesIdx];

                isCenter = centerItem.getAttribute('data-key') === item.key;
              }

              return (
                <CarouselItem
                  className="carousel__item"
                  data-index={index}
                  data-key={item.key}
                  key={item.key}
                  width={itemWidth}
                  currentIndex={currentIndex}
                  index={index}
                  isVisible={isVisible}
                  isCenter={isCenter}>
                  {item}
                </CarouselItem>
              );
            })}
          </div>
        </div>
        <CarouselButton className="right-arrow" onClick={handleNextClick}>
          &gt;
        </CarouselButton>
      </div>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .carousel-wrapper {
    display: flex;
    width: 100%;
    position: relative;
  }

  .carousel-content-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .carousel-content {
    display: flex;
    /* gap: 20px; */
    transition: ${({ skipTransition }) =>
      skipTransition ? 'none' : `all 250ms ease-in-out`};
    -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
    scrollbar-width: none; /* hide scrollbar in Firefox */
    transform: ${({ translate, containerWidth, visibleItemsCount }) =>
      `translateX(calc(${translate}px + (${containerWidth}px / ${
        visibleItemsCount * 2
      })))`};
  }

  /* hide scrollbar in webkit browser */
  .carousel-content::-webkit-scrollbar,
  .carousel-content::-webkit-scrollbar {
    display: none;
  }

  .left-arrow,
  .right-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
  }

  .left-arrow {
    left: 24px;
  }

  .right-arrow {
    right: 24px;
  }
`;

const CarouselButton = styled.button`
  width: 48px;
  height: 48px;
  background: #ea384e;
  border-radius: 100px;
  border: 1px solid #ea384e;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const CarouselItem = styled.div`
  /* width: ${({ visibleItemsCount }) => `${100 / visibleItemsCount}%`}; */
  flex-shrink: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => `${width}px`};
  opacity: ${({ isCenter }) => (isCenter ? '1' : '0.7')};
  background-color: grey;
  transition: all 300ms ease;
  border: ${({ isVisible }) => (isVisible ? '2px solid red' : '0')};
`;

export default Carousel;

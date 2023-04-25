import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

function getClonedChildren(children, visibleItemsCount) {
  children = [...children];

  for (let i = visibleItemsCount - 1; i >= 0; i--) {
    const itemToClone = children[i];
    children.unshift(
      React.cloneElement(itemToClone, {
        key: `clone-beginning-${i}`,
        clone: true,
      })
    );
  }

  for (let i = 0; i < visibleItemsCount; i++) {
    const itemToClone = children[i];
    children.push(
      React.cloneElement(itemToClone, { key: `clone-end-${i}`, clone: true })
    );
  }

  return children;
}

function Carousel({ children, visibleItemsCount = 1 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [clonedChildren, setClonedChildren] = useState([]);
  const [translateXCss, setTranslateXCss] = useState(`translateX(0px)`);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const clonedChildren = getClonedChildren(children, visibleItemsCount);
    setClonedChildren(clonedChildren);
    setLength(children.length);
  }, [children, visibleItemsCount]);

  useEffect(() => {
    if (wrapperRef.current) {
      setTranslateXCss(calcTranslateXCss(currentIndex, visibleItemsCount));
    }
  }, [currentIndex, visibleItemsCount, wrapperRef]);

  const calcTranslateXCss = (currentIndex, visibleItemsCount) => {
    const wrapperWidth = wrapperRef.current?.offsetWidth;
    const itemWidth = wrapperWidth / visibleItemsCount;

    const translateXCss = `translateX(-${currentIndex * itemWidth}px)`;

    return translateXCss;
  };

  const next = () => {
    const nextIndex = currentIndex + visibleItemsCount;
    if (nextIndex > length - visibleItemsCount) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
    const newTranslateXCss = `translateX(-${
      currentIndex * (100 / visibleItemsCount)
    }%)`;
    setTranslateXCss(newTranslateXCss);
  };

  const prev = () => {
    const nextIndex = currentIndex - visibleItemsCount;
    if (nextIndex < 0) {
      setCurrentIndex(length - visibleItemsCount);
    } else {
      setCurrentIndex(nextIndex);
    }
    const newTranslateXCss = `translateX(-${
      currentIndex * (100 / visibleItemsCount)
    }%)`;
    setTranslateXCss(newTranslateXCss);
  };

  return (
    <CarouselContainer
      visibleItemsCount={visibleItemsCount}
      translateXCss={translateXCss}
      length={length}>
      <div className="carousel-wrapper">
        <CarouselButton onClick={prev} className="left-arrow">
          &lt;
        </CarouselButton>

        <div className="carousel-content-wrapper">
          <div className="carousel-content" ref={wrapperRef}>
            {clonedChildren}
          </div>
        </div>

        <CarouselButton onClick={next} className="right-arrow">
          &gt;
        </CarouselButton>
      </div>
    </CarouselContainer>
  );
}

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
    transition: all 250ms linear;
    -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
    scrollbar-width: none; /* hide scrollbar in Firefox */

    transform: ${({ translateXCss }) => translateXCss};
  }

  /* hide scrollbar in webkit browser */
  .carousel-content::-webkit-scrollbar,
  .carousel-content::-webkit-scrollbar {
    display: none;
  }

  .carousel-content > * {
    /* width: 100%; */
    width: ${({ visibleItemsCount }) => `${100 / visibleItemsCount}%`};
    flex-shrink: 0;
    flex-grow: 1;
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

export default Carousel;

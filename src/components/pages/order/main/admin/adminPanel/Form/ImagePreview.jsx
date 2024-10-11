import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { theme } from "../../../../../../../theme";
import { imageAnimation } from "../../../../../../../theme/animations";
import { useRef } from "react";

export default function ImagePreview({ imageSource, title }) {
  const nodeRef = useRef(null);
  return (
    <TransitionGroup component={ImagePreviewStyled}>
      <CSSTransition
        nodeRef={nodeRef}
        appear={true}
        classNames={"animation-Image"}
        key={title}
        timeout={{ enter: 500, exit: 500 }}
      >
        {imageSource ? (
          <img ref={nodeRef} src={imageSource} alt={title} />
        ) : (
          <div ref={nodeRef} className="empty-image">
            Aucune Image
          </div>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: 1/1/4/2;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    object-position: center;
  }
  .empty-image {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }

  ${imageAnimation}
`;

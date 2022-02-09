import { useRef } from 'react';
import styled from 'styled-components';
import * as youtubeThumbnail from 'youtube-thumbnail';

const CARD_HEIGHT = 72;

const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 4px 12px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #00000042;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 4px;
  }
`;

const CopyButton = styled.div`
  cursor: pointer;
  height: 32px;
  width: ${CARD_HEIGHT}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1976d280;
  color: #1976d2;
  &:hover {
    background: #88c4ff1e;
  }
`;

const PreviewImage = styled.div`
  flex: 0 0 145px;
  border-radius: 4px;
  height: ${CARD_HEIGHT}px;
  width: 145px;
  background: url(${({ $thumbnailUrl }) => $thumbnailUrl});
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: ${CARD_HEIGHT}px;
`;

const YoutubeCard = ({ link }) => {
  const inputRef = useRef();
  const thumbnail = youtubeThumbnail(link);

  const handleOnCopy = () => {
    const inputElem = inputRef.current;
    inputElem.select();
    navigator.clipboard.writeText(inputElem.value);
  };

  return (
    <Wrapper>
      <PreviewImage $thumbnailUrl={thumbnail.default.url} />
      <Content>
        <Input
          ref={inputRef}
          type="text"
          value={link}
        />
        <CopyButton onClick={handleOnCopy}>
          複製
        </CopyButton>
      </Content>
    </Wrapper>
  )
};

export default YoutubeCard;

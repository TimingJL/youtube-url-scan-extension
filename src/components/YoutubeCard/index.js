import { useRef } from 'react';
import styled from 'styled-components';
import * as youtubeThumbnail from 'youtube-thumbnail';

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
  width: 80px;
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
  border-radius: 4px;
  height: 32px;
  width: 60px;
  background: url(${({ $thumbnailUrl }) => $thumbnailUrl});
  background-position: center;
  background-size: cover;
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
      <Input
        ref={inputRef}
        type="text"
        value={link}
      />
      <CopyButton onClick={handleOnCopy}>
        複製
      </CopyButton>
    </Wrapper>
  )
};

export default YoutubeCard;

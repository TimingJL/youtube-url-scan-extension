import { useRef } from 'react';
import styled from 'styled-components';

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
`;

const CopyButton = styled.div`
  cursor: pointer;
  margin-left: 4px;
  height: 32px;
  width: 80px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1976d280;
  color: #1976d2;
  &:hover {
    background: #3a6a9a1e;
  }
`;

const YoutubeCard = ({ link }) => {
  const inputRef = useRef();
  const handleOnCopy = () => {
    const inputElem = inputRef.current;
    inputElem.select();
    navigator.clipboard.writeText(inputElem.value);
  };

  return (
    <Wrapper>
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

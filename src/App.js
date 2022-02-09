import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { loadLinks } from './main';
import YoutubeCard from './components/YoutubeCard';

const ExtensionBox = styled.div`
  width: ${({ $hasAnyLink }) => $hasAnyLink ? 400 : 300}px;
  max-height: 300px;
  padding: 20px;
  overflow-y: auto;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 8px;
  }
`;

const EmptyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00000080;
  font-size: 14px;
`;

const App = () => {
  const [links, setLinks] = useState([]);
  const hasAnyLink = links.length > 0;

  useEffect(() => {
    loadLinks({ setLinks });
  }, []);

  return (
    <ExtensionBox $hasAnyLink={hasAnyLink}>
      {
        hasAnyLink > 0 ? (
          <InputGroup>
            {
              links.map((link) => (
                <YoutubeCard
                  key={link}
                  link={link}
                />
              ))
            }
          </InputGroup>
        ) : (
          <EmptyInfo>
            沒有找到 Youtube 連結
          </EmptyInfo>
        )
      }
    </ExtensionBox>
  );
}

export default App;

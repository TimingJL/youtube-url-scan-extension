import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { scanYoutubeLinks } from './scripts/ScanYoutubeLinks';
import YoutubeCard from './components/YoutubeCard';

const ExtensionBox = styled.div`
  width: ${({ $hasAnyLink }) => $hasAnyLink ? 400 : 300}px;
  max-height: 300px;
  padding: 20px;
  overflow-y: auto;
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 12px;
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
    scanYoutubeLinks({ setLinks });
  }, []);

  return (
    <ExtensionBox $hasAnyLink={hasAnyLink}>
      {
        hasAnyLink > 0 ? (
          <CardGroup>
            {
              links.map((link) => (
                <YoutubeCard
                  key={link}
                  link={link}
                />
              ))
            }
          </CardGroup>
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

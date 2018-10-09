import styled from 'styled-components';

export const SpotifyWrapper = styled.div`
  width: 100vw;
  background-color: #282828;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 90px;
  position: fixed;
  bottom: 0;
`;
export const SpotifyPlayer = styled.div`
  width: 960px;
  background-color: #282828;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 90px;
  margin: 0 auto;
`;
/* Left block */
export const SpotifyLeftBlock = styled.div`
  width: 30%;
  min-width: 180px;
  display: flex;
  margin: 0 0 0 10px;
`;
export const SpotifyImageTrack = styled.img`
  width: 56px;
  height: 56px;
  margin: 0 15px 0 0;
  border-radius: 6px;
`;
export const SpotifyBlockTrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SpotifyTrackName = styled.h3`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: .015em;
  color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Roboto';
  font-weight: bold;
`;
export const SpotifyTrackArtist = styled.h4`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: .015em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Roboto';
  font-weight: 500;
`;
/* Center block */
export const SpotifyCenterBlock = styled.div`
  width: 40%;
  max-width: 722px;
`;
export const SpotyfiControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 0 auto;
`;
export const SpotifyControlButton = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
export const SpotifyProgressBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 0 auto;
`;
/* Right block */
export const SpotifyRightBlock = styled.div`
  width: 30%;
  min-width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 10px 0 0;
`;

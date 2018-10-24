import styled from 'styled-components';

export const MusicBlock = styled.div`
  padding: 25px 5px 5px 5px;
  font-family: 'Roboto';
  border: solid 1px rgba(0, 0, 0, 0.12);
  background: #ffffff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MusicTitle = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  line-height: 1;
  padding: 0 0 30px 0;
  text-transform: uppercase;
`;
export const MusicTrack = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  padding: 0 0 20px 0;
  color: ${props => (props.isPlaying ? '#6200ee' : '#000000')};
`;
export const MusicNumber = styled.p`
  font-size: 16px;
  color: ${props => (props.isPlaying ? '#6200ee' : 'rgba(0, 0, 0, 0.54)')};
  width: 20px;
`;
export const MusicSoundTitle = styled.div`
  width: 237px;
  cursor: pointer;
  padding: 0 0 0 10px;
`;
export const MusicSoundName = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const MusicSoundArtist = styled.p`
  font-size: 12px;
  line-height: 1.67;
  margin: 0;
  padding: 0;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const MusicIcon = styled.div`
  width: 30px;
  cursor: pointer;
`;
export const MusicArrow = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

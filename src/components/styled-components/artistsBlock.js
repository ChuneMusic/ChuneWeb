import styled from 'styled-components';

export const WrapperArtists = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1080px;
  padding: 24px 0 0 0;
  flex-direction: column;
  @media(max-width: 1080px) and (min-width: 960px) {
    width: 960px;
  }
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
    padding: 10px 0 0 0;
  }
`;
export const ArtistsTitle = styled.div`
  color: #000000;
  font-size: 24px;
  font-family: 'Roboto';
  padding: 0 0 25px 0;
  letter-spacing: 0.3px;
  @media(max-width: 629px) and (min-width: 320px) {
    display: none;
  }
`;
export const ArtistsTitleBlock = styled.div`
  color: #000000;
  font-size: 24px;
  font-family: 'Roboto';
  padding: 0 0 25px 0;
  letter-spacing: 0.3px;
`;
export const ArtistsBlock = styled.div`
  display: flex;
  width: 1080px;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  @media(max-width: 1080px) and (min-width: 960px) {
    width: 960px;
  }
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
    justify-content: center;
    flex-direction: column;
  }
`;

export const FirstArtistsHeader = styled.div`
  height: 74px;
  margin: 0 auto;
  background: linear-gradient(262deg,#9c05cd,#552e89) #552e89;;
  position: fixed;
  top: 0;
  z-index: 100;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  @media(max-width: 959px) and (min-width: 320px) {
    justify-content: center;
  }
`;
export const FirstArtistsBody = styled.div`
  width: 910px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 220px);
  grid-template-rows: repeat(9, 220px);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 0 0 10px 0;
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
    grid-template-columns: repeat(2, 150px);
    grid-template-rows: repeat(18, 150px);
    padding: 20px 0 0 0;
  }
`;
export const FirstBlock = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  background: linear-gradient(262deg,#9c05cd,#552e89) #552e89;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-direction: column;
`;
export const OtherBlock = styled.div`
  background: url(${props => props.image}) center no-repeat;
  background-size: cover;
  border-radius: 6px;
  position: relative;
  width: 220px;
  height: 220px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    border-radius: 6px;
  }
  @media(max-width: 959px) and (min-width: 320px) {
    width: 150px;
    height: 150px;
  }
`;
export const DescriptionPage = styled.h1`
  font-size: 48px;
  font-family: 'Roboto';
  color: #fff;
  width: 345px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  margin: 0 0 20px 0;
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
    font-size: 36px;
  }
`;
export const TextPage = styled.p`
  opacity: .5;
  font-size: 20px;
  font-family: 'Roboto';
  color: #fff;
  width: 300px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  @media(max-width: 959px) and (min-width: 320px) {
    width: 260px;
    font-size: 16px;
  }
`;
export const BlockButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  width: 90%;
  @media(max-width: 959px) and (min-width: 320px) {
    display: none;
  }
`;
export const ButtonNameArtist = styled.div`
  height: 44px;
  background: #99ccff;
  border-radius: 44px;
  margin: 0 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SpanNameArtist = styled.p`
  text-align: center;
  padding: 0 15px;
  font-family: 'Roboto';
  font-size: 16px;
`;
export const ButtonCheck = styled.button`
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
  width: 220px;
  height: 220px;
  transition: all .4s cubic-bezier(.23,1,.32,1);
  text-align: left;
  &:hover {
    transform: scale(0.95);
  }
  &:active {
    transform: scale(0.90);
  }
  @media(max-width: 959px) and (min-width: 320px) {
    width: 150px;
    height: 150px;
  }
`;
export const SVGCheck = styled.svg`
  cursor: pointer;
  fill: #ffffff;
  width: 128px;
  position: absolute;
  height: 128px;
  left: 20%;
  top: 20%;
  @media(max-width: 959px) and (min-width: 320px) {
    left: 10%;
    top: 10%;
  }
`;
export const DivBlockSend = styled.div`
  position: absolute;
  background: #f2f2f2;
  right: 20px;
  width: 150px;
  height: 44px;
  border-radius: 6px;
  z-index: 105;
  box-shadow: 0px 0px 15px 10px rgba(86,46,137,0.6);
  @media(max-width: 959px) and (min-width: 320px) {
    position: relative;
    right: 0;
  }
`;
export const DivColorBlock = styled.div`
  background: #99ccff;
  width: ${props => props.widthColor};
  height: 44px;
  border-radius: ${props => (props.widthColor === '100%' ? '6px' : '6px 0 0 6px')};
  position: absolute;
  z-index: 106;
  transition: all .4s cubic-bezier(.86,0,.07,1);
`;
export const ButtonSend = styled.button`
  position: absolute;
  width: 150px;
  height: 44px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  border: 0;
  margin: 0;
  padding: 0;
  z-index: 107;
  background: none;
  font-family: 'Roboto';
  font-size: 16px;
`;
export const DivBlockSkip = styled.div`
  width: 910px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  justify-content: flex-end;
  @media(max-width: 959px) and (min-width: 320px) {
    width: auto;
  }
`;
export const ButtonSkip = styled.button`
  width: 150px;
  height: 44px;
  border-radius: 6px;
  background: linear-gradient(262deg,#9c05cd,#552e89) #552e89;
  border: 0;
  outline: none;
  cursor: pointer;
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
  margin: 10px;
  padding: 0;
`;

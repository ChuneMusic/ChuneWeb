import styled from 'styled-components';

export const WrapperFeatured = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const FeaturedArticle = styled.div`
  background: url(${props => props.images}) top no-repeat; 
  background-size: cover;
  border-radius: 6px;
  width: 300px;
  height: 180px;
  position: relative;
  margin: 110px 0 90px 0;
  cursor: pointer;
  &:hover h2{
    text-decoration: underline;
  }
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
    height: 150px;
    margin: 60px 0 10px 0;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6));
    opacity: .6;
    border-radius: 6px;
  }
  &:nth-child(1){
    width: 960px;
    height: 390px;
    margin: 0 0 20px 0;
    @media(max-width: 959px) and (min-width: 320px) {
      width: 310px;
      height: 150px;
    }
    & h2{
      font-family: 'Roboto';
      color: rgba(255, 255, 255, 0.9);
      text-align: justify;
      position: absolute;
      bottom: -108px;
      font-size: 40px;
      font-weight: bold;
      letter-spacing: 0.3px;
      padding: 0 10px;
      width: 940px;
      height: 112px;
      @media(max-width: 959px) and (min-width: 320px) {
        padding: 0 10px;
        bottom: -60px;
        font-size: 24px;
        letter-spacing: 0.2px;
        width: 290px;
        height: 66px;
      }
    }
  }
  &:nth-child(2){
    @media(max-width: 959px) and (min-width: 320px) {
      margin: 50px 0 10px 0;
    }
  }
  &:nth-child(4){
    @media(max-width: 959px) and (min-width: 320px) {
      margin: 60px 0 70px 0;
    }
  }
  &:last-child{
    @media(max-width: 959px) and (min-width: 320px) {
      margin: 60px 0 70px 0;
    }
  }
`;
export const FeaturedArticleTitle = styled.h2`
  padding: 0 10px;
  font-family: 'Roboto';
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;
  position: absolute;
  bottom: -63px;
  letter-spacing: 0.2px;
  font-size: 24px;
  line-height: 1.4;
  width: 280px;
  font-weight: bold;
  display: block;
  background: linear-gradient(262deg,#9c05cd,#552e89) #552e89;
  border-radius: 0 0 6px 6px;
  height: 66px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
  @media(max-width: 959px) and (min-width: 320px) {
    padding: 0 10px;
    bottom: -60px;
    font-size: 24px;
    letter-spacing: 0.2px;
    width: 290px;
  }
`;

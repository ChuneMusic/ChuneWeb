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
  width: 330px;
  height: 250px;
  position: relative;
  margin: 0 0 20px 0;
  @media(max-width: 1030px) and (min-width: 850px) {
    width: 280px;
    height: 180px;
  }
  @media(max-width: 849px) and (min-width: 320px) {
    width: 310px;
    height: 230px;
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
    width: 1024px;
    height: 500px;
    @media(max-width: 1030px) and (min-width: 850px) {
      width: 850px;
      height: 400px;
    }
    @media(max-width: 849px) and (min-width: 320px) {
      width: 310px;
      height: 230px;
    }
    & h2{
      font-family: 'Roboto';
      color: #ffffff;
      text-align: left;
      position: absolute;
      bottom: 70px;
      font-size: 40px;
      letter-spacing: 0.3px;
      padding: 0 10px 0 20px;
      width: 994px;
      white-space: normal;
      overflow: auto;
      text-overflow: none;
      @media(max-width: 1030px) and (min-width: 850px) {
        padding: 0 10px;
        width: 830px;
        bottom: 40px;
        font-size: 36px;
        letter-spacing: 0.2px;
      }
      @media(max-width: 849px) and (min-width: 320px) {
        padding: 0 10px;
        bottom: 40px;
        font-size: 24px;
        letter-spacing: 0.2px;
        width: 290px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    & p{
      position: absolute;
      padding: 0 10px 0 20px;
      bottom: 32px;
      font-size: 14px;
      line-height: 1.43;
      text-transform: uppercase;
      color: #ffffff;
      font-family: 'Roboto';
      @media(max-width: 1030px) and (min-width: 850px) {
        padding: 0 10px;
        bottom: 20px;
        font-size: 12px;
      }
      @media(max-width: 849px) and (min-width: 320px) {
        padding: 0 10px;
        bottom: 20px;
        font-size: 12px;
      }
    }
  }
  & h2{
    padding: 0 37px 0 16px;
    font-family: 'Roboto';
    color: #ffffff;
    text-align: left;
    position: absolute;
    bottom: 58px;
    letter-spacing: 0.2px;
    font-size: 24px;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 290px;
    @media(max-width: 1030px) and (min-width: 850px) {
      padding: 0 10px;
      bottom: 40px;
      font-size: 24px;
      letter-spacing: 0.2px;
      width: 260px;
    }
    @media(max-width: 849px) and (min-width: 320px) {
      padding: 0 10px;
      bottom: 40px;
      font-size: 24px;
      letter-spacing: 0.2px;
      width: 290px;
    }
  }
  & p{
      position: absolute;
      padding: 0 37px 0 16px;
      bottom: 22px;
      font-size: 14px;
      line-height: 1.43;
      text-transform: uppercase;
      color: #ffffff;
      font-family: 'Roboto';
      @media(max-width: 1030px) and (min-width: 850px) {
        padding: 0 10px;
        bottom: 15px;
        font-size: 12px;
      }
      @media(max-width: 849px) and (min-width: 320px) {
        padding: 0 10px;
        bottom: 20px;
        font-size: 12px;
      }
    }
`;

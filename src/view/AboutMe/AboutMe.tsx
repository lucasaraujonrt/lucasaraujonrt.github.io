import React from "react";
import MeImage from "../../assets/img/me.png";
import { Typography } from "../../components";
//@ts-ignore
import Icon from "react-eva-icons";

import * as S from "./styles";
import { icons } from "../../utils/me";

const AboutMe: React.FC = () => {

  return (
    <S.Container>
      <S.WrapperTitleAboutMe>
        <Typography color="black" font="medium" size="title">
          About me
        </Typography>
      </S.WrapperTitleAboutMe>
      <S.AboutMeContainer>
        <S.Information>
          <S.FirstCircle>
            <S.SecondCircle>
              <S.Me src={MeImage} />
            </S.SecondCircle>
          </S.FirstCircle>
          <div style={{ paddingTop: 10 }}>
            <Typography color="black" font="medium" size="medium">
              Lucas Araujo
            </Typography>
          </div>
          <S.AllMyLinks>
            <S.WrapperFirstSocialIcons>
              {icons.map((item, index) => (
                <a target="_blank" href={item.currentLink} rel="noreferrer">
                  <Icon {...item} key={index.toString()} />
                </a>
              ))}
            </S.WrapperFirstSocialIcons>
          </S.AllMyLinks>
        </S.Information>
        <S.InformationMe>
          <div style={{ paddingTop: 10 }}>
            <Typography color="black" font="medium" size="large">
              Lucas Araujo
            </Typography>
          </div>
        </S.InformationMe>
      </S.AboutMeContainer>
    </S.Container>
  );
};

export default AboutMe;

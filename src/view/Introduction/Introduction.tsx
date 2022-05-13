import React from "react";
import Lottie from "lottie-react-web";
import { motion } from "framer-motion";
import Me from "../../assets/animation/me_coding.json";
import Typist from "react-typist";
import { Typography } from "../../components";

import * as S from "./styles";

interface IIntroductionProps {
  onClickArrow: () => void;
}

const Introduction = ({ onClickArrow }: IIntroductionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <S.Container>
      <S.NavBar>
        <Typist
          cursor={{
            show: true,
          }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lucasaraujonrt/"
            rel="noreferrer"
          >
            <Typography cursor color="white" font="medium" size="medium">
              @lucasaraujonrt
            </Typography>
          </a>
        </Typist>
      </S.NavBar>
      <S.AboutMeContainer>
        <S.WrapperMe>
          <Typist>
            <Typography color="white" font="medium" size="medium">
              Mid-Level Developer
            </Typography>
          </Typist>
          <motion.div
            style={{ paddingTop: 10 }}
            variants={container}
            transition={{ delay: 1 }}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Typography color="white" font="medium" size="small">
                Software Engineering
              </Typography>
            </motion.div>
          </motion.div>
          <motion.div
            style={{ paddingTop: 10 }}
            variants={container}
            transition={{ delay: 2 }}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Typography color="white" font="medium" size="small">
                Always helping people when they need them.
              </Typography>
            </motion.div>
          </motion.div>
          <motion.div
            variants={container}
            transition={{ delay: 3 }}
            initial="hidden"
            animate="show"
            style={{ paddingTop: 5 }}
          >
            <motion.div variants={item}>
              <Typography color="white" font="medium" size="small">
                Enthusiast of mobile development. React Native Lover 💜
              </Typography>
            </motion.div>
          </motion.div>
          <motion.div
            style={{ paddingTop: 30 }}
            variants={container}
            transition={{ delay: 4 }}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Typography color="white" font="medium" size="small">
                First I will introduce myself to you. 🚀
              </Typography>
            </motion.div>
          </motion.div>
        </S.WrapperMe>
        <S.WrapperAnimation>
          <Lottie
            options={{
              animationData: Me,
              loop: true,
              autoplay: true,
            }}
          />
        </S.WrapperAnimation>
      </S.AboutMeContainer>
      <S.IndicatorToScroll onClick={onClickArrow} />
    </S.Container>
  );
};

export default Introduction;

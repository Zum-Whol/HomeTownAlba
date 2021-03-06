const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const { JobSeeker, Company } = require("../models");

module.exports = () => {
  passport.use(
    "jobseeker-local",
    new LocalStrategy(
      {
        usernameField: "userId", //req.body.userId
        passwordField: "password", //req.body.password
      },
      async (userId, password, done) => {
        try {
          const exUser = await JobSeeker.findOne({ where: { userId } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다." });
            }
          } else {
            done(null, false, { message: "가입되지 않은 회원입니다." });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  ),
    passport.use(
      "company-local",
      new LocalStrategy(
        {
          usernameField: "userId", //req.body.userId
          passwordField: "password", //req.body.password
        },
        async (userId, password, done) => {
          try {
            const exUser = await Company.findOne({ where: { userId } });
            if (exUser) {
              const result = await bcrypt.compare(password, exUser.password);
              if (result) {
                done(null, exUser);
              } else {
                done(null, false, { message: "비밀번호가 일치하지 않습니다." });
              }
            } else {
              done(null, false, { message: "가입되지 않은 회원입니다." });
            }
          } catch (error) {
            console.error(error);
            done(error);
          }
        }
      )
    );
};

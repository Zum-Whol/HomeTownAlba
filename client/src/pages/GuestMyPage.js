import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function GuestMyPage() {
  const [GuestStatus, setGuestStatus] = useState("jobseeker");

  const JobSeekrHandler = e => {
    setGuestStatus("jobseeker");
  };
  const CompanyHandler = e => {
    setGuestStatus("company");
  };
  if (GuestStatus === "jobseeker") {
    return (
      <>
        <NavBar />
        <div className="main">
          <div>
            <div className="mypage">
              <ul className="tag">
                <li className="on">
                  <a onClick={JobSeekrHandler}>구직자 Guest MyPage</a>
                </li>
                <li>
                  <a onClick={CompanyHandler}>사업자 Guest MyPage</a>
                </li>
              </ul>
              <h1 className="header">구직자 마이페이지</h1>
              <br />
              <div className="messageBox">
                <ul>
                  <li>
                    회원정보는 개인정보처리방침에 따라 안전하게 보호되며,
                    회원님의 동의 없이 공개 또는 제 3자에게 제공되지 않습니다.
                  </li>
                  <li>
                    이름, 생년월일, 성별 정보는 본인확인을 통해 수정하실 수
                    있습니다.
                  </li>
                </ul>
              </div>
              <br></br>
              <div className="line">
                <h2>회원 정보</h2>

                {/* <img className='profile' src='http://k.kakaocdn.net/dn/b73ZT6/btrjxAQccVG/CmkUAATTS22WaEhz6Wdq1K/img_640x640.jpg'/> */}
                <tbody>
                  <tr>
                    <th>아이디</th>
                    <td>
                      <div>HomeTownAlba</div>
                    </td>
                  </tr>
                  <tr>
                    <th>이름</th>
                    <th>김아무개</th>
                  </tr>
                  <tr>
                    <th>생년월일/성별</th>
                    <th>2021년 11월 4일 / 남자</th>
                  </tr>
                  <tr>
                    <th>핸드폰 번호</th>
                    <th>010-1234-5678</th>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <th>hometownalba@hometownalba.com</th>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <th>우리시 동네구 알바동</th>
                  </tr>
                  <tr>
                    <th>본인의 초등학교는</th>
                    <th>매탄초등학교</th>
                  </tr>

                  <br />
                </tbody>

                <br />
              </div>
              <br></br>
              <br></br>
              <h2>경력 사항</h2>
              <table>
                <tr>
                  <th>근무 회사명</th>
                  <th>포지션</th>
                  <th>기간(월)</th>
                  <th></th>
                  <th></th>
                </tr>
              </table>
              <h3>경력 사항 등록</h3>
              <form>
                <label>근무 회사명 : </label>
                <input name="company" type="text" />
                <label>포지션 : </label>
                <input name="position" type="text" />
                <label>근무 기간(월) : </label>
                <input name="period" type="text" placeholder="입력예시 : 3" />
                <input type="submit" value="등록" />
                <br />
              </form>
              <br />
              <div className="bottomButton">
                <button id="left" className="bubbly-button">
                  수정 완료
                </button>
                <button className="bubbly-button">회원탈퇴</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <div className="main">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="mypage">
              <ul className="tag">
                <li>
                  <a onClick={JobSeekrHandler}>구직자 Guest MyPage</a>
                </li>
                <li className="on">
                  <a onClick={CompanyHandler}>사업자 Guest MyPage</a>
                </li>
              </ul>
              <h1>사업자 마이페이지</h1>
              <div className="messageBox">
                <ul>
                  <li>
                    회원정보는 개인정보처리방침에 따라 안전하게 보호되며,
                    회원님의 동의 없이 공개 또는 제 3자에게 제공되지 않습니다.
                  </li>
                  <li>
                    이름, 생년월일, 성별 정보는 본인확인을 통해 수정하실 수
                    있습니다.
                  </li>
                </ul>
              </div>
              <br></br>
              <div className="line">
                <h2>사업자 정보</h2>
                <tbody>
                  <tr>
                    <th>회사명</th>
                    <th>(주)우리동네알바</th>
                  </tr>
                  <tr>
                    <th>사업자 위치</th>
                    <th>우리시 동네동 알바구</th>
                  </tr>
                  <tr>
                    <th>사업자 번호</th>
                    <th>111-222-3333</th>
                  </tr>
                  <tr>
                    <th>자사 대표 상품</th>
                    <th>HomeTownAlba</th>
                  </tr>
                </tbody>

                <h1 className="companyJob">일자리 등록</h1>

                <tbody>
                  <tr>
                    <th>제목</th>
                    <td>
                      <input name="title" type="text"></input>
                    </td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td>
                      <input name="location" type="text"></input>
                    </td>
                  </tr>
                  <tr>
                    <th>근무요일</th>
                    <td>
                      <input name="day" id="mon" type="checkbox"></input>월
                      <input name="day" id="tue" type="checkbox"></input>화
                      <input name="day" id="wed" type="checkbox"></input>수
                      <input name="day" id="thu" type="checkbox"></input>목
                      <input name="day" id="fri" type="checkbox"></input>금
                      <input name="day" id="sat" type="checkbox"></input>토
                      <input name="day" id="sun" type="checkbox"></input>일
                    </td>
                  </tr>
                  <tr>
                    <th>근무시간</th>
                    <td>
                      {" "}
                      <input
                        name="startTime"
                        type="time"
                        placeholder="시작 시간"
                      />
                      <input name="endTime" type="time" placeholder="끝 시간" />
                    </td>
                  </tr>
                  <tr>
                    <th>포지션</th>
                    <td>
                      <input name="position" type="text" />
                    </td>
                  </tr>
                  <tr>
                    <th>시급</th>
                    <td>
                      {" "}
                      <input name="hourlyWage" type="text" />
                    </td>
                  </tr>
                </tbody>

                {/* <form>
            <label>
              제목 :
              <input name="title" type="text" />
            </label>
            <br></br>
            <label>
              주소 :
              <textarea name="location" rows="3" cols="20" />
            </label>
            <br></br>
            <label>
              근무 요일 :
              <input name="day" id="mon" type="checkbox" />
              월
              <input name="day" id="tue" type="checkbox" />
              화
              <input name="day" id="wed" type="checkbox" />
              <label for="wed">수</label>
              <input name="day" id="thu" type="checkbox" />
              <label for="thu">목</label>
              <input name="day" id="fri" type="checkbox" />
              <label for="fri">금</label>
              <input name="day" id="sat" type="checkbox" />
              <label for="sat">토</label>
              <input name="day" id="sun" type="checkbox" />
              <label for="sun">일</label>
            </label>
            <br></br>
            <label>
              {" "}
              근무 시간 :
              <input name="startTime" type="time" placeholder="시작 시간" />
              <input name="endTime" type="time" placeholder="끝 시간" />
            </label>
            <br></br>
            <label>
              {" "}
              포지션 :
              <input name="position" type="text" />
            </label>
            <br></br>
            <label>
              {" "}
              시급(₩) :
              <input name="hourlyWage" type="text" />
            </label> */}

                <br></br>
                <span>모든 항목을 입력해주세요</span>
                <br></br>
                <button className="bubbly-button">제출</button>
                {/* </form> */}

                <br></br>

                <h1>등록 일자리 목록</h1>
                <h3>일자리 정보를 등록해주세요</h3>
                <br></br>
                <div className="bottomButton">
                  <button id="left" className="bubbly-button">
                    수정 완료
                  </button>
                  <button className="bubbly-button">회원탈퇴</button>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default GuestMyPage;

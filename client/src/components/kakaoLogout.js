const { Kakao } = window;
function KakaoLogout() {
  const logOutHandler = () => {
    if (Kakao.Auth.getAccessToken()) {
      console.log(Kakao.Auth.getAccessToken());
      Kakao.Auth.logout(console.log(Kakao.Auth.getAccessToken()));
    }
  };
  return (
    <>
      {" "}
      <div>
        <button
          onClick={() => {
            logOutHandler();
          }}
        >
          ๋ก๊ทธ์์
        </button>
      </div>
    </>
  );
}
export default KakaoLogout;

import "./Join.css";

function Join() {
  return (
    <div className="Join">
      <h3>회원 가입</h3>
      <form>
        <div class="id_input_box">
          <input id="id_txt" type="text" placeholder="아이디를 입력하세요." />
          <p class="id_input_check"></p>
          <button class="input_confirm_btn" id="id_confirm">
            확인
          </button>
        </div>

        <div class="pw_input_box">
          <input
            id="pw_txt"
            type="password"
            placeholder="비밀번호를 입력 하세요."
          />
          <p class="pw_input_check"></p>
          <button class="input_confirm_btn" id="pw_confirm">
            확인
          </button>
        </div>

        <div class="email_input_box">
          <input
            id="email_txt"
            type="email"
            placeholder="이메일을 입력 하세요."
          />
          <p class="email_input_check"></p>
          <button class="input_confirm_btn" id="email_confirm">
            확인
          </button>
        </div>

        <div class="phone_input_box">
          <input
            id="phone_txt"
            type="tel"
            placeholder="전화번호를 입력 하세요."
          />
          <p class="phone_input_check"></p>
          <button class="input_confirm_btn" id="phone_confirm">
            확인
          </button>
        </div>

        <button class="reg_req_btn" disabled>
          가입 요청
        </button>
      </form>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
      <script src="./signup.js"></script>
    </div>
  );
}

export default Join;

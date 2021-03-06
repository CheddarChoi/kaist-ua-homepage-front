import React from "react";
import { Container, Button } from "react-bootstrap";
import { Header, Footer } from "../organisms";
import { AuthAgreementContent } from "../templates";
import { withRouter } from "react-router-dom";

const AuthAgreementPage = ({ history }) => {
  const [isAgree, setIsAgree] = React.useState(false);

  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <Header />
      <Container className="flex-grow-1 p-3">
        <div>
          <div
            style={{ fontSize: "25pt", fontFamily: "NanumSquare ExtraBold" }}
            className="mb-4 pb-1 border-bottom"
          >
            KAIST 학부 총학생회 개인정보 처리방침
          </div>
          <AuthAgreementContent />
          <div>
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="mr-1"
                checked={isAgree}
                onChange={e => setIsAgree(e.target.checked)}
              />
              <span>동의합니다.</span>
            </div>
            <div className="d-flex justify-content-end">
              <Button
                variant="info"
                disabled={!isAgree}
                onClick={() => history.push("/web/api/auth/register")}
              >
                회원가입
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(AuthAgreementPage);

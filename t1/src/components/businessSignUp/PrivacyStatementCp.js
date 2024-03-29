import React from 'react';
import styled from '@/style';

const PrivacyStatementWrap = styled.div`
  width: 485px;
  height: 350px;
  overflow-y: scroll;
  border: 1px solid #888f91;
  padding: 10px;
  line-height: 150%;
  color: #464d50;
  font-size: 13px;
`;
const Title = styled.strong`
  display: block;
  margin-bottom: 10px;
`;
const Text = styled.div`
  margin-bottom: 40px;
`;

const PrivacyStatementCp = () => {
  return (
    <PrivacyStatementWrap>
      <Text>
        ㈜프롭라인 (이하“회사”라 함)은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법,
        통신비밀보호법, 전기통신사업법 등 정보통신 서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호
        규정을 준수하며, 관련 법령에 따라 다음과 같이 개인정보취급방침을 정하여 이용자 권익 보호에 최선을
        다하고 있습니다.
      </Text>
      <Title>1. 개인정보의 수집 및 이용 목적</Title>
      <Text>
        (1) 회사는 개인정보를 다음의 목적을 위해 처리합니다.처리한 개인정보는 다음의 목적 이외의 용도로는
        사용되지 않으며 이용 목적이 변경되는 경우에는 개인정보보호법 제 18조에 따라 별도 동의를 받는 등 필요한
        조치를 이행할 예정입니다.
        <br />
        <br />
        ① 서비스 신청, 이용, 변경, 해지, 민원접수/처리안내, 결제정보 등을 포함한 이용계약 관련 사항의 처리
        <br />
        ② 회원가입 의사 확인, 회원제 서비스 이용, 서비스 부정 이용 행위 확인 및 차단, 분쟁 조정을 위한 기록
        보존, 불만처리 등 민원처리, 고치 사항 전달
        <br />③ 마케팅 및 광고 활용, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성
        확인,광고성 정보 제공 및 이벤트 참여 기회 제공,접속 빈도 파악, 회원의 서비스 이용에 대한 통계,
        설문조사 등
      </Text>
      <Title>2. 개인정보 수집에 대한 동의</Title>
      <Text>
        개인정보수집과 관련하여 회사의 이용약관과 개인정보수집 및 이용에 대해 [동의함]버튼을 클릭할 수 있는
        절차를 마련하고 있으며 [동의함]버튼을 클릭하면 개인정보수집에 대해 동의한 것으로 봅니다. 회사가
        수집하는 개인정보는 필수항목과 선택항목으로 구분됩니다.
      </Text>
      <Title>3. 개인정보항목 및 수집방법</Title>
      <Text>
        (1) 회사는 회원가입, 고객상담, 서비스 신청 등 아래와 같은 최소한의 개인정보를 필수 항목으로 수집하고
        있습니다. 필수항목 : 이름, 아이디, 비밀번호, 연락처(휴대폰), 상호, 대표자명, 사업자등록번호, 중개업소,
        업태, 종목, 사업자등록증 첨부 선택항목 : 팩스번호, 일반전화 (선택항목은 입력하지 않아도 회원가입이
        가능합니다.)
        <br />
        <br />
        (2) 유료 서비스 결제 및 환불요청 시아래와 같은 결제 정보들이 수집될 수 있습니다. 신용카드 결제 :
        카드사명, 카드번호 등 실시간 계좌이체 : 이름, 은행명, 계좌번호 등 무통장입금 : 이름, 은행명, 계좌번호
        등
        <br />
        <br />
        (3) 서비스 이용과정이나 사업처리 과정에서 다음과 같은 정보들이 자동 생성되어 수집(접속 IP 정보,쿠키,
        방문 일시, 서비스 이용 기록,불량 이용 기록 등) 될 수 있습니다.
        <br />
        <br />
        (4) 모바일 서비스 이용 시 아래와 같은 정보들이 수집될 수 있습니다. 모바일 단말기 정보 : 단말기 모델명,
        이동통신사 정보, 하드웨어 단말기 정보 등 단말기에 대한 정보
        <br />
        <br />
        (5) 회사는 다음과 같은 방법으로 개인정보를 수집합니다.
        <br />
        <br />
        ① 웹 페이지, 서면양식, 팩스, 고객센터 통화상담, 온라인상담, 이메일, 이벤트 응모 등
        <br />
        ② 협력회사로부터의 제공
        <br />③ 생성정보 수집 툴을 통한 수집
      </Text>
      <Title>4. 개인정보의 목적 외 이용</Title>
      <Text>
        (1) 회사는 이용자들의 개인정보를「개인정보의 수집 및 이용 목적」에서 고지한 범위 내에서 사용하며,
        이용자의 사전동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지
        않습니다.
        <br />
        <br />
        (2) 다만 다음의 경우에는 합당한 절차를 통한 회원의 동의를 얻어 개인정보를 제공 또는 이용할 수
        있습니다.
        <br />
        <br />
        ① 제휴관계 : 보다 나은 서비스 제공을 통한 회원의 동의를 얻어 개인정보를 제공 또는 이용할 수 있습니다.
        회사는 회원에게 제휴사를 통해 제공되는 개인정보의 항목, 개인정보의 제공 목적, 제공 기간,
        개인정보보호방안 등에 대하여 개별적으로 동의를 구하는 절차를 마련합니다.
        <br />
        ② 위탁처리 : 원활한 업무처리와 회원에게 보다 나은 서비스 제공을 위하여 회원의 개인정보를 위탁하여
        처리할 수 있으며,이 경우 반드시 사전에 위탁처리 업체명과 목적, 위탁처리 되는 개인정보의 범위, 위탁
        기간 등에 대해 상세하게 고지합니다.
        <br />
        <br />
        (3) 다음은 예외로 합니다.
        <br />
        <br />① 서비스 제공에 따른 요금정산을 위하여 필요한 경우
        <br />
        ② 회사가 제공하는 서비스를 통하여 거래가 성사된 경우, 거래 당사자간의 원활한 의사소통을 위하여 관련된
        정보를 필요한 범위 내에서 거래당사자에게 제공하는 경우
        <br />
        ③ 이용자들이 사전에 동의한 경우
        <br />④ 법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는
        경우
      </Text>
      <Title>5. 개인정보의 보유기간 및 파기</Title>
      <Text>
        (1) 회사는 개인정보의 수집 및 이용 목적을 달성한 경우 해당 이용자의 개인정보를 지체 없이 파기합니다.
        다만, 다음과 같이 “전자상거래 등에서의 소비자보호에 관한 법률” 등 관계법령에 따라 보존할 필요성이 있는
        경우에는 예외로 합니다.
        <br />
        <br />
        ① 계약 또는 청약철회 등에 관한 기록 : 5년
        <br />
        ② 대금결제 및 재화 등의 공급에 관한 기록 : 5년
        <br />
        ③ 소비자의 불만 또는 분쟁처리에 관한 기록 :3년
        <br />
        ④ 전자 금융 거래에 관한 기록 : 5년
        <br />
        ⑤ 본인 확인에 관한 기록 : 6개월
        <br />
        ⑥ 방문에 관한 기록 : 3개월
        <br />
        <br />
        (2) 회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성되거나 보유 및 이용 기간이 경과된 후에는 해당
        정보를 지체 없이 파기합니다. 단 회원으로부터 동의 받은 개인정보의 보유 기간이 경과하거나 목적이 달성된
        후에도 불구하고 기타 관련 법령에 의한 정보보호 사유에 따라 계속 보존하여야 하는 경우에만 해당
        개인정보를 별도의 DB(데이터베이스)로 옮기거나 보존합니다. 별도 DB로 옮겨진 개인정보는 법률에 의한
        경우가 아니고서는 위 보존 이유 외의 다른 목적으로 이용되지 않습니다. 파기 절차 및 방법은 다음과
        같습니다.
        <br />
        <br />
        ① 파기 절차 : 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아
        개인정보를 파기합니다.
        <br />② 파기 방법 : 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여
        삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
      </Text>
      <Title>6. 개인정보 자동 수집 장치의 설치, 운영 및 거부에 관한 사항</Title>
      <Text>
        (1) 쿠키란?
        <br />
        <br />
        ① 회사는 개인화되고 맞춤화된 서비스 제공을 위하여 이용자 정보를 저장하고 수시로 불러오는
        ‘쿠키(cookie)’를 사용합니다.
        <br />
        ② 쿠키는 사용자가 웹 사이트를 방문할 때마다 해당 웹사이트의 서버가 이용자의 브라우저에 보내주는 작은
        텍스트 파일이며 이용자 컴퓨터의 하드디스크에 저장됩니다. 또한, 쿠키 파일에 담긴 정보는 이용자가
        웹사이트를 방문할 때마다 읽히고 수시로 새로운 정보로 바뀝니다.
        <br />
        ③ 쿠키는 개인을 식별하는 정보를 자동적/능동적으로 수집하지 않으며, 이용자는 언제든지 이러한 쿠키의
        저장을 거부하거나 삭제할 수 있습니다.
        <br />
        <br />
        (2) 회사의 쿠키 사용 목적 이용자 별 서비스 접속 여부, 매물확인 여부 등을 포함하여 이용자의 사이트 방문
        및 이용 행태, 이용자 규모 등을 파악하여 이용자에게 최적화된 광고 및 정보 제공을 위해 사용합니다.
        <br />
        <br />
        (3) 쿠키의 설치 및 운영 거부
        <br />
        <br />
        ① 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹 브라우저의 옵션 설정을
        변경함으로써 모든 쿠키를 허용하거나 쿠키가 저장될 때마다 확인하거나 모든 쿠키의 저장을 거부할 수
        있습니다.
        <br />② 쿠키의 저장을 거부하는 경우 로그인이 필요한 회사의 서비스 이용에 어려움이 있을 수 있습니다.
      </Text>
      <Title>7. 개인정보의 기술적, 관리적 보호대책</Title>
      <Text>
        회사는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록
        안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다. 단, 이용자 본인의 부주의나
        인터넷 또는 통신상의 문제로 아이디, 비밀번호 등 개인정보가 유출되어 발생한 문제에 대해 회사는 일체
        책임 지지 않습니다.
        <br />
        <br />
        -비밀번호 암호화 : 회원 비밀번호는 암호화되어 저장 및 관리되고 있으며 개인정보의 확인 및 변경도
        비밀번호를 알고 있는 본인에 의해서만 가능합니다.
        <br />
        <br />
        -해킹 등에 대비한 대책 :회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나
        훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고
        있으며, 암호화통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.
        <br />
        <br />
        -취급 직원의 최소화 및 교육 : 회사의 개인정보관련 취급 직원은 담당자에 한정시키고 있으며, 이를 위한
        별도의 비밀번호를 부여하여 정기적으로 갱신하고 있습니다. 담당자에 대한 수시 교육을 통하여
        개인정보취급방침의 준수를 항상 강조하고 있습니다.
      </Text>
      <Title>8. 개인정보관리책임자 및 담당자의 연락처</Title>
      <Text>
        (1) 개인정보보호책임자는 이용자의 개인정보를 보호하고 유출을 방지하는 책임자로서 이용자가 안심하고
        회사가 제공하는 서비스를 이용할 수 있도록 도와주며, 개인정보를 보호하는데 있어 이용자에게 고지한
        사항들에 반하여 사고가 발생할 시에는 이에 관한 책임을 집니다.
        <br />
        <br />
        (2) 기술적인 보완조치를 취하였음에도 불구하고 해킹 등 기본적인 네트워크상의 위험성에 의해 발생하는
        예기치 못한 사고로 인한 정보의 훼손 및 멸실, 이용자가 작성한 게시물에 의한 각종 분쟁 등에 관해서는
        책임이 없습니다.
        <br />
        <br />
        (3) 회사는 정보통신망 이용 촉진 및 정보보호 등에 관한 법률에서 규정한 보호책임자들을 다음과 같이
        지정합니다.
        <br />
        <br />
        개인정보보호책임자
        <br />
        성명 : 정원준
        <br />
        전화 : 070-4848-0954
        <br />
        메일 : bconline@bconline.co.kr
        <br />
        직위 : 팀장
        <br />
        <br />
        개인정보보호담당자
        <br />
        성명 : 정원준
        <br />
        전화 : 070-4848-0954
        <br />
        메일 : bconline@bconline.co.kr
        <br />
        직위 : 팀장
      </Text>
      <Title>9. 고지의 의무</Title>
      <Text>
        정보 및 회사의 정책 또는 보완기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 경우 최소 개정
        7일전부터 홈페이지의 ‘공지사항’을 통해 고지합니다. 다만, 개인정보의 수집 및 활용, 제3자 제공 등과 같이
        이용자 권리의 중요한 변경이 있을 경우 최소 30일전에 고지합니다.
        <br />
        <br />
        - 공고일자 : 2019년 10월 18일
        <br />- 시행일자 : 2019년 10월 25일
      </Text>
    </PrivacyStatementWrap>
  );
};

export default React.memo(PrivacyStatementCp);

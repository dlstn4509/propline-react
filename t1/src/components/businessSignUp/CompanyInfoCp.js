/* global daum */
import React, { useState, useCallback, useRef } from 'react';
import axios from 'axios';
import styled, {
  SubTitle,
  TableWrap,
  Tr,
  TdFirst,
  TdSecond,
  Input,
  FlexDiv,
  RedStar,
  Label,
} from '@/style/businessSignUp';
import { Link } from 'react-router-dom';

import TelNumArrayCp from './TelNumArrayCp';
import TelNumCompanyArrayCp from './TelNumCompanyArrayCp';
import FaxNumArrayCp from './FaxNumArrayCp';
import FavoriteAreaCp from './FavoriteAreaCp';
import MainIndustryCp from './MainIndustryCp';

const CompanyInfoCp = () => {
  const [companyPhone01, setCompanyPhone01] = useState('02');
  const [company_alias, setCompany_alias] = useState('');
  const [fax01, setFax01] = useState('02');
  const [companyNoFile, setCompanyNoFile] = useState('');
  const [registrationNoFile, setRegistrationFile] = useState('');
  const [postCode, setPostCode] = useState('');
  const [jibunAddress, setJibunAddress] = useState('');
  const [roadAddress, setRoadAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [legal_dong_code, setLegal_dong_code] = useState('');
  const [sido, setSido] = useState('');
  const [sigungu, setSigungu] = useState('');
  const [eupmyeondong, seteUpmyeondong] = useState('');
  const [ri, setRi] = useState('');
  const [is_mountain, setIs_mountain] = useState('');
  const [land_no_m, setLand_no_m] = useState('');
  const [land_no_s, setLand_no_s] = useState('');
  const [building_no_m, setBuilding_no_m] = useState('');
  const [building_no_s, setBuilding_no_s] = useState('');
  const [building_name, setBuilding_name] = useState('');
  const detail_address = useRef();
  const changeCompany_name = (e) => {
    setCompany_alias(e.target.value);
  };
  const changeCompanyPhone01 = (value) => {
    setCompanyPhone01(value);
  };
  const changeFax01 = (value) => {
    setFax01(value);
  };
  const changeCompanyNoFile = useCallback((e) => {
    setCompanyNoFile(e.target.value);
  }, []);
  const changeRegistrationFile = useCallback((e) => {
    setRegistrationFile(e.target.value);
  }, []);

  const findAddress = useCallback(() => {
    new daum.Postcode({
      oncomplete: async function (data) {
        let roadAddressSplit = data.roadAddress.split(' ');
        let jibunAddressSplit = data.jibunAddress.split(' ');
        let autoJibunAddressSplit = data.autoJibunAddress.split(' ');
        let landNoM =
          jibunAddressSplit.length > 2
            ? jibunAddressSplit[jibunAddressSplit.length - 1].split('-')[0]
            : autoJibunAddressSplit[autoJibunAddressSplit.length - 1].split('-')[0];
        let landNoS =
          jibunAddressSplit.length > 2
            ? jibunAddressSplit[jibunAddressSplit.length - 1].split('-')[1]
            : autoJibunAddressSplit[autoJibunAddressSplit.length - 1].split('-')[1];
        let buildingNoM = roadAddressSplit[roadAddressSplit.length - 1].split('-')[0];
        let buildingNoS = roadAddressSplit[roadAddressSplit.length - 1].split('-')[1];
        let query = data.roadname + ' ' + roadAddressSplit[roadAddressSplit.length - 1];
        var config = {
          method: 'get',
          url: `https://dapi.kakao.com/v2/local/search/address?query=${query}`,
          headers: {
            Authorization: 'KakaoAK accdfd5267af756d07efcd007e13bcee',
          },
        };
        let rs = await axios(config);
        setPostCode(data.zonecode);
        setJibunAddress(data.jibunAddress);
        setRoadAddress(
          roadAddressSplit[roadAddressSplit.length - 2] + ' ' + roadAddressSplit[roadAddressSplit.length - 1]
        );
        console.log(roadAddress);
        setLatitude(rs.data.documents[0].x);
        setLongitude(rs.data.documents[0].y);
        setLegal_dong_code(data.bcode);
        setSido(data.sido);
        setSigungu(data.sigungu);
        seteUpmyeondong(data.bname1 ? data.bname1 : data.bname);
        setRi(data.bname2 ? data.bname2 : '');
        setIs_mountain(data.buildingCode.charAt(10) === 0 ? 1 : 0);
        setLand_no_m(landNoM);
        setLand_no_s(landNoS ? landNoS : '');
        setBuilding_no_m(buildingNoM);
        setBuilding_no_s(buildingNoS ? buildingNoS : 0);
        setBuilding_name(
          rs.data.documents[0].road_address.building_name
            ? rs.data.documents[0].road_address.building_name
            : ''
        );
        console.log(data);
      },
    }).open();
    detail_address.current.focus();
  }, []);

  return (
    <>
      <SubTitle>업체정보</SubTitle>
      <TableWrap>
        <colgroup>
          <col style={{ width: '180px' }} />
          <col style={{ width: '320px' }} />
          <col style={{ width: '180px' }} />
          <col style={{ width: '320px' }} />
        </colgroup>
        <tbody>
          <Tr>
            <TdFirst>
              업체명 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <Input type="text" name="company_name" onChange={changeCompany_name} />
              <input type="hidden" name="company_alias" value={company_alias} />
            </TdSecond>
            <TdFirst>
              대표자명 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <Input type="text" name="president" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              사업자등록번호 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv>
                <Input width={'73px'} mr={'10px'} type="text" name="company_no01" />-
                <Input width={'73px'} mr={'10px'} ml={'10px'} type="text" name="company_no02" />-
                <Input width={'73px'} ml={'10px'} type="text" name="company_no03" />
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>사업자등록증</TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv>
                <Input type="text" width={'280px'} mr={'20px'} value={companyNoFile} readOnly />
                <Label className="btn" htmlFor="company_no_file" name="company_no_file">
                  파일등록
                </Label>
                <Input
                  type="file"
                  onChange={changeCompanyNoFile}
                  id="company_no_file"
                  name="company_no_file"
                />
                <div>
                  <div>*JPG 또는 PNG 파일로 첨부해주세요.(카메라 촬영, 스캔 이미지 가능)</div>
                  <div>*입력하신 사업자등록번호와 동일한 사업자등록증을 첨부해 주셔야 합니다.</div>
                </div>
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              업태 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <Input type="text" name="business_kind" />
            </TdSecond>
            <TdFirst>
              종목 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <Input type="text" name="business_item" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              중개사무소등록번호 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond colSpan="3">
              <Input type="text" name="registration_no" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>중개사무소등록증</TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv>
                <Input type="text" width={'280px'} mr={'20px'} value={registrationNoFile} readOnly />
                <Label className="btn" htmlFor="registration_no_file">
                  파일등록
                </Label>
                <Input
                  type="file"
                  id="registration_no_file"
                  onChange={changeRegistrationFile}
                  name="registration_no_file"
                />
                <div>
                  <div>*JPG 또는 PNG 파일로 첨부해주세요.(카메라 촬영, 스캔 이미지 가능)</div>
                  <div>*입력하신 사업자등록번호와 동일한 개설등록증을 첨부해 주셔야 합니다.</div>
                </div>
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              주소 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv style={{ marginBottom: '10px' }}>
                <Input
                  type="text"
                  width={'73px'}
                  mr={'20px'}
                  placeholder="우편번호"
                  name="zonecode"
                  value={postCode}
                  readOnly
                />
                <div className="btn" onClick={findAddress}>
                  우편번호찾기
                </div>
              </FlexDiv>
              <Input
                type="text"
                width={'410px'}
                mb={'10px'}
                placeholder="지번주소"
                value={jibunAddress}
                readOnly
              />
              <Input
                type="text"
                width={'410px'}
                mb={'10px'}
                placeholder="도로명주소"
                name="road_name"
                value={roadAddress}
                readOnly
              />
              <Input
                type="text"
                width={'410px'}
                placeholder="상세주소를 입력하세요(건물명, 동/호수 등)"
                name="detail_address"
                ref={detail_address}
              />
              <input type="hidden" name="latitude" value={latitude} />
              <input type="hidden" name="longitude" value={longitude} />
              <input type="hidden" name="legal_dong_code" value={legal_dong_code} />
              <input type="hidden" name="sido" value={sido} />
              <input type="hidden" name="sigungu" value={sigungu} />
              <input type="hidden" name="eupmyeondong" value={eupmyeondong} />
              <input type="hidden" name="ri" value={ri} />
              <input type="hidden" name="is_mountain" value={is_mountain} />
              <input type="hidden" name="land_no_m" value={land_no_m} />
              <input type="hidden" name="land_no_s" value={land_no_s} />
              <input type="hidden" name="building_no_m" value={building_no_m} />
              <input type="hidden" name="building_no_s" value={building_no_s} />
              <input type="hidden" name="building_name" value={building_name} />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              전화번호 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <FlexDiv>
                <TelNumCompanyArrayCp changeCompanyPhone01={changeCompanyPhone01} />-
                <input type="hidden" name="companyPhone01" value={companyPhone01} />
                <Input width={'73px'} mr={'10px'} ml={'10px'} type="text" name="companyPhone02" />-
                <Input width={'73px'} ml={'10px'} type="text" name="companyPhone03" />
              </FlexDiv>
            </TdSecond>
            <TdFirst>팩스번호</TdFirst>
            <TdSecond>
              <FlexDiv>
                <FaxNumArrayCp changeFax01={changeFax01} />-
                <input type="hidden" name="fax01" value={fax01} />
                <Input width={'73px'} mr={'10px'} ml={'10px'} type="text" name="fax02" />-
                <Input width={'73px'} ml={'10px'} type="text" name="fax03" />
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              선호지역 선택 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <FavoriteAreaCp />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              주력업종 선택 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <MainIndustryCp />
            </TdSecond>
          </Tr>
          <Tr style={{ borderBottom: '1px solid #dae1e7' }}>
            <TdFirst>추천인 ID</TdFirst>
            <TdSecond colSpan="3">
              <Input type="text" />
            </TdSecond>
          </Tr>
          <tr style={{ marginTop: '10px' }}>
            <td colSpan="4">
              <RedStar>*</RedStar>표시는 필수항목입니다.
            </td>
          </tr>
        </tbody>
      </TableWrap>
    </>
  );
};

export default React.memo(CompanyInfoCp);

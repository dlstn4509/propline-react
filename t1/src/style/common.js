import styled from 'styled-components';

export const Table = styled.table`
  width: 370px;
  height: 257px;
  margin-bottom: 30px;
  thead {
    height: 40px;
    tr {
      border-bottom: 1px solid black;
      .title {
        font-weight: bold;
        span {
          font-weight: normal;
        }
      }
    }
  }
  tbody {
    tr {
      td:first-child {
        width: 20%;
      }
      td:last-child {
        width: 30%;
      }
    }
  }
`;

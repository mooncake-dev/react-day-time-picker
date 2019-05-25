import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin: auto;
  overflow: auto;

  @media (max-width: 640px) {
    width: 530px;
  }

  @media (max-width: 570px) {
    width: 400px;
  }

  @media (max-width: 420px) {
    width: 370px;
  }

  @media (max-width: 375px) {
    width: 310px;
  }
`;

export const Table = styled.table`
  text-align: center;
  font-size: 0.85em;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TH = styled.th`
  border: 1px solid #f0f0f0;
  padding: 0.5em;
`;

export const TD = styled.td`
  border: 1px solid #f0f0f0;
  padding: 0.5em;
  text-align: ${props => {
    if (props.alignLeft) {
      return 'left';
    }

    if (props.alignRight) {
      return 'right';
    }

    return 'inherit';
  }};
`;

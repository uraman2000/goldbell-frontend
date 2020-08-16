import styled from "styled-components";
import { margin, layout, typography, padding } from "styled-system";
import { Link } from "react-router-dom";

export const Th = styled.th`
  width: ${(props) => props.w};
  color: #707070;
  font-size: 0.333em;
  text-align: left;

  ${typography}
  ${padding}
`;

export const Td = styled.td`
  ${typography}
  ${padding}
`;

export const Table = styled.table`
  width: -webkit-fill-available;
  margin-top: 2.5vh;
  ${layout}
  ${margin}
  border-collapse: collapse;
  table-layout: ${(props) => props.tableLayout};

  td {
    font-size: 0.375em;
    word-wrap: break-word;
    white-space: -pre-wrap;
  }
  tr:not(:first-child) td {
    padding-top: ${(props) => props.pt};
  }
  tr:not(:last-child) td {
    padding-bottom: ${(props) => props.pb};
  }

  ${(props) =>
    props.allBorder
      ? ` tr td{
           border-bottom: 1px solid #eff0f2;
         }
         tr td {
          padding-bottom:  ${props.pb};
        }
         `
      : ` tr:not(:last-child) {
           border-bottom: 1px solid #eff0f2;
         }`}
`;

export const THead = styled.thead`
  tr > th {
    padding-bottom: ${(props) => props.pb};
  }
`;

const c_rejected = "#FF3C3C";
const c_approved = "#05CD33";
const c_partial = "#FFAC2E";
const c_pending = "#B5B5B5";

export const TableStatus = styled(Link)`
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
  color: ${(props) => {
    if (props.status.toLowerCase() === "rejected") {
      return c_rejected;
    } else if (props.status.toLowerCase() === "approved") {
      return c_approved;
    } else if (props.status.toLowerCase() === "partial") {
      return c_partial;
    } else if (props.status.toLowerCase() === "pending") {
      return c_pending;
    }
  }};
`;

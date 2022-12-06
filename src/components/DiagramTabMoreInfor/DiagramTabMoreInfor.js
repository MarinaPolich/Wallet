import moment from 'moment';
import { createPortal } from 'react-dom';
import {
  Table,
  Header,
  Btn,
  StyledTh,
  StyledTr,
  SpanValue,
  SpanSum,
  SpanCell,
  Box,
  Report,
  Caption,
  SpanCaption,
} from './DiagramTabMoreInfor.styled';

export function DiagramTabMoreInfor({ showinfo, setShowinfo }) {
  // console.log('showinfo ======', showinfo);

  return createPortal(
    <Box>
      <Report>
        <Caption> {showinfo.caption}</Caption>
        <Table>
          <Header>
            <StyledTh position={'left'}>Date</StyledTh>
            <StyledTh position={'left'}>Comment</StyledTh>
            <StyledTh>Sum</StyledTh>
          </Header>
          <div style={{ maxHeight: '60vh', overflow: 'auto' }}>
            {showinfo.data.map(item => (
              <StyledTr key={item.id}>
                <SpanCell position={'left'}>
                  <SpanCaption>Date</SpanCaption>
                  <SpanValue>
                    {moment(item.transactionDate).format('DD.MM.YY')}
                  </SpanValue>
                </SpanCell>
                <SpanCell position={'left'}>
                  <SpanCaption>Comment</SpanCaption>
                  <SpanValue>{item.comment}</SpanValue>
                </SpanCell>
                <SpanCell position={'right'}>
                  <SpanCaption>Sum</SpanCaption>
                  <SpanSum>{-item.amount}</SpanSum>
                </SpanCell>
              </StyledTr>
            ))}
          </div>
        </Table>
        <Btn
          onClick={() =>
            setShowinfo({ showinfo: false, caption: '', data: [] })
          }
          type="button"
        >
          x
        </Btn>
      </Report>
    </Box>,
    document.querySelector('#portal')
  );
}

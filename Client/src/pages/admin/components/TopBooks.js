import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PieChart from 'react-minimal-pie-chart';

const colorArray = ['#FF0000', '#00FF00', '#87CEEB', '#FFFF00', '#00FFFF', '#FF00FF', '#FFD700', '#00FA9A', '#00FFFF', '#FF69B4'];

export class TopBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topBooks: [],
    };
  }

  componentDidMount() {
    this.setRenderToopBook();
  }

  componentDidUpdate(prevProps) {
    const { payments } = this.props;
    if (prevProps.payments !== payments) {
      this.setRenderToopBook();
    }
  }

  setRenderToopBook = () => {
    const { toopBooks } = this.props;
    const booksArray = toopBooks ? toopBooks.reduce((acc, item, i) => {
      acc.push({
        title: item.book.name, value: item.paymentCount, color: colorArray[i],
      });
      return acc;
    }, []) : [];
    this.setState({
      topBooks: booksArray,
    });
  }

  renderLabel = (item) => {
    const { topBooks } = this.state;
    const index = item.dataIndex;
    return `(${topBooks[index].value}) ${topBooks[index].title} `;
  }

  render() {
    const { topBooks } = this.state;
    return (
      <div className='page-cont top-book'>
        {topBooks && topBooks.length && <div className='top-book-agenda'>
          {topBooks.map(item => <div className='top-book__agenda-item'>
            <div style={{ 'background-color': item.color }} className='agenda-top-books' />
            <div>{`${item.title} (${item.value})`}</div>
          </div>)}
        </div>}
        <div className='top-book-block'>
          {topBooks.length && <PieChart
            data={topBooks}
          />}
        </div>
      </div>
    );
  }
}

TopBooks.propTypes = {
  toopBooks: PropTypes.array,
};

const mapStateToProps = (store) => ({
  toopBooks: store.adminReducer.toopBooks,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopBooks);

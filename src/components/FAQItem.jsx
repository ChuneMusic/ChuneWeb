import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';

const styles = () => ({
  contentContainer: {
    width: 716,
    margin: '106px auto',
    '@media (max-width: 800px)': {
      width: 310,
      margin: '40px auto',
    },
    '& h3': {
      width: 716,
      fontFamily: 'Open Sans',
      fontSize: 36,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.22,
      letterSpacing: 'normal',
      color: '#232323',
      marginBottom: 30,
      '@media (max-width: 800px)': {
        width: 310,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    '& .para1': {
      width: 716,
      opacity: 0.81,
      fontFamily: 'Open Sans',
      fontSize: 16,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.5,
      letterSpacing: 'normal',
      color: '#515151',
      '@media (max-width: 800px)': {
        width: 310,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    '& .para2': {
      width: 716,
      opacity: 0.81,
      fontFamily: 'Open Sans',
      fontSize: 16,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.5,
      letterSpacing: 'normal',
      color: '#707070',
      '@media (max-width: 800px)': {
        width: 310,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    '& ul': {
      marginLeft: 32,
      '& li': {
        listStyle: 'disc',
        opacity: 0.81,
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: 'normal',
        color: '#515151',
        '& strong': {
          fontWeight: 'bold',
        }
      }
    }
  },
  faqContainer: {
    paddingBottom: 80,
    height: '100%',
    width: '100%',
    backgroundColor: '#fcf6ff',
  },
  faqList: {
    width: 716,
    margin: '0px auto',
    '@media (max-width: 800px)': {
      width: 310,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  questionItem: {
    margin: '30px 0px',
    borderBottom: 'solid 1px #c2c2c2',
    paddingBottom: 30,
    listStyle: 'none',
    '& h5': {
      cursor: 'pointer',
      opacity: 0.81,
      fontFamily: 'Open Sans',
      fontSize: 24,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.08,
      letterSpacing: 'normal',
      color: ' #939393'
    },
  },
  activeQuestionItem: {
    margin: '30px 0px',
    borderBottom: 'solid 1px #c2c2c2',
    paddingBottom: 30,
    listStyle: 'none',
    '& h5': {
      cursor: 'pointer',
      height: 'auto',
      opacity: 0.81,
      fontFamily: 'Open Sans',
      fontSize: 24,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.08,
      letterSpacing: 'normal',
      color: '#232323',
      padding: '10px 0 20px 0',
    },
  },
  answer: {
    width: 716,
    opacity: 0.81,
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    color: '#515151',
    '@media (max-width: 800px)': {
      width: 310
    }
  },
});

class FAQItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { classes, question, answer } = this.props;
    const { open } = this.state;
    return (
      <li className={open ? classes.activeQuestionItem : classes.questionItem}>
        <h5 onClick={this.handleClick}>
          { question }
        </h5>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <p className={classes.answer}>
            {answer}
          </p>
        </Collapse>
      </li>
    );
  }
}

export const StyledFAQItem = withStyles(styles)(FAQItem);

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';

import { FooterConnect } from './shared/Footer';

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

const StyledFAQItem = withStyles(styles)(FAQItem);

const FAQ = ({ classes }) => {
  const faqs = [
    {
      question: 'Are there going to more features when the site releases?',
      answer: 'The main feature we plan on adding for the release of the site is the integration of '
            + 'Spotify and Apple Music. When one of your favorite artists releases a new song or album, it will '
            + 'show up on your feed and you will be able to play that music straight from the feed.\n',
    },
    {
      question: 'Which YouTube channels do you pull from?',
      answer: 'We’ve selected  approximately 50 Youtube channels with the highest quality content like Complex, '
            + 'TheNeedleDrop, The Breakfast Club, and more. These are channels that artists are featured on regularly, '
            + 'so you can get all the latest relevant videos about your favorite artists. If you think we missed a channel, let us know!',
    },
    {
      question: 'How do I get my YouTube channel featured on Chune?',
      answer: 'Contact us!',
    },
    {
      question: 'Which sites do you pull articles from?',
      answer: 'We pull articles from the best music news sites on the internet: Billboard, HotNewHipHop, Pitchfork, and Thissongissick. ',
    },
    {
      question: 'How many artists should I follow?',
      answer: 'For the best experience, users should follow around 30 of their favorite artists.',
    }
  ];
  return (
    <React.Fragment>
      <div className={classes.contentContainer}>
        <h3>FAQ</h3>
        <p className="para1">Browse through the most frequently asked questions.</p>
      </div>
      <div className={classes.faqContainer}>
        <ul className={classes.faqList}>
          {
            faqs.map((faq, index) => <StyledFAQItem question={faq.question} answer={faq.answer} key={index} />)
          }
        </ul>
      </div>
      <FooterConnect />
    </React.Fragment>
  );
};

export const FAQConnect = withStyles(styles)(FAQ);

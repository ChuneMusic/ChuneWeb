import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { FooterConnect } from './shared/Footer';

const styles = () => ({
  contentContainer: {
    width: 716,
    margin: '106px auto',
    '@media (max-width: 800px)': {
      width: 310,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 40,
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
    },
    '& h4': {
      fontWeight: 900,
      marginBottom: '14px',
      fontSize: '20px'
    }
  }
});

class PrivacyPolicy extends React.Component {
  componentWillMount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'auto';
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.contentContainer}>
          <h3>Chune Privacy Policy</h3>
          <p className="para1">
           Protecting your private information is our priority. This Statement of Privacy applies to chunesupply.com
           and Chune Music Corp and governs data collection and usage. For the purposes of this Privacy Policy, unless
           otherwise noted, all references to Chune Music Corp include chunesupply.com and Chune Supply. The Chune Supply
           website is a news and information site. By using the Chune Supply website, you consent to the data practices
           described in this statement.
          </p>
          <br />
          <div className="para1">
            <h4>Collection of your Personal Information</h4>
            In order to better provide you with products and services offered on our Site, Chune Supply may collect
            personally identifiable information, such as your:
          </div>
          <br />
          <ul>
            <li>First and Last Name</li>
            <li>E-mail Address</li>
          </ul>
          <br />
          <p className="para1">
          If you purchase Chune Supply's products and services, we collect billing and credit card information.
            This information is used to complete the purchase transaction
          </p>
          <br />
          <p className="para1">Please keep in mind that if you directly disclose personally identifiable information
            or personally sensitive data through Chune Supply's public message boards, this information may be collected
            and used by others.
          </p>
          <br />
          <p className="para1">
            We do not collect any personal information about you unless you voluntarily provide it to us. However, you may
            be required to provide certain personal information to us when you elect to use certain products or services
            available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes
            or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties;
            (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and
            purchasing products and services on our Site. To wit, we will use your information for, but not limited to,
            communicating with you in relation to services and/or products you have requested from us. We also may gather
            additional personal or non-personal information in the future
          </p>
          <br />
          <div className="para1">
            <h4>Use of your Personal Information</h4>
            Chune Supply collects and uses your personal information to operate its website(s) and deliver the services you have requested.
          </div>
          <br />
          <p className="para1">Chune Supply may also use your personally identifiable information to inform you of other products or services
            available from Chune Supply and its affiliates.
          </p>
          <br />
          <div className="para1">
            <h4>Sharing Information with Third Parties</h4>
          Chune Supply does not sell, rent or lease its customer lists to third parties.
          </div>
          <br />
          <p className="para1">Chune Supply may, from time to time, contact you on behalf of external business partners about a -First and
            Last Name-E-mail Address particular offering that may be of interest to you. In those cases, your unique personally identifiable
            information (e-mail, name, address, telephone number) is transferred to the third party. Chune Supply may share data with trusted
            partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries.
            All such third parties are prohibited from using your personal information except to provide these services to Chune Supply, and
            they are required to maintain the confidentiality of your information.
          </p>
          <br />
          <p className="para1">Chune Supply may disclose your personal information, without notice, if required to do so by law or in the good
            faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Chune Supply
            or the site; (b) protect and defend the rights or property of Chune Supply; and/or (c) act under exigent circumstances to protect the
            personal safety of users of Chune Supply, or the public. 
          </p>
          <br />
          <div className="para1">
            <h4>Tracking User Behavior</h4>
            Chune Supply may keep track of the websites and pages our users visit within Chune Supply, in order to determine what Chune Supply
            services are the most popular. This data is used to deliver customized content and advertising within Chune Supply to customers whose
            behavior indicates that they are interested in a particular subject area.
          </div>
          <br />
          <div className="para1">
            <h4>Automatically Collected Information</h4>
            Information about your computer hardware and software may be automatically collected by Chune Supply. This information can include:
            your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation
            of the service, to maintain quality of the service, and to provide general statistics regarding use of the Chune Supply website.
          </div>
          <br />
          <div className="para1">
            <h4>Use of Cookies</h4>
            The Chune Supply website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on
            your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely
            assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
          </div>
          <br />
          <p className="para1">
          One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web
            server that you have returned to a specific page. For example, if you personalize Chune Supply pages, or register with Chune Supply site
            or services, a cookie helps Chune Supply to recall your specific information on subsequent visits. This simplifies the process of recording
            your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Chune Supply website,
            the information you previously provided can be retrieved, so you can easily use the Chune Supply features that you customized.
          </p>
          <br />
          <p className="para1">You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually
            modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience
            the interactive features of the Chune Supply services or websites you visit.
          </p>
          <br />
          <div className="para1">
            <h4>Links</h4>
            This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other
            sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects
            personally identifiable information.
          </div>
          <br />
          <div className="para1">
            <h4>Children Under Thirteen</h4>
            Chune Supply does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the
            age of thirteen, you must ask your parent or guardian for permission to use this website.
          </div>
          <br />
          <div className="para1">
            <h4>Opt-Out & Unsubscribe from Third Party Communications</h4>
            We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain information. Users may opt-out of
            receiving any or all communications from third-party partners of Chune Supply by contacting us here:
            <ul>
              <li>Web page: _________________ </li>
              <li>Email: billy@chunesupply.com</li>
              <li>Phone: _________________</li>
            </ul>
          </div>
          <br />
          <div className="para1">
            <h4>E-mail Communications</h4>
            From time to time, Chune Supply may contact you via email for the purpose of providing announcements, promotional offers, alerts,
            confirmations, surveys, and/or other general communication.
          </div>
          <br />
          <p className="para1">
            If you would like to stop receiving marketing or promotional communications via email from Chune Supply, you may opt out of such communications
            by clicking the UNSUBSCRIBE button.
          </p>
          <div className="para1">
            <h4>External Data Storage Sites</h4>
            We may store your data on servers provided by third party hosting vendors with whom we have contracted.
          </div>
          <br />
          <div className="para1">
            <h4>Changes to this Statement</h4>
            Chune Supply reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat
            personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or
            by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications
            will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
          </div>
          <br />
          <div className="para1">
            <h4>Contact Information</h4>
            Chune Supply welcomes your questions or comments regarding this Statement of Privacy. If you believe that Chune Supply has not adhered to this Statement, please contact Chune Supply at:
          </div>
          <br />
          <p className="para1">
            Chune Music Corp<br />
            840 S Alhambra Circle<br />
            Coral Gables, Florida 33146<br />
            <br />
            Email Address:<br />
            billy@chunesupply.com<br />
            <br />
            Telephone number:<br />
            3059519113<br />
            Effective as of September 26, 2018
          </p>
        </div>
        <FooterConnect />
      </React.Fragment>
    );
  }
}

export const PrivacyPolicyConnect = withStyles(styles)(PrivacyPolicy);

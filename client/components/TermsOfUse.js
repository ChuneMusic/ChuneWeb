import React from 'react';
import Footer from './shared/Footer';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  contentContainer: {
    width: 716,
    margin: '106px auto',
    '@media (max-width: 1023px)': {
      width: 345,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 40,
    },
    '& h3': {
      width: 716,
      fontFamily: "Open Sans",
      fontSize: 36,
      fontWeight: "bold",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: 1.22,
      letterSpacing: "normal",
      color: "#232323",
      marginBottom: 30,
      '@media (max-width: 1023px)': {
        width: 345,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    '& .para1': {
      width: 716,
      opacity: 0.81,
      fontFamily: "Open Sans",
      fontSize: 16,
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      color: "#515151",
      '@media (max-width: 1023px)': {
        width: 345,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    '& .para2': {
      width: 716,
      opacity: 0.81,
      fontFamily: "Open Sans",
      fontSize: 16,
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      color: "#707070",
      '@media (max-width: 1023px)': {
        width: 345,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    '& ul': {
      marginLeft: 32,
      '& li': {
        listStyle: 'disc',
        opacity: 0.81,
        fontFamily: "Open Sans",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: 1.5,
        letterSpacing: "normal",
        color: "#515151",
        '& strong': {
          fontWeight: 'bold',
        }
      }
    }
  }
});

const TermsOfUse = props => {
  const { classes, user } = props;

  return (
    <React.Fragment>
      <GuestNavbar alternateColor={true} activePage="terms-of-use"/>
      <div className={classes.contentContainer}>
        <h3>Chune Terms and Conditions</h3>
        <p className="para1">
          <strong>Agreement between User and chunemusicfeed.com - </strong>
          Welcome to chunemusicfeed.com! The chunemusicfeed.com website (the "Site") is comprised of
          various web pages operated by Chune Music Corp ("Chune"). chunemusicfeed.com is offered to
          you conditioned on your acceptance without modification of the terms, conditions, and notices
          contained herein (the "Terms"). Your use of chunemusicfeed.com constitutes your agreement to all
          such Terms. Please read these terms carefully, and keep a copy of them for your reference.
          chunemusicfeed.com is a News and Information Site.
          The purpose of chunemusicfeed.com is to keep users up to date with everything that their favorite
          artists are doing. Users will also be able to purchase merchandise from the site.
        </p>
        <br/>
        <p className="para2">
          <strong>Privacy - </strong>
          Your use of chunemusicfeed.com is subject to Chune's Privacy Policy. Please review our Privacy
          Policy, which also governs the Site and informs users of our data collection practices.
        </p>
        <br/>
        <p className="para2">
          <strong>Electronic Communications - </strong>
          Visiting chunemusicfeed.com or sending emails to Chune constitutes electronic communications.
          You consent to receive electronic communications and you agree that all agreements, notices,
          disclosures and other communications that we provide to you electronically, via email and on the
          Site, satisfy any legal requirement that such communications be in writing.
        </p>
        <br/>
        <p className="para2">
          <strong>Your Account - </strong>
          If you use this site, you are responsible for maintaining the confidentiality of your account and
          password and for restricting access to your computer, and you agree to accept responsibility for
          all activities that occur under your account or password. You may not assign or otherwise transfer
          your account to any other person or entity. You acknowledge that Chune is not responsible for
          third party access to your account that results from theft or misappropriation of your account.
          Chune and its associates reserve the right to refuse or cancel service, terminate accounts, or
          remove or edit content in our sole discretion.
        </p>
        <br/>
        <p className="para2">
          <strong>Children Under Thirteen - </strong>
          Chune does not knowingly collect, either online or offline, personal information from persons under
          the age of thirteen. If you are under 18, you may use chunemusicfeed.com only with permission of
          a parent or guardian.
        </p>
        <br/>
        <p className="para2">
          <strong>Links to Third Party Sites/Third Party Services - </strong>
          chunemusicfeed.com may contain links to other websites ("Linked Sites"). The Linked Sites are
          not under the control of Chune and Chune is not responsible for the contents of any Linked Site,
          including without limitation any link contained in a Linked Site, or any changes or updates to a
          Linked Site. Chune is providing these links to you only as a convenience, and the inclusion of any
          link does not imply endorsement by Chune of the site or any association with its operators.

          Certain services made available via chunemusicfeed.com are delivered by third party sites and
          organizations. By using any product, service or functionality originating from the
          chunemusicfeed.com domain, you hereby acknowledge and consent that Chune may share such
          information and data with any third party with whom Chune has a contractual relationship to
          provide the requested product, service or functionality on behalf of chunemusicfeed.com users and
          customers.
        </p>
        <br/>
        <p className="para2">
          <strong>No Unlawful or Prohibited Use/Intellectual Property - </strong>
          You are granted a non-exclusive, non-transferable, revocable license to access and use
          chunemusicfeed.com strictly in accordance with these terms of use. As a condition of your use of
          the Site, you warrant to Chune that you will not use the Site for any purpose that is unlawful or
          prohibited by these Terms. You may not use the Site in any manner which could damage, disable,
          overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site.
          You may not obtain or attempt to obtain any materials or information through any means not
          intentionally made available or provided for through the Site.
          All content included as part of the Service, such as text, graphics, logos, images, as well as the
          compilation thereof, and any software used on the Site, is the property of Chune or its suppliers
          and protected by copyright and other laws that protect intellectual property and proprietary rights.
          You agree to observe and abide by all copyright and other proprietary notices, legends or other
          restrictions contained in any such content and will not make any changes thereto.
          You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create
          derivative works, or in any way exploit any of the content, in whole or in part, found on the Site.
          Chune content is not for resale. Your use of the Site does not entitle you to make any unauthorized
          use of any protected content, and in particular you will not delete or alter any proprietary rights or
          attribution notices in any content. You will use protected content solely for your personal use, and
          will make no other use of the content without the express written permission of Chune and the
          copyright owner. You agree that you do not acquire any ownership rights in any protected content.
          We do not grant you any licenses, express or implied, to the intellectual property of Chune or our
          licensors except as expressly authorized by these Terms.
        </p>
        <br/>
        <p className="para2">
          <strong>Third Party Accounts - </strong>
          You will be able to connect your Chune account to third party accounts. By connecting your
          Chune account to your third party account, you acknowledge and agree that you are consenting to
          the continuous release of information about you to others (in accordance with your privacy settings
          on those third party sites). If you do not want information about you to be shared in this manner,
          do not use this feature.
        </p>
        <br/>
        <p className="para2">
          <strong>International Users - </strong>
          The Service is controlled, operated and administered by Chune from our offices within the USA. If
          you access the Service from a location outside the USA, you are responsible for compliance with
          all local laws. You agree that you will not use the Chune Content accessed through
          chunemusicfeed.com in any country or in any manner prohibited by any applicable laws, restrictions or regulations.
        </p>
        <br/>
        <p className="para2">
          <strong>Indemnification - </strong>
          You agree to indemnify, defend and hold harmless Chune, its officers, directors, employees, agents
          and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's
          fees) relating to or arising out of your use of or inability to use the Site or services, any user
          postings made by you, your violation of any terms of this Agreement or your violation of any rights
          of a third party, or your violation of any applicable laws, rules or regulations. Chune reserves the
          right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject
          to indemnification by you, in which event you will fully cooperate with Chune in asserting any
          available defenses.
        </p>
        <br/>
        <p className="para2">
          <strong>Liability Disclaimer - </strong>
          THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
          AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR
          TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
          INFORMATION HEREIN. CHUNE MUSIC CORP AND/OR ITS SUPPLIERS MAY
          MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
          CHUNE MUSIC CORP AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS
          ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND
          ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND
          RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE
          MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH
          INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
          ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND.
          CHUNE MUSIC CORP AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL
          WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION,
          SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL
          IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
          SHALL CHUNE MUSIC CORP AND/OR ITS SUPPLIERS BE LIABLE FOR ANY
          DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL
          DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT
          LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF
          OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE,
          WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE
          PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY
          INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
          OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF
          THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
          LIABILITY OR OTHERWISE, EVEN IF CHUNE MUSIC CORP OR ANY OF ITS
          SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE

          This is a RocketLawyer.com document. Page 3 of 5

          SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
          LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES,
          THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED
          WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE,
          YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
        </p>
        <br/>
        <p className="para2">
          <strong>Termination/Access Restriction - </strong>
          Chune reserves the right, in its sole discretion, to terminate your access to the Site and the related
          services or any portion thereof at any time, without notice. To the maximum extent permitted by
          law, this agreement is governed by the laws of the State of Florida and you hereby consent to the
          exclusive jurisdiction and venue of courts in Florida in all disputes arising out of or relating to the
          use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all
          provisions of these Terms, including, without limitation, this section.
          You agree that no joint venture, partnership, employment, or agency relationship exists between
          you and Chune as a result of this agreement or use of the Site. Chune's performance of this
          agreement is subject to existing laws and legal process, and nothing contained in this agreement is
          in derogation of Chune's right to comply with governmental, court and law enforcement requests or
          requirements relating to your use of the Site or information provided to or gathered by Chune with
          respect to such use. If any part of this agreement is determined to be invalid or unenforceable
          pursuant to applicable law including, but not limited to, the warranty disclaimers and liability
          limitations set forth above, then the invalid or unenforceable provision will be deemed superseded
          by a valid, enforceable provision that most closely matches the intent of the original provision and
          the remainder of the agreement shall continue in effect.
          Unless otherwise specified herein, this agreement constitutes the entire agreement between the user
          and Chune with respect to the Site and it supersedes all prior or contemporaneous
          communications and proposals, whether electronic, oral or written, between the user and Chune
          with respect to the Site. A printed version of this agreement and of any notice given in electronic
          form shall be admissible in judicial or administrative proceedings based upon or relating to this
          agreement to the same extent and subject to the same conditions as other business documents and
          records originally generated and maintained in printed form. It is the express wish to the parties
          that this agreement and all related documents be written in English.
        </p>
        <br/>
        <p className="para2">
          <strong>Changes to Terms - </strong>
          Chune reserves the right, in its sole discretion, to change the Terms under which
          chunemusicfeed.com is offered. The most current version of the Terms will supersede all previous
          versions. Chune encourages you to periodically review the Terms to stay informed of our updates.
        </p>
        <br/>
        <p className="para2">
          <strong>Contact Us - </strong>
          Chune welcomes your questions or comments regarding the Terms:
          Chune Music Corp
          840 S Alhambra Circle
          Coral Gables, Florida 33146
          or
          billycandela7@gmail.com
          or
          (305) 951-9113
        </p>
      <br/>
        <p className="para2">
          <strong>Effective as of July 05, 2018</strong>
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default withStyles(styles)(TermsOfUse);

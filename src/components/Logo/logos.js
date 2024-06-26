import stripeLogo from '../../assets/img/stripe.png';
import awsLogo from '../../assets/img/aws.png';
import redditLogo from '../../assets/img/reddit.png';

import './logo.css';

export default function Logos () {
    return (
        <section className="logos">
          <div className="img-section">
            <div className="logos-container">
              <img src={stripeLogo} alt="Logo Stripe" />
              <img src={awsLogo} alt="Logo AWS" />
              <img src={redditLogo} alt="Logo Carrinho" />
            </div>
          </div>
      </section>
    );
}
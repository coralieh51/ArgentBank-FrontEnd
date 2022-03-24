import Hero from "../Hero";
import FeatureItem from "../FeatureItem";
import iconChat from "../../assets/img/icon-chat.png";
import iconMoney from "../../assets/img/icon-money.png";
import iconSecurity from "../../assets/img/icon-security.png";

/**
 * @component Home
 */
function Home() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <div className="features">
          <FeatureItem
            type="chat"
            imgSrc={iconChat}
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
            alt="Chat-icon"
          />
          <FeatureItem
            type="money"
            imgSrc={iconMoney}
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
            alt="Money-icon"
          />
          <FeatureItem
            type="security"
            imgSrc={iconSecurity}
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money
            is always safe."
            alt="Security-icon"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;

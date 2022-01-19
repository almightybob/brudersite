import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faMap from "@fortawesome/fontawesome-free-regular/faMap";
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="was"
          className={`${this.props.article === "was" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Was</h2>
          <span className="image main">
            <img src="/static/images/pic01.jpg" alt="" />
          </span>
          <p>
            Ein Tag nur für Männer, um sich auszustauschen, Dialoge zu führen
            und sich zu spüren. Die Männliche Kraft neu erwachen zu lassen und
            sie gegenseitig herauszufordern, sich stärken, sich feiern.
          </p>
          <p>Warst du schon mal an einem</p>
          {close}
        </article>
        <article
          id="warum"
          className={`${this.props.article === "warum" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Darum</h2>
          <span className="image main">
            <img src="/static/images/manunterbaum.png" alt="" />
          </span>
          <p>
            Es ist uns ein Anliegen, dass die männliche Kraft in unserer Welt
            wieder neu erstrahlt. Es gibt viele Kräfte die heute wirken, viele
            davon machen es den Jungen schwierig einen gesunden - wenn überhaupt
            einen - Bezug zum "Mann sein" zu entwickeln. Auch das Bild des
            Mannes in der heutigen Gesellschaft ist schwer zu deuten und
            verzerrt. Dies ist unserer Meinung nach mit Grund dafür, dass es
            viel Leid in der Welt gibt, im Innen wie im Aussen.
          </p>
          <p>
            Deswegen haben wir beschlossen die Brüderzeit ins Leben zu rufen, um
            männlichen Wesen einen Raum zu bieten, sich auszutauschen, dass neue
            Bild des Mannes für sich zu definieren und unter Brüdern zu heilen.{" "}
            <br />
            Sei Herzlich willkommen Bruder!
          </p>
          {close}
        </article>
        <article
          id="wo"
          className={`${this.props.article === "wo" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Im Zentrum der Fülle</h2>
          <span className="image main">
            <img src="/static/images/zdf.png" alt="Zentrum der Fuelle" />
          </span>
          <p>
            Das{" "}
            <a href="https://zentrumderfuelle.ch" target="blank">
              Zentrum der Fülle
            </a>{" "}
            ist ein Spirituelles Zentrum in Sirnach TG. Es bietet Raum für
            Transformationsarbeit und Workshops aller Art. Jeder Mensch ist
            willkommen. Es gibt bereits einen{" "}
            <a href="https://zentrumderfuelle.ch/#kalender">
              {" "}
              vollen Kalender mit vielen Veranstaltungen.
            </a>
          </p>
          <ul className="icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMap} />
              </a>
            </li>
          </ul>
          {close}
        </article>
        <article
          id="wer"
          className={`${this.props.article === "wer" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Wer</h2>
          <span className="image main">
            <img src="/static/images/pic03.jpg" alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>{" "}
        <ul className="icons">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
        <article
          id="anmeldung"
          className={`${this.props.article === "anmeldung" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Anmeldung</h2>
          <form
            method="post"
            action="https://buy.stripe.com/6oE9B2gHrasb50IdQQ"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Anmelden" className="special" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Main;

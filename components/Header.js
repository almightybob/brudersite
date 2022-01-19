import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      <b>2.4.2022</b>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Brüderzeit</h1>
        <p>
          Warum willst Du <b>Mann</b> sein?
          <br /> Bist Du Dir deiner Rolle als&nbsp;
          <b>Krieger</b> bewusst?
          <br /> Wie hast Du's mit dem <b>Diener</b> sein?
          <br /> Was bedeutet <b>Bruder</b> sein?
          <br /> Wann bist du wirklich <b>König</b>?
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("was");
            }}
          >
            Was
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("warum");
            }}
          >
            Warum
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("wo");
            }}
          >
            Wo
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("wer");
            }}
          >
            Wer
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("anmeldung");
            }}
          >
            <b>Anmeldung</b>
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;

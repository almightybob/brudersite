import PropTypes from "prop-types";

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <p className="copyright">
      &copy; <a href="https://zentrumderfuelle.ch">Zentrum der Fülle</a>
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;

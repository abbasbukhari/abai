import { ABAILockup } from "./Logo";
import Icon from "./Icon";
import IDEPane from "./IDEPane";

export default function Hero({ onCtaClick }) {
  return (
    <section className="hero-simple reveal">
      <div className="container">
        <div className="hero-simple-content">
          <h1>Private AI for your business.</h1>
          <p className="hero-simple-sub">
            Install AI on your hardware. Your data never leaves your office.
          </p>
          <IDEPane />
          <div className="hero-simple-ctas">
            <button
              className="btn btn-primary"
              onClick={onCtaClick}
              style={{ height: 48, fontSize: 15 }}
            >
              Book a free consultation
              <Icon name="arrow-right" size={16} />
            </button>
            <a
              href="tel:9054628072"
              className="btn btn-ghost"
              style={{ height: 48, fontSize: 15, display: "flex", justifyContent: "center", lineHeight: 1 }}
            >
              Call: 905 462 8072
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

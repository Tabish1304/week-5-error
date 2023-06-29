import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons";
import Highlight from "./Ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2>
            Why Choose <span className="purple">Libray</span>{" "}
          </h2>
        </div>

        <div className="highlight-wrapper">
          <Highlight
            icon={<FontAwesomeIcon icon={faBolt} />}
            title="Easy And Quick"
            para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum."
          />

          <Highlight
            icon={<FontAwesomeIcon icon={faBookOpen} />}
            title="10,000+ Books"
            para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum."
          />

          <Highlight
            icon={<FontAwesomeIcon icon={faTags} />}
            title="Affordable"
            para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum."
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;

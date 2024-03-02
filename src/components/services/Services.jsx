import { useState } from "react";
import { FaRegCheckCircle, FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { GrHostMaintenance } from "react-icons/gr";
import { MdAppSettingsAlt } from "react-icons/md";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        <div className="services__content animation-scale">
          <div>
            <CgWebsite className="uil uil-web-grid services__icon" />
            <h3 className="services__title">
              Web <br /> Development
            </h3>
          </div>
          <span 
            className="services__button" 
            // onClick={() => toggleTab(1)}
          >
            View More
            <FaArrowRight className="uil uil-arrow-right services__button-icon arrow-icon" />
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <IoMdClose
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              />
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">Web page development</p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    I create express js api rest
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    Dashboard Web Application Development
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    I create graphql api on Node js
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content animation-scale">
          <div>
            <MdAppSettingsAlt className="uil uil-arrow services__icon" />
            <h3 className="services__title">
              App
              <br /> Development
            </h3>
          </div>
          <span className="services__button" 
            // onClick={() => toggleTab(2)}
            >
            View More
            <FaArrowRight className="uil uil-arrow-right services__button-icon arrow-icon" />
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <IoMdClose
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              />
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">Web page development</p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    I create express js api rest
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    Dashboard Web Application Development
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    I create graphql api on Node js
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content animation-scale">
          <div>
            <GrHostMaintenance className="uil uil-edit services__icon" />
            <h3 className="services__title">
              Maintenance <br /> And Support
            </h3>
          </div>
          <span className="services__button" 
              // onClick={() => toggleTab(3)}
            >
            View More
            <FaArrowRight className="uil uil-arrow-right services__button-icon arrow-icon" />
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <IoMdClose
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              />
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">Web page development</p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    I create express js api rest
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    Dashboard Web Application Development
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaRegCheckCircle className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">
                    I create graphql api on Node js
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

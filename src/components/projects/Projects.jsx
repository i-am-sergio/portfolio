import "./projects.scss";

const Projects = () => {

  return (
    <section className="services section" id="projects">
      <h2 className="section__title h2-padding">Projects</h2>
      <div className="projects">
        <div className="listContainer">
          <div className="box animation-scale-22 line-animation">
            <h2>Social Media</h2>
            {/* <span className="section__subtitle">Web Application</span> */}
            <p>A platform that provides essential services such as posting, user tracking, instant messaging, login, and registration</p>
            <a href="https://github.com/i-am-sergio/fullstack_project_soft_engineering_ii" target="blank">More</a>
          </div>
          <div className="box animation-scale-22 line-animation">
            <h2>Billing System</h2>
            {/* <span className="section__subtitle">Web Application</span> */}
            <p>Web application that allows issuing electronic invoices for a tools store, built with Spring Boot and Thymeleaf</p>
            <a href="https://github.com/i-am-sergio/spring_thymeleaf_hardware_store" target="blank">More</a>
          </div>
          <div className="box animation-scale-22 line-animation">
            <h2>Landing Page</h2>
            {/* <span className="section__subtitle">Web Page</span> */}
            <p>A web platform designed to captivate the public and drive participation in an event held by the UNSA of Arequipa Peru, built with React</p>
            <a href="https://github.com/i-am-sergio/react-web-epcc" target="blank">More</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
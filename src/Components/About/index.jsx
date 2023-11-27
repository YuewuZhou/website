import "./index.css";
function About() {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = process.env.PUBLIC_URL + '/Resume_Yuewu_Zhou.pdf';
      link.setAttribute('download', 'Resume_Yuewu_Zhou.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    return (
      <div className="portfolio-container">
      <header className="header padding-format">
        <h1>Yuewu Zhou</h1>
        <h3>Contact Information</h3>
        <p>yzhou50@gmail.com - (404) 422-0864 – Houston, Texas</p>
      </header>

      <div className="content padding-format">
        <section className="section">
          <h2>Work Experience</h2>
          <h3>Full Stack Developer, Inductive Health Informatics</h3>
          <p>March 2021 – July 2023</p>
          <ul>
            <li>Developed highly scalable full-stack web applications using Angular, Spring, and Postgres.</li>
            <li>Led development of MVP using Docker and AWS to streamline setup of localized instances.</li>
            <li>Set up RESTful API endpoints that provided data retrieval, cleaning, validation, and synchronization across multiple environments.</li>
            <li>Unified Authorization and Authentication control using Keycloak integration.</li>
            <li>Optimized backend algorithms and SQL queries through performance monitoring, achieving a 10x reduction in user input latency and loading times.</li>
            <li>Trained recommendation models using Natural Language Processing (NLP) to provide smart user suggestions based across static platforms and large datasets.</li>
            <li>Implemented rigorous unit testing and regression testing using JUnit, ensuring the stability and reliability of the applications throughout iterative changes.</li>
            <li>Created customized interfaces following consistent CSS stylings across platforms while adhering to federal accessibility standards.</li>
            <li>Coordinated extensive quality assurance testing with Analysts and SME’s prior to production to guarantee a smooth deployment experience.</li>
          </ul>
        </section>

        <section className="section">
          <h3>Junior Software Developer, DataGumbo</h3>
          <p>August 2020 – December 2020</p>
          <ul>
            <li>Wrote transactional data software for blockchain ledgers using Golang and Node.js.</li>
            <li>Retrieved raw data from corporate API endpoints and performed ETL functions to assign custom datatypes for industry specific purposes.</li>
            <li>Generated automation for cleaning missing and corrupt data flows.</li>
          </ul>
        </section>

        <section className="section">
          <h3>Junior Web Developer, SCTC</h3>
          <p>April 2020 – June 2020</p>
          <ul>
            <li>Enhanced administrative controller software on a single page PHP Web Application using the PHP, .NET, and Microsoft SQL Server Stack.</li>
            <li>Responsible for quality assurance, development, and production testing for each development cycle.</li>
            <li>Translated user request and bug reports into code changes that were approved by Senior Developers.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Education</h2>
          <p>Emory University, Atlanta GA</p>
          <p>Bachelor’s in Computer Science</p>
        </section>

        <section className="section">
          <h2>Skills & Technologies</h2>
          <h3>Frontend:</h3>
          <p>Angular, React, CSS</p>
          <h3>Backend:</h3>
          <p>Java, Python, Golang, .NET, Node.js</p>
          <h3>DB:</h3>
          <p>MySQL, Postgres, Conform, MSSQL</p>
          <h3>Scripting:</h3>
          <p>Bash, CMD, Powershell</p>
          <h3>OS:</h3>
          <p>Linux, CentOS, Windows Server 2012</p>
          <h3>Pipeline Management:</h3>
          <p>GitHub, BitBucket</p>
          <h3>CRM:</h3>
          <p>Atlassian Suite (Jira, Confluence)</p>
        </section>
      </div>

      <footer className="footer padding-format"  onClick={handleDownload}>
        <a className="pdf-link">Download PDF</a>
      </footer>
    </div>
    );
  }

export default About;
function BodyContent() {
  return (
    <>
      <div className="bodyContent container">
        <div className="left">
          <h1>
            <span className="highlight">About Me!</span>
          </h1>
        </div>

        <div className="right">
          <div className="card">
            <h1>Bio</h1>
            <p>
              I am a 20-year-old Filipino, born on November 03, 2004. I am currently studying at 
              <strong> Asian College of Science and Technology</strong>, taking up 
              <strong> Information Technology</strong>.
            </p>
          </div>

          <div className="card">
            <h1>My Goal</h1>
            <p>
              My goal is to <strong>master front-end development</strong> and build expertise as either 
              a <strong>web developer</strong> or <strong>app developer</strong>, with a focus on web technologies.
            </p>
          </div>

          <div className="card">
            <h1>Skills</h1>
            <p>
              I have experience with <strong>HTML</strong>, <strong>CSS</strong>, <strong>React</strong>, and 
              <strong> Node.js</strong>. I am also familiar with <strong>Git</strong> and <strong>GitHub</strong> 
              for version control.
            </p>
          </div>

          <div className="card">
            <h1>Hobbies</h1>
            <p>
              I enjoy <strong>coding</strong>, playing <strong>games</strong>, exploring <strong>design</strong> ideas, 
              and learning new <strong>technologies</strong> in my free time.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyContent;

import picture from '../assets/rui.jpg'

function HeroBanner() {
  return (
    <>
      <div className="header">
      <div className="left">
        <h2>Welcome, I’m</h2>
        <h1>
          Luwie <br />
          Regaspi
        </h1>
        <h2 className="role">Aspiring IT Student</h2>
      </div>

        <div className="right">
          <img src={picture} alt="Luwie Regaspi" className="profile-pic" />
        </div>
      </div>
    </>
  )
}


export default HeroBanner
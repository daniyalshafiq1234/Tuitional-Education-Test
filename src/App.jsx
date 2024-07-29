import { menu } from './menu-details';
import MenuButton from './components/MenuButton';
import logo from './assets/59174982971-removebg-preview.png'
import crossIcon from './assets/WhatsApp_Image_2024-07-29_at_20.08.22_ee3ba4cc-removebg-preview.png'
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [showAddSubject, setShowAddSubject] = useState(true)
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedSubjectLevel, setSelectedSubjectLevel] = useState('')
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    if (subjects.length > 0) {
      setShowAddSubject(false)
    }
  }, [subjects])

  function openDialog() {
    setShowOverlay(true)
  }

  function addSubjects() {
    setSubjects((prevState) => {
      return [
        { name: selectedSubject, level: selectedSubjectLevel }, ...prevState
      ]
    })

    setShowOverlay(false)
  }

  function removeDialog() {
    setShowOverlay(false)
  }

  return (
    <div>
      {
        showOverlay
          ?
          <div className='overlay'>
            <dialog id="subjectSelection">
              <div className="heading_Cont">
                <h3>Add Subject</h3>
                <div className='crossIcon' onClick={removeDialog}>
                  <img src={crossIcon} />
                </div>
              </div>

              <div className='formInps'>
                <div>
                  <p>Select Subject</p>
                  <input type="text" onChange={(e) => {
                    setSelectedSubject(e.target.value)
                  }} />
                </div>
                <div>
                  <p>Select Subject Level</p>
                  <input type="text" onChange={(e) => {
                    setSelectedSubjectLevel(e.target.value)
                  }} />
                </div>
                <div className='overlayBtn'>
                  <button onClick={removeDialog} style={{ color: "#38b6ff", backgroundColor: "transparent", border: '1px solid #38b6ff' }}>Cancel</button>
                  <button style={{ backgroundColor: "#007BFF", color: "#fff", boxShadow: "0px 0px 10px 0px #38b6ff" }} onClick={addSubjects}>Add</button>
                </div>
              </div>
            </dialog>
          </div>
          :
          <></>
      }
      <header>
        <span className='top_left_circle'></span>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <span className='bottom_right_circle'></span>
      </header>
      <div className="containerStyle">
        {menu.map((title, index) => (
          <MenuButton
            index={index}
            menuTitle={title}
          />
        ))}
      </div>
      <div className='form_grid_container'>
        <div className='form_grid_inputs_item'>
          <div className='FormTitle'>
            <h3>Subjects & Pricing</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='formInputCont'>

            <div style={{ display: 'flex' , justifyContent: 'space-between' }}>
              <p>Add Subject</p>
              <button className="buttonStyle"
                onClick={openDialog}
              >+</button>
            </div>
            {!showAddSubject &&
              <div>
                <p>Select Subject</p>
                {subjects.map((subject) => (
                  <div className='subject'>
                    {subject.name} - {subject.level}
                    <span>x</span>
                  </div>
                ))}
              </div>}
            <div className="form-group">
              <label htmlFor="curriculum">Select Curriculum</label>
              <input type="text" id="curriculum" name="curriculum" />
            </div>
            <div className="form-group_rate">
              <div className='hoursInp'>
                <label htmlFor="hours">Hours/Week</label>
                <input type="text" id="hours" name="hours" />
              </div>
              <div className='currencyInp '>
                <label style={{paddingLeft: '10px'}} htmlFor="currency">Hourly rate</label>
                <div className='ratesInps'>

                  <select id="currency" name="currency">
                    <option value="" disabled selected hidden>AED</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    <option value="aed">AED</option>
                  </select>
                  <input type="text" placeholder='Mention Rates' />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


import styles from './navbar.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar()  {
  return (
    <>
    <nav>
      <div className={styles.brand}>
        .Pranay
      </div>
      
      


      <div className={`navbar navbar-expand-lg ${styles.nav_items}`}>
      
      <button className={`btn btn-primary navbar-toggler ${styles.toggler}` } aria-expanded="false" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><GiHamburgerMenu/></button>


    <div className={`collapse navbar-collapse ${styles.navs}`}  id="navbarNavDropdown">
         <ul>
         <li  className="nav-item">
            <a href="#home">
              Home
              </a>
          </li>
          <li className="nav-item">
             <a href="#skills">
              Skills
              </a>
          </li>
          <li className="nav-item">
            
          <a href="#projects"> 
              Projects
              </a>
          </li>
          <li className="nav-item">
           
          <a href="#education">
              Education
              </a>
          </li>
          <li className="nav-item">
          <a href="#certificates">
          Certificates & LOR
              </a>
          </li>
          <li className="nav-item">
          

            <button className={styles.resume}>Download Resume</button>
               
            
          </li>
         </ul>
         </div>
        
      </div>


      
      

<div className={`offcanvas offcanvas-start ${styles.canvas}`} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className={`offcanvas-header ${styles.canvas_header}`}>
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">.Pranay</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>


  <div className="offcanvas-body">
  <div className={styles.nav_items_canvas}>
      
    
         <ul>
          <li  className="nav-item">
            <a href="#home" >
              Home
              </a>
          </li>
          <li className="nav-item">
             <a href="#skills">
              Skills
              </a>
          </li>
          <li className="nav-item">
            
          <a href="#projects"> 
              Project
              </a>
          </li>
          <li className="nav-item">
           
          <a href="#education">
              Education
              </a>
          </li>
          <li className="nav-item">
          <a href="#certificates">
          Certificates
          </a>
          </li>
         
         </ul>
         <a href="/">
            <button className={styles.resume}>Download Resume</button>
              </a>
        
      </div>
  </div>
</div>




    </nav>
    </>);
};

export default Navbar;
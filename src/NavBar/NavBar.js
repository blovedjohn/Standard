import SearchIcon from '@mui/icons-material/Search';

function NavBar(){
    return(
          <div className="Nav">

            <div className='nav-logo'>
              <h3>oretelll</h3>
            </div>
               <p id='search'>Search here...<SearchIcon className='icon'/> </p>

             <div className='Nav-link'>
                <p className='Nav-link'>Request</p>
                <p className='Nav-link'>Rental</p>
                <p className='Nav-link'>Auditions</p>
                <p className='Nav-link'>Crews</p>
                <p className='Nav-link'>Foretal</p>
                <p className='Nav-link'>Invest</p>
                <p className='Nav-link' id='sig-nav'>Sign in</p>
             </div>
         </div>
    )
}
export default NavBar;


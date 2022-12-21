import logo from '../../assets/icons8-home-app-200.png'


export default function Navbar(){
    return(
        <nav>
         <img src={logo} alt = "house in the clouds" className = "nav-logo"/>
         <h3 className='logo-name'>Cloud Homes</h3>   
        </nav>
    )
}
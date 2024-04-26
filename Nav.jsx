import "./Nav.css";
function Navbar()
{
    return (
        <div className="head">
            <ul>
                <div className="head1">
                <li  id="a1">Food Court</li>
                <li><img  className="logo"src="kce.jpg"></img></li>
                </div>
                
                <li><a href="/food">Food</a></li>
                <li><a href="/drinks">Drinks</a></li>
                <li><a href="/snacks">Snacks</a></li>
            </ul>
           
        </div>
    )
}
export default Navbar;

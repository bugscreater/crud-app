import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  

    return (
        <div>

            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">Patient record</a>
                    <Link  to = "/records">
                    <button type="button" class="btn btn-success">View records</button>
                    </Link>
                </div>

            </nav>
            

           



        </div>


    )
}

export default Navbar

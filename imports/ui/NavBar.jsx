import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNavBar">
    <div className="container">
      <Link className="navbar-brand" id="oi" to='/projects'>Open Innovation</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/projects'>Proyectos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/ideas'>Oportunidades</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/projects/create'>Crear Proyecto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/ideas/create'>Crear oportunidad</Link>
          </li>
          {/*<li className="nav-item" style={{textAlign:'left'}}>*/}
            {/*<div id="loginWrapper" className="pull-left">*/}
              {/*/!*<AccountsUIWrapper className="dropdown-menu-left !important" style={{position: 'static'}}/>*!/*/}
            {/*</div>*/}
          {/*</li>*/}
        </ul>
      </div>
    </div>
  </nav>
);

$(document).on('scroll', function (e) {
  let op = 1 - ($(document).scrollTop() / 5000);
  if (op > 0.65)
    $('#mainNavBar').css('opacity', op);
});

export default NavBar;
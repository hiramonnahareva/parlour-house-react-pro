import React from 'react';
// import {IoLocationSharp} from 'react-icons/Io';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-secondary text-base-100">
  <div>
    {/* <IoLocationSharp></IoLocationSharp> */}
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="text-2xl font-bold">Company</span> 
    <a className="link link-hover">About</a> 
    <a className="link link-hover">Project</a> 
    <a className="link link-hover">Our team</a> 
    <a className="link link-hover">Trems Condition</a>
    <a className="link link-hover">Submit list</a>
  </div> 
  <div>
    <span className="text-2xl font-bold">Quick Links</span> 
    <a className="link link-hover">Quick  Links</a> 
    <a className="link link-hover">Rentals</a> 
    <a className="link link-hover">Sales</a> 
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Our bolg</a>
  </div> 
  <div>
    <span className="text-2xl font-bold">About</span>
    <a className="link link-hover">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Praesentium eos est sapiente necessitatibus!  <br /> Fugiat et alias eum enim doloremque sit porro quos animi culpa?</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;
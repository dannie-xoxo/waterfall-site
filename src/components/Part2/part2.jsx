import React from 'react';
import '../Part2/part2.css';
import angel from '../images/angel.jpg'
import jog from '../images/jog.jpg'
import victoria from '../images/victoria.jpg';
import niagra from '../images/niagra.jpg';
import { BiRightArrowAlt } from 'react-icons/bi';
function Part2() {
    return ( 
        <>
        <div className="container2">
            <h1 className="head">Waterfall Trip Ideas</h1>
            <div className="img-cont">
            <figure className="cont1">
                <img src={angel} alt="" />
                <figcaption>
                <h3 className="feat">Feautured Destination</h3>
                <h1 className="heading">Angel Falls</h1>
                <div className="line"></div>
                  <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Magni iusto dolores maiores ipsa blanditiis quam deserunt voluptatum officia corporis, 
                omnis distinctio facilis illo a explicabo eos, ad, rem sequi eveniet consequuntur
                 necessitatibus similique quas sit vitae veniam. Molestias beatae aliquam nam eos nihil,
                 illo laudantium rem temporibus quis reiciendis tempore!<br/>
                 <button className="btn">Discover Destination <span><BiRightArrowAlt/></span></button></p>
                </figcaption>
                </figure>
                
                 <figure className="cont2">
                <img src={jog} alt='' />
                <figcaption>
                <h3 className="feat">Feautured Destination</h3>
                <h1 className="heading">Jog Falls</h1>
                <div className="line"></div>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aut temporibus, nisi assumenda quod libero incidunt?
                  Doloribus asperiores praesentium inventore, pariatur
                   illo ea magni tenetur suscipit rerum quod soluta.
                    Maiores rerum id iste aliquid? Praesentium,
                    impedit. Obcaecati ducimus numquam dolorem magnam ea iste error, 
                neque vel, ut quaerat possimus voluptatem hic.<br/>
                <button className="btn">Discover Destination</button></p>
                </figcaption>
                </figure>

                </div>

                <div className="img-cont1">
            <figure className="cont3">
                <img src={victoria} alt="" />
                <figcaption>
                <h3 className="feat">Feautured Destination</h3>
                <h1 className="heading">Victoria Falls</h1>
                <div className="line"></div>
                  <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Magni iusto dolores maiores ipsa blanditiis quam deserunt voluptatum officia corporis, 
                omnis distinctio facilis illo a explicabo eos, ad, rem sequi eveniet consequuntur
                 necessitatibus similique quas sit vitae veniam. Molestias beatae aliquam nam eos nihil,
                 illo laudantium rem temporibus quis reiciendis tempore!<br/>
                 <button className="btn">Discover Destination</button></p>
                </figcaption>
                </figure>
                
                 <figure className="cont4">
                <img src={niagra} alt='' />
                <figcaption>
                <h3 className="feat">Feautured Destination</h3>
                <h1 className="heading">Niagra Falls</h1>
                <div className="line"></div>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aut temporibus, nisi assumenda quod libero incidunt?
                  Doloribus asperiores praesentium inventore, pariatur
                   illo ea magni tenetur suscipit rerum quod soluta.
                    Maiores rerum id iste aliquid? Praesentium,
                    impedit. Obcaecati ducimus numquam dolorem magnam ea iste error, 
                neque vel, ut quaerat possimus voluptatem hic.<br/>
                <button className="btn">Discover Destination</button></p>
                </figcaption>
                </figure>


                </div>
        </div>
        </>
     );
}

export default Part2;
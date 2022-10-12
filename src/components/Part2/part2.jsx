import React, { useState, useRef, useEffect } from 'react';
import '../Part2/part2.css';
import angel from '../images/angel.jpg'
import jog from '../images/jog.jpg'
import victoria from '../images/victoria.jpg';
import niagra from '../images/niagra.jpg';
import { BiRightArrowAlt } from 'react-icons/bi';
function Part2() {

  const inner= useRef()
 
    const[offsetY, setOffsetY] = useState(0);
    const[offsetHeight, setOffsetHeight] = useState(0);
    const[line, setLine] =useState(0)
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
        setOffsetHeight(inner.current.offsetHeight);
        setLine(inner.current.getBoundingClientRect())

    }
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            console.log(inner.current.getBoundingClientRect())
            console.log(inner.current.offsetHeight)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        },[])


  const[expand, setExpand] = useState('img1');
  const[ex, setEx] = useState('fig1');
  const[text, setText]= useState('text')
  const[cont, setCont]= useState('cont1')
  const[display, setDisplay] = useState('img-cont1')
  const[c, setC] = useState('container2')
  const[head, setHead] = useState('head')
  const[texts, setTexts] = useState('texts')

  const toggleHandler = () => {
    expand === 'img1'
   ? setExpand('img1 img-active')
   : setExpand('img1');

   ex === 'fig1'
   ? setEx('fig1 fig-active') 
   : setEx('fig1');

   text === 'text'
   ? setText('text text-active')
   : setText('text');

   cont === 'cont1'
   ? setCont('cont1 cont-active')
   : setCont('cont1');

   display === 'img-cont1'
   ? setDisplay('img-cont1 img-cont1-active')
   : setDisplay('img-cont1');

   c === 'container2'
   ? setC('container2 container2-active')
   : setC('container2');

   head === 'head'
   ? setHead('head head-active')
   : setHead('head')

   texts=== 'texts'
   ? setTexts('texts texts-active')
   : setTexts('texts');


  }
  const[expand1, setExpand1] = useState('img2');
  const[ex1, setEx1] = useState('fig2');
  const[text1, setText1]= useState('text')
  const[cont1, setCont1]= useState('cont2')
  

  
  

  const toggleHandler2 = () => {
    expand1 === 'img2'
   ? setExpand1('img2 img-active')
   : setExpand1('img2');

   ex1 === 'fig2'
   ? setEx1('fig2 fig-active') 
   : setEx1('fig2');

   text1 === 'text'
   ? setText1('text text-active')
   : setText1('text');

   cont1 === 'cont2'
   ? setCont1('cont2 cont-active')
   : setCont1('cont2');

   display === 'img-cont1'
   ? setDisplay('img-cont1 img-cont1-active')
   : setDisplay('img-cont1')

   c === 'container2'
   ? setC('container2 container2-active')
   : setC('container2')

   head === 'head'
   ? setHead('head head-active')
   : setHead('head')

   texts=== 'texts'
   ? setTexts('texts texts-active')
   : setTexts('texts');

  }
  
  const[expand2, setExpand2] = useState('img3');
  const[ex2, setEx2] = useState('fig3');
  const[text2, setText2]= useState('text')
  const[cont2, setCont2]= useState('cont3')
  const[display1, setDisplay1] = useState('img-cont')
  

  const toggleHandler3 = () => {
    expand2 === 'img3'
   ? setExpand2('img3 img-active')
   : setExpand2('img3');

   ex2 === 'fig3'
   ? setEx2('fig3 fig-active') 
   : setEx2('fig3');

   text2 === 'text'
   ? setText2('text text-active')
   : setText2('text');

   cont2 === 'cont3'
   ? setCont2('cont3 cont-active')
   : setCont2('cont3');

   display1 === 'img-cont'
   ? setDisplay1('img-cont img-cont-active')
   : setDisplay1('img-cont');

   c === 'container2'
   ? setC('container2 container2-active')
   : setC('container2')

   head === 'head'
   ? setHead('head head-active')
   : setHead('head')

   texts=== 'texts'
   ? setTexts('texts texts-active')
   : setTexts('texts');
   
  }
  const[expand3, setExpand3] = useState('img4');
  const[ex3, setEx3] = useState('fig4');
  const[text3, setText3]= useState('text')
  const[cont3, setCont3]= useState('cont4')
  

  const toggleHandler4 = () => {
    expand3 === 'img4'
   ? setExpand3('img4 img-active')
   : setExpand3('img4');

   ex3 === 'fig4'
   ? setEx3('fig4 fig-active') 
   : setEx3('fig4');

   text3 === 'text'
   ? setText3('text text-active')
   : setText3('text');

   cont3 === 'cont4'
   ? setCont3('cont4 cont-active')
   : setCont3('cont4');

   display1 === 'img-cont'
   ? setDisplay1('img-cont img-cont-active')
   : setDisplay1('img-cont');

   c === 'container2'
   ? setC('container2 container2-active')
   : setC('container2')

   head === 'head'
   ? setHead('head head-active')
   : setHead('head')

   texts=== 'texts'
   ? setTexts('texts texts-active')
   : setTexts('texts');
   
  }
  
  
 
    return ( 
        <>
        <div className= {c}>
            <h1 className={head}>Waterfall Trip Destinations</h1>
            <div className={display1}>
            <figure className= {cont}>
                <img className= {expand} src ={angel} alt="" />
                <figcaption className={ex}>
                <h3 className="feat">Feautured Destination</h3>
                <h1 className="heading">Angel Falls</h1>
                <div className="line" ref={inner} style ={{width:`${offsetY / (line.top + offsetHeight)* 9}%`}}></div>
                  <p className={text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Magni iusto dolores maiores ipsa blanditiis quam deserunt voluptatum officia corporis, 
                omnis distinctio facilis illo a explicabo eos, ad, rem sequi eveniet consequuntur
                 necessitatibus similique quas sit vitae veniam. Molestias beatae aliquam nam eos nihil,
                 illo laudantium rem temporibus quis reiciendis tempore!<br/><br/>
                 <p className={texts}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Dolore dolor numquam facere dignissimos optio deleniti consectetur 
                 facilis commodi sit maiores tempora obcaecati accusantium animi nostrum at quisquam sunt,
                  maxime incidunt! Voluptatem, minus. Rerum optio labore necessitatibus quaerat exercitationem<br/><br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Quo nisi harum voluptatem facere ut ad veritatis deleniti et,
                    ipsa enim voluptates pariatur blanditiis! Rerum ad quibusdam fuga ab! Tempora,
                     expedita minus? Voluptates ullam laborum soluta asperiores reprehenderit, laboriosam tempora hic.
                      Quasi at nihil qui hic officiis necessitatibus doloribus, dolorem magnam.<br/><br/>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Cumque voluptatibus commodi porro aut, pariatur ipsum rerum incidunt soluta!
                       Assumenda hic dolorum voluptates similique iste facilis aspernatur unde maxime eaque porro?</p><br/>
                 <button className="btn" onClick={toggleHandler}>Discover Destination <span><BiRightArrowAlt/></span></button></p>
                </figcaption>
                </figure>
                 
                 <figure className={cont1}>
                 <img className={expand1} src={jog} alt='' />
                <figcaption className= {ex1}>
                <h3 className="feat">Feautured Destination</h3>
                <h1 className="heading">Jog Falls</h1>
                <div className="line"ref={inner} style ={{width:`${offsetY / (line.top + offsetHeight)* 9}%`}}></div>
                <p className={text1}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aut temporibus, nisi assumenda quod libero incidunt?
                  Doloribus asperiores praesentium inventore, pariatur
                   illo ea magni tenetur suscipit rerum quod soluta.
                    Maiores rerum id iste aliquid? Praesentium,
                    impedit. Obcaecati ducimus numquam dolorem magnam ea iste error, 
                neque vel, ut quaerat possimus voluptatem hic.<br/><br/>
                <p className={texts}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Dolore dolor numquam facere dignissimos optio deleniti consectetur 
                 facilis commodi sit maiores tempora obcaecati accusantium animi nostrum at quisquam sunt,
                  maxime incidunt! Voluptatem, minus. Rerum optio labore necessitatibus quaerat exercitationem<br/><br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Quo nisi harum voluptatem facere ut ad veritatis deleniti et,
                    ipsa enim voluptates pariatur blanditiis! Rerum ad quibusdam fuga ab! Tempora,
                     expedita minus? Voluptates ullam laborum soluta asperiores reprehenderit, laboriosam tempora hic.
                      Quasi at nihil qui hic officiis necessitatibus doloribus, dolorem magnam.<br/><br/>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Cumque voluptatibus commodi porro aut, pariatur ipsum rerum incidunt soluta!
                       Assumenda hic dolorum voluptates similique iste facilis aspernatur unde maxime eaque porro?</p><br/>
                <button className="btn" onClick={toggleHandler2}>Discover Destination <span><BiRightArrowAlt/></span></button></p>
                </figcaption>
                </figure>

                </div>

                <div className={display}>
            <figure className={cont2}>
            <img  className={expand2} src={victoria} alt="" />
                <figcaption className={ex2}>
                <h3 className="feat">Feautured Destination</h3>
                <h1 className="heading">Victoria Falls</h1>
                <div className="line" ref={inner} style ={{width:`${offsetY / (line.top + offsetHeight)* 9}%`}}></div>
                  <p className={text2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Magni iusto dolores maiores ipsa blanditiis quam deserunt voluptatum officia corporis, 
                omnis distinctio facilis illo a explicabo eos, ad, rem sequi eveniet consequuntur
                 necessitatibus similique quas sit vitae veniam. Molestias beatae aliquam nam eos nihil,
                 illo laudantium rem temporibus quis reiciendis tempore!<br/><br/>
                 <p className={texts}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Dolore dolor numquam facere dignissimos optio deleniti consectetur 
                 facilis commodi sit maiores tempora obcaecati accusantium animi nostrum at quisquam sunt,
                  maxime incidunt! Voluptatem, minus. Rerum optio labore necessitatibus quaerat exercitationem<br/><br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Quo nisi harum voluptatem facere ut ad veritatis deleniti et,
                    ipsa enim voluptates pariatur blanditiis! Rerum ad quibusdam fuga ab! Tempora,
                     expedita minus? Voluptates ullam laborum soluta asperiores reprehenderit, laboriosam tempora hic.
                      Quasi at nihil qui hic officiis necessitatibus doloribus, dolorem magnam.<br/><br/>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Cumque voluptatibus commodi porro aut, pariatur ipsum rerum incidunt soluta!
                       Assumenda hic dolorum voluptates similique iste facilis aspernatur unde maxime eaque porro?</p><br/>
                 <button className="btn" onClick={toggleHandler3}>Discover Destination <span><BiRightArrowAlt/></span></button></p>
                </figcaption>
                </figure>
                
                 <figure className={cont3}>
                 <img className={expand3} id='niagra' src={niagra} alt='' />
                <figcaption className={ex3}>
                <h3 className="feat">Feautured Destination</h3>
                <h1 className="heading">Niagara Falls</h1>
                <div className="line" ref={inner} style ={{width:`${offsetY / (line.top + offsetHeight)* 9}%`}}></div>
                <p className={text3}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aut temporibus, nisi assumenda quod libero incidunt?
                  Doloribus asperiores praesentium inventore, pariatur
                   illo ea magni tenetur suscipit rerum quod soluta.
                    Maiores rerum id iste aliquid? Praesentium,
                    impedit. Obcaecati ducimus numquam dolorem magnam ea iste error, 
                neque vel, ut quaerat possimus voluptatem hic.<br/><br/>
                <p className={texts}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Dolore dolor numquam facere dignissimos optio deleniti consectetur 
                 facilis commodi sit maiores tempora obcaecati accusantium animi nostrum at quisquam sunt,
                  maxime incidunt! Voluptatem, minus. Rerum optio labore necessitatibus quaerat exercitationem<br/><br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Quo nisi harum voluptatem facere ut ad veritatis deleniti et,
                    ipsa enim voluptates pariatur blanditiis! Rerum ad quibusdam fuga ab! Tempora,
                     expedita minus? Voluptates ullam laborum soluta asperiores reprehenderit, laboriosam tempora hic.
                      Quasi at nihil qui hic officiis necessitatibus doloribus, dolorem magnam.<br/><br/>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Cumque voluptatibus commodi porro aut, pariatur ipsum rerum incidunt soluta!
                       Assumenda hic dolorum voluptates similique iste facilis aspernatur unde maxime eaque porro?</p><br/>
                <button className="btn" onClick={toggleHandler4}>Discover Destination <span><BiRightArrowAlt/></span></button></p>
                </figcaption>
                </figure>


                </div>
        </div>
        </>
     );
}

export default Part2;
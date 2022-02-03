
import React from "react";
import KindData from "./components/kindData";
import ProductData from "./components/productData";
import Gender from "./components/genderData";
import { Link } from "react-router-dom";


function Landing({gender}){
    if(!{gender}){
        gender="men";
    }
    
    return(
    
    <main>
        <React.StrictMode>
    
        <style id="style1"></style>
        <style id="style2"></style>
        
        <header>
    
            <section id="first-block">
                <div id="menu-icon-container">
                    <i className="fa fa-bars" id="menu-icon"></i>
                </div>
                <div className="title" id="title">
                    <h1>NexCorp</h1>
                <Gender />
    
                </div>
            </section>
            <section id="second-block">
                <div id="second-header">
                    <div className="dropdown">
                        <p className="dropbtn text-size-small_3 text-color-lightgrey">výprodej</p>
                        <div className="select-area"></div>
                        <div className="arrow-up"></div>
                        <div className="dropdown-content">
                            <div className="dropdown-content-units">
                                <p className="dropdown-content-title">
                                    Kategorie</p>
                                <div className="dropdown-content-text">
                                    <a href="#">bundy</a>
                                    <a href="#">šaty</a>
                                    <a href="#">trička</a>
                                    <a href="#">trička</a>
                                </div>
                            </div>
                            <div className="dropdown-content-units">
                                <p className="dropdown-content-title">
                                    Značky</p>
                                <div className="dropdown-content-text">
                                    <a href="#">puma</a>
                                    <a href="#">vans</a>
                                    <a href="#">adidas</a>
                                    <a href="#">boss</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <p className="dropbtn text-size-small_3 text-color-lightgrey">outfity</p>
                        <div className="select-area"></div>
                        <div className="arrow-up"></div>
                        <div className="dropdown-content">
                            <div className="dropdown-content-units">
                                <p className="dropdown-content-title">
                                    Kategorie</p>
                                <div className="dropdown-content-text">
                                    <a href="#">bundy</a>
                                    <a href="#">šaty</a>
                                    <a href="#">trička</a>
                                    <a href="#">trička</a>
                                </div>
                            </div>
                            <div className="dropdown-content-units">
                                <p className="dropdown-content-title">
                                    Značky</p>
                                <div className="dropdown-content-text">
                                    <a href="#">puma</a>
                                    <a href="#">vans</a>
                                    <a href="#">adidas</a>
                                    <a href="#">boss</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <p className="dropbtn text-size-small_3 text-color-lightgrey">sport</p>
                        <div className="select-area"></div>
                        <div className="arrow-up"></div>
                        <div className="dropdown-content">
                            <div className="dropdown-content-units">
                                <p className="dropdown-content-title">
                                    Kategorie</p>
                                <div className="dropdown-content-text">
                                    <a href="#">bundy</a>
                                    <a href="#">šaty</a>
                                    <a href="#">trička</a>
                                    <a href="#">trička</a>
                                    <a href="#">outdor</a>
                                    <a href="#">fitness</a>
                                    <a href="#">jóga</a>
                                </div>
                            </div>
                            <div className="dropdown-content-units">
                                <p className="dropdown-content-title">
                                    Značky</p>
                                <div className="dropdown-content-text">
                                    <a href="#">puma</a>
                                    <a href="#">vans</a>
                                    <a href="#">adidas</a>
                                    <a href="#">boss</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <p className="dropbtn text-size-small_3 text-color-lightgrey">doplňky</p>
                        <div className="select-area"></div>
                        <div className="arrow-up"></div>
                        <div className="dropdown-content">
                            <div className="dropdown-content-units">
                                <p className="dropdown-content-title">
                                    Kategorie</p>
                                <div className="dropdown-content-text">
                                    <a href="#">bundy</a>
                                    <a href="#">šaty</a>
                                    <a href="#">trička</a>
                                    <a href="#">trička</a>
                                </div>
                            </div>
                            <div className="dropdown-content-units">
                                <p className="dropdown-content-title">
                                    Značky</p>
                                <div className="dropdown-content-text">
                                    <a href="#">puma</a>
                                    <a href="#">vans</a>
                                    <a href="#">adidas</a>
                                    <a href="#">boss</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="mobile-menu">
    
                <div id="menu-components">
                    <i className="fa fa-times" id="cross-icon" aria-hidden="true"></i>
                    <div className="mobile-menu-main">
                        <div className="mobile-menu-main-unit">
                            <p className="mobile-menu-main-title">
                                Kategorie</p>
                            <div className="mobile-menu-main-text">
                                <a href="">
                                    výprodej
                                </a>
                                <a href="">
                                    outfity
                                </a>
                                <a href="">
                                    sport
                                </a>
                                <a href="">
                                    doplňky
                                </a>
                            </div>
                        </div>
                        <div className="mobile-menu-unit">
                            <p className="mobile-menu-main-title">
                                Značky</p>
                            <div className="mobile-menu-main-text">
                                <a href="">
                                    puma
                                </a>
                                <a href="">
                                    addidas
                                </a>
                                <a href="">
                                    vans
                                </a>
                                <a href="">
                                    jordan
                                </a>
                            </div>
                        </div>
                    </div>
    
                </div>
            </section>
    
        </header>
        <section id="third-block">
            <div id="slider">
                <div className="slider-unit">
                    <article className="img-container jacket" id="img-container1" >
                        <div className="img-gradient"></div>
    
    
                        <div className="informace-sekce">
                            <h4>kabáty</h4>
                            <h1>Teplé kabáty do zimy</h1>
                            <div className="button1">
                                <a href="">
                                    <p>přejít</p>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="slider-unit">
                    <article className="img-container jacket" id="img-container2">
                        <div className="img-gradient"></div>
                    </article>
    
                    <div className="informace-sekce">
                        <h4>kalhoty</h4>
                        <h1>Teplé kalhoty do zimy</h1>
                        <div className="button1">
                            <a href="">
                                <p>přejít</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="slider-unit">
                    <article className="img-container jacket" id="img-container3" >
                        <div className="img-gradient"></div>
                    </article>
    
                    <div className="informace-sekce">
                        <h4>mikyny</h4>
                        <h1>Teplé mikyny do zimy</h1>
                        <div className="button1">
                            <a href="">
                                <p>přejít</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="slider-unit">
                    <article className="img-container jacket" id="img-container4" >
                        <div className="img-gradient"></div>
                    </article>
    
                    <div className="informace-sekce">
                        <h4>kraťasy</h4>
                        <h1>Teplé kraťasy do zimy</h1>
                        <div className="button1">
                            <a href="">
                                <p>přejít</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="slider-unit">
                    <article className="img-container jacket" id="img-container5" >
                        <div className="img-gradient"></div>
                    </article>
    
                    <div className="informace-sekce">
                        <h4>džíny</h4>
                        <h1>Teplé džíny do zimy</h1>
                        <div className="button1">
                            <a href="">
                                <p>přejít</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    
            <div id="button-change">
                <p>&gt;</p>
            </div>
        </section>
    
        <section id="fourth-block" className="paragraph">
            <div className="favourite-category" id="favourite-category">
                <h2>Oblíbené kategorie</h2>
            </div>
            <div className="topkategorie paragraph-content">
            <KindData gender={gender} />
    
            </div>
        </section>
        <section id="fifth-block" className="paragraph">
            <div className="img-of-featured">
    
    
            </div>
            <div className="article-parent">
                <article>
                    <p className="motto">Off the wall!</p>
                    <h1>VANS</h1>
                    <div className="button2">
                        <a href="">
                            <p>přejít</p>
                        </a>
                    </div>
                </article>
            </div>
        </section>
        <section className="paragraph" id="sixth-block">
            <div className="favourite-category">
                <h2>Oblíbené značky</h2>
            </div>
            <div className="favourite-category-desc">
                <p className="paragraph-content">Tyto značky si nesmíš nechat ujít.</p>
            </div>
            <div className="favourite-brands paragraph-content">
                <div id="favourite-brands-hidden">
    
                    <article className="favourite-brands-unit">
                        <div className="favourite-brands-unit-hover-gradient"></div>
    
                        <div className="img-container jacket brand-images" ></div>
                        <div className="favourite-brands-unit-text">
                            <p>own the floor</p>
                            <h2>nike</h2>
                        </div>
    
                    </article>
                    <article className="favourite-brands-unit">
                        <div className="favourite-brands-unit-hover-gradient"></div>
    
                        <div className="img-container brand-images jacket"  ></div>
                        <div className="favourite-brands-unit-text">
                            <p>own the floor</p>
                            <h2>nike</h2>
                        </div>
    
                    </article>
                    <article className="favourite-brands-unit">
                        <div className="favourite-brands-unit-hover-gradient"></div>
    
                        <div className="img-container brand-images example2"  ></div>
                        <div className="favourite-brands-unit-text">
                            <p>own the floor</p>
                            <h2>nike</h2>
                        </div>
    
                    </article>
                    <article className="favourite-brands-unit">
                        <div className="favourite-brands-unit-hover-gradient"></div>
    
                        <div className="img-container brand-images example2" ></div>
                        <div className="favourite-brands-unit-text">
                            <p>own the floor</p>
                            <h2>RENIS</h2>
                        </div>
    
                    </article>
                    <article className="favourite-brands-unit">
                        <div className="favourite-brands-unit-hover-gradient"></div>
    
                        <div className="img-container brand-images example2" ></div>
                        <div className="favourite-brands-unit-text">
                            <p>own the floor</p>
                            <h2>RENIS</h2>
                        </div>
    
                    </article>
                    <article className="favourite-brands-unit">
                        <div className="favourite-brands-unit-hover-gradient"></div>
    
                        <div className="img-container brand-images example2" ></div>
                        <div className="favourite-brands-unit-text">
                            <p>own the floor</p>
                            <h2>RENIS</h2>
                        </div>
    
                    </article>
                    <article className="favourite-brands-unit">
                        <div className="favourite-brands-unit-hover-gradient"></div>
    
                        <div className="img-container brand-images example2" ></div>
                        <div className="favourite-brands-unit-text">
                            <p>own the floor</p>
                            <h2>DENIS</h2>
                        </div>
    
                    </article>
                    <article className="favourite-brands-unit">
                        <div className="favourite-brands-unit-hover-gradient"></div>
    
                        <div className="img-container brand-images example2" ></div>
                        <div className="favourite-brands-unit-text">
                            <p>own the floor</p>
                            <h2>JENIS</h2>
                        </div>
    
                    </article>
                    <article className="favourite-brands-unit">
                        <div className="favourite-brands-unit-hover-gradient"></div>
    
                        <div className="img-container brand-images example2" ></div>
                        <div className="favourite-brands-unit-text">
                            <p>own the floor</p>
                            <h2>ALAVIS</h2>
                        </div>
    
                    </article>
                </div>
            </div>
            <div className="button-change" id="button-change1">
                <p>&gt;</p>
            </div>
            <div className="button-change" id="button-change2">
            <p>&lt;</p>
            </div>
        </section>
        <footer></footer>
        
        </React.StrictMode>
    
        <ProductData gender={gender} />
    
    
    </main>
    )}
    export default Landing;
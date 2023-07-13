import React from "react";
import img1 from "../assets/imgs/img1.JPG";
import img2 from "../assets/imgs/img2.JPG";
import img3 from "../assets/imgs/img3.JPG";

const CardPage = () => {
    let txt = ["This is a heading One","Some quick example text to build on the card title and make up the bulk of the card's content.", "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."]
    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <h1>Card Page</h1>
            </div>

            <div className="col-12 col-sm-6 col-md-5 p-5 dark">
                <div className="card crd1 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card1 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card2 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card3 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card4 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card5 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card icard1 my-5"><img src={img1} className="card-img-top" alt="A Beautiful flower image" /><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card icard2 my-5"><img src={img3} className="card-img-end" alt="A Beautiful flower image" /><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card icard3 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div><img src={img1} className="card-img-bottom" alt="A Beautiful flower image" /></div>
            </div>
            <div className="col-12 col-sm-6 col-md-5 p-5 light">
                <div className="card crd1 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card1 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card2 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card3 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card4 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card card5 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card icard1 my-5"><img src={img1} className="card-img-top" alt="A Beautiful flower image" /><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card icard2 my-5"><img src={img3} className="card-img-end" alt="A Beautiful flower image" /><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
                <div className="card icard3 my-5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div><img src={img1} className="card-img-bottom" alt="A Beautiful flower image" /></div>
            </div>
            <div className="col-12 col-lg-6 mt-3 light">
                <div className="card icard4 my-5" style={{backgroundImage: `url(${img2})`}}><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p><p>{txt[1]}</p>
                </div></div>
            </div>
            <div className="col-12 col-lg-6 mt-3 dark">
                <div className="card icard4 my-5" style={{backgroundImage: `url(${img2})`}}><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p><p>{txt[1]}</p>
                </div></div>
            </div>
        </div>
    );
}

export default CardPage;
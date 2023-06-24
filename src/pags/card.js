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

            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card card1"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card card2"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card card3"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card card4"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card card5"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card card6"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card card7"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card card8"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card card9"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card icard1"><img src={img1} className="card-img-top" alt="A Beautiful flower image" /><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card icard2"><img src={img3} className="card-img-end" alt="A Beautiful flower image" /><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div></div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-3">
                <div className="card icard3"><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p>
                </div><img src={img1} className="card-img-bottom" alt="A Beautiful flower image" /></div>
            </div>
            <div className="col-12 col-lg-6 mt-3">
                <div className="card icard9" style={{backgroundImage: `url(${img2})`}}><div className="card-body">
                        <h3>{txt[0]}</h3><p>{txt[2]}</p><p>{txt[1]}</p>
                </div></div>
            </div>
        </div>
    );
}

export default CardPage;
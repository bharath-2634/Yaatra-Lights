import React from "react";
import "./Mission.css";
import missionImg from "../../../assets/mission_yaatra.png";
import one from "../../../assets/one.png";
import two from "../../../assets/two.png";
import three from "../../../assets/three.png";
import four from "../../../assets/four.png";

const Mission = () => {
    return(
        <section className="section__mission">
            <div className="mission__yaatraImg">
                <img src={missionImg} alt="Yaatra Lights" className="missionImg" />
                <h2 className="mission__heading">Missions of <span>Yaatra</span></h2>
            </div>
            <div className="mission__container">
                <div className="missionBox">
                    <img src={one} alt="Yaatra Lights" className="mission__img" />
                    <p className="mission__description"><span>Innovation in Lighting Technology</span>To pioneer innovative lighting solutions that improve the quality of life for our customers while setting new standards in energy efficiency and sustainability.</p>
                </div>

                <div className="missionBox">
                    <img src={two} alt="Yaatra Lights" className="mission__img img2" />
                    <p className="mission__description"><span>Innovation in Lighting Technology</span>To pioneer innovative lighting solutions that improve the quality of life for our customers while setting new standards in energy efficiency and sustainability.</p>
                </div>

                <div className="missionBox">
                    <img src={three} alt="Yaatra Lights" className="mission__img" />
                    <p className="mission__description"><span>Innovation in Lighting Technology</span>To pioneer innovative lighting solutions that improve the quality of life for our customers while setting new standards in energy efficiency and sustainability.</p>
                </div>

                <div className="missionBox">
                    <img src={four} alt="Yaatra Lights" className="mission__img" />
                    <p className="mission__description"><span>Innovation in Lighting Technology</span>To pioneer innovative lighting solutions that improve the quality of life for our customers while setting new standards in energy efficiency and sustainability.</p>
                </div>
            </div>
        </section>
    );
}

export default Mission;
import React, { useEffect } from "react";

import "./Upoem.css";

import SectionTitle from "../SectionTitle/sectionTitle";

import EkMotaHathi from '../Assets/Poems/UrduPoems/Ek_Mota_Hathi.mp4'
import MainTota from '../Assets/Poems/UrduPoems/Main_Tota.mp4'
import ChadiyaRani from '../Assets/Poems/UrduPoems/Chadiya_Rani.mp4'
import BulbulKaBcha from '../Assets/Poems/UrduPoems/Bulbul_ka_bcha.mp4'
import LakdiKeKathi from '../Assets/Poems/UrduPoems/Lakdi_Ke_Kathi.mp4'
import NaniTeriMoreNeKoMore from '../Assets/Poems/UrduPoems/Nani_Teri_More.mp4'

import AOS from "aos";
import "aos/dist/aos.css";

function UrduPoem() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="urduPoemContainer" id="urduPoem">
      <SectionTitle title="Urdu Poem" />
      <div className="urduPoems">
        <div data-aos="fade-up">
          <h3>Ek Mota Hathi Jhoom ke Chala</h3>
          <video src={EkMotaHathi} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Main Tota Main Tota</h3>
          <video src={MainTota} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Chidiya Rani Badi Sayani</h3>
          <video src={ChadiyaRani} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Bulbul Ka Bacha</h3>
          <video src={BulbulKaBcha} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Lakdi Ki kathi Kathi pe Ghoda</h3>
          <video src={LakdiKeKathi} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Mani Teri Morni ko Mor le Gaye</h3>
          <video src={NaniTeriMoreNeKoMore} height={200} width={350} controls></video>
        </div>
      </div>
    </div>
  );
}

export default UrduPoem;

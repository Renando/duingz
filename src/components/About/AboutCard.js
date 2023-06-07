import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}> 
            Halo semuanya!, Perkenalkan nama saya <span className="purple">Renando </span>
            Dari <span className="purple"> Indaramayu, Jawa Barat.</span>
            <br /> dan saya adalah seorang editor
            <br />
            Saya memiliki keahlian dalam mengedit berbagai jenis konten seperti tulisan, video, dan gambar.  Saya sangat antusias dalam membantu Anda mencapai hasil terbaik untuk proyek Anda.
            <br />
            <br />
            Open Jasa :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Intro & outro Youtube
            </li>
            <li className="about-activity">
              <ImPointRight /> 2D & 3D Intro 
            </li>
            <li className="about-activity">
              <ImPointRight /> Logo desainer
            </li>
<li className="about-activity">
              <ImPointRight /> Poster
            </li>
<li className="about-activity">
              <ImPointRight /> Brosur
            </li>
<li className="about-activity">
              <ImPointRight /> Logo desainer
            </li>
<li className="about-activity">
              <ImPointRight /> Edit Foto & video
            </li>
<li className="about-activity">
              <ImPointRight /> Grading foto & Video
            </li>
<li className="about-activity">
              <ImPointRight /> Preset Lightroom buatan saya
            </li>
<li className="about-activity">
              <ImPointRight /> Restorasi Foto
            </li>
<li className="about-activity">
              <ImPointRight /> Logo desainer
            </li>
<li className="about-activity">
              <ImPointRight /> All Desain foto/video
            </li>
<li className="about-activity">
              <ImPointRight /> Buat website
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Kreativitas tanpa batas, Harga seikhlas hatimu"{" "}
          </p>
          <footer className="blockquote-footer">Renando</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import "../../reset.css";
import "./Sidebar.css";
import logoSpotify from "../../assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faGlobe,
  faBook,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar_navigation">
        <div className="logo_container">
          <a href="">
            <img src={logoSpotify} alt="Logo do Spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a href="">
              <span className="fa">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="fa">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="library">
        <div className="library_content">
          <button className="library_button">
            <span className="fa fas">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span>Sua Biblioteca</span>
          </button>
          <span className="fa fas">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>

        <section className="section-playlist">
          <div className="section-playlist_content">
            <span className="text title">Crie sua primeira Playlist!</span>
            <span className="text subtitle">É fácil, vamos te ajudar.</span>
            <button className="section-playlist_button">
              <span>Criar Playlist</span>
            </button>
          </div>
        </section>

        <section className="section-podcast">
          <div className="section-podcast_content">
            <span className="text title">Que tal seguir um Podcast novo?</span>
            <span className="text subtitle">Avisaremos sobre novos episódios.</span>
            <button className="section-podcast_button">
              <span>Explore Podcasts</span>
            </button>
          </div>
        </section>

        <div className="sidebar_pt">
          <a href="">Legal</a>
          <a href="">Centro de Privacidade</a>
          <a href="">Política de Privacidade</a>
          <a href="">Cookies</a>
          <a href="">Sobre Anúncios</a>
          <a href="">Acessibilidade</a>
          <a href="">Notice at Collection</a>
          <a href="">Your Privacy Choices</a>
        </div>

        <div className="languages">
          <button className="languages_button">
            <span className="fa">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

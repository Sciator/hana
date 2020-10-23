import React from "react";
import { LocText } from "../components/LocText";

type TStockExchangePageProps = {

};

export const StockExchangePage: React.FC<TStockExchangePageProps> = () => {

  return <>
    <section className="section-filter-menu">
      <header className="section-filter-menu__buttons">
        <h2>/*display None*/</h2>
        <button>
          <LocText
            en="Search"
            cz="Vyhledávání"
          />
        </button>
        <button>
          <LocText
            en="Add an event"
            cz="Přidat akci"
          />
        </button>
      </header>
      <div className="section-filter-menu__filters">
        <div className="input-filters">
          <div className="menu-filter date-filter">
            <label htmlFor="price-from">
              <LocText
                en="Price from"
                cz="Cena od"
              />
            </label>
            <input type="date" id="price-from" name="price-from" />
            <label htmlFor="price-to">
              <LocText
                en="- to"
                cz="- do"
              />
            </label>
            <input type="date" id="price-to" name="price-to" />
          </div>
          <div className="menu-filter">
            <label htmlFor="place">
              <LocText
                en="Place"
                cz="Místo"
              />
            </label>
            <input type="text" id="place" name="place" />
          </div>
          <div className="menu-filter">
            <label htmlFor="area">
              <LocText
                en="Area"
                cz="Okolí"
              />
            </label>
            <input type="text" id="area" name="area" />
          </div>
        </div>
        <div className="type-filters">
          <label>
            <LocText
              en="Category"
              cz="Kategorie"
            />
          </label>
          <input type="radio" name="event-type">
            <LocText
              en="Toys"
              cz="Hračky"
            />
          </input>
          <input type="radio" name="event-type">
            <LocText
              en="Clothes"
              cz="Oblečení"
            />
          </input>
          <input type="radio" name="event-type">
            <LocText
              en="Books"
              cz="Knihy"
            />
          </input>
          <input type="radio" name="event-type">
            <LocText
              en="Machines"
              cz="Stroje"
            />
          </input>
        </div>
      </div>
    </section>
    <section className="section-sort">
      //sorting options
    </section>
    <main>
      <article className="tile">
        <header>
          <img src="../images/no_image.png" alt="no-image-yet" />
          <h3>Stará váza</h3>
        </header>
        <p>
          Stará čínska porcelánová váza, značená, výška 28 cm, priemer v najširšej časti 20 cm, bez poškodení, vitrínový stav.
        </p>
        <footer className="tile-footer">
          <div className="tile-footer__info">
            <div className="tile-footer-info-row">
              <p>Email</p>
              <p>Hala někde ve městě</p>
            </div>
            <div className="tile-footer-info-row">
              <p>Jméno</p>
              <p>
                Tomáš
              </p>
              <div className="rating user-rating">

              </div>
            </div>
          </div>
          <div className="tile-footer__price">
            <p>
              <LocText
                en="more info"
                cz="více informací"
              />
            </p>
            <p>30 kč</p>
          </div>
        </footer>
      </article>
    </main>
  </>;
};

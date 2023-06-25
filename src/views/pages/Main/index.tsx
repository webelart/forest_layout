import { Fragment } from 'react';
import CoverCard from '../../components/CoverCard';

import './index.scss';

const menu = [
  { title: 'Contacts', id: 'contacts', link: '#' },
  { title: 'FAQ', id: 'faq', link: '#' }
]

const Main = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <nav className="header__navigation">
            <a href="#" className="header__logo">
              <h1>Travel Journal</h1>
            </a>
            <ul className="header__menu">
              {menu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <article>
        <section>
          <CoverCard
            title="African<br />forest"
            image="/image.jpg"
            subTitle="African forest tour"
            text={`An amazing history, stunning nature, and a high level of
            development make the country unique on the African continent.
            Two oceans, savannah, mountains, desert, rainforest and the
            rythms of African drums.`}
            link="#"
          />
        </section>
      </article>
    </Fragment>
  )
};

export default Main;
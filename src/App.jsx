import { useState } from "react";
import { episodeList } from "./data.js";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section>
          <p>Select the Episode from the Menu</p>
        </section>
      );
    }

    return (
      <section>
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  function EpisodeMenu() {
    return (
      <div>
        <h2>Episode Lists</h2>
        <ul className="roster">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeMenu />
        <EpisodeDetails />
      </main>
    </>
  );
  // TODO
}

import { Component, createSignal, lazy, Suspense } from 'solid-js';
import { loadPoints } from './LoadSampleData';
import { MapLibre } from './MapLibre';

export const [getViewState, setViewState] = createSignal({
  longitude: 11,
  latitude: 56,
  zoom: 5,
  pitch: 0,
  bearing: 0,
  transitionDuration: 0,
});

await loadPoints();

const App: Component = () => {
  return (
    <div>
      <MapLibre />
    </div>
  );
};

export default App;

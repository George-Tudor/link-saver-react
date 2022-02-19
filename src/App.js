import Link from './components/Link'

function App() {
  return (
    <div>
        <h1>Link Saver</h1>
        <Link text='NASA' location='https://nasa.gov' />
        <Link text='SpaceX' location='https://spacex.com' />
        <Link text='Space Weather Prediction Center' location='https://www.swpc.noaa.gov/' />
    </div>
  );
}

export default App;

import { useState } from 'react';
import styles from './PredictionForm.module.scss';
import { predictPrice } from '../../services/predictionModel';

const PredictionForm = () => {
  const [totsp, setTotsp] = useState('');
  const [livesp, setLivesp] = useState('');
  const [kitsp, setKitsp] = useState('');
  const [dist, setDist] = useState('');
  const [metrdist, setMetrdist] = useState('');
  const [walk, setWalk] = useState('');
  const [brick, setBrick] = useState('');
  const [floor, setFloor] = useState('');
  const [code, setCode] = useState('');
  const [result, setResult] = useState(0);

  const onButtonClickHandler = () => {
    setResult(predictPrice({ totsp, livesp, kitsp, dist, metrdist, walk, brick, floor, code }));
  };

  return (
    <>
      <form className={styles.form}>
        <input
          value={totsp}
          onChange={(event) => setTotsp(event.target.value)}
          title="totsp"
          type="text"
          placeholder="totsp..."
        />
        <input
          value={livesp}
          onChange={(event) => setLivesp(event.target.value)}
          title="livesp"
          type="text"
          placeholder="livesp..."
        />
        <input
          value={kitsp}
          onChange={(event) => setKitsp(event.target.value)}
          title="kitsp"
          type="text"
          placeholder="kitsp..."
        />
        <input
          value={dist}
          onChange={(event) => setDist(event.target.value)}
          title="dist"
          type="text"
          placeholder="dist..."
        />
        <input
          value={metrdist}
          onChange={(event) => setMetrdist(event.target.value)}
          title="metrdist"
          type="text"
          placeholder="metrdist..."
        />
        <input
          value={walk}
          onChange={(event) => setWalk(event.target.value)}
          title="walk"
          type="text"
          placeholder="walk..."
        />
        <input
          value={brick}
          onChange={(event) => setBrick(event.target.value)}
          title="brick"
          type="text"
          placeholder="brick..."
        />
        <input
          value={floor}
          onChange={(event) => setFloor(event.target.value)}
          title="floor"
          type="text"
          placeholder="floor..."
        />
        <input
          value={code}
          onChange={(event) => setCode(event.target.value)}
          title="code"
          type="text"
          placeholder="code..."
        />
        <button type="button" onClick={onButtonClickHandler}>
          OK
        </button>
      </form>
      <h1>RESULT: {result}</h1>
    </>
  );
};

export default PredictionForm;

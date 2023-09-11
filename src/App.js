import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [hue, setHue] = useState('undefined');
  const [luminosity, setLuminosity] = useState('undefined');
  const [color, setColor] = useState(
    randomColor({
      luminosity: luminosity,
      hue: hue,
    }),
  );
  const [boxSize, setBoxSize] = useState({
    width: '300px',
    height: '300px',
    lineHeight: '300px',
  });

  return (
    <div>
      <h1
        style={{
          fontFamily: 'verdana',
          textDecorationLine: 'underline',
          textDecorationStyle: 'wavy',
          textDecorationColor: 'dimgrey',
          color: color,
        }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          backgroundColor: color,
          width: boxSize.width,
          height: boxSize.height,
          borderRadius: '20px',
          color: 'dimgrey',
          textAlign: 'center',
          lineHeight: boxSize.lineHeight,
          fontStyle: 'bold',
          fontSize: '15px',
          fontFamily: 'monospace',
          marginLeft: '70px',
          transition: 'all 0.8s ease',
          WebkitTransition: 'all 0.8s ease',
          MozTransition: 'all 0.8s ease',
        }}
      >
        Generated Color: {color}
      </div>
      <br />
      <button
        style={{
          marginLeft: '175px',
          fontFamily: 'arial',
          fontSize: '20px',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: color,
          color: 'dimgrey',
          border: '0px',
          marginBottom: '20px',
        }}
        onClick={() =>
          setColor(
            randomColor({
              hue: hue,
              luminosity: luminosity,
            }),
          )
        }
      >
        Generate
      </button>
      <br />

      <div
        style={{
          marginLeft: '100px',
          fontFamily: 'monospace',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
        Hue:{' '}
        <input
          style={{ width: '100px' }}
          placeholder="blue"
          onChange={(event) => {
            const availableHue = [
              'red',
              'orange',
              'yellow',
              'green',
              'blue',
              'purple',
              'pink',
              'monochrome',
            ];
            if (
              availableHue.includes(event.currentTarget.value.toLowerCase())
            ) {
              setHue(event.currentTarget.value.toLowerCase());
              setColor(
                randomColor({
                  hue: event.currentTarget.value.toLowerCase(),
                  luminosity: luminosity,
                }),
              );
            }
          }}
        />
        <br />
        Luminosity:{' '}
        <input
          placeholder="light"
          style={{ width: '100px' }}
          onChange={(event) => {
            const availableLuminosity = ['dark', 'light', 'bright'];
            if (
              availableLuminosity.includes(
                event.currentTarget.value.toLowerCase(),
              )
            ) {
              setLuminosity(event.currentTarget.value.toLowerCase());
              setColor(
                randomColor({
                  hue: hue,
                  luminosity: event.currentTarget.value.toLowerCase(),
                }),
              );
            }
          }}
        />
        <br />
        Size: (WWWxHHH){' '}
        <input
          placeholder="300x300"
          style={{ width: '100px' }}
          onChange={(event) => {
            if (event.currentTarget.value.match(/[0-9]{3}x[0-9]{3}/)) {
              setBoxSize({
                width: event.currentTarget.value.slice(0, 3) + 'px',
                height: event.currentTarget.value.slice(4) + 'px',
                lineHeight: event.currentTarget.value.slice(0, 3) + 'px',
              });
            }
          }}
        />
      </div>
    </div>
  );
}

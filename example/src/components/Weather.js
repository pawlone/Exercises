import { useState, useEffect } from "react";

const getTemperatureObjs = (temps = [0]) => {
    let sumTemps = 0;
    temps.forEach(t => { sumTemps += t });
    let avg = sumTemps / temps.length;

    return temps.map(temp => {
        if (temp > avg) {
            return {
                color: "red",
                value: temp
            }
        }
        else {
            return {
                color: "black",
                value: temp
            }
        }
    });
}

const Temperature = ({id = 0,value = 0, colorVal = "black", action = () =>{}}) => {
    return (
        <button className="col btn border p-2 m-2" style={{ color: colorVal }} onClick={() => {action(id) }}>
            <span>{value} °C</span>
        </button>
    );
}

const Weather = ({ temperatures = [] }) => {

    //START - useState
    const [stateTemperatures, setTemperatures] = useState(() => {
        let initTemperatures = temperatures.map(temp => {
            return temp;
        })
        return getTemperatureObjs(initTemperatures);
    });

    const [stateAvgTemperature, setAvgTemperature] = useState(() =>{
        let sumTemps = 0;
        temperatures.forEach(t => sumTemps += t);
        let initAvgTemperature = sumTemps / temperatures.length;
        return initAvgTemperature;
    });
    //END - useState

    //START - useEffect
    useEffect(() => {
        let sumTemps = 0;
        stateTemperatures.forEach(t => sumTemps += t.value);
        setAvgTemperature(sumTemps / stateTemperatures.length);
    }, [stateTemperatures]);
    //END - useEffect

    const incrementDegrees = () => {
        setTemperatures((prevTemperatures) => {
            let newTemperatures = prevTemperatures.map(temp => {
                return temp.value + 1;
            });
            return getTemperatureObjs(newTemperatures);
        });
    }

    const incrementDegree = (id) => {
        setTemperatures((prevTemperatures) => {
            let newTemperatures = prevTemperatures.map(temp => {
                return prevTemperatures.indexOf(temp) === id ? temp.value + 1 : temp.value;
            })
            return getTemperatureObjs(newTemperatures);
        });
    }

    return (
        <div className="container">
            <div className="row">
                {
                    stateTemperatures.map((temp) =>
                        <Temperature id={stateTemperatures.indexOf(temp)} key={stateTemperatures.indexOf(temp)} value={temp.value} colorVal={temp.color} action={incrementDegree} />
                    )
                }
                <div className="col-12 text-center">
                    <button className="btn btn-outline-info" onClick={incrementDegrees}>Aggiungi gradi</button>
                </div>
                <div className="col-12 text-center">
                    <div className="p-2 m-2 bg-primary text-white">Temperatura media: {Math.floor(stateAvgTemperature)} °C</div>
                </div>
            </div>
        </div>
    );

}

export default Weather;
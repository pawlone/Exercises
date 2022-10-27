import { useState } from 'react'


const GetTemperatureObj = (temp = 0) => {
    if (temp > 20) {
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
}

const Temperature = (props) => {
    return (
        <div className="col border p-2 m-2" style={{ color: props.colorVal }}>
            <span>{props.value} °C</span>
        </div>
    );
}

const Weather = ({ temperatures = [] }) => {
    const [stateTemperatures, setTemperatures] = useState(() => {
        let intitTemperatures = temperatures.map((temp) => {
            return GetTemperatureObj(temp);
        });

        return intitTemperatures;
    });

    const incrementDegrees = () => {
        setTemperatures((prevTemperatures) => {
            let newTemperatures = prevTemperatures.map(temp => {
                return GetTemperatureObj(temp.value + 1)
            })
            return newTemperatures;
        })
    }

    return (
        <div className="container">
            <div className="row text-center">
                {
                    stateTemperatures.map((temp) =>
                        <Temperature key={"temp_" + stateTemperatures.indexOf(temp)} value={temp.value} colorVal={temp.color} />
                    )
                }
            </div>
            <div className="row text-center mt-5">
                <div className="col-12">
                    <button className="btn btn-outline-primary" onClick={incrementDegrees}>Aggiungi gradi</button>
                </div>
            </div>
        </div>

    );
};


export default Weather;
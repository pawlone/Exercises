import {useState} from 'react'

const Temperature = (props) => {
    return (
        <div className="col border p-2 m-2" style ={{color: props.colorVal}}>
            <span>{props.value} °C</span>
        </div>
    );
}

const Weather = ({ temperatures = [] }) => {
    const [stateTemperatures, setTemperatures] = useState(() => {
        let intitTemperatures = [];
        
        temperatures.map(temp => {
            if(temp > 20) {
                intitTemperatures.push({
                    color: "red",
                    value: temp
                })
            }
            else {
                intitTemperatures.push({
                    color: "black",
                    value: temp
                })
            }
        });
        return intitTemperatures;
    
    });

    return (
        <div className="row">
            {
                stateTemperatures.map((temp) =>
                    <Temperature key={"temp_" + temp.value} value={temp.value} colorVal={temp.color} />
                    )
            }
        </div>
    );
}

export default Weather;
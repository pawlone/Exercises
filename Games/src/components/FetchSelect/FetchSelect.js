import { useCategory } from "../Hooks/Custom";

const FetchSelect = ({ name = "", value = 0, onChange = () => { } }) => {
    const { result: dataList } = useCategory();
    if (dataList) {
        return (
            <select name="categoriesId" value={value} onChange={onChange} className="form-control">
                <option value={name}>--Seleziona Categoria--</option>
                {dataList.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        )
    }
    return (
        <>

        </>
    )
};

export default FetchSelect;

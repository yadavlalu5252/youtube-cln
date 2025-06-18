import Button from "./Button";


// const list = ["all","js", "cricket", "music"] // use this list and map into button
const ButtonList = () => {
    return (
        <div className="flex">
            <Button name="All"/>
            <Button name="Javasctipt"/>
            <Button name="Cricket"/>
            <Button name="Music"/>
            <Button name="India"/>
            <Button name="Live"/>
            <Button name="Russia"/>
            <Button name="Physics"/>
            <Button name="Engineering"/>
        </div>
    )
};

export default ButtonList;
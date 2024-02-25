const ImgInput = ({ call = () => { }, width, height }) => {
    return <input
        hidden
        accept="image/*"
        multiple
        type="file"
        onChange={(event) => {
            const file = event.target.files[0];
            console.log(file, event.target.files);
            const image = new Image();
            image.onload = () => {
                if (image.width === width && image.height === height)
                {
                    call(file);
                    event.target.value = null;
                }
                else
                    alert(`Please select an image with dimensions ${width}px by ${height}px.`);
            };

            image.src = URL.createObjectURL(file);
        }}
    />
}

export { ImgInput };
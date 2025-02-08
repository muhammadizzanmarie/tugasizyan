import  terdakwa  from "./model.js";

const getorang = (req, res) => {
    res.render("template/terdakwa/index", {
        data: terdakwa,
        judul: 'Data Kriminal'
    });
};

export { getorang };
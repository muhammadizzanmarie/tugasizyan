import  kriminal  from "./model.js";

const getTawanan = (req, res) => {
    res.render("template/kriminal/index", {
        data: kriminal,
        judul: 'Data Kriminal'
    });
};

export { getTawanan };

const properties=require("./properties")
const product=require("./product")
const category=require("./category")
const manufacture=require("./manufacture")

const db=require("../connector");

product.hasOne(properties);
product.belongsTo(category);

product.belongsToMany(manufacture,{
    through:"manufacture_product",
    foreignKey:"product_id",
    otherKey: "manufacture_id",
    timestamp:false
})
manufacture.belongsToMany(product,{
    through:"manufacture_product",
    foreignKey:"manufacture_id",
    otherKey: "product_id",
    timestamp:false
})

db.sync()
const DataTypes = require("sequelize").DataTypes;

function initModels(sequelize) {
  const banner = banner(sequelize, DataTypes);
  const cumrap = cumrap(sequelize, DataTypes);
  const datve = datve(sequelize, DataTypes);
  const ghe = ghe(sequelize, DataTypes);
  const hethongrap = hethongrap(sequelize, DataTypes);
  const lichchieu = lichchieu(sequelize, DataTypes);
  const nguoidung = nguoidung(sequelize, DataTypes);
  const phim = phim(sequelize, DataTypes);
  const rapphim = rapphim(sequelize, DataTypes);

  banner.belongsTo(phim, { as: "ma_phim", foreignKey: "ma_phim" });
  banner.belongsTo(phim, { as: "hinh_anh", foreignKey: "hinh_anh" });
  phim.hasMany(banner, { as: "ma_phim", foreignKey: "ma_phim" });
  phim.hasMany(banner, { as: "hinh_anh", foreignKey: "hinh_anh" });
  phim.hasMany(lichchieu, { as: "ma_phim", foreignKey: "ma_phim" });
  phim.hasMany(lichchieu, {
    as: "ngay_gio_chieu",
    foreignKey: "ngay_gio_chieu",
    otherKey: "ngay_khoi_chieu",
  });

  return {
    banner,
    cumrap,
    datve,
    ghe,
    hethongrap,
    lichchieu,
    nguoidung,
    phim,
    rapphim,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.defaults = initModels;

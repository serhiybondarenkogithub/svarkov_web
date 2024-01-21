const Category = require('../models/category');


exports.getIndex = (req, res, next) => {
	res.render("user/index", {

	});
};

exports.getCategoryPage = (req, res, next) => {
  Category.fetchAll(category => {
		const curr = category.find(c => c.id === req.url.substring(1));

    res.render(`user/category`, {
			description: curr.description,
			mainphoto: curr.mainphoto,
			name: curr.name,
      items: curr.items,
      pageTitle: curr.name,
      path: curr.id
    });
  });
};
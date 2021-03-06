var appKey = "b0d79659fafe27fe567c7086b2a2a816efe837b448d377183292b3f367cef80a";
var clientKey = "386d15b14d1383343384514850c7ef64b47e9f75a86f4ebfed21557835003c8e";
var ncmb = new NCMB(appKey, clientKey);
var Vegetables = ncmb.DataStore("Vegetables");
function postNohau() {
	var user_id = document.getElementById("user_id").value;
	var vegi_name = document.getElementById("vegi_name").value;
	var title = document.getElementById("title").value;
	var explain = document.getElementById("explain").value;
	var img = document.getElementById("img").value;
	var vegetables = new Vegetables();
	vegetables.set("fav", 0);
	vegetables.set("vegi_name", vegi_name);
	vegetables.set("title", title);
	vegetables.set("explain", explain);
	vegetables.set("img", img);
	vegetables.save()
		.then(function (obj) {
			console.log("保存");
			return obj.objectId;
		})
		.catch(function (err) {
			console.log("error");
		});
}

function countFav(objectId) {	//count
	// var fav = document.getElementById("fav").value;
	Vegetables.equalTo("objectId", objectId)
		.fetch()
		.then(function (vegetables) {
			// if (vagetables.count >= 0){
			// 	setResult(elementId, true, "success: "+ vagetables.count);
			// } else {
			// 	setResult(elementId, false, "error"+e);
			// }
			vegetables.setIncrement("fav", 1);
			vegetables.update();
		})
		.catch(function (err) {
			console.log("error");
		});
}

async function getNohau() {
	return  Vegetables.fetchAll()
	// 	.then(function (obj) {
	// 		return obj;
	// 		console.log("取得");
	// 	})
	// 	.catch(function (err) {
	// 		console.log("error")
	// 	});
	// setTimeout(function () { console.log("done") }, 100);
}

function getFav(objectId, text_obj) {
	var tmp = -1;
	Vegetables.equalTo("objectId", objectId)
		.fetch()
		.then(function (vegetables) {
			console.log("Fav取得");
			tmp = vegetables.fav;
			return tmp;
		})
		.catch(function (err) {
			console.log("error");
			return tmp;
		})

	setTimeout(function () { console.log("done"); text_obj.innerHTML = tmp; }, 1000);
	return tmp;
}

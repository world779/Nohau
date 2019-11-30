var appKey = "b0d79659fafe27fe567c7086b2a2a816efe837b448d377183292b3f367cef80a";
var clientKey = "386d15b14d1383343384514850c7ef64b47e9f75a86f4ebfed21557835003c8e";
var ncmb= new NCMB(appKey, clientKey);
var Vegetables = ncmb.DataStore("Vegetables");
function postNohau(elementId){
	var fav = document.getElementById("fav").value;
	var user_id = document.getElementById("user_id").value;
	var vegi_name = document.getElementById("vegi_name").value;
	var post_id = document.getElementById("post_id").value;
	var title = document.getElementById("title").value;
	var explain = document.getElementById("explain").value;
	var img = document.getElementById("img").value;
	var vegetables = new Vegetables();
		vegetables.set("fav", fav);
		vegetables.set("vegi_name", vegi_name);
		vegetables.set("post_id", post_id);
		vegetables.set("title", title);
		vegetables.set("explain", explain);
		vegetables.set("img", img);
		vegetables.save()
			.then(function(obj){
			console.log("保存");
			})
			.catch(function(err){
				console.log("error");
			});
}

function countFav() {	//count
	var fav = document.getElementById("fav").value;
	var post = document.getElementById("post_id").value;
	Vegetables.equalTo("post_id", post_id)
		.count()
		.fetch()
		.then(function(vegetables){
			// if (vagetables.count >= 0){
			// 	setResult(elementId, true, "success: "+ vagetables.count);
			// } else {
			// 	setResult(elementId, false, "error"+e);
			// }
     fav = vegetables.fav +1;
		 vegetables.set("fav", fav);
     vegetables.save()
		})
		.then(function(obj){
		 console.log("Favが加算されました。");
	 })
		.catch(function(err){
			console.log("error");
		});
}

function getNohau(elementId){
	    Vegetables.fetchAll()
			.then(function(obj){
						return obj;
						console.log("取得");
			})
			.catch(function(err){
				console.log("error")
			});
}

function getFav(post_id){
	    Vegetables.fetch()
			.then(function(obj){
						console.log("Fav取得");
						return obj.fav;
			})
			.catch(function(err){
				console.log("error");
			});
}

var Animal = function(name,sex){
	this.name = name;
	this.sex = sex;

	this.toString = function(){
		window.alert(this.name+" "+this.sex);
	}
}
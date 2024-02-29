function zaladuj() {
	if(this.id=='link1') document.getElementById("cos").innerHTML =  "<td  width='100%' valign='top'>{$profilefields}{$profile_attached}</td>";
	else if(this.id=='link2') document.getElementById("cos").innerHTML =  "<td  width='100%' valign='top'>{$modoptions}</td>";
}
var profil = getElementById('link1');
profil.addEventListener("click",zaladuj,false);
	
var mod = getElementById('link2');
mod.addEventListener("click",zaladuj,false);
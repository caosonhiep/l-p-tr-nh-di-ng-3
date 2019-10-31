//Class
class Xe{
    constructor(nhaSanXuat, namSanXuat){
        this.nhaSanXuat = nhaSanXuat
        this.namSanXuat = namSanXuat
    }

    xuat(){
        return this.nhaSanXuat + " " + this.namSanXuat + " Loại xe: " + this.loaiXeMay + " Chi phí: " + this.chiPhi + " Giá: " + this.tinhGiaBan();
    }
}

class XeMay extends Xe{
    constructor(nhaSanXuat, namSanXuat, loaixe, chiphi){
        super(nhaSanXuat,namSanXuat);
        this.loaiXeMay = loaixe
        this.chiPhi = chiphi
    }

    tinhGiaBan(){
        return this.chiPhi*2;
    }
}

//Object    
xemay1 = new XeMay("Honda",2000, "Yamaha",100);
xemay2 = new XeMay("Tokota",2000, "Yoake",150);
console.log(xemay1.xuat());
console.log(xemay2.xuat());


//Mảng Object
console.log("- - - - - Array Object - - - - - ");
var arrXeMay = [
   {
        tenxe: "Honda Cup",
        gia: 200
   },
   {
        tenxe: "Waves ",
        gia: 150
   }
]
arrXeMay.push({tenxe:"Tokotass3",gia:20550})
for(let ds of arrXeMay){
    console.log(ds.tenxe + " - " + ds.gia)
}

//Mảng Map lưu mảng key - value
console.log("- - - - - Array Map - - - - - ");
var arrMap = new Map([
    // keys , values
    ["tenxe","Toyata"],
    ["gia",500]
])
//arrMap.set("nam",2000);
//arrMap.delete("nam");
// arrMap.forEach((value,key) => {
//     console.log(key + " - " + value);
// });
for(let [keys,values] of arrMap){
    console.log(keys + " - " + values)
}

console.log("- - - - - Array Set - - - - - ");

//Mảng Set lưu giá trị values
let giatri = ["Honda","Toyota","BMM"];
let arrSet = new Set(giatri);
for(let value of arrSet){
    console.log(value)
}
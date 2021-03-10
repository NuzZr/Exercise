// Exercise
// no 2 (Inheritance)
class orang 
{
    constructor(nama,umur) 
    {
        this.nama = nama;
        this.umur = umur;
    }
    tidur()
    {
        console.log(`${this.nama} sedang tidur`);
    }
    makan() 
    {
        console.log(`${this.nama} sedang makan`);
    }
}
class pelajar extends orang 
{
    constructor (nama,umur,namaSekolah)
    {
        super(nama,umur);
        this.namaSekolah = namaSekolah;
    }
    belajar ()
    {
        console.log(`${this.nama} sedang belajar di ${this.namaSekolah}`);
    }
}
const user = new pelajar ("John","17","Unklab");
user.tidur();
user.makan();
user.belajar();
// Exercise
// no 1 (Class)

class orang 
{
    constructor(nama,umur) 
    {
        this.nama = nama;
        this.umur = umur;
    }

    bekerja() 
    {
        console.log(`${this.nama} sedang bekerja seperti biasa` );
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
const user1 = new orang ("fanuel","21");
user1.bekerja();
 

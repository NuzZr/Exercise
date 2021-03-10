// Nama : Wowor, Fanuel Ebenhaezer
// 1. callback
function mandi()
    {
        console.log("Mandi");
    }
function sarapan(callback)
    {
    setTimeout(() => {
        console.log("Sarapan");
        callback();
    },3000);
    }
function berangkatSekolah()
    {
        console.log("Berangkat Sekolah");
    }

mandi();
sarapan(berangkatSekolah);

// 2. promise
function helloWorld() 
    {
        return helloWorld = new Promise((resolve) => 
            {
                    resolve("Hello World");
            })
    };

let messsages = async () => 
{
    try
    {
        const msg = await helloWorld();
        setTimeout(() => 
        {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
};
messsages()

// 3. fetch
function ambilDataUser() 
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) 
        {
            return response.json();
        })
    .then(function (user) 
        {
            console.log(user);
        });
}
ambilDataUser()
const API_URL = "http://localhost:3000/api";


// ================= AMBIL DATA BARANG =================

async function getItems(){


    try{


        const response = await fetch(
            `${API_URL}/loan/items`
        );


        const items = await response.json();


        console.log(items);



        const itemList = document.getElementById("itemList");


        itemList.innerHTML = "";



        items.forEach(item => {



            itemList.innerHTML += `

            <tr>


                <td>
                    ${item.id}
                </td>


                <td>
                    ${item.name || item.itemName || "-"}
                </td>


                <td>
                    ${item.description || "-"}
                </td>


                <td>
                    Tersedia
                </td>


                <td>

                    <button 
                    class="btn btn-primary"
                    onclick="borrowItem(${item.id})">

                        Pinjam

                    </button>

                </td>


            </tr>

            `;



        });



    }catch(error){


        console.log(error);


        alert("Gagal mengambil data barang");


    }


}



// ================= PINJAM BARANG =================


async function borrowItem(id){


    const token = localStorage.getItem("token");



    if(!token){


        alert("Silahkan login terlebih dahulu");

        window.location.href = "index.html";

        return;


    }




    try{


        const response = await fetch(

            `${API_URL}/loan/borrow`,

            {


                method:"POST",


                headers:{


                    "Content-Type":"application/json",


                    "Authorization":`Bearer ${token}`


                },


                body:JSON.stringify({


                    itemId:id


                })


            }


        );



        const data = await response.json();



        console.log(data);




        if(response.ok){


            alert("Barang berhasil dipinjam");


            location.reload();



        }else{


            alert(
                data.message || 
                "Gagal meminjam barang"
            );


        }



    }catch(error){


        console.log(error);


        alert("Backend tidak terhubung");


    }


}




// Jalankan saat halaman dibuka

getItems();
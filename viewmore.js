
//console.log(localStorage.getItem("arr")[1].name);

/* copy of arr from(index page) into str
      str is a copy of arr(consits of original database) from index page */
var str = JSON.parse(localStorage.getItem("arr"));


var articleText = localStorage.getItem("value")
var listId = localStorage.getItem("id");
var isEditMode = false;


var text = document.querySelector('.blogdata');
var delbtn = document.querySelector('.delete');
var editbtn = document.querySelector('.edit');

text.textContent = articleText;

delbtn.addEventListener('click', () => {


    var i = 0;
    
    str.forEach(element => {
        if (element.id == listId) {
            console.log("inside delete " + element.id + " " + listId)



            // removes an item of indexNumber i  of 1 item//
            str.splice(i, 1);
            console.log(str);
            //updating deleted item into original arr through str//
            localStorage.setItem('arr', JSON.stringify(str));

            text.remove();
            text.textContent = "";

            window.location = "index.html"




        }
        i++;

    });
})





document.querySelector(".blogdata").disabled = true;

editbtn.addEventListener('click', () => {


    if (isEditMode == false) {

        var entireText = localStorage.getItem("value");
        text.textContent = entireText;

        document.querySelector(".blogdata").disabled = false;
        editbtn.textContent = "save"
        isEditMode = true;

    }
    else if (isEditMode == true) {
        document.querySelector(".blogdata").disabled = true;
        editbtn.textContent = "edit"
        isEditMode = false;

        var entireText = text.value;
        //localStorage.setItem("myText" , entireText);
        //localStorage.setItem("value" , entireText);



        var i = 0;
        str.forEach(element => {
            if (element.id == listId) {
                // any changes made in edit time updating into temp str//   
                console.log(" outside " + entireText + " ...");


                /* after editing the textbox and if the textvalue is emptyy then delete blog list
                 in mainpage also via updating in localstorage of main arr */

                if (entireText == "") {
                    console.log("empty.....");
                    str.splice(i, 1);
                    //updating deleted item into original arr through str//
                    localStorage.setItem('arr', JSON.stringify(str));
                    window.location="index.html"

                }
                else {


                    str[i].name = entireText;
                    // finally updating to main arr of localstorage database//
                    localStorage.setItem('arr', JSON.stringify(str));
                    localStorage.value = entireText;

                }
            }
            i++;

        });
    }

})


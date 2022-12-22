import items from "./items.js";
window.onload = () => {
    const heading = document.getElementById("item-list-heading");
    const itemList = document.getElementById("item-list");
    const modalItem = document.getElementById("modalItem");
    const modalItemClose = document.getElementById("close");
    const modalItemImage = document.getElementById("modalItemImage");
    const modalItemHeading = document.getElementById("modalItemHeading");
    const tcModal = document.getElementById("tcModal");
    const tCclose = document.getElementById("tCclose");
    const tcButton = document.getElementById("tcButton");

    modalItemClose.addEventListener("click", function () {
        modalItem.style.display = "none";
    });

    tCclose.addEventListener("click", function () {
        tcModal.style.display = "none";
    });

    tcButton.addEventListener("click", function () {
        tcModal.style.display = "flex";
    });

    items && items.map((data, index) => {
        console.log(data);
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("class", `link ${data?.id === 1 && "active"}`);
        a.addEventListener("click", () => show(index, a));
        a.text = data?.title;
        li.appendChild(a);
        heading.appendChild(li);
        if (data?.id === 1) {
            renderItem(data);
        }
    });

    $('.item #item-list-heading  a').on( 'click', function () {
        $('.item #item-list-heading li').find('a.active').removeClass('active');
        $(this).closest('.dropdown').find('a:first').addClass("active");
        $(this).addClass("active");
    });

    function renderItem(data) {
        data?.item && data?.item.map(i => {
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            const card = document.createElement("div");
            card.setAttribute("class", "card");
            const container = document.createElement("div");
            container.setAttribute("class", "container");
            const img = document.createElement("img");
            img.setAttribute("src", `./images/${data?.id}/${i?.image && i?.image}`);
            container.setAttribute("class", "container");
            const heading = document.createElement("div");
            heading.setAttribute("class", "heading");
            heading.innerText = i?.title;
            let a = document.createElement("a");
            a.setAttribute("class", "link");
            a.text = "Order by Whatsapp"

            a.addEventListener("click", function () {
                modalItem.style.display = "flex";
                modalItemImage.setAttribute("src", `./images/${data?.id}/${i?.image && i?.image}`);
                modalItemHeading.innerText = i?.title;
            });
            box.appendChild(card);
            card.appendChild(img);
            card.appendChild(container);
            container.appendChild(heading);
            container.appendChild(a);
            itemList.appendChild(box)
        });
    }

    function show(index, a) {
        itemList.innerHTML = ""; 
        renderItem(items[index]); 
    }
}
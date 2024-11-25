const main = () => {
    document.getElementById("grow-me").classList.add("big")
    document.getElementById("shrink-me").classList.remove("big")

    const listItems = document.querySelectorAll("li")
    listItems.forEach(item => console.log(item.textContent))

    const link = document.querySelector("a.link")
    link.href = "https://www.example.com"
    link.textContent = "somewhere"

    document.getElementById("hide-me").style.display = "none"
    document.getElementById("show-me").style.display = "block"

    const userName = document.getElementById("name").value 
    document.querySelector("h1").textContent = `Welcome ${userName}!`



    

}

main()
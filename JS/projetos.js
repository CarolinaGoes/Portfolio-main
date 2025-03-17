function addIframe() {
    let container = document.querySelector(".project-content"); 
    let existingIframe = container.querySelector("iframe");

    if (existingIframe) {
        container.innerHTML = `
            <p>Projeto de landing page</p> 
            <p>Cardápio de doces</p>
            <h2>HTML | CSS</h2>
        `; 
    } else {
        let iframe = document.createElement("iframe"); 
        iframe.src = "https://www.example.com"; 
        iframe.style.width = "100%"; 
        iframe.style.height = "100%"; 

        container.innerHTML = ''; 
        container.appendChild(iframe); 
    }
}

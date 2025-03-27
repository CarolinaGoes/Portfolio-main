
// ENTRE EM CONTATO DIRETO PELO: https://wa.me/5511972230817?text=Olá,%20gostaria%20de%20entrar%20em%20contato!

// *********************************************************************
// *██╗    ██╗██╗  ██╗ █████╗ ████████╗███████╗ █████╗ ██████╗ ██████╗ *
// *██║    ██║██║  ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗*
// *██║ █╗ ██║███████║███████║   ██║   ███████╗███████║██████╔╝██████╔╝*
// *██║███╗██║██╔══██║██╔══██║   ██║   ╚════██║██╔══██║██╔═══╝ ██╔═══╝ *
// *╚███╔███╔╝██║  ██║██║  ██║   ██║   ███████║██║  ██║██║     ██║     *
// * ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝     *
// *********************************************************************
// *************************************************************************************
// * ██╗ ██╗ █████╗ ███████╗██████╗ ██████╗ ██████╗        ██████╗  █████╗  ██╗███████╗*
// *███║███║██╔══██╗╚════██║╚════██╗╚════██╗╚════██╗      ██╔═████╗██╔══██╗███║╚════██║*
// *╚██║╚██║╚██████║    ██╔╝ █████╔╝ █████╔╝ █████╔╝█████╗██║██╔██║╚█████╔╝╚██║    ██╔╝*
// * ██║ ██║ ╚═══██║   ██╔╝ ██╔═══╝ ██╔═══╝  ╚═══██╗╚════╝████╔╝██║██╔══██╗ ██║   ██╔╝ *
// * ██║ ██║ █████╔╝   ██║  ███████╗███████╗██████╔╝      ╚██████╔╝╚█████╔╝ ██║   ██║  *
// * ╚═╝ ╚═╝ ╚════╝    ╚═╝  ╚══════╝╚══════╝╚═════╝        ╚═════╝  ╚════╝  ╚═╝   ╚═╝  *
// *************************************************************************************

function addIframe(url) {
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
        iframe.src = url; 
        iframe.style.width = "100%"; 
        iframe.style.height = "100%"; 

        container.innerHTML = ''; 
        container.appendChild(iframe); 
    }
}

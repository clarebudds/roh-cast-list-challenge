fetch('https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban')


    .then(response => response.json())
    .then(data => {
     
    const title = data.title;
    const date = data.date;
    const shortDescription = data.shortDescription;
    const creatives = data.creatives;

    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = `
        <p>Title: ${title}</p>
        <p>Date: ${date}</p>
        <p>Description: ${shortDescription}</p>
        <p>Creatives: ${creatives}</p>
    `;
    })
    .catch(error => {
    console.error("Error fetching data:", error);
    });
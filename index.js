fetch('https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban')
    .then(response => response.json())
    .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });